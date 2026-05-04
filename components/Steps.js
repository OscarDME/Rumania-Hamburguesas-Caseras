"use client";

import { ChevronRight } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function Steps() {
  const { steps } = copy;

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-night text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-mustard/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
            {steps.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
            <span className="text-cream">{steps.headline.pre}</span>{" "}
            <span className="italic text-mustard">{steps.headline.accent}</span>{" "}
            <span className="text-cream">{steps.headline.post}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-cream/80 leading-relaxed">
            {steps.subheadline}
          </p>
          <p className="mt-3 text-sm sm:text-base text-cream/70 leading-relaxed">
            {steps.paragraph}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-charcoal border border-mustard/15 p-7 hover:border-mustard/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-mustard/10"
            >
              <div className="absolute -top-6 left-7 text-7xl font-black italic text-mustard/20 leading-none select-none">
                {item.number}
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-mustard/15 text-mustard font-black text-xl mb-4 ring-1 ring-mustard/30">
                  {item.number}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-cream leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-cream/75 leading-relaxed">
                  {item.body}
                </p>
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
            <span>{steps.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <TrustBadges items={steps.trust} />
        </div>
      </div>
    </section>
  );
}
