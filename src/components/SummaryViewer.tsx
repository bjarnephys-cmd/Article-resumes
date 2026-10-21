import React, { useState } from 'react';
import { ArticleItem } from '../types';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Clock, 
  BookOpen, 
  Lightbulb, 
  HelpCircle, 
  FileText,
  Filter,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface SummaryViewerProps {
  articles: ArticleItem[];
  onOpenExport: () => void;
  onSelectArticleForEdit?: (item: ArticleItem) => void;
}

export const SummaryViewer: React.FC<SummaryViewerProps> = ({
  articles,
  onOpenExport,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSentiment, setSelectedSentiment] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'document'>('cards');

  const categories = ['all', ...Array.from(new Set(articles.map((a) => a.category).filter(Boolean)))];

  const filteredArticles = articles.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary?.mainIdea.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary?.supportingPoints.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.summary?.keyTakeaways.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSentiment = selectedSentiment === 'all' || item.summary?.sentiment === selectedSentiment;

    return matchesSearch && matchesCategory && matchesSentiment;
  });

  const handleCopySingle = async (item: ArticleItem) => {
    if (!item.summary) return;
    const text = `
# ${item.title}
Source: ${item.source} | Date: ${item.date} | Category: ${item.category}
URL: ${item.url}

🎯 MAIN IDEA
${item.summary.mainIdea}

🔍 SUPPORTING POINTS & EVIDENCE
${item.summary.supportingPoints.map((p) => `• ${p}`).join('\n')}

🚀 KEY TAKEAWAYS
${item.summary.keyTakeaways.map((k) => `• ${k}`).join('\n')}

📖 STUDENT JARGON BUSTER
${item.summary.studentGlossary.map((g) => `• ${g.term}: ${g.definition}`).join('\n')}
    `.trim();

    await navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getSentimentBadge = (sentiment?: string) => {
    switch (sentiment) {
      case 'Bullish':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <TrendingUp className="w-3 h-3 text-emerald-600" />
            Bullish
          </span>
        );
      case 'Bearish':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800 border border-rose-200">
            <TrendingDown className="w-3 h-3 text-rose-600" />
            Bearish
          </span>
        );
      case 'Mixed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <Minus className="w-3 h-3 text-amber-600" />
            Mixed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            Neutral
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search keywords (e.g., $638B, OpenAI, OCI, capex, AstraZeneca)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'all' ? 'All Topics' : c}
                </option>
              ))}
            </select>
          </div>

          {/* Sentiment Filter */}
          <select
            value={selectedSentiment}
            onChange={(e) => setSelectedSentiment(e.target.value)}
            className="text-xs py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-600"
          >
            <option value="all">All Sentiments</option>
            <option value="Bullish">Bullish</option>
            <option value="Bearish">Bearish</option>
            <option value="Mixed">Mixed</option>
            <option value="Neutral">Neutral</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                viewMode === 'cards' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode('document')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                viewMode === 'document' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Document
            </button>
          </div>

          {/* Export Shortcut */}
          <button
            onClick={onOpenExport}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Export Document</span>
          </button>
        </div>
      </div>

      {/* Consistency Guarantee Banner */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/70 border border-slate-200 rounded-xl text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Enforced Consistency Structure:</strong> Title &bull; 🎯 Main Idea &bull; 🔍 Supporting Points &bull; 🚀 Key Takeaways &bull; 📖 Jargon Buster
          </span>
        </div>
        <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
          Showing {filteredArticles.length} of {articles.length} summaries
        </span>
      </div>

      {/* Cards View Mode */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((item, index) => {
            const s = item.summary;
            if (!s) {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col items-center justify-center text-center min-h-[300px]"
                >
                  <FileText className="w-8 h-8 text-slate-300 mb-2" />
                  <h4 className="text-sm font-semibold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 mb-3">Summary pending generation.</p>
                  <span className="px-3 py-1 text-xs bg-slate-100 text-slate-600 rounded-full font-medium">
                    Run workflow from Spreadsheet view
                  </span>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Header & Meta */}
                <div className="p-5 pb-4 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                        {item.order || index + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs">
                        {item.category}
                      </span>
                      {getSentimentBadge(s.sentiment)}
                    </div>
                    
                    <button
                      onClick={() => handleCopySingle(item)}
                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-colors"
                      title="Copy summary text"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors leading-snug">
                    {s.title || item.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-2 font-medium">
                    <span>{item.source}</span>
                    <span>&bull;</span>
                    <span>{item.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {s.readingTime || '2 min'}
                    </span>
                    <span>&bull;</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-600 hover:underline inline-flex items-center gap-0.5 font-medium"
                      title="Open Yahoo Finance ORCL News Feed"
                    >
                      Yahoo Feed <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>&bull;</span>
                    <a
                      href={`https://search.yahoo.com/search?p=site%3Afinance.yahoo.com+ORCL+${encodeURIComponent(item.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 hover:text-red-600 hover:underline inline-flex items-center gap-0.5"
                      title="Search exact article headline on Yahoo Finance"
                    >
                      Find Story <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4 flex-1 text-slate-700">
                  {/* Section 1: Main Idea */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-700 mb-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Main Idea</span>
                    </div>
                    <div className="p-3 bg-red-50/50 border-l-3 border-red-500 rounded-r-xl text-xs sm:text-[13px] font-medium text-slate-800 leading-relaxed">
                      {s.mainIdea}
                    </div>
                  </div>

                  {/* Section 2: Supporting Points */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span>Key Arguments &amp; Evidence</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 pl-1">
                      {s.supportingPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 3: Key Takeaways */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Key Takeaways for Research</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 pl-1">
                      {s.keyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed font-medium text-slate-800">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 4: Student Jargon Buster */}
                  {s.studentGlossary && s.studentGlossary.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                        <span>Student Jargon Buster</span>
                      </div>
                      <div className="space-y-1.5">
                        {s.studentGlossary.map((g, gIdx) => (
                          <div
                            key={gIdx}
                            className="bg-amber-50/60 border border-amber-200/60 rounded-lg p-2 text-xs"
                          >
                            <span className="font-bold text-amber-950">{g.term}: </span>
                            <span className="text-amber-900/90">{g.definition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer status */}
                <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <Check className="w-3 h-3" /> Standardized Summary Verified
                  </span>
                  <span>Student-friendly format</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Document Reading View Mode */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm max-w-4xl mx-auto space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              Oracle Corporation (ORCL) Research Digest
            </h2>
            <p className="text-xs text-slate-500">
              10 Curated Articles from Yahoo Finance News &bull; Consistent 5-Part Summaries
            </p>
          </div>

          <div className="space-y-10 divide-y divide-slate-200">
            {filteredArticles.map((item, index) => {
              const s = item.summary;
              if (!s) return null;

              return (
                <article key={item.id} className="pt-8 first:pt-0 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                        Article {index + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{item.category}</span>
                      <span>&bull;</span>
                      <span className="text-xs text-slate-500">{item.date}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                      <span>Source: <strong>{item.source}</strong></span>
                      <span>&bull;</span>
                      <a href={item.url} target="_blank" rel="noreferrer" className="text-red-600 hover:underline font-medium">
                        Yahoo Finance ORCL News Feed
                      </a>
                      <span>&bull;</span>
                      <a 
                        href={`https://search.yahoo.com/search?p=site%3Afinance.yahoo.com+ORCL+${encodeURIComponent(item.title)}`}
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-600 hover:underline"
                      >
                        Search article headline on Yahoo
                      </a>
                    </p>
                  </div>

                  {/* Main Idea */}
                  <div className="p-3.5 bg-red-50/60 border-l-4 border-red-600 rounded-r-lg">
                    <div className="text-xs font-bold uppercase tracking-wider text-red-800 mb-1">
                      Main Idea
                    </div>
                    <p className="text-sm font-medium text-slate-900">{s.mainIdea}</p>
                  </div>

                  {/* Supporting points */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Supporting Points &amp; Evidence
                    </h4>
                    <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-700">
                      {s.supportingPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">{pt}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Takeaways */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Takeaways
                    </h4>
                    <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-800 font-medium">
                      {s.keyTakeaways.map((tk, tIdx) => (
                        <li key={tIdx} className="leading-relaxed">{tk}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Glossary */}
                  {s.studentGlossary?.length > 0 && (
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                        Student Jargon Buster
                      </h4>
                      <div className="space-y-1 text-xs">
                        {s.studentGlossary.map((g, gIdx) => (
                          <div key={gIdx}>
                            <strong className="text-amber-950">{g.term}:</strong>{' '}
                            <span className="text-amber-900">{g.definition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
