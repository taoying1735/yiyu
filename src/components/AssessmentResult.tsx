import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  RefreshCcw, 
  Activity, 
  AlertTriangle, 
  Stethoscope, 
  Clock, 
  Brain, 
  BookOpen, 
  Target, 
  Sparkles, 
  Heart,
  Share2,
  ArrowRight
} from 'lucide-react';
import { AssessmentVersion, AssessmentResult as AssessmentResultType } from '../types';
import { assessmentVersions } from '../data/assessmentVersions';

interface AssessmentResultProps {
  version: AssessmentVersion;
  score: number;
  result: AssessmentResultType;
  onReset: () => void;
  onVersionSelect: (version: AssessmentVersion) => void;
}

export const AssessmentResult: React.FC<AssessmentResultProps> = ({
  version,
  score,
  result,
  onReset,
  onVersionSelect
}) => {
  const navigate = useNavigate();
  const otherVersions = assessmentVersions ? assessmentVersions.filter(v => v.id !== version.id) : [];

  const ResultSection = ({ 
    title, 
    icon, 
    children, 
    color 
  }: { 
    title: string; 
    icon: React.ReactNode; 
    children: React.ReactNode; 
    color: string; 
  }) => (
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `心理评估结果 - ${version.name}`,
          text: `我在心理健康评估中获得了${score}分，评估结果为${result.riskLevel}。`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href);
      alert('评估结果链接已复制到剪贴板！');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Home Button */}
      <button
        onClick={onReset}
        className="fixed top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 group z-50"
        title="返回首页"
      >
        <Home className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">评估结果 - {version.name}</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleShare}
                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                分享结果
              </button>
              <button
                onClick={onReset}
                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                重新测评
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Score Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Activity className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-medium text-blue-900">评估得分</h3>
              </div>
              <p className="text-2xl font-bold text-blue-900">{score} 分</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                <h3 className="font-medium text-orange-900">风险等级</h3>
              </div>
              <p className="text-2xl font-bold text-orange-900">{result.riskLevel}</p>
            </div>
          </div>

          {/* Symptom Assessment */}
          <ResultSection
            title="症状评估"
            icon={<Stethoscope className="h-5 w-5 text-gray-700" />}
            color="bg-gray-50"
          >
            <p className="text-lg text-gray-800">{result.severity}</p>
          </ResultSection>

          {/* Detailed Analysis */}
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

          {/* Recommendations */}
          <ResultSection
            title="建议措施"
            icon={<Clock className="h-5 w-5 text-emerald-600" />}
            color="bg-emerald-50/80"
          >
            <div className="text-emerald-800 whitespace-pre-line">
              {result.recommendation}
            </div>
          </ResultSection>

          {/* Lifestyle Recommendations */}
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

          {/* Recommended Books */}
          {result.books && result.books.length > 0 && (
            <ResultSection
              title="推荐阅读"
              icon={<BookOpen className="h-5 w-5 text-indigo-600" />}
              color="bg-indigo-50/80"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {result.books.map((book, index) => (
                  <BookCard key={index} book={book} />
                ))}
              </div>
            </ResultSection>
          )}

          {/* Alternative Assessment Options */}
          {otherVersions.length > 0 && (
            <ResultSection
              title="其他评估版本"
              icon={<Target className="h-5 w-5 text-gray-600" />}
              color="bg-gray-50"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {otherVersions.map((altVersion) => (
                  <div
                    key={altVersion.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 mb-2">{altVersion.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{altVersion.description}</p>
                    <button
                      onClick={() => onVersionSelect(altVersion)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      开始评估
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </ResultSection>
          )}

          {/* Emergency Resources */}
          {result.emergencyResources && (
            <ResultSection
              title="紧急资源"
              icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
              color="bg-red-50/80"
            >
              <div className="space-y-3">
                {result.emergencyResources.map((resource, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">{resource.type}</p>
                      <p className="text-red-700">{resource.contact}</p>
                      {resource.description && (
                        <p className="text-sm text-red-600 mt-1">{resource.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ResultSection>
          )}

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onReset}
                className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <RefreshCcw className="h-4 w-4 mr-2" />
                重新评估
              </button>

              <button
                onClick={() => navigate('/')}
                className="flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transform hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <Heart className="h-4 w-4 mr-2" />
                返回首页
              </button>

              <button
                onClick={handleShare}
                className="flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:border-green-300 hover:text-green-600 transform hover:scale-105 transition-all duration-200"
              >
                <Share2 className="h-4 w-4 mr-2" />
                分享结果
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};