"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import { LoginSignUpBG } from "~/public/images";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWindowHeight from "@/hooks/useWindowHeight";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { loginRequest, signupRequest } from "@/services/auth";
import { cn } from "@/hooks/cn";
import Image from "next/image";

export default function AuthorizationLayout({
  type,
  children,
  onClickFunction
}: Readonly<{
  type: "login" | "register";
  children: React.ReactNode;
  onClickFunction: () => void;
}>) {
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();
  const [isShortinHeight, setIsShortinHeight] = useState(false);
  const [isShortinWidth, setIsShortinWidth] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClickSignUp = async (e: SyntheticEvent) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const res = await signupRequest(formData);
      console.log(isLoading);
      console.log(res);
      if (res?.data?.InsertedID) {
        toast.success("Account successfully created");
        const redirectTimer = setTimeout(() => {
          router.push("/login");
        }, 5000);
        return () => clearTimeout(redirectTimer);
      } else {
        console.error("SIGNUP ERROR");
        setIsLoading(false);
      }
    } catch (err: any) {
      setIsLoading(false);
      if (err.response?.data?.message) {
        toast.error(`Register failed: ${err.response.data.message}`);
        console.log("Register Error: ", err.response.data.message);
      } else {
        toast.error("Register failed: An unknown error occurred");
        console.log("Register Error: Unknown error", err);
      }
    }
  };

  const onClickLogin = async (e: SyntheticEvent) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const res = await loginRequest(formData);
      if (res?.data?.token) {
        Cookies.set("ACCESS_TOKEN", res.data.token);
        Cookies.set("REFRESH_TOKEN", res.data.refresh_token);
        toast.success("Login successfully");
        const redirectTimer = setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
        return () => clearTimeout(redirectTimer);
      } else {
        console.error("LOGIN ERROR");
        setIsLoading(false);
      }
    } catch (err: any) {
      setIsLoading(false);
      if (err.response?.data?.message) {
        toast.error(`Login failed: ${err.response.data.message}`);
        console.log("Login Error: ", err.response.data.message);
      } else {
        toast.error("Login failed: An unknown error occurred");
        console.log("Login Error: Unknown error", err);
      }
    }
  };

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
      <ToastContainer position="top-right" autoClose={5000} />
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
            <div className="flex flex-col gap-1 pb-5 font-medium">
              <h1 className={cn(isShortinWidth ? "text-2xl" : "text-[32px]")}>
                {type === "login" ? "Welcome back" : "Get Started Now"}
              </h1>
              {type === "login" && (
                <p className={cn(isShortinWidth ? "text-xs" : "text-base")}>
                  Enter your Credentials to access your account
                </p>
              )}
            </div>
            {children}
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
                {type === "login" ? (
                  <>
                    <span>Have an account? </span>
                    <a href="/login" className="underline">
                      Login
                    </a>
                  </>
                ) : (
                  <>
                    <span>Don&apos;t have an account? </span>
                    <a href="/signup" className="underline">
                      Signup
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "absolute min-w-max h-screen overflow-hidden",
            isShortinWidth ? "-top-[40%] -right-1/4" : "-right-1/4 2xl:right-0"
          )}
        >
          <Image
            src={LoginSignUpBG}
            alt=""
            className="w-full h-full"
            priority
          />
        </div>
      </section>
    </main>
  );
}
