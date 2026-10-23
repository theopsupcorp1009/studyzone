
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


const AddSubjectDialog = () => {
  const router = useRouter();

  const handleAddSubject = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const subject = Object.fromEntries(formData.entries());

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subject),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to add subject!");
        return;
      }

      toast.success("Subject added successfully!");
      e.target.reset();
      document.querySelector("#close-dialog")?.click();
      router.refresh();
    } catch (error) {
      console.error("Subject registration error:", error);
      toast.error("Unable to connect to the server.");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button className="cursor-pointer px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Add Subject
            </Button>
          }
        />

        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New Subject</DialogTitle>
            <DialogDescription>
              Enter the subject information below to add it to the system.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddSubject}>
            <FieldGroup>
              <Field>
                <Label htmlFor="subjectCode">Subject Code</Label>
                <Input
                  id="subjectCode"
                  name="subjectCode"
                  placeholder="e.g. SUB-001"
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
                  placeholder="Enter subject name"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </Field>

              <Field>
                <Label htmlFor="description">Subject Description (Optional)</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter a brief subject description"
                  rows={3}
                  maxLength={1000}
                />
              </Field>

              <Field>
                <Label htmlFor="duration">Duration (Optional)</Label>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g. 12 weeks"
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
                Add Subject
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddSubjectDialog;
