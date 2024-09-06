"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    // Check if window is available and run this effect on the client side only
    if (typeof window !== "undefined") {
      const urlHash = window.location.hash;
      setCurrentSection(urlHash || "#me");

      // Updates the current section based on scroll position
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const top = section.offsetTop;
          const bottom = top + section.clientHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setCurrentSection(`#${section.id}`);
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const links = [
    { href: "#me", label: "Me" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#connect", label: "Connect" },
  ];

  return (
    <header className="sticky pt-4 top-0 z-50">
      <div className="absolute w-[60rem] flex items-center justify-between border drop-shadow px-4 py-2 rounded-xl backdrop-blur-lg border-stone-600  bg-stone-100 text-sm font-semibold">
        <Link href={"#home"}>
          <span className="flex gap-2 items-center">
            <span>{">"} pedrodevelops_</span>
          </span>
        </Link>
        <ul className="flex gap-12">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-all ease-in-out delay-500",
                currentSection === href ? "underline" : "hover:underline"
              )}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
