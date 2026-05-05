"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { copy } from "@/lib/copy";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/101-domacich-burgeru";

export default function Closing() {
  const { closing } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let src = params.get("src");
        let fbclid = params.get("fbclid");

        if (!src) src = localStorage.getItem("hotmart_src");
        if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");

        if (src || fbclid) {
          const urlObj = new URL(BASE_CHECKOUT_URL);
          if (src) urlObj.searchParams.set("src", src);
          if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (e) {
      console.error("Error en URL Closing:", e);
    }
  }, []);

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative text-cream py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/carousel/slide-2.webp"
          alt={closing.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-night/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/80 to-night" />
      </div>

      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-mustard/15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
          {closing.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
          <span className="text-cream">{closing.headline.pre}</span>{" "}
          <span className="italic text-mustard">{closing.headline.accent}</span>{" "}
          <span className="text-cream">{closing.headline.post}</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-cream/85 leading-relaxed max-w-2xl mx-auto">
          {closing.paragraph}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleScrollToCta}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-lg uppercase tracking-wide px-7 py-5 shadow-2xl shadow-mustard/30 hover:shadow-mustard/60 transition-all hover:-translate-y-0.5 animate-pulse-soft"
          >
            <span>{closing.cta}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
        </div>

        {/* Hidden link to ensure checkoutUrl is part of DOM for fallback */}
        <noscript>
          <a href={checkoutUrl}>{closing.cta}</a>
        </noscript>
      </div>
    </section>
  );
}