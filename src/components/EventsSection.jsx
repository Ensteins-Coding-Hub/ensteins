import React from "react";
import EventCard from "./EventCard";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      day: "TODAY",
      time: "9:00",
      title: "ENSTA RACE",
      description: "waiting you to join idk what to write",
      timeBoxColor: "#ECADE8B2",
    },
    {
      id: 2,
      day: "TOMORROW",
      time: "14:30",
      title: "WORKSHOP TECH",
      description: "Learn new technologies and network with professionals",
      timeBoxColor: "#ADC9ECB2",
    },
    {
      id: 3,
      day: "FRIDAY",
      time: "18:00",
      title: "NETWORKING EVENT",
      description: "Connect with industry leaders and peers",
      timeBoxColor: "#E5ECADB2",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-14 px-4 py-20">
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-linear-to-bl from-transparent via-[#5c92ff] to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute -right-30 w-[80vw] h-[80vw] rounded-full bg-linear-to-l from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />
      <div className="absolute -left-30 w-[70vw] h-[70vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />

      <h1 className="text-center">
        <span className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
          UPCOMING
        </span>
        <span className="text-5xl sm:text-6xl md:text-7xl text-[#0A93E2] font-bold ml-3">
          EVENTS
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
    </div>
  );
};

export default EventsSection;
