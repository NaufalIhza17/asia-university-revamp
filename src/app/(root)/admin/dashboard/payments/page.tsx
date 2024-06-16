"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getPayments, getUser } from "@/services/api";
import { useEffect, useState } from "react";
import { updatePayment } from "@/services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PaymentData } from "@/interface/page";
import TablePayments from "@/components/Tables/TablePayments";

export default function Payments() {
  const [paymentData, setPaymentData] = useState<PaymentData[]>([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await getPayments();
      const payments = response.data;
      const paymentsWithUsers = await Promise.all(
        payments.map(async (payment: PaymentData) => {
          try {
            const userResponse = await getUser({ id: payment.user_id });
            return {
              ...payment,
              username: userResponse.data.full_name,
            };
          } catch (userError) {
            console.error(
              `Error fetching user data for user_id: ${payment.user_id}`,
              userError
            );
            return payment;
          }
        })
      );
      setPaymentData(paymentsWithUsers);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  const onClickPatchPayment = async (paymentid: string, status: string) => {
    try {
      const res = await updatePayment({ paymentid: paymentid, status: status });
      if (res.status === 200) {
        toast.success("Payment status updated successfully");
        fetchPayments();
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(`Payment status update failed: ${err.response.data.message}`);
        console.log("Payment status update Error: ", err.response.data.message);
      } else {
        toast.error("Payment status update failed: An unknown error occurred");
        console.log("Payment status update Error: Unknown error", err);
      }
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="w-full py-3 border-b mb-5">
        <h1 className="text-2xl font-bold">List of Payments</h1>
      </div>
      <TablePayments
        paymentData={paymentData}
        onClickPatchPayment={onClickPatchPayment}
      />
    </DefaultLayout>
  );
}
