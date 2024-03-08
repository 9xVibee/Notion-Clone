"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

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
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
