import { Gudea } from 'next/font/google';

const gudea = Gudea({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Stats() {
  return (
    <div
      className="
        flex flex-col md:flex-row 
        items-center md:items-start
        justify-center
        text-white gap-10 md:gap-12
        px-6 py-10
      "
    >
      {/* <div className="absolute top-0 -left-50 w-[800px] h-[800px] rounded-full bg-linear-to-bl from-transparent via-transparent to-[#5c92ff] opacity-40 blur-3xl" /> */}
      <h1 className="md:px-10 text-4xl sm:text-5xl md:text-6xl text-center md:text-left">
        <span className={gudea.className}>STATS</span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 items-center">
        
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">200+</h1>
          <span className="font-light text-xl sm:text-2xl">members</span>
        </div>

        <div className="bg-SpecialBlue h-px w-full sm:w-px sm:h-16"></div>

        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">60+</h1>
          <span className="font-light text-xl sm:text-2xl">events</span>
        </div>

        <div className="bg-SpecialBlue h-px w-full sm:w-px sm:h-16"></div>

        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">20+</h1>
          <span className="font-light text-xl sm:text-2xl">projects</span>
        </div>

      </div>
    </div>
  );
}
