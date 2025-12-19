import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assessmentVersions } from '../data/assessmentVersions';
import { blogPosts } from '../data/blogPosts';
import { Disclaimer } from './Disclaimer';
import { EmergencyContacts } from './EmergencyContacts';
import { ArrowRight, RefreshCcw, AlertTriangle, Clock, Activity, Stethoscope, BookOpen, Brain, CheckCircle2, Timer, FileSpreadsheet, Sparkles, Target, Microscope, Shield, Home, Book, Calendar, User } from 'lucide-react';
import { AssessmentVersion } from '../types';

const Assessment: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<AssessmentVersion | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  // 按日期降序排序文章，最新的在前
  const sortedBlogPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleVersionSelect = (version: AssessmentVersion) => {
    setSelectedVersion(version);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (value: number) => {
    if (!selectedVersion) return;

    const newAnswers = [...answers, value];
    if (currentQuestion < selectedVersion.questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(prev => prev + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const resetAssessment = () => {
    setSelectedVersion(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const calculateScore = () => {
    return answers.reduce((sum, current) => sum + current, 0);
  };

  const HomeButton = () => (
    <button
      onClick={resetAssessment}
      className="fixed top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 group"
      title="返回首页"
    >
      <Home className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
    </button>
  );

  const ResultSection = ({ title, icon, children, color }: { title: string; icon: React.ReactNode; children: React.ReactNode; color: string }) => (
    <div className={`mb-6 p-6 rounded-lg ${color}`}>
      <div className="flex items-center mb-4">
        <div className="mr-3">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  const BookCard = ({ book }: { book: { title: string; author: string; description: string } }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
      <h4 className="text-lg font-medium text-gray-900 mb-1">{book.title}</h4>
      <p className="text-sm text-gray-600 mb-2">{book.author}</p>
      <p className="text-sm text-gray-500">{book.description}</p>
    </div>
  );

  if (!selectedVersion) {
    return (
      <>
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
          <div className="grid gap-8 lg:grid-cols-3">
            {/* 快速筛查版 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Timer className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full">
                    推荐用时：1分钟
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">快速筛查版</h3>
                <p className="text-gray-600 mb-6">适用于日常心理健康自查，快速了解自己的心理状态</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>10个核心问题</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>基础评估报告</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="h-5 w-5 text-red-500 mr-2" />
                    <span>快速获得结果</span>
                  </div>
                </div>

                <button
                  onClick={() => handleVersionSelect(assessmentVersions[0])}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center group"
                >
                  开始评估
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 标准评估版 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileSpreadsheet className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-full">
                    推荐用时：5分钟
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">标准评估版</h3>
                <p className="text-gray-600 mb-6">全面的心理健康评估，适用于定期心理健康检查</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>49个专业问题</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>详细分析报告</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="h-5 w-5 text-red-500 mr-2" />
                    <span>个性化建议</span>
                  </div>
                </div>

                <button
                  onClick={() => handleVersionSelect(assessmentVersions[1])}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-4 py-3 font-medium hover:from-purple-700 hover:to-pink-700 transition duration-300 flex items-center justify-center group"
                >
                  开始评估
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 专业诊断版 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Microscope className="h-8 w-8 text-emerald-600" />
                  </div>
                  <span className="px-3 py-1 text-sm text-emerald-600 bg-emerald-50 rounded-full">
                    推荐用时：10分钟
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">专业诊断版</h3>
                <p className="text-gray-600 mb-6">深入的心理健康诊断工具，适用于需要专业评估的情况</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>98个深度问题</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>专业诊断报告</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="h-5 w-5 text-red-500 mr-2" />
                    <span>全面改善方案</span>
                  </div>
                </div>

                <button
                  onClick={() => handleVersionSelect(assessmentVersions[2])}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg px-4 py-3 font-medium hover:from-emerald-700 hover:to-teal-700 transition duration-300 flex items-center justify-center group"
                >
                  开始评估
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

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

          {/* 最新文章板块 */}
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
  }

  if (showResult) {
    const result = selectedVersion.getResult(calculateScore());
    const otherVersions = assessmentVersions.filter(v => v.id !== selectedVersion.id);
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <HomeButton />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">评估结果 - {selectedVersion.name}</h2>
              <button
                onClick={resetAssessment}
                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                重新测评
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Activity className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-blue-900">评估得分</h3>
                </div>
                <p className="text-2xl font-bold text-blue-900">{result.score} 分</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                  <h3 className="font-medium text-orange-900">风险等级</h3>
                </div>
                <p className="text-2xl font-bold text-orange-900">{result.riskLevel}</p>
              </div>
            </div>

            <ResultSection
              title="症状评估"
              icon={<Stethoscope className="h-5 w-5 text-gray-700" />}
              color="bg-gray-50"
            >
              <p className="text-lg text-gray-800">{result.severity}</p>
            </ResultSection>

            {result.detailedAnalysis && (
              <div className="space-y-4">
                {result.detailedAnalysis.map((analysis, index) => {
                  const colors = [
                    'bg-blue-50/80',
                    'bg-purple-50/80',
                    'bg-green-50/80',
                    'bg-yellow-50/80',
                    'bg-pink-50/80'
                  ];
                  const icons = [
                    <Brain className="h-5 w-5 text-blue-600" />,
                    <BookOpen className="h-5 w-5 text-purple-600" />,
                    <Activity className="h-5 w-5 text-green-600" />,
                    <Target className="h-5 w-5 text-yellow-600" />,
                    <Sparkles className="h-5 w-5 text-pink-600" />
                  ];
                  return (
                    <ResultSection
                      key={index}
                      title={analysis.category}
                      icon={icons[index % icons.length]}
                      color={colors[index % colors.length]}
                    >
                      <div className="text-gray-700 whitespace-pre-line">
                        {analysis.interpretation}
                      </div>
                    </ResultSection>
                  );
                })}
              </div>
            )}

            <ResultSection
              title="建议措施"
              icon={<Clock className="h-5 w-5 text-emerald-600" />}
              color="bg-emerald-50/80"
            >
              <div className="text-emerald-800 whitespace-pre-line">
                {result.recommendation}
              </div>
            </ResultSection>

            {result.lifestyle && (
              <ResultSection
                title="生活方式调整建议"
                icon={<Activity className="h-5 w-5 text-purple-600" />}
                color="bg-purple-50/80"
              >
                {result.lifestyle.map((item, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-medium text-purple-800 mb-2">{item.area}</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {item.suggestions.map((suggestion, idx) => (
                        <li key={idx} className="text-purple-700">{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ResultSection>
            )}

            <ResultSection
              title="后续跟进"
              icon={<Clock className="h-5 w-5 text-indigo-600" />}
              color="bg-indigo-50/80"
            >
              <p className="text-indigo-800">{result.followUp}</p>
            </ResultSection>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">其他评估版本</h3>
            <p className="mt-2 text-gray-600">选择不同的评估版本，获得更全面的心理健康评估</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {otherVersions.map((version) => (
              <div key={version.id} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {version.id === 'standard' ? (
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <FileSpreadsheet className="h-6 w-6 text-purple-600" />
                        </div>
                      ) : (
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <Microscope className="h-6 w-6 text-emerald-600" />
                        </div>
                      )}
                      <div className="ml-3">
                        <h4 className="text-lg font-semibold text-gray-900">{version.name}</h4>
                        <span className="text-sm text-gray-500">{version.timeEstimate}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        {version.questionCount}题
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{version.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>专业评估量表</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>详细分析报告</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Target className="h-5 w-5 text-red-500 mr-2" />
                      <span>个性化建议</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleVersionSelect(version)}
                    className={`w-full ${
                      version.id === 'standard'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                    } text-white rounded-lg px-4 py-3 font-medium transition duration-300 flex items-center justify-center group`}
                  >
                    开始评估
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <EmergencyContacts />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <HomeButton />
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{selectedVersion.name}</h2>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} / {selectedVersion.questions.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / selectedVersion.questions.length) * 100}%` }}
            />
          </div>
        </div>

        <Disclaimer />

        <div className="my-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {selectedVersion.questions[currentQuestion].text}
          </h3>
          <div className="space-y-3">
            {selectedVersion.questions[currentQuestion].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span>{option.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;

export { Assessment };