import React from 'react';
import { ResumeData, Certification, ProjectItem } from '../../data/resumeData';

interface AtsMinimalistResumeProps {
  data: ResumeData;
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

export const AtsMinimalistResume: React.FC<AtsMinimalistResumeProps> = ({
  data,
  density,
  showSections,
  onOpenCertModal,
  onOpenProjectModal,
}) => {
  const padClass = density === 'compact' ? 'p-6 sm:p-8' : density === 'relaxed' ? 'p-10 sm:p-14' : 'p-8 sm:p-12';
  const marginClass = density === 'compact' ? 'mb-4' : density === 'relaxed' ? 'mb-6' : 'mb-5';

  return (
    <article className={`resume-paper bg-white text-black max-w-[850px] mx-auto ${padClass} shadow-md border border-slate-300 font-sans print:border-none print:shadow-none print:p-0 print:m-0`}>
      {/* ATS Header */}
      <header className="text-center border-b border-black pb-4 mb-4 break-inside-avoid">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-normal uppercase">
          {data.personal.name}
        </h1>
        <p className="text-xs sm:text-sm font-semibold mt-1">
          {data.personal.headline}
        </p>
        <p className="text-xs mt-1 text-slate-800">
          {data.personal.location} | Phone: {data.personal.phone} | Email: {data.personal.email}
        </p>
        <p className="text-xs text-slate-800">
          LinkedIn: {data.personal.linkedin} | GitHub: {data.personal.github}
        </p>
      </header>

      {/* Professional Summary */}
      <section className={`${marginClass} break-inside-avoid`}>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
          Professional Summary
        </h2>
        <p className="text-xs leading-relaxed text-justify text-slate-900">
          {data.summary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className={`${marginClass} break-inside-avoid`}>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
          Technical Skills
        </h2>
        <div className="space-y-1 text-xs">
          {data.skills.map((s, idx) => (
            <div key={idx} className="flex">
              <span className="font-bold w-48 shrink-0">{s.category}:</span>
              <span>{s.skills.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience & Training */}
      {showSections.experience && (
        <section className={`${marginClass} break-inside-avoid`}>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
            Professional Experience & Hands-On Training
          </h2>
          <div className="space-y-3">
            {data.experience.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold">{item.title}</span>
                  <span className="font-semibold">{item.period}</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-800 italic">
                  <span>{item.company}</span>
                  <span>{item.location} ({item.type})</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 text-xs space-y-1 text-slate-900">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Projects */}
      {showSections.projects && (
        <section className={`${marginClass} break-inside-avoid`}>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
            Key Software Projects
          </h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline text-xs">
                  <span 
                    className="font-bold cursor-pointer underline hover:text-blue-800"
                    onClick={() => onOpenProjectModal(proj)}
                  >
                    {proj.title}
                  </span>
                  <span className="italic text-slate-700">Academic Prototype</span>
                </div>
                <p className="text-xs text-slate-800 italic">{proj.subtitle}</p>
                <p className="text-xs font-semibold mt-0.5">
                  Technologies: {proj.technologies.join(", ")}
                </p>
                <ul className="list-disc list-outside ml-4 mt-1 text-xs space-y-1 text-slate-900">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Diplomas */}
      {showSections.certifications && (
        <section className={`${marginClass} break-inside-avoid`}>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
            Certifications & Technical Credentials
          </h2>
          <div className="space-y-2 text-xs">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-start">
                <div>
                  <span 
                    className="font-bold cursor-pointer underline hover:text-blue-800"
                    onClick={() => onOpenCertModal(cert)}
                  >
                    {cert.title}
                  </span>
                  <span className="text-slate-700"> — {cert.issuer} {cert.partnerInstitution && `(${cert.partnerInstitution})`}</span>
                  <p className="text-[11px] text-slate-700">{cert.description}</p>
                </div>
                <span className="font-semibold shrink-0 ml-2">{cert.dateOrYear}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      <section className={`${marginClass} break-inside-avoid`}>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
          Education
        </h2>
        <div className="space-y-2 text-xs">
          {data.education.map((edu) => {
            if (!showSections.schoolEducation && edu.id !== 'edu-1') return null;
            return (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">{edu.degree}</span> — {edu.institution} {edu.location && `(${edu.location})`}
                  <span className="block text-[11px] text-slate-700">{edu.status}</span>
                </div>
                <div className="text-right font-semibold">
                  <span>Score: {edu.score}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strengths & Languages */}
      <div className="grid grid-cols-2 gap-4 break-inside-avoid">
        {showSections.strengths && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
              Core Strengths
            </h2>
            <p className="text-xs text-slate-900 leading-normal">
              {data.strengths.join(" • ")}
            </p>
          </section>
        )}

        {showSections.languages && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
              Languages
            </h2>
            <p className="text-xs text-slate-900 leading-normal">
              {data.languages.map(l => `${l.language} (${l.proficiency})`).join(" • ")}
            </p>
          </section>
        )}
      </div>

      {/* Declaration */}
      {showSections.declaration && (
        <section className="mt-5 pt-3 border-t border-black text-xs text-slate-800 break-inside-avoid">
          <p className="italic mb-2">"{data.declaration.statement}"</p>
          <div className="flex justify-between items-end">
            <div>
              <span>Place: {data.declaration.place}</span>
            </div>
            <div className="text-right font-bold">
              <span>{data.declaration.signatory}</span>
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
