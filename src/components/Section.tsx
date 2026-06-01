import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, eyebrow, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || eyebrow) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
