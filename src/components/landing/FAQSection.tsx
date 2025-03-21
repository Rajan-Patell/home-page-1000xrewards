import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I withdraw my winnings",
    answer: "Login or register to start 1000Xrewards",
  },
  {
    question: "Play Game",
    answer: "Select your favourite Game and start playing",
  },
  {
    question: "Buy Rewards",
    answer: "Choose your rewards and use coins to buy them.",
  },
  {
    question: "Win Rewards & withdraw",
    answer: "Win your luck and withdraw your coins into real money.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="z-0 w-full px-[340px] py-60 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <h2 className="text-[80px] font-bold tracking-[-1.6px] bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)] max-md:max-w-full max-md:text-[40px]">
        FAQs
      </h2>

      <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[rgba(255,241,236,1)] flex w-full flex-col items-stretch justify-center mt-6 first:mt-0 p-6 rounded-2xl max-md:max-w-full max-md:px-5"
          >
            <button
              className="flex w-full items-center justify-between flex-wrap max-md:max-w-full"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                <h3 className="self-stretch w-full gap-2 text-2xl text-[rgba(39,24,19,1)] font-medium tracking-[-0.48px] max-md:max-w-full">
                  {faq.question}
                </h3>
                <p className="text-[#5B4138] text-sm font-normal leading-none tracking-[0.25px] mt-2 max-md:max-w-full">
                  {faq.answer}
                </p>
              </div>
              <div className="self-stretch flex min-h-12 flex-col items-center justify-center w-12 my-auto">
                <div className="flex w-full max-w-10 items-center gap-2.5 overflow-hidden justify-center rounded-[100px]">
                  <div className="self-stretch flex w-10 items-center gap-2.5 justify-center my-auto p-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/45fc5ea25072d05a3c71bcb39f55f63e2cdab15c?placeholderIfAbsent=true"
                      alt={openIndex === index ? "Collapse" : "Expand"}
                      className={`aspect-[1] object-contain w-6 self-stretch my-auto transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
