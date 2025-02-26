import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SectionLink, SectionRoot } from "@/components/ui/section";
import { Socials } from "@/components/ui/socials";
import {
  ArrowUpIcon,
  ExternalLinkIcon,
  LaptopIcon,
  ServerIcon,
} from "lucide-react";
import Link from "next/link";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
} from "react-icons/si";
import { ArrowDownIcon } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { CardFooter, CardRoot } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-fit my-auto">
      <SectionRoot id="home" className="flex-row items-center">
        <Avatar>
          <AvatarImage
            src={"https://avatars.githubusercontent.com/u/115515311?v=4"}
          />

          <AvatarFallback>
            <div className="w-full -rotate-6 rounded-3xl h-full bg-gradient-to-bl from-stone-500 to-stone-900" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4">
          <h1 className="scroll-m-20 text-4xl drop-shadow-lg font-extrabold tracking-tight lg:text-5xl">
            Hi there, {"I'm"} Pedro 👋
          </h1>
          <p className="scroll-m-20 text-2xl drop-shadow-lg tracking-tight">
            A web developer, specializing in back-end services, sharing cool
            things I learn through my software engineer journey.
          </p>
          <Socials />
        </div>
        <SectionLink href="#me">
          <p>About</p>
          <ArrowDownIcon size={24} />
        </SectionLink>
      </SectionRoot>

      <SectionRoot
        id="me"
        className="min-h-screen border-y flex flex-col relative justify-center gap-12"
      >
        <h1 className="scroll-m-20 text-4xl drop-shadow-lg font-extrabold tracking-tight lg:text-5xl">
          About me
        </h1>
        <p className="scroll-m-20 text-xl tracking-tight">
          {"I'm"} a web developer from Brazil, currently working with Node.js to
          build scalable and reliable back-end services. {"I'm"} also a content
          creator, sharing my journey and knowledge on web development through
          my YouTube channel.
        </p>
        <SectionLink href="#services">
          <p>Services</p>
          <ArrowDownIcon size={24} />
        </SectionLink>
      </SectionRoot>

      <SectionRoot
        id="services"
        className="min-h-screen border-y flex flex-col relative justify-center gap-12"
      >
        <h1 className="scroll-m-20 text-4xl drop-shadow-lg font-extrabold tracking-tight lg:text-5xl">
          Services
        </h1>
        <p className="scroll-m-20 text-xl tracking-tight">
          I believe picking the right tools for the job is essential to build
          reliable and scalable applications. Here are some of the services I
          provide and some of the tools I use to build them.
        </p>

        <ul className="flex gap-12">
          <CardRoot className="w-2/5 h-56">
            <div className="flex gap-2 items-center">
              <ServerIcon strokeWidth={1} size={28} />
              <p className="text-2xl">Back-end services</p>
            </div>
            <p>
              Using tools from the Node.js ecosystem, I build scalable and
              reliable back-end services, focusing on maintainability
            </p>
            <ul className="flex absolute bottom-4 gap-4">
              <SiTypescript size={28} />
              <SiNodedotjs size={28} />
              <SiExpress size={28} />
              <SiNestjs size={28} />

              <SiDocker size={28} />
              <SiPrisma size={28} />
              <SiMongodb size={28} />
              <SiPostgresql size={28} />
            </ul>
          </CardRoot>
          <CardRoot className="w-2/5 h-56 drop-shadow shadow-lg">
            <div className="flex gap-2 items-center">
              <LaptopIcon strokeWidth={1} size={28} />
              <p className="text-2xl">Websites</p>
            </div>
            <p>
              Also using typescrip I build websites using modern tools of the
              React ecosystem, enphatizing user experience
            </p>
            <CardFooter className="flex absolute bottom-4 gap-4">
              <SiTypescript size={28} />
              <SiReact size={28} />
              <SiTailwindcss size={28} />
              <SiNextdotjs size={28} />
              <SiTurborepo size={28} />
            </CardFooter>
          </CardRoot>
        </ul>
        <SectionLink href="#projects">
          <p>Projects</p>
          <ArrowDownIcon size={24} />
        </SectionLink>
      </SectionRoot>

      <SectionRoot
        id="projects"
        className="min-h-screen border-y flex flex-col relative justify-center gap-12"
      >
        <h1 className="scroll-m-20 text-4xl drop-shadow-lg font-extrabold tracking-tight lg:text-5xl">
          Projects
        </h1>
        <ul className="space-y-8 w-[50rem]">
          <CardRoot className="w-[45rem]">
            <Link
              href={"https://github.com/pedrodevelops/profile"}
              className="flex gap-2 text-center items-center hover:underline"
            >
              <h2 className="scroll-m-20 text-3xl flex font-semibold tracking-tight first:mt-0">
                Profile
              </h2>
              <ExternalLinkIcon size={24} />
            </Link>
            <ul className="space-x-2">
              <Badge>NestJS</Badge>
              <Badge>MongoDB</Badge>
              <Badge>Next.js</Badge>
              <Badge>TailwindCSS</Badge>
              <Badge>Turborepo</Badge>
            </ul>
            <p className="scroll-m-20 text-xl tracking-tight">
              A web application that allows users to create and customize their
              profiles with unique nicknames, descriptions, social media links
              and tags for a quick and easy way to share their personal
              branding.
            </p>
          </CardRoot>
        </ul>
        <SectionLink href="#connect">
          <p>Connect</p>
          <ArrowDownIcon size={24} />
        </SectionLink>
      </SectionRoot>

      <SectionRoot
        id="connect"
        className="min-h-screen border-y flex flex-col relative justify-center gap-12"
      >
        <h1 className="scroll-m-20 text-4xl drop-shadow-lg font-extrabold tracking-tight lg:text-5xl">
          Connect with me
        </h1>
        <div className="flex relative gap-12">
          <div className="flex flex-col gap-4">
            <p className="scroll-m-20 text-xl tracking-tight">
              {"I'm"} always looking for meeting new people and solving problems
              together, {"I'm"} open to contribute to open source projects and
              help you with your projects, feel free to reach me out on social
              media, or any of the contacts below.
            </p>
            <Socials />
          </div>
          <ContactForm />
        </div>
        <SectionLink href="#home">
          <p>Back to top</p>
          <ArrowUpIcon size={24} />
        </SectionLink>
      </SectionRoot>
    </main>
  );
}
