"use client";

import { useUser } from "@/hooks/userContext";

export default function Portofolio() {
  const { user } = useUser();

  return (
    <section>
      <div className="flex justify-center items-center py-5">
        <p className="text-[#2D937C] text-4xl font-bold">Portfolio Data</p>
      </div>
      <div>
        <table className="table-auto rounded-lg ">
          <tbody>
            <tr>
              <td
                className="text-left pl-8 pr-4 py-2 text-[#123E44]"
                style={{ width: "200px" }}
              >
                Name
              </td>
              <td
                className="text-left pl-8 pr-8 py-2 text-[#123E44]"
                style={{ width: "80%" }}
              >
                {user?.full_name}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="text-left pl-8 pr-4 py-2 text-[#123E44]">
                Student ID
              </td>
              <td
                className="text-left pl-8 pr-8 py-2 text-[#123E44]"
                style={{ width: "80%" }}
              >
                {" "}
                {user?.user_id ? (
                  <>
                    <p>{user?.user_id}</p>
                    <p className="bg-success w-fit px-3 rounded py-1 font-medium text-white italic text-sm">
                      Verified
                    </p>
                  </>
                ) : (
                  <p className="bg-danger/10 w-fit px-3 rounded py-1 font-medium text-danger italic text-sm">
                    Not Verified
                  </p>
                )}
              </td>{" "}
            </tr>
            <tr>
              <td className="text-left pl-8 pr-4 py-2 text-[#123E44] ">
                Email
              </td>
              <td
                className="text-left pl-8 pr-8 py-2 text-[#123E44] "
                style={{ width: "80%" }}
              >
                {user?.email}
              </td>{" "}
            </tr>
            {/* <tr className="bg-[#F0F0F0]">
              <td className="text-left pl-8 pr-4 py-2 text-[#123E44]">
                Academic Year
              </td>
              <td
                className="text-left pl-8 pr-8 py-2 text-[#123E44]"
                style={{ width: "80%" }}
              >
                Lorem Ipsum
              </td>{" "}
            </tr> */}
            {/* <tr>
              <td className="text-left pl-8 pr-4 py-2 text-[#123E44] ">
                Semester
              </td>
              <td
                className="text-left pl-8 pr-8 py-2 text-[#123E44] "
                style={{ width: "80%" }}
              >
                Lorem Ipsum
              </td>{" "}
            </tr> */}
          </tbody>
        </table>
      </div>
    </section>
  );
}
