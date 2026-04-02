"use client";
import React, { useState, use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Eye, FileText, User, Briefcase, GraduationCap, Award, Code, Medal } from "lucide-react";
import ResumeForm from "@/components/editor/ResumeForm";
import PreviewModal from "@/components/editor/PreviewModal";
import { mockResumeData } from "@/lib/mockData";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function EditorTemplatePage({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = use(params);
  const [resumeData, setResumeData] = useState(mockResumeData);
  const [activeSection, setActiveSection] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = () => {
      const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(userLoggedIn);
      
      // If not logged in, redirect to auth page
      if (!userLoggedIn) {
        router.push('/auth');
      }
    };

    checkLoginStatus();
  }, [router]);

  // If not logged in, show loading or redirect
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups for this website to download PDF');
      return;
    }

    // Get the actual resume data with proper fallbacks
    const data = {
      fullName: resumeData.fullName || "Your Name",
      email: resumeData.email || "",
      phone: resumeData.phone || "",
      location: resumeData.location || "",
      linkedin: resumeData.linkedin || "",
      summary: resumeData.summary || "",
      experience: resumeData.experience || [],
      education: resumeData.education || [],
      skills: resumeData.skills || []
    };

    // Create complete professional resume HTML
    const resumeHTML = `
      <div class="max-w-4xl mx-auto bg-white text-gray-900 p-8" style="font-family: Arial, sans-serif">
        <!-- Header Section -->
        <div class="border-b-4 border-blue-600 pb-4 mb-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">${data.fullName}</h1>
          <div class="flex flex-wrap gap-4 text-sm text-gray-700">
            ${data.email ? `<span>${data.email}</span>` : ''}
            ${data.phone ? `<span>${data.phone}</span>` : ''}
            ${data.location ? `<span>${data.location}</span>` : ''}
            ${data.linkedin ? `<span>${data.linkedin}</span>` : ''}
          </div>
        </div>

        <!-- Professional Summary -->
        ${data.summary ? `
          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">PROFESSIONAL SUMMARY</h2>
            <p class="text-sm leading-relaxed text-gray-700">${data.summary}</p>
          </div>
        ` : ''}

        <!-- Technical Skills -->
        ${data.skills && data.skills.length > 0 ? `
          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">TECHNICAL SKILLS</h2>
            <div class="text-sm text-gray-700">
              ${data.skills.join(', ')}
            </div>
          </div>
        ` : ''}

        <!-- Experience -->
        ${data.experience && data.experience.length > 0 ? `
          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">EXPERIENCE</h2>
            ${data.experience.map((exp: any) => `
              <div class="mb-4">
                <div class="flex justify-between items-start mb-1">
                  <h3 class="font-semibold text-gray-900">${exp.position || 'Position'}</h3>
                  <span class="text-sm text-gray-600">${exp.duration || 'Duration'}</span>
                </div>
                <div class="text-sm text-gray-700 mb-2">${exp.company || 'Company'}</div>
                ${exp.description ? `<p class="text-sm text-gray-600">${exp.description}</p>` : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Education -->
        ${data.education && data.education.length > 0 ? `
          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">EDUCATION</h2>
            ${data.education.map((edu: any) => `
              <div class="mb-4">
                <div class="flex justify-between items-start mb-1">
                  <h3 class="font-semibold text-gray-900">${edu.degree || 'Degree'}</h3>
                  <span class="text-sm text-gray-600">${edu.year || 'Year'}</span>
                </div>
                <div class="text-sm text-gray-700">${edu.school || 'School'}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

    // Create complete print-friendly HTML with all styling
    const printHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${data.fullName}</title>
          <style>
            @page {
              margin: 0.5in;
              size: letter;
            }
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
              background: white;
              color: #111827;
            }
            .max-w-4xl {
              max-width: 56rem;
            }
            .mx-auto {
              margin-left: auto;
              margin-right: auto;
            }
            .bg-white {
              background-color: white;
            }
            .text-gray-900 {
              color: #111827;
            }
            .text-gray-700 {
              color: #374151;
            }
            .text-gray-600 {
              color: #4b5563;
            }
            .p-8 {
              padding: 2rem;
            }
            .pb-4 {
              padding-bottom: 1rem;
            }
            .mb-6 {
              margin-bottom: 1.5rem;
            }
            .mb-4 {
              margin-bottom: 1rem;
            }
            .mb-3 {
              margin-bottom: 0.75rem;
            }
            .mb-2 {
              margin-bottom: 0.5rem;
            }
            .mb-1 {
              margin-bottom: 0.25rem;
            }
            .border-b-4 {
              border-bottom-width: 4px;
              border-bottom-style: solid;
            }
            .border-b-2 {
              border-bottom-width: 2px;
              border-bottom-style: solid;
            }
            .border-blue-600 {
              border-color: #2563eb;
            }
            .border-gray-300 {
              border-color: #d1d5db;
            }
            .text-3xl {
              font-size: 1.875rem;
              line-height: 2.25rem;
            }
            .text-lg {
              font-size: 1.125rem;
              line-height: 1.75rem;
            }
            .text-sm {
              font-size: 0.875rem;
              line-height: 1.25rem;
            }
            .font-bold {
              font-weight: 700;
            }
            .font-semibold {
              font-weight: 600;
            }
            .flex {
              display: flex;
            }
            .flex-wrap {
              flex-wrap: wrap;
            }
            .gap-4 {
              gap: 1rem;
            }
            .gap-3 {
              gap: 0.75rem;
            }
            .justify-between {
              justify-content: space-between;
            }
            .items-start {
              align-items: flex-start;
            }
            .leading-relaxed {
              line-height: 1.625;
            }
            .grid {
              display: grid;
            }
            .grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0;
              }
              .max-w-4xl { 
                page-break-inside: avoid;
                box-shadow: none;
                max-width: 100%;
                margin: 0;
                padding: 1rem;
              }
              .mb-6 {
                margin-bottom: 1rem;
              }
              .mb-4 {
                margin-bottom: 0.75rem;
              }
            }
          </style>
        </head>
        <body>
          ${resumeHTML}
        </body>
      </html>
    `;

    // Write content to print window
    printWindow.document.write(printHTML);
    printWindow.document.close();

    // Wait for content to load, then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }, 1000);
    };
  };

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'summary', name: 'Summary', icon: FileText },
    { id: 'skills', name: 'Skills', icon: Award },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'projects', name: 'Projects', icon: Code },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'certifications', name: 'Certifications', icon: Medal },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <Navbar />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/templates" className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Resume Editor</h1>
                <p className="text-gray-600">Template: <span className="font-semibold text-blue-600">{templateId}</span></p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
              <button
                onClick={handlePrint}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8">
          {/* Section Navigation & Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Section Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                          activeSection === section.id
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {section.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <ResumeForm 
                  onDataChange={setResumeData} 
                  initialData={resumeData}
                  activeSection={activeSection}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Completion Progress</h3>
            <div className="space-y-3">
              {sections.map((section) => (
                <div key={section.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <section.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{section.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">80%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          .max-w-7xl { max-width: 100% !important; }
          nav, button, .fixed, .bg-gradient-to-br { display: none !important; }
          .bg-white { box-shadow: none !important; border: none !important; }
        }
      `}</style>

      {/* Preview Modal */}
      <PreviewModal 
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        data={resumeData}
        onPrint={handlePrint}
      />
    </div>
  );
}
