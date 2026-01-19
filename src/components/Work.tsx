import { resumeData } from "@/data/resume";
import Link from "next/link";

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted text-sm uppercase tracking-widest mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">
            Case Studies
          </h2>
        </div>

        <div className="grid gap-24">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] bg-gradient-to-br from-border to-muted/20 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  {/* Project image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <span className="text-sm">Project Image</span>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-muted text-sm uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-3xl font-medium mb-4">
                  {project.title}
                </h3>
                <p className="text-muted mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-foreground/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
