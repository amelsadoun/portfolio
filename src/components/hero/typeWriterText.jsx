import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriterText() {
  const handleType = (count) => {
    // access word count number
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };

  return (
    <h1 className="sm:text-6xl text-4xl text-white min-h-44 w-full md:w-auto lg:h-auto md:h-44 lg:w-auto">
      I'M AMEL SADOUN
      <br /> A{" "}
      <span className="text-light-pink font-bold">
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["FRONTEND DEVELOPER", "MOBILE DEVELOPER", "UI/UX DESIGNER" ,"GRAPHIC DESIGNER"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          onLoopDone={handleDone}
          onType={handleType}
        />
      </span>
    </h1>
  );
}
