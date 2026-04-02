"use client";

import { templates } from "@/lib/mockData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function TemplatesPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Beautiful Templates</h2>
          <p className="text-lg md:text-xl text-gray-600 font-normal">Choose from a variety of professional designs</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-center p-4">
                <div>
                  <div className="text-5xl mb-3">📄</div>
                  <p className="font-semibold text-gray-700">{template.name}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Preview Template
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
