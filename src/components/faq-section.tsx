import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";
import GridPattern from "./ui/grid-pattern";

const faqs = [
  {
    title: "Are there any additional costs or hidden fees?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo id, quas facere amet consectetur facilis nobis ea aliquid doloribus, assumenda velit odio sequi, officia cumque corporis deserunt ut possimus veniam?",
  },
  {
    title: "What are the highlights of your product?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo id, quas facere amet consectetur facilis nobis ea aliquid doloribus, assumenda velit odio sequi, officia cumque corporis deserunt ut possimus veniam?",
  },
  {
    title: "Where can I buy your product or how can I place an order?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo id, quas facere amet consectetur facilis nobis ea aliquid doloribus, assumenda velit odio sequi, officia cumque corporis deserunt ut possimus veniam?",
  },
  {
    title: "What is your product's return or exchange policy?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo id, quas facere amet consectetur facilis nobis ea aliquid doloribus, assumenda velit odio sequi, officia cumque corporis deserunt ut possimus veniam?",
  },
];

export default function FaqSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-screen-xl overflow-hidden px-4">
        <div className="w-full">
          <div className="mb-16 flex w-full max-w-3xl flex-col items-start">
            <Badge>FAQ</Badge>
            <h2 className="mt-4 bg-gradient-to-tl from-white to-white/60 bg-clip-text text-5xl font-medium leading-tight tracking-tight text-transparent lg:text-6xl">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              For any other questions, feel welcome to reach out to our team.
            </p>
          </div>
          <div className="w-full max-w-xl">
            <Accordion type="single" collapsible>
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="py-3">
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <Image
          src="/images/faq-image.svg"
          alt="Image"
          width={658}
          height={670}
          className="absolute -right-32 top-14 hidden lg:block"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 overflow-hidden">
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className={cn(
            "stroke-white/[0.05] [mask-image:linear-gradient(to_bottom_left,white,transparent_50%,transparent)]"
          )}
        />
        <img
          src="/bg/faq-light.svg"
          alt=""
          className="absolute left-[100px] top-0 mix-blend-soft-light md:left-[200px] lg:left-[450px]"
        />
      </div>
    </section>
  );
}
