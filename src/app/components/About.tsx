"use client";

import { motion } from "framer-motion";

const aboutContent = {
  title: "About Me",
  description: "I'm a passionate full-stack developer and product builder with expertise in creating scalable SaaS solutions.",
  paragraphs: [
    "I'm Ashish Nagvanshi, a full-stack developer and product builder based in Jaipur, India. Currently serving as Head of Product at Clenfu Envitech, where I'm building real-world sustainability solutions.",
    "My focus is on shipping SaaS products end-to-end—from initial concept to production-ready systems serving thousands of users.",
    "I've built B2B SaaS platforms with multi-tenant architectures, AI-powered features, and scalable backends that serve 900+ users across 28 countries. I work with modern tech stacks and specialize in turning complex product requirements into clean, functional code."
  ],
  skills: [
    "Full-Stack Development",
    "SaaS Product Architecture",
    "Team Leadership",
    "Scalable Backend Systems",
    "AI Integration",
    "Cloud Deployment"
  ]
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">{aboutContent.title}</h3>
            <p className="text-text-secondary text-lg mb-6">{aboutContent.description}</p>
            <div className="space-y-4">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-surface/50 border border-dark-border/50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {aboutContent.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-text-secondary">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Current Role</h4>
                <div className="bg-dark-bg/50 p-4 rounded-lg border border-dark-border/30">
                  <p className="font-medium">Head of Product</p>
                  <p className="text-text-secondary text-sm">Clenfu Envitech • May 2025 - Present</p>
                  <p className="text-text-secondary mt-2">Building sustainability solutions for real-world environmental challenges</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}