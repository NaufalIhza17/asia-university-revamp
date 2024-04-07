"use client";

import { useState, useEffect } from "react";
import { AULogo, MenuNavbar } from "~/public/icons";
import { cn } from "@/hooks/cn";
import useWindowWidth from "@/hooks/useWindowWidth";
import {
  DashboardIcon,
  PaymentInfoIcon,
  TronclassIcon,
  TranscriptIcon,
  AUNewsIcon,
  LogoutIcon,
} from "~/public/icons";

interface NavbarProps {
  className?: string;
  isSearch?: boolean;
}

export default function Navbar({ className, isSearch = false }: NavbarProps) {
  const windowWidth = useWindowWidth();
  const [isSlide, setIsSlide] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toogleSlide = () => {
    setIsSlide(!isSlide);
  };

  useEffect(() => {
    if (windowWidth < 1024) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);
  return (
    <section
      className={cn("max-w-screen bg-[#36967E] py-4 relative", className)}
    >
      <div className="layout grid grid-cols-12 items-center">
        <div className="flex items-center justify-start px-[clamp(0.7rem,-0.88rem+3.756vw,2.5rem)] col-span-6">
          <AULogo className="w-[133px] h-[44px] md:w-[190px] md:h-[63px]" />
        </div>
        <div className="col-span-6 flex gap-2">
          {!isSearch ? (
            <div className="flex items-center justify-end px-[clamp(0rem,-0.88rem+3.756vw,2.5rem)]">
              <div className="bg-[#D9D9D9] w-11 h-11 rounded-full"></div>
            </div>
          ) : (
            <div
              className={cn(
                "w-full flex items-center pr-2 lg:px-[clamp(0rem,-0.88rem+3.756vw,2.5rem)]",
                isMobile ? "justify-end" : "justify-end"
              )}
            >
              <input
                className={cn(
                  "max-w-[315px] w-full py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-gray-400",
                  "border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
                )}
                placeholder="Search..."
              ></input>
            </div>
          )}
          {isSearch && isMobile && (
            <div
              className="flex items-center justify-end"
              onClick={toogleSlide}
            >
              <MenuNavbar className="min-w-[32px] min-h-[32px] rounded-full border-2 border-white" />
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <div
        className={cn(
          "absolute left-0 top-[4.7rem] md:top-[5.9rem] h-fit w-full bg-[#53c4a7] transition-transform py-2 flex justify-center",
          isSlide && isMobile ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="w-full text-white grid grid-cols-2 sm:grid-cols-3 text-center px-10 gap-y-2">
          <div className="flex items-center justify-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2">
            <DashboardIcon className="w-[20px] h-[20px]" />
            <a href="">Dashboard</a>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2">
            <PaymentInfoIcon className="w-[20px] h-[20px]" />
            <a href="">Payment Info</a>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2">
            <TronclassIcon className="w-[20px] h-[20px]" />
            <a href="">Tronclass</a>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2">
            <TranscriptIcon className="w-[20px] h-[20px]" />
            <a href="">Transcript</a>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2">
            <AUNewsIcon className="w-[20px] h-[20px]" />
            <a href="">AU News</a>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2">
            <LogoutIcon className="w-[20px] h-[20px]" />
            <a href="">Logout</a>
          </div>
        </div>
      </div>
    </section>
  );
}
