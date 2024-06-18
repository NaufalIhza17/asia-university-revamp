"use client"

import Link from "next/link";
import getDateValue from "@/hooks/getDateValue";
import DashboardBannerMain from "~/public/images/dashboard-banner-main.svg"
import ELearning from "~/public/icons/elearning.svg";
import Library from "~/public/icons/library.svg";
import Gear from "~/public/icons/gear.svg";
import Office from "~/public/icons/office.svg";
import Folder from "~/public/icons/folder.svg";
import Eats from "~/public/icons/eats.svg";
import { useUser } from "@/hooks/userContext";

export default function DashboardHome() {
  const month = getDateValue({ options: "month" });
  const date = getDateValue({ options: "date" });
  const year = getDateValue({ options: "year" });
  
  const { user } = useUser();

  return (
    <section>
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-white px-8 md:px-16 py-7 md:py-14 relative overflow-hidden">
        <div className="flex flex-col font-satoshi relative z-10">
          <p className="pb-8">
            {month}, {date} {year}
          </p>
          <p className="text-5xl font-bold">Welcome back, {user?.full_name}</p>
          <p className="pt-3">Always stay updated in your student portal</p>
        </div>
        <DashboardBannerMain
          width="392"
          height="273"
          className="absolute right-0 bottom-0"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8">
        <Link
          href={"dashboard/portfolio"}
          className="p-3 bg-white w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl shadow-md group hover:bg-[#36967E] transition-all"
        >
          <ELearning
            width={80}
            height={80}
            className=" fill-[#36967E] group-hover:fill-white"
          />
          <p className="font-medium text-xl text-[#36967E] group-hover:text-white text-center">
            Portfolio Data
          </p>
        </Link>
        <Link
          href="https://aulib.asia.edu.tw/webpac/shelf_user.cfm"
          className="p-3 bg-white w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl shadow-md group hover:bg-[#36967E] transition-all"
        >
          <Library
            width={80}
            height={80}
            className="fill-[#36967E] group-hover:fill-white"
          />
          <p className="font-medium text-xl text-[#36967E] group-hover:text-white text-center">
            Library Profile
          </p>
        </Link>
        <Link
          href="https://ic.asia.edu.tw/zh_tw/software/campus_agreement_software/software_list"
          className="p-3 bg-white w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl shadow-md group hover:bg-[#36967E] transition-all"
        >
          <Gear
            width={80}
            height={80}
            className="fill-[#36967E] group-hover:fill-white"
          />
          <p className="font-medium text-xl text-[#36967E] group-hover:text-white text-center">
            School Licensing Service
          </p>
        </Link>
        <Link
          href="https://outlook.office.com/mail/"
          className="p-3 bg-white w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl shadow-md group hover:bg-[#36967E] transition-all"
        >
          <Office
            width={80}
            height={80}
            className="fill-[#36967E] group-hover:fill-white"
          />
          <p className="font-medium text-xl text-[#36967E] group-hover:text-white text-center">
            Office 365 Webmail
          </p>
        </Link>
        <Link
          href="https://webap.asia.edu.tw/cfd2020/#/X01/X01FALL"
          className="p-3 bg-white w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl shadow-md group hover:bg-[#36967E] transition-all"
        >
          <Folder
            width={80}
            height={80}
            className="fill-[#36967E] group-hover:fill-white"
          />
          <p className="font-medium text-xl text-[#36967E] group-hover:text-white text-center">
            Learning Activities Registration System
          </p>
        </Link>
        <Link
          href="https://line.me/R/ti/p/%40343hambs"
          className="p-3 bg-white w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl shadow-md group hover:bg-[#36967E] transition-all"
        >
          <Eats
            width={80}
            height={80}
            className="fill-[#36967E] group-hover:fill-white"
          />
          <p className="font-medium text-xl text-[#36967E] group-hover:text-white text-center">
            AU Eats
          </p>
        </Link>
      </div>
    </section>
  );
}
