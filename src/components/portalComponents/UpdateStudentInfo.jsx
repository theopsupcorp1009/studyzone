
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const UpdateStudentInfo = ({ student, subjects }) => {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const updatedData = Object.fromEntries(formData.entries());

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/students/${student._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to update student!");
        return;
      }

      if (result.modifiedCount > 0) {
        toast.success("Student updated successfully!");
        document.querySelector("#close-dialog")?.click();
        router.refresh();
      } else {
        toast.info("No changes were made.");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Unable to connect to the server.");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button
              variant="outline"
              className="cursor-pointer px-3 py-1 rounded-md bg-amber-100 text-amber-700 hover:bg-amber-200"
            >
              Update
            </Button>
          }
        />

        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <form onSubmit={handleUpdate}>
            <DialogHeader>
              <DialogTitle>Update Student</DialogTitle>
              <DialogDescription>
                Edit the student details below and save your changes.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>
              <Field>
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  name="studentId"
                  defaultValue={student.studentId}
                  required
                />
              </Field>

              <Field>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={student.name}
                  required
                  minLength={2}
                />
              </Field>

              <Field>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={student.email}
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Enter a valid email, such as student@gmail.com"
                />
              </Field>

              <Field>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  defaultValue={student.phone}
                  required
                  minLength={7}
                  maxLength={20}
                  pattern="\+?[0-9\s()-]{7,20}"
                  title="Enter a valid phone number."
                />
              </Field>

              <Field>
                <Label htmlFor="course">
                  Course or Qualification (Optional)
                </Label>
                <select
                  id="course"
                  name="course"
                  defaultValue={student.course || ""}
                  className="cursor-pointer w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">No course selected</option>
                  {subjects.map((subject) => (
                    <option key={subject._id} value={subject.subjectName}>
                      {subject.subjectName}
                    </option>
                  ))}
                </select>
              </Field>

              <Field>
                <Label htmlFor="date">Registration Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  defaultValue={student.date}
                  required
                />
              </Field>
            </FieldGroup>

            <DialogFooter className="mt-5">
              <DialogClose
                render={
                  <Button
                    id="close-dialog"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    Cancel
                  </Button>
                }
              />

              <Button type="submit" className="cursor-pointer">
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateStudentInfo;
