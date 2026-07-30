const experiences = [
  {
    period: "Sep 2024 — Present",
    title: "Senior Software Engineer",
    company: "Blackbox Technologies|MersivX",
    points: [
      "Building a SaaS platform, focusing on its 3D editor, for ecommerce merchants to create and manage web based 3D storefronts for their online stores",
      "Developing and optimizing 3D eCommerce experiences for end users using Unity (WebGL) and threejs focusing on immersive store browsing, product exploration, gamifications and interactive user interfaces",
      "Troubleshooting WebGL rendering performance, asset loading, and memory usage for desktop/mobile browsers",
      "Developing and maintaining a cloud native service for real-time data synchronization between merchant's ecommerce platforms and our 3D storefronts",
      "Developing and maintaining native ecommerce platform apps for wix, shopify and woocommerce to provide gateway for integration with our 3D storefronts",
    ],
  },
  {
    period: "May 2022 — Dec 2023",
    title: "Graduate Research Assistant",
    company: "University of British Columbia",
    points: [
      "Collaborated with Korea Institute of Science and Technology on the Meta-Humanoid Project combining humanoid robots and AR avatars for telepresence",
      "Developed a Mixed Reality simulation framework to prototype and experimentally evaluate the Meta-Humanoid concept",
      "Designed and conducted mixed-method user studies with qualitative and quantitative analysis",
      "Authored a research paper on the Meta-Humanoid concept and its evaluation, published in the proceedings of CHI 2023",
    ],
  },
  {
    period: "Sep 2021 — Dec 2023",
    title: "Graduate Teaching Assistant",
    company: "University of British Columbia",
    points: [
      "Actively assisted in delivering lectures, tutorials and quizzes forIntroduction to Computation in Engineering Design (APSC 160), and Internet Computing (CPSC 317)",
    ],
  },
  {
    period: "Jan 2020 — Aug 2021",
    title: "Game Developer & Designer",
    company: "Danson Solutions",
    points: [
      "Designed and developed 2D, 3D, and XR K-12 educational games for the Chimpvine e-learning platform",
      "Collaborated with teachers to translate course syllabi into game-based learning experiences",
      "Worked with data analysts to create an instrumentation system to track student performance through in-game interaction recording for data-driven design improvements",
    ],
  },
  {
    period: "Jan 2017 — Dec 2019",
    title: "Software & Usability Engineer",
    company: "Paracosma, Kathmandu",
    points: [
      "Designed, developed, and usability-tested single and multi-user XR applications and training simulations",
      "Built automation tools and Unity editor extensions to streamline development pipelines and reduce timelines",
      "Profiled application performance, identified bottlenecks, and implemented optimizations for XR software",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Experience
        </h2>
        <p className="mb-16 text-3xl font-bold tracking-tight">
          Where I&apos;ve Worked
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-0 hidden h-full w-px bg-border md:block md:left-[140px]" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative flex flex-col gap-4 md:flex-row">
                {/* Date */}
                <div className="shrink-0 md:w-[140px] md:pr-8 md:text-right">
                  <span className="font-mono text-xs text-muted">
                    {exp.period}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute top-1 left-[-4px] hidden h-2 w-2 rounded-full border border-accent bg-background md:left-[136px] md:block" />

                {/* Content */}
                <div className="flex-1 md:pl-8">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="mb-3 text-sm text-accent">{exp.company}</p>
                  <ul className="flex flex-col gap-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-border" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
