import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { name: "location", label: "Location", defaultValue: "Address, City Or Zip" },
  { name: "dates", label: "Date/Duration", defaultValue: "Anytime/3 Days" },
  { name: "budget", label: "Budget", defaultValue: "$0-$3000" },
  { name: "people", label: "People", defaultValue: "5-10" },
] as const;

type BannerProps = {
  /** Background image path — any image in `public/images`. */
  image?: string;
};

export function Banner({ image = "/images/Banner.png" }: BannerProps) {
  return (
    <section className="relative flex min-h-[600px] flex-col overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center text-white">
        <h1 className="font-display text-5xl leading-[1.05] font-medium text-balance sm:text-6xl lg:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-5 max-w-xl font-sans text-sm text-white/90 sm:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="inline-flex h-12 items-center gap-2 bg-brand px-7 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-brand-dark focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex h-12 items-center border border-white/40 bg-white/20 px-7 text-sm font-medium tracking-widest text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            View Destination
          </Link>
        </div>
      </div>

      <form
        action="/search"
        method="get"
        className="relative grid grid-cols-2 border-t border-white/15 bg-black/40 text-white backdrop-blur-sm md:grid-cols-[1fr_1fr_1fr_1fr_200px] md:divide-x md:divide-white/15"
      >
        {searchFields.map((field) => (
          <label key={field.name} className="flex flex-col gap-1 px-6 py-3">
            <span className="text-[15px] font-semibold">{field.label}</span>
            <input
              name={field.name}
              defaultValue={field.defaultValue}
              className="w-full bg-transparent font-sans text-xs text-white/85 outline-none"
            />
          </label>
        ))}
        <button
          type="submit"
          className="col-span-2 bg-brand px-10 font-sans text-base font-medium text-white transition-colors hover:bg-brand-dark focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none md:col-span-1 md:text-lg"
        >
          Search
        </button>
      </form>
    </section>
  );
}
