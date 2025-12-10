import NavigationBar from "@/src/components/NavigationBar";
import BackgroundPaths from "@/src/components/BackgroundPaths";
import Carousel from "@/src/components/Carousel";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/heroSection";
import EventsSection from "@/src/components/EventsSection";


export default function Home() {
  return (
    <main className="w-[100vw] bg-black z-0">

      <BackgroundPaths />

      <div className="fixed w-full bg-black z-100">
        <NavigationBar />
      </div>

      <div className="flex justify-center items-center w-full h-[100vh] w-[20vw] relative">
        <HeroSection />
      </div>

      <div>
        <EventsSection />
      </div>

      <div className="bg-black w-full h-full flex justify-center p-[100px]">
        <Carousel slides={["https://picsum.dev/200/100", "https://picsum.dev/200/99", "https://picsum.dev/200/98"]} />
      </div>

      <Footer />
    </main >
  );
}
