"use client";

import { useState, useEffect } from "react";
import { cn } from "@/hooks/cn";
import useWindowWidth from "@/hooks/useWindowWidth";
import AULogo from "~/public/icons/au-logo.svg";
import MenuNavbar from "~/public/icons/menu-navbar.svg";
import DashboardIcon from "~/public/icons/dashboard-icon.svg";
import PaymentInfoIcon from "~/public/icons/payment-info.svg";
import CourseInfoIcon from "~/public/icons/course-info.svg";
import TranscriptIcon from "~/public/icons/transcript.svg";
import LogoutIcon from "~/public/icons/logout.svg";
import { allApps } from "@/staticData/allApps";
import { usePathname } from "next/navigation";
import { dashboardPath } from "@/staticData/dashboardPath";

interface NavbarProps {
  className?: string;
  isSearch?: boolean;
  onClickLogout: () => {};
}

export default function Navbar({
  className,
  isSearch = false,
  onClickLogout,
}: NavbarProps) {
  const windowWidth = useWindowWidth();
  const [isSlide, setIsSlide] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(allApps);

  const toogleSlide = () => {
    setIsSlide(!isSlide);
  };

  const toogleShowSearchInput = (event: any) => {
    const inputValue = event.target.value;
    setIsShowSearch(inputValue !== "");
    setSearchResults(
      allApps.filter((app) =>
        app.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (windowWidth < 1024) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  const pathname = usePathname();

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
                "w-full flex items-center pr-2 lg:px-[clamp(0rem,-0.88rem+3.756vw,2.5rem)] relative",
                isMobile ? "justify-end" : "justify-end"
              )}
            >
              <input
                className={cn(
                  "max-w-[315px] w-full py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-gray-400",
                  "border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
                )}
                placeholder="Search..."
                onChange={toogleShowSearchInput}
              ></input>
              <div
                className={cn(
                  isShowSearch ? "block" : "hidden",
                  "absolute z-40 top-12 shadow-lg bg-white rounded-2xl w-full max-w-[315px] h-fit overflow-hidden"
                )}
              >
                {searchResults.map((path, idx) => (
                  <div
                    key={idx}
                    className="group hover:bg-black transition-all"
                  >
                    <p className="p-4 group-hover:text-white">{path.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {isSearch && isMobile && (
            <div
              className="flex items-center justify-end"
              onClick={toogleSlide}
            >
              <MenuNavbar
                className={`min-w-[32px] min-h-[32px] rounded-full border-2 border-white ${
                  isSlide ? "fill-[#36967E] bg-white" : "fill-white"
                }`}
              />
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <div
        className={cn(
          "fixed z-20 left-0 top-0 h-screen bg-[#53c4a7] transition-transform py-5",
          isSlide && isMobile ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mx-10 mt-10 mb-6 border-b text-white pb-4">
          <h1 className="text-xl font-bold">Menu</h1>
        </div>
        <div className="w-full text-white grid text-left px-10 gap-y-5 h-fit">
          {dashboardPath.map((path, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2 cursor-pointer",
                pathname === path.slug && "text-white fill-white"
              )}
              onClick={() => (window.location.href = path.slug)}
            >
              {path.name === "Dashboard" && (
                <DashboardIcon className="w-[20px] h-[20px]" />
              )}
              {path.name === "Payment Info" && (
                <PaymentInfoIcon className="w-[20px] h-[20px]" />
              )}
              {path.name === "Course Info" && (
                <CourseInfoIcon className="w-[20px] h-[20px]" />
              )}
              {path.name === "Transcript" && (
                <TranscriptIcon className="w-[20px] h-[20px]" />
              )}
              <p className="select-none">{path.name}</p>
            </button>
          ))}
          <div
            className="flex items-center gap-3 text-white/50 fill-white/50 hover:text-white hover:fill-white transition-all delay-75 hover:bg-white/10 py-2 cursor-pointer"
            onClick={onClickLogout}
          >
            <LogoutIcon className="w-[20px] h-[20px]" />
            <p className="select-none">Logout</p>
          </div>
        </div>
      </div>
    </section>
  );
}
