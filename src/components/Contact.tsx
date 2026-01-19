import { resumeData } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted text-sm uppercase tracking-widest mb-4">
          Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
          Let&apos;s work together
        </h2>
        <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
          {resumeData.contactMessage}
        </p>

        <a
          href={`mailto:${resumeData.email}`}
          className="inline-flex items-center gap-2 text-2xl md:text-3xl font-medium hover:text-accent transition-colors"
        >
          {resumeData.email}
          <svg
            className="w-6 h-6"
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
        </a>

        <div className="flex items-center justify-center gap-6 mt-12">
          {resumeData.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
