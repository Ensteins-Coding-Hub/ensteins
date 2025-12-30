import React from "react";

const DepartmentCard = ({
  name,
  shortName,
  logo,
  leaderName,
  leaderRole,
  leaderPhoto,
  mission,
  description,
  mainActivities = [],
  technologies = [],
  goodFitIf = [],
  levelExpectation,
  isReversed = false,
}) => {
  return (
    <section
      className={`relative w-full max-w-[1000px] rounded-2xl p-6 sm:p-10 flex flex-col ${
        isReversed ? "sm:flex-row-reverse" : "sm:flex-row"
      } gap-8 items-start bg-linear-to-b from-white/5 via-black/10 to-white/5 border border-white/20 backdrop-blur-md mx-auto transition-all`}
      aria-labelledby={`dept-${shortName ?? name}`}
    >
      <div
        className="absolute -right-28 top-6 w-[30vw] h-[30vw] rounded-full bg-linear-to-l from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-28 bottom-6 w-[20vw] h-[20vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl"
        aria-hidden
      />

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {logo ? (
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-14 h-14 object-contain"
            />
          ) : (
            <div className="w-14 h-14 rounded-md bg-white/10 flex items-center justify-center text-sm">
              {shortName ?? (name && name.slice(0, 2))}
            </div>
          )}

          <div>
            <h2
              id={`dept-${shortName ?? name}`}
              className="text-white text-2xl sm:text-3xl font-bold leading-tight"
            >
              {name}
            </h2>
            {shortName && <p className="text-white/60 text-sm">{shortName}</p>}
          </div>
        </div>

        {mission && (
          <p className="text-white/90 font-medium italic">{mission}</p>
        )}

        {description && (
          <p className="text-white/80 text-sm sm:text-base">{description}</p>
        )}

        <div className="h-px w-full bg-white/10 rounded-full my-3" />

        <div>
          <h3 className="text-white font-semibold mb-2">Main activities</h3>
          {mainActivities.length === 0 ? (
            <p className="text-white/60 text-sm">No activities listed.</p>
          ) : (
            <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
              {mainActivities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Technologies</h3>
          {technologies.length === 0 ? (
            <p className="text-white/60 text-sm">No tech listed.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/8 text-white/90 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {levelExpectation && (
          <p className="mt-2 text-white/70 text-sm">
            <span className="font-semibold text-white">Level: </span>
            {levelExpectation}
          </p>
        )}

        <div>
          <h3 className="text-white font-semibold mb-2">
            You are a good fit if
          </h3>
          {goodFitIf.length === 0 ? (
            <p className="text-white/60 text-sm">No requirements listed.</p>
          ) : (
            <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
              {goodFitIf.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-4 text-center">
        <div className="w-40 h-40 rounded-2xl overflow-hidden border border-white/30">
          {leaderPhoto ? (
            <img
              src={leaderPhoto}
              alt={`${leaderName} photo`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white/6">
              No photo
            </div>
          )}
        </div>

        <div>
          <p className="text-white font-semibold">{leaderName}</p>
          {leaderRole && <p className="text-white/70 text-sm">{leaderRole}</p>}
        </div>

        <div className="mt-2 px-4">
          {mission && (
            <p className="text-white/70 text-xs sm:text-sm">{mission}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DepartmentCard;
