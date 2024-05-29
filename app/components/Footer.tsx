import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/Logo2.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Instagram from "../../public/assets/instagram.svg";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" />
        <p className="font-bold text-[#36485C] text-[17px]">
          Little Bambi&apos;s
        </p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. Little Bambi&apos;s at Play. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Link
          href={"https://www.facebook.com/littlebambisatplay"}
          target="_blank"
          aria-label="facebook"
        >
          <Image src={Facebook} alt="Facebook" />
        </Link>

        <Link
          href={"https://www.instagram.com/Littlebambisatplay"}
          target="_blank"
          aria-label="Instagram"
        >
          <Image src={Instagram} alt="Instagram" />
        </Link>
        <Link href={"https://www.twitter.com/"} target="_blank">
          <Image src={Twitter} alt="Twitter" />
        </Link>
      </div>
    </div>
  );
}
