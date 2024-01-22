import React from "react";

function Hero() {
  return (
    <div className="max-w-[1300px] mx-auto px-4 ">
      {/* Flexcontainer */}
      <div className="flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row  ">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="py-2  text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
              Get Started
            </button>
          </div>
        </div>
        {/* image */}
        <div className="md:w-1/2">
          <img src="../public/img/illustration-intro.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
