import { Linkedin, Github, Mail, CodeXml } from "lucide-react";

export default function Footer({ className }) {
  const links = [
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
    {
      name: "repo",
      href: "https://github.com/Paul-F7/personal-site",
      icon: CodeXml,
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
              className="group flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon && (
                <>
                  <link.icon className="w-5 h-5 hover:scale-110 md:hover:scale-110 transition-transform duration-500 ease-out" />
                  <span className="hidden md:inline-block md:w-0 md:overflow-hidden md:group-hover:w-auto md:group-hover:ml-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    {link.name}
                  </span>
                </>
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
