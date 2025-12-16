"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGithub, SiSupabase, SiExpress, SiTypescript, SiFramer } from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "Supabase", icon: <SiSupabase size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Motion", icon: <SiFramer size={40} /> },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-dark-bg/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="text-text-secondary text-sm uppercase tracking-widest mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Powering scalable solutions with modern technologies
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, opacity: 1, color: "#3B82F6" }}
              className="flex flex-col items-center gap-2 text-text-secondary hover:text-white transition-all duration-300 cursor-default"
            >
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                {tech.icon}
              </div>
              <span className="text-xs font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}