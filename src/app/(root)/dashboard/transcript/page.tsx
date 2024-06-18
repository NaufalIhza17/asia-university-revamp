"use client";

import TranscriptBannerMain from "~/public/images/transcript-banner-main.svg";
import { getApprovedTranscript, getCourses } from "@/services/api";
import { useUser } from "@/hooks/userContext";
import { useEffect, useState } from "react";
import { CourseData, TranscriptData } from "@/interface/page";
import { CustomDropdown } from "@/components/Dropdowns/CustomDropdown";

export default function Transcript() {
  const { user } = useUser();
  const [courseData, setCourseData] = useState<CourseData[]>([]);
  const [approvedTranscript, setApprovedTranscript] = useState<TranscriptData[]>([]);
  const [selectedSemester, setSelectedSemester] = useState<string>("I");
  
  useEffect(() => {
    const fetchApprovedTranscript = async () => {
      try {
        const response = await getApprovedTranscript({
          user_id: user?._id,
        });
        if (!response || !response.data) {
          throw new Error("Failed to fetch approved transcript");
        }
        setApprovedTranscript(response.data);
      } catch (error) {
        console.error("Error fetching approved transcript:", error);
      }
    };

    if (user?._id) {
      fetchApprovedTranscript();
    }
  }, [user]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseResponse = await getCourses();
        if (!courseResponse || !courseResponse.data) {
          throw new Error("Failed to fetch courses");
        }

        const courseIds = approvedTranscript.map(
          (course: { course_id: string }) => course.course_id
        );

        const filteredCourses = courseResponse.data.filter(
          (course: { _id: string }) => courseIds.includes(course._id)
        );

        const updatedCourseData = filteredCourses.map((course: { _id: any }) => {
          const transcript = approvedTranscript.find(
            (transcript: { course_id: any }) => transcript.course_id === course._id
          );

          return transcript
            ? {
                ...course,
                transcript_id: transcript.ID,
                gpa: transcript.gpa,
                taken_in: transcript.taken_in,
              }
            : course;
        });

        setCourseData(updatedCourseData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    if (approvedTranscript.length > 0) {
      fetchCourses();
    }
  }, [approvedTranscript]);

  const filteredCourseData = selectedSemester
    ? courseData.filter((course) => course.taken_in === selectedSemester)
    : courseData;

  return (
    <section>
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-white px-16 py-14 relative overflow-hidden">
        <div className="flex flex-col font-satoshi relative z-50">
          <p className="pb-8">March, 03 2024</p>
          <p className="text-5xl font-bold">Transcript</p>
          <p className="pt-3">Always stay updated in your student portal</p>
        </div>
        <TranscriptBannerMain
          width="363.79"
          height="362.03"
          className="absolute right-0 top-0"
        />
      </div>
      <div className="pt-5">
        <CustomDropdown
          title="Semester"
          selections={["I", "II", "III", "IV"]}
          onSelectionChange={(selection) => setSelectedSemester(selection)}
        />
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light text-surface">
                <thead className="border-b border-neutral-200 bg-[#2D937C] font-medium text-white">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Course Name
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Detail
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Taken In
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      GPA
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#2D937C]">
                  {filteredCourseData.length != 0 ? (
                    filteredCourseData.map((data, index) => (
                      <tr key={index} className="border-b border-neutral-200 font-medium">
                        <td className="whitespace-nowrap px-6 py-4">
                          {data.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {data.degree} {data.academic_year}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {data.taken_in}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {data.gpa}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-b border-neutral-200">
                      <td
                        colSpan={4}
                        className="whitespace-nowrap px-6 py-4 font-medium"
                      >
                        no transcript to display
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
