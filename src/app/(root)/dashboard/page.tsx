"use client";

import { useState } from "react";
import { DashboardBannerMain } from "~/public/images";
import { PortofolioData, GreenPortofolioData } from "~/public/images";
import { LibraryProfile, GreenLibraryProfile } from "~/public/images";
import { SchoolLicensing, GreenSchoolLicensing } from "~/public/images";
import { Office365, GreenOffice365 } from "~/public/images";
import { LearningActivities, GreenLearningActivities } from "~/public/images";
import { AuEats, GreenAuEats } from "~/public/images";

export default function DashboardHome() {
  const [isPortofolioDataSelected, setIsPortofolioDataSelected] = useState(false);
  const [isLibraryProfileSelected, setIsLibraryProfileSelected] = useState(false);
  const [isSchoolLicensingSelected, setIsSchoolLicensingSelected] = useState(false);
  const [isOffice365Selected, setIsOffice365Selected] = useState(false);
  const [isLearningActivitiesSelected, setIsLearningActivitiesSelected] = useState(false);
  const [isAuEatsSelected, setIsAuEatsSelected] = useState(false);

  return (
    <section>
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-white px-16 py-14 relative overflow-hidden">
        <div className="flex flex-col font-satoshi relative z-50">
          <p className="pb-8">March, 03 2024</p>
          <p className="text-5xl font-bold">Welcome back, User</p>
          <p className="pt-3">Always stay updated in your student portal</p>
        </div>
        <DashboardBannerMain
          width="392"
          height="273"
          className="absolute right-0 top-0"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8">
        {/* 6 Grid items */}
        <a
          href="https://aulib.asia.edu.tw/webpac/shelf_user.cfm"
          onMouseEnter={() => setIsPortofolioDataSelected(true)}
          onMouseLeave={() => setIsPortofolioDataSelected(false)}
        >
          <div className="bg-white h-48 w-48 flex justify-center items-center rounded-3xl shadow-md hover:animate-pulse animate-none transition-transform duration-300">
            {isPortofolioDataSelected ? (
              <GreenPortofolioData className="h-full w-full rounded-3xl" />
            ) : (
              <PortofolioData className="h-full w-full rounded-3xl" />
            )}
          </div>
        </a>
        <a
          href="https://aulib.asia.edu.tw/webpac/shelf_user.cfm"
          onMouseEnter={() => setIsLibraryProfileSelected(true)}
          onMouseLeave={() => setIsLibraryProfileSelected(false)}
        >
          <div className="bg-white h-48 w-48 flex justify-center items-center rounded-3xl shadow-md hover:animate-pulse animate-none transition-transform duration-300">
            {isLibraryProfileSelected ? (
              <GreenLibraryProfile className="h-full w-full rounded-3xl" />
            ) : (
              <LibraryProfile className="h-full w-full rounded-3xl" />
            )}
          </div>
        </a>
        <a
          href="https://ic.asia.edu.tw/zh_tw/software/campus_agreement_software/software_list"
          onMouseEnter={() => setIsSchoolLicensingSelected(true)}
          onMouseLeave={() => setIsSchoolLicensingSelected(false)}
        >
          <div className="bg-white h-48 w-48 flex justify-center items-center rounded-3xl shadow-md hover:animate-pulse animate-none transition-transform duration-300">
            {isSchoolLicensingSelected ? (
              <GreenSchoolLicensing className="h-full w-full rounded-3xl" />
            ) : (
              <SchoolLicensing className="h-full w-full rounded-3xl" />
            )}
          </div>
        </a>
        <a
          href="https://outlook.office.com/mail/"
          onMouseEnter={() => setIsOffice365Selected(true)}
          onMouseLeave={() => setIsOffice365Selected(false)}
        >
          <div className="bg-white h-48 w-48 flex justify-center items-center rounded-3xl shadow-md hover:animate-pulse animate-none transition-transform duration-300">
            {isOffice365Selected ? (
              <GreenOffice365 className="h-full w-full rounded-3xl" />
            ) : (
              <Office365 className="h-full w-full rounded-3xl" />
            )}
          </div>
        </a>
        <a
          href="https://webap.asia.edu.tw/cfd2020/#/X01/X01FALL"
          onMouseEnter={() => setIsLearningActivitiesSelected(true)}
          onMouseLeave={() => setIsLearningActivitiesSelected(false)}
        >
          <div className="bg-white h-48 w-48 flex justify-center items-center rounded-3xl shadow-md hover:animate-pulse animate-none transition-transform duration-300">
            {isLearningActivitiesSelected ? (
              <GreenLearningActivities className="h-full w-full rounded-3xl" />
            ) : (
              <LearningActivities className="h-full w-full rounded-3xl" />
            )}
          </div>
        </a>
        <a
          href="https://line.me/R/ti/p/%40343hambs"
          onMouseEnter={() => setIsAuEatsSelected(true)}
          onMouseLeave={() => setIsAuEatsSelected(false)}
        >
          <div className="bg-white h-48 w-48 flex justify-center items-center rounded-3xl shadow-md hover:animate-pulse animate-none transition-transform duration-300">
            {isAuEatsSelected ? (
              <GreenAuEats className="h-full w-full rounded-3xl" />
            ) : (
              <AuEats className="h-full w-full rounded-3xl" />
            )}
          </div>
        </a>
      </div>
    </section>
  );
}
