"use client";
import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  animationType?: "fade-up" | "fade-left" | "zoom-in";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animationType = "fade-up" 
}) => {
  
  // Konfigurasi variasi animasi
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    "fade-left": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // amount 0.2 = jalan saat 20% elemen terlihat
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Easing mewah (setara easeOutExpo)
      }}
      variants={variants[animationType]}
    >
      {children}
    </motion.div>
  );
};