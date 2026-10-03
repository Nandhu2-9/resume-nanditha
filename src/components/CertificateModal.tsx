import React from 'react';
import { Certification } from '../data/resumeData';
import { X, Award, CheckCircle2, Building2, Calendar, FileText, Download, Share2 } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certification | null;
  onClose: () => void;
  onSelectOther?: (certId: string) => void;
  allCertificates: Certification[];
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  onSelectOther,
  allCertificates,
}) => {
  if (!certificate) return null;

  const isAngularCert = certificate.id === 'cert-1';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto no-print">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-title"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cert-title" className="text-base font-semibold text-slate-900">
                Official Credential Verification
              </h2>
              <p className="text-xs text-slate-500">
                Issued to Nanditha H · Verified Academic & Professional Credential
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              title="Print Certificate"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print Credential</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close credential viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Switcher Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 px-6 pt-2 gap-2">
          {allCertificates.map((cert) => {
            const isActive = cert.id === certificate.id;
            return (
              <button
                key={cert.id}
                onClick={() => onSelectOther && onSelectOther(cert.id)}
                className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-all flex items-center gap-2 ${
                  isActive
                    ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg shadow-2xs font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Award className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="truncate max-w-[240px]">{cert.certificateType === 'Diploma' ? 'Diploma: Angular & MEAN' : 'UHV Student Induction'}</span>
              </button>
            );
          })}
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 md:p-8 bg-slate-100/40">
          {/* Certificate Frame Replica */}
          <div className="relative bg-white border-8 border-double border-slate-300 rounded-xl p-6 sm:p-10 shadow-lg text-slate-800 overflow-hidden">
            {/* Subtle decorative corners */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-slate-400/50" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-slate-400/50" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-slate-400/50" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-slate-400/50" />

            {/* Certificate Header Branding */}
            {isAngularCert ? (
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-slate-800 flex items-center justify-center p-1">
                      <span className="font-serif font-black text-xs text-slate-900 leading-tight text-center">RV<br/>SSMRV</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold tracking-tight text-slate-900 uppercase">SSMRV College</h3>
                      <p className="text-[10px] text-slate-500">Rashtreeya Sikshana Samithi Trust</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <span className="text-base font-bold text-slate-900 tracking-tight">Elevium</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <p className="text-[10px] text-slate-500 tracking-wide">Learn.Apply.Build · Nanochip Skills</p>
                  </div>
                </div>

                <div className="text-center my-6">
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Academic Certification</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight mt-1 mb-2">
                    Diploma Certificate
                  </h1>
                  <div className="w-16 h-0.5 bg-blue-600 mx-auto" />
                </div>

                <div className="text-center max-w-2xl mx-auto my-6 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">This is to certify that</p>
                  <p className="text-xl font-bold text-slate-900 font-serif border-b border-slate-300 pb-1 inline-block px-6">
                    Nanditha
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    of <strong className="font-semibold text-slate-900">Sivananda Sarma Memorial RV College (SSMRV)</strong> participated and successfully completed the comprehensive industrial training in
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 my-2">
                    <p className="font-bold text-slate-900 text-sm sm:text-base">
                      Modular Angular Applications Web Applications
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      as part of the <strong className="font-semibold text-slate-800">Advanced MEAN Full Stack Course Program</strong> conducted by <strong className="font-semibold text-slate-800">Nanochip Skills Pvt Ltd</strong>
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">
                    for the academic year <span className="font-semibold text-slate-800">2025–26</span>
                  </p>
                </div>

                {/* Signatures */}
                <div className="grid grid-cols-3 gap-4 pt-8 mt-6 border-t border-slate-200 text-center">
                  <div>
                    <div className="h-9 flex items-end justify-center pb-1">
                      <span className="font-serif italic text-sm text-slate-700 font-medium">L. Geetha</span>
                    </div>
                    <div className="border-t border-slate-400 pt-1">
                      <p className="text-[11px] font-semibold text-slate-900">Principal</p>
                      <p className="text-[10px] text-slate-500">SSMRV College</p>
                    </div>
                  </div>
                  <div>
                    <div className="h-9 flex items-end justify-center pb-1">
                      <span className="font-serif italic text-sm text-slate-700 font-medium">Sheela S.</span>
                    </div>
                    <div className="border-t border-slate-400 pt-1">
                      <p className="text-[11px] font-semibold text-slate-900">HOD – BCA</p>
                      <p className="text-[10px] text-slate-500">SSMRV College</p>
                    </div>
                  </div>
                  <div>
                    <div className="h-9 flex items-end justify-center pb-1">
                      <span className="font-serif italic text-sm text-slate-700 font-medium">M. K. Nayak</span>
                    </div>
                    <div className="border-t border-slate-400 pt-1">
                      <p className="text-[11px] font-semibold text-slate-900">Elevium – by Nanochip</p>
                      <p className="text-[10px] text-slate-500 italic">"Go, change the world"</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center border-b border-slate-200 pb-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-900 mb-2">
                    <Building2 className="w-6 h-6 text-slate-800" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase">RV Educational Institutions</h3>
                  <h4 className="text-base font-bold text-slate-900">SSNMV COLLEGE</h4>
                  <p className="text-[11px] text-slate-500">Tanga, Karnataka – 572244</p>
                  <div className="inline-block mt-2 px-3 py-0.5 bg-slate-100 rounded-full text-[11px] font-medium text-slate-700">
                    UHV Cell – Student Induction Programme
                  </div>
                </div>

                <div className="text-center my-6">
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight mb-2">
                    CERTIFICATE OF PARTICIPATION
                  </h1>
                  <div className="w-16 h-0.5 bg-blue-600 mx-auto" />
                </div>

                <div className="text-center max-w-2xl mx-auto my-6 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">This is to certify that</p>
                  <p className="text-xl font-bold text-slate-900 font-serif border-b border-slate-300 pb-1 inline-block px-6">
                    Ms./M. NANDITHA
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    has successfully completed the <strong className="font-semibold text-slate-900">Student Induction Programme</strong> organized by the <strong className="font-semibold text-slate-900">Universal Human Values cell</strong> of SSNMV College in association with <strong className="font-semibold text-slate-900">Deha Bharati</strong>.
                  </p>
                  <div className="text-xs text-slate-500">
                    Conducted on <span className="font-semibold text-slate-800">25.09.2023</span>
                  </div>
                </div>

                {/* Signatures */}
                <div className="grid grid-cols-2 gap-8 max-w-md mx-auto pt-8 mt-6 border-t border-slate-200 text-center">
                  <div>
                    <div className="h-9 flex items-end justify-center pb-1">
                      <span className="font-serif italic text-sm text-slate-700 font-medium">Arjun DR</span>
                    </div>
                    <div className="border-t border-slate-400 pt-1">
                      <p className="text-[11px] font-semibold text-slate-900">Arjun DR</p>
                      <p className="text-[10px] text-slate-500">Co-Ordinator, UHV Cell</p>
                    </div>
                  </div>
                  <div>
                    <div className="h-9 flex items-end justify-center pb-1">
                      <span className="font-serif italic text-sm text-slate-700 font-medium">Dr. G B Sunil Kumar</span>
                    </div>
                    <div className="border-t border-slate-400 pt-1">
                      <p className="text-[11px] font-semibold text-slate-900">Dr. G B Sunil Kumar</p>
                      <p className="text-[10px] text-slate-500">Principal</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Credential Metadata Breakdown */}
          <div className="mt-6 bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Verified Competencies & Details
              </span>
              <span className="text-xs text-slate-500 font-mono">
                ID: {certificate.credentialId}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-slate-500 mb-1">Issuing Authority & Institution</p>
                <p className="font-semibold text-slate-800">{certificate.issuer}</p>
                {certificate.partnerInstitution && (
                  <p className="text-slate-600 mt-0.5">{certificate.partnerInstitution}</p>
                )}
              </div>
              <div>
                <p className="text-slate-500 mb-1">Date / Academic Period</p>
                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {certificate.dateOrYear}
                </p>
                {certificate.location && (
                  <p className="text-slate-500 mt-0.5">{certificate.location}</p>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-2">Key Skills & Subject Mastery</p>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center text-xs text-slate-700 bg-slate-100 rounded-md px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50">
          <p className="text-xs text-slate-500">
            Authenticated document presented for Nanditha H's developer portfolio.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
