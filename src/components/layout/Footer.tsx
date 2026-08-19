import Link from "next/link";
import { Link2, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="text-sm text-muted">{profile.title}</p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-none border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
            >
              <Link2 size={16} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-none border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            <Mail size={16} />
          </a>
        </div>
      </Container>

      <Container className="pb-8">
        <p className="text-xs text-muted">© {year} {profile.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
