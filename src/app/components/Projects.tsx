"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Roomyo.in",
    tagline: "PropTech SaaS Platform",
    description: "B2B SaaS connecting 600+ brokers with AI-powered listings. Engineered a multi-tenant architecture handling thousands of daily users.",
    tech: ["Next.js", "Node.js", "AI Integration", "MongoDB"],
    metrics: ["600+ Brokers", "Active in Jaipur"],
    url: "https://roomyo.in",
    image: "/roomyo.png"
  },
  {
    id: 2,
    name: "CollabClan",
    tagline: "Global Talent Marketplace",
    description: "Co-founded a B2B platform connecting startups with top-tier talent. Scaling to serve founders across 28 countries with a unified hiring pipeline.",
    tech: ["PostgreSQL", "Supabase", "React", "Next.js"],
    metrics: ["28 Countries", "300+ Users"],
    url: "https://collabclan.com",
    image: "/COLLABCLAN.png"
  },
  {
    id: 3,
    name: "Clenfu",
    tagline: "Sustainability SaaS",
    description: "Enterprise waste management solution. Leading product development to digitize environmental compliance and tracking.",
    tech: ["B2B SaaS", "Sustainability", "React"],
    metrics: ["Enterprise Scale"],
    url: "https://clenfu.com",
    image: "/clenfu.png"
  },
  {
    id: 4,
    name: "Finhite",
    tagline: "Fintech Education Platform",
    description: "Interactive financial literacy platform designed to simplify complex financial concepts for the new generation.",
    tech: ["Fintech", "Next.js", "Motion"],
    metrics: ["User Centric"],
    url: "https://finhite.com",
    image: "/finhite (2).png"
  },
  {
    id: 5,
    name: "NewWebWay",
    tagline: "Agency Portfolio",
    description: "High-performance corporate identity for a leading IT agency, focusing on conversion and brand authority.",
    tech: ["Corporate", "Brand Identity"],
    metrics: ["Conversion Focus"],
    url: "https://newwebway.com",
    image: "/newwebway.png"
  },
  {
    id: 6,
    name: "Primac Green",
    tagline: "D2C E-commerce",
    description: "Full-featured e-commerce platform for FMCG products, optimized for speed and mobile conversions.",
    tech: ["E-commerce", "D2C"],
    metrics: ["Mobile First"],
    url: "https://primacgreenworld.com",
    image: "/primac.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-text-secondary text-lg max-w-xl">
              A collection of SaaS products and digital experiences built for scale, performance, and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="https://github.com" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
              View Github <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card p-0 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden bg-dark-surface">
                <div className="absolute inset-0 bg-dark-surface/50 animate-pulse" />
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={project.url}
                    target="_blank"
                    className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-sm text-primary/80 font-medium mb-2">{project.tagline}</p>
                  </div>
                  <Link href={project.url} target="_blank" className="text-text-secondary hover:text-white transition-colors">
                    <FiExternalLink size={20} />
                  </Link>
                </div>

                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-text-secondary border border-white/10 px-2 py-1 rounded bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex gap-3">
                  {project.metrics.map((m) => (
                    <span key={m} className="text-xs font-semibold text-primary">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}