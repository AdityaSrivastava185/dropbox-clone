"use client";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import SplitText from "../components/splitText";
import React from "react";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 ">
        <div className="max-w-4xl mx-auto flex flex-col items-start justify-between bg-white h-[90vh] w-[40vw] border-1 border-[#d8e5fb] px-10 py-5">
          <motion.h1
            className="text-xl md:text-6xl lg:text-7xl xl:text-4xl font-bold text-[#0061FF] leading-tight mb-16 "
            initial={{ opacity: 0, y: 30 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5, once: true }}
          >
            <SplitText />
          </motion.h1>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              showContent
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative">
              <svg
                width="100"
                height="100"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-testid="dropbox-glyph"
              >
                <path
                  d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z"
                  fill="#0061FF"
                ></path>
                <path
                  d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                  fill="#0061FF"
                ></path>
                <path
                  d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                  fill="#0061FF"
                ></path>
                <path
                  d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                  fill="#0061FF"
                ></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
