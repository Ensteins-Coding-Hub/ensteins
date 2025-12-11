import Button from "./Button";
import Link from "next/link";

export default function ReachUs() {
  return (
    <div className="relative text-white flex flex-col items-center justify-center w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-10 flex flex-col items-center gap-6 text-center max-w-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
          Reach <span className="text-SpecialBlue">Us!</span>
        </h2>
        <p className="text-white/80 text-lg sm:text-xl">
          We would love to hear from you. Get in touch with us to join,
          collaborate, or learn more about ENSTEINS.
        </p>
        <Link href="/contact-us">
          <Button className="mt-6">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
