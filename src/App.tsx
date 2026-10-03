/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialResumeData, ResumeData, Certification, ProjectItem } from './data/resumeData';
import { HeaderNav } from './components/HeaderNav';
import { ModernTechResume } from './components/ResumeTemplates/ModernTechResume';
import { AtsMinimalistResume } from './components/ResumeTemplates/AtsMinimalistResume';
import { ExecutiveTwoColumnResume } from './components/ResumeTemplates/ExecutiveTwoColumnResume';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { DownloadModal } from './components/DownloadModal';
import { generatePlainTextResume } from './utils/generatePlainText';
import { 
  Award, 
  Cpu, 
  Download, 
  Copy, 
  Check, 
  Sliders, 
  Sparkles, 
  Layers, 
  FileText, 
  Eye, 
  Maximize2, 
  ZoomIn, 
  ZoomOut,
  GraduationCap,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTemplate, setActiveTemplate] = useState<'modern' | 'ats' | 'executive'>('modern');
  const [accentColor, setAccentColor] = useState<string>('blue');
  const [density, setDensity] = useState<'compact' | 'normal' | 'relaxed'>('normal');
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Section visibility controls
  const [showSections, setShowSections] = useState({
    declaration: true,
    schoolEducation: true,
    strengths: true,
    languages: true,
    certifications: true,
    experience: true,
    projects: true,
  });

  // Modals & Drawers
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Feedback notifications
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Keyboard escape handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setSelectedProject(null);
        setIsCustomizeOpen(false);
        setIsDownloadModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSection = (key: string) => {
    setShowSections((prev) => ({
      ...prev,
      [key]: !((prev as any)[key]),
    }));
  };

  const handleDownloadPdf = () => {
    setIsDownloadModalOpen(true);
    try {
      window.print();
    } catch (err) {
      console.warn('Browser print dialog not available in iframe sandbox', err);
    }
  };

  const handleCopyPlainText = () => {
    const text = generatePlainTextResume(resumeData);
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNotification('ATS-friendly plain text copied to clipboard!');
      setTimeout(() => setCopiedNotification(null), 3500);
    });
  };

  const handleResetDefaults = () => {
    setResumeData(initialResumeData);
    setActiveTemplate('modern');
    setAccentColor('blue');
    setDensity('normal');
    setShowSections({
      declaration: true,
      schoolEducation: true,
      strengths: true,
      languages: true,
      certifications: true,
      experience: true,
      projects: true,
    });
    setCopiedNotification('Restored Nanditha’s original profile defaults');
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <HeaderNav
        onDownloadPdf={handleDownloadPdf}
        onToggleCustomize={() => setIsCustomizeOpen(true)}
        onCopyPlainText={handleCopyPlainText}
        isCopied={Boolean(copiedNotification)}
        activeTemplate={activeTemplate}
      />

      {/* Verified Badges & Quick Action Banner (no-print) */}
      <section className="bg-white border-b border-slate-200/90 py-3.5 px-4 sm:px-6 shadow-2xs no-print">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Credentials & Resume Portfolio
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>

            {/* Quick buttons to inspect the 2 uploaded certificates */}
            <button
              onClick={() => setSelectedCert(resumeData.certifications[0])}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80 transition-colors font-medium text-[11px]"
              title="Click to view authentic Angular & MEAN Diploma Certificate"
            >
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Diploma: Angular & MEAN Full Stack (2025–26)</span>
            </button>

            <button
              onClick={() => setSelectedCert(resumeData.certifications[1])}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200/80 transition-colors font-medium text-[11px]"
              title="Click to view RV SSNMV UHV Participation Certificate"
            >
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>UHV Induction Certificate (2023)</span>
            </button>

            <button
              onClick={() => setSelectedProject(resumeData.projects[0])}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200/80 transition-colors font-medium text-[11px]"
              title="Click to inspect VoteSync IoT & ML Smart Voting Architecture"
            >
              <Cpu className="w-3.5 h-3.5 text-purple-600" />
              <span>VoteSync: IoT & ML System Demo</span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-500 text-[11px]">
            <span>SSMRV College, Bengaluru</span>
            <span className="text-slate-300">·</span>
            <span>BCA Final Year (65.95%)</span>
            <span className="text-slate-300">·</span>
            <span className="text-emerald-700 font-semibold">Available for Entry-Level Roles</span>
          </div>
        </div>
      </section>

      {/* Interactive Controls Bar: Templates & Density (no-print) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 no-print">
        {/* Template Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
          <button
            onClick={() => setActiveTemplate('modern')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTemplate === 'modern'
                ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Modern Tech
          </button>
          <button
            onClick={() => setActiveTemplate('ats')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTemplate === 'ats'
                ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            ATS Standard
          </button>
          <button
            onClick={() => setActiveTemplate('executive')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTemplate === 'executive'
                ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Executive Two-Column
          </button>
        </div>

        {/* Zoom & Page Density Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-slate-200 shadow-2xs text-xs">
            <span className="text-slate-500 mr-1 text-[11px]">Zoom:</span>
            <button
              onClick={() => setZoomLevel(prev => Math.max(70, prev - 10))}
              className="p-1 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] font-semibold text-slate-800 w-9 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(120, prev + 10))}
              className="p-1 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="ml-1 text-[10px] text-blue-600 hover:underline px-1"
            >
              Reset
            </button>
          </div>

          <button
            onClick={() => setIsCustomizeOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-2xs transition-colors"
          >
            <Sliders className="w-3.5 h-3.5 text-slate-500" />
            <span>Customize Layout</span>
          </button>
        </div>
      </section>

      {/* Main Resume Canvas */}
      <main className="flex-1 py-6 px-3 sm:px-6 flex justify-center items-start overflow-x-auto">
        <div 
          className="w-full transition-transform origin-top"
          style={{ transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : undefined }}
        >
          {activeTemplate === 'modern' && (
            <ModernTechResume
              data={resumeData}
              accentColor={accentColor}
              density={density}
              showSections={showSections}
              onOpenCertModal={(cert) => setSelectedCert(cert)}
              onOpenProjectModal={(proj) => setSelectedProject(proj)}
            />
          )}

          {activeTemplate === 'ats' && (
            <AtsMinimalistResume
              data={resumeData}
              density={density}
              showSections={showSections}
              onOpenCertModal={(cert) => setSelectedCert(cert)}
              onOpenProjectModal={(proj) => setSelectedProject(proj)}
            />
          )}

          {activeTemplate === 'executive' && (
            <ExecutiveTwoColumnResume
              data={resumeData}
              accentColor={accentColor}
              density={density}
              showSections={showSections}
              onOpenCertModal={(cert) => setSelectedCert(cert)}
              onOpenProjectModal={(proj) => setSelectedProject(proj)}
            />
          )}
        </div>
      </main>

      {/* Floating Toast Notification */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* Modals & Customizer */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
        allCertificates={resumeData.certifications}
        onSelectOther={(id) => {
          const target = resumeData.certifications.find(c => c.id === id);
          if (target) setSelectedCert(target);
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CustomizeDrawer
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        activeTemplate={activeTemplate}
        onChangeTemplate={(t) => setActiveTemplate(t)}
        accentColor={accentColor}
        onChangeAccentColor={(c) => setAccentColor(c)}
        density={density}
        onChangeDensity={(d) => setDensity(d)}
        showSections={showSections}
        onToggleSection={handleToggleSection}
        resumeData={resumeData}
        onUpdateResumeData={(data) => setResumeData(data)}
        onResetDefaults={handleResetDefaults}
      />

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        data={resumeData}
        onPrint={() => {
          try {
            window.print();
          } catch (e) {
            console.warn(e);
          }
        }}
      />

      {/* Clean Footer (no-print) */}
      <footer className="mt-auto border-t border-slate-200/80 bg-white py-6 px-4 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Nanditha H · Software Developer Resume & Portfolio
          </p>
          <div className="flex items-center gap-4 text-slate-600">
            <a 
              href={resumeData.personal.linkedinUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a 
              href={resumeData.personal.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a 
              href={`mailto:${resumeData.personal.email}`} 
              className="hover:text-slate-900 transition-colors"
            >
              {resumeData.personal.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
