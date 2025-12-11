import { Gudea } from 'next/font/google';

const gudea = Gudea({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Stats() {
  return (
    <div className="flex flex-row text-white gap-12" >
      <h1 className="px-10 text-6xl"><span className={gudea.className}>STATS</span></h1>
      <div>
        <h1 className="text-4xl font-bold" >200+</h1>
        <span className="font-light text-2xl">members</span>
      </div>
      <div className="bg-SpecialBlue w-[1px]"></div>
      <div>
        <h1 className="text-4xl font-bold" >60+</h1>
        <span className="font-light text-2xl" >events</span>
      </div>
      <div className="bg-SpecialBlue w-[1px]"></div>
      <div>
        <h1 className="text-4xl font-bold">20+</h1>
        <span className="font-light text-2xl" >projects</span>
      </div>
    </div>
  );
}
