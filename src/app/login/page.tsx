"use client";

import Image from "next/image";
import { useEffect, useState, SyntheticEvent } from "react";
import Cookies from "js-cookie";
import { loginRequest } from "@/services/auth";
import LoginSignUpBG from "~/public/images/login-signup-bg.jpg";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/hooks/cn";
import useWindowHeight from "@/hooks/useWindowHeight";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useUser } from "@/hooks/userContext";

export default function SignUp() {
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();
  const [isShortinHeight, setIsShortinHeight] = useState(false);
  const [isShortinWidth, setIsShortinWidth] = useState(false);
  const { setUser } = useUser();
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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClickLogin = async (e: SyntheticEvent) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const res = await loginRequest(formData);
      console.log(res.data);
      if (res?.data?.token) {
        Cookies.set("ACCESS_TOKEN", res.data.token);
        Cookies.set("REFRESH_TOKEN", res.data.refresh_token);
        setUser({
          full_name: res.data.full_name,
          email: res.data.email,
          user_id: res.data.user_id,
          is_admin: res.data.is_admin,
        });
        toast.success("Login successfully");
        const redirectTimer = setTimeout(() => {
          if (res.data.is_admin) {
            router.push("/admin/dashboard");
          } else {
            router.push("/dashboard");
          }
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

  return (
    <main className="relative">
      <ToastContainer position="top-right" autoClose={3000} />
      <section
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
            <div className="flex flex-col gap-1 pb-5">
              <h1
                className={cn(
                  isShortinWidth ? "text-2xl" : "text-[32px]",
                  "font-medium"
                )}
              >
                Welcome back!
              </h1>
              <p
                className={cn(
                  isShortinWidth ? "text-xs" : "text-base",
                  "font-medium"
                )}
              >
                Enter your Credentials to access your account
              </p>
            </div>
            <form
              action="POST"
              className={`flex flex-col justify-start ${
                isShortinHeight ? "gap-3" : "gap-5"
              }`}
            >
              <label
                htmlFor="email-adress"
                className={cn(isShortinWidth ? `text-sm` : ``, `font-medium`)}
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
              <label
                htmlFor="password"
                className={cn(isShortinWidth ? `text-sm` : ``, `font-medium`)}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
              <div className="flex gap-1">
                <input type="checkbox" className="w-fit" />
                <p className="font-medium text-xs">Remember for 30 days</p>
              </div>
              <button
                type="submit"
                className="p-2 w-full bg-[#36967E] rounded-xl mt-3 flex justify-center"
                onClick={onClickLogin}
                disabled={isLoading}
              >
                {!isLoading ? (
                  <p
                    className={cn(
                      isShortinWidth ? `text-sm` : ``,
                      `font-bold text-white`
                    )}
                  >
                    Login
                  </p>
                ) : (
                  <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-2 border-t-emerald-800" />
                )}
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
                Don&apos;t have an account?{" "}
                <a href="/signup" className="underline">
                  Signup
                </a>
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
