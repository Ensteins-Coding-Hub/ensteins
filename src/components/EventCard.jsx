import React from 'react';

const EventCard = ({
  day = "TODAY",
  time = "9:00",
  title = "ENSTA RACE",
  description = "waiting you to join idk what to write",
  timeBoxColor = "#ECADE8B2",
}) => {
  return (
    <section
      className="
        w-full max-w-[900px]
        rounded-2xl p-5
        flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8
        backdrop-blur-xs bg-linear-to-bl from-white/10 via-black/10 to-white/15
        border border-white/20
        transition-all
      "
    >
      <div
        className="
          w-full sm:w-40
          h-[120px]
          rounded-2xl flex flex-col items-center justify-center
          shrink-0
        "
        style={{ backgroundColor: timeBoxColor }}
      >
        <span className="text-black text-xl sm:text-2xl font-semibold">
          {day}
        </span>
        <span className="text-black text-4xl sm:text-5xl font-bold">
          {time}
        </span>
      </div>

      <div className="flex flex-col text-center sm:text-left">
        <span className="text-white text-2xl sm:text-3xl font-semibold">
          {title}
        </span>
        <span className="text-white/80 text-base sm:text-xl font-light">
          {description}
        </span>
      </div>
    </section>
  );
};

export default EventCard;
