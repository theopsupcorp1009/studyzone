import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" mt-10 border-t border-gray-200 py-7">
      <footer className="container mx-auto px-5 md:px-0 lg:px-0">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {year}{" "}
            <span className="font-semibold text-blue-600">StudyZone</span>. All
            rights reserved.
          </p>

          <p className="text-gray-500">
            IT & Education Management | Student Portal
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
