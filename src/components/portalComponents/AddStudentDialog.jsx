
"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const RegisterStudent = () => {
  const router = useRouter();
  const [subjects, setSubjects] = useState([]);

  const handleRegistration = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    try {
      const formData = new FormData(form);
      const student = Object.fromEntries(formData.entries());

      student.studentId = student.studentId.trim();
      student.name = student.name.trim();
      student.email = student.email.trim().toLowerCase();
      student.phone = student.phone.trim();

      if (student.course) {
        student.course = student.course.trim();
      }

      const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(student.email)) {
        toast.error("Please enter a valid email address.");
        return;
      }

      const phoneDigits = student.phone.replace(/\D/g, "");

      if (phoneDigits.length < 7 || phoneDigits.length > 15) {
        toast.error("Phone number must contain 7–15 digits.");
        return;
      }

      if (
        !student.studentId ||
        !student.name ||
        !student.email ||
        !student.phone ||
        !student.date
      ) {
        toast.error("Please complete all required fields.");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(result.message || "Failed to register student!");
        return;
      }

      toast.success(result.message || "Student registered successfully!");

      form.reset();
      document.querySelector("#close-student-dialog")?.click();
      router.refresh();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Unable to connect to the server.");
    }
  };

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects`);

        if (!res.ok) {
          throw new Error("Failed to fetch subjects");
        }

        const subjectData = await res.json();
        setSubjects(subjectData);
      } catch (error) {
        console.error("Subject fetch error:", error);
        toast.error("Could not load courses.");
      }
    };

    fetchSubject();
  }, []);

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
            Register Student
          </Button>
        }
      />

      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Register New Student
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Fill in the required details. Course selection is optional.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleRegistration}
          className="mt-4 bg-white border border-gray-200 rounded-xl p-6 space-y-5 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student ID
              </label>
              <input
                type="text"
                name="studentId"
                placeholder="e.g. STU-001"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={2}
                maxLength={30}
                pattern="[A-Za-z0-9_-]+"
                title="Use 2–30 letters, numbers, hyphens, or underscores."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={2}
                maxLength={100}
                pattern=".*\S.*"
                title="Please enter a valid full name."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="student@example.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                maxLength={254}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Enter a valid email address, such as student@example.com."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={7}
                maxLength={20}
                pattern="\+?[0-9\s()-]{7,20}"
                title="Enter a valid phone number containing 7–15 digits."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course or Qualification (Optional)
              </label>
              <select
                name="course"
                defaultValue=""
                className="cursor-pointer w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">No course selected</option>
                {subjects.map((subject) => (
                  <option key={subject._id} value={subject.subjectName}>
                    {subject.subjectName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration Date
              </label>
              <input
                type="date"
                name="date"
                defaultValue={new Date().toLocaleDateString("en-CA")}
                max={new Date().toLocaleDateString("en-CA")}
                className="cursor-pointer w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-3 border-t border-gray-200 pt-5">
            <button
              type="reset"
              className="cursor-pointer px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Clear Form
            </button>

            <DialogClose
              render={
                <Button
                  id="close-student-dialog"
                  type="button"
                  variant="outline"
                  className="hidden"
                >
                  Close
                </Button>
              }
            />

            <button
              type="submit"
              className="cursor-pointer px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Register Student
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterStudent;
