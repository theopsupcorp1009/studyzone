import Link from "next/link";
import React from "react";

const StudentDetailsPage = async ({ params }) => {
  const { studentId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/students/${studentId}`);
  const student = await res.json();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">
            Registration Portal / Student List / Details
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Student Profile
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            View complete student registration information.
          </p>
        </div>

        <Link
          href="/registration-portal/student-list"
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          Back to Students
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-6 text-white flex items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-3xl font-bold">
          {student.name?.charAt(0)}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold">{student.name}</h3>
          <p className="text-blue-100 mt-1">Student ID: {student.studentId}</p>
          <span className="inline-block mt-3 bg-green-400/20 text-green-100 border border-green-300/40 rounded-full px-3 py-1 text-xs font-semibold">
            Registered Student
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Enrolled Course</p>
          <h3 className="text-lg font-bold text-blue-700 mt-2">
            {student.course}
          </h3>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Registration Date</p>
          <h3 className="text-lg font-bold text-gray-800 mt-2">
            {student.date}
          </h3>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Contact Number</p>
          <h3 className="text-lg font-bold text-gray-800 mt-2">
            {student.phone}
          </h3>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800">
            Personal & Registration Details
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Student information stored in the registration system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 p-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Full Name</p>
            <p className="font-semibold text-gray-800">{student.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Student ID</p>
            <p className="font-semibold text-gray-800">{student.studentId}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Email Address</p>
            <p className="font-semibold text-gray-800 break-all">
              {student.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Phone Number</p>
            <p className="font-semibold text-gray-800">{student.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">
              Course or Qualification
            </p>
            <p className="font-semibold text-gray-800">{student.course}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Registration Date</p>
            <p className="font-semibold text-gray-800">{student.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsPage;
