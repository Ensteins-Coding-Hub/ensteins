"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MemberCard } from "./MemberCard";
import SkeletonCard from "./SkeletonCard";

export default function MembersSectionGrid() {
  const [visibleRows, setVisibleRows] = useState(2);
  const [activeCard, setActiveCard] = useState(null);
  const [images, setImages] = useState([]);
  const [cardsPerRow, setCardsPerRow] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateCardsPerRow = () => {
      const width = window.innerWidth;
      if (width < 640) return 2;
      if (width < 768) return 3;
      if (width < 1024) return 4;
      return 5;
    };

    const update = () => setCardsPerRow(calculateCardsPerRow());

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    (async () => {
      try {
        const res = await fetch("/api/images");
        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();
        if (!cancelled) setImages(data || []);
      } catch (err) {
        console.error("Image fetch error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const cardsToShow = visibleRows * cardsPerRow;
  const displayedMembers = images.slice(0, cardsToShow);
  const hasMore = cardsToShow < images.length;

  const handleShowMore = () => setVisibleRows((prev) => prev + 1);

  const skeletonCount = cardsToShow || cardsPerRow * 2;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 relative">
      <div className="w-full max-w-7xl relative z-10">
        <h2 className="text-[60px] font-bold text-white text-center mb-16 leading-[100%] font-['Gudea']">
          Members
        </h2>

        <div className="mb-12 relative">
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4 max-w-[1600px] mx-auto`}
            aria-busy={loading}
          >
            {loading
              ? Array.from({ length: skeletonCount }).map((_, i) => (
                  <SkeletonCard key={`sk-${i}`} />
                ))
              : displayedMembers.map((member, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full aspect-3/4 cursor-pointer"
                      onClick={() => setActiveCard(index)}
                    >
                      <MemberCard
                        name={member.display_name}
                        role="IT Member"
                        imageUrl={member.url}
                        isActive={activeCard === index}
                        onHover={() => setActiveCard(index)}
                        onLeave={() => setActiveCard(null)}
                      />
                    </div>
                  );
                })}
          </div>

          {loading && (
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden={!loading ? "true" : "false"}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#021026]/70 via-[#06203a]/60 to-[#04122a]/70 backdrop-blur-md rounded-2xl" />

              <div className="relative z-20 flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/6 border border-white/8 backdrop-blur-md shadow-xl transform-gpu animate-fade-in">
                <svg
                  className="w-12 h-12 animate-spin"
                  viewBox="0 0 50 50"
                  aria-hidden="true"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="6"
                  />
                  <path
                    d="M45 25a20 20 0 0 1-20 20"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Loading members</div>
                  <div className="text-sm text-white/70">
                    fetching beautiful profiles...
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {!loading && hasMore && (
          <div className="mt-8 flex justify-center">
            <Button onClick={handleShowMore}>show more members</Button>
          </div>
        )}
      </div>
    </section>
  );
}
