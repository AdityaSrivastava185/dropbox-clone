"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ffffff", "#0061ff", "#0061ff"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#000000", "#ffffff", "#ffffff"]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    [1, 0, 0]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0, 1, 1, 0]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.8, 1],
    [0, 1, 1]
  );

  const text1Y = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, -50]
  );

  const text2Y = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    [50, 0, -50]
  );

  const text3Y = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    [50, 0]
  );

  return (
    <div className="relative h-[300vh] w-full overflow-hidden">
      <motion.div 
        className="fixed inset-0 flex flex-col items-center justify-center p-8 text-center"
        style={{ background }}
      >
        <motion.div 
          className="absolute"
          style={{ 
            opacity: text1Opacity,
            y: text1Y,
            color: textColor 
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Keep your files private, safe, and secure
          </h2>
          <p className="text-xl md:text-2xl">
            Protect your most important files with advanced security features
          </p>
        </motion.div>

        <motion.div 
          className="absolute"
          style={{ 
            opacity: text2Opacity,
            y: text2Y,
            color: textColor 
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Access your files from anywhere
          </h2>
          <p className="text-xl md:text-2xl">
            Your files are always available across all your devices
          </p>
        </motion.div>

        <motion.div 
          className="absolute"
          style={{ 
            opacity: text3Opacity,
            y: text3Y,
            color: textColor 
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Collaborate with confidence
          </h2>
          <p className="text-xl md:text-2xl">
            Share files and folders with team members securely
          </p>
        </motion.div>
      </motion.div>
      <div ref={ref} className="h-[200vh] w-full" />
    </div>
  );
}
