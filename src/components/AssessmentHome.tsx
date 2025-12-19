import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { assessmentVersions } from '../data/assessmentVersions';
import { blogPosts } from '../data/blogPosts';
import { 
  Timer, 
  FileSpreadsheet, 
  Microscope, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Shield, 
  Brain, 
  Activity, 
  Stethoscope,
  ArrowRight,
  Calendar,
  User,
  Home,
  Book
} from 'lucide-react';
import { AssessmentVersion } from '../types';

interface AssessmentHomeProps {
  onVersionSelect: (version: AssessmentVersion) => void;
}

export const AssessmentHome: React.FC<AssessmentHomeProps> = ({ onVersionSelect }) => {
  // 使用useMemo优化排序性能
  const sortedBlogPosts = useMemo(() => 
    [...blogPosts].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ), []
  );

  // 使用useMemo缓存静态配置
  const versionIcons = useMemo(() => [Timer, FileSpreadsheet, Microscope], []);
  const versionColors = useMemo(() => [
    'from-blue-600 to-indigo-600',
    'from-purple-600 to-pink-600',
    'from-emerald-600 to-teal-600'
  ], []);
  const iconBgColors = useMemo(() => [
    'bg-blue-100 text-blue-600',
    'bg-purple-100 text-purple-600',
    'bg-emerald-100 text-emerald-600'
  ], []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">专业的心理健康评估工具</span>
            <span className="block text-2xl mt-3 font-medium">科学、标准、保密的心理健康筛查平台</span>
          </h2>
          <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100">
            我们提供三个专业版本的评估量表，帮助您更好地了解自己的心理健康状况
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        {/* Assessment Versions */}
        <div className="grid gap-8 lg:grid-cols-3">
          {assessmentVersions.map((version, index) => {
            const IconComponent = versionIcons[index];
            const gradientClass = versionColors[index];
            const iconColorClass = iconBgColors[index];

            return (
              <div key={version.id} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientClass} rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}></div>
                <div className="relative bg-white p-8 rounded-lg shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-2 rounded-lg ${iconColorClass}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <span className="px-3 py-1 text-sm text-gray-600 bg-gray-50 rounded-full">
                      推荐用时：{version.estimatedTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{version.name}</h3>
                  <p className="text-gray-600 mb-6">{version.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>{version.questionCount}个专业问题</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>{version.reportType}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Target className="h-5 w-5 text-red-500 mr-2" />
                      <span>{version.analysisType}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onVersionSelect(version)}
                    className={`w-full bg-gradient-to-r ${gradientClass} text-white rounded-lg px-4 py-3 font-medium hover:shadow-lg transition duration-300 flex items-center justify-center group`}
                  >
                    开始评估
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assessment Features */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">评估说明</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">隐私保护</h4>
                <p className="mt-2 text-sm text-gray-500">所有评估数据严格保密，确保您的隐私安全</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                  <Brain className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">科学评估</h4>
                <p className="mt-2 text-sm text-gray-500">采用国际标准化的专业评估量表</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-600">
                  <Activity className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">实时分析</h4>
                <p className="mt-2 text-sm text-gray-500">即时生成专业的评估报告和建议</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                  <Stethoscope className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">专业指导</h4>
                <p className="mt-2 text-sm text-gray-500">提供个性化的改善建议和资源推荐</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">最新心理健康文章</h3>
            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              查看全部
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedBlogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString('zh-CN')}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-blue-600 bg-blue-50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};