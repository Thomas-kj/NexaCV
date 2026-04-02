"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function FinalCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight"
            variants={itemVariants}
          >
            Start Building Your Resume <span className="block">Today</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-blue-100 mb-6 font-normal max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join 1,000+ professionals who have already landed their dream jobs with our NexaCV Resume Builder. Create your stunning resume in minutes, not hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <Link href="/auth">
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
