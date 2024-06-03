"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState, useEffect, FormEvent } from "react";
import { getUser, editUser } from "@/services/api";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserData {
  full_name: string;
  email: string;
  _id: string;
}

export default function Student() {
  const [userData, setUserData] = useState<UserData>();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const pathname = usePathname();
  const lastPathName = pathname.split("/");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      console.log(lastPathName[lastPathName.length - 1]);
      const response = await getUser({
        user_id: lastPathName[lastPathName.length - 1],
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const updateUserDetails = async (event: FormEvent) => {
    event.preventDefault();
    const userId = lastPathName[lastPathName.length - 1];
    const updatedUserData = {
      full_name: fullName ? fullName : userData?.full_name,
      email: email ? email : userData?.email,
    };

    try {
      const response = await editUser({ user_id: userId, ...updatedUserData });
      toast.success("User updated successfully");
      console.log("User updated successfully:", response.data);
      setTimeout(() => {
        fetchUsers();
        setFullName("");
        setEmail("");
      }, 3000);
    } catch (error) {
      toast.error("Error updating user, try again");
      console.error("Error updating user:", error);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="text-black">
        <div className="grid sm:grid-cols-2 gap-5 w-full text-center">
          <div className="w-full p-3 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Student Name</p>
            <p className="text-2xl font-bold">{userData?.full_name}</p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Student Email</p>
            <p className="text-2xl font-bold">{userData?.email}</p>
          </div>
        </div>

        <div className="flex flex-col py-10">
          <div className="w-full py-3 border-b">
            <h1 className="text-2xl font-bold">Edit</h1>
          </div>
          <form
            method="post"
            className="flex flex-col py-5 gap-3"
            onSubmit={updateUserDetails}
          >
            <div className="flex items-center gap-4">
              <label
                htmlFor="fullName"
                className="text-lg min-w-[150px] md:min-w-[200px]"
              >
                Change Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder="Insert new full name..."
              />
              <button className="p-2 rounded shadow hover:shadow-3 transition-all text-orange-500">
                <svg
                  className="fill-current"
                  fill="none"
                  height="18"
                  width="18"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 196.7"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M127.5,194.9c12,0,21.9-8.6,24-20h-48C105.6,186.3,115.5,194.9,127.5,194.9z M207.5,134.7c-8.5-8.5-19-12.6-19-53.8 c0-30.3-22.1-55.4-51-60.2H136c1.8-2,3-4.7,3-7.7c0-6.3-5.1-11.4-11.4-11.4c-6.3,0-11.4,5.1-11.4,11.4c0,3,1.1,5.7,3,7.7h-1.6 c-28.9,4.8-51,29.9-51,60.2c0,41.2-10.5,45.3-19,53.8C35.9,146.2,44.1,166,60.4,166h134.2C210.9,166,219.1,146.2,207.5,134.7z M10.8,69.2c0,14.5,5.3,28.5,15.1,39.8l-6.8,6.8c-11.5-12.4-18-29.1-18-46.3c0-17.3,6.6-34,18.2-46.2l6.8,6.8 C16.1,41.1,10.8,54.6,10.8,69.2z M28,69.5c0-10.3,3.6-19.8,10.4-27.8l6.8,6.8c-4.9,6-7.4,13.1-7.4,20.8c0,7.7,2.6,15,7.4,20.8 l-6.8,6.8C31.6,89.3,28,79.7,28,69.5z M230,30.1l6.8-6.8C248.4,35.5,255,52.1,255,69.5c0,17.2-6.5,33.9-18,46.3l-6.8-6.8 c9.7-11.2,15.1-25.2,15.1-39.8C245.3,54.6,240,41.1,230,30.1z M217.8,96.8L211,90c4.8-5.8,7.4-13.1,7.4-20.8 c0-7.6-2.6-14.8-7.4-20.8l6.8-6.8c6.8,8,10.4,17.5,10.4,27.8C228.2,79.7,224.5,89.3,217.8,96.8z"></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="email"
                className="text-lg min-w-[150px] md:min-w-[200px]"
              >
                Change Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder="Insert new email..."
              />
              <button className="p-2 rounded shadow hover:shadow-3 transition-all text-orange-500">
                <svg
                  className="fill-current"
                  fill="none"
                  height="18"
                  width="18"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 196.7"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M127.5,194.9c12,0,21.9-8.6,24-20h-48C105.6,186.3,115.5,194.9,127.5,194.9z M207.5,134.7c-8.5-8.5-19-12.6-19-53.8 c0-30.3-22.1-55.4-51-60.2H136c1.8-2,3-4.7,3-7.7c0-6.3-5.1-11.4-11.4-11.4c-6.3,0-11.4,5.1-11.4,11.4c0,3,1.1,5.7,3,7.7h-1.6 c-28.9,4.8-51,29.9-51,60.2c0,41.2-10.5,45.3-19,53.8C35.9,146.2,44.1,166,60.4,166h134.2C210.9,166,219.1,146.2,207.5,134.7z M10.8,69.2c0,14.5,5.3,28.5,15.1,39.8l-6.8,6.8c-11.5-12.4-18-29.1-18-46.3c0-17.3,6.6-34,18.2-46.2l6.8,6.8 C16.1,41.1,10.8,54.6,10.8,69.2z M28,69.5c0-10.3,3.6-19.8,10.4-27.8l6.8,6.8c-4.9,6-7.4,13.1-7.4,20.8c0,7.7,2.6,15,7.4,20.8 l-6.8,6.8C31.6,89.3,28,79.7,28,69.5z M230,30.1l6.8-6.8C248.4,35.5,255,52.1,255,69.5c0,17.2-6.5,33.9-18,46.3l-6.8-6.8 c9.7-11.2,15.1-25.2,15.1-39.8C245.3,54.6,240,41.1,230,30.1z M217.8,96.8L211,90c4.8-5.8,7.4-13.1,7.4-20.8 c0-7.6-2.6-14.8-7.4-20.8l6.8-6.8c6.8,8,10.4,17.5,10.4,27.8C228.2,79.7,224.5,89.3,217.8,96.8z"></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white rounded italic hover:shadow-5 hover:bg-blue-600 transition-all"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
