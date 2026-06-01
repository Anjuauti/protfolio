import { Section } from "./Section";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const info = [
  { icon: FaMapMarkerAlt, label: "Location", value: "Moshi, Pune, Maharashtra" },
  { icon: FaPhone, label: "Phone", value: "+91 8421230387", href: "tel:+918421230387" },
  { icon: FaEnvelope, label: "Email", value: "anjaliauti609@gmail.com", href: "mailto:anjaliauti609@gmail.com" },
  { icon: FaLinkedin, label: "LinkedIn", value: "anjali-auti", href: "https://www.linkedin.com/in/anjali-auti-294376230" },
  { icon: FaGithub, label: "GitHub", value: "Anjuauti", href: "https://github.com/Anjuauti" },
  { icon: SiLeetcode, label: "LeetCode", value: "anjali_12064", href: "https://leetcode.com/u/anjali_12064/" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get In Touch">
      <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
        I'm always open to discussing software development, AI/ML, Generative AI, internships, and
        new opportunities.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
        {info.map((i) => {
          const Inner = (
            <div className="flex items-start gap-4 p-5 rounded-xl bg-card/40 border border-white/5 hover:border-primary/40 transition-all h-full">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <i.icon size={16} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {i.label}
                </p>
                <p className="text-sm break-all">{i.value}</p>
              </div>
            </div>
          );
          return i.href ? (
            <a key={i.label} href={i.href} target="_blank" rel="noreferrer" className="block">
              {Inner}
            </a>
          ) : (
            <div key={i.label}>{Inner}</div>
          );
        })}
      </div>
    </Section>
  );
}
