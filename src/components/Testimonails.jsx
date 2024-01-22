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
          <div className=" flex flex-col mt-20 md:flex-row md:space-x-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="../public/img/avatar-anisha.png"
                className="w-16 mt-14"
              />
              <h5 className="text-lg font-bold">Anisha li</h5>
              <p className="text-50 text-darkGrayishBlue">
                "manage has supercharged our team's workflow. The ability to
                maintain visibilty on larger milestones at all times keeps
                everyone motivated."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src="../public/img/avatar-ali.png" className="w-16 mt-14" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-50 text-darkGrayishBlue">
                "manage has supercharged our team's workflow. The ability to
                maintain visibilty on larger milestones at all times keeps
                everyone motivated."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img
                src="../public/img/avatar-richard.png"
                className="w-16 mt-14"
              />
              <h5 className="text-lg font-bold">Richard</h5>
              <p className="text-50 text-darkGrayishBlue">
                "manage has supercharged our team's workflow. The ability to
                maintain visibilty on larger milestones at all times keeps
                everyone motivated."
              </p>
            </div>
          </div>

          <div className="my-16">
            <button className="py-2  text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonails;
