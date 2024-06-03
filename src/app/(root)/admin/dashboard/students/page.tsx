"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableUsers from "@/components/Tables/TableUsers";
import { getUsers } from "@/services/api";
import { useEffect, useState } from "react";
import { deleteUser } from "@/services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserData {
  full_name: string;
  email: string;
  _id: string;
  is_admin: boolean;
}

export default function Students() {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers({ page: "1", limitTo: "50" });
      const filteredUsers = response.data.filter(
        (user: { is_admin: boolean }) => {
          return !user.is_admin;
        }
      );
      setUserData(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const onClickDelUser = async (userid: string) => {
    try {
      const res = await deleteUser({ userid });
      if (res.status === 200) {
        toast.success("User deleted successfully");
        fetchUsers();
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(`User delete failed: ${err.response.data.message}`);
        console.log("User delete Error: ", err.response.data.message);
      } else {
        toast.error("User delete failed: An unknown error occurred");
        console.log("User delete Error: Unknown error", err);
      }
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="w-full py-3 border-b mb-5">
        <h1 className="text-2xl font-bold">List of Students</h1>
      </div>
      <TableUsers studentData={userData} onClickDelUser={onClickDelUser} />
    </DefaultLayout>
  );
}
