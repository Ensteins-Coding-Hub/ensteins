import React from 'react';
import EventCard from './EventCard'; 

const EventsSection = () => {
  // Données des événements
  const events = [
    {
      id: 1,
      day: "TODAY",
      time: "9:00",
      title: "ENSTA RACE",
      description: "waiting you to join idk what to write",
      timeBoxColor: "#ECADE8B2"
    },
    {
      id: 2,
      day: "TOMORROW",
      time: "14:30",
      title: "WORKSHOP TECH",
      description: "Learn new technologies and network with professionals",
      timeBoxColor: "#ADC9ECB2"
    },
    {
      id: 3,
      day: "FRIDAY",
      time: "18:00",
      title: "NETWORKING EVENT",
      description: "Connect with industry leaders and peers",
      timeBoxColor: "#E5ECADB2"
    }
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20">
        
        {/* Title */}
        <h1>
          <span className="text-[48px] text-white font-bold font-sans">
            UPCOMING
          </span>
          <span className="text-[64px] text-[#0A93E2] font-bold font-sans ml-2.5">
            EVENTS 
          </span>
        </h1>
        
        {/* Events Container */}
        <div className="flex flex-col items-center justify-center gap-10">
          
          {/* Utilisation du composant EventCard */}
          {events.map(event => (
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
    </>
  );
};

export default EventsSection;