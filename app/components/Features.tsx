"use client";
import Image from "next/image";
import Feature1 from "../../public/assets/IMG_8.jpeg";
import Feature2 from "../../public/assets/IMG_6.jpeg";
import Feature3 from "../../public/assets/IMG_2.jpeg";
import Check from "../../public/assets/check.svg";
import blueBtn from "../../public/assets/blue-button.svg";
import greenBtn from "../../public/assets/green-button.svg";
import pinkBtn from "../../public/assets/pink-button.svg";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#013220] lg:text-[18px]">
            Location
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            Serving all North Central Florida
          </h1>
          <Image
            src={Feature1}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] lg:text-[18px]">
            Nestled in the heart of High Springs, we’re your friendly
            neighborhood play space creators, proudly serving North Central
            Florida and Jacksonville.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            {/* <li className="flex items-center gap-x-2">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Complementary 20 mile radius!
            </li> */}
            <li className="flex items-center gap-x-2">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Indoors or Outdoors!
            </li>
            <li className="flex items-center gap-x-2">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Complementary 20 mile radius!
            </li>
          </ul>

          {/* <p className="flex items-center gap-x-2 pt-[24px] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={blueBtn} alt="Learn more" />
            </span>
          </p> */}
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00008B] lg:text-[18px] ">
            Pricing
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            Whats included in your rental?
          </h1>
          <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] lg:text-[18px]">
            5 hours of play including soft mats, ball pit, fencing, slide,
            animal hoppers
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Additional add ons available.
            </li>
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Attendant available on request.
            </li>
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Set up & breakdown fee are included.
            </li>
          </ul>

          {/* <p className="flex items-center gap-x-2 pt-[24px] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={greenBtn} alt="Learn more" />
            </span>
          </p> */}
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#AA336A] lg:text-[18px] ">
            Book with us now!
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            We cant wait to bring the fun to your event!
          </h1>
          <Image
            src={Feature3}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] lg:text-[18px]">
            Please fill out the details on the link below to book your soft play
            bouncer rental.
          </p>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium lg:text-[18px]">
            Booking Form
            <span>
              <Image src={pinkBtn} alt="Learn more" />
            </span>
          </p>

          {/* <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium">100+</h3>
              <p className=" ">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium">800+</h3>
              <p className="">Conse adipiscing elit</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
