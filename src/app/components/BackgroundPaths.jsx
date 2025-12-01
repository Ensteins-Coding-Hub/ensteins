"use client";
import { motion } from "framer-motion";

const SCALE_FACTOR = 2.5;

function FloatingPaths({
  position,
  count = 40, 
  baseColor = "10, 50, 200",
  widthStart = 1.8, 
  widthStep = 0.06, 
  speed = [10, 25],
}) {
  const paths = Array.from({ length: count }, (_, i) => {
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

    const d = `M${originalX1 * SCALE_FACTOR} ${originalY1 * SCALE_FACTOR}C${
      originalX1 * SCALE_FACTOR
    } ${originalY1 * SCALE_FACTOR} ${originalX2 * SCALE_FACTOR} ${
      originalY2 * SCALE_FACTOR
    } ${originalX3 * SCALE_FACTOR} ${originalY3 * SCALE_FACTOR}C${
      originalX4 * SCALE_FACTOR
    } ${originalY4 * SCALE_FACTOR} ${originalX5 * SCALE_FACTOR} ${
      originalY5 * SCALE_FACTOR
    } ${originalX5 * SCALE_FACTOR} ${originalY5 * SCALE_FACTOR}`;

    return {
      id: i,
      d: d,
      color: `rgba(${baseColor}, ${0.1 + i * 0.02})`, 
      width: widthStart + i * widthStep,
      duration: speed[0] + Math.random() * (speed[1] - speed[0]),
    };
  });

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
            style={{ filter: "drop-shadow(0 0 5px rgba(10, 50, 200, 0.5))" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  return (
    // <div className="relative min-h-screen w-screen overflow-hidden bg-[#0a0f18] dark:bg-[#0a0f18]">
      <div className="absolute inset-0">
        <FloatingPaths position={1} count={40} /> 
        <FloatingPaths position={-1} count={20} widthStart={0.5} />
      </div>
    // </div>
  );
}