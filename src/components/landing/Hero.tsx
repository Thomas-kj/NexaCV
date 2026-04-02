import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.4 },
  },
};

export default function Hero() {
  return (
    <section className="relative py-8 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
                Build Your Professional ATS-Friendly Resume with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">NexaCV</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                Create, customize, and download beautiful ATS-friendly resumes in minutes. Impress employers with our modern templates and drag-and-drop builder.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link href="/auth">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
              </Link>
              <Link href="/templates">
                <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
                  View Templates
                </button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.p className="text-sm text-gray-500" variants={itemVariants}>
              ✨ Join 10,000+ professionals building resumes
            </motion.p>
          </motion.div>

          {/* Right: Professional Resume Example */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Resume Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-20 flex items-center px-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div className="ml-4 text-white">
                  <h3 className="font-bold text-lg">John Doe</h3>
                  <p className="text-sm opacity-90">Senior Software Engineer</p>
                </div>
              </div>
              
              {/* Resume Content */}
              <div className="p-6 space-y-4">
                {/* Contact Section */}
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span>📧 john.doe@email.com</span>
                  <span>📱 (555) 123-4567</span>
                  <span>📍 San Francisco, CA</span>
                </div>
                
                {/* Summary */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">PROFESSIONAL SUMMARY</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Experienced software engineer with 5+ years developing scalable web applications. 
                    Proficient in React, Node.js, and cloud technologies.
                  </p>
                </div>
                
                {/* Experience */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">EXPERIENCE</h4>
                  <div className="space-y-2">
                    <div className="border-l-2 border-blue-500 pl-3">
                      <p className="text-xs font-semibold text-gray-900">Senior Developer - Tech Corp</p>
                      <p className="text-xs text-gray-500">2021-Present</p>
                      <p className="text-xs text-gray-600">Led development of microservices architecture</p>
                    </div>
                    <div className="border-l-2 border-gray-300 pl-3">
                      <p className="text-xs font-semibold text-gray-900">Full Stack Developer - StartupXYZ</p>
                      <p className="text-xs text-gray-500">2019-2021</p>
                      <p className="text-xs text-gray-600">Built React applications and REST APIs</p>
                    </div>
                  </div>
                </div>
                
                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">SKILLS</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">JavaScript</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">AWS</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">TypeScript</span>
                  </div>
                </div>
              </div>
              
              {/* ATS-Friendly Badge */}
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                ✓ ATS Optimized
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
