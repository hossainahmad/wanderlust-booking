import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "Admin", href: "/admin" },
];

const accountLinks = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/sign-up" },
];

export function Nav({ active = "Home" }: { active?: string }) {
  return (
    <header className="border-border bg-white shadow-sm">
      <nav aria-label="Main" className="relative flex h-16 items-center px-6">
        <ul className="flex flex-1 items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "text-[15px] transition-colors",
                  link.label === active
                    ? "text-brand underline underline-offset-4"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlast"
            width={150}
            height={30}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <ul className="flex flex-1 items-center justify-end gap-7">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-1.5 text-[15px] text-foreground/80 transition-colors hover:text-foreground"
            >
              <User className="size-4" strokeWidth={1.75} />
              Profile
            </Link>
          </li>
          {accountLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[15px] text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
