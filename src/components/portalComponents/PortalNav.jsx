"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoHome } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { MdOutlineSubject } from "react-icons/md";

const PortalNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 border-b border-blue-100 bg-blue-700">
      <nav className="p-5 flex justify-between items-center">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <TiThMenu className="text-3xl text-white" />

          <div>
            <p className="font-bold text-white">
              Study<span className="text-blue-200">Zone</span>
            </p>
            <p className="text-blue-100 text-[12px]">
              IT & Education Management
            </p>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed left-0 top-20.5 bottom-0 bg-blue-800 overflow-y-auto z-50">
            <ul className="text-white text-[14px] font-medium">
              <li className="px-6 py-2">
                <Link
                  onClick={()=>setMenuOpen(!menuOpen)}
                  href="/registration-portal"
                  className="flex justify-start items-center gap-1.5"
                >
                  <IoHome /> Home
                </Link>
              </li>

              <li className="px-6 py-2">
                <Link
                  onClick={()=>setMenuOpen(!menuOpen)}
                  href="/registration-portal/subjects"
                  className="flex justify-start items-center gap-1.5"
                >
                  <MdOutlineSubject /> Manage Subjects
                </Link>
              </li>

              <li className="px-6 py-2">
                <Link
                  onClick={()=>setMenuOpen(!menuOpen)}
                  href="/registration-portal/student-list"
                  className="flex justify-start items-center gap-1.5"
                >
                  <ImUsers /> Manage Students
                </Link>
              </li>
            </ul>
          </div>
        )}

        <ul className="flex items-center gap-1 text-sm font-bold text-white">
          <li>
            <div className="flex items-center justify-center rounded-full bg-white/20 border-2 border-blue-300 hover:bg-white/30 transition-colors duration-200 cursor-pointer">
              <Image
                src="/avatar.webp"
                alt="User avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
          </li>

          <li className="px-4 py-2 rounded-lg hover:bg-white/20 hover:text-white transition-colors duration-200 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PortalNav;
