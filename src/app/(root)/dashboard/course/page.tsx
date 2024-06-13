"use client";

import CourseBannerMain from "~/public/images/course-banner.svg";
import getDateValue from "@/hooks/getDateValue";
import { ReactNode, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/hooks/cn";
import { getCourses, getTranscript } from "@/services/api";
import { CourseData } from "@/interface/page";
import { CustomDropdown } from "@/components/Dropdowns/CustomDropdown";
import { CustomCourseCard } from "@/components/Cards/CustomCourseCard";
import { useUser } from "@/hooks/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Course() {
  const month = getDateValue({ options: "month" });
  const date = getDateValue({ options: "date" });
  const year = getDateValue({ options: "year" });

  const [position, setPosition] = useState({
    width: "50%",
    left: 0,
    bottom: 0,
  });

  const [selectedTab, setSelectedTab] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [courseData, setCourseData] = useState<CourseData[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (selectedTab === 0) {
      fetchCourse();
    } else {
      fetchSelectedCourse();
    }
  }, [selectedTab]);

  const fetchCourse = async () => {
    setCourseData([]);
    setIsLoading(true);
    try {
      const response = await getCourses();
      setCourseData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching course:", error);
      setIsLoading(false);
    }
  };

  const fetchSelectedCourse = async () => {
    setCourseData([]);
    setIsLoading(true);
    try {
      const response = await getTranscript({ user_id: user?._id });
      console.log("initial response: ", response.data);
      const courseIds = response.data.map(
        (course: { course_id: string }) => course.course_id
      );

      const courseResponse = await getCourses();
      const filteredCourses = courseResponse.data.filter(
        (course: { _id: string }) => courseIds.includes(course._id)
      );
      console.log("filtered: ", filteredCourses);

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

      console.log("updated:  ", updatedCourseData);
      setCourseData(updatedCourseData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching selected course:", error);
      setIsLoading(false);
    }
  };

  const handleFetchFunction = () => {
    fetchSelectedCourse();
  } 

  return (
    <section>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-white px-8 md:px-16 py-7 md:py-14 relative overflow-hidden">
        <div className="flex flex-col font-satoshi relative z-10">
          <p className="pb-8">
            {month}, {date} {year}
          </p>
          <p className="text-5xl font-bold">Course Information System</p>
          <p className="pt-3">Always stay updated in your student portal</p>
        </div>
        <CourseBannerMain
          width="392"
          height="273"
          className="absolute right-0 top-0"
        />
      </div>
      <div className="my-7">
        <section className="flex w-full border-b-2 border-gray relative">
          <Tab
            setPosition={setPosition}
            setSelectedTab={() => setSelectedTab(0)}
            isSelected={selectedTab === 0}
          >
            <p>Search Course</p>
          </Tab>
          <Tab
            setPosition={setPosition}
            setSelectedTab={() => setSelectedTab(1)}
            isSelected={selectedTab === 1}
          >
            <p>Selected Course</p>
          </Tab>
          <Cursor position={position} />
        </section>
        {selectedTab === 0 ? (
          <SearchCourse
            isLoading={isLoading}
            courseData={courseData}
            user={user?._id}
          />
        ) : (
          <SelectedCourse
            isLoading={isLoading}
            courseData={courseData}
            user={user?._id}
            onFetchFunction={handleFetchFunction}
          />
        )}
      </div>
    </section>
  );
}

const Tab = ({
  children,
  setPosition,
  setSelectedTab,
  isSelected,
}: {
  children: ReactNode;
  setPosition: any;
  setSelectedTab: () => void;
  isSelected: boolean;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (ref.current) {
      const { left } = ref.current.getBoundingClientRect();
      setPosition({
        left: `${
          left - ref.current.offsetParent!.getBoundingClientRect().left
        }px`,
        bottom: 0,
      });
      setSelectedTab();
    }
  };
  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "w-full flex justify-center pb-2 text-lg",
        isSelected ? "text-black" : "text-black/50"
      )}
    >
      {children}
    </button>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.div
      animate={position}
      className="absolute bottom-0 bg-black h-0.5"
      style={{
        width: position.width,
        left: position.left,
      }}
    ></motion.div>
  );
};

function SearchCourse({
  isLoading,
  courseData,
  user,
}: {
  isLoading: boolean;
  courseData: CourseData[];
  user?: string;
}) {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [selectedDegree, setSelectedDegree] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterCourses = () => {
    if (!courseData) return [];
    return courseData.filter((course) => {
      return (
        (!selectedYear || course.academic_year === selectedYear) &&
        (!selectedSemester || course.semester === selectedSemester) &&
        (!selectedDegree || course.degree === selectedDegree) &&
        (!selectedDepartment || course.department === selectedDepartment) &&
        (!selectedLanguage ||
          (selectedLanguage === "English"
            ? course.english === true
            : course.english === false)) &&
        (searchQuery === "" ||
          course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.class_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.course_code.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  };

  const filteredCourses = filterCourses();
  return (
    <section className="mt-3">
      <form
        action=""
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="bg-gray w-full px-4 py-2"
          placeholder="Search by Class Name / Class Number / Instructor / Course Code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className="flex mt-2 gap-2">
        <CustomDropdown
          title="Academic Year"
          selections={["1122", "1121", "1120"]}
          onSelectionChange={(selection) => setSelectedYear(selection)}
        />
        <CustomDropdown
          title="Semester"
          selections={["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]}
          onSelectionChange={(selection) => setSelectedSemester(selection)}
        />
        <CustomDropdown
          title="Degree"
          selections={["Bachelor", "Master", "PhD"]}
          onSelectionChange={(selection) => setSelectedDegree(selection)}
        />
        <CustomDropdown
          title="Department"
          selections={[
            "Computer Science & Information Engineering",
            "Psychology",
            "Business Administration",
            "Foreign Languages and Literature",
            "Digital Media Design",
            "Visual Communication Design",
            "Financial and Economic Law",
          ]}
          onSelectionChange={(selection) => setSelectedDepartment(selection)}
        />
        <CustomDropdown
          title="Language"
          selections={["English", "华语 (Mandarin)"]}
          onSelectionChange={(selection) => setSelectedLanguage(selection)}
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {isLoading ? (
          <div className="flex justify-center">Loading...</div>
        ) : filteredCourses.length > 0 ? (
          filteredCourses.map((data, index) => (
            <CustomCourseCard
              key={index}
              data={data}
              user={user ?? ""}
              selected={false}
            />
          ))
        ) : (
          <div className="flex justify-center mt-5">
            There is no course to be selected
          </div>
        )}
      </div>
    </section>
  );
}

function SelectedCourse({
  isLoading,
  courseData,
  user,
  onFetchFunction,
}: {
  isLoading: boolean;
  courseData: CourseData[];
  user?: string;
  onFetchFunction: () => void;
}) {
  return (
    <section className="mt-3">
      <div className="mt-3 flex flex-col gap-2">
        {isLoading ? (
          <div className="flex justify-center">Loading...</div>
        ) : courseData && courseData.length > 0 ? (
          courseData.map((data, index) => (
            <CustomCourseCard
              key={index}
              data={data}
              user={user ?? ""}
              selected
              fetchFunction={onFetchFunction}
            />
          ))
        ) : (
          <div className="flex justify-center mt-5">
            There is no course selected
          </div>
        )}
      </div>
    </section>
  );
}
