import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";

const Pattern = () => {
    
  return (
    <div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px  border-1 border-[#d8e5fb]"
            style={{
              left: `${(i + 1) * 20}%`,
              height: "100%",
            }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.2,
              delay: 0.5 + i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute  border-1 border-[#d8e5fb]"
            style={{
              top: `${(i + 1) * 25}%`,
              width: "100%",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 1.5,
              delay: 0.3 + i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Pattern;
