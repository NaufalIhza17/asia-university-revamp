"use client";

import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@/components";
import {
  DashboardIcon,
  PaymentInfoIcon,
  TronclassIcon,
  TranscriptIcon,
  AUNewsIcon,
  LogoutIcon,
} from "~/public/icons";
import { redirect, usePathname } from "next/navigation";
import { cn } from "@/hooks/cn";
import { dashboardPath } from "@/staticData/dashboardPath";
import Cookies from "js-cookie";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!Cookies.get("ACCESS_TOKEN")
  );
  const [isPopUp, setIsPopUp] = useState(true);
  const pathname = usePathname();
  const onClickLogout = () => {
    Cookies.remove("ACCESS_TOKEN");
    Cookies.remove("REFRESH_TOKEN");
    setIsLoggedIn(false);
  };

  const togglePopUp = () => {
    setIsPopUp(!isPopUp);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      redirect("/login");
    }
  }, [isLoggedIn]);

  return (
    <main className="relative">
      <Navbar isSearch />
      <section className="grid grid-cols-20 py-12 layout">
        <div className="col-start-2  col-end-[20] flex gap-12 h-fit">
          <div className="min-w-[220px] max-w-[320px] bg-gradient-to-b from-[#36967E] to-[#4AA39F] rounded-3xl lg:flex flex-col justify-center items-center py-11 font-satoshi hidden h-fit">
            <div className="flex flex-col gap-8 w-full items-center justify-center">
              <div className="flex flex-col gap-5">
                {dashboardPath.map((path, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5",
                      pathname === path.slug && "text-white fill-white"
                    )}
                  >
                    {path.name === "Dashboard" && (
                      <DashboardIcon className="w-[26px] h-[26px]" />
                    )}
                    {path.name === "Payment Info" && (
                      <PaymentInfoIcon className="w-[26px] h-[26px]" />
                    )}
                    {path.name === "Tronclass" && (
                      <TronclassIcon className="w-[26px] h-[26px]" />
                    )}
                    {path.name === "Transcript" && (
                      <TranscriptIcon className="w-[26px] h-[26px]" />
                    )}
                    {path.name === "AU News" && (
                      <AUNewsIcon className="w-[26px] h-[26px]" />
                    )}
                    <a href={path.slug}>{path.name}</a>
                  </div>
                ))}
                <div
                  className={cn(
                    "flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5"
                  )}
                  onClick={() => onClickLogout()}
                >
                  <LogoutIcon className="w-[26px] h-[26px]" />
                  <p>Logout</p>
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
