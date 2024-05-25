"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
// import { getUserData } from "@/services/auth";
import { useEffect, useState } from "react";

interface UserData {
  full_name: string;
  email: string;
  phone: string;
}

export default function Students() {
  const [userData, setUserData] = useState<UserData | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getUserData();
  //       setUserData(res.data);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <DefaultLayout>
      <TableThree />
    </DefaultLayout>
  );
}
