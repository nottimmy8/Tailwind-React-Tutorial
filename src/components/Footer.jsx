import React from "react";

function Footer() {
  return (
    <div className="max-w-[1300px] mx-auto px-4 mt-0">
      <div className="bg-veryDarkBlue">
        <div className="flex flex-col-reverse justify-between px-6 py-18 mx-auto space-y-8 md:flex-row md:space-y-8">
          {/* logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-8 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright @copy; 2022,All Right Reserved
            </div>
            {/* Logo */}
            <div>
              <img src="img/logo-white.svg" className="h-8" alt="" />
            </div>
            {/* Social links container */}
            <div className="flex justify space-x-4">
              {/* link 1 */}
              <p href="">
                <img src="img/icon-facebook.svg" alt="" />
              </p>
              {/* link 2 */}
              <p>
                <img src="img/icon-youtube.svg" alt="" />
              </p>
              {/* link 3 */}
              <p>
                <img src="img/icon-twitter.svg" alt="" />
              </p>
              {/* link 4 */}
              <p href="">
                <img src="img/icon-pinterest.svg" alt="" />
              </p>
              {/* link 5 */}
              <p href="">
                <img src="img/icon-instagram.svg" alt="" />
              </p>
            </div>
          </div>
          {/* list container */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <p className="hover:text-brightRed">Home</p>
              <p className="hover:text-brightRed">Pricing</p>
              <p className="hover:text-brightRed">Products</p>
              <p className="hover:text-brightRed">About</p>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <p className="hover:text-brightRed">Careers</p>
              <p className="hover:text-brightRed">Community</p>
              <p className="hover:text-brightRed">Privacy policy</p>
            </div>
          </div>
          {/* input container */}
          <div className="flex flex-col justify-between">
            <form action="">
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="updated in your inbox"
                />
                <button className="px-6 py2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"></button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              copyright &copy 2022 all right
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
