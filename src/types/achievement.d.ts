interface Props {
  variant: "yellow" | "blue" | "purple" | "neutral";
  title: string;
  description: string;
}

interface AchievementVariant {
  yellow: "yellow";
  blue: "blue";
  purple: "purple";
  neutral: "neutral";
}

interface AchievementEntry {
  variant: AchievementVariant;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  wrapperClass: string;
}

interface ShowcaseCardEntry {
  variant: AchievementVariant;
  title: string;
  description: string;
  icon: keyof typeof showcaseCardIcons;
}

interface OpenSourceEntry {
  icon: keyof typeof openSourceIcons;
  title: string;
  description: string;
  cellClass: string;
}
