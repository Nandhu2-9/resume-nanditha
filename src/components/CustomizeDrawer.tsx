import React, { useState } from 'react';
import { ResumeData } from '../data/resumeData';
import { 
  X, 
  RotateCcw, 
  Palette, 
  Layout, 
  SlidersHorizontal, 
  Eye, 
  FileEdit,
  Printer,
  Sparkles
} from 'lucide-react';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTemplate: 'modern' | 'ats' | 'executive';
  onChangeTemplate: (t: 'modern' | 'ats' | 'executive') => void;
  accentColor: string;
  onChangeAccentColor: (c: string) => void;
  density: 'compact' | 'normal' | 'relaxed';
  onChangeDensity: (d: 'compact' | 'normal' | 'relaxed') => void;
  showSections: {
    photo?: boolean;
    declaration: boolean;
    schoolEducation: boolean;
    strengths: boolean;
    languages: boolean;
    certifications: boolean;
    experience: boolean;
    projects: boolean;
  };
  onToggleSection: (key: string) => void;
  resumeData: ResumeData;
  onUpdateResumeData: (data: ResumeData) => void;
  onResetDefaults: () => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  activeTemplate,
  onChangeTemplate,
  accentColor,
  onChangeAccentColor,
  density,
  onChangeDensity,
  showSections,
  onToggleSection,
  resumeData,
  onUpdateResumeData,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'layout' | 'sections' | 'edit'>('layout');

  if (!isOpen) return null;

  const colorOptions = [
    { id: 'blue', label: 'Tech Cobalt', bg: 'bg-blue-600' },
    { id: 'emerald', label: 'Emerald Forest', bg: 'bg-emerald-600' },
    { id: 'indigo', label: 'Deep Indigo', bg: 'bg-indigo-600' },
    { id: 'rose', label: 'Rosewood', bg: 'bg-rose-600' },
    { id: 'amber', label: 'Amber Bronze', bg: 'bg-amber-600' },
    { id: 'mono', label: 'Slate Monochrome', bg: 'bg-slate-900' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden no-print">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-2xs transition-opacity" 
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-700" />
              <h2 className="text-sm font-bold text-slate-900">
                Resume Customizer & Controls
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation */}
          <div className="flex border-b border-slate-200 bg-slate-100/70 px-4 pt-2 gap-2 text-xs font-medium">
            <button
              onClick={() => setActiveTab('layout')}
              className={`px-3 py-2 border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'layout'
                  ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg font-semibold shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              Layout & Theme
            </button>
            <button
              onClick={() => setActiveTab('sections')}
              className={`px-3 py-2 border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'sections'
                  ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg font-semibold shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Sections Visibility
            </button>
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-3 py-2 border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'edit'
                  ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg font-semibold shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileEdit className="w-3.5 h-3.5" />
              Live Content
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
            {activeTab === 'layout' && (
              <div className="space-y-6">
                {/* Template Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Resume Format & Template
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => onChangeTemplate('modern')}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        activeTemplate === 'modern'
                          ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900 shadow-xs'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <p className="font-semibold text-slate-900">Modern Tech Engineer</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Clean contemporary layout with accent borders, optimal for tech companies and hiring managers.
                      </p>
                    </button>

                    <button
                      onClick={() => onChangeTemplate('ats')}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        activeTemplate === 'ats'
                          ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900 shadow-xs'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <p className="font-semibold text-slate-900">ATS Minimalist Standard</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Single-column, zero graphic clutter, optimized for high parsing scores in HR ATS algorithms.
                      </p>
                    </button>

                    <button
                      onClick={() => onChangeTemplate('executive')}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        activeTemplate === 'executive'
                          ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900 shadow-xs'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <p className="font-semibold text-slate-900">Executive Two-Column</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Distinct sidebar with quick contacts, skills, and main column for experience and projects.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Accent Colors */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Accent Color Palette
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {colorOptions.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => onChangeAccentColor(c.id)}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${
                          accentColor === c.id
                            ? 'border-slate-900 bg-slate-50 font-semibold'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full ${c.bg} shrink-0`} />
                        <span className="truncate text-[11px]">{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Spacing Density */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Content Density & Spacing
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['compact', 'normal', 'relaxed'] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => onChangeDensity(d)}
                        className={`p-2 text-center rounded-lg border capitalize transition-all ${
                          density === d
                            ? 'border-slate-900 bg-slate-900 text-white font-semibold'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    "Compact" fits extensive details onto a single clean printed page.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'sections' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-600">
                  Toggle sections on or off to tailor the resume for specific job applications:
                </p>

                <div className="space-y-2 border border-slate-200 rounded-xl p-3 bg-slate-50/50">
                  {[
                    { key: 'photo', label: 'Candidate Professional Photo / Headshot' },
                    { key: 'experience', label: 'Professional Experience & Hands-On Training' },
                    { key: 'projects', label: 'Featured Projects (VoteSync Smart Voting)' },
                    { key: 'certifications', label: 'Certifications & Technical Credentials' },
                    { key: 'schoolEducation', label: 'Pre-University & Secondary School (PUC / SSLC)' },
                    { key: 'strengths', label: 'Core Strengths & Competencies' },
                    { key: 'languages', label: 'Languages Section' },
                    { key: 'declaration', label: 'Formal Candidate Declaration & Signature' },
                  ].map((s) => {
                    const isChecked = (showSections as any)[s.key];
                    return (
                      <label
                        key={s.key}
                        className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-medium text-slate-800 text-xs">{s.label}</span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => onToggleSection(s.key)}
                          className="w-4 h-4 text-slate-900 rounded focus:ring-slate-900"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'edit' && (
              <div className="space-y-4">
                {/* Photo Preview in Drawer */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  {resumeData.personal.photoUrl ? (
                    <img
                      src={resumeData.personal.photoUrl}
                      alt="Profile preview"
                      referrerPolicy="no-referrer"
                      className="w-14 h-16 rounded-lg object-cover border border-slate-300 shadow-2xs"
                    />
                  ) : (
                    <div className="w-14 h-16 rounded-lg bg-slate-200 flex items-center justify-center text-[10px] text-slate-500">
                      No Photo
                    </div>
                  )}
                  <div className="flex-1 text-xs">
                    <p className="font-semibold text-slate-800">Executive Headshot</p>
                    <p className="text-[11px] text-slate-500">
                      High-resolution corporate studio portrait attached.
                    </p>
                    <button
                      type="button"
                      onClick={() => onToggleSection('photo')}
                      className="text-[11px] text-blue-600 font-medium hover:underline mt-1 block"
                    >
                      {showSections.photo !== false ? 'Hide photo on resume' : 'Show photo on resume'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Candidate Full Name
                  </label>
                  <input
                    type="text"
                    value={resumeData.personal.name}
                    onChange={(e) =>
                      onUpdateResumeData({
                        ...resumeData,
                        personal: { ...resumeData.personal, name: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Professional Headline
                  </label>
                  <input
                    type="text"
                    value={resumeData.personal.headline}
                    onChange={(e) =>
                      onUpdateResumeData({
                        ...resumeData,
                        personal: { ...resumeData.personal, headline: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={resumeData.personal.phone}
                      onChange={(e) =>
                        onUpdateResumeData({
                          ...resumeData,
                          personal: { ...resumeData.personal, phone: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={resumeData.personal.email}
                      onChange={(e) =>
                        onUpdateResumeData({
                          ...resumeData,
                          personal: { ...resumeData.personal, email: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Professional Summary
                  </label>
                  <textarea
                    rows={4}
                    value={resumeData.summary}
                    onChange={(e) =>
                      onUpdateResumeData({
                        ...resumeData,
                        summary: e.target.value,
                      })
                    }
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs leading-relaxed"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button
              onClick={onResetDefaults}
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
