import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mt-10 px-5 md:px-0 lg:px-0">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 rounded-2xl px-16 py-10 md:py-20 lg:py-20 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="inline-block border border-blue-300/60 rounded-full px-5 py-2 text-[12px] md:text-sm lg:text-sm font-semibold uppercase tracking-widest text-blue-100">
            Next-Gen Enterprise Student Portal
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Empowering Education & 
            <span className="text-blue-200"> Student Management</span>
          </h2>

          <p className="text-base text-blue-100 leading-5 md:leading-7 lg:leading-7 md:max-w-2xl lg:max-w-2xl mx-auto">
            Welcome to StudyZone's central administrative platform. Built for
            seamless enrollment processing, dual validation data integrity, and
            real-time LMS/CRM integration.
          </p>

          <Link href="/registration-portal">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-300 hover:text-black hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              Launch Student Portal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
