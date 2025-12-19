import React from 'react';
import { ArrowLeft, Home, Clock } from 'lucide-react';
import { AssessmentVersion } from '../types';

interface AssessmentQuestionProps {
  version: AssessmentVersion;
  currentQuestion: number;
  answers: number[];
  onAnswer: (value: number) => void;
  onReset: () => void;
}

export const AssessmentQuestion: React.FC<AssessmentQuestionProps> = ({
  version,
  currentQuestion,
  answers,
  onAnswer,
  onReset
}) => {
  const question = version.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / version.questions.length) * 100;
  const isLastQuestion = currentQuestion === version.questions.length - 1;

  const getAnswerOptions = () => {
    const options = [];
    for (let i = 0; i <= version.scale.max; i++) {
      options.push({
        value: i,
        label: version.scale.labels[i] || `选项 ${i}`,
        description: version.scale.descriptions?.[i] || ''
      });
    }
    return options;
  };

  const options = getAnswerOptions();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onReset}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回首页
            </button>
            
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{version.estimatedTime}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-semibold text-gray-900">{version.name}</h1>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} / {version.questions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-2">
              第 {currentQuestion + 1} 题
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
              {question.text}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => onAnswer(option.value)}
                className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-blue-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                      {option.value}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-medium text-gray-900 mb-1">
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-sm text-gray-600">
                        {option.description}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Hint */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {isLastQuestion ? '最后一题，请仔细选择您的答案' : '点击选项继续下一题'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};