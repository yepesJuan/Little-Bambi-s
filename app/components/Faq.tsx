import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    question: "How does delivery & set up work?",
    answer:
      "We typically arrive approximately 2 hours before the event start time to set up the equipment. Ultimately the time of delivery will vary depending on the size of your order, location, indoor/outdoor and the schedule of events we have that day.",
  },
  {
    question: "Do you set up in parks?",
    answer:
      "Yes. The renter will need to contact the park in advance to determine the requirements needed to set up. We are insured and can get a certificate if needed. We require 7 days notice for certificate request. We charge a $45 Park fee for  event and outdoor set up will require a shaded area or a suitable cover in the form of a canopy tent, pavilion, etc. as the soft play equipment will get hot in direct sunlight. A tarp will be be provided, but please make sure the ground is flat, dry and clear from glass, sticks, debris and animal waste. We do not set up on dirt or gravel. Additional fees may apply, if we deliver via stairs or to venues located long distances from the loading zone (including parks, large estates, or any location that presents delivery complications/delays).",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Little Bambi’s At Play will allow you to reschedule a reservation up to 24 hours before your event for any reason. We do not offer refunds, however we do offer credits for cancellations made by email at least 24 hours before the event. We will reschedule your event within one year of the original event date.",
  },
  {
    question: "What if there is a chance of rain?",
    answer:
      "Soft Play, Canopy Tent, Tables, Chairs, Bumper Cars, etc. will not be set up outdoors if the weather forecast suggest ANY chance of rain or strong winds, as it could become slippery and unsafe. Please contact us with an alternate indoor location BEFORE 6:00 AM on the day of your event. We simply will not take the risk of damaged equipment or children's safety. We can offer a credit for a future party if the weather UNEXPECTEDLY turns bad on the day of the event and no alternative indoor location has been arranged. There must be an indoor back-up plan for all Soft Play, Bumper Cars, Kids Table & Chair for outdoor set ups.",
  },
  {
    question: "How often is your equipment cleaned?",
    answer:
      "All of our equipment, including every ball pit, floor mat, bouncer, and block is sanitized before and after each use. We use a hospital grade cleaner that kills 99.9% of bacteria, viruses, mold, fungi and germs.",
  },
  {
    question: "What is your policy for damaged products?",
    answer:
      "Per the Rental Agreement signed at the time of booking The Customer/Renter agrees to replace missing or damaged equipment within 3 days of invoicing. If payment is delayed, additional fees may be incurred due to loss of business. Please refer to Little Bambis Rental Agreement.",
  },
  {
    question: "Do you have insurance?",
    answer:
      "Yes, we are fully insured. However, we do point out that it is the renter’s responsibility to ensure products rented REQUIRE ADULT SUPERVISION AT ALL TIMES to assure the safety of the guest AND no damage to rental equipment. Please always consider the appropriate ratio of children using the equipment at one time.",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[24px] lg:py-[30px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#FFFF00] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="pb-[24px]">
          We hope you and your kids enjoyed the party! Please leave us a review :)
        </p>
      <Link href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x2948fa235177caff:0x960ba49fb32cb5d0!12e1?source=g.page.m._&laa=merchant-review-solicitation">
      <button
        className="text-black bg-white py-1 px-2 rounded-lg shadow-lg mb-4"
      >
        Google Review
      </button>
      </Link>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
