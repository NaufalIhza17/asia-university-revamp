import PortofolioIcon from '~/public/images/portofolio-data.svg'

export default function Portofolio() {
  return (
    <section>
      <div className="flex items-center">
        <div className="mr-4">
          <PortofolioIcon style={{ width: "150px", height: "150px" }} />
        </div>
        <div className="text-left text-7xl font-bold">
          <span className="bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-transparent bg-clip-text">Portofolio Data</span>
        </div>
      </div>
      <div>
        <table className="table-auto border border-gray-300 rounded-lg ">
          <tbody>
            <tr>
              <td className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white" style={{ width: '200px' }}>Name</td>
              <td className="text-left pl-8 pr-8 py-2 border border-gray-300 text-[#123E44] bg-white" style={{ width: '80%' }}>Lorem Ipsum</td> {/* Adjusted width to 80% */}
            </tr>
            <tr className="bg-[#F0F0F0]">
              <td className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44]">Student ID</td>
              <td className="text-left pl-8 pr-8 py-2 border border-gray-300 text-[#123E44]" style={{ width: '80%' }}>Lorem Ipsum</td> {/* Adjusted width to 80% */}
            </tr>
            <tr>
              <td className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Semester</td>
              <td className="text-left pl-8 pr-8 py-2 border border-gray-300 text-[#123E44] bg-white" style={{ width: '80%' }}>Lorem Ipsum</td> {/* Adjusted width to 80% */}
            </tr>
            <tr className="bg-[#F0F0F0]">
              <td className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44]">Academic Year</td>
              <td className="text-left pl-8 pr-8 py-2 border border-gray-300 text-[#123E44]" style={{ width: '80%' }}>Lorem Ipsum</td> {/* Adjusted width to 80% */}
            </tr>
            <tr>
              <td className="text-left pl-8 pr-4 py-2 border border-gray-300 text-[#123E44] bg-white">Majority</td>
              <td className="text-left pl-8 pr-8 py-2 border border-gray-300 text-[#123E44] bg-white" style={{ width: '80%' }}>Lorem Ipsum</td> {/* Adjusted width to 100% */}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
