import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications — Amit Ghimire",
  description:
    "Academic publications by Amit Ghimire in Human-Computer Interaction, Mixed Reality, and Telepresence.",
};

const publications = [
  {
    title:
      "AvatARoid: A Motion-Mapped AR Overlay to Bridge the Embodiment Gap Between Robots and Teleoperators in Robot-Mediated Telepresence",
    authors: ["Amit Ghimire", "Anova Hou", "Ig-Jae Kim", "Dongwook Yoon"],
    venue:
      "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)",
    details: "Article 906, pp. 1–26",
    doi: "https://doi.org/10.1145/3706598.3713812",
    year: 2025,
    abstract:
      "Robot-mediated telepresence systems suffer from a fundamental embodiment gap — the remote user's expressions, gestures, and presence are lost when their only proxy is a rigid robot. This paper presents AvatARoid, a system that overlays a motion-mapped AR avatar onto a humanoid robot to bridge this gap. Through a mixed-method user study comparing three telepresence conditions (robot-only, robot with video, and robot with AR avatar overlay), we demonstrate that AR avatar overlays significantly enhance perceived social presence and user comfort.",
    relatedProject: "avatroid-telepresence",
  },
];

export default function PublicationsPage() {
  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
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
          Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Publications
        </h1>
        <p className="mb-16 text-lg text-muted">
          Peer-reviewed research in Human-Computer Interaction, Mixed Reality,
          and Telepresence.
        </p>

        <div className="flex flex-col gap-12">
          {publications.map((pub, i) => (
            <article
              key={i}
              className="rounded-xl border border-border bg-surface p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                  CHI &apos;25
                </span>
                <span className="font-mono text-xs text-muted">{pub.year}</span>
              </div>

              <h2 className="mb-4 text-xl font-bold leading-snug">
                {pub.title}
              </h2>

              <p className="mb-2 text-sm text-muted">
                {pub.authors.map((author, j) => (
                  <span key={j}>
                    {author === "Amit Ghimire" ? (
                      <strong className="text-foreground">{author}</strong>
                    ) : (
                      author
                    )}
                    {j < pub.authors.length - 1 && ", "}
                  </span>
                ))}
              </p>

              <p className="mb-6 text-sm text-muted italic">
                {pub.venue}, {pub.details}
              </p>

              <div className="mb-6 rounded-lg bg-background p-4 border border-border">
                <h3 className="mb-2 text-xs font-medium tracking-widest text-accent uppercase">
                  Abstract
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {pub.abstract}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-zinc-950 transition-opacity hover:opacity-90"
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Read Paper (DOI)
                </a>
                {pub.relatedProject && (
                  <Link
                    href={`/projects/${pub.relatedProject}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    View Project
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
