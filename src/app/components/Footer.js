import { Linkedin, Github, Mail, Twitter } from "lucide-react";

export default function Footer({ className }) {
  const links = [
    {
      name: "x",
      href: "https://x.com/PaulFomitchev",
      icon: Twitter,
    },
    {
      name: "github",
      href: "https://github.com/PAul-F7",
      icon: Github,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/paul-fomitchev/",
      icon: Linkedin,
    },
    {
      name: "email",
      href: "mailto:paul.fomitchev@uwaterloo.ca",
      icon: Mail,
    },
  ];

  return (
    <footer
      className={`flex flex-col gap-4 text-sm text-stone-500 dark:text-stone-400 ${className}`}
    >
      <hr className="border-b border-neutral-200 dark:border-neutral-800" />
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon && (
                <link.icon className="w-6 h-6 hover:scale-110 md:hover:scale-110 transition-transform duration-500 ease-out" />
              )}
              {!link.icon && <span>{link.name}</span>}
            </a>
          ))}
        </div>
        <p>{new Date().getFullYear()} &copy; Paul Fomitchev</p>
      </div>
    </footer>
  );
}
