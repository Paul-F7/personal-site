"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Image from "next/image";
import UWaterlooLogo from "../../assets/UWaterloo.png";
import FlavorFlickLogo from "../../assets/flavorflick.png";
import OrbitalLogo from "../../assets/orbital.png";
import VexLogo from "../../assets/vex.png";
import FeelifyLogo from "../../assets/feelify.webp";
import HandInHandLogo from "../../assets/handinhand.png";

export default function About() {
  return (
    <div className="flex flex-col font-extralight">
      <ul className="grid gap-4 text-base">
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            currently:
          </span>
          <ul className="grid gap-1.5 pl-4">
            <li className="relative flex items-center gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                Applied Math + ML @{" "}
                <Image src={UWaterlooLogo} alt="UWaterloo" width={18} height={18} className="inline rounded-sm" />
                <Link href="https://uwaterloo.ca" className="font-medium">
                  uWaterloo
                </Link>
              </span>
            </li>
            <li className="relative flex items-center gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                Quantitative Research @{" "}
                <Image src={UWaterlooLogo} alt="UWaterloo" width={18} height={18} className="inline rounded-sm" />
                <Link href="https://uwaterloo.ca" className="font-medium">
                  uWaterloo
                </Link>
              </span>
            </li>
            <li className="relative flex items-center gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                Building{" "}
                <Image src={FlavorFlickLogo} alt="FlavorFlick" width={18} height={18} className="inline rounded-sm" />
                <Link href="https://flavorflick.ca/" className="font-medium">
                  FlavorFlick
                </Link>
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            previously:
          </span>
          <ul className="grid gap-1.5 pl-4">
            <li className="relative flex items-center gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                SWE @{" "}
                <Image src={OrbitalLogo} alt="UW Orbital" width={18} height={18} className="inline rounded-sm" />
                <Link href="https://uworbital.com" className="font-medium">
                  UW Orbital
                </Link>
              </span>
            </li>
            <li className="relative flex items-center gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                Team Lead @{" "}
                <Image src={VexLogo} alt="VEX Robotics" width={18} height={18} className="inline rounded-sm" />
                <Link href="https://www.vexrobotics.com" className="font-medium">
                  VEX Robotics
                </Link>
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            what i&apos;ve built:
          </span>
          <ul className="grid gap-1.5 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                <Image src={FeelifyLogo} alt="Feelify" width={18} height={18} className="inline rounded-sm mr-1 align-middle" />
                <Link href="#" className="font-medium">Feelify</Link> — ML song mood detection app, predicting emotion from mp3 files
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                <Image src={HandInHandLogo} alt="Hand in Hand" width={18} height={18} className="inline rounded-sm mr-1 align-middle" />
                <Link href="#" className="font-medium">Hand in Hand</Link> — Duolingo for ASL with live gesture feedback
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                computer vision <Link href="#" className="font-medium">Sudoku Solver</Link> with 99%+ accuracy
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-8 py-4 px-6 rounded-lg border border-stone-400 dark:border-stone-600 bg-stone-50/80 dark:bg-stone-900/80 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] shadow-sm backdrop-blur-sm"
      >
        View My Projects
      </NextLink>
    </div>
  );
}
