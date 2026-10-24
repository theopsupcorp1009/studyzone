import Link from "next/link";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className=" border-b border-gray-200">
      <nav className="container mx-auto py-5 flex justify-between items-center px-5 md:px-0 lg:px-0">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-100 rounded">
            <GiGraduateCap className="text-3xl p-1" />
          </div>
          <div>
            <p className="font-bold">
              Study<span className="text-blue-500">Zone</span>
            </p>
            <p className="text-gray-500 text-[10px] md:text-[12px] lg:text-[12px]">
              IT & Education Management
            </p>
          </div>
        </Link>

        <ul className="flex justify-between items-center gap-5 text-[14px] text-blue-700 font-bold">
          <li className="bg-blue-100 px-3 py-1 rounded hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-blue-100 px-3 py-1 rounded hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 cursor-pointer">
            <Link href="/registration-portal">Portal</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
