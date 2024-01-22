import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-veryDarkBlue">
        <div className="flex flex-col-reverse justify-between px-6 py-18 mx-auto space-y-8 md:flex-row md:space-y-8">
          {/* logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-8 md:items-start">
            {/* Logo */}
            <div>
              <img src="img/logo-white.svg" className="h-8" alt="" />
            </div>
            {/* Social links container */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
