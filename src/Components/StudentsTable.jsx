function StudentListItem({ students }) {
  const calcGrade = (marks) => {
    if (marks > 100 || marks < 0) {
      return "Invalid";
    } else if (marks >= 80 && marks <= 100) {
      return "A+";
    } else if (marks >= 70 && marks < 80) {
      return "A";
    } else if (marks >= 60 && marks < 70) {
      return "A-";
    } else if (marks >= 50 && marks < 60) {
      return "B";
    } else if (marks >= 40 && marks < 50) {
      return "C";
    } else if (marks >= 0 && marks < 40) {
      return "Fail";
    } else {
      return "Invalid";
    }
  };
  const calcPercentage = (marks) => {
    return (marks / 100) * 100;
  };
  return students.map((student, index) => (
    <tr key={student.id} className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={student.image}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{student.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">
        {calcGrade(student.marks)}
      </td>
      <td className="p-5 text-sm md:text-xl text-center">
        {calcPercentage(student.marks)} %
      </td>
    </tr>
  ));
}

const students = [
   {
     id: 1,
     name: "Rezaul",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 79,
     class: "one",
   },
   {
     id: 2,
     name: "Rohim",
     image: "https://i.ibb.co/ssVFLjs/profile.png",
     marks: 80,
     class: "one",
   },
   {
     id: 3,
     name: "Mashrafi",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 95,
     class: "one",
   },
   {
     id: 4,
     name: "Mushfiq",
     image: "https://i.ibb.co/ssVFLjs/profile.png",
     marks: 98,
     class: "one",
   },
   {
     id: 5,
     name: "Tamim",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 78,
     class: "one",
   },
   {
     id: 6,
     name: "Nayem",
     image: "https://i.ibb.co/ssVFLjs/profile.png",
     marks: 65,
     class: "one",
   },
   {
     id: 7,
     name: "Nafiz",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 46,
     class: "one",
   },
   {
     id: 8,
     name: "Taskin",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 88,
     class: "one",
   },
   {
     id: 9,
     name: "Forhad",
     image: "https://i.ibb.co/ssVFLjs/profile.png",
     marks: 49,
     class: "one",
   },
   {
     id: 10,
     name: "Aftab",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 90,
     class: "one",
   },
   {
     id: 11,
     name: "Mustafizz",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 97,
     class: "two",
   },
   {
     id: 12,
     name: "Rofiq",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks:61,
     class: "two",
   },
   {
     id: 13,
     name: "Ashraful",
     image: "https://i.ibb.co/ssVFLjs/profile.png",
     marks: 87,
     class: "two",
   },
   {
     id: 14,
     name: "Tanjim",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 67,
     class: "two",
   },
   {
     id: 15,
     name: "Liton",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 73,
     class: "two",
   },
   {
     id: 16,
     name: "Soummo",
     image: "https://i.ibb.co/ssVFLjs/profile.png",
     marks: 44,
     class: "two",
   },
   {
     id: 17,
     name: "Iqbal",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 91,
     class: "two",
   },
   {
     id: 18,
     name: "Rofiq",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 0,
     class: "two",
   },
   {
     id: 19,
     name: "Pilot",
     image: "https://i.ibb.co/ssVFLjs/profile.png",
     marks: 186,
     class: "two",
   },
   {
     id: 20,
     name: "Nannu",
     image: "https://i.ibb.co/cTTKqNV/avatar.png",
     marks: 30,
     class: "two",
   },
 ];

export default function StudentsTable() {
  const classOneStudents = students.filter(
    (student) => student.class === "one"
  );
  const classTwoStudents = students.filter(
    (student) => student.class === "two"
  );
  return (
    <>
      {/* Search Box */}
      <form>
        <div className="flex">
          <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
              placeholder="Search by Student "
              required
            />
            <button
              type="submit"
              className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
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
              <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
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
            <StudentListItem students={classOneStudents} />
            {/* className two */}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan="4">
                className Two
              </td>
            </tr>
            <StudentListItem students={classTwoStudents} />
          </tbody>
        </table>
      </div>
    </>
  );
}
