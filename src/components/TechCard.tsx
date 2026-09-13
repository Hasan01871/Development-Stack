import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isSelected: boolean;
  onAddToStack: (tech: Technology) => void;
}

// Each badge word gets its own accent color, matching the design —
// unknown/new badge words fall back to pink automatically.
const BADGE_COLORS: Record<string, string> = {
  Popular: "text-sky-500",
  Versatile: "text-emerald-500",
  Fast: "text-rose-500",
  Standard: "text-emerald-500",
  "Top SQL": "text-sky-500",
  Cache: "text-rose-500",
  Ubiquitous: "text-amber-500",
  Essential: "text-sky-500",
  Robust: "text-pink-500",
  Modern: "text-pink-500",
  Containers: "text-pink-500",
};

function TechCard({ tech, isSelected, onAddToStack }: TechCardProps) {
  const badgeColor = BADGE_COLORS[tech.badge] ?? "text-pink-500";

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className={`text-xs font-semibold italic ${badgeColor}`}>{tech.badge}</span>
      </div>

      <h3 className="font-bold text-lg text-neutral-900">{tech.name}</h3>
      <p className="text-sm text-neutral-500 mt-1 flex-1">{tech.description}</p>

      <div className="flex items-center justify-between text-xs text-neutral-500 mt-4 mb-3">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span>★ {tech.rating}</span>
      </div>

      <button
        onClick={() => onAddToStack(tech)}
        disabled={isSelected}
        className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
          isSelected
            ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
            : "bg-neutral-900 text-white hover:opacity-90"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;