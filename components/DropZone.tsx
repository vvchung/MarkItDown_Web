import React, { useCallback, useState } from 'react';

interface DropZoneProps {
  onFileSelected: (file: File) => void;
}

export const DropZone: React.FC<DropZoneProps> = ({ onFileSelected }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndUpload(file);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateAndUpload(file);
    }
  };

  const validateAndUpload = (file: File) => {
    // Simple validation
    const validTypes = [
        'application/pdf', 
        'image/png', 
        'image/jpeg', 
        'image/webp', 
        'text/plain', 
        'text/csv',
        'application/json'
    ];
    
    // Note: We allow most types and let Gemini try, but we warn about some.
    // Ideally, for a "MarkItDown" clone, we want to accept Office files, 
    // but browser-side MIME detection for those can be tricky and Gemini 
    // support for raw binary office files via API varies (usually needs Cloud Storage URI).
    // For this demo, we focus on PDF/Images/Text which work reliably with inlineData.
    
    onFileSelected(file);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Convert files to Markdown
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Convert PDF, Images, and Text documents to clean Markdown format using advanced AI.
        </p>
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          w-full max-w-2xl aspect-[3/2] md:aspect-[2/1] bg-white rounded-xl shadow-xl 
          border-4 border-dashed transition-all duration-300 flex flex-col items-center justify-center
          relative group cursor-pointer overflow-hidden
          ${isDragging 
            ? 'border-brand-500 bg-brand-50 scale-[1.02]' 
            : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'
          }
        `}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={handleFileInput}
          accept=".pdf,.png,.jpg,.jpeg,.webp,.txt,.csv,.json,.md"
        />
        
        <div className="z-0 flex flex-col items-center pointer-events-none p-6 text-center">
            {/* SVG Icon */}
            <div className={`
                w-24 h-24 mb-6 rounded-full flex items-center justify-center transition-transform duration-500
                ${isDragging ? 'bg-brand-100 text-brand-600 scale-110' : 'bg-brand-600 text-white shadow-lg group-hover:scale-110'}
            `}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
            </div>
          
            <span className="text-2xl font-bold text-slate-700 mb-2">
                Select a file
            </span>
            <p className="text-slate-500 text-sm mb-6">
                or drop file here
            </p>
            
            {/* Visual Button */}
            <div className="bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md group-hover:bg-brand-700 transition-colors">
                Select File
            </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
        <div className="p-4">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">AI-Powered Extraction</h3>
            <p className="text-sm text-slate-500">Extracts text, tables, and layouts intelligently using Google's Gemini Flash model.</p>
        </div>
        <div className="p-4">
             <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Multimodal Support</h3>
            <p className="text-sm text-slate-500">Upload PDFs, images (PNG, JPG), or text files. We handle the complexity.</p>
        </div>
        <div className="p-4">
             <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Clean Output</h3>
            <p className="text-sm text-slate-500">Get standardized Markdown ready for your documentation, blogs, or notes.</p>
        </div>
      </div>
    </div>
  );
};
