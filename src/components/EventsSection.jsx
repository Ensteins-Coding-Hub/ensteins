import React from "react";
import EventCard from "./EventCard";
import Link from "next/link";
import Button from "./Button";

const EventsSection = () => {
  const events = [
    {
      id: 2,
      day: "year 2026",
      time: "09:00",
      title: "InTech",
      description: "Learn new technologies and network with professionals",
      timeBoxColor: "#4F8CFFB2",
    },
    {
      id: 3,
      day: "year 2026",
      time: "09:00",
      title: "WeeHack",
      description: "Problem, solution.. Something is being cooked!",
      timeBoxColor: "#4FE3B2B2",
    },
    {
      id: 1,
      day: "year 2026",
      time: "9:00",
      title: "ENSTA RACE",
      description: "May the Gloriest Empire Win the BAttle",
      timeBoxColor: "#FFD27DB2",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-hidden gap-14 px-4 py-20">
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-linear-to-bl from-transparent via-[#5c92ff] to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="relative flex flex-col items-center justify-center w-screen overflow-hidden gap-14 px-4 py-20" />
      <div className="absolute -left-30 w-[70vw] h-[70vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />

      <h1 className="text-center">
        {/* <span className="text-6xl md:text-3xl sm:text-2xl text-white font-bold">
          UPCOMING
        </span> */}
        <span className="text-4xl sm:text-6xl text-blue-600 font-bold ml-3">
          UP COMMING EVENTS
        </span>
      </h1>

      <div className="flex flex-col items-center gap-8 w-full">
        {events.map((event) => (
          <EventCard
            key={event.id}
            day={event.day}
            time={event.time}
            title={event.title}
            description={event.description}
            timeBoxColor={event.timeBoxColor}
          />
        ))}
      </div>
      <Link href="memories/#events" className="z-10">
        <Button>Previous Events</Button>
      </Link>
    </div>
  );
};

export default EventsSection;
