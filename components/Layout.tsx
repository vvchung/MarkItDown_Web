import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FA] text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
            <div className="bg-brand-600 text-white p-1.5 rounded-md font-bold text-xl leading-none">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-900">MarkItDown<span className="text-brand-600">Web</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <span className="text-brand-600 font-semibold">Convert to Markdown</span>
          </nav>
          <div className="flex items-center gap-3">
             <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors shadow-md">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p className="mb-2">
            Powered by <span className="font-semibold text-gray-700">Google Gemini</span> &bull; 
            Inspired by <a href="https://github.com/microsoft/markitdown" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">Microsoft MarkItDown</a>
          </p>
          <p>&copy; {new Date().getFullYear()} MarkItDown Web. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};