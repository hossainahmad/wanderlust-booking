"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    author: "Michael Chen",
    location: "Singapore",
    image: "/images/image3.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    author: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/image4.png",
  },
  {
    quote:
      '"Marrakech Was Even More Vibrant In Person. The Souk Tours And Local Cuisine Made Every Day An Adventure Worth Remembering."',
    author: "Amara Diallo",
    location: "Marrakech, Morocco",
    image: "/images/image1.png",
  },
  {
    quote:
      '"The Great Barrier Reef Diving Experience Was Flawless From Booking To The Dive Itself. Professional, Safe, And Absolutely Stunning."',
    author: "Ethan Williams",
    location: "Sydney, Australia",
    image: "/images/image6.png",
  },
] as const;

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-white px-6 py-24">
      <Carousel
        setApi={setApi}
        opts={{ align: "start" }}
        className="mx-auto max-w-6xl"
      >
        <header className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              What Travelers Say
            </h2>
            <p className="mt-3 font-sans text-sm text-foreground/60 sm:text-base">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              disabled={!canScrollPrev}
              onClick={() => api?.scrollPrev()}
              className="flex size-12 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeft className="size-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              disabled={!canScrollNext}
              onClick={() => api?.scrollNext()}
              className="flex size-12 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowRight className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </header>

        <CarouselContent className="mt-12">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.author} className="basis-full md:basis-1/2">
              <article className="flex min-h-[250px] h-full border border-border bg-white">
                <div className="flex flex-1 flex-col justify-between p-8">
                  <blockquote className="font-display text-lg leading-snug text-balance">
                    {testimonial.quote}
                  </blockquote>
                  <footer className="mt-6">
                    <p className="font-sans text-sm text-brand">
                      — {testimonial.author}
                    </p>
                    <p className="mt-1 font-sans text-xs text-foreground/60">
                      {testimonial.location}
                    </p>
                  </footer>
                </div>
                <div className="relative w-[180px] shrink-0 bg-muted">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
