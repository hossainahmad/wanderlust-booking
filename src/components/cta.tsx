import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center text-white">
      <Image src="/images/CTA.png" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#181818] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-display text-4xl font-medium text-balance sm:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 font-sans text-base text-white/85">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-9 inline-flex h-12 items-center gap-5 bg-white px-8 font-sans text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:bg-white/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white/20 focus-visible:outline-none"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
