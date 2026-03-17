"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Image from "next/image";
import { GalleryHorizontalEnd } from "lucide-react";
import UWaterlooLogo from "../../assets/UWaterloo.png";
import FlavorFlickLogo from "../../assets/flavorflick.png";
import OrbitalLogo from "../../assets/orbital.png";
import VexLogo from "../../assets/vex.png";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto font-extralight">
      <ul className="grid gap-1 text-base">
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            currently:
          </span>
          <ul className="grid gap-1 pl-4">
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
            what i&apos;ve been building:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                trained 2 linear gradient regressors to detect emotion from
                songs —{" "}
                <Link href="#" className="font-medium">
                  Feelify
                </Link>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                engineered a Duolingo for ASL @ Ctrl Del Hack — app that lets
                users practice sign language with real-time feedback —{" "}
                <Link href="#" className="font-medium">
                  Hand In Hand
                </Link>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                created{" "}
                <Link href="#" className="font-medium">
                  KinKitchen
                </Link>{" "}
                @ HackCanada — recognizes food photos &amp; reconstructs them in
                3D with recipe tutorials
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built a Computer Vision{" "}
                <Link href="#" className="font-medium">
                  Sudoku solver
                </Link>{" "}
                with 2 OpenCV models at 99%+ accuracy
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            previously:
          </span>
          <ul className="grid gap-1 pl-4">
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
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border border-stone-400 dark:border-stone-600 bg-stone-50/80 dark:bg-stone-900/80 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-extralight hover:scale-[1.02] active:scale-[0.98] shadow-sm backdrop-blur-sm"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>
    </div>
  );
}
