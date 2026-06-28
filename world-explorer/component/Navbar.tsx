"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/search", label: "Search" },
  { href: "/countries", label: "Countries" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-4 justify-center py-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`relative px-5 py-2 rounded-2xl text-sm font-medium
               border transition-all duration-300
              shadow-lg hover:shadow-xl hover:scale-105
              ${
                isActive
                  ? "bg-yellow-500 text-black border-yellow-400 shadow-yellow-500/40"
                  : "bg-black/80 text-yellow-400 border-yellow-600/40 hover:bg-yellow-500/10 hover:border-yellow-400"
              }`}
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity" />

            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}