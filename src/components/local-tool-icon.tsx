interface LocalToolIconProps {
  icon: string;
  className?: string;
}

export function LocalToolIcon({ icon, className = "h-7 w-7" }: LocalToolIconProps) {
  const common = `rounded-md ${className}`;

  switch (icon) {
    case "chatgpt":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#10a37f" />
          <circle cx="12" cy="12" r="5" fill="#ffffff" />
        </svg>
      );
    case "midjourney":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#1e293b" />
          <path d="M5 16c3-7 5-7 7 0 2-7 4-7 7 0" stroke="#38bdf8" strokeWidth="2" fill="none" />
        </svg>
      );
    case "copilot":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#111827" />
          <rect x="5" y="7" width="14" height="10" rx="3" fill="#ffffff" />
          <circle cx="9" cy="12" r="1.2" fill="#111827" />
          <circle cx="15" cy="12" r="1.2" fill="#111827" />
        </svg>
      );
    case "runway":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#0f172a" />
          <path d="M6 6h5l7 12h-5z" fill="#a78bfa" />
        </svg>
      );
    case "notion":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#ffffff" />
          <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="none" stroke="#111827" strokeWidth="2" />
          <path d="M8 16V8l8 8V8" stroke="#111827" strokeWidth="2" fill="none" />
        </svg>
      );
    case "jasper":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#f59e0b" />
          <path d="M8 16c0-3 2-5 4-5s4-2 4-5" stroke="#ffffff" strokeWidth="2" fill="none" />
        </svg>
      );
    case "claude":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#d97706" />
          <circle cx="12" cy="12" r="5" fill="#fff7ed" />
        </svg>
      );
    case "gemini":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#1d4ed8" />
          <path d="M12 5l2.2 4.8L19 12l-4.8 2.2L12 19l-2.2-4.8L5 12l4.8-2.2z" fill="#dbeafe" />
        </svg>
      );
    case "copyai":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#7c3aed" />
          <rect x="6" y="7" width="12" height="10" rx="2" fill="#ede9fe" />
        </svg>
      );
    case "writesonic":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#0891b2" />
          <path d="M7 16l4-8 2 4 4-4" stroke="#ecfeff" strokeWidth="2" fill="none" />
        </svg>
      );
    case "perplexity":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#0f172a" />
          <path d="M7 8h10v8H7z" fill="none" stroke="#22d3ee" strokeWidth="2" />
          <path d="M9 12h6" stroke="#22d3ee" strokeWidth="2" />
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#111827" />
          <path d="M6 6l12 6-12 6 3-6z" fill="#f9fafb" />
        </svg>
      );
    case "leonardo":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#4338ca" />
          <circle cx="12" cy="12" r="4.5" fill="#c7d2fe" />
          <circle cx="12" cy="12" r="1.5" fill="#312e81" />
        </svg>
      );
    case "heygen":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#dc2626" />
          <polygon points="10,8 17,12 10,16" fill="#fee2e2" />
          <rect x="6" y="8" width="2" height="8" fill="#fee2e2" />
        </svg>
      );
    case "zapier":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#ea580c" />
          <path d="M7 7h10M7 17h10M12 7v10" stroke="#fff7ed" strokeWidth="2" />
        </svg>
      );
    case "windsurf":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#0c4a6e" />
          <path d="M5 14c2-3 4-3 6 0s4 3 8 0" stroke="#e0f2fe" strokeWidth="2" fill="none" />
        </svg>
      );
    case "v0":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#111827" />
          <path d="M6 7l6 10 6-10" stroke="#f3f4f6" strokeWidth="2" fill="none" />
        </svg>
      );
    case "pika":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#db2777" />
          <circle cx="12" cy="12" r="4" fill="#fdf2f8" />
          <path d="M12 6v12M6 12h12" stroke="#fdf2f8" strokeWidth="1.5" />
        </svg>
      );
    case "canva":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#06b6d4" />
          <path d="M15.5 8.5a4.5 4.5 0 10.1 7" stroke="#ecfeff" strokeWidth="2" fill="none" />
        </svg>
      );
    case "gamma":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#7c3aed" />
          <path d="M7 7h10l-5 10h5" stroke="#f5f3ff" strokeWidth="2" fill="none" />
        </svg>
      );
    case "suno":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#4f46e5" />
          <path d="M10 8v8a2 2 0 11-2-2" stroke="#eef2ff" strokeWidth="2" fill="none" />
          <path d="M10 8l6-1v6" stroke="#eef2ff" strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#64748b" />
        </svg>
      );
  }
}
