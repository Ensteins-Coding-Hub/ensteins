import React from "react";

export function MemberCard({
  name,
  // role,
  imageUrl,
  isActive,
  onHover,
  onLeave,
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        w-full h-full rounded-lg overflow-hidden 
        transition-all duration-300 ease-in-out
        ${
          isActive
            ? "scale-110 shadow-2xl brightness-110 z-10"
            : "scale-100 shadow-md hover:scale-105 hover:shadow-lg"
        }
      `}
    >
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 right-2 backdrop-blur-xs bg-linear-to-b from-white/10 via-black/20 to-white/10 rounded-lg p-3 h-12 flex flex-col justify-center">
          <h3
            className="text-blue-100 font-semibold text-[0.75rem] sm:text-base text-center leading-tight wrap-break-word">
            {name}
          </h3>

          {/* <p className="text-white text-xs text-center">{role}</p> */}
        </div>
      </div>
    </div>
  );
}
