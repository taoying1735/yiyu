import React from 'react';
import { Assessment } from './components/Assessment';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 text-rose-600">❤️</div>
              <h1 className="ml-2 text-2xl font-bold text-gray-900">心理健康评估</h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Assessment />
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} 心理健康评估平台 | 本网站仅供参考，不构成医疗建议
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;