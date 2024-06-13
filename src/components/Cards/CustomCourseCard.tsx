"use client";

import { cn } from "@/hooks/cn";
import { CourseData } from "@/interface/page";
import { addTranscript, deleteTranscript } from "@/services/api";
import { useState } from "react";
import { toast } from "react-toastify";

export const CustomCourseCard = ({
  data,
  user,
  selected,
  fetchFunction,
}: {
  data: CourseData;
  user: string;
  selected: boolean;
  fetchFunction?: () => void;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleAddTranscript = async () => {
    setIsLoading(true);
    try {
      const response = await addTranscript({
        user_id: user,
        course_id: data._id,
        taken_in: "I",
      });
      setIsLoading(false);
      if (response.status === 200) {
        toast.success("Transcript added successfully!");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error(
        "Course has already been added or there may be an error. Check the selected course tab."
      );
    }
  };

  const handleDeleteTranscript = async () => {
    setIsLoading(true);
    try {
      const response = await deleteTranscript({
        transcript_id: data.transcript_id,
      });
      setIsLoading(false);
      if (response.status === 200) {
        toast.success("Your selected course successfully removed!");
      }
      if (fetchFunction) {
        fetchFunction();
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "There is an error while removing your selected course. Please try again."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#F8F8F8] flex justify-between hover:translate-x-2 transition-all">
      <div className="flex flex-col justify-between items-start gap-5 px-8 py-5">
        <div className="flex flex-col">
          <h2 className="text-2xl">{data.name}</h2>
          <p className="text-sm text-[#737373]">
            {data.english ? "English Class" : "华语 Class"} | {data.department}
          </p>
          <p>{data.transcript_id}</p>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <h4 className="text-xs italic">Instructor</h4>
            <p className="text-sm">{data.instructor}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs italic">Class Number</h4>
            <p className="text-sm">{data.class_code}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs italic">Course Code</h4>
            <p className="text-sm">{data.course_code}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs italic">Academic Year</h4>
            <p className="text-sm">{data.academic_year}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs italic">Semester</h4>
            <p className="text-sm">{data.semester}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs italic">Degree</h4>
            <p className="text-sm">{data.degree}</p>
          </div>
        </div>
      </div>
      {!selected ? (
        <button
          onClick={handleAddTranscript}
          className={cn(
            "bg-[#36967E] transition-colors flex items-center justify-center w-20",
            isLoading ? "" : "hover:bg-[#378078]"
          )}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-6 w-6  animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
          ) : (
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 24 24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          )}
        </button>
      ) : (
        !data.approval && (
          <button
            onClick={handleDeleteTranscript}
            className={cn(
              "bg-[#d03434] transition-colors flex items-center justify-center w-20",
              isLoading ? "" : "hover:bg-[#782323]"
            )}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-6 w-6  animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
            ) : (
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
              >
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13Z"
                    fill=""
                  ></path>{" "}
                </g>
              </svg>
            )}
          </button>
        )
      )}
    </div>
  );
};
