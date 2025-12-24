import { AssessmentVersion } from '../types';
import { simpleQuestions, standardQuestions, detailedQuestions } from './questions';
import { getSimpleResult, getStandardResult, getDetailedResult } from './results';

export const assessmentVersions: AssessmentVersion[] = [
  {
    id: 'simple',
    name: '快速筛查版',
    description: '适用于日常心理健康自查，完成时间约1分钟',
    questionCount: 10,
    timeEstimate: '1分钟',
    questions: simpleQuestions,
    getResult: getSimpleResult,
    reportType: '快速筛查报告',
    analysisType: '基础分析'
  },
  {
    id: 'standard',
    name: '标准评估版',
    description: '全面的心理健康评估，适用于定期心理健康检查，完成时间约5分钟',
    questionCount: 49,
    timeEstimate: '5分钟',
    questions: standardQuestions,
    getResult: getStandardResult,
    reportType: '标准评估报告',
    analysisType: '全面分析'
  },
  {
    id: 'detailed',
    name: '专业诊断版',
    description: '深入的心理健康诊断工具，适用于需要专业评估的情况，完成时间约10分钟',
    questionCount: 98,
    timeEstimate: '10分钟',
    questions: detailedQuestions,
    getResult: getDetailedResult,
    reportType: '专业诊断报告',
    analysisType: '深度分析'
  }
];