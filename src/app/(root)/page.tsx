"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/login");
    }, 5000);

    toast.warning("This page will redirect in 5 seconds...");

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <main className="flex items-center justify-center h-screen">
      <ToastContainer position="top-center" autoClose={5000} />
      <div>
        <a href="/login">Login</a> | <a href="/signup">SignUp</a>
      </div>
    </main>
  );
}
