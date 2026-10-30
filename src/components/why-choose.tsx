import { Headphones, Map, ShieldCheck, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
] as const;

export function WhyChoose() {
  return (
    <section className="bg-brand-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <h2 className="font-display text-4xl font-medium text-balance sm:text-5xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 font-sans text-sm text-foreground/60 sm:text-base">
            Your trusted partner for exceptional travel experiences
          </p>
        </header>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title} className="bg-white p-8 shadow-sm">
              <Icon className="size-9 text-brand" strokeWidth={1.75} />
              <h3 className="mt-6 font-display text-2xl font-medium">
                {title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/60">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
