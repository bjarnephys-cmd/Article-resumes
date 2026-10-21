import React from 'react';
import { 
  Table, 
  Sliders, 
  Cpu, 
  BookOpen, 
  Share2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface WorkflowStepperProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
  completedCount: number;
  totalCount: number;
  isProcessing: boolean;
}

export const WorkflowStepper: React.FC<WorkflowStepperProps> = ({
  currentStep,
  onSelectStep,
  completedCount,
  totalCount,
  isProcessing,
}) => {
  const steps = [
    {
      id: 1,
      title: '1. Data Input',
      desc: '10 Yahoo Finance Articles',
      icon: Table,
      ready: true,
    },
    {
      id: 2,
      title: '2. Consistency Rules',
      desc: 'Structured Template & Tone',
      icon: Sliders,
      ready: true,
    },
    {
      id: 3,
      title: '3. AI Automation',
      desc: isProcessing ? 'Generating Summaries...' : `${completedCount}/${totalCount} Processed`,
      icon: Cpu,
      ready: completedCount > 0 || isProcessing,
      activeAnimation: isProcessing,
    },
    {
      id: 4,
      title: '4. Structured Briefs',
      desc: 'Evidence, Takeaways & Jargon',
      icon: BookOpen,
      ready: completedCount > 0,
    },
    {
      id: 5,
      title: '5. Export & Share',
      desc: 'Google Docs / Docx / MD',
      icon: Share2,
      ready: completedCount > 0,
    },
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-2 no-scrollbar">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isComplete = step.id < currentStep || (step.id === 3 && completedCount === totalCount);

          return (
            <React.Fragment key={step.id}>
              <button
                onClick={() => onSelectStep(step.id)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all shrink-0 ${
                  isActive
                    ? 'bg-red-50 text-red-700 ring-1 ring-red-300 font-semibold shadow-xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    step.activeAnimation
                      ? 'bg-amber-500 text-white animate-spin'
                      : isActive
                      ? 'bg-red-600 text-white'
                      : isComplete
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isComplete && !step.activeAnimation ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight">{step.title}</div>
                  <div className="text-[11px] text-slate-500 leading-tight">{step.desc}</div>
                </div>
              </button>

              {idx < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
