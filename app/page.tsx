'use client';

import Image from "next/image";
import {SiCplusplus, SiExpress, SiLaravel, SiNextdotjs} from 'react-icons/si';

import {
  FaCss3Alt, FaDatabase, FaFigma, FaGitAlt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaPhp,
  FaPython,
  FaTwitch,
  FaYoutube
} from "react-icons/fa";

import Hyperspeed from "@/components/Hyperspeed";
import {hyperspeedPresets} from "@/components/HyperSpeedPresets";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main
          className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <section id="about-section" className="relative w-full md:w-10/12 mx-auto rounded-lg overflow-hidden shadow-2xl bg-gray-900" style={{ minHeight: '500px' }}>
          {/* Hyperspeed Background */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <Hyperspeed
                effectOptions={hyperspeedPresets.five}
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col md:flex-row w-full h-full p-4 md:p-8 gap-4 md:gap-8 bg-black/40 backdrop-blur-xs">
            <div id="left-section" className="w-full md:w-1/4 p-2 md:p-4 flex flex-col items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/face3.jpeg" alt="Picture of Daniel Tran holding his thumb up"
                   className="rounded-full w-40 h-40 md:w-48 md:h-48 mb-4 shadow-lg border-4 border-white/80"/>
            </div>

            <div id="right-section" className="w-full md:w-3/4 p-2 md:p-4 flex flex-col justify-center text-white">
              <h1 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg">Your Friendly Neighbourhood Full-Stack Engineer</h1>
              <div className="bio mb-6">
                <p className="text-base md:text-lg leading-relaxed mb-4 drop-shadow-md">
                  Hello world! I&apos;m Daniel, an aspiring Full-Stack software developer/engineer. I am currently
                  studying Creative Media and Game Technologies at the
                  Rotterdam University of Applied Sciences with the ambition to pursue a Master&apos;s Degree in Software Engineering at University of Amsterdam!
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-10 drop-shadow-md">
                  I have experience
                  in Full-Stack development, DevOps, and UX design. With my background in programming as well as architectural
                  engineering, I am equipped and ambitious
                  to pursue any project.
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-10 drop-shadow-md">
                  Outside my career and studies, I enjoy going to the gym, playing games, and making videos on YouTube!
                </p>
              </div>

              <div id="social-media" className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 p-2 md:p-4">
              <a href="https://www.instagram.com/dannythebozo/"
                  className="text-2xl md:text-4xl text-white hover:text-pink-500 drop-shadow-lg">
                <FaInstagram/>
              </a>
              <a href="https://www.youtube.com/@dannythebozo"
                 className="text-2xl md:text-4xl text-white hover:text-red-500 drop-shadow-lg">
                <FaYoutube/>
              </a>
              <a href="https://www.twitch.tv/dannythebozo"
                 className="text-2xl md:text-4xl text-white hover:text-purple-600 drop-shadow-lg">
                <FaTwitch/>
              </a>
              <a href="https://www.linkedin.com/in/daniel-tran-42661a1b5/"
                 className="text-2xl md:text-4xl text-white hover:text-blue-700 drop-shadow-lg">
                <FaLinkedin/>
              </a>
              <a href="https://github.com/dtb354"
                 className="text-2xl md:text-4xl text-white hover:text-blue-300 drop-shadow-lg">
                <FaGithub/>
              </a>
            </div>
            </div>
          </div>
        </section>

        <section id="skills-section" className="w-full flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-amber-200">Skills</h2>
          <div id="skill-icons" className="flex items-center justify-center space-x-4 md:space-x-6 p-4 flex-wrap max-w-4xl">
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaJs/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaHtml5/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaCss3Alt/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaPhp/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaPython/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <SiCplusplus/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaGitAlt/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaGithub/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaFigma/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <FaDatabase/>
            </i>
          </div>
        </section>


        <section id="frameworks-section" className="w-full flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-amber-200">Frameworks</h2>
          <div id="skill-icons" className="flex items-center justify-center space-x-4 md:space-x-6 p-4 flex-wrap max-w-4xl">
            <i className="text-3xl md:text-5xl text-amber-200">
              <SiLaravel/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <SiNextdotjs/>
            </i>
            <i className="text-3xl md:text-5xl text-amber-200">
              <SiExpress/>
            </i>
          </div>
        </section>
      </main>
    </div>
  );
}
