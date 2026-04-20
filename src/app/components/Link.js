"use client";

import NextLink from "next/link";

export default function Link({
  className = "",
  href,
  isNextLink,
  active = false,
  children,
}) {
  const activeStyles = active
    ? "before:-translate-x-1 before:text-[var(--ink-bracket-strong)] after:translate-x-1 after:text-[var(--ink-bracket-strong)]"
    : "";

  const baseStyles = `
    inline-flex items-center
    text-[var(--ink-main)]
    transition-all duration-300
    hover:text-[var(--ink-main)]
    before:inline-block before:content-['['] before:mr-[0.2em]
    before:text-[var(--ink-bracket)]
    before:transition-all before:duration-300
    hover:before:-translate-x-1
    hover:before:text-[var(--ink-bracket-strong)]
    after:inline-block after:content-[']'] after:ml-[0.2em]
    after:text-[var(--ink-bracket)]
    after:transition-all after:duration-300
    hover:after:translate-x-1
    hover:after:text-[var(--ink-bracket-strong)]
    ${activeStyles}
    ${className}
  `.trim();

  return isNextLink ? (
    <NextLink href={href} className={baseStyles}>
      {children}
    </NextLink>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseStyles}
    >
      {children}
    </a>
  );
}
