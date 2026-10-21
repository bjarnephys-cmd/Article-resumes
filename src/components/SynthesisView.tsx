import React from 'react';
import { MacroSynthesis } from '../types';
import { 
  Sparkles, 
  Lightbulb, 
  Compass, 
  RefreshCw, 
  TrendingUp, 
  Activity, 
  Cpu, 
  DollarSign, 
  Layers 
} from 'lucide-react';

interface SynthesisViewProps {
  synthesis: MacroSynthesis | null;
  onRegenerate: () => void;
  isSynthesizing: boolean;
  totalArticles: number;
}

export const SynthesisView: React.FC<SynthesisViewProps> = ({
  synthesis,
  onRegenerate,
  isSynthesizing,
  totalArticles,
}) => {
  if (!synthesis) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-xs">
        <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-3" />
        <h3 className="text-base font-bold text-slate-800 mb-1">
          Executive Macro Synthesis
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Synthesize key trends and overarching conclusions across all {totalArticles} Oracle articles.
        </p>
        <button
          onClick={onRegenerate}
          disabled={isSynthesizing}
          className="px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-xs"
        >
          {isSynthesizing ? 'Synthesizing Articles...' : 'Generate Macro Synthesis'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Automated Meta-Analysis
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Executive Macro Synthesis ({totalArticles} Articles)
                </h2>
              </div>
            </div>

            <button
              onClick={onRegenerate}
              disabled={isSynthesizing}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all backdrop-blur-xs active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSynthesizing ? 'animate-spin' : ''}`} />
              <span>{isSynthesizing ? 'Updating...' : 'Refresh Synthesis'}</span>
            </button>
          </div>

          {/* Overall Core Thesis */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 my-4">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>Overarching Research Thesis</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
              "{synthesis.overallThesis}"
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-[11px] text-slate-400 font-medium">OCI Growth Rate</div>
              <div className="text-lg font-bold text-emerald-400">+121% YoY</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-[11px] text-slate-400 font-medium">Contracted Backlog (RPO)</div>
              <div className="text-lg font-bold text-amber-300">$638 Billion</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-[11px] text-slate-400 font-medium">Financing Plans</div>
              <div className="text-lg font-bold text-red-300">$45B - $50B</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-[11px] text-slate-400 font-medium">Wall St Consensus</div>
              <div className="text-lg font-bold text-blue-300">84% Buy ($240)</div>
            </div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
      </div>

      {/* Core Themes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {synthesis.coreThemes.map((item, index) => {
          const icons = [Cpu, DollarSign, Layers];
          const colors = [
            'from-blue-500 to-indigo-600 text-blue-600 bg-blue-50 border-blue-200',
            'from-amber-500 to-orange-600 text-amber-600 bg-amber-50 border-amber-200',
            'from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-200',
          ];
          const Icon = icons[index % icons.length];
          const colorClass = colors[index % colors.length];

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 border ${colorClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {item.theme}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Pillar {index + 1} of 3
              </div>
            </div>
          );
        })}
      </div>

      {/* Strategic Outlook & Student Analogy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strategic Outlook */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            <Activity className="w-4 h-4 text-red-600" />
            <span>Strategic &amp; Investment Outlook</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {synthesis.strategicOutlook}
          </p>
          <div className="mt-4 p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 border border-slate-200/80">
            <strong>Key takeaway for your research project:</strong> Keep an eye on quarterly cash flow reports versus GPU lease revenue recognition.
          </div>
        </div>

        {/* Student-Friendly Metaphor */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Student-Friendly Analogy</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed italic">
              "{synthesis.studentTakeaways}"
            </p>
          </div>
          <div className="mt-4 text-[11px] text-amber-800/80">
            Helps quickly communicate high-finance balance sheet concepts in simple presentations.
          </div>
        </div>
      </div>
    </div>
  );
};
