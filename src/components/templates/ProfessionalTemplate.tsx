"use client";

import React from "react";

interface ProfessionalTemplateProps {
  data: any;
}

export default function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-4 sm:p-6 md:p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      <style>{`
        @media print {
          .page-break {
            page-break-before: always;
          }
          .avoid-break {
            page-break-inside: avoid;
          }
        }
        @media screen and (max-width: 640px) {
          .resume-container {
            font-size: 0.85em;
            line-height: 1.4;
          }
          .resume-header h1 {
            font-size: 1.5em !important;
          }
          .resume-section h2 {
            font-size: 1em !important;
          }
          .resume-contact {
            font-size: 0.8em !important;
          }
          .resume-item {
            margin-bottom: 0.5rem !important;
          }
        }
      `}</style>
      
      <div className="resume-container">
      
      {/* 1. Header Section - Personal Info */}
      <div className="resume-header border-b-4 border-blue-600 pb-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {data.fullName || "Your Name"}
        </h1>
        <div className="resume-contact flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700">
          {data.email && <span className="break-all">{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
          {data.linkedin && <span className="break-all">{data.linkedin}</span>}
        </div>
      </div>

      {/* 2. Professional Summary */}
      {data.summary && (
        <div className="resume-section mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 border-b-2 border-gray-300 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
            {data.summary}
          </p>
        </div>
      )}

      {/* 3. Skills Section */}
      {(data.skillsRaw || (data.skills && data.skills.length > 0)) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            TECHNICAL SKILLS
          </h2>
          <div className="text-sm text-gray-700">
            {data.skillsRaw || data.skills.join(', ')}
          </div>
        </div>
      )}

      {/* 4. Professional Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>
          {data.experience.map((exp: any, index: number) => (
            <div key={exp.id || index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-gray-700 italic">
                    {exp.company} {exp.location && `| ${exp.location}`}
                  </p>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {exp.duration}
                </span>
              </div>
              {exp.description && (
                <p className="text-sm text-gray-700 mb-2">{exp.description}</p>
              )}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
                  {exp.achievements.map((achievement: string, idx: number) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 5. Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            PROJECTS
          </h2>
          <div className="space-y-3">
            {data.projects.map((project: any, index: number) => (
              <div key={project.id || index}>
                <h3 className="font-bold text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            EDUCATION
          </h2>
          {data.education.map((edu: any, index: number) => (
            <div key={edu.id || index} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {edu.school}
                  </p>
                  {edu.details && (
                    <p className="text-sm text-gray-600">
                      {edu.details}
                    </p>
                  )}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 7. Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {data.certifications.map((cert: any, index: number) => (
              <div key={cert.id || index}>
                <span className="font-semibold">{cert.name}</span>
                {cert.issuer && <span> - {cert.issuer}</span>}
                {cert.year && <span> - {cert.year}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
