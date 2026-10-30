import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "My Profile", href: "/profile" },
] as const;

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

const columns = [
  { heading: "Quick Links", links: quickLinks },
  { heading: "Support", links: supportLinks },
] as const;

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

const socials = [
  {
    label: "X",
    href: "https://x.com",
    icon: <XIcon className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <LinkedinIcon className="size-5" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <InstagramIcon className="size-5" />,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#181818] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Wanderlast
        </p>
        <p className="mt-2 font-sans text-base text-white/75">
          Your gateway to extraordinary travel experiences around the world
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h3 className="font-sans text-[15px] uppercase text-white/90">
              Newsletter
            </h3>
            <p className="mt-2 font-sans text-xs text-white/60">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form
              action="/subscribe"
              method="post"
              className="mt-4 flex h-11 max-w-xs items-center bg-white/10 focus-within:ring-3 focus-within:ring-ring/50"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter email"
                className="h-full w-full bg-transparent px-4 font-sans text-sm text-white outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-full w-12 shrink-0 items-center justify-center text-white/70 transition-colors hover:text-white"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="font-sans text-[15px] uppercase text-white/90">
                {column.heading}
              </h3>
              <ul className="mt-6 space-y-5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-[15px] text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-sans text-[15px] uppercase text-white/90">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="tel:+17869011622"
                  className="font-sans text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderlast.com"
                  className="font-sans text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  info@wanderlast.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="font-sans text-xs text-white/60">
            © 2026 Wanderlast. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white/70 transition-colors hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
