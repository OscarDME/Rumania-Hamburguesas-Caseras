"use client";

import { useState } from "react";
import { Plus, HelpCircle, ChevronRight } from "lucide-react";
import { copy } from "@/lib/copy";
import TrustBadges from "@/components/TrustBadges";

export default function FAQ() {
  const { faq } = copy;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((cur) => (cur === i ? -1 : i));
  };

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-cream text-charcoal py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-mustard/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-amber-grill text-sm sm:text-base font-bold uppercase tracking-widest">
            <HelpCircle className="w-5 h-5" strokeWidth={2.4} />
            <span>{faq.eyebrow}</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-charcoal">
            <span>{faq.headline.pre}</span>{" "}
            <span className="italic text-amber-grill">{faq.headline.accent}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-smoke/75 leading-relaxed">
            {faq.subheadline}
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border bg-white overflow-hidden transition-all ${
                  open ? "border-mustard/60 shadow-lg shadow-mustard/10" : "border-mustard/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-bold text-charcoal">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-mustard/15 text-amber-grill transition-transform ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="w-5 h-5" strokeWidth={2.6} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-7 pb-6 text-sm sm:text-base text-smoke/80 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-lg uppercase tracking-wide px-7 py-5 shadow-xl shadow-mustard/30 hover:shadow-mustard/50 transition-all hover:-translate-y-0.5"
          >
            <span>{faq.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <TrustBadges items={faq.trust} theme="light" />
        </div>
      </div>
    </section>
  );
}
