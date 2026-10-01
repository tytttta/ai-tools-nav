import Image from "next/image";

interface LocalToolIconProps {
  icon: string;
  className?: string;
}

const iconColorMap: Record<string, string> = {
  chatgpt: "#10a37f",
  midjourney: "#1e293b",
  copilot: "#111827",
  runway: "#0f172a",
  notion: "#18181b",
  jasper: "#f59e0b",
  claude: "#d97706",
  gemini: "#1d4ed8",
  copyai: "#7c3aed",
  writesonic: "#0891b2",
  perplexity: "#0f172a",
  cursor: "#111827",
  leonardo: "#4338ca",
  heygen: "#dc2626",
  zapier: "#ea580c",
  windsurf: "#0c4a6e",
  v0: "#111827",
  pika: "#db2777",
  canva: "#06b6d4",
  gamma: "#7c3aed",
  suno: "#4f46e5"
};

function toDataUri(rawSvg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(rawSvg)}`;
}

function getIconSource(icon: string) {
  const bg = iconColorMap[icon] ?? "#64748b";
  const label = (icon.slice(0, 2) || "AI").toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='${bg}'/><text x='32' y='39' text-anchor='middle' font-size='20' font-family='Arial, sans-serif' fill='white'>${label}</text></svg>`;
  return toDataUri(svg);
}

function getBlurDataUrl(icon: string) {
  const bg = iconColorMap[icon] ?? "#64748b";
  return toDataUri(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><rect width='8' height='8' fill='${bg}'/></svg>`
  );
}

export function LocalToolIcon({ icon, className = "h-7 w-7" }: LocalToolIconProps) {
  return (
    <Image
      src={getIconSource(icon)}
      alt={`${icon} logo`}
      width={64}
      height={64}
      className={`rounded-md ${className}`}
      loading="lazy"
      placeholder="blur"
      blurDataURL={getBlurDataUrl(icon)}
      unoptimized
    />
  );
}
