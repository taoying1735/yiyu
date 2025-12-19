import React, { useState } from 'react';
import { AssessmentVersion, AssessmentResult as AssessmentResultType } from '../types';
import { assessmentVersions } from '../data/assessmentVersions';
import { AssessmentHome } from './AssessmentHome';
import { AssessmentQuestion } from './AssessmentQuestion';
import { AssessmentResult } from './AssessmentResult';
import { Disclaimer } from './Disclaimer';
import { EmergencyContacts } from './EmergencyContacts';

type AssessmentState = 'home' | 'question' | 'result';

export const AssessmentNew: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<AssessmentVersion | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [state, setState] = useState<AssessmentState>('home');

  const handleVersionSelect = (version: AssessmentVersion) => {
    setSelectedVersion(version);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setState('question');
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
      setState('result');
    }
  };

  const resetAssessment = () => {
    setSelectedVersion(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setState('home');
  };

  const calculateScore = () => {
    return answers.reduce((sum, current) => sum + current, 0);
  };

  const getResult = (): AssessmentResultType | null => {
    if (!selectedVersion || !showResult) return null;
    return selectedVersion.getResult(calculateScore());
  };

  // Loading state for better UX
  if (state === 'question' && !selectedVersion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">正在加载评估...</p>
        </div>
      </div>
    );
  }

  // Error boundary for component errors
  try {
    switch (state) {
      case 'home':
        return (
          <div className="min-h-screen bg-gray-50">
            <AssessmentHome onVersionSelect={handleVersionSelect} />
            <Disclaimer />
            <EmergencyContacts />
          </div>
        );

      case 'question':
        if (!selectedVersion) return null;
        
        return (
          <AssessmentQuestion
            version={selectedVersion}
            currentQuestion={currentQuestion}
            answers={answers}
            onAnswer={handleAnswer}
            onReset={resetAssessment}
          />
        );

      case 'result':
        if (!selectedVersion || !showResult) return null;
        
        const result = getResult();
        if (!result) {
          return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-4">加载结果时出现问题</p>
                <button
                  onClick={resetAssessment}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  返回首页
                </button>
              </div>
            </div>
          );
        }

        return (
          <div className="min-h-screen bg-gray-50">
            <AssessmentResult
              version={selectedVersion}
              score={calculateScore()}
              result={result}
              onReset={resetAssessment}
              onVersionSelect={handleVersionSelect}
            />
            <Disclaimer />
            <EmergencyContacts />
          </div>
        );

      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600">未知状态</p>
              <button
                onClick={resetAssessment}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4"
              >
                返回首页
              </button>
            </div>
          </div>
        );
    }
  } catch (error) {
    console.error('Assessment component error:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">组件加载出错</h2>
          <p className="text-gray-600 mb-4">抱歉，评估组件遇到了问题。请尝试刷新页面或返回首页。</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              刷新页面
            </button>
            <button
              onClick={resetAssessment}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    );
  }
};