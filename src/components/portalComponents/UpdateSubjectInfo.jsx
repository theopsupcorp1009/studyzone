
"use client";

import React from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const UpdateSubjectInfo = ({ subject }) => {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const updatedData = Object.fromEntries(formData.entries());

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects/${subject._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to update subject!");
        return;
      }

      if (result.modifiedCount > 0) {
        toast.success("Subject updated successfully!");
        document.querySelector("#close-dialog")?.click();
        router.refresh();
      } else {
        toast.info("No changes were made.");
      }
    } catch (error) {
      console.error("Subject update error:", error);
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
              <DialogTitle>Update Subject</DialogTitle>
              <DialogDescription>
                Edit the subject details below and save your changes.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>
              <Field>
                <Label htmlFor="subjectCode">Subject Code</Label>
                <Input
                  id="subjectCode"
                  name="subjectCode"
                  defaultValue={subject.subjectCode}
                  required
                  minLength={2}
                  maxLength={20}
                  pattern="[A-Za-z0-9-]+"
                  title="Use letters, numbers, and hyphens only."
                />
              </Field>

              <Field>
                <Label htmlFor="subjectName">Subject Name</Label>
                <Input
                  id="subjectName"
                  name="subjectName"
                  defaultValue={subject.subjectName}
                  required
                  minLength={2}
                  maxLength={100}
                />
              </Field>

              <Field>
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={subject.description || ""}
                  maxLength={1000}
                />
              </Field>

              <Field>
                <Label htmlFor="duration">Duration (Optional)</Label>
                <Input
                  id="duration"
                  name="duration"
                  defaultValue={subject.duration || ""}
                  maxLength={50}
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

export default UpdateSubjectInfo;
