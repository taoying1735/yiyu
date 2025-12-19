import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { AssessmentNew as Assessment } from './components/AssessmentNew';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import { Heart, Menu, X, BookOpen, Home } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center group">
                  <Heart className="h-8 w-8 text-rose-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" />
                  <h1 className="ml-2 text-xl font-bold text-gray-900 sm:text-2xl">心理健康评估</h1>
                </Link>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        isActive
                          ? 'border-rose-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`
                    }
                  >
                    <Home className="w-4 h-4 mr-1" />
                    在线评估
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        isActive
                          ? 'border-rose-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`
                    }
                  >
                    <BookOpen className="w-4 h-4 mr-1" />
                    健康博客
                  </NavLink>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                >
                  <span className="sr-only">打开菜单</span>
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      isActive
                        ? 'bg-rose-50 border-rose-500 text-rose-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <div className="flex items-center">
                    <Home className="w-4 h-4 mr-2" />
                    在线评估
                  </div>
                </NavLink>
                <NavLink
                  to="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      isActive
                        ? 'bg-rose-50 border-rose-500 text-rose-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    健康博客
                  </div>
                </NavLink>
              </div>
            </div>
          )}
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Assessment />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>

        <footer className="bg-white mt-auto border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">关于我们</h3>
                <p className="mt-4 text-base text-gray-500">
                  我们致力于提供专业的心理健康评估工具，帮助您更好地了解自己，关注心理健康。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">快速链接</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-500 hover:text-gray-900">
                      心理评估
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">
                      健康博客
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">免责声明</h3>
                <p className="mt-4 text-base text-gray-500">
                  本网站提供的测试结果仅供参考，不构成医疗诊断建议。如果您有严重的心理困扰，请及时寻求专业医生的帮助。
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-center text-sm text-gray-400">
                © {new Date().getFullYear()} 心理健康评估平台 | All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
