import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import {
  BehanceIcon,
  DribbbleIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/ui/BrandIcon";
import { profile } from "@/data/resume";

export type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
};

// The single place to edit social profiles. Every icon is rendered; the ones
// with an empty `href` show as non-clickable placeholders until a URL is added
// here, so no visitor ever lands on a dead link.
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "", Icon: LinkedInIcon },
  { label: "Twitter", href: "", Icon: TwitterIcon },
  { label: "Instagram", href: "", Icon: InstagramIcon },
  { label: "Dribbble", href: "", Icon: DribbbleIcon },
  { label: "Behance", href: "", Icon: BehanceIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

// Profile URLs for the Person schema's `sameAs` — search engines and AI
// crawlers use these to tie the site to the same person across platforms.
export const socialProfileUrls: string[] = socialLinks
  .map((link) => link.href)
  .filter((href) => href.startsWith("http"));
