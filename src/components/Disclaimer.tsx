import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
      <div className="flex items-start">
        <AlertTriangle className="h-6 w-6 text-amber-400 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-medium text-amber-800">重要提示</h3>
          <div className="mt-2 text-sm text-amber-700">
            <p>本测评工具仅供初步筛查参考，不能替代专业医生的诊断。如果您正在经历严重的情绪困扰，请立即寻求专业医疗帮助。</p>
          </div>
        </div>
      </div>
    </div>
  );
};