import React from "react";

const Hero = () => {
  return (
    <div className="my-16 px-10 mx-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div className="flex flex-col gap-2 md:w-2/3">
        <h1 className="text-4xl md:text-5xl inline-block min-h-13 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-l from-neutral-600 to-neutral-800">
          My Digital Playground
        </h1>
        <p className="text-lg md:text-xl font-medium text-neutral-700 tracking-tight">
          Where Ideas Meet Code, and Curiosity Sparks Creation
        </p>
      </div>

      <p className="text-sm md:text-base text-neutral-500 font-semibold md:w-1/3 md:text-right leading-relaxed ">
        On <span className="w-fit h-fit inline-block font-bold ">AHs Blog</span>, I share my journey of
        learning web development, design, and creativity — from experiments and
        tutorials to insights and inspiration for builders like you.
      </p>
    </div>
  );
};

export default Hero;
