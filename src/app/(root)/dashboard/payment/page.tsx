"use client"

import PaymentBannerMain from "~/public/images/payment-banner-main.svg";
import PrintIcon from "~/public/images/print-icon.svg";
import getDateValue from "@/hooks/getDateValue";
import { useUser } from "@/hooks/userContext";
import { useEffect } from "react";

export default function Payment() {
  const month = getDateValue({ options: "month" });
  const date = getDateValue({ options: "date" });
  const year = getDateValue({ options: "year" });

  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      console.log(user);
    }
  }, [user]);

  return (
    <section>
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
        <table className="table-auto border border-gray-300 rounded-lg">
          <tbody>
            <tr>
              <td
                className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white w-48"
                style={{ width: "200px" }}
              >
                Name
              </td>
              <td className="text-left pl-8 py-2 border border-gray-300 text-[#123E44] bg-white">
                {user?.full_name}
              </td>
            </tr>
            <tr className="bg-[#F0F0F0]">
              <td
                className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44] w-48"
                style={{ width: "200px" }}
              >
                Student ID
              </td>
              <td className="text-left pl-8 py-2 border border-gray-300 text-[#123E44]">
                {user?.user_id}
              </td>
            </tr>
            <tr>
              <td
                className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white w-48"
                style={{ width: "200px" }}
              >
                Semester
              </td>
              <td className="text-left pl-8 py-2 border border-gray-300 text-[#123E44] bg-white">
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                </select>
              </td>
            </tr>
            <tr className="bg-[#F0F0F0]">
              <td
                className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44] w-48"
                style={{ width: "200px" }}
              >
                Payment Method
              </td>
              <td className="text-left pl-8 py-2 border border-gray-300 text-[#123E44]">
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="Credit Card">Credit Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <button className="mt-4 flex items-center rounded-full bg-[#2D937C] text-white font-bold px-6 py-2 hover:bg-[#1D6F58] transition-colors duration-300">
            <PrintIcon className="w-6 h-6 mr-2" /> Print Receipt
          </button>
        </div>
        <div className="mt-4">
          <p className="text-[#123E44]">NB :</p>
          <p className="text-[#123E44]">
            1. Make sure that the correct year period-two tards in front of the
            school, the first three yards represent the following : 1 st
            Semester, 2 nd Semester, Summer Course 1 st Semester, Summer Course
            2nd Semester, Winter Course Semester.
          </p>
          <p className="text-[#123E44]">
            2. Report to PDF format, if you can not print, please instal PDF
            Reader
          </p>
        </div>
      </div>
    </section>
  );
}
