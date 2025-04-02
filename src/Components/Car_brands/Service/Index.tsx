import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="flex justify-center items-center mt-10 flex-col gap-16 relative">
      <div className="absolute right-0 top-8">
        <div className=" p-2 rounded-full bg-white shadow-2xl">
          <Image
            src={"/svg/phone.svg"}
            width={40}
            height={40}
            unoptimized
            alt="Car"
          />
        </div>
      </div>
      <h1 className="text-2xl font-extrabold text-center">
        Secure your service in Just 3 <br />
        simple steps
      </h1>

      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500">
          <span className="flex items-center">
            <Image
              src={"/svg/car.svg"}
              width={80}
              height={50}
              unoptimized
              alt="Car"
            />
          </span>
        </li>
        <li className="flex md:w-full justify-center">
          <Image src="/svg/arrow.svg" width={50} height={20} alt="Arrow" />
        </li>
        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500">
          <span className="flex items-center">
            <Image
              src={"/svg/schedule.svg"}
              width={80}
              height={50}
              unoptimized
              alt="Car"
            />
          </span>
        </li>
        <li className="flex md:w-full justify-center">
          <Image src="/svg/arrow.svg" width={50} height={20} alt="Arrow" />
        </li>
        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500">
          <span className="flex items-center">
            <Image
              src={"/svg/address.svg"}
              width={100}
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
