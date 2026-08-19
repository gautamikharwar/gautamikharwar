import Link from "next/link";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
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

        <SocialLinks />
      </Container>

      <Container className="pb-8">
        <p className="text-center text-xs text-muted">© {year} {profile.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
