import { socialLinks } from "@/data/social";

const BOX =
  "flex h-9 w-9 items-center justify-center rounded-pill border border-border transition-colors";

export default function SocialLinks({ className = "" }: { className?: string }) {
  if (socialLinks.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`${BOX} text-muted hover:border-foreground hover:text-foreground`}
            >
              <Icon size={16} />
            </a>
          ) : (
            // No URL yet — show the icon in place rather than a dead link.
            // Add the URL in src/data/social.ts and this becomes a real link.
            <span
              role="img"
              aria-label={`${label} — link coming soon`}
              title={`${label} — link coming soon`}
              className={`${BOX} cursor-default text-border`}
            >
              <Icon size={16} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
