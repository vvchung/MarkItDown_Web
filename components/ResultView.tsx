import React from 'react';

interface ResultViewProps {
  markdown: string;
  originalFileName: string;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ markdown, originalFileName, onReset }) => {
  
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    const fileNameBase = originalFileName.substring(0, originalFileName.lastIndexOf('.')) || originalFileName;
    element.download = `${fileNameBase}.md`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        {/* Success Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <div>
                    <h3 className="font-semibold text-green-800">Conversion Completed!</h3>
                    <p className="text-sm text-green-600">Your file has been successfully processed.</p>
                </div>
            </div>
            <div className="flex gap-3">
                 <button 
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-md hover:bg-brand-700 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 9.75V1.5m0 0L8.25 5.25M12 1.5 15.75 5.25" />
                    </svg>
                    Download Markdown
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar / Actions */}
            <div className="lg:col-span-1 space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-4 border-b pb-2">File Details</h4>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-500">Source Name:</span>
                            <span className="text-slate-900 font-medium truncate max-w-[150px]" title={originalFileName}>{originalFileName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Output Format:</span>
                            <span className="text-slate-900 font-medium">Markdown (.md)</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Size:</span>
                            <span className="text-slate-900 font-medium">{markdown.length} chars</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                     <h4 className="font-semibold text-slate-800 mb-4 border-b pb-2">Actions</h4>
                     <button 
                        onClick={handleCopy}
                        className="w-full mb-3 flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                        Copy to Clipboard
                    </button>
                    <button 
                        onClick={onReset}
                        className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-900 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        Convert Another File
                    </button>
                </div>
            </div>

            {/* Preview Area */}
            <div className="lg:col-span-2">
                 <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-[600px]">
                    <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-xl">
                        <span className="font-mono text-sm text-slate-500">PREVIEW</span>
                    </div>
                    <div className="flex-1 p-6 overflow-auto custom-scrollbar font-mono text-sm leading-relaxed text-slate-800 bg-white whitespace-pre-wrap">
                        {markdown}
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
};
