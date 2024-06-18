"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/dashboard/students");
  }, [router]);
  return (
    <>
      <DefaultLayout>
        <div></div>
      </DefaultLayout>
    </>
  );
}
