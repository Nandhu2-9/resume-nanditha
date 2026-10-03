import React from 'react';
import { ResumeData } from '../data/resumeData';
import { exportAsHtml, exportAsTxt, exportAsDoc } from '../utils/exportResume';
import { X, Download, Printer, FileCode, FileText, FileSpreadsheet, CheckCircle2, Info } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData;
  onPrint: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  data,
  onPrint,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs no-print">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-title"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h2 id="download-title" className="text-sm font-bold text-slate-900">
                Download & Export Resume
              </h2>
              <p className="text-[11px] text-slate-500">
                Candidate: Nanditha H · Software Developer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-600">
            Select your preferred file format for job portals, recruiters, or offline printing:
          </p>

          {/* Option 1: PDF via Print */}
          <button
            onClick={() => {
              onPrint();
            }}
            className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all text-left flex items-start gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Printer className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Save as PDF (Browser Print Dialog)
                </span>
                <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Recommended
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Opens the browser print dialog. Set destination to <strong>"Save as PDF"</strong> for high-resolution vector PDF.
              </p>
            </div>
          </button>

          {/* Option 2: Standalone HTML */}
          <button
            onClick={() => {
              exportAsHtml(data);
            }}
            className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all text-left flex items-start gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <FileCode className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Standalone Offline Resume (.html)
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  Instant File
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Downloads a self-contained file with embedded styles. Double-click to open in any web browser anytime.
              </p>
            </div>
          </button>

          {/* Option 3: ATS Plain Text */}
          <button
            onClick={() => {
              exportAsTxt(data);
            }}
            className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all text-left flex items-start gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  ATS Text Document (.txt)
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  Job Portals
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Standard UTF-8 text file formatted for copy-pasting directly into online application tracking forms.
              </p>
            </div>
          </button>

          {/* Option 4: Word Document */}
          <button
            onClick={() => {
              exportAsDoc(data);
            }}
            className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all text-left flex items-start gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Editable Word Document (.doc)
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  MS Word Ready
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Compatible with Microsoft Word and Google Docs for editing layout or typography manually.
              </p>
            </div>
          </button>

          {/* Quick PDF Tips Box */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800">Quick Tip for saving as PDF:</strong> In the browser print dialog, choose Destination: <strong>"Save as PDF"</strong>, Pages: <strong>"All"</strong>, and make sure <strong>"Background graphics"</strong> is checked for highest quality.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
