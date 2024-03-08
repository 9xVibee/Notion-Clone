"use client";

import Spinner from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="w-full h-full dark:bg-[#1f1f1f] flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
