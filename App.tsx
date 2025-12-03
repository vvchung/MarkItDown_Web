import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { DropZone } from './components/DropZone';
import { ProcessingView } from './components/ProcessingView';
import { ResultView } from './components/ResultView';
import { AppStatus, ConvertError } from './types';
import { convertToMarkdown } from './services/geminiService';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [file, setFile] = useState<File | null>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const [error, setError] = useState<ConvertError | null>(null);

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    setStatus(AppStatus.PROCESSING);
    setError(null);

    try {
      const result = await convertToMarkdown(selectedFile);
      setMarkdown(result);
      setStatus(AppStatus.COMPLETED);
    } catch (err: any) {
      console.error(err);
      setError({
        title: "Conversion Failed",
        message: err.message || "Something went wrong while processing the file with Gemini."
      });
      setStatus(AppStatus.ERROR);
    }
  };

  const handleReset = () => {
    setStatus(AppStatus.IDLE);
    setFile(null);
    setMarkdown('');
    setError(null);
  };

  const renderContent = () => {
    switch (status) {
      case AppStatus.IDLE:
        return <DropZone onFileSelected={handleFileSelect} />;
      
      case AppStatus.PROCESSING:
        return <ProcessingView />;
      
      case AppStatus.COMPLETED:
        return (
          <ResultView 
            markdown={markdown} 
            originalFileName={file?.name || 'document'} 
            onReset={handleReset} 
          />
        );
      
      case AppStatus.ERROR:
        return (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
             </div>
             <h2 className="text-2xl font-bold text-slate-800 mb-2">{error?.title || "Error"}</h2>
             <p className="text-slate-600 mb-8 max-w-md text-center">{error?.message}</p>
             <button 
                onClick={handleReset}
                className="bg-brand-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-700 transition-colors"
             >
                Try Again
             </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default App;
