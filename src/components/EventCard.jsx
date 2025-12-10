import React from 'react';

const EventCard = ({ 
  day = "TODAY", 
  time = "9:00", 
  title = "ENSTA RACE", 
  description = "waiting you to join idk what to write",
  backgroundColor = "#D9D9D9",
  timeBoxColor = "#ECADE8B2",
  width = "930px",
  height = "169px"
}) => {
  return (
    <section 
      className="rounded-[20px] p-[18px] flex flex-row items-center gap-[23px]"
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor
      }}
    >
      {/* Time Box */}
      <section
        className="w-[168px] h-[141px] rounded-[20px] flex flex-col items-center justify-center"
        style={{
          backgroundColor: timeBoxColor
        }}
      >
        <span className="text-[24px] text-black font-normal font-sans">
          {day}
        </span>
        <span className="text-[48px] text-black font-semibold font-sans">
          {time}
        </span>
      </section>
      
      {/* Event Details */}
      <div className="flex flex-col items-start justify-start -mt-10 gap-[5px]">
        <span className="text-[32px] text-black font-normal font-sans">
          {title}
        </span>
        <span className="text-[20px] text-black font-normal font-sans">
          {description}
        </span>
      </div>
    </section>
  );
};

export default EventCard;