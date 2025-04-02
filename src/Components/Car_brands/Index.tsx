import React from "react";
import Secure from "./Secure/Index";
import Service from "./Service/Index";

const Main = () => {
  return (
    <div className="flex mt-8 w-[95%] gap-10">
      <div className="w-1/2 max-lg:w-full">
        <Secure />
      </div>
      <div className="max-lg:hidden flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="297"
          viewBox="0 0 2 297"
          fill="none"
        >
          <rect width="2" height="297" fill="#D9D9D9" />
        </svg>
      </div>
      <div className="w-1/2 max-lg:hidden block">
        <Service />
      </div>
    </div>
  );
};

export default Main;
