import Link from "next/link";
import { Project } from "@/data/projects";
import { getProjectVideo } from "@/lib/video";

export default function ProjectCard({ project }: { project: Project }) {
  const video = getProjectVideo(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
    >
      {video ? (
        <div className="relative h-48 w-full overflow-hidden bg-black/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumbnail}
            alt={`${project.title} video thumbnail`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <svg
                className="h-5 w-5 translate-x-0.5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
        >
          <div className="flex flex-col items-center gap-2 text-muted/40">
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
            <span className="text-xs">Placeholder</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-medium text-accent">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-muted">
            {project.year}
          </span>
        </div>
        <h3 className="mb-2 text-base font-semibold leading-snug transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
