"use client";

import React from "react";
import { Navbar, Footer } from "@/components";
import {
  DashboardIcon,
  PaymentInfoIcon,
  TronclassIcon,
  TranscriptIcon,
  AUNewsIcon,
  LogoutIcon,
} from "~/public/icons";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar isSearch />
      <section className="grid grid-cols-20 py-12 layout">
        <div className="col-start-2  col-end-[20] flex gap-12 h-fit">
          <div className="min-w-[220px] max-w-[320px] bg-gradient-to-b from-[#36967E] to-[#4AA39F] rounded-3xl lg:flex flex-col justify-center items-center py-11 font-satoshi hidden h-fit">
            <div className="flex flex-col gap-8 w-full items-center justify-center">
              <div className="flex flex-col gap-5">
                <div className="flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5">
                  <DashboardIcon className="w-[26px] h-[26px]" />
                  <a href="">Dashboard</a>
                </div>
                <div className="flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5">
                  <PaymentInfoIcon className="w-[26px] h-[26px]" />
                  <a href="">Payment Info</a>
                </div>
                <div className="flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5">
                  <TronclassIcon className="w-[26px] h-[26px]" />
                  <a href="">Tronclass</a>
                </div>
                <div className="flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5">
                  <TranscriptIcon className="w-[26px] h-[26px]" />
                  <a href="">Transcript</a>
                </div>
                <div className="flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 p-5">
                  <AUNewsIcon className="w-[26px] h-[26px]" />
                  <a href="">AU News</a>
                </div>
                <div className="flex gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white mt-14 transition-all delay-75 hover:bg-red-700/50 p-5">
                  <LogoutIcon className="w-[26px] h-[26px]" />
                  <a href="">Logout</a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full font-satoshi">{children}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
