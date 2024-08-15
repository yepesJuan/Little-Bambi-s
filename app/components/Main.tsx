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
import Forest from "../../public/assets/forest.png";

const Main = () => {
  const { textColor, toggleTextColor } = useTextColor();
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#35bd0f] via-[#f5f5f5] to-[#35bd0f] w-full"
      style={{ color: textColor }}
    >
      <div
        className="min-h-screen bg-cover bg-centerr"
        style={{
          backgroundImage: `url(${Forest.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar toggleTextColor={toggleTextColor} />
        <Hero />
      </div>
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
