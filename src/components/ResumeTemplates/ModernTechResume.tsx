import React from 'react';
import { ResumeData, Certification, ProjectItem } from '../../data/resumeData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Award, 
  FolderGit2,
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ModernTechResumeProps {
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

export const ModernTechResume: React.FC<ModernTechResumeProps> = ({
  data,
  accentColor,
  density,
  showSections,
  onOpenCertModal,
  onOpenProjectModal,
}) => {
  // Density spacing mapping
  const spacingMap = {
    compact: {
      sectionGap: 'mb-5',
      headingGap: 'mb-2',
      itemGap: 'space-y-3',
      textLeading: 'leading-snug',
      pad: 'p-6 sm:p-8',
    },
    normal: {
      sectionGap: 'mb-6 sm:mb-7',
      headingGap: 'mb-3',
      itemGap: 'space-y-4',
      textLeading: 'leading-relaxed',
      pad: 'p-8 sm:p-12',
    },
    relaxed: {
      sectionGap: 'mb-8',
      headingGap: 'mb-4',
      itemGap: 'space-y-5',
      textLeading: 'leading-loose',
      pad: 'p-10 sm:p-14',
    },
  }[density];

  // Dynamic accent style
  const getAccentBorder = () => {
    switch (accentColor) {
      case 'emerald': return 'border-emerald-600 text-emerald-800';
      case 'indigo': return 'border-indigo-600 text-indigo-800';
      case 'rose': return 'border-rose-600 text-rose-800';
      case 'amber': return 'border-amber-600 text-amber-800';
      case 'mono': return 'border-slate-800 text-slate-900';
      case 'blue':
      default: return 'border-blue-600 text-blue-800';
    }
  };

  const getAccentHeadingColor = () => {
    switch (accentColor) {
      case 'emerald': return 'text-emerald-950 border-emerald-600';
      case 'indigo': return 'text-indigo-950 border-indigo-600';
      case 'rose': return 'text-rose-950 border-rose-600';
      case 'amber': return 'text-amber-950 border-amber-600';
      case 'mono': return 'text-slate-950 border-slate-900';
      case 'blue':
      default: return 'text-slate-900 border-blue-600';
    }
  };

  return (
    <article className={`resume-paper bg-white text-slate-800 shadow-xl border border-slate-200/80 rounded-2xl max-w-[850px] mx-auto ${spacingMap.pad} print:border-none print:shadow-none print:rounded-none print:p-0 transition-all`}>
      {/* Header Section */}
      <header className="border-b border-slate-200 pb-5 mb-6 break-inside-avoid" id="top">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif sm:font-sans">
              {data.personal.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
              {data.personal.headline}
            </p>
          </div>
        </div>

        {/* Contact & Links Bar (Clean unboxed metadata with separators) */}
        <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{data.personal.location}</span>
          </div>
          <span className="text-slate-300" aria-hidden="true">·</span>
          
          <a href={`tel:${data.personal.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span className="tabular-nums">{data.personal.phone}</span>
          </a>
          <span className="text-slate-300" aria-hidden="true">·</span>

          <a href={`mailto:${data.personal.email}`} className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{data.personal.email}</span>
          </a>
          <span className="text-slate-300" aria-hidden="true">·</span>

          <a 
            href={data.personal.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-slate-400" />
            <span>{data.personal.linkedin}</span>
          </a>
          <span className="text-slate-300" aria-hidden="true">·</span>

          <a 
            href={data.personal.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-slate-400" />
            <span>{data.personal.github}</span>
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className={`${spacingMap.sectionGap} break-inside-avoid`} id="summary">
        <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
          Professional Summary
        </h2>
        <p className={`text-xs sm:text-sm text-slate-700 ${spacingMap.textLeading}`}>
          {data.summary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className={`${spacingMap.sectionGap} break-inside-avoid`} id="skills">
        <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
          {data.skills.map((group, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 py-1 border-b border-slate-100">
              <span className="font-semibold text-slate-800 shrink-0 w-36">
                {group.category}:
              </span>
              <span className="text-slate-600">
                {group.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience & Industrial Training */}
      {showSections.experience && (
        <section className={`${spacingMap.sectionGap} break-inside-avoid`} id="experience">
          <div className="flex items-center justify-between">
            <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
              Professional Experience & Hands-On Training
            </h2>
            <span className="text-[11px] text-slate-500 font-medium">
              Academic & Industrial
            </span>
          </div>

          <div className={spacingMap.itemGap}>
            {data.experience.map((item) => (
              <div key={item.id} className="group relative pl-3 border-l border-slate-200 hover:border-slate-400 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-700">
                      {item.company} · <span className="text-slate-500">{item.location}</span>
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 font-medium shrink-0 flex items-center gap-2">
                    <span className="tabular-nums">{item.period}</span>
                    <span className="hidden sm:inline text-slate-300">·</span>
                    <span className="text-slate-600 font-medium">{item.type}</span>
                  </div>
                </div>

                <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-slate-400 shrink-0 mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Technologies:</span>
                  <span>{item.technologies.join(" · ")}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {showSections.projects && (
        <section className={`${spacingMap.sectionGap} break-inside-avoid`} id="projects">
          <div className="flex items-center justify-between">
            <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
              Key Software Projects
            </h2>
            <span className="text-[11px] text-slate-500 font-medium">
              Click project to inspect architecture
            </span>
          </div>

          <div className={spacingMap.itemGap}>
            {data.projects.map((proj) => (
              <div 
                key={proj.id}
                className="group relative p-4 rounded-xl border border-slate-200/90 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
                onClick={() => onOpenProjectModal(proj)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors no-print" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Prototype Capstone System
                  </div>
                </div>

                <p className="text-xs text-slate-600 italic mt-0.5">
                  {proj.subtitle}
                </p>

                <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-slate-400 shrink-0 mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <span className="font-semibold text-slate-800">Stack:</span>
                    <span>{proj.technologies.join(" · ")}</span>
                  </div>
                  {proj.metrics && (
                    <span className="text-emerald-700 font-medium">
                      ✓ {proj.metrics}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications Section (with interactive modal preview trigger) */}
      {showSections.certifications && (
        <section className={`${spacingMap.sectionGap} break-inside-avoid`} id="certifications">
          <div className="flex items-center justify-between">
            <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
              Certifications & Technical Credentials
            </h2>
            <span className="text-[11px] text-slate-500 font-medium no-print">
              Click to view verified diploma & participation certificates
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => onOpenCertModal(cert)}
                className="group relative p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 no-print shrink-0" />
                  </div>

                  <p className="text-[11px] text-slate-700 font-medium mt-1">
                    {cert.issuer} {cert.partnerInstitution && `· ${cert.partnerInstitution}`}
                  </p>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="tabular-nums">{cert.dateOrYear}</span>
                  <span className="font-mono text-[10px] text-slate-600 font-semibold group-hover:underline">
                    View Verified Certificate →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      <section className={`${spacingMap.sectionGap} break-inside-avoid`} id="education">
        <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
          Education
        </h2>
        <div className="space-y-3">
          {data.education.map((edu, idx) => {
            // Check if user toggled off school level qualifications
            if (!showSections.schoolEducation && edu.id !== 'edu-1') return null;

            return (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-2 text-xs">
                <div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    {edu.institution} {edu.location && `· ${edu.location}`}
                  </p>
                </div>
                <div className="text-right sm:text-right mt-1 sm:mt-0">
                  <div className="font-bold text-slate-800 text-xs">
                    Score: <span className="tabular-nums font-semibold">{edu.score}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {edu.status}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Two Column Footer: Strengths & Languages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1 break-inside-avoid">
        {showSections.strengths && (
          <section>
            <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
              Core Strengths
            </h2>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-700">
              {data.strengths.map((str, sIdx) => (
                <span key={sIdx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  {str}
                </span>
              ))}
            </div>
          </section>
        )}

        {showSections.languages && (
          <section>
            <h2 className={`text-xs font-bold uppercase tracking-wider ${getAccentHeadingColor()} border-l-2 pl-2.5 ${spacingMap.headingGap}`}>
              Languages
            </h2>
            <div className="space-y-1 text-xs text-slate-700">
              {data.languages.map((lang, lIdx) => (
                <div key={lIdx} className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-medium text-slate-800">{lang.language}</span>
                  <span className="text-slate-500">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Declaration */}
      {showSections.declaration && (
        <section className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-600 break-inside-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Declaration
          </h2>
          <p className="italic text-slate-600 mb-4">
            "{data.declaration.statement}"
          </p>
          <div className="flex justify-between items-end text-[11px]">
            <div>
              <p className="text-slate-500">Place: <span className="font-medium text-slate-700">{data.declaration.place}</span></p>
            </div>
            <div className="text-right">
              <div className="font-serif italic text-sm text-slate-800 font-semibold mb-0.5">
                {data.declaration.signatory}
              </div>
              <p className="text-slate-500 border-t border-slate-300 pt-0.5 font-medium">
                Signature of Applicant
              </p>
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
