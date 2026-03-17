import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <div className="flex flex-col divide-y divide-stone-200/60 dark:divide-white/[0.06]">
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </div>
  );
}
