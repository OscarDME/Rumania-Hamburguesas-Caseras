"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function CarouselSection() {
  const { carouselSection } = copy;
  const [index, setIndex] = useState(0);
  const total = carouselSection.images.length;

  useEffect(() => {
    if (total <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [total]);

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-charcoal text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-mustard/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
            {carouselSection.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
            <span className="text-cream">{carouselSection.headline.pre}</span>{" "}
            <span className="italic text-mustard">{carouselSection.headline.accent}</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-mustard/20 shadow-2xl shadow-night/60 aspect-[4/3] bg-night">
            {carouselSection.images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Prev/Next */}
          <button
            type="button"
            onClick={goPrev}
            aria-label={carouselSection.a11yPrev}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cream text-night w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-xl hover:bg-mustard transition-colors"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={carouselSection.a11yNext}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cream text-night w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-xl hover:bg-mustard transition-colors"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.4} />
          </button>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            {carouselSection.images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${carouselSection.a11yDot} ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-mustard" : "w-2 bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {carouselSection.chips.map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-mustard/30 bg-mustard/10 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-mustard"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* For you list */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-night/60 backdrop-blur border border-mustard/15 p-7 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-black text-cream leading-tight">
            {carouselSection.forYouTitle}
          </h3>
          <ul className="mt-6 space-y-5">
            {carouselSection.forYou.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="shrink-0 mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-mustard text-night">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <p className="text-sm sm:text-base text-cream/85 leading-relaxed">
                  <span className="font-bold text-cream">{item.title}</span>{" "}
                  <span>{item.body}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-lg uppercase tracking-wide px-7 py-5 shadow-xl shadow-mustard/20 hover:shadow-mustard/40 transition-all hover:-translate-y-0.5"
          >
            <span>{carouselSection.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <TrustBadges items={carouselSection.trust} />
        </div>
      </div>
    </section>
  );
}
