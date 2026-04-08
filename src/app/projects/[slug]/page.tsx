import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Amit Ghimire`,
    description: project.subtitle,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              {project.category}
            </span>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            {project.subtitle}
          </p>
        </div>

        {/* Placeholder hero image */}
        <div
          className={`mb-16 flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} border border-border md:h-80`}
        >
          <div className="flex flex-col items-center gap-2 text-muted/30">
            <svg
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={0.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
            <span className="text-sm">Project Image Placeholder</span>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-16">
          <h2 className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-base leading-relaxed text-muted">
            {project.overview}
          </p>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Process & Approach
          </h2>
          <p className="text-base leading-relaxed text-muted">
            {project.process}
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Key Features
          </h2>
          <ul className="flex flex-col gap-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-muted">
                <span className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Technical Challenges
          </h2>
          <p className="text-base leading-relaxed text-muted">
            {project.challenges}
          </p>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Impact & Learnings
          </h2>
          <p className="text-base leading-relaxed text-muted">
            {project.impact}
          </p>
        </section>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Back to projects */}
        <div className="border-t border-border pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
