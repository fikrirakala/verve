import { Badge } from "./ui/badge";

const features = [
  {
    icon: "/icons/feature-icon-01.svg",
    title: "Responsive Break Points",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare. Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    icon: "/icons/feature-icon-02.svg",
    title: "Easy to Customize",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare. Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    icon: "/icons/feature-icon-03.svg",
    title: "Framer CMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare. Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    icon: "/icons/feature-icon-04.svg",
    title: "Structured Layers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare. Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    icon: "/icons/feature-icon-05.svg",
    title: "Text Effects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare. Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    icon: "/icons/feature-icon-06.svg",
    title: "Time Animations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare. Vestibulum lobortis ligula vehicula, semper.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-14 text-center">
          <Badge>Features Overview</Badge>
          <h2 className="mt-4 bg-gradient-to-tl from-white to-white/60 bg-clip-text text-5xl font-medium leading-tight tracking-tight text-transparent lg:text-6xl">
            Build a solution that wins you <br className="hidden lg:block" />{" "}
            more customers.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-8 rounded-2xl border bg-white/[0.01] p-8"
            >
              <img
                src={feature.icon}
                alt="Feature Icon"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-3">
                <h5 className="text-2xl font-medium">{feature.title}</h5>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
