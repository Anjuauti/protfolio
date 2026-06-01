import { Section } from "./Section";

const education = [
  {
    degree: "B.Tech — Computer Science Engineering (AI & ML)",
    school: "Pimpri Chinchwad College of Engineering",
  },
  {
    degree: "Diploma in Information Technology",
    school: "Government Polytechnic Pune",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="grid md:grid-cols-2 gap-5">
        {education.map((e) => (
          <div
            key={e.degree}
            className="p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/40 transition-all"
          >
            <h3 className="text-base font-medium mb-2">{e.degree}</h3>
            <p className="text-sm text-muted-foreground">{e.school}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
