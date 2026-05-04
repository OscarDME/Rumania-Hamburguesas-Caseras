"use client";

import { useState, useEffect } from "react";
import { Check, ShieldCheck, Lock, Mail, Zap, ChevronRight } from "lucide-react";
import { copy } from "@/lib/copy";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/101-de-burgeri-de-casa";

const TRUST_ICONS = {
  lock: Lock,
  mail: Mail,
  card: ShieldCheck,
  zap: Zap,
  shield: ShieldCheck,
};

export default function FinalCta() {
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
  const { finalCta } = copy;

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
          if (src) {
            urlObj.searchParams.set("src", src);
            console.log("🔗 FinalCTA: src agregado ->", src);
          }
          if (fbclid) {
            urlObj.searchParams.set("fbclid", fbclid);
            console.log("🔗 FinalCTA: fbclid agregado ->", fbclid);
          }
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (error) {
      console.error("Error construyendo URL:", error);
    }
  }, []);

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      if (finalCta.priceNow) {
        const cleaned = String(finalCta.priceNow).replace(/[^\d.,]/g, "").replace(",", ".");
        const parsed = parseFloat(cleaned);
        if (Number.isFinite(parsed)) priceNum = parsed;
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: "USD",
          items: [
            {
              item_id: "recetario_hamburguesas_cta",
              item_name: "Paquete 101 Hamburguesas Caseras",
              price: priceNum,
            },
          ],
        });
      }

      console.log("[FinalCTA] begin_checkout disparado ✅");
      console.log("[FinalCTA] Navegando a:", checkoutUrl);
    } catch (err) {
      console.error("[FinalCTA] Error en analytics:", err);
    }
  };

  return (
    <section
      id="final-cta-section"
      className="relative bg-night text-cream py-20 md:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-mustard/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-tomato/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,163,61,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
            {finalCta.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
            <span className="text-cream">{finalCta.headline.pre}</span>{" "}
            <span className="italic text-mustard">{finalCta.headline.accent}</span>{" "}
            <span className="text-cream">{finalCta.headline.post}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto">
            {finalCta.subheadline}
          </p>
        </div>

        {/* Pricing card */}
        <div className="mt-12 relative">
          {/* Discount ribbon */}
          <div className="absolute -top-5 -right-3 sm:-top-7 sm:right-8 z-20 rotate-12">
            <div className="rounded-2xl bg-tomato text-cream shadow-2xl shadow-tomato/40 border-2 border-cream/20 px-5 py-3 text-center">
              <div className="text-3xl sm:text-4xl font-black leading-none">
                {finalCta.discountPct}
              </div>
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest mt-1">
                {finalCta.discountLabel}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-charcoal border border-mustard/30 shadow-2xl shadow-night overflow-hidden">
            {/* Top badge */}
            <div className="bg-gradient-to-r from-mustard to-amber-grill text-night text-center py-3 px-4">
              <p className="text-sm sm:text-base font-black uppercase tracking-wide">
                {finalCta.badge}
              </p>
            </div>

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Image + bullets */}
                <div className="lg:col-span-3">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl sm:text-4xl font-black leading-tight">
                      <span className="text-cream">{finalCta.productName.pre}</span>{" "}
                      <span className="italic text-mustard">{finalCta.productName.accent}</span>
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-cream/75 leading-relaxed">
                      {finalCta.productTagline}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {finalCta.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-cream/85">
                        <div className="shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-mustard text-night">
                          <Check className="w-3 h-3" strokeWidth={3.5} />
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-sm sm:text-base text-cream/80 leading-relaxed">
                    <span className="font-bold text-mustard">{finalCta.closing.pre}</span>{" "}
                    <span>{finalCta.closing.body}</span>
                  </p>
                </div>

                {/* Image / Price */}
                <div className="lg:col-span-2">
                  <div className="relative rounded-2xl overflow-hidden border border-mustard/20 mb-6">
                    <img
                      src="/hero-mockup.webp"
                      alt={finalCta.imageAlt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>

                  <div className="mb-4 flex justify-center">
                    <img
                      src="/Logos-garantia-sin-fondo/Rumania-garantia.webp"
                      alt="Garantía de satisfacción"
                      className="h-24 sm:h-28 w-auto"
                      loading="lazy"
                    />
                  </div>

                  {/* Price block */}
                  <div className="rounded-2xl bg-night/70 border border-mustard/20 p-6 text-center">
                    <p className="text-xs sm:text-sm font-medium text-cream/65">
                      {finalCta.priceOldLabel}{" "}
                      <span className="line-through">{finalCta.priceOld}</span>
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-mustard">
                      {finalCta.priceNote}
                    </p>
                    <div className="mt-3 flex items-baseline justify-center gap-2">
                      <span className="text-5xl sm:text-6xl font-black text-mustard tracking-tighter leading-none">
                        {finalCta.priceNow}
                      </span>
                      <span className="text-base sm:text-lg font-black text-mustard">
                        {finalCta.priceCurrency}
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-cream/60 leading-relaxed">
                      {finalCta.priceFooter}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm font-bold text-tomato uppercase tracking-wide">
                      {finalCta.urgency}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col items-center gap-4">
                <a
                  href={checkoutUrl}
                  onClick={handleBeginCheckout}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-mustard to-amber-grill text-night font-black text-base sm:text-xl uppercase tracking-wide px-8 py-6 shadow-2xl shadow-mustard/30 hover:shadow-mustard/60 transition-all hover:-translate-y-0.5 animate-pulse-soft text-center"
                >
                  <span>{finalCta.button}</span>
                  <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </a>

                <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {finalCta.trust.map((item, i) => {
                    const Icon = TRUST_ICONS[item.icon] || ShieldCheck;
                    return (
                      <li
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full border border-mustard/20 bg-night/60 px-3 py-1.5 text-xs sm:text-sm font-medium text-cream/80"
                      >
                        <Icon className="w-4 h-4 text-mustard" strokeWidth={2.2} />
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
