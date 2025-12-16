"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiArrowRight } from "react-icons/fi";

const contactContent = {
  title: "Ready to Build?",
  subtitle: "I'm currently available for select freelance projects and consulting opportunities.",
  email: "aashishsingh24032005@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/ashish-nagvanshi-a2a944229/",
    github: "https://github.com/nagvanshi9275",
    twitter: "https://x.com/AashishsinghNa2"
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-dark-bg to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's work together.</h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12">
            {contactContent.subtitle}
          </p>

          <a
            href={`mailto:${contactContent.email}`}
            className="text-2xl md:text-4xl font-bold text-white hover:text-primary transition-colors border-b-2 border-white/10 hover:border-primary pb-2 inline-flex items-center gap-4"
          >
            {contactContent.email}
            <FiArrowRight />
          </a>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a href={contactContent.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
              <FiLinkedin size={32} className="mb-4 text-text-secondary group-hover:text-primary transition-colors mx-auto" />
              <div className="font-bold text-white">LinkedIn</div>
              <div className="text-sm text-text-secondary">Professional Network</div>
            </a>
            <a href={contactContent.socials.github} target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
              <FiGithub size={32} className="mb-4 text-text-secondary group-hover:text-primary transition-colors mx-auto" />
              <div className="font-bold text-white">GitHub</div>
              <div className="text-sm text-text-secondary">Code & Contributions</div>
            </a>
            <a href={contactContent.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
              <FiTwitter size={32} className="mb-4 text-text-secondary group-hover:text-primary transition-colors mx-auto" />
              <div className="font-bold text-white">Twitter</div>
              <div className="text-sm text-text-secondary">Thoughts & Updates</div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}