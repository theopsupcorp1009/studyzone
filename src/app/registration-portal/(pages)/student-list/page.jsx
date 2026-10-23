import DeleteStudent from "@/components/portalComponents/DeleteStudent";
import TotalCountCard from "@/components/portalComponents/TotalCountCard";
import UpdateStudentInfo from "@/components/portalComponents/UpdateStudentInfo";
import AddStudentDialog from "@/components/portalComponents/AddStudentDialog";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";
export const dynamic = "force-dynamic";

const StudentList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/students`);
  const studentData = await res.json();

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects`);
  const subjectData = await response.json();

  return (
    <div className="px-3 sm:px-4 md:px-5 mt-6 sm:mt-8 md:mt-10 mb-10">
      <div className="bg-blue-50 p-4 sm:p-5 rounded-xl">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center sm:justify-between md:justify-between lg:justify-between items-start sm:items-center md:items-center lg:items-center">
          <div className="flex items-center justify-start gap-3">
            <FaUsers className="text-2xl sm:text-3xl shrink-0" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Registered Students
              </h2>
              <p className="text-gray-500 text-[12px]">
                View and manage all registered students in the system
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <AddStudentDialog />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          <TotalCountCard count={studentData.length} text={"Total Students"} />
          <TotalCountCard count={studentData.length} text={"Total Students"} />
          <TotalCountCard count={studentData.length} text={"Total Students"} />
          <TotalCountCard count={studentData.length} text={"Total Students"} />
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[1050px] text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-3 border-b">Student ID</th>
              <th className="p-3 border-b">Full Name</th>
              <th className="p-3 border-b">Email Address</th>
              <th className="p-3 border-b">Phone Number</th>
              <th className="p-3 border-b">Course</th>
              <th className="p-3 border-b">Registration Date</th>
              <th className="p-3 border-b text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {studentData.map((student) => (
              <tr key={student._id} className="hover:bg-blue-50 text-sm">
                <td className="p-3 border-b">{student.studentId}</td>
                <td className="p-3 border-b font-medium">{student.name}</td>
                <td className="p-3 border-b">{student.email}</td>
                <td className="p-3 border-b">{student.phone}</td>
                <td className="p-3 border-b">{student.course}</td>
                <td className="p-3 border-b">{student.date}</td>
                <td className="p-3 border-b">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={`/registration-portal/student-list/${student._id}`}
                    >
                      <button
                        type="button"
                        className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                      >
                        View
                      </button>
                    </Link>

                    <UpdateStudentInfo student={student} subjects={subjectData} />

                    <DeleteStudent student={student} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
