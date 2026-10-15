import React, { useState } from 'react';
import { COUNSEL_AVATAR } from '../../data/mockData';

interface ClientPortalModalProps {
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'status' | 'vault' | 'messages'>('status');
  const [messages, setMessages] = useState([
    {
      sender: 'counsel',
      senderName: 'Victoria St. Clair, KC',
      time: 'Today, 10:45 AM',
      text: 'Good morning. Your Stage 2 Evidentiary Dossier for Tech Nation endorsement has been reviewed and passed our internal barrister audit. We are scheduling the biometric submission appointment for next Tuesday.',
    },
    {
      sender: 'user',
      senderName: 'Dr. Kian Farhadi (You)',
      time: 'Today, 11:12 AM',
      text: 'Thank you Victoria. I have uploaded the updated company patents and research publications directly into the encrypted vault.',
    },
    {
      sender: 'counsel',
      senderName: 'Victoria St. Clair, KC',
      time: 'Today, 11:30 AM',
      text: 'Received and verified. The checksum hash matches our SHA-256 ledger. We are compiling Exhibit C now.',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      sender: 'user',
      senderName: 'Dr. Kian Farhadi (You)',
      time: 'Just now',
      text: inputText.trim(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Simulate counsel response after short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'counsel',
          senderName: 'Advisory Desk (Senior Counsel)',
          time: 'Just now',
          text: 'Thank you for your update. Your message has been logged in your confidential case file #AGM-2026-8812. Counsel will review by end of day.',
        },
      ]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00152a]/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-white rounded-2xl shadow-2xl border border-[#e8edff] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#102a43] px-6 py-4 text-white flex items-center justify-between border-b border-[#4a607a]/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00152a] flex items-center justify-center text-[#ebc071]">
              <span className="material-symbols-outlined text-[20px]">shield</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-bold text-white">Aegis Sovereign Vault & Portal</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  AES-256 Live
                </span>
              </div>
              <span className="text-[12px] text-[#7a92b0]">Client ID: #AGM-2026-8812 · Dr. Kian Farhadi</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close Portal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Sub-bar tabs */}
        <div className="flex items-center justify-between px-6 bg-[#f1f3ff] border-b border-[#e8edff]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('status')}
              className={`px-4 py-3 text-[13px] font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'status'
                  ? 'border-[#00152a] text-[#00152a]'
                  : 'border-transparent text-[#4a607a] hover:text-[#00152a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">timeline</span>
              <span>Case Status & Milestones</span>
            </button>

            <button
              onClick={() => setActiveTab('vault')}
              className={`px-4 py-3 text-[13px] font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'vault'
                  ? 'border-[#00152a] text-[#00152a]'
                  : 'border-transparent text-[#4a607a] hover:text-[#00152a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">folder_special</span>
              <span>Encrypted Vault (7 Documents)</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-3 text-[13px] font-semibold flex items-center gap-1.5 border-b-2 transition-colors relative ${
                activeTab === 'messages'
                  ? 'border-[#00152a] text-[#00152a]'
                  : 'border-transparent text-[#4a607a] hover:text-[#00152a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">forum</span>
              <span>Counsel Channel</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[12px] text-[#4a607a]">
            <span>Lead Counsel: Victoria St. Clair, KC</span>
          </div>
        </div>

        {/* Tab 1: Status & Milestones */}
        {activeTab === 'status' && (
          <div className="p-6 overflow-y-auto flex flex-col gap-6">
            {/* Active Petition Card */}
            <div className="p-5 rounded-xl bg-[#f9f9ff] border border-[#e8edff] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#4a607a] uppercase tracking-wider block">Active Docket</span>
                <h3 className="font-display text-[18px] font-bold text-[#00152a] mt-0.5">
                  UK Global Talent Visa (Tech Nation AI & Algorithms Stream)
                </h3>
                <p className="text-[13px] text-[#43474d] mt-1">
                  Lodged with Home Office Digital Endorsement Unit · Reference: #UKVI-LON-99214
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[12px] font-bold">
                  On-Track: Stage 3 Active
                </span>
                <span className="text-[11px] text-[#4a607a] mt-1">Estimated Completion: 21 Days</span>
              </div>
            </div>

            {/* 4-Stage Progress Tracker */}
            <div>
              <h4 className="text-[13px] font-bold text-[#00152a] uppercase tracking-wider mb-4">
                Procedural Milestone Progression
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-bold text-emerald-800">Stage 01</span>
                      <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
                    </div>
                    <span className="font-bold text-[#00152a] text-[14px] block">Statutory Audit</span>
                    <p className="text-[12px] text-[#43474d] mt-1">Eligibility, Points & Risk cleared</p>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold mt-3">Completed 12 Oct</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-bold text-emerald-800">Stage 02</span>
                      <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
                    </div>
                    <span className="font-bold text-[#00152a] text-[14px] block">Evidence Curation</span>
                    <p className="text-[12px] text-[#43474d] mt-1">10 Objective exhibits & letters verified</p>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold mt-3">Completed 14 Oct</span>
                </div>

                <div className="p-4 rounded-xl bg-[#e8edff] border-2 border-[#102a43] flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-bold text-[#102a43]">Stage 03 (Current)</span>
                      <span className="material-symbols-outlined text-[18px] text-[#102a43] animate-spin">
                        progress_activity
                      </span>
                    </div>
                    <span className="font-bold text-[#00152a] text-[14px] block">Endorsement Lodging</span>
                    <p className="text-[12px] text-[#43474d] mt-1">Tech Nation peer board review underway</p>
                  </div>
                  <span className="text-[11px] text-[#102a43] font-bold mt-3">Active In Review</span>
                </div>

                <div className="p-4 rounded-xl bg-[#f9f9ff] border border-[#e8edff] opacity-70 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-medium text-[#4a607a]">Stage 04</span>
                      <span className="material-symbols-outlined text-[18px] text-[#c3c6ce]">pending</span>
                    </div>
                    <span className="font-bold text-[#00152a] text-[14px] block">Visa Grant & Landing</span>
                    <p className="text-[12px] text-[#43474d] mt-1">Biometrics, BRP passport vignette issuance</p>
                  </div>
                  <span className="text-[11px] text-[#4a607a] font-medium mt-3">Scheduled Post-Endorsement</span>
                </div>
              </div>
            </div>

            {/* Counsel Assigned Dossier Team */}
            <div className="p-4 rounded-xl bg-[#f1f3ff] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={COUNSEL_AVATAR}
                  alt="Counsel"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#102a43]"
                />
                <div>
                  <h4 className="font-bold text-[#00152a] text-[14px]">Victoria St. Clair, KC</h4>
                  <p className="text-[12px] text-[#4a607a]">Managing Partner · SRA Admitted #612948</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('messages')}
                className="px-3.5 py-1.5 rounded-lg bg-[#102a43] text-white text-[12px] font-semibold hover:bg-[#00152a] transition-colors"
              >
                Send Secure Message
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Encrypted Vault */}
        {activeTab === 'vault' && (
          <div className="p-6 overflow-y-auto flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-[#00152a] text-[15px]">Client Biometric & Evidentiary Vault</h4>
                <p className="text-[12px] text-[#4a607a]">Encrypted under client-side keys and stored in Swiss compliance datacenters.</p>
              </div>
              <button
                onClick={() => alert('New document upload channel open. File encrypted with client key.')}
                className="px-3.5 py-2 rounded-lg bg-[#102a43] text-white text-[12px] font-semibold flex items-center gap-1.5 hover:bg-[#00152a] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">upload_file</span>
                <span>Upload Document</span>
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { name: 'Dr_Kian_Farhadi_Passport_Scans_Certified.pdf', size: '4.2 MB', status: 'Verified by Solicitor', date: '11 Oct 2026' },
                { name: 'Tech_Nation_Letter_of_Recommendation_Prof_Dawson.pdf', size: '1.8 MB', status: 'Verified by Solicitor', date: '12 Oct 2026' },
                { name: 'AI_Research_Citation_Audit_Stanford_IEEE.pdf', size: '8.4 MB', status: 'Verified by Solicitor', date: '12 Oct 2026' },
                { name: 'Evidence_Exhibit_C_Patent_Registry_Certificates.pdf', size: '3.1 MB', status: 'Verified by Solicitor', date: '13 Oct 2026' },
                { name: 'Aegis_Signed_Representation_Retainer_Agreement.pdf', size: '1.1 MB', status: 'Legally Executed', date: '10 Oct 2026' },
              ].map((doc, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#f9f9ff] border border-[#e8edff] flex items-center justify-between hover:bg-[#f1f3ff] transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[24px] text-[#49607c]">description</span>
                    <div>
                      <span className="font-medium text-[#00152a] text-[13px] block">{doc.name}</span>
                      <span className="text-[11px] text-[#4a607a]">{doc.size} · Uploaded {doc.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                      {doc.status}
                    </span>
                    <button
                      onClick={() => alert(`Simulated download of ${doc.name} from encrypted repository.`)}
                      className="p-1 text-[#4a607a] hover:text-[#00152a]"
                      title="Download"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Counsel Messaging Channel */}
        {activeTab === 'messages' && (
          <div className="flex flex-col flex-1 h-[500px]">
            {/* Messages Thread */}
            <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-4 bg-[#f9f9ff]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col max-w-[80%] ${
                    m.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#00152a]">{m.senderName}</span>
                    <span className="text-[10px] text-[#74777e]">{m.time}</span>
                  </div>
                  <div
                    className={`p-3.5 rounded-2xl text-[13px] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#102a43] text-white rounded-br-none'
                        : 'bg-white text-[#041b3c] border border-[#e8edff] shadow-sm rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-[#e8edff] flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type privileged message to your appointed partner..."
                className="flex-1 h-11 px-4 rounded-lg bg-[#f1f3ff] text-[#00152a] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-lg bg-[#102a43] hover:bg-[#00152a] text-white font-semibold text-[13px] flex items-center gap-1.5 transition-colors"
              >
                <span>Send</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
