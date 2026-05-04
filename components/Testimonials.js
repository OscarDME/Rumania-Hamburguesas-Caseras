"use client";

import { Star, Quote, ChevronRight } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function Testimonials() {
  const { testimonials } = copy;

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-charcoal text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-mustard/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
            {testimonials.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
            <span className="text-cream">{testimonials.headline.pre}</span>{" "}
            <span className="italic text-mustard">{testimonials.headline.accent}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-cream/80 leading-relaxed">
            {testimonials.subheadline}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {testimonials.items.map((t, i) => (
            <div
              key={i}
              className={`relative rounded-3xl bg-cream-soft text-charcoal p-7 border border-mustard/20 shadow-2xl shadow-night/40 hover:-translate-y-1 transition-all ${
                i === 2 ? "lg:translate-y-4" : ""
              } ${i === 0 || i === 4 ? "lg:-translate-y-2" : ""}`}
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-mustard/25" strokeWidth={1.5} />

              <div className="flex items-center gap-1 mb-4" aria-label={testimonials.starsAlt}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-mustard text-mustard"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="text-sm sm:text-base text-smoke/90 leading-relaxed italic">
                {`"${t.quote}"`}
              </p>

              <div className="mt-6 pt-5 border-t border-mustard/20 flex items-center gap-3.5">
                <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden ring-2 ring-mustard/40 bg-mustard">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-charcoal">
                    {t.name}
                  </div>
                  <div className="text-xs sm:text-sm text-smoke/70">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-lg uppercase tracking-wide px-7 py-5 shadow-xl shadow-mustard/20 hover:shadow-mustard/40 transition-all hover:-translate-y-0.5"
          >
            <span>{testimonials.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <TrustBadges items={testimonials.trust} />
        </div>
      </div>
    </section>
  );
}
