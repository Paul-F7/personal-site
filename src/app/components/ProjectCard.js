"use client";

import { GitBranch, SquareArrowOutUpRight } from "lucide-react";

const placeholderGradients = [
  "from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-700",
  "from-neutral-200 to-zinc-300 dark:from-neutral-800 dark:to-zinc-700",
  "from-zinc-200 to-stone-300 dark:from-zinc-800 dark:to-stone-700",
  "from-stone-300 to-neutral-200 dark:from-stone-700 dark:to-neutral-800",
  "from-zinc-300 to-neutral-200 dark:from-zinc-700 dark:to-neutral-800",
];

export default function ProjectCard({
  title,
  description,
  href,
  technologies,
  github,
  demo,
  icon,
  image,
  imageSize = "h-24",
  index = 0,
  className,
}) {
  const gradient = placeholderGradients[index % placeholderGradients.length];
  const initials = title.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <>
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex gap-6 cursor-pointer py-6 px-0 overflow-visible rounded-t-xl border-t border-transparent hover:border-stone-300/60 dark:hover:border-white/[0.08] hover:bg-gradient-to-r hover:from-transparent hover:via-black/[0.03] hover:to-transparent dark:hover:via-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 ${className}`}
      >
        {/* Thumbnail — always shows image */}
        <div className="shrink-0 w-40 flex justify-center items-start">
          {image ? (
            <img src={image?.src ?? image} alt={title} className={`${imageSize} w-auto max-w-full rounded-xl object-contain`} />
          ) : (
            <div className={`${imageSize} w-24 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              {icon ? (
                <img src={icon?.src ?? icon} alt={title} className="w-10 h-10 rounded-lg object-cover" />
              ) : (
                <span className="text-lg font-light tracking-widest text-neutral-400 dark:text-neutral-600 select-none">
                  {initials}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-start gap-1.5">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
            <span className="flex items-center gap-1.5">
              {icon && (
                <img src={icon?.src ?? icon} alt={title} className="w-4 h-4 rounded-md object-cover inline-block translate-y-[1px]" />
              )}
              <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                {title}
              </span>
            </span>
            {technologies && technologies.length > 0 && (
              <span className="text-xs text-neutral-400 dark:text-neutral-600 font-light">
                {technologies.join(" / ")}
              </span>
            )}
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>

          <div className="flex gap-2 mt-1">
            {github && (
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(github, "_blank"); }}
                className="p-1.5 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/8 transition-all"
              >
                <GitBranch className="w-4 h-4" />
              </button>
            )}
            {demo && (
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(demo, "_blank"); }}
                className="p-1.5 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/8 transition-all"
              >
                <SquareArrowOutUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </a>

    </>
  );
}
