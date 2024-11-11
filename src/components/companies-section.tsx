import Marquee from "./ui/marquee";

const companies = [
  {
    name: "Bethpage",
    img: "/companies/company-01.svg",
  },
  {
    name: "Upgrade",
    img: "/companies/company-02.svg",
  },
  {
    name: "Chekr",
    img: "/companies/company-03.svg",
  },
  {
    name: "LMCU",
    img: "/companies/company-04.svg",
  },
  {
    name: "Moves",
    img: "/companies/company-05.svg",
  },
];

export default function CompaniesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium">
            <span className="text-gradient">
              The world&apos;s best companies trust Verve.
            </span>
          </h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <Marquee className="[--duration:20s] [--gap:2rem] md:[--gap:4rem] lg:[--gap:8rem]">
            {companies.map((item) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={item.name}
                src={item.img}
                alt={item.name}
                className="max-w-full"
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
