import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">
            Experience
          </h2>
          <a
            href="/resume.pdf"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Experience list */}
        <div className="space-y-8">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <h3 className="font-semibold text-foreground">{exp.company}</h3>
                <span className="text-muted text-sm">{exp.period}</span>
              </div>
              <p className="text-muted text-sm mt-1">{exp.role}</p>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <h2 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-8">
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-muted text-sm mt-1">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
