"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState, useEffect, SyntheticEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCourse, getCourses, deleteCourse } from "@/services/api";
import { CourseData } from "@/interface/page";
import TableCourses from "@/components/Tables/TableCourses";

export default function Courses() {
  const [coursesData, setCoursesData] = useState<CourseData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    academic_year: "",
    degree: "",
    department: "",
    semester: "",
    english: false,
    name: "",
    class_code: "",
    instructor: "",
    course_code: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCoursesData(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const onClickCourse = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await addCourse(formData);
      if (res?.data) {
        toast.success("Courses created successfully!");
        setFormData({
          academic_year: "",
          degree: "",
          department: "",
          semester: "",
          english: false,
          name: "",
          class_code: "",
          instructor: "",
          course_code: "",
        });
        fetchCourses();
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      if (err.response?.data?.message) {
        toast.error(`Courses creation failed: ${err.response.data.message}`);
        console.log("Courses creation Error: ", err.response.data.message);
      } else {
        toast.error("Courses creation failed: An unknown error occurred");
        console.log("Courses creation Error: Unknown error", err);
      }
    }
  };

  const onClickDelCourse = async (courseid: string) => {
    try {
      const res = await deleteCourse({ courseid });
      if (res.status === 200) {
        toast.success("Course deleted successfully");
        fetchCourses();
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(`Course delete failed: ${err.response.data.message}`);
        console.log("Course delete Error: ", err.response.data.message);
      } else {
        toast.error("Course delete failed: An unknown error occurred");
        console.log("Course delete Error: Unknown error", err);
      }
    }
  };
  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="w-full py-3 border-b mb-5">
        <h1 className="text-2xl font-bold">Add Course</h1>
      </div>
      <form action="" method="post" className="flex flex-col gap-3">
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Title <span className="text-rose-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Insert course name..."
            type="text"
            className="bg-gray w-full p-2 rounded"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Class Code <span className="text-rose-600">*</span>
          </label>
          <input
            id="class_code"
            name="class_code"
            required
            placeholder="Insert class code..."
            type="text"
            className="bg-gray w-full p-2 rounded"
            value={formData.class_code}
            onChange={(e) =>
              setFormData({
                ...formData,
                class_code: e.target.value,
              })
            }
          />
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Instructor <span className="text-rose-600">*</span>
          </label>
          <input
            id="instructor"
            name="instructor"
            required
            placeholder="Insert instructor..."
            type="text"
            className="bg-gray w-full p-2 rounded"
            value={formData.instructor}
            onChange={(e) =>
              setFormData({
                ...formData,
                instructor: e.target.value,
              })
            }
          />
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Course Code <span className="text-rose-600">*</span>
          </label>
          <input
            id="course_code"
            name="course_code"
            required
            placeholder="Insert course code..."
            type="text"
            className="bg-gray w-full p-2 rounded"
            value={formData.course_code}
            onChange={(e) =>
              setFormData({
                ...formData,
                course_code: e.target.value,
              })
            }
          />
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Academic Year <span className="text-rose-600">*</span>
          </label>
          <select
            id="academic_year"
            name="academic_year"
            required
            className="bg-gray w-full p-2 rounded"
            value={formData.academic_year}
            onChange={(e) =>
              setFormData({
                ...formData,
                academic_year: e.target.value,
              })
            }
          >
            <option value="">Select academic year</option>
            <option value="1122">1122</option>
            <option value="1121">1121</option>
            <option value="1120">1120</option>
          </select>
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Degree <span className="text-rose-600">*</span>
          </label>
          <select
            id="degree"
            name="degree"
            required
            className="bg-gray w-full p-2 rounded"
            value={formData.degree}
            onChange={(e) =>
              setFormData({
                ...formData,
                degree: e.target.value,
              })
            }
          >
            <option value="">Select degree</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Department <span className="text-rose-600">*</span>
          </label>
          <select
            id="department"
            name="department"
            required
            className="bg-gray w-full p-2 rounded"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
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
            <option value="Digital Media Design">Digital Media Design</option>
            <option value="Visual Communication Design">
              Visual Communication Design
            </option>
            <option value="Financial and Economic Law">
              Financial and Economic Law
            </option>
          </select>
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            Semester <span className="text-rose-600">*</span>
          </label>
          <select
            id="semester"
            name="semester"
            required
            className="bg-gray w-full p-2 rounded"
            value={formData.semester}
            onChange={(e) =>
              setFormData({
                ...formData,
                semester: e.target.value,
              })
            }
          >
            <option value="">Select semester</option>
            <option value="I">Semester I</option>
            <option value="II">Semester II</option>
            <option value="III">Semester III</option>
            <option value="IV">Semester IV</option>
          </select>
        </div>
        <div className="flex w-full items-center">
          <label className="text-lg min-w-35">
            English Class <span className="text-rose-600">*</span>
          </label>
          <select
            id="english"
            name="english"
            required
            className="bg-gray w-full p-2 rounded"
            value={formData.english ? "true" : "false"}
            onChange={(e) =>
              setFormData({
                ...formData,
                english: e.target.value === "true",
              })
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-2 w-full bg-blue-500 rounded mt-3 flex justify-center"
          onClick={onClickCourse}
          disabled={isLoading}
        >
          {!isLoading ? (
            <p className="font-bold text-white">Add Course</p>
          ) : (
            <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-2 border-t-emerald-800" />
          )}
        </button>
      </form>
      <div className="w-full py-3 border-b my-5">
        <h1 className="text-2xl font-bold">List of Course</h1>
      </div>
      <TableCourses courseData={coursesData} onClickDelCourse={onClickDelCourse} />
    </DefaultLayout>
  );
}
