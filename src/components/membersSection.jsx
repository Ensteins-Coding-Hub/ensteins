'use client';

import React, { useState } from 'react';
import { MemberCard } from './MemberCard';

export default function MembersSection() {
  const [activePage, setActivePage] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const members = [
    {
      id: 1,
      name: 'Einstein',
      role: 'IT member',
      imageUrl: 'https://picsum.photos/400/500?random=1'
    },
    {
      id: 2,
      name: 'Einstein',
      role: 'IT member',
      imageUrl: 'https://picsum.photos/400/500?random=2'
    },
    {
      id: 3,
      name: 'Einstein',
      role: 'IT member',
      imageUrl: 'https://picsum.photos/400/500?random=3'
    },
    {
      id: 4,
      name: 'Einstein',
      role: 'IT member',
      imageUrl: 'https://picsum.photos/400/500?random=4'
    },
  ];

  const handleCardClick = (index) => {
    setActivePage(index);
    setActiveCard(index);
  };

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section className="min-h-screen bg-indigo-950 relative overflow-hidden flex items-center justify-center px-4 sm:px-8 py-16">

      <div className="w-full max-w-7xl relative z-10">
        <h2 className="text-[60px] font-bold text-white text-center mb-16 leading-[100%] font-['Gudea']">
          Members
        </h2>
        <div className="mb-12 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-8 pt-8">
          <div className="flex justify-center items-center gap-6 sm:gap-8 px-4 min-w-max py-8">
            {members.map((member, index) => (
              <div
                key={member.id}
                onClick={() => handleCardClick(index)}
                className="w-[373px] h-[337px] flex-shrink-0 snap-center cursor-pointer"
              >
                <MemberCard
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  isActive={activeCard === index}
                  onHover={() => handleCardHover(index)}
                  onLeave={handleCardLeave}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePage(index)}
              className={`
        w-2 h-2 rounded-full transition-opacity duration-300
        ${activePage === index ? 'bg-white' : 'bg-white/40'}
      `}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}