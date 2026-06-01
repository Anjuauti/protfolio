import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import anjaliPhoto from "../assets/anjali.jpeg";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/anjali-auti-294376230", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Anjuauti", label: "GitHub" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/anjali_12064/", label: "LeetCode" },
  { icon: FaEnvelope, href: "mailto:anjaliauti609@gmail.com", label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-primary tracking-[0.2em] uppercase mb-5">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
            Anjali Auti
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl">
            Full Stack Developer <span className="text-primary/70">/</span> AI/ML Engineer{" "}
            <span className="text-primary/70">/</span> Generative AI Enthusiast
          </p>
          <p className="text-base text-muted-foreground/80 max-w-xl mb-10 leading-relaxed">
            I build intelligent AI-powered applications, machine learning solutions, and modern web
            experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://drive.google.com/file/d/1wf-yNf13YQR6j17ZU77Oq0TFzf0r4xew/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.65_0.22_295/0.6)]"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/15 text-sm font-medium hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-0.5"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-30" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-card/40 backdrop-blur-sm overflow-hidden">
              <img
                src={anjaliPhoto}
                alt="Anjali Auti"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border border-primary/20 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
