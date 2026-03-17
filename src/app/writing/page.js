import Link from "../components/Link";

export default function Writing() {
  const posts = [
    {
      title: "Lessons from 2025",
      date: "2025-12-31",
      slug: "lessons-from-2025",
    },
    {
      title: "Reflecting on 2024",
      date: "2024-12-31",
      slug: "reflecting-on-2024",
    },
    {
      title: "Shipping presentation generation in 3 days",
      date: "2024-06-15",
      slug: "shipping-presentation-generation-3-days",
    },
  ];

  return (
    <>
      <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400">
        {posts.map(({ title, date, slug }) => (
          <li className="flex justify-between items-center" key={slug}>
            <span className="text-stone-800 dark:text-stone-200 text-sm sm:text-base">
              <Link href={`/writing/${slug}`} isNextLink={true}>
                {title}
              </Link>
            </span>
            <time className="text-stone-500 dark:text-stone-500 text-sm">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </li>
        ))}
      </ul>
    </>
  );
}
