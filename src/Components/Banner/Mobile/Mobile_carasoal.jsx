"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: `Car Servicing <br/> at-home`,
    subtitle: "Delivering trust always",
    location: "Now in Bangalore",
    offer: "Upto ₹300 Off",
    image: "/assets/banner_img_1.png",
  },
  {
    id: 2,
    title: "Missed your Car’s Service?",
    subtitle: "Get it done at home with Rumo",
    location: "Now in Gurgaon",
    offer: "Upto ₹300 Off",
    image: "/assets/banner_img_2.png",
  },
];

const SwiperSlider = () => {
  return (
    <div className="w-full px-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={false}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-gradient-to-t from-[#0841D1] to-[#6B01D8] p-6 rounded-2xl shadow-lg relative h-[370px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src={slide.image}
                  alt="Service"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="relative z-10 text-white">
                <h1  dangerouslySetInnerHTML={{ __html: slide.title }} className="text-4xl font-bold"></h1>
                <p className="text-md mt-3">{slide.subtitle}</p>
              </div>
              <div className="relative z-10">
               <div className="flex justify-between">
               <p className="text-sm text-gray-200">{slide.location}</p>
               <p className="text-green-400 font-semibold text-sm">{slide.offer}</p>
               </div>
                <button className="mt-3 bg-white text-blue-700 font-bold py-3 px-6 rounded-sm w-full text-sm">
                  BOOK A SERVICE
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
