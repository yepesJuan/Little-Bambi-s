"use client";
import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Cta } from "./Cta";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Pricing } from "./Pricing";
import { useTextColor } from "../context/textColor";

const Main = () => {
  const { textColor, toggleTextColor } = useTextColor();
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#FF5733] via-[#33FF57] to-[#3357FF] w-full"
      style={{ color: textColor }}
    >
      <Navbar toggleTextColor={toggleTextColor} />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Pricing />
        {/* <Cta /> */}
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
