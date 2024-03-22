"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LoginSignUpBG } from "~/public/images";
import useWindowHeight from "@/hooks/useWindowHeight";
import useWindowWidth from "@/hooks/useWindowWidth";
import { cn } from "@/hooks/cn";
import clsx from "clsx";

export default function SignUp() {
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();
  const [isShortinHeight, setIsShortinHeight] = useState(false);
  const [isShortinWidth, setIsShortinWidth] = useState(false);
  useEffect(() => {
    if (windowWidth <= 690) {
      setIsShortinWidth(true);
    } else {
      setIsShortinWidth(false);
    }
    if (windowHeight <= 780) {
      setIsShortinHeight(true);
    } else {
      setIsShortinHeight(false);
    }
  }, [windowHeight, windowWidth]);
  return (
    <main className="relative">
      <section
        id="Sign Up"
        className={cn(
          isShortinWidth ? `items-end` : `items-center`,
          `flex justify-between w-screen h-screen relative overflow-hidden`
        )}
      >
        <div
          className={cn(
            isShortinWidth
              ? `w-full rounded-t-3xl h-fit py-8`
              : `min-w-[500px] w-1/2 rounded-r-3xl h-full`,
            `flex items-center justify-center bg-white relative z-10 shadow-2xl`
          )}
        >
          <div
            className={`w-full max-w-[420px] px-4 grid ${
              isShortinHeight ? "gap-5" : "gap-14"
            }`}
          >
            <h1
              className={cn(
                isShortinWidth ? "text-2xl" : "text-[32px]",
                "font-medium"
              )}
            >
              Get Started Now
            </h1>
            <form
              action=""
              className={`flex flex-col justify-start ${
                isShortinHeight ? "gap-3" : "gap-5"
              }`}
            >
              <label
                htmlFor="name"
                className={cn(isShortinWidth ? `text-sm` : ``, `font-medium`)}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
              />
              <label
                htmlFor="email-adress"
                className={cn(isShortinWidth ? `text-sm` : ``, `font-medium`)}
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
              />
              <label
                htmlFor="password"
                className={cn(isShortinWidth ? `text-sm` : ``, `font-medium`)}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
              />
              <div className="flex gap-1">
                <input type="checkbox" className="w-fit" />
                <p className="font-medium text-xs">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="underline hover:font-semibold transition-all"
                  >
                    terms & policy
                  </a>
                </p>
              </div>
              <button className="p-2 w-full bg-[#36967E] rounded-xl mt-3">
                <p
                  className={cn(
                    isShortinWidth ? `text-sm` : ``,
                    `font-bold text-white`
                  )}
                >
                  Signup
                </p>
              </button>
            </form>
            <div className="border-b-2 border-black/10 relative">
              <p className="bg-white px-2 font-medium absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs w-fit">
                Or
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex justify-between gap-4">
                <button className="w-full max-w-[190px] rounded-xl border border-black/10">
                  <p
                    className={cn(
                      isShortinWidth ? "text-xs" : "text-sm",
                      "font-medium p-2"
                    )}
                  >
                    Sign in with Google
                  </p>
                </button>
                <button className="w-full max-w-[190px] rounded-xl border border-black/10">
                  <p
                    className={cn(
                      isShortinWidth ? "text-xs" : "text-sm",
                      "font-medium p-2"
                    )}
                  >
                    Sign in with Apple
                  </p>
                </button>
              </div>
              <p
                className={cn(
                  isShortinWidth && "text-sm",
                  "w-full text-center"
                )}
              >
                Don&apos;t have account?{" "}
                <a href="" className="underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={cn("absolute min-w-max h-screen overflow-hidden", isShortinWidth ? "-top-[40%] -right-1/4" : "-right-1/4 2xl:right-0")}>
          <Image src={LoginSignUpBG} alt="" className="w-full h-full" />
        </div>
      </section>
    </main>
  );
}
