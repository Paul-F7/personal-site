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
      <ul className="grid gap-4 text-sm md:text-base">
        <li className="flex flex-col gap-3 pl-4 relative">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rounded-full" />
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
        <li className="flex flex-col gap-3 pl-4 relative">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rounded-full" />
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
        <li className="flex flex-col gap-3 pl-4 relative">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rounded-full" />
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
                <Link href="https://feelify.paulfom.ca" className="font-medium">Feelify</Link> — ML song mood detection app, predicting emotion from mp3 files
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                <Image src={HandInHandLogo} alt="Hand in Hand" width={18} height={18} className="inline rounded-sm mr-1 align-middle" />
                <Link href="https://handinhand.paulfom.ca" className="font-medium">Hand in Hand</Link> — Duolingo for ASL with live gesture feedback
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                computer vision <Link href="https://github.com/Paul-F7/cv-sudokusolver" className="font-medium">Sudoku Solver</Link> with 99%+ accuracy
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="group mt-10 flex w-full items-center justify-between rounded-xl border border-stone-900/10 dark:border-stone-100/10 bg-transparent px-6 py-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-stone-900/30 dark:hover:border-stone-100/30"
      >
        <span className="text-base md:text-lg font-normal tracking-tight text-stone-800 dark:text-stone-200">
          View all projects
        </span>
        <span
          aria-hidden
          className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-stone-200/70 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 transition-colors duration-300 ease-out group-hover:bg-stone-300/80 dark:group-hover:bg-stone-700/70"
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-full">
            →
          </span>
          <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0">
            →
          </span>
        </span>
      </NextLink>
    </div>
  );
}
