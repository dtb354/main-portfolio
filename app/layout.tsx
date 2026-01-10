import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BubbleMenu from "@/components/BubbleMenu";
import LogoLoop from "@/components/LogoLoop";
import "./globals.css";
import {SiGit, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript} from "react-icons/si";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Tran Portfolio",
  description: "Brought by yours truly",
};

const items = [
    {
        label: 'home',
        href: '/',
        ariaLabel: 'Home',
        rotation: -8,
        hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
        label: 'about',
        href: '/about-me',
        ariaLabel: 'About Me',
        rotation: 8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
        label: 'projects',
        href: '#',
        ariaLabel: 'Projects',
        rotation: 8,
        hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
        label: 'contact',
        href: '#',
        ariaLabel: 'Contact',
        rotation: -8,
        hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    },
    {
        label: 'contact',
        href: '#',
        ariaLabel: 'Contact',
        rotation: 6,
        hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    },

];

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <header>
        <nav className="p-4 flex flex-col md:flex-row md:justify-between md:items-center bg-amber-500">
            <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/dtb-logo.png" alt="Logo" className="w-36 h-36 rounded-full" id="website-logo"/>
            </div>
            <div id="nav-links" className="">
                <BubbleMenu
                    items={items}
                    logo="/dtb-logo.png"
                    menuAriaLabel="Toggle navigation"
                    menuBg="#ffffff"
                    menuContentColor="#111111"
                    useFixedPosition={false}
                    animationEase="back.out(1.5)"
                    animationDuration={0.5}
                    staggerDelay={0.12}
                />
            </div>
        </nav>
    </header>

    {children}
    <footer>
        <div className="flex justify-center items-center p-4">
            <p className="text-gray-700">© 2025 Daniel Tran. All rights reserved.</p>
        </div>
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
    </footer>
    </body>
    </html>
  );
}
