import React from "react";
import Link from "next/link";
import { FaBookOpen, FaClock, FaGraduationCap, FaArrowLeft } from "react-icons/fa";


const SubjectDetailsPage = async ({ params }) => {
  const { subjectId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects/${subjectId}`);
  const subject = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10 mb-10">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/registration-portal/subjects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 mb-6"
        >
          <FaArrowLeft />
          Back to Subjects
        </Link>

        <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-6 sm:p-10 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-5">
            <div className="bg-white/20 p-4 rounded-xl">
              <FaBookOpen className="text-3xl" />
            </div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              {subject.subjectCode}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            {subject.subjectName}
          </h1>
          <p className="text-blue-100 text-sm sm:text-base">
            Subject details and course information
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-2xl text-blue-600" />
              <h2 className="text-lg font-semibold">Course Information</h2>
            </div>
            <p className="text-sm text-gray-500 mb-1">Course or Qualification</p>
            <p className="text-gray-800 font-medium">{subject.course}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-2xl text-indigo-600" />
              <h2 className="text-lg font-semibold">Subject Duration</h2>
            </div>
            <p className="text-sm text-gray-500 mb-1">Total Duration</p>
            <p className="text-gray-800 font-medium">
              {subject.duration || "Not specified"}
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 mt-5 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            About This Subject
          </h2>
          <p className="text-gray-600 leading-7 whitespace-pre-line">
            {subject.description || "No description available for this subject."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetailsPage;