"use client";

import { ChevronRight, Sparkles } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function Recap() {
  const { recap } = copy;

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-cream text-charcoal py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-mustard/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-amber-grill text-sm sm:text-base font-bold uppercase tracking-widest">
          {recap.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-charcoal">
          <span>{recap.headline.pre}</span>{" "}
          <span className="italic text-amber-grill">{recap.headline.accent}</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-smoke/80 leading-relaxed">
          {recap.subheadline}
        </p>

        <div className="mt-12 rounded-3xl bg-white border border-mustard/20 p-7 sm:p-12 shadow-xl shadow-mustard/10 text-left sm:text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-mustard/15 text-amber-grill mx-auto mb-5">
            <Sparkles className="w-8 h-8" strokeWidth={2.2} />
          </div>
          <p className="text-xl sm:text-2xl font-black text-charcoal leading-snug">
            {recap.paragraph}
          </p>
          <p className="mt-4 text-base sm:text-lg text-smoke/80 leading-relaxed max-w-3xl mx-auto">
            {recap.body}
          </p>
          <div className="mt-7 inline-block rounded-2xl bg-mustard/15 border border-mustard/30 px-5 py-3.5 text-sm sm:text-base font-bold text-amber-grill">
            {recap.highlight}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-lg uppercase tracking-wide px-7 py-5 shadow-xl shadow-mustard/30 hover:shadow-mustard/50 transition-all hover:-translate-y-0.5"
          >
            <span>{recap.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <TrustBadges items={recap.trust} theme="light" />
        </div>
      </div>
    </section>
  );
}
