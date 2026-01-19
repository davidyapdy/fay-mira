import { resumeData } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-8">
          Skills / Stack
        </h2>

        {/* Skills pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm border border-border rounded-full text-muted hover:border-accent/50 hover:text-foreground transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
          {resumeData.tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-10 h-10 text-muted hover:text-foreground transition-colors"
              title={tool.name}
            >
              <ToolIcon name={tool.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolIcon({ name }: { name: string }) {
  const iconClass = "w-6 h-6";

  switch (name) {
    case "figma":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2zm0 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0zm-7 0A3.5 3.5 0 018.5 11H12v3.5a3.5 3.5 0 11-7 0zM5 12a3.5 3.5 0 013.5-3.5H12V16H8.5A3.5 3.5 0 015 12.5V12z" />
        </svg>
      );
    case "xd":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.25 2A2.25 2.25 0 002 4.25v15.5A2.25 2.25 0 004.25 22h15.5A2.25 2.25 0 0022 19.75V4.25A2.25 2.25 0 0019.75 2H4.25zm6.27 13.87l-2.14-3.36-2.14 3.36H4.5l3.04-4.63L4.75 7.13h1.8l1.97 3.14 1.97-3.14h1.74l-2.73 4.11 3.05 4.63h-1.98zM19.5 16h-1.5v-3.63c0-.95-.37-1.42-1.1-1.42-.8 0-1.28.56-1.28 1.58V16H14.1V9.75h1.52v.87c.4-.67 1.08-1.03 1.95-1.03 1.44 0 2.28.95 2.28 2.72V16z" />
        </svg>
      );
    case "miro":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.392 0H13.9l4 7.573L10.727 0H7.235l4.04 10.14L4.083 0H.5l7.466 13.305L.5 24h3.535l7.132-10.653L18.343 24h3.492l-7.466-10.695L21.835 0h-4.443z" />
        </svg>
      );
    case "notion":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zM5.25 7.617v13.807c0 .746.373 1.027 1.213.98l14.523-.84c.84-.047.932-.56.932-1.166V6.824c0-.606-.233-.933-.746-.886l-15.176.84c-.56.046-.746.326-.746.84zm14.337.606c.093.42 0 .84-.42.886l-.7.14v10.187c-.607.327-1.166.513-1.633.513-.746 0-.933-.234-1.493-.933l-4.573-7.187v6.953l1.446.327s0 .84-1.166.84l-3.22.187c-.093-.187 0-.653.327-.746l.84-.234V9.25l-1.166-.093c-.093-.42.14-1.026.793-1.073l3.453-.233 4.76 7.28V8.596l-1.213-.14c-.093-.513.28-.886.746-.933l3.22-.187z" />
        </svg>
      );
    case "hotjar":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.024 0 4.8 3.224 4.8 7.2v2.4h4.8V7.2c0-1.324 1.076-2.4 2.4-2.4s2.4 1.076 2.4 2.4v9.6c0 1.324-1.076 2.4-2.4 2.4s-2.4-1.076-2.4-2.4v-2.4H4.8v2.4c0 3.976 3.224 7.2 7.2 7.2s7.2-3.224 7.2-7.2V7.2c0-3.976-3.224-7.2-7.2-7.2z" />
        </svg>
      );
    case "analytics":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.84 2.998h-7.348a.706.706 0 00-.706.707v7.347a.706.706 0 00.706.707h7.348a.706.706 0 00.706-.707V3.705a.706.706 0 00-.706-.707zm-11.314 0H4.178a.706.706 0 00-.707.707v7.347a.706.706 0 00.707.707h7.348a.706.706 0 00.706-.707V3.705a.706.706 0 00-.706-.707zm0 11.313H4.178a.706.706 0 00-.707.706v7.348a.706.706 0 00.707.706h7.348a.706.706 0 00.706-.706v-7.348a.706.706 0 00-.706-.706zm11.314 0h-7.348a.706.706 0 00-.706.706v7.348a.706.706 0 00.706.706h7.348a.706.706 0 00.706-.706v-7.348a.706.706 0 00-.706-.706z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
}
