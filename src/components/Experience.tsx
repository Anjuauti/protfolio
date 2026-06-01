import { Section } from "./Section";

const experiences = [
  {
    company: "Autonex AI",
    role: "AI Intern",
    year: "2025",
    desc: "Worked on AI-driven solutions involving machine learning, automation, data analysis, and model optimization.",
  },
  {
    company: "M4 Services",
    role: "Web Development Intern",
    year: "2022",
    desc: "Worked on responsive websites using PHP, HTML, and CSS while gaining practical experience in web development.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've Worked">
      <div className="relative border-l border-white/10 pl-8 space-y-12">
        {experiences.map((e) => (
          <div key={e.company} className="relative group">
            <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-[#0A0A0A] group-hover:scale-125 transition-transform" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl font-medium">
                {e.role} <span className="text-primary">@ {e.company}</span>
              </h3>
              <span className="text-xs text-muted-foreground tracking-widest">{e.year}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">{e.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
