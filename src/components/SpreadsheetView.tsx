import React, { useState } from 'react';
import { ArticleItem } from '../types';
import { 
  Play, 
  Plus, 
  Trash2, 
  ExternalLink, 
  CheckSquare, 
  Square, 
  FileSpreadsheet, 
  Upload, 
  Download, 
  RefreshCw, 
  Sparkles,
  Edit2,
  Check,
  X,
  AlertCircle,
  Eye
} from 'lucide-react';

interface SpreadsheetViewProps {
  articles: ArticleItem[];
  onUpdateArticle: (updated: ArticleItem) => void;
  onAddArticle: (article: Partial<ArticleItem>) => void;
  onDeleteArticle: (id: string) => void;
  onToggleSelect: (id: string) => void;
  onSelectAll: (select: boolean) => void;
  onRunBatch: (articleIds: string[]) => void;
  onRunSingle: (article: ArticleItem) => void;
  onViewSummary: (article: ArticleItem) => void;
  isProcessing: boolean;
  onResetDefault: () => void;
}

export const SpreadsheetView: React.FC<SpreadsheetViewProps> = ({
  articles,
  onUpdateArticle,
  onAddArticle,
  onDeleteArticle,
  onToggleSelect,
  onSelectAll,
  onRunBatch,
  onRunSingle,
  onViewSummary,
  isProcessing,
  onResetDefault,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [editCategory, setEditCategory] = useState('');

  // Paste / Import modal state
  const [showPasteModal, setShowPasteModal] = useState(false);
  const [pasteRawText, setPasteRawText] = useState('');

  // Add row modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newCategory, setNewCategory] = useState('Cloud & AI');
  const [newContent, setNewContent] = useState('');

  const selectedCount = articles.filter((a) => a.selected).length;
  const allSelected = articles.length > 0 && selectedCount === articles.length;

  const startEditing = (item: ArticleItem) => {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditUrl(item.url);
    setEditCategory(item.category);
  };

  const saveEditing = (item: ArticleItem) => {
    onUpdateArticle({
      ...item,
      title: editTitle.trim() || item.title,
      url: editUrl.trim() || item.url,
      category: editCategory.trim() || item.category,
    });
    setEditingId(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const handlePasteImport = () => {
    if (!pasteRawText.trim()) return;

    const lines = pasteRawText.split(/\r?\n/).filter((l) => l.trim().length > 0);
    lines.forEach((line, idx) => {
      // Split by tab (Excel/Google Sheets) or comma
      const parts = line.includes('\t') ? line.split('\t') : line.split(',');
      const title = parts[0]?.trim() || `Pasted Article ${articles.length + idx + 1}`;
      const url = parts[1]?.trim() || (line.startsWith('http') ? line.trim() : 'https://finance.yahoo.com/quote/ORCL/news/');
      const category = parts[2]?.trim() || 'General';

      onAddArticle({
        title,
        url,
        category,
        source: 'Custom / Yahoo Finance',
        date: 'Recent',
        content: title,
        status: 'idle',
      });
    });

    setPasteRawText('');
    setShowPasteModal(false);
  };

  const handleCreateArticle = () => {
    if (!newTitle.trim()) return;
    onAddArticle({
      title: newTitle.trim(),
      url: newUrl.trim() || 'https://finance.yahoo.com/quote/ORCL/news/',
      category: newCategory,
      source: 'Yahoo Finance News',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      content: newContent.trim() || newTitle.trim(),
      status: 'idle',
    });
    setNewTitle('');
    setNewUrl('');
    setNewContent('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner & Dataset Info */}
      <div className="bg-gradient-to-r from-red-50 via-slate-50 to-amber-50 border border-red-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-600 text-white shadow-xs">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Spreadsheet Input Grid
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Source: <a href="https://finance.yahoo.com/quote/ORCL/news/" target="_blank" rel="noreferrer" className="text-red-700 hover:underline font-semibold inline-flex items-center gap-0.5">finance.yahoo.com/quote/ORCL/news/ <ExternalLink className="w-3 h-3" /></a>
            </span>
          </div>
          <p className="text-sm text-slate-700 font-medium">
            10 first articles about Oracle (ORCL) loaded as a structured spreadsheet. Edit any row, paste custom links, or trigger batch AI summarization.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => onRunBatch(articles.filter((a) => a.selected).map((a) => a.id))}
            disabled={isProcessing || selectedCount === 0}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all ${
              isProcessing || selectedCount === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 text-white active:scale-95 shadow-red-900/20'
            }`}
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Processing Workflow...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run AI on Selected ({selectedCount})</span>
              </>
            )}
          </button>

          <button
            onClick={() => onRunBatch(articles.map((a) => a.id))}
            disabled={isProcessing || articles.length === 0}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden md:inline">Run All 10</span>
          </button>
        </div>
      </div>

      {/* Spreadsheet Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectAll(!allSelected)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {allSelected ? (
              <CheckSquare className="w-4 h-4 text-red-600" />
            ) : (
              <Square className="w-4 h-4 text-slate-400" />
            )}
            <span>{allSelected ? 'Deselect All' : 'Select All'}</span>
          </button>

          <span className="text-xs text-slate-400">|</span>
          <span className="text-xs text-slate-600">
            <strong>{selectedCount}</strong> of <strong>{articles.length}</strong> rows selected
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-slate-600" />
            <span>Add Row</span>
          </button>

          <button
            onClick={() => setShowPasteModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-slate-600" />
            <span>Paste Links / CSV</span>
          </button>

          <button
            onClick={onResetDefault}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            title="Reload default 10 Yahoo Finance Oracle articles"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Spreadsheet Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-3 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => onSelectAll(e.target.checked)}
                    className="rounded border-slate-300 text-red-600 focus:ring-red-500 cursor-pointer"
                  />
                </th>
                <th className="py-3 px-3 w-12 text-center">#</th>
                <th className="py-3 px-4 min-w-[280px]">Article Title &amp; Topic</th>
                <th className="py-3 px-4 min-w-[220px]">Yahoo Finance URL</th>
                <th className="py-3 px-3 w-28">Category</th>
                <th className="py-3 px-3 w-24">Date</th>
                <th className="py-3 px-3 w-32 text-center">Workflow Status</th>
                <th className="py-3 px-4 w-32 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {articles.map((item, index) => {
                const isEditing = editingId === item.id;
                const isItemProcessing = item.status === 'processing';
                const isCompleted = item.status === 'completed';

                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-50/80 transition-colors ${
                      item.selected ? 'bg-red-50/30' : ''
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-3 px-3 text-center">
                      <input
                        type="checkbox"
                        checked={!!item.selected}
                        onChange={() => onToggleSelect(item.id)}
                        className="rounded border-slate-300 text-red-600 focus:ring-red-500 cursor-pointer"
                      />
                    </td>

                    {/* Order # */}
                    <td className="py-3 px-3 text-center font-mono text-slate-400 font-medium">
                      {index + 1}
                    </td>

                    {/* Title */}
                    <td className="py-3 px-4 font-medium text-slate-900">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                      ) : (
                        <div className="flex flex-col">
                          <span className="line-clamp-2 leading-relaxed">{item.title}</span>
                          <span className="text-[10px] text-slate-400 font-normal mt-0.5">
                            {item.source}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* URL */}
                    <td className="py-3 px-4 font-mono text-[11px] text-slate-500">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editUrl}
                          onChange={(e) => setEditUrl(e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-600 hover:text-red-700 truncate block max-w-[200px] hover:underline"
                            title={item.url}
                          >
                            {item.url}
                          </a>
                          <a
                            href={`https://search.yahoo.com/search?p=site%3Afinance.yahoo.com+ORCL+${encodeURIComponent(item.title)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1 rounded text-red-600 hover:bg-red-50 text-[10px] font-sans font-semibold shrink-0 border border-red-200"
                            title="Find this specific article headline on Yahoo Finance"
                          >
                            Search Yahoo
                          </a>
                        </div>
                      )}
                    </td>

                    {/* Category */}
                    <td className="py-3 px-3">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editCategory}
                          onChange={(e) => setEditCategory(e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {item.category || 'General'}
                        </span>
                      )}
                    </td>

                    {/* Date */}
                    <td className="py-3 px-3 text-slate-500 whitespace-nowrap text-[11px]">
                      {item.date}
                    </td>

                    {/* Status */}
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      {isItemProcessing ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200 animate-pulse">
                          <RefreshCw className="w-3 h-3 animate-spin" />
                          Summarizing...
                        </span>
                      ) : isCompleted ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Check className="w-3 h-3" />
                          Ready
                        </span>
                      ) : item.status === 'error' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                          <AlertCircle className="w-3 h-3" />
                          Error
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                          Queued
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        {isEditing ? (
                          <>
                            <button
                              onClick={() => saveEditing(item)}
                              className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                              title="Save Changes"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="p-1 text-slate-400 hover:bg-slate-100 rounded"
                              title="Cancel"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            {isCompleted && (
                              <button
                                onClick={() => onViewSummary(item)}
                                className="p-1.5 text-slate-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                title="View Structured Summary"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <button
                              onClick={() => onRunSingle(item)}
                              disabled={isProcessing}
                              className="p-1.5 text-slate-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                              title="Summarize this article"
                            >
                              <Play className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => startEditing(item)}
                              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                              title="Edit Row"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => onDeleteArticle(item.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              title="Delete Row"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Paste Links / Table Modal */}
      {showPasteModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Upload className="w-4 h-4 text-red-600" />
                Paste Spreadsheet Rows or Links
              </h3>
              <button
                onClick={() => setShowPasteModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 mb-3">
              Paste rows from Google Sheets / Excel (Tab or Comma separated) or simply paste URLs line by line.
            </p>

            <textarea
              rows={6}
              value={pasteRawText}
              onChange={(e) => setPasteRawText(e.target.value)}
              placeholder={`Example:\nArticle Title 1\thttps://finance.yahoo.com/news/... \tCloud & AI\nArticle Title 2\thttps://finance.yahoo.com/news/... \tFinancials`}
              className="w-full text-xs font-mono p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPasteModal(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handlePasteImport}
                disabled={!pasteRawText.trim()}
                className="px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg disabled:opacity-50"
              >
                Import Rows
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Single Row Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Plus className="w-4 h-4 text-red-600" />
                Add Article to Spreadsheet
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Oracle Partners With Next-Gen AI Startup"
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Yahoo Finance or Web URL
                </label>
                <input
                  type="text"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://finance.yahoo.com/news/..."
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  <option value="Cloud & AI">Cloud &amp; AI</option>
                  <option value="Financials & Valuation">Financials &amp; Valuation</option>
                  <option value="Infrastructure & Energy">Infrastructure &amp; Energy</option>
                  <option value="Healthcare & Pharma">Healthcare &amp; Pharma</option>
                  <option value="Enterprise Software">Enterprise Software</option>
                  <option value="Risk & Strategy">Risk &amp; Strategy</option>
                  <option value="General News">General News</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Article Excerpt or Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Paste excerpt, press release, or key points..."
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-5">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateArticle}
                disabled={!newTitle.trim()}
                className="px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg disabled:opacity-50"
              >
                Add Row
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
