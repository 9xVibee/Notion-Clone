import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex dark:bg-[#1f1f1f] items-center w-full p-6 bg-background">
      <Logo />
      <div className="md:ml-auto w-full md:justify-end flex justify-between items-center gap-x-2 text-muted-foreground">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Condition
        </Button>
      </div>
    </div>
  );
};

export default Footer;
