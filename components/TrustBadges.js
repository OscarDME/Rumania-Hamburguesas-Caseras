import { Lock, Mail, CreditCard, Zap, ShieldCheck, Sandwich } from "lucide-react";

const ICONS = {
  lock: Lock,
  mail: Mail,
  card: CreditCard,
  zap: Zap,
  shield: ShieldCheck,
  burger: Sandwich,
};

export default function TrustBadges({ items, theme = "dark" }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const wrap =
    theme === "dark"
      ? "text-cream/75"
      : "text-smoke/75";
  const bg =
    theme === "dark"
      ? "bg-charcoal/60 border-mustard/15"
      : "bg-cream-soft/80 border-meat/10";

  return (
    <ul className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${wrap}`}>
      {items.map((item, i) => {
        const Icon = ICONS[item.icon] || ShieldCheck;
        return (
          <li
            key={i}
            className={`inline-flex items-center gap-2 rounded-full border ${bg} px-3 py-1.5 text-xs sm:text-sm font-medium`}
          >
            <Icon className="w-4 h-4 text-mustard" strokeWidth={2.2} />
            <span>{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
}
