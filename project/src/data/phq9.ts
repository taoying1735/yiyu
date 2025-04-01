import { Question } from '../types';

export const phq9Questions: Question[] = [
  {
    id: 1,
    text: "过去两周内，做事时提不起劲或没有兴趣",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 2,
    text: "过去两周内，感到心情低落、沮丧或绝望",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 3,
    text: "过去两周内，入睡困难、睡不安稳或睡眠过多",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 4,
    text: "过去两周内，感觉疲倦或没有活力",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 5,
    text: "过去两周内，食欲不振或过度饮食",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 6,
    text: "过去两周内，觉得自己很糟或觉得自己很失败，让自己或家人失望",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 7,
    text: "过去两周内，无法集中注意力做事，例如看报纸或看电视时",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 8,
    text: "过去两周内，行动或说话速度变得很慢，或者相反，感到坐立不安、动来动去、比平常更烦躁",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 9,
    text: "过去两周内，有不如死掉或用某种方式伤害自己的念头",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  }
];

export const getResultInterpretation = (score: number): AssessmentResult => {
  if (score <= 4) {
    return {
      score,
      severity: "无或轻微抑郁症状",
      recommendation: "您目前的心理状态良好。建议：\n\n1. 保持规律的作息时间\n2. 坚持适度运动\n3. 保持健康的社交活动\n4. 培养积极的兴趣爱好\n5. 如果感到情绪波动，可以考虑写日记或与亲友倾诉",
      riskLevel: "低风险",
      followUp: "建议每3-6个月进行一次自我评估，持续关注心理健康"
    };
  } else if (score <= 9) {
    return {
      score,
      severity: "轻度抑郁症状",
      recommendation: "您可能存在轻度抑郁倾向，建议：\n\n1. 寻求亲友的倾听和支持\n2. 适当进行心理咨询\n3. 规律作息，保证充足睡眠\n4. 进行放松训练和冥想\n5. 参加户外活动，增加运动量",
      riskLevel: "中低风险",
      followUp: "建议1-2个月内进行一次复查，如症状持续或加重，及时就医"
    };
  } else if (score <= 14) {
    return {
      score,
      severity: "中度抑郁症状",
      recommendation: "您可能存在中度抑郁症状，建议：\n\n1. 及时寻求专业心理咨询师的帮助\n2. 告知家人或信任的朋友，获取支持\n3. 避免做重要决定\n4. 保持规律生活作息\n5. 适当参与社交活动，避免自我隔离",
      riskLevel: "中度风险",
      followUp: "建议在2周内寻求专业心理医生进行详细评估"
    };
  } else if (score <= 19) {
    return {
      score,
      severity: "中重度抑郁症状",
      recommendation: "您可能存在中重度抑郁症状，强烈建议：\n\n1. 尽快就医，接受专业评估\n2. 遵医嘱进行治疗\n3. 保持与家人密切联系\n4. 避免独处\n5. 记录情绪变化，配合治疗",
      riskLevel: "较高风险",
      followUp: "建议立即就医，进行专业评估和治疗"
    };
  } else {
    return {
      score,
      severity: "重度抑郁症状",
      recommendation: "您可能存在重度抑郁症状，必须：\n\n1. 立即就医接受专业治疗\n2. 告知家人并寻求陪伴\n3. 确保24小时有人陪伴\n4. 远离可能造成伤害的物品\n5. 记录服药情况，按时就医",
      riskLevel: "高风险",
      followUp: "需要立即就医治疗，并保持24小时陪护"
    };
  }
};