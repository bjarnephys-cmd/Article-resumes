import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  ExternalLink, 
  RotateCcw,
  SlidersHorizontal,
  Table
} from 'lucide-react';

interface HeaderProps {
  onOpenExport: () => void;
  onOpenSettings: () => void;
  onResetData: () => void;
  completedCount: number;
  totalCount: number;
  activeTab: 'spreadsheet' | 'summaries' | 'synthesis';
  setActiveTab: (tab: 'spreadsheet' | 'summaries' | 'synthesis') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenExport,
  onOpenSettings,
  onResetData,
  completedCount,
  totalCount,
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Project Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-950/40">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  Research Digest AI
                </span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-800/60">
                  ORCL News Workflow
                </span>
              </div>
              <p className="text-xs text-slate-400">
                10 First Articles &bull; Automated Structured Summaries &bull; Google Docs Export
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <div className="hidden md:flex items-center p-1 bg-slate-800/80 rounded-xl border border-slate-700/70">
            <button
              onClick={() => setActiveTab('spreadsheet')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'spreadsheet'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              Spreadsheet Input ({totalCount})
            </button>
            <button
              onClick={() => setActiveTab('summaries')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'summaries'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Structured Summaries ({completedCount}/{totalCount})
            </button>
            <button
              onClick={() => setActiveTab('synthesis')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'synthesis'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Executive Synthesis
            </button>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Privacy Badge */}
            <div 
              title="Constraint Enforced: Sensitive data isolation. All summaries stay within your session."
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-medium text-[11px]">Private &amp; Student-Friendly</span>
            </div>

            {/* Quick Link to Google Docs */}
            <a
              href="https://docs.new"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              title="Open a blank Google Doc to paste summaries into"
            >
              <span>docs.new</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* Workflow Config Settings */}
            <button
              onClick={onOpenSettings}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              title="Configure AI Prompt & Consistency Rules"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            {/* Reset / Reload Data */}
            <button
              onClick={onResetData}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              title="Reset to 10 Yahoo Finance Oracle Articles"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Export Hub Button */}
            <button
              onClick={onOpenExport}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-lg shadow-sm shadow-red-900/30 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Hub</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
