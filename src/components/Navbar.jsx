import React from "react";

function Navbar() {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between items-center p-4 ">
      {/* Navbar */}
      <nav className="relative w-full  mx-auto  ">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src="./img/logo.svg" alt="" />
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex ">
            <h1 className="hover:text-darkGrayishBlue">Pricing</h1>
            <h1 className="hover:text-darkGrayishBlue">Product</h1>
            <h1 className="hover:text-darkGrayishBlue">About Us</h1>
            <h1 className="hover:text-darkGrayishBlue">Careers</h1>
            <h1 className="hover:text-darkGrayishBlue">Community</h1>
          </div>

          {/* Button */}
          <button className="hidden  py-2  text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
