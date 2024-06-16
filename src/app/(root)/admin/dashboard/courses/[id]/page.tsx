"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState, useEffect, FormEvent } from "react";
import { editCourse, getCourse } from "@/services/api";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CourseData } from "@/interface/page";

export default function Course() {
  const [courseData, setCourseData] = useState<CourseData>();
  const [academic_year, setAcademicYear] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [semester, setSemester] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [classCode, setClassCode] = useState<string>("");
  const [instructor, setInstructor] = useState<string>("");
  const [courseCode, setCourseCode] = useState<string>("");
  const [english, setEnglish] = useState<boolean>(false);
  const pathname = usePathname();
  const lastPathName = pathname.split("/");

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await getCourse({
        course_id: lastPathName[lastPathName.length - 1],
      });
      setCourseData(response.data);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const updateCourseDetails = async (event: FormEvent) => {
    event.preventDefault();
    const courseId = lastPathName[lastPathName.length - 1];
    const updatedCourseData = {
      academic_year: academic_year ? academic_year : courseData?.academic_year,
      degree: degree ? degree : courseData?.degree,
      department: department ? department : courseData?.department,
      semester: semester ? semester : courseData?.semester,
      name: name ? name : courseData?.name,
      class_code: classCode ? classCode : courseData?.class_code,
      instructor: instructor ? instructor : courseData?.instructor,
      course_code: courseCode ? courseCode : courseData?.course_code,
      english: english ? english : courseData?.english,
    };
    console.log(courseData);

    try {
      const response = await editCourse({
        course_id: courseId,
        ...updatedCourseData,
      });
      toast.success("Course updated successfully");
      console.log("Course updated successfully:", response.data);
      setTimeout(() => {
        fetchCourse();
        setAcademicYear("");
        setDegree("");
        setDepartment("");
        setSemester("");
        setName("");
        setClassCode("");
        setInstructor("");
        setCourseCode("");
      }, 1000);
    } catch (error) {
      toast.error("Error updating course, try again");
      console.error("Error updating course:", error);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="text-black">
        <div className="grid sm:grid-cols-2 gap-5 w-full text-center">
          <div className="w-full p-3 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Name</p>
            <p className="text-2xl font-bold">
              {courseData?.name} (
              {courseData?.english ? "English Class" : "Mandarin Class"})
            </p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Academic Year</p>
            <p className="text-2xl font-bold">{courseData?.academic_year}</p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Degree</p>
            <p className="text-2xl font-bold">{courseData?.degree}</p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Semester</p>
            <p className="text-2xl font-bold">
              Semester {courseData?.semester}
            </p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Department</p>
            <p className="text-2xl font-bold">{courseData?.department}</p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Instructor</p>
            <p className="text-2xl font-bold">{courseData?.instructor}</p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Class Code</p>
            <p className="text-2xl font-bold">{courseData?.class_code}</p>
          </div>
          <div className="w-full p-2 sm:p-5 rounded shadow-3">
            <p className="text-sm italic">Current Course Code</p>
            <p className="text-2xl font-bold">{courseData?.course_code}</p>
          </div>
        </div>

        <div className="flex flex-col py-10">
          <div className="w-full py-3 border-b">
            <h1 className="text-2xl font-bold">Edit</h1>
          </div>
          <form
            method="post"
            className="flex flex-col py-5 gap-3"
            onSubmit={updateCourseDetails}
          >
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder="Insert new name..."
              />
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Class Code
              </label>
              <input
                type="text"
                id="class_code"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder="Insert new class code..."
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Course Code
              </label>
              <input
                type="text"
                id="course_code"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder="Insert new course code..."
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Instructor
              </label>
              <input
                type="text"
                id="instructor"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder="Insert new instructor..."
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Academic Year
              </label>
              <select
                id="academic_year"
                name="academic_year"
                className="bg-gray w-full p-2 rounded"
                value={academic_year}
                onChange={(e) => setAcademicYear(e.target.value)}
              >
                <option value="">Select academic year</option>
                <option value="1122">1122</option>
                <option value="1121">1121</option>
                <option value="1120">1120</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Degree
              </label>
              <select
                id="degree"
                name="degree"
                className="bg-gray w-full p-2 rounded"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="">Select degree</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Department
              </label>
              <select
                id="department"
                name="department"
                className="bg-gray w-full p-2 rounded"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select department</option>
                <option value="Computer Science & Information Engineering">
                  Computer Science & Information Engineering
                </option>
                <option value="Psychology">Psychology</option>
                <option value="Business Administration">
                  Business Administration
                </option>
                <option value="Foreign Languages and Literature">
                  Foreign Languages and Literature
                </option>
                <option value="Digital Media Design">
                  Digital Media Design
                </option>
                <option value="Visual Communication Design">
                  Visual Communication Design
                </option>
                <option value="Financial and Economic Law">
                  Financial and Economic Law
                </option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Semester
              </label>
              <select
                id="semester"
                name="semester"
                className="bg-gray w-full p-2 rounded"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value="">Select semester</option>
                <option value="I">Semester I</option>
                <option value="II">Semester II</option>
                <option value="III">Semester III</option>
                <option value="IV">Semester IV</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg min-w-[150px] md:min-w-[200px]">
                Change Class Language
              </label>
              <select
                id="english"
                name="english"
                className="bg-gray w-full p-2 rounded"
                value={english ? "true" : "false"}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
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
