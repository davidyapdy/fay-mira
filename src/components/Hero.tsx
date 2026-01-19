import { resumeData } from "@/data/resume";

export default function Hero() {
  return (
    <section className="pt-16 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6 opacity-0 animate-fade-in-up">
          {resumeData.subtitle}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl italic text-foreground/90 leading-snug opacity-0 animate-fade-in-up animation-delay-100">
          {resumeData.tagline}
        </h1>
      </div>
    </section>
  );
}
