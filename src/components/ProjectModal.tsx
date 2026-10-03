import React, { useState } from 'react';
import { ProjectItem } from '../data/resumeData';
import { X, Cpu, ShieldCheck, Database, BarChart3, CheckCircle, Terminal, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code' | 'simulation'>('overview');
  const [simulatedVoteCount, setSimulatedVoteCount] = useState<{ [key: string]: number }>({
    'Candidate A (Tech Guild)': 142,
    'Candidate B (Student Action)': 128,
    'Candidate C (Innovation Wing)': 89,
  });
  const [voterVerified, setVoterVerified] = useState<boolean>(true);
  const [iotStatus, setIotStatus] = useState<{ [key: string]: string }>({
    'Station 01 (Main Auditorium)': 'Online · Battery 98%',
    'Station 02 (CS Wing Lab)': 'Online · Battery 94%',
    'Station 03 (Library Terminal)': 'Idle · Standby',
  });

  if (!project) return null;

  const totalVotes = Object.values(simulatedVoteCount).reduce((a, b) => a + b, 0);

  const castSampleVote = (candidate: string) => {
    setSimulatedVoteCount(prev => ({
      ...prev,
      [candidate]: prev[candidate] + 1,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto no-print">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="proj-title"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 id="proj-title" className="text-base font-semibold text-slate-900">
                {project.title}
              </h2>
              <p className="text-xs text-slate-500">
                Full-Stack Architecture · IoT Telemetry · OpenCV Biometrics
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 px-6 pt-2 gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg font-semibold shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            System Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg font-semibold shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Biometric & IoT Pipeline
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg font-semibold shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Live Dashboard Demo
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-slate-900 text-slate-900 bg-white rounded-t-lg font-semibold shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Code Structure
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                  Project Abstract & Motivation
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Traditional voting procedures are susceptible to voter impersonation, booth capturing, and sluggish ballot tallying. 
                  <strong className="font-semibold text-slate-900"> VoteSync</strong> addresses these real-world vulnerabilities by harmonizing a 
                  robust Django web application with OpenCV-driven facial biometric verification and simulated IoT hardware status monitors.
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Core Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium text-slate-800 bg-slate-100 rounded-md border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Key Deliverables & Engineering Accomplishments
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Callout */}
              <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-blue-900 leading-relaxed">
                <strong className="font-semibold">Academic Prototype Validation:</strong> {project.metrics}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                Multi-Tier System Architecture
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Biometric Face Verification
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Captures high-frame rate video streams at the polling booth. Leverages Haar cascades and Python OpenCV feature encoding to cross-match candidate voters against encrypted image records stored in the SQLite/MySQL database.
                  </p>
                  <div className="text-[11px] font-mono text-slate-600 bg-white p-2 rounded border border-slate-200">
                    Confidence Threshold: 85%+ Match · Anti-spoofing check
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                    <Cpu className="w-4 h-4 text-blue-600" />
                    IoT Hardware Telemetry Module
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Monitors physical voting station hardware parameters such as device temperature, battery level, network latency, and physical tamper sensors. Emits alerts when connection anomalies are detected.
                  </p>
                  <div className="text-[11px] font-mono text-slate-600 bg-white p-2 rounded border border-slate-200">
                    Heartbeat Interval: 5,000ms · Status: Operational
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                    <Database className="w-4 h-4 text-purple-600" />
                    Django ORM & Relational Schema
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Strict database schema mapping Voters, Candidates, Elections, and anonymized Ballot records. Enforces singular vote transactions with cryptographic checksums to prevent double voting.
                  </p>
                  <div className="text-[11px] font-mono text-slate-600 bg-white p-2 rounded border border-slate-200">
                    Models: Voter, Candidate, Election, BallotLog, Station
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                    <BarChart3 className="w-4 h-4 text-amber-600" />
                    Live Tabulation & Chart.js
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Provides administrative election observers with instant, live-updating graphical charts displaying voter turnout across wards, gender distribution, and real-time ballot counts.
                  </p>
                  <div className="text-[11px] font-mono text-slate-600 bg-white p-2 rounded border border-slate-200">
                    Chart.js Dynamic Polling & SVG visualization
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    VoteSync Interactive Prototype Sandbox
                  </h3>
                  <p className="text-xs text-slate-500">
                    Simulate voter authentication, ballot casting, and dynamic analytics tabulation.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVoterVerified(!voterVerified)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                      voterVerified
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}
                  >
                    Biometrics: {voterVerified ? 'Face Verified ✓' : 'Unverified ✗'}
                  </button>
                </div>
              </div>

              {/* IoT Hardware Status Bar */}
              <div className="p-4 bg-slate-900 text-white rounded-xl">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    IoT Polling Station Grid Heartbeat
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">Sync: 200 OK</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {Object.entries(iotStatus).map(([station, status]) => (
                    <div key={station} className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                      <p className="font-medium text-slate-200 text-[11px]">{station}</p>
                      <p className="text-[10px] text-emerald-400 font-mono mt-0.5">{status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Ballot Casting */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                  Cast Secure Ballot (Interactive Simulation)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.keys(simulatedVoteCount).map((cand) => (
                    <button
                      key={cand}
                      disabled={!voterVerified}
                      onClick={() => castSampleVote(cand)}
                      className={`p-3 text-left border rounded-xl transition-all ${
                        voterVerified
                          ? 'border-slate-200 hover:border-slate-900 hover:shadow-xs active:scale-[0.98]'
                          : 'opacity-50 cursor-not-allowed border-slate-200 bg-slate-50'
                      }`}
                    >
                      <p className="text-xs font-semibold text-slate-900">{cand}</p>
                      <p className="text-xs text-slate-500 mt-1 font-mono">
                        Current: <strong className="text-slate-800">{simulatedVoteCount[cand]}</strong> votes
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-medium text-blue-600 underline">
                        + Cast Ballot
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart & Results Breakdown */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Tabulation Telemetry (Total: {totalVotes} Verified Ballots)
                  </h4>
                </div>
                <div className="space-y-3">
                  {Object.entries(simulatedVoteCount).map(([cand, count]) => {
                    const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
                    return (
                      <div key={cand} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-slate-800">{cand}</span>
                          <span className="text-slate-500 font-mono">
                            {count} votes ({percentage}%)
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-slate-900 transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                Core Module Implementation
              </h3>
              <p className="text-xs text-slate-600">
                Representative snippet illustrating the Python / OpenCV face detection verification method integrated with Django models:
              </p>

              <div className="bg-slate-950 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
                <pre>{`# VoteSync: voter_verification.py
import cv2
import numpy as np
from django.shortcuts import get_object_or_404
from .models import VoterRegistration, BallotAudit

def verify_voter_face(voter_id, live_frame_bytes):
    """
    Validates live camera feed against registered voter facial encodings.
    Prevents duplicate ballots and voter impersonation.
    """
    voter = get_object_or_404(VoterRegistration, voter_id=voter_id)
    if voter.has_voted:
        return {"status": "FAILED", "reason": "Ballot already submitted"}

    # Decode live image from IoT capture terminal
    np_arr = np.frombuffer(live_frame_bytes, np.uint8)
    frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect face region using cascade classifier
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5)

    if len(faces) != 1:
        return {"status": "FAILED", "reason": "Ensure single face is clearly visible"}

    # Compare against enrolled voter embedding
    match_confidence = compute_similarity(faces[0], voter.enrolled_face_vector)
    if match_confidence >= 0.85:
        return {"status": "AUTHENTICATED", "confidence": match_confidence}
    
    return {"status": "FAILED", "reason": "Biometric verification mismatch"}`}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50">
          <p className="text-xs text-slate-500">
            Source code & documentation available on GitHub: github.com/nandhu2-9
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close Project
          </button>
        </div>
      </div>
    </div>
  );
};
