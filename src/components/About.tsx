import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid md:grid-cols-3 gap-10 text-muted-foreground leading-relaxed">
        <p>
          I am a passionate <span className="text-foreground">Full Stack Developer</span>,{" "}
          <span className="text-foreground">AI/ML Engineer</span>, and{" "}
          <span className="text-foreground">Generative AI Enthusiast</span> with experience in
          building web applications, machine learning models, and intelligent software solutions.
        </p>
        <p>
          I hold a <span className="text-foreground">Diploma in Information Technology</span> and a{" "}
          <span className="text-foreground">B.Tech in Computer Science Engineering (AI & ML)</span>{" "}
          from Pimpri Chinchwad College of Engineering (PCCOE).
        </p>
        <p>
          My interests include Artificial Intelligence, Machine Learning, Generative AI, Data
          Science, Cloud Computing, and Full Stack Development.
        </p>
      </div>
    </Section>
  );
}
