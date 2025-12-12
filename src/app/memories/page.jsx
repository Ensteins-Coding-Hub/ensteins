"use client";

import React from "react";
import Button from "@/src/components/Button";
import Link from "next/link";
import BackgroundPaths from "@/src/components/BackgroundPaths";

export default function MemoriesPage() {
  return (
    <div className="relative text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#06021A] overflow-hidden">
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-linear-to-bl from-transparent via-[#5c92ff] to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute -right-30 w-[80vw] h-[80vw] rounded-full bg-linear-to-l from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />
      <div className="absolute -left-30 w-[70vw] h-[70vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />
      <BackgroundPaths />
      <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 text-center max-w-lg mx-auto">
        <h1 className="text-5xl sm:text-6xl font-semibold text-white mb-6 tracking-wide">
          Coming Soon
        </h1>

        <p className="text-white/70 text-lg sm:text-xl mb-8">
          Our Memories section is under construction. Stay tuned for exciting
          content!
        </p>
        <Link href="/">
          <Button className="px-8 py-3 text-lg hover:scale-105 transition-transform duration-300">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
