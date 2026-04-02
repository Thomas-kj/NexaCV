"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import { Plus, Trash2, Briefcase, GraduationCap, Award, Code, Medal } from "lucide-react";

export default function ResumeForm({
  onDataChange,
  initialData,
  activeSection = 'personal',
}: {
  onDataChange: (data: any) => void;
  initialData: any;
  activeSection?: string;
}) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Just update the raw text directly
    const skillsText = e.target.value;
    const updatedData = { 
      ...formData, 
      skillsRaw: skillsText
    };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    const updatedData = { ...formData, experience: updatedExperience };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    const updatedData = { ...formData, education: updatedEducation };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: "",
      description: "",
    };
    const updatedData = { ...formData, projects: [...(formData.projects || []), newProject] };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const removeProject = (index: number) => {
    const updatedProjects = (formData.projects || []).filter((_: any, i: number) => i !== index);
    const updatedData = { ...formData, projects: updatedProjects };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...(formData.projects || [])];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    const updatedData = { ...formData, projects: updatedProjects };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const addCertification = () => {
    const newCertification = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      year: "",
    };
    const updatedData = { ...formData, certifications: [...(formData.certifications || []), newCertification] };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const removeCertification = (index: number) => {
    const updatedCertifications = (formData.certifications || []).filter((_: any, i: number) => i !== index);
    const updatedData = { ...formData, certifications: updatedCertifications };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const handleCertificationChange = (index: number, field: string, value: string) => {
    const updatedCertifications = [...(formData.certifications || [])];
    updatedCertifications[index] = { ...updatedCertifications[index], [field]: value };
    const updatedData = { ...formData, certifications: updatedCertifications };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const removeSection = (sectionId: string) => {
    const updatedData = { ...formData };
    
    switch (sectionId) {
      case 'summary':
        delete updatedData.summary;
        break;
      case 'skills':
        updatedData.skills = [];
        updatedData.skillsRaw = '';
        break;
      case 'experience':
        updatedData.experience = [];
        break;
      case 'projects':
        updatedData.projects = [];
        break;
      case 'education':
        updatedData.education = [];
        break;
      case 'certifications':
        updatedData.certifications = [];
        break;
    }
    
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      duration: "",
      description: "",
    };
    const updatedData = { ...formData, experience: [...formData.experience, newExperience] };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const removeExperience = (index: number) => {
    const updatedExperience = formData.experience.filter((_: any, i: number) => i !== index);
    const updatedData = { ...formData, experience: updatedExperience };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      year: "",
    };
    const updatedData = { ...formData, education: [...formData.education, newEducation] };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const removeEducation = (index: number) => {
    const updatedEducation = formData.education.filter((_: any, i: number) => i !== index);
    const updatedData = { ...formData, education: updatedEducation };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const renderPersonalSection = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <Input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <Input
            type="tel"
            name="phone"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <Input
            type="text"
            name="location"
            placeholder="San Francisco, CA"
            value={formData.location}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
          <Input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/johndoe"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );

  const renderSummarySection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Professional Summary
        </h3>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
        <textarea
          name="summary"
          placeholder="Write a compelling summary of your professional experience and skills..."
          value={formData.summary}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white text-gray-900 placeholder-gray-500"
          rows={6}
          style={{ 
            filter: 'none', 
            WebkitBackdropFilter: 'none', 
            backdropFilter: 'none',
            color: '#111827',
            backgroundColor: '#ffffff'
          }}
        />
      </div>
    </div>
  );

  const renderExperienceSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-600" />
          Work Experience
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => removeSection('experience')}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove Experience Section"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={addExperience}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Experience
          </button>
        </div>
      </div>
      
      {formData.experience.map((exp: any, index: number) => (
        <div key={exp.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Experience {index + 1}</h4>
            {formData.experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <Input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                placeholder="Tech Corp"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <Input
                type="text"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                placeholder="Senior Developer"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <Input
                type="text"
                value={exp.duration}
                onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                placeholder="2021 - Present"
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              placeholder="Describe your responsibilities and achievements..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white text-gray-900 placeholder-gray-500"
              rows={3}
              style={{ 
                filter: 'none', 
                WebkitBackdropFilter: 'none', 
                backdropFilter: 'none',
                color: '#111827',
                backgroundColor: '#ffffff'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderEducationSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          Education
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => removeSection('education')}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove Education Section"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={addEducation}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Education
          </button>
        </div>
      </div>
      
      {formData.education.map((edu: any, index: number) => (
        <div key={edu.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Education {index + 1}</h4>
            {formData.education.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
              <Input
                type="text"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                placeholder="University of California"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <Input
                type="text"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                placeholder="B.S. Computer Science"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <Input
                type="text"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                placeholder="2019"
                className="w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSkillsSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-blue-600" />
          Skills
        </h3>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technical Skills (comma-separated)
        </label>
        <textarea
          name="skills"
          placeholder="React, Node.js, TypeScript, Next.js, Tailwind CSS, PostgreSQL"
          value={formData.skillsRaw || ''}
          onChange={handleSkillsChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white text-gray-900 placeholder-gray-500"
          rows={4}
          style={{ 
            filter: 'none', 
            WebkitBackdropFilter: 'none', 
            backdropFilter: 'none',
            color: '#111827',
            backgroundColor: '#ffffff'
          }}
        />
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-600" />
          Projects
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => removeSection('projects')}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove Projects Section"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={addProject}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
      </div>
      
      {(formData.projects || []).map((project: any, index: number) => (
        <div key={project.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Project {index + 1}</h4>
            {(formData.projects || []).length > 1 && (
              <button
                type="button"
                onClick={() => removeProject(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <Input
                type="text"
                value={project.name}
                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                placeholder="E-Commerce Platform"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                placeholder="Describe your project, technologies used, and key achievements..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white text-gray-900 placeholder-gray-500"
                rows={3}
                style={{ 
                  filter: 'none', 
                  WebkitBackdropFilter: 'none', 
                  backdropFilter: 'none',
                  color: '#111827',
                  backgroundColor: '#ffffff'
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertificationsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Medal className="w-5 h-5 text-blue-600" />
          Certifications
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => removeSection('certifications')}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove Certifications Section"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={addCertification}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Certification
          </button>
        </div>
      </div>
      
      {(formData.certifications || []).map((cert: any, index: number) => (
        <div key={cert.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Certification {index + 1}</h4>
            {(formData.certifications || []).length > 1 && (
              <button
                type="button"
                onClick={() => removeCertification(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name</label>
              <Input
                type="text"
                value={cert.name}
                onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                placeholder="AWS Certified Solutions Architect"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization</label>
              <Input
                type="text"
                value={cert.issuer}
                onChange={(e) => handleCertificationChange(index, 'issuer', e.target.value)}
                placeholder="Amazon Web Services"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <Input
                type="text"
                value={cert.year}
                onChange={(e) => handleCertificationChange(index, 'year', e.target.value)}
                placeholder="2023"
                className="w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalSection();
      case 'summary':
        return renderSummarySection();
      case 'skills':
        return renderSkillsSection();
      case 'experience':
        return renderExperienceSection();
      case 'projects':
        return renderProjectsSection();
      case 'education':
        return renderEducationSection();
      case 'certifications':
        return renderCertificationsSection();
      default:
        return renderPersonalSection();
    }
  };

  return (
    <div className="space-y-8">
      {renderSection()}
    </div>
  );
}
