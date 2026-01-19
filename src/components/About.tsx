import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-muted text-sm uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              {resumeData.aboutHeading}
            </h2>
            <div className="space-y-4 text-muted">
              {resumeData.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-border to-muted/20 rounded-2xl overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center text-muted">
                <span className="text-sm">Your Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24 grid md:grid-cols-3 gap-12">
          {resumeData.skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="font-medium mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2 text-muted">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-24">
          <p className="text-muted text-sm uppercase tracking-widest mb-8">
            Experience
          </p>
          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className="grid md:grid-cols-4 gap-4 pb-12 border-b border-border last:border-0"
              >
                <div className="text-muted text-sm">{exp.period}</div>
                <div className="md:col-span-3">
                  <h3 className="font-medium mb-1">{exp.role}</h3>
                  <p className="text-muted mb-3">{exp.company}</p>
                  <p className="text-muted text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
