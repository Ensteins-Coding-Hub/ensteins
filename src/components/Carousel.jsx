"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainButton from "@/src/components/MainButton"



export default function Carousel({ slides }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    appenDots: (dots) => (
      <div
        style={{
          backgroundColor: "white"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )
  };

  return (
    <div className="flex flex-col w-[80%] pb-20">
      <h3 className="w-full text-center mb-15 font-bold text-5xl text-SpecialBlue">MEMORIES</h3>
      <Slider {...settings}>
        {slides.map((url, index) => (
          <div key={index} className="rounded-3xl overflow-hidden">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "70%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      <MainButton className="w-[20%] self-center">
        More Events
      </MainButton>
    </div>
  );
}
