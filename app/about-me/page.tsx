import LogoLoop from "@/components/LogoLoop";
import {SiGit, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript} from "react-icons/si";


export default function Home() {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    ];

    return (
        <>
            <h1>
                Hello World
            </h1>
            <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                width="100%"
                scaleOnHover
                ariaLabel="Technology partners"
            />
        </>
    );
}
