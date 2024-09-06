import Link, { LinkProps } from "next/link";
import * as React from "react";

export interface SocialMediaLinkProps extends LinkProps {
  platform: string;
  children: React.ReactNode;
}

export function SocialMediaLink({ platform, ...props }: SocialMediaLinkProps) {
  return (
    <Link
      className="inline-flex items-center text-stone-200 hover:text-stone-50 justify-center whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 p-2 border shadow hover:shadow-lg rounded-lg bg-stone-900 hover:bg-stone-800 hover:-mt-1 hover:mb-1"
      key={platform}
      aria-label={platform}
      {...props}
    />
  );
}
