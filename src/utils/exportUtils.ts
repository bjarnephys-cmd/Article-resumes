import { ArticleItem, MacroSynthesis } from '../types';

/**
 * Builds standard Markdown document for articles
 */
export function generateMarkdownReport(
  articles: ArticleItem[],
  synthesis?: MacroSynthesis | null,
  projectName: string = 'Oracle Research Digest'
): string {
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let md = `# ${projectName}\n`;
  md += `**Automated AI Research Summary Report**\n`;
  md += `**Date:** ${dateStr} | **Topic:** Oracle Corporation (NYSE: ORCL) News Analysis\n`;
  md += `**Source Dataset:** Yahoo Finance News (10 Core Coverage Articles)\n\n`;
  md += `---\n\n`;

  if (synthesis) {
    md += `## 📊 Executive Macro Synthesis\n\n`;
    md += `### Overall Thesis\n${synthesis.overallThesis}\n\n`;
    md += `### Core Strategic Themes\n`;
    synthesis.coreThemes.forEach((t) => {
      md += `- **${t.theme}:** ${t.detail}\n`;
    });
    md += `\n### Strategic Outlook\n${synthesis.strategicOutlook}\n\n`;
    md += `### 💡 Student-Friendly Metaphor\n> ${synthesis.studentTakeaways}\n\n`;
    md += `---\n\n`;
  }

  md += `## 📚 Article Summaries (${articles.length} Items)\n\n`;

  articles.forEach((item, index) => {
    const s = item.summary;
    md += `### ${index + 1}. ${item.title}\n`;
    md += `- **Source:** ${item.source || 'Yahoo Finance'} | **Date:** ${item.date || 'Recent'}\n`;
    md += `- **Category:** ${item.category || 'General'} | **Sentiment:** ${s?.sentiment || 'Neutral'}\n`;
    md += `- **Links:** [Yahoo Finance ORCL News](${item.url}) | [Search Article on Yahoo](https://search.yahoo.com/search?p=site%3Afinance.yahoo.com+ORCL+${encodeURIComponent(item.title)})\n\n`;

    if (s) {
      md += `#### 🎯 Main Idea\n${s.mainIdea}\n\n`;
      md += `#### 🔍 Supporting Points & Evidence\n`;
      s.supportingPoints.forEach((point) => {
        md += `- ${point}\n`;
      });
      md += `\n`;

      md += `#### 🚀 Key Takeaways\n`;
      s.keyTakeaways.forEach((takeaway) => {
        md += `- ${takeaway}\n`;
      });
      md += `\n`;

      if (s.studentGlossary && s.studentGlossary.length > 0) {
        md += `#### 📖 Student Jargon Buster\n`;
        s.studentGlossary.forEach((g) => {
          md += `- **${g.term}:** ${g.definition}\n`;
        });
        md += `\n`;
      }
    } else {
      md += `*Summary pending or in progress.*\n\n`;
    }

    md += `---\n\n`;
  });

  md += `\n*Generated with Research Digest AI Workflow. Sensitive info isolation enforced.*`;
  return md;
}

/**
 * Builds Rich HTML Document that can be saved as .doc (compatible with Google Docs and MS Word)
 * or copied directly to clipboard for instant pasting into docs.google.com
 */
