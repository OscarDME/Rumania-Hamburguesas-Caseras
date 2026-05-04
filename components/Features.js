"use client";

import { ChevronRight } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function Features() {
  const { features } = copy;

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-night text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,163,61,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-tomato/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
            {features.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
            <span className="text-cream">{features.headline.pre}</span>{" "}
            <span className="italic text-mustard">{features.headline.accent}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-cream/80 leading-relaxed">
            {features.subheadline}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {features.items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-cream text-charcoal p-7 border border-mustard/20 shadow-2xl shadow-night/30 hover:-translate-y-1 hover:shadow-mustard/15 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 rounded-full bg-mustard/10 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="text-5xl mb-3 leading-none">{item.emoji}</div>
                <span className="inline-block text-[11px] font-black uppercase tracking-widest text-amber-grill bg-mustard/15 rounded-full px-2.5 py-0.5">
                  {item.eyebrow}
                </span>
                <h3 className="mt-3 text-lg sm:text-xl font-black text-charcoal leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-smoke/80 leading-relaxed">
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
            <span>{features.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <TrustBadges items={features.trust} />
        </div>
      </div>
    </section>
  );
}
