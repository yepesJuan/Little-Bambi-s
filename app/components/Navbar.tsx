// "use client";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Logo2 from "../../public/assets/Logo2.svg";
import Logo3 from "../../public/assets/Logo3.jpeg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import React from "react";
import { TextColorContextType } from "../context/textColor";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "FAQ" },
  { name: "Contact" },
];

export function Navbar({toggleTextColor}:  Pick<TextColorContextType, "toggleTextColor">) {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="flex w-full justify-between items-center px-[30px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center flex-grow-0">
        <Image src={Logo2} alt="Logo" onClick={toggleTextColor} />
      </div>

      <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2">
        <div className="flex gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="font-medium hidden" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <Image
          src={Menu}
          alt="Menu Button"
          // onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* {isMenuOpen && (
        <div className="flex flex-col gap-y-2 md:hidden absolute top-[80px] right-[20px] bg-white shadow-lg p-4">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      )} */}
    </nav>
  );
}
