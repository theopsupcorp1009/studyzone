"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RemoveSubject = ({ subject }) => {
  const { _id } = subject;
  const router = useRouter();
  const handleRemove = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subjects/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete subject");
      }

      const afterDelete = await res.json();

      if (afterDelete.deletedCount > 0) {
        toast.success("Deleted Successfully!");
        router.refresh();
      } else {
        toast.error("Subject not found or already deleted.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete subject!");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button
              variant="outline"
              className="px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer"
            >
              Remove
            </Button>
          }
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this information from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleRemove(_id)}
              className="cursor-pointer"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default RemoveSubject;
