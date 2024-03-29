"use client";

import Image from "next/image";
import { useState } from "react";
import { AULogo, MenuNavbar } from "~/public/icons";
import { cn } from "@/hooks/cn";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isSlide, setIsSlide] = useState(false);

  const toogleSlide = () => {
    setIsSlide(!isSlide);
  };
  return (
    <section
      className={cn(
        "max-w-screen bg-[#36967E] py-4 rounded-b-[20px] border-b-4 border-[#F7FDFF]/40 relative",
        className
      )}
    >
      <div className="layout grid grid-cols-4 items-center">
        <div
          className="flex items-center justify-start px-[clamp(0rem,-0.88rem+3.756vw,2.5rem)] col-span-1"
          onClick={toogleSlide}
        >
          <Image src={MenuNavbar} alt="" width={50} height={50} />
        </div>
        <div className="flex items-center justify-center px-[clamp(0rem,-0.88rem+3.756vw,2.5rem)] col-span-2">
          <Image src={AULogo} alt="" width={190} height={62.81} />
        </div>
        <div className="flex items-center justify-end px-[clamp(0rem,-0.88rem+3.756vw,2.5rem)] col-span-1">
          <div className="bg-[#D9D9D9] w-11 h-11 rounded-full"></div>
        </div>
      </div>

      {/* Menu */}
      <div
        className={cn(
          "absolute left-0 top-0 h-screen w-2/3 sm:w-1/3 bg-[#36967E]/90 border-r-4 border-[#F7FDFF]/40 transition-transform",
          isSlide ? "translate-x-0" : "-translate-x-full"
        )}
      ></div>
    </section>
  );
}
