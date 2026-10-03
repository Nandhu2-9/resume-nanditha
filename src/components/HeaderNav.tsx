import React from 'react';
import { Download, Sliders, Copy, Check } from 'lucide-react';

interface HeaderNavProps {
  onDownloadPdf: () => void;
  onToggleCustomize: () => void;
  onCopyPlainText: () => void;
  isCopied: boolean;
  activeTemplate: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onDownloadPdf,
  onToggleCustomize,
  onCopyPlainText,
  isCopied,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a href="#top" className="text-base font-bold tracking-tight text-slate-900 shrink-0 hover:text-blue-600 transition-colors">
          Nanditha H.
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#summary" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            Summary
          </a>
          <a href="#skills" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            Skills
          </a>
          <a href="#experience" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            Experience
          </a>
          <a href="#projects" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            Projects
          </a>
          <a href="#certifications" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            Certifications
          </a>
          <a href="#education" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            Education
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onCopyPlainText}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            title="Copy ATS Plain Text"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied ATS Text</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Text</span>
              </>
            )}
          </button>

          <button
            onClick={onToggleCustomize}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
            title="Customize Resume Styles & Layout"
          >
            <Sliders className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden xs:inline">Customize</span>
          </button>

          <button
            onClick={onDownloadPdf}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shadow-xs active:scale-[0.98]"
            title="Export / Print PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