export function generateHtmlDocument(
  articles: ArticleItem[],
  synthesis?: MacroSynthesis | null,
  projectName: string = 'Oracle Research Digest'
): string {
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${projectName}</title>
  <style>
    body {
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      line-height: 1.6;
      color: #1a202c;
      margin: 40px auto;
      max-width: 850px;
      padding: 0 20px;
    }
    h1 {
      color: #1a365d;
      font-size: 26pt;
      margin-bottom: 4px;
      border-bottom: 2px solid #2b6cb0;
      padding-bottom: 12px;
    }
    .subtitle {
      color: #4a5568;
      font-size: 11pt;
      margin-bottom: 24px;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: bold;
      background: #edf2f7;
      color: #2d3748;
      margin-right: 6px;
    }
    .synthesis-box {
      background: #f7fafc;
      border-left: 5px solid #3182ce;
      padding: 16px 20px;
      margin: 24px 0;
      border-radius: 0 6px 6px 0;
    }
    .metaphor-box {
      background: #feebc8;
      border-left: 5px solid #dd6b20;
      padding: 12px 16px;
      margin-top: 14px;
      font-style: italic;
    }
    h2 {
      color: #2b6cb0;
      font-size: 18pt;
      margin-top: 32px;
      margin-bottom: 8px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 6px;
    }
    h3 {
      color: #2d3748;
      font-size: 14pt;
      margin-top: 24px;
      margin-bottom: 6px;
    }
    h4 {
      color: #4a5568;
      font-size: 11pt;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 14px;
      margin-bottom: 6px;
    }
    .article-card {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px dashed #cbd5e0;
      page-break-inside: avoid;
    }
    .article-meta {
      font-size: 10pt;
      color: #718096;
      margin-bottom: 10px;
    }
    .main-idea {
      font-size: 11pt;
      font-weight: 500;
      background: #ebf8ff;
      border-left: 4px solid #3182ce;
      padding: 8px 12px;
      margin: 8px 0 12px 0;
    }
    ul {
      margin: 6px 0 12px 20px;
      padding-left: 0;
    }
    li {
      margin-bottom: 4px;
      font-size: 10.5pt;
    }
    .glossary-item {
      font-size: 10pt;
      margin-bottom: 4px;
    }
    .glossary-item strong {
      color: #2c5282;
    }
    footer {
      margin-top: 40px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
      font-size: 9pt;
      color: #a0aec0;
      text-align: center;
    }
  </style>
</head>
<body>

  <h1>${projectName}</h1>
  <div class="subtitle">
    <strong>Structured AI Research Briefing</strong> &bull; Generated: ${dateStr}<br/>
    Focus: Oracle Corporation (NYSE: ORCL) News &bull; Dataset: Yahoo Finance News Coverage
  </div>

  ${
    synthesis
      ? `
  <div class="synthesis-box">
    <h2 style="margin-top:0; border-bottom:none;">📊 Executive Macro Synthesis</h2>
    <p><strong>Core Thesis:</strong> ${synthesis.overallThesis}</p>
    
    <h4 style="margin-top:10px;">Strategic Pillars</h4>
    <ul>
      ${synthesis.coreThemes.map((t) => `<li><strong>${t.theme}:</strong> ${t.detail}</li>`).join('')}
    </ul>
    
    <p><strong>Outlook:</strong> ${synthesis.strategicOutlook}</p>
    
    <div class="metaphor-box">
      <strong>💡 Student Takeaway:</strong> ${synthesis.studentTakeaways}
    </div>
  </div>
  `
      : ''
  }

  <h2>📚 Curated Article Summaries (${articles.length} Items)</h2>

  ${articles
    .map(
      (item, idx) => `
    <div class="article-card">
      <h3>${idx + 1}. ${item.title}</h3>
      <div class="article-meta">
        <span class="badge">${item.category || 'News'}</span>
        <span class="badge" style="background:#e2e8f0;">Sentiment: ${item.summary?.sentiment || 'Neutral'}</span>
        <span>Source: <strong>${item.source}</strong></span> &bull;
        <span>Published: ${item.date}</span> &bull;
        <a href="${item.url}" target="_blank" style="color:#3182ce; text-decoration:none;">Yahoo Finance ORCL Feed</a> &bull;
        <a href="https://search.yahoo.com/search?p=site%3Afinance.yahoo.com+ORCL+${encodeURIComponent(item.title)}" target="_blank" style="color:#4a5568; text-decoration:none;">Find Story on Yahoo</a>
      </div>

      ${
        item.summary
          ? `
        <h4>🎯 Main Idea</h4>
        <div class="main-idea">
          ${item.summary.mainIdea}
        </div>

        <h4>🔍 Supporting Points & Evidence</h4>
        <ul>
          ${item.summary.supportingPoints.map((p) => `<li>${p}</li>`).join('')}
        </ul>

        <h4>🚀 Key Takeaways & Research Implications</h4>
        <ul>
          ${item.summary.keyTakeaways.map((k) => `<li>${k}</li>`).join('')}
        </ul>

        ${
          item.summary.studentGlossary && item.summary.studentGlossary.length > 0
            ? `
          <h4>📖 Student Jargon Buster</h4>
          <ul>
            ${item.summary.studentGlossary
              .map(
                (g) => `
              <li class="glossary-item"><strong>${g.term}:</strong> ${g.definition}</li>
            `
              )
              .join('')}
          </ul>
        `
            : ''
        }
      `
          : '<p><em>Summary pending generation.</em></p>'
      }
    </div>
  `
    )
    .join('')}

  <footer>
    Generated automatically by AI-Assisted Research Digest Workflow &bull; Student-Friendly Architecture &bull; Sensitive Data Isolation Enforced
  </footer>

</body>
</html>
  `.trim();
}

/**
 * Copies rich formatted HTML to user clipboard so they can paste directly into Google Docs.
 */
export async function copyForGoogleDocs(
  articles: ArticleItem[],
  synthesis?: MacroSynthesis | null,
  projectName?: string
): Promise<boolean> {
  const htmlContent = generateHtmlDocument(articles, synthesis, projectName);
  const plainMarkdown = generateMarkdownReport(articles, synthesis, projectName);

  try {
    if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
      const blobHtml = new Blob([htmlContent], { type: 'text/html' });
      const blobText = new Blob([plainMarkdown], { type: 'text/plain' });
      const item = new ClipboardItem({
        'text/html': blobHtml,
        'text/plain': blobText,
      });
      await navigator.clipboard.write([item]);
      return true;
    } else {
      await navigator.clipboard.writeText(plainMarkdown);
      return true;
    }
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    // Fallback to text copy
    try {
      await navigator.clipboard.writeText(plainMarkdown);
      return true;
    } catch (e) {
      return false;
    }
  }
}

/**
 * Triggers download of Google Doc / Word compatible file (.doc)
 */
export function downloadGoogleDocFile(
  articles: ArticleItem[],
  synthesis?: MacroSynthesis | null,
  projectName: string = 'Oracle_Research_Digest'
): void {
  const html = generateHtmlDocument(articles, synthesis, projectName);
  const blob = new Blob(['\ufeff', html], {
    type: 'application/msword',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${projectName.toLowerCase().replace(/\s+/g, '_')}_google_doc.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Triggers download of Markdown file (.md)
 */
export function downloadMarkdownFile(
  articles: ArticleItem[],
  synthesis?: MacroSynthesis | null,
  projectName: string = 'Oracle_Research_Digest'
): void {
  const md = generateMarkdownReport(articles, synthesis, projectName);
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${projectName.toLowerCase().replace(/\s+/g, '_')}.md`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Triggers download of CSV spreadsheet
 */
export function downloadCsvSpreadsheet(articles: ArticleItem[]): void {
  const headers = [
    'Order',
    'Title',
    'URL',
    'Source',
    'Date',
    'Category',
    'Sentiment',
    'Main Idea',
    'Key Takeaways',
    'Supporting Points',
    'Status',
  ];

  const rows = articles.map((a) => [
    a.order,
    `"${(a.title || '').replace(/"/g, '""')}"`,
    `"${(a.url || '').replace(/"/g, '""')}"`,
    `"${(a.source || '').replace(/"/g, '""')}"`,
    `"${(a.date || '').replace(/"/g, '""')}"`,
    `"${(a.category || '').replace(/"/g, '""')}"`,
    `"${(a.summary?.sentiment || 'Neutral').replace(/"/g, '""')}"`,
    `"${(a.summary?.mainIdea || '').replace(/"/g, '""')}"`,
    `"${(a.summary?.keyTakeaways?.join(' | ') || '').replace(/"/g, '""')}"`,
    `"${(a.summary?.supportingPoints?.join(' | ') || '').replace(/"/g, '""')}"`,
    `"${a.status}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `oracle_news_summaries_spreadsheet.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
