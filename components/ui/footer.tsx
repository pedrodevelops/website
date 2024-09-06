import Link from "next/link";
import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="border-t flex justify-between items-center py-8 text-sm text-center text-gray-500">
      <p>
        © {new Date().getFullYear()}{" "}
        <Link href="https://pedrodevelops.com">pedrodevelops</Link>
      </p>
      <Socials />
    </footer>
  );
}
