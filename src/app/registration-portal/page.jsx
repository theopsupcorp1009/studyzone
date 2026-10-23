import React from "react";
import Link from "next/link";
import { FaUsers, FaBookOpen } from "react-icons/fa";
export const dynamic = "force-dynamic";

const RegistrationPortal = async () => {
  const studentRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/students`);
  const students = await studentRes.json();

  const subjectRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects`);
  const subjects = await subjectRes.json();

  return (
    <div className="p-5 sm:p-8 space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Welcome to StudyZone</h1>
        <p className="mt-2 text-blue-100">
          Manage your data from here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-xl">
            <FaUsers className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <h2 className="text-2xl font-bold">{students.length}</h2>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="bg-purple-100 text-purple-600 p-4 rounded-xl">
            <FaBookOpen className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Subjects</p>
            <h2 className="text-2xl font-bold">{subjects.length}</h2>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <FaUsers className="text-2xl text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Student Information
              </h2>
              <p className="text-sm text-gray-500">
                Recently registered students
              </p>
            </div>
          </div>

          <Link
            href="/registration-portal/student-list"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700"
          >
            Manage Students
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm">
                <th className="p-4">Student ID</th>
                <th className="p-4">Full Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Course</th>
              </tr>
            </thead>
            <tbody>
              {students.slice(0, 5).map((student) => (
                <tr key={student._id} className="border-t hover:bg-blue-50">
                  <td className="p-4 text-sm">{student.studentId}</td>
                  <td className="p-4 text-sm font-medium">{student.name}</td>
                  <td className="p-4 text-sm">{student.email}</td>
                  <td className="p-4 text-sm">{student.course}</td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    No students registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <FaBookOpen className="text-2xl text-purple-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Subject Information
              </h2>
              <p className="text-sm text-gray-500">
                Explore available subjects
              </p>
            </div>
          </div>

          <Link
            href="/registration-portal/subjects"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-700"
          >
            Manage Subjects
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.slice(0, 6).map((subject) => (
            <div
              key={subject._id}
              className="border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition"
            >
              <div className="bg-purple-50 text-purple-600 w-11 h-11 rounded-lg flex items-center justify-center mb-4">
                <FaBookOpen className="text-xl" />
              </div>

              <h3 className="font-bold text-gray-800">{subject.subjectName}</h3>

              <p className="text-sm text-gray-500 mt-2">
                Code: {subject.subjectCode}
              </p>

              <p className="text-sm text-gray-600 mt-2">{subject.course}</p>

              <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                {subject.description || "No description available."}
              </p>
            </div>
          ))}

          {subjects.length === 0 && (
            <p className="text-gray-500 col-span-full py-6 text-center">
              No subjects added yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPortal;
