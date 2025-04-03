import Image from "next/image";
import React from "react";

const Secure = () => {
  return (
    <div className="flex justify-center items-center mt-8 flex-col gap-28 max-lg:gap-8">
      <h1 className="text-4xl max-md:text-lg text-[#373751] font-extrabold">
        Car Brands we service
      </h1>
      <Image
        src={"/assets/car_brands.png"}
        width={0}
        height={0}
        unoptimized
        className="w-full h-auto"
        alt="...."
      />
    </div>
  );
};

export default Secure;
