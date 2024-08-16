import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing() {
  return (
    <div className="py-[24px] lg:py-[30px]">
      <h1 className="text-center font-medium  text-2xl lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-center lg:text-[18px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Classic Package
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Blast Zone Bounce House
            </p>

            <h2 className="pt-4 text-2xl font-medium text-[#5F7896] lg:text-[32px]">
              $300
              {/* <span className="text-[#5F7896]">/mo</span> */}
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                6 Piece Soft play
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Stack of giant rings
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Basketball hoop
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                6 ft tunnel
              </li>
            </ul>
          </div>
          {/* <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Text us!
          </button> */}
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-4 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Premier Package
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              Little Tikes Bounce House
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              $390
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                2 Extra climbing blocks
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Sensory stepping stones
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Rocking horse
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Trampoline
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                + everything in Classic Package
              </li>
            </ul>
          </div>
          {/* <button className="mt-[48px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Email us!
          </button> */}
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Elite Package
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Little Tikes & 16ft Obstacle course bouncers
            </p>

            <h2 className="pt-4 text-2xl font-medium text-[#5F7896] lg:text-[32px]">
              $485
              {/* <span className="text-[#5F7896]">/mo</span> */}
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                9ft entrance tunnel
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Ride on electric train
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                20x10 Tent (weather permitting)
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                + everything in Premier
              </li>
            </ul>
          </div>
          {/* <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Text us!
          </button> */}
        </div>

        {/* <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Third Package
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for big bangers
            </p>

            <h2 className="pt-4 text-2xl font-medium text-[#5F7896] lg:text-[32px]">
              Custom
            </h2>

            <p className="pt-4 text-[16px] text-[#36485C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="pt-2 text-[16px] text-[#36485C]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us!
          </button>
        </div> */}
      </div>
    </div>
  );
}
