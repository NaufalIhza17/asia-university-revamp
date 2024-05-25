"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { useUser } from "@/hooks/userContext";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    if (user?.is_admin === false) {
      router.push("/dashboard");
    }
  }, [user?.is_admin, router]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div>{loading ? <Loader /> : children}</div>
      </body>
    </html>
  );
}
