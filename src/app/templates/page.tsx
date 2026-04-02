"use client";

import { useState } from "react";
import TemplateCard from "@/components/templates/TemplateCard";
import { templates } from "@/lib/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TemplatesPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTemplates = templates.filter(template => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'professional') return template.id === 'template-1';
    if (activeFilter === 'creative') return template.id === 'template-2';
    if (activeFilter === 'modern') return template.id === 'template-3';
    return true;
  });

  const filterButtons = [
    { id: 'all', label: 'All Templates', isPrimary: true },
    { id: 'professional', label: 'Professional', isPrimary: false },
    { id: 'creative', label: 'Creative', isPrimary: false },
    { id: 'modern', label: 'Modern', isPrimary: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Perfect Template</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-normal max-w-2xl mx-auto">
              Select from our ATS-optimized professional templates designed to help you stand out and land your dream job
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setActiveFilter(button.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === button.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : button.isPrimary
                    ? 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {button.label}
              </button>
            ))}
          </motion.div>

          {/* Templates Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredTemplates.map((template, index) => (
              <motion.div key={template.id} variants={itemVariants} custom={index}>
                <TemplateCard 
                  template={template} 
                  isAvailable={template.id === 'template-1'} 
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Professional Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">ATS Score Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1K+</div>
              <div className="text-gray-600">Resumes Created</div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
