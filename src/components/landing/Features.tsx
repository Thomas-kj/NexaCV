"use client";

import { FileText, Target, Download, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: FileText,
    title: "Professional Templates",
    description: "Choose from carefully designed templates that showcase your skills.",
  },
  {
    icon: Target,
    title: "ATS Friendly",
    description: "Get ATS-friendly format and score above 80+ for the predefined templates edited with fine keywords.",
  },
  {
    icon: Download,
    title: "One-Click Download",
    description: "Download your resume in PDF or Word format instantly.",
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    description: "Build a professional resume in minutes, not hours.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Powerful Features</h2>
          <p className="text-lg md:text-xl text-gray-600 font-normal">Everything you need to create an impressive resume</p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="mb-5 inline-block p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
