import { cn } from "@/lib/utils";
import Link from "next/link";

interface SectionRootProps extends React.HTMLAttributes<HTMLDivElement> {}

function SectionRoot({ className, ...props }: SectionRootProps) {
  return (
    <section
      className={cn(
        "min-h-screen border-y flex flex-col relative justify-center gap-12",
        className
      )}
      {...props}
    />
  );
}

export interface SectionLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
}

export function SectionLink({ href, className, children }: SectionLinkProps) {
  return (
    <div className="absolute w-[60rem] flex justify-center bottom-8">
      <Link
        className={cn(
          "flex items-center gap-2 p-2 rounded-lg shadow-lg font-semibold border border-stone-950 bg-stone-900 text-stone-100 transition-all ease-in-out delay-100 hover:bg-stone-800 hover:text-stone-50 hover:gap-4",
          className
        )}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
}

export { SectionRoot };
