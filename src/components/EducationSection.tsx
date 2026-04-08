const education = [
  {
    period: "Sep 2021 — May 2024",
    degree: "Masters, Computer Science (Human-Computer Interaction)",
    institution: "University of British Columbia, Vancouver",
    note: 'Recipient of "Designing For People (DFP) — Collaborative Research and Training Experience Program (CREATE)" Grant',
  },
  {
    period: "Nov 2012 — Dec 2016",
    degree: "Bachelors, Electronics and Communication Engineering",
    institution: "Institute of Engineering, Pulchowk Campus",
    note: null,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Education
        </h2>
        <p className="mb-16 text-3xl font-bold tracking-tight">
          Academic Background
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30"
            >
              <span className="mb-3 block font-mono text-xs text-muted">
                {edu.period}
              </span>
              <h3 className="mb-2 text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm text-accent">{edu.institution}</p>
              {edu.note && (
                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted italic">
                  {edu.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
