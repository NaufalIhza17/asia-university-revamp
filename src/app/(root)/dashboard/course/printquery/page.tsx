import { CourseBannerMain } from "~/public/images";
import { ResetIcon } from "~/public/images";
import { QueryIcon } from "~/public/images";

export default function Course() {
  // Define variables for rowspan and colspan
  const rowspanHeader = 2; // Number of rows to span for the header cells
  const colspanTimeTables = 5; // Number of columns to span for the "Time Tables" cell

  return (
    <section>
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-white px-16 py-14 relative overflow-hidden">
        <div className="flex flex-col font-satoshi relative z-50">
          <p className="pb-8">March, 03 2024</p>
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
        <table className="table-auto border border-gray-300 rounded-lg w-full">
          <thead>
            <tr>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]" rowSpan={rowspanHeader}>Department/Year/Class</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]" rowSpan={rowspanHeader}>Course Code</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]" rowSpan={rowspanHeader}>Course Title</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]" rowSpan={rowspanHeader}>Required/Elective</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]" rowSpan={rowspanHeader}>Instructor</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]" rowSpan={rowspanHeader}>Location</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]" colSpan={colspanTimeTables}>Time Tables</th>
            </tr>
            <tr>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]">MON</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]">TUE</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]">WED</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]">THU</th>
              <th className="text-center pl-4 pr-4 py-2 border border-gray-300 text-white bg-[#2D937C]">FRI</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 1</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 2</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 3</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 4</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 5</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 6</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 7</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 8</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 9</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 10</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 11</td>
          </tr>
          <tr>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 1</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 2</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 3</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 4</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 5</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 6</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 7</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 8</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 9</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 10</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 11</td>
          </tr>
          <tr>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 1</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 2</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 3</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 4</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 5</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 6</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 7</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 8</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 9</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 10</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 11</td>
          </tr>
          <tr>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 1</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 2</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 3</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 4</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 5</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 6</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 7</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 8</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 9</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 10</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 11</td>
          </tr>
          <tr>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 1</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 2</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 3</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 4</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 5</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 6</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 7</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 8</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 9</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 10</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 11</td>
          </tr>
          <tr>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 1</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 2</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 3</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 4</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 5</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 6</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 7</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 8</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 9</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 10</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 11</td>
          </tr>
          <tr>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 1</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 2</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 3</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 4</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 5</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 6</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 7</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 8</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 9</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 10</td>
            <td className="text-left pl-4 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Sample Data 11</td>
          </tr>
          {/* Repeat <tr>...</tr> for additional rows */}
        </tbody>
      </table>

        <div className="flex mt-4">
          <button>
            <a href="/dashboard/course"
              className="flex items-center rounded-full bg-[#2D937C] text-white font-bold px-6 py-2 hover:bg-[#1D6F58] transition-colors duration-300"
              style={{ marginRight: "10px" }}
            >
              <ResetIcon className="w-6 h-6 mr-2" /> Query Again
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
