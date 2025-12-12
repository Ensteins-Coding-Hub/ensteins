import Button from "@/src/components/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center 
        px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20
        w-screen
      "
    >
      <div className="absolute -z-10 top-0 right-0 sm:top-0 sm:-right-80 w-[70vw] h-[70vw] rounded-full bg-linear-to-bl from-[#5c92ff] via-transparent to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute -z-10 bottom-0 left-0 sm:-bottom-10 sm:-left-50 w-[40vw] h-[40vw] rounded-full bg-linear-to-bl from-transparent via-transparent to-[#5c92ff] opacity-40 blur-3xl animate-pulse" />

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-white mb-8 leading-tight">
          <div
            className="
              uppercase 
              text-2xl sm:text-3xl md:text-4xl
            "
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            We Make
          </div>

          <div
            className="
              uppercase 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              mt-1
            "
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            TECHNOLOGY
          </div>

          <div
            className="
              uppercase 
              text-2xl sm:text-3xl md:text-4xl 
              mt-2
            "
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            Move
          </div>
        </h1>

        <Link href={"/contact-us"} className="mt-10 flex justify-center">
          <Button className="px-10 py-3 text-lg sm:text-xl">Reach Us</Button>
        </Link>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
