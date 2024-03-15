"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const router = useRouter();

  //! creating a new document
  const handleCreate = () => {
    const promise = create({
      title: "Untitled",
    }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating...",
      success: "New note created",
      error: "Failed to create new note",
    });
  };

  return (
    <div className="flex h-full  flex-col items-center justify-center">
      <Image
        src={"/empty.png"}
        alt="empty"
        height={"300"}
        width={"300"}
        className="dark:hidden"
      />
      <Image
        src={"/empty-dark.png"}
        alt="empty"
        height={"300"}
        width={"300"}
        className=" hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={handleCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
