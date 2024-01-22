import React from "react";

function CTA() {
  return (
    <div className="max-w-[1300px] mx-auto px-4 mt-10">
      <div className="bg-brightRed">
        {/* Flex container */}
        <div className="flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* Headint */}
          <h2 className=" text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left ">
            simplify how your team works today
          </h2>
          {/* Button */}
          <button className="py-2  text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
