"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: 1,
    title: "Choose a Template",
    description: "Pick from our professional templates designed by experts.",
  },
  {
    number: 2,
    title: "Fill Your Information",
    description: "Add your details with our intuitive form and proceed.",
  },
  {
    number: 3,
    title: "Download & Share",
    description: "Export as PDF or Word, then share with employers.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-white overflow-hidden" ref={ref}>
      {/* Background decoration - diagonal stripes */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #3b82f6, #3b82f6 10px, transparent 10px, transparent 20px)'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-600 font-normal">Simple steps to create your perfect resume</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <motion.div
                variants={stepVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
