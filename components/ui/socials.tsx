import {
  SiInstagram,
  SiYoutube,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiX,
} from "react-icons/si";
import { SocialMediaLink } from "./social-media-link";
import React from "react";
import { cn } from "@/lib/utils";

export const socials = [
  {
    platform: "Instagram",
    href: "https://instagram.com/pedrodevelops",
    icon: SiInstagram,
  },
  {
    platform: "YouTube",
    href: "https://youtube.com/@pedrodevelops",
    icon: SiYoutube,
  },
  {
    platform: "GitHub",
    href: "https://github.com/pedrodevelops",
    icon: SiGithub,
  },
  {
    platform: "Mail",
    href: "mailto:dev.henriquegn@gmail.com",
    icon: SiGmail,
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/henrique-gadelha-02468a240/",
    icon: SiLinkedin,
  },
  {
    platform: "X/Twitter",
    href: "https://x.com/pedrodevelops",
    icon: SiX,
  },
];

export interface SocialProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Socials({ className }: SocialProps) {
  return (
    <div
      className={cn(
        "flex transition-colors ease-in-out duration-200 gap-2",
        className
      )}
    >
      {socials.map(({ href, icon: Icon, platform }) => (
        <SocialMediaLink key={platform} href={href} platform={platform}>
          <Icon size={18} />
        </SocialMediaLink>
      ))}
    </div>
  );
}
