import React from 'react';
import { ResumeData, Certification, ProjectItem } from '../../data/resumeData';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award } from 'lucide-react';

interface ExecutiveTwoColumnResumeProps {
  data: ResumeData;
  accentColor: string;
  density: 'compact' | 'normal' | 'relaxed';
  showSections: {
    declaration: boolean;
    schoolEducation: boolean;
    strengths: boolean;
    languages: boolean;
    certifications: boolean;
    experience: boolean;
    projects: boolean;
  };
  onOpenCertModal: (cert: Certification) => void;
  onOpenProjectModal: (proj: ProjectItem) => void;
}

export const ExecutiveTwoColumnResume: React.FC<ExecutiveTwoColumnResumeProps> = ({
  data,
  accentColor,
  density,
  showSections,
  onOpenCertModal,
  onOpenProjectModal,
}) => {
  const padClass = density === 'compact' ? 'p-6 sm:p-7' : density === 'relaxed' ? 'p-8 sm:p-12' : 'p-7 sm:p-10';

  const getAccentBg = () => {
    switch (accentColor) {
      case 'emerald': return 'bg-emerald-900 text-white';
      case 'indigo': return 'bg-indigo-950 text-white';
      case 'rose': return 'bg-rose-950 text-white';
      case 'amber': return 'bg-amber-950 text-white';
      case 'mono': return 'bg-slate-900 text-white';
      case 'blue':
      default: return 'bg-slate-900 text-white';
    }
  };

  const getAccentHeading = () => {
    switch (accentColor) {
      case 'emerald': return 'text-emerald-800 border-emerald-700';
      case 'indigo': return 'text-indigo-800 border-indigo-700';
      case 'rose': return 'text-rose-800 border-rose-700';
      case 'amber': return 'text-amber-800 border-amber-700';
      case 'mono': return 'text-slate-900 border-slate-800';
      case 'blue':
      default: return 'text-blue-900 border-blue-700';
    }
  };

  return (
    <article className={`resume-paper bg-white text-slate-800 max-w-[850px] mx-auto shadow-xl border border-slate-200/90 rounded-2xl overflow-hidden print:border-none print:shadow-none print:rounded-none print:p-0`}>
      {/* Top Banner */}
      <header className={`${getAccentBg()} px-6 sm:px-10 py-7 break-inside-avoid`}>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif sm:font-sans">
          {data.personal.name}
        </h1>
        <p className="text-sm sm:text-base font-medium text-slate-200 mt-1">
          {data.personal.headline}
        </p>
      </header>

      {/* Two Column Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${padClass}`}>
        {/* Left Sidebar (4 columns) */}
        <aside className="md:col-span-4 space-y-6 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6 text-xs">
          {/* Contact Details */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Contact
            </h2>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{data.personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="tabular-nums">{data.personal.phone}</span>
              </div>
              <div className="flex items-center gap-2 break-all">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{data.personal.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={data.personal.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline text-blue-700">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={data.personal.githubUrl} target="_blank" rel="noreferrer" className="hover:underline text-slate-900">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Technical Skills Grouped */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="space-y-3">
              {data.skills.map((cat, i) => (
                <div key={i}>
                  <p className="font-bold text-slate-800 text-[11px]">{cat.category}</p>
                  <p className="text-slate-600 leading-snug mt-0.5">{cat.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu) => {
                if (!showSections.schoolEducation && edu.id !== 'edu-1') return null;
                return (
                  <div key={edu.id} className="pb-2 border-b border-slate-100 last:border-b-0">
                    <p className="font-bold text-slate-900">{edu.degree}</p>
                    <p className="text-slate-600">{edu.institution}</p>
                    <div className="flex justify-between text-[11px] text-slate-500 mt-0.5">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-slate-800">Score: {edu.score}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          {showSections.languages && (
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
                Languages
              </h2>
              <div className="space-y-1.5">
                {data.languages.map((l, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="font-medium text-slate-800">{l.language}</span>
                    <span className="text-slate-500 text-[11px]">{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Strengths */}
          {showSections.strengths && (
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
                Core Strengths
              </h2>
              <ul className="space-y-1 text-slate-600">
                {data.strengths.map((str, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-400" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Right Main Body (8 columns) */}
        <main className="md:col-span-8 space-y-6 text-xs">
          {/* Executive Summary */}
          <section className="break-inside-avoid">
            <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeading()} border-b-2 pb-1 mb-2`}>
              Executive Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-justify">
              {data.summary}
            </p>
          </section>

          {/* Professional Experience & Training */}
          {showSections.experience && (
            <section className="break-inside-avoid">
              <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeading()} border-b-2 pb-1 mb-3`}>
                Professional Experience & Industrial Training
              </h2>
              <div className="space-y-4">
                {data.experience.map((item) => (
                  <div key={item.id} className="relative pl-3 border-l border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <span className="text-slate-500 text-[11px] font-medium">{item.period}</span>
                    </div>
                    <p className="text-slate-600 font-medium">{item.company} · {item.location}</p>
                    <ul className="mt-1.5 space-y-1 text-slate-600">
                      {item.description.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="text-slate-400 mt-0.5">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Featured Capstone Project */}
          {showSections.projects && (
            <section className="break-inside-avoid">
              <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeading()} border-b-2 pb-1 mb-3`}>
                Featured Engineering Project
              </h2>
              {data.projects.map((proj) => (
                <div 
                  key={proj.id}
                  className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50 hover:bg-slate-50 cursor-pointer transition-colors"
                  onClick={() => onOpenProjectModal(proj)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 hover:text-blue-600">
                      {proj.title}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 no-print" />
                  </div>
                  <p className="text-slate-600 italic mt-0.5">{proj.subtitle}</p>
                  <p className="font-semibold text-slate-700 mt-1">Stack: {proj.technologies.join(" · ")}</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {showSections.certifications && (
            <section className="break-inside-avoid">
              <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeading()} border-b-2 pb-1 mb-3`}>
                Verified Certifications & Diplomas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {data.certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    onClick={() => onOpenCertModal(cert)}
                    className="p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-400 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-1.5">
                        <Award className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <h4 className="font-bold text-slate-900 text-xs">{cert.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">{cert.issuer}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-1 border-t border-slate-100 text-[10px] text-slate-500">
                      <span>{cert.dateOrYear}</span>
                      <span className="font-semibold text-blue-600 hover:underline">Inspect →</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Declaration */}
          {showSections.declaration && (
            <section className="pt-3 border-t border-slate-200 break-inside-avoid text-[11px] text-slate-600">
              <p className="italic mb-2">"{data.declaration.statement}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <p>Place: {data.declaration.place}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 font-serif italic text-xs">{data.declaration.signatory}</p>
                  <p className="border-t border-slate-300 pt-0.5">Signature</p>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </article>
  );
};
