"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    category: "Car wash",
    image: "/assets/tabs/tab_2.png",
    items: [
      {
        title: "Car Spa",
        price: "₹ 3,999",
        oldPrice: "₹ 4,500",
        duration: "Takes 2 - 4 hrs",
        details: "Includes 12 services",
      },
      {
        title: "Car cleaning",
        price: "₹ 3,999",
        oldPrice: "₹ 4,500",
        duration: "Takes 2 - 4 hrs",
        details: "Includes 12 services",
      },
    ],
  },
  {
    category: "Diagnostics",
    image: "/assets/tabs/tab_1.png",
  },
  {
    category: "Periodic Services",
    image: "/assets/tabs/tab_1.png",
  },
  {
    category: "Major Repairs",
    image: "/assets/tabs/tab_2.png",
  },
];

export default function Accordion() {
  const [openCategory, setOpenCategory] = useState<any>(0);

  return (
    <div className="w-full space-y-4 py-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={`${
            openCategory == index ? "bg-[#F5ECFC] " : "border border-[#3333]"
          }  rounded-lg relative`}
        >
          <button
            className="flex justify-between items-center w-full py-6 px-2 text-left font-semibold text-lg"
            onClick={() =>
              setOpenCategory(openCategory === index ? null : index)
            }
          >
            <span className="flex items-center gap-2">
              <span>
                {openCategory == index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.5">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.25 12C21.25 6.892 17.109 2.75 12 2.75C6.892 2.75 2.75 6.892 2.75 12C2.75 17.108 6.892 21.25 12 21.25C17.109 21.25 21.25 17.108 21.25 12Z"
                        stroke="url(#paint0_linear_86986_169878)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4717 13.4414L12.0007 9.95541L8.52968 13.4414"
                        stroke="url(#paint1_linear_86986_169878)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_86986_169878"
                        x1="21.25"
                        y1="6.95048"
                        x2="2.74997"
                        y2="6.94748"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0841D1" />
                        <stop offset="1" stopColor="#6B01D8" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_86986_169878"
                        x1="15.4717"
                        y1="10.7469"
                        x2="8.52967"
                        y2="10.7447"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0841D1" />
                        <stop offset="1" stopColor="#6B01D8" />
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.5">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75 12C2.75 17.108 6.891 21.25 12 21.25C17.108 21.25 21.25 17.108 21.25 12C21.25 6.892 17.108 2.75 12 2.75C6.891 2.75 2.75 6.892 2.75 12Z"
                        stroke="#80B0F7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.52832 10.5586L11.9993 14.0446L15.4703 10.5586"
                        stroke="#80B0F7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                )}
              </span>
              <span
                className={`${
                  openCategory == index
                    ? "bg-gradient-to-r from-[#0841D1] to-[#6B01D8] bg-clip-text text-transparent"
                    : ""
                } font-bold`}
              >
                {" "}
                {service.category}
              </span>
            </span>
          </button>
          {openCategory === index && service.items && (
            <div className=" space-y-2 bg-white pt-4">
              {service.items.map((item, i) => (
                <div
                  key={i}
                  className="p-3 border border-[#F3F3F6] bg-[#F3F3F6]  rounded-lg"
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="flex flex-col  text-right">
                      <p className="text-md font-bold">{item.price}</p>
                      <p className="text-gray-500 line-through text-xs">
                        {item.oldPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-col mt-4">
                    <p className="text-xs flex gap-1">
                      {" "}
                      <Image
                        src="/svg/tabs/content/time.svg"
                        width={20}
                        height={20}
                        alt={"...."}
                      />{" "}
                      {item.duration}
                    </p>
                    <p className="text-xs flex gap-1">
                      {" "}
                      <Image
                        src="/svg/tabs/content/service.svg"
                        width={20}
                        height={20}
                        alt={"...."}
                      />{" "}
                      {item.details}
                    </p>
                    <p className="text-xs text-[#0060EF]">See details</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button
                      style={{
                        letterSpacing: "2px",
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] text-white rounded-md text-xs"
                    >
                      BOOK
                    </button>
                    <button
                      style={{
                        letterSpacing: "2px",
                      }}
                      className=" font-bold bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] text-xs bg-clip-text text-transparent"
                    >
                      CALL US
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {service.image && openCategory !== index && (
            <div className=" absolute right-0 bottom-0">
              <Image
                src={service.image}
                width={70}
                height={50}
                alt={service.category}
                className="ml-auto"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
