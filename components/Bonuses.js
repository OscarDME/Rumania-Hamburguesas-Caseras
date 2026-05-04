"use client";

import { Gift, ChevronRight, Star } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function Bonuses() {
  const { bonuses } = copy;

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-night text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 rounded-full bg-mustard/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-tomato/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
            <Gift className="w-5 h-5" strokeWidth={2.4} />
            <span>{bonuses.eyebrow}</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
            <span className="text-cream">{bonuses.headline.pre}</span>{" "}
            <span className="italic text-mustard">{bonuses.headline.accent}</span>
            <span className="text-cream">{bonuses.headline.post}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-cream/80 leading-relaxed">
            {bonuses.intro}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {bonuses.items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-charcoal border border-mustard/20 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-mustard/15 transition-all"
            >
              {/* "Free" ribbon */}
              <div className="absolute top-5 right-5 z-10 rotate-3">
                <div className="rounded-full bg-mustard text-night px-3.5 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
                  {item.priceValue}
                </div>
              </div>

              <div className="relative aspect-square bg-gradient-to-br from-charcoal to-night overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-tomato/15 text-tomato px-3 py-1 text-xs font-black uppercase tracking-wider">
                  {item.badge}
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-black text-cream leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-cream/75 leading-relaxed">
                  {item.body}
                </p>
                <div className="mt-5 pt-5 border-t border-mustard/15 flex items-baseline gap-3">
                  <span className="text-xs sm:text-sm font-medium text-cream/60">
                    {item.priceLabel}
                  </span>
                  <span className="text-base sm:text-lg font-black text-mustard">
                    {item.priceValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl mx-auto text-center text-base sm:text-lg text-cream/85 leading-relaxed">
          <span>{bonuses.outro.pre}</span>{" "}
          <span className="font-black italic text-mustard">{bonuses.outro.accent}</span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-lg uppercase tracking-wide px-7 py-5 shadow-xl shadow-mustard/20 hover:shadow-mustard/40 transition-all hover:-translate-y-0.5"
          >
            <span>{bonuses.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <TrustBadges items={bonuses.trust} />
        </div>
      </div>
    </section>
  );
}
