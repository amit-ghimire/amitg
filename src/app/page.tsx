import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />

      <ExperienceTimeline />

      <EducationSection />

      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Projects
          </h2>
          <p className="mb-16 text-3xl font-bold tracking-tight">
            Selected Works
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
