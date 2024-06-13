"use client"

import { useState } from "react";
import { cn } from "@/hooks/cn";
import { truncateText } from "@/hooks/truncateText";

export const CustomDropdown = ({
    title,
    selections,
    onSelectionChange,
  }: {
    title: string;
    selections: string[];
    onSelectionChange: (selection: string) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [choose, setChoose] = useState<string>();
  
    return (
      <div className="relative w-fit">
        <button
          id="states-button"
          className={cn(
            "flex items-center justify-between gap-3 px-5 py-3 transition-colors min-w-25",
            isOpen
              ? "bg-[#36967E] text-white fill-white"
              : "bg-[#36967E]/20 text-[#36967E] fill-[#36967E]"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{choose != null ? truncateText(choose, 35) : title}</p>
          <svg
            fill=""
            width="20px"
            height="20px"
            viewBox="-6.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(isOpen ? "rotate-180" : "")}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>dropdown</title>{" "}
              <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>{" "}
            </g>
          </svg>
        </button>
        <div
          className={cn(
            "absolute top-13 flex flex-col bg-white border border-[#36967E]/20 w-full text-center text-[#36967E] max-h-70 overflow-y-scroll",
            isOpen ? "opacity-100 z-10" : "opacity-0 invisible"
          )}
        >
          <button
            className="p-2 transition-colors hover:bg-[#36967E]/20"
            onClick={() => {
              setChoose(title);
              onSelectionChange("");
              setIsOpen(false);
            }}
          >
            none
          </button>
          {selections.map((selection, index) => (
            <button
              key={index}
              className={cn(
                "p-2 transition-colors hover:bg-[#36967E]/20",
                choose === selection ? "bg-[#36967E]/20" : ""
              )}
              onClick={() => {
                setChoose(selection);
                onSelectionChange(selection);
                setIsOpen(false);
              }}
            >
              {selection}
            </button>
          ))}
        </div>
      </div>
    );
  };