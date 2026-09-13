// Shared shape for every technology entry loaded from technologies.json.
// Using a real interface instead of "any" gives autocomplete + catches typos at compile time.
export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}