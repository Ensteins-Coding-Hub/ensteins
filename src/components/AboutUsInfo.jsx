import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUsSection = () => {
  const aboutUsCards = [
    {
      id: 1,
      title: "ENSTA RACE",
      description: "May the Gloriest Empire Win the Battle",
      imageUrl: "/your-image.jpg",
    },
    {
      id: 2,
      title: "InTech",
      description: "Learn new technologies and network with professionals",
      imageUrl: "/your-image.jpg",
    },
    {
      id: 3,
      title: "WeeHack",
      description: "Problem, solution.. Something is being cooked!",
      imageUrl: "/your-image.jpg",
    },
  ];

  return (
   
    <div className="flex flex-col items-center justify-center gap-14 px-4 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-linear-to-bl from-transparent via-[#5c92ff] to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute -right-30 w-[80vw] h-[80vw] rounded-full bg-linear-to-l from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />
      <div className="absolute -left-30 w-[70vw] h-[70vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />

      {/* Section Header */}
      <h1 className="text-center relative z-10">
        <span className="text-4xl sm:text-6xl text-white font-bold">
          ABOUT US
        </span>
      </h1>

      {/* Cards Container*/}
      <div className="flex flex-col items-center gap-12 w-full max-w-full relative z-10">
        {aboutUsCards.map((card) => (
          <AboutUsCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;