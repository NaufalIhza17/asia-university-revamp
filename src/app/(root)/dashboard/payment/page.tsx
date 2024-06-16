"use client";

import PaymentBannerMain from "~/public/images/payment-banner-main.svg";
import getDateValue from "@/hooks/getDateValue";
import { useUser } from "@/hooks/userContext";
import { useEffect, useState } from "react";
import { updatePayment, getPayment } from "@/services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Payment() {
  const month = getDateValue({ options: "month" });
  const date = getDateValue({ options: "date" });
  const year = getDateValue({ options: "year" });
  const [paymentId, setPaymentId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [primaryTuition, setPrimaryTuition] = useState<number | null>(null);
  const [additionalTuition, setAdditionalTuition] = useState<number | null>(
    null
  );
  const [scholarship, setScholarship] = useState<number | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    fetchPayment();
  }, []);

  const fetchPayment = async () => {
    try {
      if (user?._id) {
        const response = await getPayment({ user_id: user._id });
        if (response.data != null) {
          setPaymentId(response.data.ID);
          setPrimaryTuition(response.data.primary_tuition);
          setAdditionalTuition(response.data.additional_tuition);
          setScholarship(response.data.scholarship);
          setPaymentStatus(response.data.status);
        } else {
          setPaymentId("");
          setPrimaryTuition(null);
          setAdditionalTuition(null);
          setScholarship(null);
          setPaymentStatus("");
        }
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(
          `Payment status update failed: ${err.response.data.message}`
        );
        console.log("Payment status update Error: ", err.response.data.message);
      } else {
        toast.error("Payment status update failed: An unknown error occurred");
        console.log("Payment status update Error: Unknown error", err);
      }
    }
  };

  const onClickPatchPayment = async (paymentid: string, status: string) => {
    try {
      const res = await updatePayment({ paymentid: paymentid, status: status });
      if (res.status === 200) {
        toast.success("Payment status updated successfully");
        fetchPayment();
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(
          `Payment status update failed: ${err.response.data.message}`
        );
        console.log("Payment status update Error: ", err.response.data.message);
      } else {
        toast.error("Payment status update failed: An unknown error occurred");
        console.log("Payment status update Error: Unknown error", err);
      }
    }
  };

  return (
    <section>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-white px-8 md:px-16 py-7 md:py-14 relative overflow-hidden">
        <div className="flex flex-col font-satoshi relative z-10">
          <p className="pb-8">
            {month}, {date} {year}
          </p>
          <p className="text-5xl font-bold">Payment Information</p>
          <p className="pt-3">Always stay updated in your student portal</p>
        </div>
        <PaymentBannerMain
          width="392"
          height="273"
          className="absolute right-0 top-0"
        />
      </div>
      <div className="flex flex-col mt-8">
        <table className="table-auto border rounded-lg">
          <tbody>
            <tr>
              <td
                className="text-left pl-8 pr-4 py-2 text-[#123E44] bg-white w-48"
                style={{ width: "200px" }}
              >
                Name
              </td>
              <td className="text-left pl-8 py-2 text-[#123E44] bg-white">
                {user?.full_name}
              </td>
            </tr>
            <tr className="bg-[#2D937C]/10">
              <td
                className="text-left pl-8 pr-4 py-2 text-[#123E44] w-48"
                style={{ width: "200px" }}
              >
                Student ID
              </td>
              <td className="text-left pl-8 py-2 text-[#123E44]">
                {user?.user_id ? (
                  user.user_id
                ) : (
                  <span className="italic text-red">Needs to be verified</span>
                )}
              </td>
            </tr>
            {user?.user_id && (
              <tr>
                <td
                  className="text-left pl-8 pr-4 py-2 text-[#123E44] bg-white w-48"
                  style={{ width: "200px" }}
                >
                  Primary Tuition
                </td>
                <td className="text-left pl-8 py-2 text-[#123E44] bg-white">
                  {primaryTuition}
                </td>
              </tr>
            )}
            {user?.user_id && (
              <tr className="bg-[#2D937C]/10">
                <td
                  className="text-left pl-8 pr-4 py-2 text-[#123E44] w-48"
                  style={{ width: "200px" }}
                >
                  Additional Tuition
                </td>
                <td className="text-left pl-8 py-2 text-[#123E44]">
                  {additionalTuition}
                </td>
              </tr>
            )}
            {user?.user_id && (
              <tr>
                <td
                  className="text-left pl-8 pr-4 py-2 text-[#123E44] bg-white w-48"
                  style={{ width: "200px" }}
                >
                  Scholarship
                </td>
                <td className="text-left pl-8 py-2 text-[#123E44] bg-white">
                  {scholarship}
                </td>
              </tr>
            )}
            {user?.user_id && (
              <tr className="bg-[#2D937C]/10">
                <td
                  className="text-left pl-8 pr-4 py-2 text-[#123E44] w-48"
                  style={{ width: "200px" }}
                >
                  Total to pay
                </td>
                <td className="text-left pl-8 py-2 text-[#123E44]">
                  {primaryTuition! + additionalTuition! - scholarship!}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {user?.user_id && paymentStatus === "not paid" && (
          <div className="mt-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#2D937C] border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-zinc-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-zinc-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-zinc-500">SVG, PNG, or JPG</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <button
              onClick={() => onClickPatchPayment(paymentId, "pending")}
              className="bg-[#2D937C] rounded-md w-full px-4 py-2 mt-4"
            >
              <p className="font-medium text-white">Upload</p>
            </button>
          </div>
        )}
        {user?.user_id && paymentStatus === "pending" && (
          <div className="mt-4">
            <div className="bg-warning/20 rounded-md w-full px-4 py-2 mt-4">
              <p className="font-medium text-warning flex justify-center italic">
                Pending
              </p>
            </div>
          </div>
        )}
        {user?.user_id && paymentStatus === "paid" && (
          <div className="mt-4">
            <div className="bg-success/20 rounded-md w-full px-4 py-2 mt-4">
              <p className="font-medium text-success flex justify-center italic">
                Paid
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
