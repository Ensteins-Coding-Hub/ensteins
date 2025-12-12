import BackgroundPaths from "@/src/components/BackgroundPaths";
import Carousel from "@/src/components/Carousel";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/HeroSection";
import EventsSection from "@/src/components/EventsSection";
import DropDownLine from "@/src/components/DropDownLine";
import Stats from "@/src/components/Stats";
import ReachUs from "../components/ReachUs";

export default function Home() {
  return (
    <main className="w-screen z-0">
      <BackgroundPaths />
      <div className="flex justify-center items-center h-screen w-screen relative">
        <HeroSection />
      </div>

      <div className="w-full flex justify-center">
        <Stats />
      </div>

      <div id="about">
        <DropDownLine />
      </div>

      <div id="events">
        <EventsSection />
      </div>

      <div id="memos" className="w-full h-full flex justify-center p-[100px]">
        <Carousel
          slides={[
            "memo1.jpg",
            "memo2.jpg",
            "memo3.jpg",
            "memo4.jpg",
          ]}
        />
      </div>

      <ReachUs />

      <Footer />
    </main>
  );
}
