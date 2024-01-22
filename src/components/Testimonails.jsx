import React from "react";

function Testimonails() {
  return (
    <div className="max-w-[1300px] mx-auto px-4 mt-10">
      {/* Container to headintg and testn blocks */}
      <div>
        <div className=" w-full text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center ">
            What's Different About Manage?
          </h2>
          {/* Testimonials Container */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="" className="w-16 mt-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonails;
