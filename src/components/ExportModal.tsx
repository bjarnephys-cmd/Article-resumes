import React, { useState } from 'react';
import { ArticleItem, MacroSynthesis } from '../types';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  Printer, 
  FileSpreadsheet, 
  Eye, 
  CheckCircle2, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { 
  downloadGoogleDocFile, 
  copyForGoogleDocs, 
  downloadMarkdownFile, 
  downloadCsvSpreadsheet, 
  generateMarkdownReport 
} from '../utils/exportUtils';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: ArticleItem[];
  synthesis: MacroSynthesis | null;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  articles,
  synthesis,
}) => {
  const [copiedGoogleDocs, setCopiedGoogleDocs] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<'info' | 'preview'>('info');

  if (!isOpen) return null;

  const handleCopyGoogleDocs = async () => {
    const success = await copyForGoogleDocs(articles, synthesis, 'Oracle Research Digest');
    if (success) {
      setCopiedGoogleDocs(true);
      setTimeout(() => setCopiedGoogleDocs(false), 2500);
    }
  };

  const handleCopyMarkdown = async () => {
    const md = generateMarkdownReport(articles, synthesis, 'Oracle Research Digest');
    await navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const completedCount = articles.filter((a) => a.summary).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Export &amp; Share Research Summaries</h3>
              <p className="text-xs text-slate-300">
                Shareable Google Docs, Word documents, Markdown, and Spreadsheets
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Status summary */}
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>
                <strong>{completedCount}</strong> of <strong>{articles.length}</strong> articles summarized and ready to export
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
              <span>Private session isolation</span>
            </div>
          </div>

          {/* Export Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. Google Doc Download */}
            <div className="p-4 rounded-2xl border-2 border-red-500/30 bg-red-50/20 hover:border-red-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-red-100 text-red-700 font-bold text-xs flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    Recommended
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">.doc / Google Doc</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Download Google Doc (.doc)
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Formatted document file with table of contents, executive synthesis, and student-friendly summaries. Opens seamlessly in Google Docs &amp; MS Word.
                </p>
              </div>

              <button
                onClick={() => downloadGoogleDocFile(articles, synthesis, 'Oracle_Research_Digest')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-700 text-white shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Google Doc File</span>
              </button>
            </div>

            {/* 2. Direct Clipboard Copy for Google Docs */}
            <div className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-blue-100 text-blue-700 font-bold text-xs flex items-center gap-1.5">
                    <Copy className="w-4 h-4" />
                    1-Click Clipboard
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Rich HTML</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Copy for Google Docs
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Copies styled headings, callouts, and bullet lists to your clipboard. Open a blank doc at <a href="https://docs.new" target="_blank" rel="noreferrer" className="text-blue-600 underline font-semibold">docs.new</a> and press Paste (Ctrl+V).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyGoogleDocs}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  {copiedGoogleDocs ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Formatted Doc</span>
                    </>
                  )}
                </button>

                <a
                  href="https://docs.new"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                  title="Open blank Google Doc in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 3. Markdown (.md) Download */}
            <div className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    Plain Markdown
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">.md</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Markdown Report (.md)
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Ideal for Notion, Obsidian, GitHub readmes, or team wikis. Contains full headers and bullet hierarchies.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => downloadMarkdownFile(articles, synthesis, 'Oracle_Research_Digest')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-900 text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .md</span>
                </button>
                <button
                  onClick={handleCopyMarkdown}
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                  title="Copy Raw Markdown"
                >
                  {copiedMarkdown ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 4. CSV Spreadsheet Download */}
            <div className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4" />
                    Spreadsheet
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">.csv</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Download CSV Spreadsheet
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Export all 10 rows with extracted main ideas, takeaways, and URLs for Google Sheets, Excel, or Airtable.
                </p>
              </div>

              <button
                onClick={() => downloadCsvSpreadsheet(articles)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Download .csv</span>
              </button>
            </div>

          </div>

          {/* Quick Print Button */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 py-1 px-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print or Save to PDF</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
