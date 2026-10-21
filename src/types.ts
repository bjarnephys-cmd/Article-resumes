export interface StudentGlossaryItem {
  term: string;
  definition: string;
}

export interface ArticleSummary {
  title: string;
  source: string;
  category: string;
  sentiment: 'Bullish' | 'Bearish' | 'Neutral' | 'Mixed';
  readingTime: string;
  mainIdea: string;
  supportingPoints: string[];
  keyTakeaways: string[];
  studentGlossary: StudentGlossaryItem[];
}

export interface ArticleItem {
  id: string;
  order: number;
  title: string;
  url: string;
  source: string;
  date: string;
  category: string;
  content: string;
  status: 'idle' | 'queued' | 'processing' | 'completed' | 'error';
  errorMessage?: string;
  summary?: ArticleSummary;
  selected?: boolean;
}

export interface MacroSynthesis {
  overallThesis: string;
  coreThemes: {
    theme: string;
    detail: string;
  }[];
  strategicOutlook: string;
  studentTakeaways: string;
}

export interface WorkflowConfig {
  audienceLevel: 'student-friendly' | 'undergraduate' | 'executive';
  summaryLength: 'concise' | 'balanced' | 'comprehensive';
  includeGlossary: boolean;
  includeTakeaways: boolean;
  strictStructure: boolean;
  customFocusInstruction: string;
}
