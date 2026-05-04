import { copy } from "@/lib/copy";
import { AlertTriangle } from "lucide-react";

export default function Story() {
  const { story } = copy;

  return (
    <section className="relative bg-charcoal text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 w-96 h-96 rounded-full bg-tomato/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -m-3 rounded-3xl border-2 border-mustard/30" />
              <div className="absolute inset-0 -m-3 rounded-3xl border-2 border-mustard/30 translate-x-3 translate-y-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-night/70">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block text-mustard text-sm sm:text-base font-bold uppercase tracking-widest">
              {story.eyebrow}
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
              <span className="text-cream">{story.headline.pre}</span>{" "}
              <span className="italic text-mustard">
                {story.headline.accent}
              </span>
            </h2>

            <div className="mt-6 space-y-4">
              {story.paragraphs.map((p, i) => {
                if (p.style === "bold-accent") {
                  return (
                    <p
                      key={i}
                      className="text-2xl md:text-3xl font-black uppercase tracking-tight text-mustard leading-tight"
                    >
                      {p.text}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-base sm:text-lg text-cream/80 leading-relaxed">
                    {p.text}
                  </p>
                );
              })}
            </div>

            {/* Pains */}
            <div className="mt-9 rounded-2xl border border-tomato/30 bg-tomato/5 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-tomato/15 p-2">
                  <AlertTriangle className="w-5 h-5 text-tomato" strokeWidth={2.4} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-cream">
                  {story.painsTitle}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {story.pains.map((pain, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-cream/85 border-l-4 border-tomato/60 pl-3 py-1"
                  >
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-7 text-base sm:text-lg text-cream-soft leading-relaxed font-medium">
              {story.bridge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
