"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState, useEffect, FormEvent } from "react";
import {
  getUser,
  editUser,
  updateApprovalTranscript,
  getNotApprovedTranscript,
  getCourses,
  addPayment,
} from "@/services/api";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/hooks/cn";
import { UserData, CourseData } from "@/interface/page";

export default function Student() {
  const [userData, setUserData] = useState<UserData>();
  const [courseData, setCourseData] = useState<CourseData[]>([]);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sid, setSid] = useState<string>("");

  const [primaryTuition, setPrimaryTuition] = useState<number>(0);
  const [additionalTuition, setAdditionalTuition] = useState<number>(0);
  const [scholarship, setScholarship] = useState<number>(0);

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const pathname = usePathname();
  const lastPathName = pathname.split("/");

  useEffect(() => {
    fetchUsers();
    fetchNotApprovedTranscript();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUser({
        id: lastPathName[lastPathName.length - 1],
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
      user_id: userData?.user_id,
    };

    try {
      const response = await editUser({ id: userId, ...updatedUserData });
      if (response.status === 200) {
        toast.success("User updated successfully");
      }
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

  const addStudentID = async (event: FormEvent) => {
    event.preventDefault();
    const userId = lastPathName[lastPathName.length - 1];
    const addSID = {
      full_name: userData?.full_name,
      email: userData?.email,
      user_id: sid ? sid : userData?.user_id,
    };

    try {
      const response = await editUser({ id: userId, ...addSID });
      toast.success("User verified successfully");
      console.log("User verified successfully:", response.data);
      setTimeout(() => {
        fetchUsers();
        setSid("");
      }, 3000);
    } catch (error) {
      toast.error("Error updating student id, try again");
      console.error("Error updating student id:", error);
    }
  };

  const createPayment = async (event: FormEvent) => {
    event.preventDefault();
    const userId = lastPathName[lastPathName.length - 1];
    try {
      const response = await addPayment({
        user_id: userId,
        primary_tuition: primaryTuition,
        additional_tuition: additionalTuition,
        scholarship: scholarship,
      });
      if (response.status === 200) {
        toast.success("User payment added successfully");
      }
      console.log("User payment added successfully:", response.data);
    } catch (error) {
      toast.error("Error adding student payment, try again");
      console.error("Error adding student payment:", error);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCourses([]);
    } else {
      setSelectedCourses(courseData.map((data) => data.transcript_id!));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectCourse = (id: string) => {
    if (selectedCourses.includes(id)) {
      setSelectedCourses(selectedCourses.filter((courseId) => courseId !== id));
    } else {
      setSelectedCourses([...selectedCourses, id]);
    }
  };

  const updateApproval = async () => {
    try {
      const response = await updateApprovalTranscript({
        transcript_ids: selectedCourses,
      });
      if (response.status === 200) {
        toast.success("Course approved successfully");
      }
      console.log("Course approved successfully:", response);
    } catch (error) {
      toast.error("Error updating, try again");
      console.error("Error updating:", error);
    }
  };

  const fetchNotApprovedTranscript = async () => {
    try {
      const response = await getNotApprovedTranscript({
        user_id: lastPathName[lastPathName.length - 1],
      });
      const courseIds = response.data.map(
        (course: { course_id: string }) => course.course_id
      );

      const courseResponse = await getCourses();
      const filteredCourses = courseResponse.data.filter(
        (course: { _id: string }) => courseIds.includes(course._id)
      );

      const updatedCourseData = filteredCourses.map((course: { _id: any }) => {
        if (courseIds.includes(course._id)) {
          return {
            ...course,
            transcript_id: response.data.find(
              (transcript: { course_id: any }) =>
                transcript.course_id === course._id
            )?.ID,
          };
        } else {
          return course;
        }
      });
      setCourseData(updatedCourseData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handlePrimaryTuitionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrimaryTuition(parseFloat(e.target.value));
  };

  const handleAdditionalTuitionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdditionalTuition(parseFloat(e.target.value));
  };

  const handleScholarshipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScholarship(parseFloat(e.target.value));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await addStudentID(event);
    await createPayment(event);
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="text-black pb-5">
        <div
          className={cn(
            "w-full p-3 rounded shadow-3",
            userData?.user_id ? "bg-success/30" : "bg-danger"
          )}
        >
          <p className="text-lg font-bold italic text-success flex items-center justify-center h-full">
            {userData?.user_id ? "Verified User" : "Not Verified User"}
          </p>
        </div>

        <div className="flex flex-col py-5">
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
                className="text-lg min-w-[150px] md:min-w-[225px]"
              >
                Change Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder={"Current: " + userData?.full_name}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="email"
                className="text-lg min-w-[150px] md:min-w-[225px]"
              >
                Change Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder={"Current: " + userData?.email}
              />
            </div>
            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white rounded italic hover:shadow-5 hover:bg-blue-600 transition-all"
            >
              Update
            </button>
          </form>
        </div>

        <div className="flex flex-col py-5">
          <div className="w-full py-3 border-b">
            <h1 className="text-2xl font-bold">Verify Student</h1>
          </div>
          <form
            method="post"
            className="flex flex-col py-5 gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-4">
              <label
                htmlFor="sid"
                className="text-lg min-w-[150px] md:min-w-[225px]"
              >
                Add Student ID
              </label>
              <input
                type="text"
                id="sid"
                value={sid}
                onChange={(e) => setSid(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder={
                  userData?.user_id ? userData?.user_id : "Insert student ID..."
                }
                disabled={userData?.user_id ? true : false}
              />
            </div>
            {!userData?.user_id && (
              <div className="flex items-center gap-4">
                <label
                  htmlFor="primary-tuition"
                  className="text-lg min-w-[150px] md:min-w-[225px]"
                >
                  Add Student Primary Tuition
                </label>
                <input
                  type="number"
                  id="primary-tuition"
                  value={primaryTuition}
                  onChange={handlePrimaryTuitionChange}
                  className="bg-gray w-full p-2 rounded"
                  placeholder="Insert student primary tuition..."
                />
              </div>
            )}
            {!userData?.user_id && (
              <div className="flex items-center gap-4">
                <label
                  htmlFor="additional-tuition"
                  className="text-lg min-w-[150px] md:min-w-[225px]"
                >
                  Add Student Additional Tuition
                </label>
                <input
                  type="number"
                  id="additional-tuition"
                  value={additionalTuition}
                  onChange={handleAdditionalTuitionChange}
                  className="bg-gray w-full p-2 rounded"
                  placeholder="Insert student additional tuition..."
                />
              </div>
            )}
            {!userData?.user_id && (
              <div className="flex items-center gap-4">
                <label
                  htmlFor="scholarship"
                  className="text-lg min-w-[150px] md:min-w-[225px]"
                >
                  Add Scholarship
                </label>
                <input
                  type="number"
                  id="scholarship"
                  value={scholarship}
                  onChange={handleScholarshipChange}
                  className="bg-gray w-full p-2 rounded"
                  placeholder="Insert scholarship amount..."
                />
              </div>
            )}
            <button
              type="submit"
              className={cn(
                "mt-4 p-2 bg-green-500 text-white rounded italic hover:shadow-5 hover:bg-green-600 transition-all",
                userData?.user_id ? "hidden" : ""
              )}
            >
              Verify
            </button>
          </form>
        </div>

        <div className="flex flex-col py-5">
          <div className="w-full py-3 border-b">
            <h1 className="text-2xl font-bold">Approving Selected Courses</h1>
          </div>
          <div className="flex flex-col py-5">
            {courseData.length !== 0 ? (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            checked={selectAll}
                            onChange={handleSelectAll}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Course name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Course for
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Department
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Course ID
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseData.map((data, index) => (
                      <tr key={index} className="bg-white hover:bg-gray-50">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id={`checkbox-table-search-${index}`}
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                              checked={selectedCourses.includes(
                                data.transcript_id!
                              )}
                              onChange={() =>
                                handleSelectCourse(data.transcript_id!)
                              }
                            />
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {data.name}{" "}
                          <span className="font-normal italic text-sm">
                            ({data.english ? "English Class" : "Mandarin Class"}
                            )
                          </span>
                        </th>
                        <td className="px-6 py-4">
                          {data.academic_year}, Semester {data.semester}
                        </td>
                        <td className="px-6 py-4">{data.department}</td>
                        <td className="px-6 py-4">{data.course_code}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="py-4 px-6 flex items-center justify-between">
                  <p>Total Selected Courses: {selectedCourses.length}</p>
                  <button
                    onClick={updateApproval}
                    disabled={selectedCourses.length === 0}
                    className="bg-success px-3 py-2 rounded font-semibold text-white"
                  >
                    Approve Selected Course
                  </button>
                </div>
              </div>
            ) : (
              <p className="flex justify-center">
                There is no course to be approve
              </p>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
