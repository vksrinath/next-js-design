"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Slides from "./Slides";

export interface slidesProps {
  title: string;
  subtitle: string;
  offer: string;
  button: string;
  image: string;
  rating: number;
  location: string;
}

export default function Carasoal() {
  const slides: slidesProps[] = [
    {
      title: `Missed your car’s <br/> service?`,
      subtitle: "Get it done at home with Rumo",
      offer: "Upto ₹300 Off",
      button: "BOOK A SERVICE",
      image: "/assets/banner_img_1.png",
      rating: 4.5,
      location: "Now in Bengaluru",
    },
    {
      title: `Missed your car’s <br/> service?`,
      subtitle: "Get it done at home with Rumo",
      offer: "Upto ₹300 Off",
      button: "BOOK A SERVICE",
      image: "/assets/banner_img_2.png",
      rating: 3,
      location: "Now in Bengaluru",
    },
  ];

  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            <Slides slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
