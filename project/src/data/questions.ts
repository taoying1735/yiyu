import { Question } from '../types';

// 简单版本 - 10题
export const simpleQuestions: Question[] = [
  {
    id: 1,
    text: "过去两周内，我感到心情低落、沮丧或绝望",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 2,
    text: "过去两周内，我对做事情失去了兴趣或乐趣",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 3,
    text: "过去两周内，我感到疲倦或精力不足",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 4,
    text: "过去两周内，我的睡眠质量不好",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 5,
    text: "过去两周内，我的食欲发生明显变化",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 6,
    text: "过去两周内，我对自己感到失望或认为自己是个失败者",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 7,
    text: "过去两周内，我难以集中注意力",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 8,
    text: "过去两周内，我说话或行动明显变慢，或相反感到坐立不安",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 9,
    text: "过去两周内，我感到孤独或与他人疏离",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  },
  {
    id: 10,
    text: "过去两周内，我出现过伤害自己的想法",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "有几天" },
      { value: 2, label: "一半以上时间" },
      { value: 3, label: "几乎每天" }
    ]
  }
];

// 标准版本 - 49题
export const standardQuestions: Question[] = [
  // 情绪症状 (1-15)
  {
    id: 1,
    text: "过去两周内，我感到情绪低落或沮丧的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 2,
    text: "过去两周内，我感到焦虑或紧张的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 3,
    text: "过去两周内，我感到烦躁或易怒的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 4,
    text: "过去两周内，我的情绪波动的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 5,
    text: "过去两周内，我感到害怕或恐惧的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 6,
    text: "过去两周内，我感到孤独或寂寞的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 7,
    text: "过去两周内，我感到绝望的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 8,
    text: "过去两周内，我感到内疚或自责的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 9,
    text: "过去两周内，我感到生活没有意义的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 10,
    text: "过去两周内，我对未来感到悲观的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 11,
    text: "过去两周内，我感到情感麻木的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 12,
    text: "过去两周内，我感到难以控制情绪的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 13,
    text: "过去两周内，我感到对生活失去热情的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 14,
    text: "过去两周内，我感到情绪影响日常生活的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 15,
    text: "过去两周内，我感到难以表达情感的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  // 认知症状 (16-25)
  {
    id: 16,
    text: "过去两周内，我的注意力难以集中的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 17,
    text: "过去两周内，我的记忆力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 18,
    text: "过去两周内，我感到思维迟钝的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 19,
    text: "过去两周内，我难以做决定的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 20,
    text: "过去两周内，我感到思维混乱的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 21,
    text: "过去两周内，我的判断力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 22,
    text: "过去两周内，我难以理解复杂信息的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 23,
    text: "过去两周内，我的学习能力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 24,
    text: "过去两周内，我感到难以规划和组织的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 25,
    text: "过去两周内，我的工作效率下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  // 生理症状 (26-35)
  {
    id: 26,
    text: "过去两周内，我的睡眠质量下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 27,
    text: "过去两周内，我的食欲改变的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 28,
    text: "过去两周内，我感到身体疲劳的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 29,
    text: "过去两周内，我感到头痛或身体疼痛的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 30,
    text: "过去两周内，我感到胃部不适的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 31,
    text: "过去两周内，我感到心跳加快或胸闷的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 32,
    text: "过去两周内，我感到呼吸困难的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 33,
    text: "过去两周内，我感到肌肉紧张的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 34,
    text: "过去两周内，我感到头晕或眩晕的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 35,
    text: "过去两周内，我的体重明显变化的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  // 行为症状 (36-42)
  {
    id: 36,
    text: "过去两周内，我的社交活动减少的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 37,
    text: "过去两周内，我感到难以与人交往的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 38,
    text: "过去两周内，我的生活作息变得不规律的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 39,
    text: "过去两周内，我感到行为变得冲动的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 40,
    text: "过去两周内，我的个人卫生习惯改变的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 41,
    text: "过去两周内，我感到难以完成日常任务的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 42,
    text: "过去两周内，我对日常活动失去兴趣的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  // 人际关系 (43-49)
  {
    id: 43,
    text: "过去两周内，我与家人关系紧张的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 44,
    text: "过去两周内，我感到难以信任他人的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 45,
    text: "过去两周内，我与朋友疏远的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 46,
    text: "过去两周内，我感到人际冲突的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 47,
    text: "过去两周内，我在工作中人际关系紧张的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 48,
    text: "过去两周内，我感到难以表达需求的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 49,
    text: "过去两周内，我感到被误解的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  }
];

// 详细版本 - 98题
export const detailedQuestions: Question[] = [
  // 核心症状评估 (1-20)
  {
    id: 1,
    text: "过去两周内，我感到情绪低落的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 2,
    text: "过去两周内，我感到悲伤的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 3,
    text: "过去两周内，我感到焦虑或紧张的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 4,
    text: "过去两周内，我感到烦躁或易怒的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 5,
    text: "过去两周内，我对日常活动失去兴趣的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 6,
    text: "过去两周内，我感到疲倦或缺乏活力的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 7,
    text: "过去两周内，我的自我价值感降低的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 8,
    text: "过去两周内，我感到绝望的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 9,
    text: "过去两周内，我的注意力难以集中的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 10,
    text: "过去两周内，我的决策能力下降的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 11,
    text: "过去两周内，我感到内疚或自责的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 12,
    text: "过去两周内，我对未来感到悲观的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 13,
    text: "过去两周内，我感到生活没有意义的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 14,
    text: "过去两周内，我感到孤独或被孤立的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 15,
    text: "过去两周内，我的情绪波动的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 16,
    text: "过去两周内，我感到害怕或恐惧的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 17,
    text: "过去两周内，我感到情感麻木的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 18,
    text: "过去两周内，我感到难以表达情感的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 19,
    text: "过去两周内，我感到对生活失去控制的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 20,
    text: "过去两周内，我感到生活压力过大的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  // 认知功能评估 (21-40)
  {
    id: 21,
    text: "过去两周内，我的记忆力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 22,
    text: "过去两周内，我感到思维迟钝的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 23,
    text: "过去两周内，我难以理解复杂信息的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 24,
    text: "过去两周内，我感到思维混乱的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 25,
    text: "过去两周内，我的学习能力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 26,
    text: "过去两周内，我难以做计划的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 27,
    text: "过去两周内，我的判断力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 28,
    text: "过去两周内，我感到难以解决问题的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 29,
    text: "过去两周内，我的创造力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 30,
    text: "过去两周内，我难以完成多任务的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 31,
    text: "过去两周内，我的语言表达能力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 32,
    text: "过去两周内，我感到难以理解他人的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 33,
    text: "过去两周内，我的时间管理能力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 34,
    text: "过去两周内，我感到难以保持注意力的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 35,
    text: "过去两周内，我的空间感知能力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 36,
    text: "过去两周内，我感到难以做出决定的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 37,
    text: "过去两周内，我的抽象思维能力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 38,
    text: "过去两周内，我感到难以理解复杂概念的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 39,
    text: "过去两周内，我的逻辑推理能力下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 40,
    text: "过去两周内，我感到难以进行深度思考的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  // 生理症状评估 (41-60)
  {
    id: 41,
    text: "过去两周内，我的睡眠质量下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 42,
    text: "过去两周内，我感到食欲改变的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 43,
    text: "过去两周内，我感到身体疼痛的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 44,
    text: "过去两周内，我感到胃部不适的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 45,
    text: "过去两周内，我感到心跳异常的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 46,
    text: "过去两周内，我感到呼吸困难的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 47,
    text: "过去两周内，我感到头晕的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 48,
    text: "过去两周内，我感到肌肉紧张的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 49,
    text: "过去两周内，我感到疲劳的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 50,
    text: "过去两周内，我感到体重变化的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 51,
    text: "过去两周内，我感到头痛的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 52,
    text: "过去两周内，我感到消化问题的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 53,
    text: "过去两周内，我感到皮肤问题的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 54,
    text: "过去两周内，我感到免疫力下降的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 55,
    text: "过去两周内，我感到关节疼痛的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 56,
    text: "过去两周内，我感到视觉问题的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 57,
    text: "过去两周内，我感到听力问题的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 58,
    text: "过去两周内，我感到平衡问题的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 59,
    text: "过去两周内，我感到体温调节问题的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 60,
    text: "过去两周内，我感到身体不适影响生活的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  // 行为症状评估 (61-80)
  {
    id: 61,
    text: "过去两周内，我的社交活动减少的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 62,
    text: "过去两周内，我感到难以与人交往的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 63,
    text: "过去两周内，我的工作效率下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 64,
    text: "过去两周内，我感到难以完成日常任务的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 65,
    text: "过去两周内，我的生活作息改变的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 66,
    text: "过去两周内，我感到行为变得冲动的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 67,
    text: "过去两周内，我的个人卫生习惯改变的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 68,
    text: "过去两周内，我感到难以控制情绪的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 69,
    text: "过去两周内，我的饮食习惯改变的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 70,
    text: "过去两周内，我感到难以保持常规的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 71,
    text: "过去两周内，我的运动习惯改变的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 72,
    text: "过去两周内，我感到难以维持关系的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 73,
    text: "过去两周内，我的休闲活动减少的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 74,
    text: "过去两周内，我感到难以放松的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 75,
    text: "过去两周内，我的工作表现下降的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 76,
    text: "过去两周内，我感到难以应对压力的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 77,
    text: "过去两周内，我的兴趣爱好改变的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 78,
    text: "过去两周内，我感到难以享受生活的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 79,
    text: "过去两周内，我的行为方式改变的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 80,
    text: "过去两周内，我感到难以适应变化的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  // 人际关系评估 (81-90)
  {
    id: 81,
    text: "过去两周内，我与家人关系紧张的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 82,
    text: "过去两周内，我感到难以信任他人的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 83,
    text: "过去两周内，我与朋友疏远的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 84,
    text: "过去两周内，我感到人际冲突的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 85,
    text: "过去两周内，我在工作中人际关系紧张的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 86,
    text: "过去两周内，我感到难以表达需求的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 87,
    text: "过去两周内，我感到被误解的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 88,
    text: "过去两周内，我感到难以维持亲密关系的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 89,
    text: "过去两周内，我感到社交焦虑的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 90,
    text: "过去两周内，我感到难以融入群体的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  // 自我认知评估 (91-98)
  {
    id: 91,
    text: "过去两周内，我对自己的评价降低的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 92,
    text: "过去两周内，我感到对未来失去希望的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 93,
    text: "过去两周内，我对生活失去意义感的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 94,
    text: "过去两周内，我感到自我怀疑的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 95,
    text: "过去两周内，我的自尊心降低的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 96,
    text: "过去两周内，我感到难以接纳自己的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  },
  {
    id: 97,
    text: "过去两周内，我对自己的外表不满意的程度",
    options: [
      { value: 0, label: "完全没有" },
      { value: 1, label: "轻微" },
      { value: 2, label: "中等" },
      { value: 3, label: "严重" }
    ]
  },
  {
    id: 98,
    text: "过去两周内，我感到自我价值感降低的频率",
    options: [
      { value: 0, label: "从不" },
      { value: 1, label: "偶尔" },
      { value: 2, label: "经常" },
      { value: 3, label: "总是" }
    ]
  }
];