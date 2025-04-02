import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between p-4 px-20 max-md:p-4">
          <span className="self-center text-3xl font-semibold whitespace-nowrap bg-gradient-to-r from-[#0841D1] to-[#6B01D8] text-transparent bg-clip-text">
            RUMO
          </span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex justify-center items-center gap-4 max-sm:gap-0">
              <button
                type="button"
                className="flex gap-2 cursor-pointer justify-center items-center text-xs font-bold px-4 py-2 border-2 max-sm:border-0 border-[#0841D1] rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.18815 7.31623C8.84754 9.97488 9.45084 6.89911 11.1441 8.59118C12.7765 10.2231 13.7147 10.5501 11.6465 12.6178C11.3874 12.826 9.7414 15.3308 3.95673 9.54775C-1.82866 3.76397 0.674715 2.11626 0.882972 1.85727C2.95624 -0.216134 3.27757 0.727557 4.90999 2.35952C6.60323 4.0523 3.52876 4.65758 6.18815 7.31623Z"
                    fill="url(#paint0_linear_87235_5682)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_87235_5682"
                      x1="0.166992"
                      y1="10.4586"
                      x2="12.8337"
                      y2="10.4607"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0841D1" />
                      <stop offset="1" stopColor="#6B01D8" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="bg-gradient-to-r from-[#0841D1] to-[#6B01D8] text-transparent bg-clip-text">
                  CALL US
                </span>
              </button>
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.8236 12.1505C28.8236 17.0455 24.8988 20.9705 20.0003 20.9705C15.1035 20.9705 11.177 17.0455 11.177 12.1505C11.177 7.2554 15.1035 3.33203 20.0003 3.33203C24.8988 3.33203 28.8236 7.2554 28.8236 12.1505ZM20.0003 36.6654C12.7709 36.6654 6.66699 35.4904 6.66699 30.957C6.66699 26.4219 12.8093 25.2886 20.0003 25.2886C27.2314 25.2886 33.3337 26.4636 33.3337 30.997C33.3337 35.532 27.1914 36.6654 20.0003 36.6654Z"
                    fill="url(#paint0_linear_86986_169872)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_86986_169872"
                      x1="6.66699"
                      y1="29.0969"
                      x2="33.3337"
                      y2="29.1004"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0841D1" />
                      <stop offset="1" stopColor="#6B01D8" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
