import { ReactNode } from 'react';

export interface Question {
  id: number;
  text: string;
  options: {
    value: number;
    label: string;
  }[];
}

export interface AssessmentResult {
  score: number;
  severity: string;
  recommendation: string;
  riskLevel: string;
  followUp: string;
  detailedAnalysis?: {
    category: string;
    score: number;
    interpretation: string;
  }[];
  lifestyle?: {
    area: string;
    suggestions: string[];
  }[];
  recommendedBooks?: {
    category: string;
    books: {
      title: string;
      author: string;
      description: string;
    }[];
  }[];
  resources?: {
    type: string;
    links: {
      title: string;
      url: string;
    }[];
  }[];
}

export interface EmergencyContact {
  name: string;
  phone: string;
  hours?: string;
}

export interface AssessmentVersion {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  timeEstimate: string;
  questions: Question[];
  getResult: (score: number) => AssessmentResult;
}