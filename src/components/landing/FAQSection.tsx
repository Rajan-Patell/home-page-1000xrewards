
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

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
  return (
    <section className="w-full py-20 px-4">
      <div className="container mx-auto max-w-[1440px]">
        <h2 className="text-5xl md:text-7xl font-bold tracking-[-1.6px] bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)]">
          FAQs
        </h2>

        <div className="w-full mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[rgba(255,241,236,1)] rounded-2xl border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <h3 className="text-2xl text-[rgba(39,24,19,1)] font-medium tracking-[-0.48px]">
                      {faq.question}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#5B4138] text-sm font-normal leading-relaxed tracking-[0.25px]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
