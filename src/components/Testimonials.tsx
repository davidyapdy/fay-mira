import { resumeData } from "@/data/resume";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-8">
          Testimonials
        </h2>

        <div className="grid gap-6">
          {resumeData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-foreground/[0.02] border border-border/50 rounded-2xl p-6"
            >
              <p className="text-muted leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-accent">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-muted text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
