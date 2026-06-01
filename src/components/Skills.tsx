import { Section } from "./Section";

const groups = [
  { title: "Languages", items: ["Python", "C++", "JavaScript", "SQL"] },
  { title: "Frontend", items: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { title: "Backend", items: ["Flask", "Django", "Node.js"] },
  { title: "AI & Data", items: ["TensorFlow", "Scikit-Learn", "OpenCV", "LangChain", "RAG", "Power BI"] },
  { title: "Database", items: ["MySQL", "MongoDB", "FAISS", "ChromaDB"] },
  { title: "Cloud", items: ["AWS", "GitHub"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech Toolkit">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <h3 className="text-sm uppercase tracking-widest text-primary mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
