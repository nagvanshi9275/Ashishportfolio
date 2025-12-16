"use client";

import { motion } from "framer-motion";
import { FiLayout, FiServer, FiTrendingUp, FiSmartphone, FiCode, FiDatabase } from "react-icons/fi";

const services = [
  {
    icon: <FiLayout size={32} />,
    title: "SaaS Product Design",
    description: "Designing intuitive, conversion-focused interfaces for complex SaaS applications. I bridge the gap between user needs and business logic."
  },
  {
    icon: <FiCode size={32} />,
    title: "Full-Stack Engineering",
    description: "Building robust, scalable applications using Next.js, Node.js, and modern cloud infrastructure. Zero to production ready."
  },
  {
    icon: <FiDatabase size={32} />,
    title: "System Architecture",
    description: "Designing multi-tenant database schemas and scalable backend systems that handle growth securely and efficiently."
  },
  {
    icon: <FiTrendingUp size={32} />,
    title: "MVP Development",
    description: "Rapid prototyping and MVP development for founders who need to validate ideas quickly without technical debt."
  },
  {
    icon: <FiServer size={32} />,
    title: "API Development",
    description: "Creating RESTful and GraphQL APIs that are well-documented, secure, and ready for third-party integrations."
  },
  {
    icon: <FiSmartphone size={32} />,
    title: "Interactive Experiences",
    description: "Crafting engaging web interaction with Framer Motion and modern CSS to delight users and improve retention."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.h2>
          <motion.p
            className="text-text-secondary text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive technical expertise to bring your vision to life.
            From initial concept to scalable deployment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-colors duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-6 text-primary/80 group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}