import React, { useState } from 'react';
import {
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Heart,
  Sparkles,
  Target,
  FileText,
  CheckCircle,
  AlertCircle,
  Eye
} from 'lucide-react';
import { AssessmentVersion } from '../types';

interface ResultPreviewProps {
  version: AssessmentVersion;
}

// 示例结果数据
const getPreviewResult = (versionId: string) => {
  const previews = {
    simple: {
      score: 18,
      maxScore: 30,
      riskLevel: '中低风险',
      riskColor: 'text-yellow-600',
      riskBg: 'bg-yellow-50',
      severity: '轻微心理困扰',
      recommendation: '注意休息和放松，保持规律作息',
      tags: ['情绪状态', '压力水平', '睡眠质量'],
      features: ['快速筛查', '1分钟完成', '即时结果']
    },
    standard: {
      score: 72,
      maxScore: 147,
      riskLevel: '中度风险',
      riskColor: 'text-orange-600',
      riskBg: 'bg-orange-50',
      severity: '轻度心理困扰',
      recommendation: '适当调整生活方式，关注心理健康',
      tags: ['情绪症状', '认知状态', '行为模式', '社会功能'],
      features: ['全面评估', '详细分析', '生活方式建议']
    },
    detailed: {
      score: 145,
      maxScore: 294,
      riskLevel: '中低风险',
      riskColor: 'text-yellow-600',
      riskBg: 'bg-yellow-50',
      severity: '轻度心理健康问题',
      recommendation: '考虑心理咨询，加强自我调适',
      tags: ['情绪症状', '认知功能', '行为评估', '躯体状态', '社会功能', '生活建议'],
      features: ['深度诊断', '全面报告', '书籍推荐', '专业资源']
    }
  };

  return previews[versionId as keyof typeof previews];
};

export const ResultPreview: React.FC<ResultPreviewProps> = ({ version }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const previewResult = getPreviewResult(version.id);

  if (!previewResult) return null;

  const slides = [
    {
      title: '评估结果概览',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          {/* 分数和风险 */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <p className="text-2xl font-bold text-white">{previewResult.score}</p>
              <p className="text-xs text-blue-100">评估得分</p>
            </div>
            <div className={`text-center p-4 ${previewResult.riskBg} border rounded-lg`}>
              <p className={`text-lg font-semibold ${previewResult.riskColor}`}>{previewResult.riskLevel}</p>
              <p className="text-xs text-gray-500">风险等级</p>
            </div>
          </div>
          {/* 症状评估 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Stethoscope className="w-4 h-4 text-gray-600 mr-2" />
              <p className="text-sm font-medium text-gray-700">症状评估</p>
            </div>
            <p className="text-sm text-gray-800">{previewResult.severity}</p>
          </div>
        </div>
      )
    },
    {
      title: '详细分析维度',
      icon: <TrendingUp className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-sm text-gray-600">完成测试后将获得以下分析维度：</p>
          <div className="grid grid-cols-2 gap-2">
            {previewResult.tags.map((tag, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: '改善建议方案',
      icon: <Heart className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Target className="w-4 h-4 text-blue-600 mr-2" />
              <p className="text-sm font-medium text-blue-900">个性化建议</p>
            </div>
            <p className="text-sm text-blue-800 leading-relaxed">{previewResult.recommendation}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <p className="text-sm font-medium text-purple-900">专属方案</p>
            </div>
            <p className="text-sm text-purple-800">量身定制心理健康改善方案</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      {/* 查看示例按钮 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 group"
      >
        <div className="flex items-center">
          <Eye className="w-5 h-5 text-blue-600 mr-3" />
          <div className="text-left">
            <p className="font-semibold text-gray-800">查看示例评估报告</p>
            <p className="text-sm text-gray-600">了解测试后将获得的分析结果</p>
          </div>
        </div>
      </button>

      {/* 示例结果展示 */}
      {isExpanded && (
        <div className="mt-4 animate-fadeIn">
          {/* 轮播卡片 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* 顶部导航 */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <div className="flex items-center">
                {slides[currentSlide].icon}
                <span className="ml-2 text-sm font-semibold text-gray-800">
                  {slides[currentSlide].title}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={prevSlide} className="p-1.5 rounded-lg hover:bg-white transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-xs text-gray-500 px-2">
                  {currentSlide + 1} / {slides.length}
                </span>
                <button onClick={nextSlide} className="p-1.5 rounded-lg hover:bg-white transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="p-6">
              {slides[currentSlide].content}
            </div>

            {/* 快速导航点 */}
            <div className="flex items-center justify-center gap-2 pb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-8 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 示例提示 */}
          <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm text-amber-900 font-medium">示例报告展示</p>
                <p className="text-xs text-amber-800 mt-1">
                  以上为示例报告内容，完成测试后将根据您的实际情况生成个性化分析结果
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
