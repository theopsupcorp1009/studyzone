import React from 'react';
import AddSubjectDialog from "@/components/portalComponents/AddSubjectDialog";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import TotalCountCard from '@/components/portalComponents/TotalCountCard';
import UpdateSubjectInfo from '@/components/portalComponents/UpdateSubjectInfo';
import RemoveSubject from '@/components/portalComponents/RemoveSubjects';

const SubjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects`);
  const subjectData = await res.json();

  return (
    <div className="px-5 my-10">
      <div className='bg-blue-50 rounded-xl p-5'>
        <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Subjects</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage all subjects and course information
          </p>
        </div>
        <AddSubjectDialog />
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        <TotalCountCard count={subjectData.length} text={'Total Subjects'} />
        <TotalCountCard count={subjectData.length} text={'Total Subjects'} />
        <TotalCountCard count={subjectData.length} text={'Total Subjects'} />
        <TotalCountCard count={subjectData.length} text={'Total Subjects'} />
      </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjectData.map((subject) => (
          <div
            key={subject._id}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-block">
                  {subject.subjectCode}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mt-3">
                  {subject.subjectName}
                </h3>
              </div>
              <div className="bg-blue-100 text-blue-700 rounded-lg p-3">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              {subject.description || "No description available."}
            </p>

            <div className="border-t border-gray-100 mt-5 pt-4 space-y-3">
              <div>
                <p className="text-xs text-gray-500">Course / Qualification</p>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {subject.course}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {subject.duration || "Not specified"}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 mt-5">
              <Link href={`/registration-portal/subjects/${subject._id}`}>
                <Button
                variant="outline"
                className="cursor-pointer"
              >
                View
              </Button>
              </Link>
             
              <UpdateSubjectInfo subject={subject} />
           
              <RemoveSubject subject={subject}/>
            </div>
          </div>
        ))}
      </div>

      {subjectData.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-10 text-center">
          <h3 className="font-semibold text-gray-700">No subjects found</h3>
          <p className="text-sm text-gray-500 mt-2">
            Add a subject to see it displayed here.
          </p>
        </div>
      )}
    </div>
  );
};

export default SubjectPage;