import React from "react";

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative container mx-auto p-5"></nav>
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src="./img/logo.svg" alt="" />
        </div>
        {/* Menu Items */}
        <div className="flex space-x-6">
          <h1>Pricing</h1>
          <h1>Product</h1>
          <h1>About Us</h1>
          <h1>Careers</h1>
          <h1>Community</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
