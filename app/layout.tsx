import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BubbleMenu from "@/components/BubbleMenu";
import LogoLoop from "@/components/LogoLoop";
import PillNav from "@/components/PillNav";
import logo from "../public/dtb-logo.png";
import "./globals.css";
import {
  SiGit, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,
  SiPhp, SiHtml5, SiCss3, SiExpress, SiLaravel, SiPython, SiMongodb, SiFlask
} from "react-icons/si";


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
        label: 'about me',
        href: '/about-me',
        ariaLabel: 'About Me',
        rotation: 8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
        label: 'projects',
        href: '/projects',
        ariaLabel: 'Projects',
        rotation: 8,
        hoverStyles: { bgColor: '#f50b1f', textColor: '#ffffff' }
    },
    {
        label: 'contact',
        href: '/contact',
        ariaLabel: 'Contact',
        rotation: -8,
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
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-500`}
    >

    <header>
        <nav className="flex justify-center items-center h-24 bg-amber-500">
            <div id="nav-links" className="w-full">
                <PillNav
                    logo={logo.src}
                    logoAlt="Company Logo"
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'About', href: '/about-me' },
                        { label: 'Projects', href: '/projects' },
                        { label: 'Contact', href: '/contact' }
                        ]}
                    className="custom-nav"
                    ease="power2.easeOut"
                    baseColor="#000000"
                    pillColor="#ffffff"
                    hoveredPillTextColor="#ffffff"
                    pillTextColor="#000000"
                    initialLoadAnimation={false}
                />
                
            </div>
        </nav>
    </header>

    {children}
    <footer className="bg-gray-200">
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
