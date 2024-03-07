import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={"/logo.svg"} alt="Logo" height={"40"} width={"40"} />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;
