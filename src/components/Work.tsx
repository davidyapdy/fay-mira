"use client";

import { useState } from "react";
import { resumeData } from "@/data/resume";
import Link from "next/link";

export default function Work() {
  const [activeTab, setActiveTab] = useState("UX/Product");

  const filteredProjects = resumeData.projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section id="work" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-10">
          {resumeData.projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeTab === category
                  ? "bg-accent text-white"
                  : "bg-foreground/5 text-muted hover:bg-foreground/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <p className="text-muted text-center py-12">
              Projects coming soon...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  slug: string;
  category: string;
  company: string;
  icon: string;
  description: string;
  result?: string;
  tags: string[];
  hasCase: boolean;
  comingSoon?: boolean;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-foreground/[0.02] border border-border/50 rounded-2xl p-6 hover:border-border transition-colors">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Content */}
        <div className="flex-1">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
            <ProjectIcon name={project.icon} />
          </div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          {project.result && (
            <p className="text-sm text-accent mb-4">
              <span className="font-medium">Result:</span> {project.result}
            </p>
          )}
          {project.comingSoon ? (
            <span className="inline-flex items-center px-3 py-1.5 text-xs border border-border rounded-full text-muted">
              Coming Soon
            </span>
          ) : project.hasCase ? (
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              View Case Study
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
          ) : null}
        </div>

        {/* Image placeholder */}
        <div className="md:w-56 aspect-[4/3] bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl flex items-center justify-center">
          <span className="text-xs text-muted">Project Preview</span>
        </div>
      </div>
    </div>
  );
}

function ProjectIcon({ name }: { name: string }) {
  const iconClass = "w-5 h-5 text-accent";

  switch (name) {
    case "starbucks":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">S</text>
        </svg>
      );
    case "kri":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "health":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "property":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      );
  }
}
