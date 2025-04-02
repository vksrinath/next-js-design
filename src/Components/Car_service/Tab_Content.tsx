import Image from "next/image";
import React from "react";

const Tab_Content = ({ services }: any) => {
  return (
    <div className="rounded-lg overflow-hidden mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {services.map((service: any, index: any) => (
          <div
            key={index}
            className="bg-white text-black p-8 flex items-center border-b border-r b border-[#3333] relative"
          >
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <div className="text-right">
                  <div className="flex justify-center items-center gap-3">
                    <p className="text-gray-500 line-through text-xs">
                      {service.oldPrice}
                    </p>
                    <p className="text-2xl font-bold">{service.price} </p>
                  </div>
                  <span className="text-xs text-gray-600 text-right w-full">
                    tax included
                  </span>
                </div>
              </div>
              <p className="text-sm mt-2 flex gap-1">
                <Image
                  src="/svg/tabs/content/time.svg"
                  width={20}
                  height={20}
                  alt={"...."}
                />{" "}
                {service.duration}
              </p>
              <p className="text-sm mt-2 flex gap-1">
                <Image
                  src="/svg/tabs/content/service.svg"
                  width={20}
                  height={20}
                  alt={"...."}
                />{" "}
                {service.details}
              </p>
              <p className="text-xs mt-1 text-[#0060EF]">See details</p>
              <button
                style={{
                  letterSpacing: "2px",
                }}
                className="mt-5 px-10 text-sm py-3 text-white uppercase rounded-sm bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0]"
              >
                Book Now
              </button>
            </div>
            <div
              style={{
                width: 200,
                height: 160,
                objectFit: "cover",
                overflow: "hidden",
                position: "absolute",
              }}
              className="right-0 bottom-0"
            >
              <Image
                src={service.image}
                width={0}
                height={0}
                alt={service.title}
                unoptimized
                className=" object-cover h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab_Content;
