import { Sandwich } from "lucide-react";
import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-cream/70 border-t border-mustard/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-mustard/15 text-mustard">
              <Sandwich className="w-5 h-5" strokeWidth={2.2} />
            </span>
            <span className="text-xl sm:text-2xl font-black italic text-cream">
              {footer.brand}
            </span>
          </div>
          <p className="text-sm sm:text-base text-cream/70">{footer.tagline}</p>
          <p className="text-xs sm:text-sm text-cream/50 mt-2">
            <span>{footer.rightsPrefix}</span>{" "}
            <span>{year}</span>{" "}
            <span>{footer.rightsSuffix}</span>
          </p>
        </div>
        <div className="mt-10 pt-8 border-t border-mustard/10">
          <p className="text-[11px] sm:text-xs text-cream/45 leading-relaxed text-center max-w-3xl mx-auto">
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
