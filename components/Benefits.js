import {
  Sparkles,
  Heart,
  Home,
  Zap,
  Users,
  Utensils,
  Star,
} from "lucide-react";
import { copy } from "@/lib/copy";

const ICONS = {
  sparkles: Sparkles,
  heart: Heart,
  home: Home,
  zap: Zap,
  users: Users,
  utensils: Utensils,
  star: Star,
};

export default function Benefits() {
  const { benefits } = copy;

  return (
    <section className="relative bg-cream text-charcoal py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-mustard/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-tomato/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-amber-grill text-sm sm:text-base font-bold uppercase tracking-widest">
            {benefits.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-charcoal">
            <span>{benefits.headline.pre}</span>{" "}
            <span className="italic text-amber-grill">{benefits.headline.accent}</span>{" "}
            <span>{benefits.headline.post}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-smoke/75 leading-relaxed">
            {benefits.subheadline}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {benefits.items.map((item, i) => {
            const Icon = ICONS[item.icon] || Star;
            return (
              <div
                key={i}
                className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-mustard/15 shadow-sm hover:shadow-xl hover:shadow-mustard/10 hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-mustard/15 text-amber-grill mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-charcoal leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-smoke/75 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-14 max-w-3xl mx-auto text-center text-lg sm:text-xl text-charcoal leading-relaxed font-medium">
          <span>{benefits.closing.pre}</span>{" "}
          <span className="font-black italic text-amber-grill">
            {benefits.closing.accent}
          </span>
        </p>
      </div>
    </section>
  );
}
