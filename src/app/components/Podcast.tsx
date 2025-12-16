"use client";

import { motion } from "framer-motion";
import { FiMic, FiPlayCircle, FiHeadphones, FiYoutube } from "react-icons/fi";
import { SiSpotify } from "react-icons/si";

const podcastContent = {
  title: "Builder Talk",
  description: "Conversations with founders, operators, and builders about the reality of shipping products. No fluff, just actionable insights on leadership and startups.",
  featuredEpisode: {
    title: "Building Confidence as a Founder w/ Anisha Parikh",
    duration: "45 min"
  },
  links: {
    spotify: "https://open.spotify.com/episode/0iL3rNYkDNCFnxiRqZiLwS?si=9hZJUbBnS0q2dnuOvbp-Og&context=spotify%3Ashow%3A2RKdf4I5r06CamOVxnB8Xp",
    youtube: "https://youtu.be/AH0-biWG_68?si=smTA7glb3jOhQZ0H"
  }
};

export default function Podcast() {
  return (
    <section id="podcast" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden glass p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -z-10" />

          {/* Album Art Placeholder */}
          <div className="flex-shrink-0 relative group cursor-pointer">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden">
              <FiMic className="text-white/20 text-8xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiPlayCircle className="text-white text-6xl drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary text-sm font-bold uppercase tracking-wider mb-4">
              <FiHeadphones />
              <span>Podcast Host</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">{podcastContent.title}</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {podcastContent.description}
            </p>

            <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/5 hover:border-white/10 transition-colors">
              <div className="text-xs text-text-secondary uppercase mb-1">Featured Episode</div>
              <div className="font-semibold text-white">{podcastContent.featuredEpisode.title}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href={podcastContent.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black border-none"
                style={{ boxShadow: "0 0 20px rgba(29, 185, 84, 0.3)" }}
              >
                <SiSpotify size={20} />
                Listen on Spotify
              </motion.a>

              <motion.a
                href={podcastContent.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <FiYoutube size={20} />
                Watch on YouTube
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}