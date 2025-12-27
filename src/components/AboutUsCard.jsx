import React from 'react';

const AboutUsCard = ({
  title = "ENSTA RACE",
  description = "waiting you to join idk what to write",
  imageUrl = "/your-image.jpg", 
  isReversed = false,
}) => {
  return (
    <section
      className={
        `w-full max-w-[900px]
        rounded-2xl p-5 sm:p-8
        flex flex-col ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'}  
        items-center sm:items-start 
        gap-6 sm:gap-8
        bg-white/5 backdrop-blur-md 
        border border-white/20
        transition-all
        mx-auto`
      }
    >
      {/* Text Content Section */}
      <div
        className="
          w-full sm:w-[500px]
          rounded-2xl 
          flex flex-col 
          items-start justify-center
          gap-4 sm:gap-4
        "
      >
        <span className="text-white text-4xl sm:text-4xl font-bold">
          {title}
        </span>
        
        {/* Divider Line */}
        <div
          className="
            w-full 
            h-1
            bg-SpecialBlueHovered
            rounded-full
          "
        />
        
        <span className="text-white text-sm sm:text-xl font-light">
          {description}
        </span>
      </div>

      {/* Image/Visual Section */}
      <div
        className="
          w-full sm:w-[400px]
          h-48 sm:h-auto
          bg-amber-300
          rounded-2xl
          overflow-hidden
        "
      >
         <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> 
      </div>
    </section>
  );
};

export default AboutUsCard;