"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/src/components/Button";
import "@/src/components/Carousel.css";
import Link from "next/link";

export default function Carousel({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-[80vw] sm:max-w-[60%] pb-20 mx-auto">
      <div className="absolute -left-50 w-[80vw] h-[80vw] rounded-full bg-linear-to-bl from-transparent via-transparent to-[#5c92ff] -z-10 opacity-40 blur-3xl" />

      <h3 className="w-full text-center mb-10 font-bold text-5xl text-SpecialBlue">
        MEMORIES
      </h3>
      <Slider {...settings}>
        {slides.map((url, index) => (
          <div key={index} className="w-full px-2">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="rounded-3xl"
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-10">
        <Link href="/memories">
          <Button>More Memos</Button>
        </Link>
      </div>
    </div>
  );
}
