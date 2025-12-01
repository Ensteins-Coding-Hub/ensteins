"use client";
import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const SCALE_FACTOR = 2.5;

const generatePathD = (i, position) => {
  const originalX1 = -380 - i * 5 * position;
  const originalY1 = -189 + i * 6;
  const originalX2 = -312 - i * 5 * position;
  const originalY2 = 216 - i * 6;
  const originalX3 = 152 - i * 5 * position;
  const originalY3 = 343 - i * 6;
  const originalX4 = 616 - i * 5 * position;
  const originalY4 = 470 - i * 6;
  const originalX5 = 684 - i * 5 * position;
  const originalY5 = 875 - i * 6;

  const X1 = originalX1 * SCALE_FACTOR;
  const Y1 = originalY1 * SCALE_FACTOR;
  const X2 = originalX2 * SCALE_FACTOR;
  const Y2 = originalY2 * SCALE_FACTOR;
  const X3 = originalX3 * SCALE_FACTOR;
  const Y3 = originalY3 * SCALE_FACTOR;
  const X4 = originalX4 * SCALE_FACTOR;
  const Y4 = originalY4 * SCALE_FACTOR;
  const X5 = originalX5 * SCALE_FACTOR;
  const Y5 = originalY5 * SCALE_FACTOR;

  return `M${X1} ${Y1}C${X1} ${Y1} ${X2} ${Y2} ${X3} ${Y3}C${X4} ${Y4} ${X5} ${Y5} ${X5} ${Y5}`;
};

function FloatingPaths({
  position,
  count = 0,
  baseColor = "10, 50, 200",
  widthStart = 1.8,
  widthStep = 0.06,
  speed = [10, 25],
}) {

  const paths = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      return {
        id: i,
        d: generatePathD(i, position),
        color: `rgba(${baseColor}, ${0.1 + i * 0.02})`,
        width: widthStart + i * widthStep,
        duration: speed[0] + Math.random() * (speed[1] - speed[0]),
      };
    });
  }, [position, count, baseColor, widthStart, widthStep, speed]);

  const safeSpeed = Array.isArray(speed) && speed.length === 2 ? speed : [10, 25];
  // const dropShadowColor = baseColor.replace(/ /g, "");

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="-1000 -1000 3000 3000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {paths.map((p) => (
          <motion.path
            key={p.id}
            d={p.d}
            stroke={p.color}
            strokeWidth={p.width}
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: p.duration * 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{  }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  useEffect(()=> console.log('render'))
  return (
    <div className="absolute inset-0">
      <FloatingPaths position={1} count={40} />
      {/* <FloatingPaths position={-1} count={20} widthStart={0.5} /> */}
    </div>
  );
}