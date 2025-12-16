"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroContent = {
  name: "Ashish Nagvanshi",
  title: "Full-Stack Developer & SaaS Product Builder",
  description: "I build scalable SaaS products that serve 900+ users across 28 countries. Currently Head of Product at Clenfu Envitech, creating real-world sustainability solutions.",
  primaryCTA: {
    text: "Let's Build Together",
    href: "#contact"
  },
  secondaryCTA: {
    text: "View Projects",
    href: "#projects"
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg py-20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">AN</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-secondary rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <span className="text-dark-bg text-2xl">🚀</span>
              </div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >
              {heroContent.name}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-primary mb-6"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUp.transition, delay: 0.6 }}
            >
              {heroContent.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUp.transition, delay: 0.8 }}
            >
              {heroContent.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUp.transition, delay: 1.0 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={heroContent.primaryCTA.href} 
                  className="btn-primary block text-center"
                >
                  {heroContent.primaryCTA.text}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={heroContent.secondaryCTA.href} 
                  className="btn-secondary block text-center"
                >
                  {heroContent.secondaryCTA.text}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}