import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Link from "next/link";
// import { useTextColor } from "../context/textColor";

export function Hero() {
  // const { textColor, toggleTextColor } = useTextColor();

  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium lg:text-[64px] lg:leading-[72px]">
          Little Bambi&apos;s at Play!
        </h1>
        <p className="text-center pt-6 lg:text-[18px] lg:leading-7">
          Your neighborhood friendly soft play and party rental
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6  items-center">
          <Link href="/booking">
            <button className="bg-[#4328EB] py-2 px-2 text-white rounded-[8px] lg:w-fit">
              Book Now
              {/* href="https://forms.gle/L8RLcey85AP8YPnWA" */}
            </button>
          </Link>

          <Link
            href="https://cdn.flowpage.com/images/366ca14f-d78d-41ad-a8fe-fe6c71950a0f-pdf?m=1665802049"
            target="_blank"
          >
            <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit py-4">
              waiver
              <span>
                <Image src={BlurArrow} alt="waiver" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-5">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Truspilot} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Cluth} alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
