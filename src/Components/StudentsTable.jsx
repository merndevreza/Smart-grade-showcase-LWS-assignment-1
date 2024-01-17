
import user from "../assets/avatar.png";

export default function StudentsTable() {
   return (
      
      <div className="w-[848px] mx-auto overflow-auto mt-16">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">
              Scores
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody>
          {/* className two */}
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              className One
            </td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">1</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={user}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">2</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={user}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">3</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={user}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>

          {/* className two */}
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              className Two
            </td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">1</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={user}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">2</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={user}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">3</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={user}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
        </tbody>
      </table>
    </div>
   )
}