type CareerTone = "accent" | "surface" | "inverted";

type PeriodStyle = "onDark" | "onAccent";

type TagStyle = "pillDark" | "outline" | "pillAccent";

interface CareerEntry {
  period: string;
  title: string;
  company: string;
  description: string;
  quote: boolean;
  skills: string[];
  rowEnd: boolean;
  rotate: string;
  tone: CareerTone;
  periodStyle: PeriodStyle;
  tagStyle: TagStyle;
}
