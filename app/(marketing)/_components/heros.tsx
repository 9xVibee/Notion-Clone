import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl dark:bg-[#1f1f1f]">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src={"/documents.png"}
            fill
            className="object-contain  dark:hidden"
            alt="Documents"
          />
          <Image
            src={"/documents-dark.png"}
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            alt="Reading"
            src={"/reading.png"}
            fill
            className="object-contain dark:hidden"
          />
          <Image
            alt="Reading"
            src={"/reading-dark.png"}
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
