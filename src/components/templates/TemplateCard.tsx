"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TemplateCard({
  template,
  isAvailable = true,
}: {
  template: { id: string; name: string; description: string; thumbnail: string };
  isAvailable?: boolean;
}) {
  const getTemplatePreview = (templateName: string) => {
    switch (templateName) {
      case "Modern Blue":
        return (
          <div className="w-full h-64 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-16 px-4 flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-sm">John Doe</div>
                <div className="text-blue-100 text-xs">Senior Software Engineer</div>
              </div>
            </div>
            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Contact */}
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span>📧 john.doe@email.com</span>
                <span>📱 (555) 123-4567</span>
              </div>
              {/* Summary */}
              <div>
                <h4 className="font-semibold text-xs text-gray-900 mb-1">PROFESSIONAL SUMMARY</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Experienced software engineer with 5+ years developing scalable web applications.
                </p>
              </div>
              {/* Experience */}
              <div>
                <h4 className="font-semibold text-xs text-gray-900 mb-1">EXPERIENCE</h4>
                <div className="text-xs text-gray-600">
                  <div className="font-semibold">Senior Developer - Tech Corp</div>
                  <div className="text-gray-500">2020 - Present</div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Classic Gray":
        return (
          <div className="w-full h-64 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-gray-900/75 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-white text-lg font-bold mb-2">Classic Gray</div>
                <div className="text-gray-300 text-sm">Coming Soon</div>
              </div>
            </div>
            {/* Background preview */}
            <div className="opacity-30">
              <div className="bg-gray-100 h-full flex items-center justify-center">
                <div className="text-gray-400 text-6xl font-bold">CG</div>
              </div>
            </div>
          </div>
        );
      case "Creative Green":
        return (
          <div className="w-full h-64 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-green-900/75 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-white text-lg font-bold mb-2">Creative Green</div>
                <div className="text-green-100 text-sm">Coming Soon</div>
              </div>
            </div>
            {/* Background preview */}
            <div className="opacity-30">
              <div className="bg-green-100 h-full flex items-center justify-center">
                <div className="text-green-400 text-6xl font-bold">🎨</div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-64 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-gray-900/75 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-white text-lg font-bold mb-2">Template</div>
                <div className="text-gray-300 text-sm">Coming Soon</div>
              </div>
            </div>
            {/* Background preview */}
            <div className="opacity-30">
              <div className="bg-gray-100 h-full flex items-center justify-center">
                <div className="text-gray-400 text-6xl font-bold">📄</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Link href={isAvailable ? `/editor/${template.id}` : "#"}>
      <motion.div
        whileHover={{ scale: isAvailable ? 1.02 : 1 }}
        whileTap={{ scale: isAvailable ? 0.98 : 1 }}
        className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
          isAvailable 
            ? 'cursor-pointer shadow-lg hover:shadow-xl' 
            : 'cursor-not-allowed opacity-75'
        }`}
      >
        {getTemplatePreview(template.name)}
        
        {/* Template Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="text-white">
            <h3 className="font-bold text-sm">{template.name}</h3>
            <p className="text-xs opacity-90">{template.description}</p>
            {!isAvailable && (
              <div className="text-xs text-yellow-300 mt-1">
                ⚠️ Coming Soon
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
