"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import { GalleryHorizontalEnd } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto font-extralight">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            Engineering
            <span className="inline-flex items-baseline gap-1 ml-2">
              <Link href="https://example.com" className="font-medium">
                Company
              </Link>
            </span>
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            CS
            <span className="inline-flex items-baseline gap-1 ml-2">
              <Link href="https://uwaterloo.ca" className="font-medium">
                UWaterloo
              </Link>
            </span>
          </span>
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
                created{" "}
                <Link href="https://example.com" className="font-medium">
                  an AI-powered tool
                </Link>{" "}
                (3M+ views, 1,900+ stars, inbound VC interest from top firms)
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                shipped a{" "}
                <Link href="https://example.com" className="font-medium">
                  product
                </Link>{" "}
                in &lt; 2 days to 10,000+ users
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                did it again with another{" "}
                <Link href="https://example.com" className="font-medium">
                  product
                </Link>{" "}
                (1,000+ users in &lt; 24 hours)
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built a{" "}
                <Link href="https://github.com" className="font-medium">
                  deep learning framework
                </Link>{" "}
                from scratch in C++
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
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Engineering
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Link href="https://shopify.com" className="font-medium">
                    Shopify
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Engineering
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Link href="https://browserbase.com" className="font-medium">
                    Browserbase
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                ML Research
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Link
                    href="https://sunnybrook.ca/research/"
                    className="font-medium"
                  >
                    Sunnybrook
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                &#8627;
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Research
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Link href="https://uwaterloo.ca" className="font-medium">
                    UWaterloo
                  </Link>
                </span>
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
