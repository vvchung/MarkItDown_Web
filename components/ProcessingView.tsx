import React from 'react';

export const ProcessingView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-t-4 border-brand-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-t-4 border-slate-200 rounded-full"></div>
            {/* MarkItDown Icon center */}
            <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-slate-700">
                M
            </div>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Converting your file...</h2>
        <p className="text-slate-500">Reading content, analyzing structure, and generating Markdown.</p>
        <p className="text-slate-400 text-sm mt-4">Powered by Gemini 2.5 Flash</p>
    </div>
  );
};
