import { resumeData } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-8">
          Contact
        </h2>

        <div className="space-y-4">
          <ContactRow label="Email" value={resumeData.email} href={`mailto:${resumeData.email}`} />
          {resumeData.socials.map((social, index) => (
            <ContactRow
              key={index}
              label={social.name}
              value={social.url.replace(/https?:\/\//, "").replace("mailto:", "")}
              href={social.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
      <span className="text-muted text-sm">{label}</span>
      <a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className="text-sm hover:text-accent transition-colors"
      >
        {value}
      </a>
    </div>
  );
}
