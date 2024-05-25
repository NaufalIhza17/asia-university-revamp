import CourseBannerMain from "~/public/images/course-banner.svg";
import ResetIcon from "~/public/images/reset-icon.svg";
import QueryIcon from "~/public/images/query-icon.svg";
import getDateValue from "@/hooks/getDateValue";


export default function Course() {
  const month = getDateValue({ options: "month" });
  const date = getDateValue({ options: "date" });
  const year = getDateValue({ options: "year" });

  return (
    <section>
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
      <div className="flex flex-col mt-8">
        <table className="table-auto border border-gray-300 rounded-lg">
          <tbody>
            <tr>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">
                <span className="mr-[10px]">Academic Year</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="1122">1122</option>
                  <option value="1121">1121</option>
                  <option value="1120">1120</option>
                  <option value="1116">1116</option>
                  <option value="1115">1115</option>
                  <option value="1114">1114</option>
                  <option value="1113">1113</option>
                  <option value="1112">1112</option>
                </select>
              </td>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">
                <span className="mr-[10px]">Semester</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-[#F0F0F0]">
                <span className="mr-[10px]">Degree</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="Ungraduate">Ungraduate</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                </select>
              </td>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-[#F0F0F0]">
                <span className="mr-[10px]">Language</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="English">English</option>
                  <option value="华语">华语 (Chinese)</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">
                <span className="mr-[10px]">Department</span>
              </td>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white w-full">
                  <option value="Computer Science & Information Engineering">
                    Department of Computer Science & Information Engineering
                  </option>
                  <option value="Psychology">
                    Department of Psychology (College of Medical and Health
                    Science)
                  </option>
                  <option value="Business Administration">
                    Department of Business Administration (Asia Management
                    College)
                  </option>
                  <option value="Foreign Languages and Literature">
                    Department of Foreign Languages and Literature (College of
                    Humanities and Social Sciences)
                  </option>
                  <option value="Digital Media Design">
                    Department of Digital Media Design (College of Creative
                    Design)
                  </option>
                  <option value="Visual Communication Design">
                    Department of Visual Communication Design (College of
                    Creative Design)
                  </option>
                  <option value="Financial and Economic Law">
                    Department of Financial and Economic Law (Asia Management
                    College)
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-[#F0F0F0]">
                <span className="mr-[10px]">Course Code</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="EE300056">EE300056</option>
                  <option value="EE300012">EE300012</option>
                  <option value="EE300098">EE300098</option>
                  <option value="EE300118">EE300118</option>
                  <option value="EE300026">EE300026</option>
                  <option value="EE300099">EE300099</option>
                  <option value="EE300117">EE300117</option>
                </select>
              </td>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-[#F0F0F0]">
                <span className="mr-[10px]">Course Title</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="Discrete Mathematics">
                    Discrete Mathematics
                  </option>
                  <option value="Probability and Statistics">
                    Probability and Statistics
                  </option>
                  <option value="Machine learning">Machine learning</option>
                  <option value="Digital Logics">Digital Logics</option>
                  <option value="Microprocessor and Embedded Systems">
                    Microprocessor and Embedded Systems
                  </option>
                  <option value="Deep learning">Deep learning</option>
                  <option value="Electronic Circuits">
                    Electronic Circuits
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">
                <span className="mr-[10px]">Instructor</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="TZU-LIANG KUNG">TZU-LIANG KUNG</option>
                  <option value="Arbee L.P. Chen">Arbee L.P. Chen</option>
                  <option value="Jing-Doo Wang">Jing-Doo Wang</option>
                  <option value="Hsien-Ju Ko">Hsien-Ju Ko</option>
                  <option value="涂崇一">涂崇一</option>
                  <option value="Hsueh. Ting Chu">Hsueh. Ting Chu</option>
                  <option value="Chin-Sung His">Chin-Sung His</option>
                </select>
              </td>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">
                <span className="mr-[10px]">Classroom No</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="I533">I533</option>
                  <option value="I634">I634</option>
                  <option value="I627">I627</option>
                  <option value="H506">H506</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-[#F0F0F0]">
                <span className="mr-[10px]">Required / Elective</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="Required">Required</option>
                  <option value="Elective">Elective</option>
                </select>
              </td>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-[#F0F0F0]">
                <span className="mr-[10px]">Day</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="All">All</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                </select>
                <span className="mx-[5px]">from</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="All">All</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44]  bg-white">
                <span className="mr-[10px]">Period</span>
              </td>
              <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44]  bg-white">
                <span className="mr-[10px]">Start</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="All">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                </select>
                <span className="mx-[5px]">end</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 bg-white">
                  <option value="All">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex mt-4">
        <a href="/dashboard/course/printquery"
          className="flex items-center rounded-full bg-[#2D937C] text-white font-bold px-6 py-2 hover:bg-[#1D6F58] transition-colors duration-300"
          style={{ marginRight: "10px" }}
        >
          <QueryIcon className="w-6 h-6 mr-2" /> Print Query
        </a>
          <button className="flex items-center rounded-full bg-[#2D937C] text-white font-bold px-6 py-2 hover:bg-[#1D6F58] transition-colors duration-300">
            <ResetIcon className="w-6 h-6 mr-2" /> Reset
          </button>
        </div>
      </div>
    </section>
  );
}
