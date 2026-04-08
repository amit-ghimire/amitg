const skillGroups = [
  {
    category: "Game & XR Development",
    skills: [
      "Unity3D",
      "C#",
      "C++",
      "OpenGL",
      "XR Interaction Toolkit",
      "Meta XR SDK",
    ],
  },
  {
    category: "Networking",
    skills: [
      "Photon Unity Networking",
      "Unity Netcode",
      "Unity Gaming Services",
    ],
  },
  {
    category: "Software Development",
    skills: [".NET MAUI", "Android (Java)", "Python", "HTML/CSS/JS"],
  },
  {
    category: "Design & Research",
    skills: [
      "Game Design",
      "Interaction Design",
      "UX Research",
      "Qualitative & Quantitative Methods",
    ],
  },
  {
    category: "Tools & Process",
    skills: ["Git", "Agile / SCRUM", "Jira", "Trello", "R", "Python"],
  },
];

export default function SkillsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Skills
        </h2>
        <p className="mb-16 text-3xl font-bold tracking-tight">
          Tools & Technologies
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div key={i}>
              <h3 className="mb-4 text-sm font-medium text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
