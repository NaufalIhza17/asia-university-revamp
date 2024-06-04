"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardIcon from "~/public/icons/dashboard-icon.svg";
import PaymentInfoIcon from "~/public/icons/payment-info.svg";
import CourseInfoIcon from "~/public/icons/course-info.svg";
import TranscriptIcon from "~/public/icons/transcript.svg";
import LogoutIcon from "~/public/icons/logout.svg";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/hooks/cn";
import { dashboardPath } from "@/staticData/dashboardPath";
import Cookies from "js-cookie";
import { useUser } from "@/hooks/userContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!Cookies.get("ACCESS_TOKEN")
  );
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    if (!isLoggedIn) {
      Cookies.remove("ACCESS_TOKEN");
      Cookies.remove("REFRESH_TOKEN");
      setIsLoggedIn(false);
      router.push("/login");
    }
    if (user?.is_admin) {
      router.push("/admin/dashboard");
    }
  }, [isLoggedIn, router, user?.is_admin]);

  const onClickLogout = () => {
    Cookies.remove("ACCESS_TOKEN");
    Cookies.remove("REFRESH_TOKEN");
    setIsLoggedIn(false);
  };

  return (
    <main className="relative">
      <Navbar isSearch onClickLogout={() => onClickLogout} />
      <section className="grid grid-cols-20 py-12 layout min-h-[calc(100vh-204px)] md:min-h-[calc(100vh-223px)]">
        <div className="col-start-2  col-end-[20] flex gap-12 h-fit">
          <div className="min-w-[220px] max-w-[320px] bg-gradient-to-b from-[#36967E] to-[#4AA39F] rounded-3xl lg:flex flex-col justify-center items-center py-11 font-satoshi hidden h-fit">
            <div className="flex flex-col gap-8 w-full items-center justify-center">
              <div className="flex flex-col gap-5">
                {dashboardPath.map((path, index) => (
                  <button
                    key={index}
                    className={cn(
                      "flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5 cursor-pointer",
                      pathname === path.slug && "text-white fill-white"
                    )}
                    onClick={() => (window.location.href = path.slug)}
                  >
                    {path.name === "Dashboard" && (
                      <DashboardIcon className="w-[26px] h-[26px]" />
                    )}
                    {path.name === "Payment Info" && (
                      <PaymentInfoIcon className="w-[26px] h-[26px]" />
                    )}
                    {path.name === "Course Info" && (
                      <CourseInfoIcon className="w-[26px] h-[26px]" />
                    )}
                    {path.name === "Transcript" && (
                      <TranscriptIcon className="w-[26px] h-[26px]" />
                    )}
                    <p className="select-none">{path.name}</p>
                  </button>
                ))}
                <div
                  className={cn(
                    "flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5 cursor-pointer"
                  )}
                  onClick={onClickLogout}
                >
                  <LogoutIcon className="w-[26px] h-[26px]" />
                  <p className="select-none">Logout</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full font-satoshi">{children}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
