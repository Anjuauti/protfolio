import { Section } from "./Section";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "AI-Assisted Loan Approval System",
    desc: "A loan management system using Artificial Neural Networks and Django for loan eligibility prediction.",
    tech: ["Python", "Django", "TensorFlow", "MySQL"],
  },
  {
    title: "Brain Tumor Classification",
    desc: "Machine learning-based brain tumor classification using image processing and feature engineering.",
    tech: ["Python", "OpenCV", "Scikit-Learn"],
  },
  {
    title: "AI-Based Gym Trainer & Pose Correction",
    desc: "Real-time exercise posture correction using MediaPipe and computer vision.",
    tech: ["Python", "MediaPipe", "Machine Learning"],
  },
  {
    title: "AI-Powered PDF Chatbot using RAG",
    desc: "A chatbot that lets users interact with PDF documents using natural language — semantic search, vector DB, RAG pipeline, LLM integration.",
    tech: ["Python", "LangChain", "FAISS", "ChromaDB", "Streamlit"],
  },
  {
    title: "Image Description System for the Visually Impaired",
    desc: "Deep learning image captioning system using CNNs, LSTMs, and NLP techniques.",
    tech: ["Python", "CNN", "LSTM", "NLP"],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected Work">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group p-7 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <FiArrowUpRight
                className="text-muted-foreground group-hover:text-primary group-hover:rotate-0 -rotate-45 transition-all"
                size={20}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-secondary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
