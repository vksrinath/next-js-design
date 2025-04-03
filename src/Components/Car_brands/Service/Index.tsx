import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="flex justify-center items-center mt-10 flex-col gap-12 relative">
      {/* <div className="absolute right-0 top-8">
        <div className=" p-2 rounded-full bg-white shadow-2xl cursor-pointer">
          <Image
            src={"/svg/phone.svg"}
            width={40}
            height={40}
            unoptimized
            alt="Car"
          />
        </div>
      </div> */}
      <h1 className="text-4xl font-extrabold text-center">
        Secure your service in Just 3 <br />
        simple steps
      </h1>

      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="flex md:w-full items-center justify-center">
          <span className="flex items-center">
            <Image
              src={"/svg/car.svg"}
              width={100}
              height={50}
              unoptimized
              alt="Car"
            />
          </span>
        </li>
        <li className="flex md:w-full justify-center items-start mb-16">
          <Image src="/svg/arrow.svg" width={90} height={30} alt="Arrow" />
        </li>
        <li className="flex md:w-full items-center justify-center">
          <span className="flex items-center">
            <Image
              src={"/svg/schedule.svg"}
              width={100}
              height={50}
              unoptimized
              alt="Car"
            />
          </span>
        </li>
        <li className="flex md:w-full justify-center  items-start mb-16">
          <Image src="/svg/arrow.svg" width={90} height={30} alt="Arrow" />
        </li>
        <li className="flex md:w-full items-center justify-center">
          <span className="flex items-center">
            <Image
              src={"/svg/address.svg"}
              width={120}
              height={50}
              unoptimized
              alt="Car"
            />
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Service;
