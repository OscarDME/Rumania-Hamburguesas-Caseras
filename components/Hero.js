"use client";

import { useEffect, useState } from "react";
import { Flame, ChevronRight, CheckCircle2 } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function Hero() {
  const { hero, promoBar } = copy;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-night text-cream">
      {/* Promo bar */}
      <div className="relative z-20 bg-tomato/95 text-cream">
        <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
          <Flame
            className="w-4 h-4 text-mustard animate-flame"
            strokeWidth={2.4}
          />
          <span className="uppercase">{promoBar.text}</span>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-mustard/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-tomato/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,163,61,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left column */}
          <div className={mounted ? "animate-fade-up" : "opacity-0"}>
            <span className="inline-flex items-center gap-2 rounded-full border border-mustard/30 bg-mustard/10 px-3 py-1 text-xs sm:text-sm font-semibold text-mustard tracking-wide uppercase">
              {hero.eyebrow}
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[1.05] tracking-tight">
              <span className="text-cream">{hero.headline.pre}</span>{" "}
              <span className="italic text-shimmer">
                {hero.headline.accent}
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-cream/80 leading-relaxed max-w-xl">
              {hero.subheadline}
            </p>
            <p className="mt-3 text-base sm:text-lg text-cream/70 leading-relaxed max-w-xl">
              {hero.paragraph}
            </p>

            {/* Bullets */}
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 max-w-xl">
              {hero.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-cream/85">
                  <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-0.5" strokeWidth={2.2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4">
              <button
                type="button"
                onClick={handleScrollToCta}
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-lg uppercase tracking-wide px-7 py-5 shadow-2xl shadow-mustard/20 hover:shadow-mustard/40 transition-all hover:-translate-y-0.5 animate-pulse-soft w-full sm:w-auto"
              >
                <span>{hero.cta}</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </button>
              <TrustBadges items={hero.trust} />
            </div>
          </div>

          {/* Right column - mockup */}
          <div className={`relative ${mounted ? "animate-fade-up" : "opacity-0"}`}>
            <div className="relative">
              {/* Halo */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-br from-mustard/30 via-amber-grill/15 to-transparent blur-3xl rounded-full" />

              {/* Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 z-20 rotate-6">
                <div className="rounded-full bg-tomato text-cream px-4 py-2 sm:px-5 sm:py-3 shadow-2xl shadow-tomato/40 border-2 border-cream/20">
                  <div className="text-2xl sm:text-3xl font-black leading-none tracking-tight">
                    {hero.badge.split(" ")[0]}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide opacity-90">
                    {hero.badge.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border border-mustard/15 bg-charcoal shadow-2xl shadow-night/60">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {hero.stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-mustard/15 bg-charcoal/60 backdrop-blur px-4 py-3 sm:px-5 sm:py-4 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-black text-mustard">
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-wide text-cream/70 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-night pointer-events-none" />
    </section>
  );
}
