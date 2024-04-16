"use client";

import { useState, ChangeEvent } from "react";
import { TranscriptBannerMain } from "~/public/images/";

export default function Transcript() {
  const [showhide, setShowhide]=useState('');
  const handleshowhide=(event: ChangeEvent<HTMLSelectElement>)=>{
    const getuser = event.target.value;
    setShowhide(getuser);
  }
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
        ></TranscriptBannerMain>
      </div>
      <table className="table-auto w-full hover:border-spacing-4 mt-9 text-green-800">
        <tbody>
          <tr className="h-10">
            <td className="border border-slate-300">Name</td>
            <td className="border border-slate-300">Lorem ipsum</td>
          </tr>
          <tr className="h-10">
            <td className="border border-slate-300">Student ID</td>
            <td className="border border-slate-300">Lorem ipsum</td>
          </tr>
          <tr className="h-10">
            <td className="border border-slate-300">Grades</td>
            <td className="border border-slate-300"><select name="grades" id="grades" className="border border-slate-400" onChange={(e)=>(handleshowhide(e))}>
              <option value="0">Choose Grades</option>
              <option value="1">Midterm Grades</option>
              <option value="2">Yearly Grades</option>
            </select></td>
          </tr>
        </tbody>
      </table>
      {
        showhide==='1' &&(
      <><div className="flex-col font-satoshi relative z-50" id="midterm">
            <p className="text-4xl font-bold text-center text-emerald-800 flex-auto">Midterm Grades Transcript</p>
            <table className="table-auto w-full hover:border-spacing-4 mt-9 text-green-800">
              <thead>
                <tr>
                  <th className="border border-slate-300 text-center">Academic Year</th>
                  <th className="border border-slate-300">Elective/Required</th>
                  <th className="border border-slate-300">Course Code</th>
                  <th className="border border-slate-300">Class</th>
                  <th className="border border-slate-300">Title of Course</th>
                  <th className="border border-slate-300">Credits</th>
                  <th className="border border-slate-300">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
              </tbody>
            </table>
          </div><button type="button" className="text-white bg-[#2D937C] hover:bg-[#2D937C] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#2D937C] dark:hover:bg-[#2D937C] dark:focus:ring-green-800 mt-4 flex flex-row"><svg width="20" height="20" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.375 21.5346H18.4582V9.229H55.375V21.5346ZM55.375 38.4548C56.2467 38.4548 56.9773 38.16 57.567 37.5703C58.1566 36.9807 58.4515 36.2501 58.4515 35.3784C58.4515 34.5068 58.1566 33.7761 57.567 33.1865C56.9773 32.5968 56.2467 32.302 55.375 32.302C54.5034 32.302 53.7728 32.5968 53.1831 33.1865C52.5935 33.7761 52.2986 34.5068 52.2986 35.3784C52.2986 36.2501 52.5935 36.9807 53.1831 37.5703C53.7728 38.16 54.5034 38.4548 55.375 38.4548ZM49.2222 58.4514V46.1458H24.611V58.4514H49.2222ZM55.375 64.6042H18.4582V52.2986H6.15265V33.8402C6.15265 31.2253 7.04993 29.0333 8.8445 27.2644C10.6391 25.4955 12.8182 24.611 15.3818 24.611H58.4515C61.0664 24.611 63.2583 25.4955 65.0273 27.2644C66.7962 29.0333 67.6806 31.2253 67.6806 33.8402V52.2986H55.375V64.6042Z" fill="#FEFEFE" />
          </svg>
              <p>Print Transcript</p></button></>
        )
        }
              {
        showhide==='2' &&(
      <><div className="flex-col font-satoshi relative z-50" id="yearly">
            <p className="text-4xl font-bold text-center text-emerald-800 flex-auto">Yearly Grades Transcript</p>
            <table className="table-auto w-full hover:border-spacing-4 mt-9 text-green-800">
              <thead>
                <tr>
                  <th className="border border-slate-300 text-center">Academic Year</th>
                  <th className="border border-slate-300">Elective/Required</th>
                  <th className="border border-slate-300">Course Code</th>
                  <th className="border border-slate-300">Class</th>
                  <th className="border border-slate-300">Title of Course</th>
                  <th className="border border-slate-300">Credits</th>
                  <th className="border border-slate-300">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
                <tr className="h-10">
                  <td className="border border-slate-300 text-center">1122</td>
                  <td className="border border-slate-300 text-center">Required</td>
                  <td className="border border-slate-300 text-center">EE300012</td>
                  <td className="border border-slate-300 text-center">C</td>
                  <td className="border border-slate-300 text-center">Probability and Statistics</td>
                  <td className="border border-slate-300 text-center">3</td>
                  <td className="border border-slate-300 text-center">A</td>
                </tr>
              </tbody>
            </table>
          </div><button type="button" className="text-white bg-[#2D937C] hover:bg-[#2D937C] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#2D937C] dark:hover:bg-[#2D937C] dark:focus:ring-green-800 mt-4 flex flex-row"><svg width="20" height="20" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.375 21.5346H18.4582V9.229H55.375V21.5346ZM55.375 38.4548C56.2467 38.4548 56.9773 38.16 57.567 37.5703C58.1566 36.9807 58.4515 36.2501 58.4515 35.3784C58.4515 34.5068 58.1566 33.7761 57.567 33.1865C56.9773 32.5968 56.2467 32.302 55.375 32.302C54.5034 32.302 53.7728 32.5968 53.1831 33.1865C52.5935 33.7761 52.2986 34.5068 52.2986 35.3784C52.2986 36.2501 52.5935 36.9807 53.1831 37.5703C53.7728 38.16 54.5034 38.4548 55.375 38.4548ZM49.2222 58.4514V46.1458H24.611V58.4514H49.2222ZM55.375 64.6042H18.4582V52.2986H6.15265V33.8402C6.15265 31.2253 7.04993 29.0333 8.8445 27.2644C10.6391 25.4955 12.8182 24.611 15.3818 24.611H58.4515C61.0664 24.611 63.2583 25.4955 65.0273 27.2644C66.7962 29.0333 67.6806 31.2253 67.6806 33.8402V52.2986H55.375V64.6042Z" fill="#FEFEFE" />
          </svg>
              <p>Print Transcript</p></button></>
        )
        }

    </section>

  );
};
