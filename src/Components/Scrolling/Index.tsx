"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  {
    src: "/assets/infinite_scrolling/img_1.png",
    alt: "...",
    width: 88,
    height: 57,
  },
  {
    src: "/assets/infinite_scrolling/img_2.png",
    alt: "...",
    width: 130,
    height: 58,
  },
  {
    src: "/assets/infinite_scrolling/img_3.png",
    alt: "...",
    width: 212,
    height: 58,
  },
  {
    src: "/assets/infinite_scrolling/img_4.png",
    alt: "...",
    width: 88,
    height: 57,
  },
  {
    src: "/assets/infinite_scrolling/img_5.png",
    alt: "...",
    width: 130,
    height: 58,
  },
  {
    src: "",
    alt: "",
    width: 130,
    height: 58,
  },
  {
    src: "/assets/infinite_scrolling/img_6.png",
    alt: "...",
    width: 88,
    height: 57,
  },
  {
    src: "",
    alt: "",
    width: 130,
    height: 58,
  },
];

export default function Scrolling() {
  return (
    <div className="flex justify-center items-center mt-10 flex-col gap-10">
      <div className="text-center">
        <h1 className="text-xl max-md:text-sm font-semibold">Brands we Use</h1>
        <h2 className="text-sm max-md:text-xs text-gray-500">
          Authorised/genuine OEM/OES Parts
        </h2>
      </div>

      <div className="w-[95vw] overflow-hidden">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 5 },
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          modules={[Autoplay]}
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
              }}
              className="flex justify-center items-baseline"
            >
              {logo.src === "" ? (
                <>
                  <div className={`w-[${logo.width}] h-[${logo.height}]`}></div>
                </>
              ) : (
                <>
                  {" "}
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    unoptimized
                    height={logo.height}
                  />
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
