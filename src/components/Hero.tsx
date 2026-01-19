import { resumeData } from "@/data/resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="text-muted text-sm uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">
          {resumeData.title}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          {resumeData.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up animation-delay-200">
          {resumeData.tagline}
        </p>
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
          <a
            href="#work"
            className="px-6 py-3 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
