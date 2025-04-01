import { AssessmentResult } from '../types';

export const getSimpleResult = (score: number): AssessmentResult => {
  const maxScore = 30;
  const percentage = (score / maxScore) * 100;

  if (percentage <= 25) {
    return {
      score,
      severity: "心理状态良好",
      recommendation: "建议：\n1. 保持健康的生活方式\n2. 定期进行自我评估\n3. 培养积极的兴趣爱好",
      riskLevel: "低风险",
      followUp: "建议3-6个月后再次进行评估"
    };
  } else if (percentage <= 50) {
    return {
      score,
      severity: "轻微心理困扰",
      recommendation: "建议：\n1. 注意休息和放松\n2. 保持规律作息\n3. 适当运动\n4. 与亲友交流",
      riskLevel: "中低风险",
      followUp: "建议1-2个月后再次评估"
    };
  } else if (percentage <= 75) {
    return {
      score,
      severity: "中度心理困扰",
      recommendation: "建议：\n1. 寻求专业咨询\n2. 加强自我关注\n3. 调整生活节奏\n4. 保持社交活动",
      riskLevel: "中度风险",
      followUp: "建议2周内进行专业评估"
    };
  } else {
    return {
      score,
      severity: "严重心理困扰",
      recommendation: "建议：\n1. 立即寻求专业帮助\n2. 保持与家人密切联系\n3. 避免独处\n4. 规律作息和饮食",
      riskLevel: "高风险",
      followUp: "需要立即就医"
    };
  }
};

export const getStandardResult = (score: number): AssessmentResult => {
  const maxScore = 147;
  const percentage = (score / maxScore) * 100;

  const baseResult = {
    score,
    severity: "需要进一步评估",
    recommendation: "建议进行更详细的评估",
    riskLevel: "需要确定",
    followUp: "建议寻求专业帮助",
    detailedAnalysis: [
      {
        category: "情绪症状",
        score: Math.round(percentage),
        interpretation: "需要进一步评估情绪状态"
      },
      {
        category: "认知症状",
        score: Math.round(percentage),
        interpretation: "需要进一步评估认知功能"
      }
    ],
    lifestyle: [
      {
        area: "作息调整",
        suggestions: [
          "保持规律的作息时间",
          "确保充足的睡眠时间",
          "建立健康的生活习惯"
        ]
      }
    ]
  };

  if (percentage <= 25) {
    return {
      ...baseResult,
      severity: "心理状态稳定",
      riskLevel: "低风险",
      recommendation: "建议保持当前的生活方式，定期进行自我评估"
    };
  } else if (percentage <= 50) {
    return {
      ...baseResult,
      severity: "轻度心理困扰",
      riskLevel: "中低风险",
      recommendation: "建议适当调整生活方式，关注自我心理健康"
    };
  } else if (percentage <= 75) {
    return {
      ...baseResult,
      severity: "中度心理困扰",
      riskLevel: "中度风险",
      recommendation: "建议及时寻求专业心理咨询"
    };
  } else {
    return {
      ...baseResult,
      severity: "重度心理困扰",
      riskLevel: "高风险",
      recommendation: "建议立即就医，进行专业治疗"
    };
  }
};

export const getDetailedResult = (score: number): AssessmentResult => {
  const maxScore = 294;
  const percentage = (score / maxScore) * 100;

  const baseResult = {
    score,
    detailedAnalysis: [
      {
        category: "情绪症状",
        score: Math.round(percentage),
        interpretation: "需要专业评估情绪状态"
      },
      {
        category: "认知症状",
        score: Math.round(percentage),
        interpretation: "需要专业评估认知功能"
      }
    ],
    lifestyle: [
      {
        area: "生活规律",
        suggestions: [
          "制定详细的作息时间表",
          "建立健康的生活习惯系统",
          "保持规律的饮食作息",
          "平衡工作与休息时间"
        ]
      },
      {
        area: "身心平衡",
        suggestions: [
          "进行正念冥想练习",
          "学习呼吸放松技巧",
          "参与瑜伽或太极等活动",
          "培养身心调节能力"
        ]
      },
      {
        area: "学习成长",
        suggestions: [
          "持续学习新知识技能",
          "参与个人成长课程",
          "培养终身学习习惯",
          "拓展知识领域范围"
        ]
      },
      {
        area: "社会参与",
        suggestions: [
          "参加志愿服务活动",
          "加入兴趣社群团体",
          "维护社交支持网络",
          "发展有意义的社会关系"
        ]
      },
      {
        area: "宠物陪伴",
        suggestions: [
          "考虑领养一只适合的宠物",
          "与宠物建立日常互动时间",
          "学习宠物护理和训练知识",
          "通过照顾宠物培养责任感"
        ]
      },
      {
        area: "流浪动物关爱",
        suggestions: [
          "在固定地点定期投喂流浪猫",
          "参与社区TNR(捕捉-绝育-放归)项目",
          "与其他爱猫人士建立联系网络",
          "记录和关注流浪猫的健康状况",
          "为流浪猫提供简易庇护所"
        ]
      },
      {
        area: "动物福利",
        suggestions: [
          "了解动物保护相关知识",
          "支持当地动物保护组织",
          "分享流浪动物救助经验",
          "培养对生命的同理心和责任感"
        ]
      }
    ],
    recommendedBooks: [
      {
        category: "心理健康基础",
        books: [
          {
            title: "《活出生命的意义》",
            author: "维克多·弗兰克尔",
            description: "探讨生命意义和心理韧性的经典著作"
          },
          {
            title: "《自我关怀的力量》",
            author: "克里斯汀·内夫",
            description: "学习自我关怀和情绪管理的实用指南"
          }
        ]
      },
      {
        category: "认知提升",
        books: [
          {
            title: "《思考，快与慢》",
            author: "丹尼尔·卡尼曼",
            description: "理解人类思维模式和决策机制"
          },
          {
            title: "《刻意练习》",
            author: "安德斯·艾利克森",
            description: "提升认知能力和技能水平的科学方法"
          }
        ]
      },
      {
        category: "情绪管理",
        books: [
          {
            title: "《情绪管理的智慧》",
            author: "马修·麦凯",
            description: "实用的情绪调节和压力管理技巧"
          },
          {
            title: "《正念减压》",
            author: "卡巴金",
            description: "通过正念练习改善心理健康的指导手册"
          }
        ]
      },
      {
        category: "人际关系",
        books: [
          {
            title: "《非暴力沟通》",
            author: "马歇尔·卢森堡",
            description: "改善人际沟通和关系的实用方法"
          },
          {
            title: "《亲密关系》",
            author: "罗兰·米勒",
            description: "理解和改善人际关系的心理学指南"
          }
        ]
      },
      {
        category: "宠物心理",
        books: [
          {
            title: "《猫语大全》",
            author: "安托瓦纳·布莱恩",
            description: "深入了解猫咪行为和心理的权威指南"
          },
          {
            title: "《与猫相处的艺术》",
            author: "约翰·布雷德肖",
            description: "如何与猫咪建立深厚感情纽带的实用手册"
          }
        ]
      }
    ]
  };

  if (percentage <= 25) {
    return {
      ...baseResult,
      severity: "心理状态良好",
      riskLevel: "低风险",
      recommendation: "您的心理状态良好，建议：\n\n1. 保持健康的生活方式\n2. 定期进行心理健康检查\n3. 持续自我成长和发展\n4. 维护良好的人际关系\n5. 培养积极的兴趣爱好\n6. 考虑通过照顾动物培养爱心\n\n推荐活动：\n- 参与社区流浪猫喂养计划\n- 志愿服务动物保护组织\n- 记录照顾动物的心得体会",
      followUp: "建议每3-6个月进行一次心理健康评估，保持对自身心理状态的关注。可以通过照顾动物来培养同理心和责任感。"
    };
  } else if (percentage <= 50) {
    return {
      ...baseResult,
      severity: "轻度心理健康问题",
      riskLevel: "中低风险",
      recommendation: "您可能存在轻度心理健康问题，建议：\n\n1. 考虑进行心理咨询\n2. 加强自我心理调适\n3. 改善生活方式习惯\n4. 增加社交支持网络\n5. 学习压力管理技巧\n6. 通过照顾动物获得情感支持\n\n推荐活动：\n- 定期照顾流浪猫\n- 记录与动物互动的感受\n- 参与动物保护社群",
      followUp: "建议1-2个月内进行专业心理咨询，同时可以通过照顾动物来改善情绪状态。"
    };
  } else if (percentage <= 75) {
    return {
      ...baseResult,
      severity: "中度心理健康问题",
      riskLevel: "中度风险",
      recommendation: "您可能存在中度心理健康问题，建议：\n\n1. 及时进行专业心理咨询\n2. 考虑药物治疗评估\n3. 加强家庭支持系统\n4. 调整工作生活节奏\n5. 建立危机应对计划\n6. 适度参与动物照护活动\n\n注意事项：\n- 在确保自身状态稳定的前提下照顾动物\n- 可以从观察和轻度互动开始\n- 寻求他人协助照顾动物",
      followUp: "建议在2周内进行专业心理评估，在专业指导下逐步参与动物照护活动。"
    };
  } else {
    return {
      ...baseResult,
      severity: "严重心理健康问题",
      riskLevel: "高风险",
      recommendation: "您可能存在严重的心理健康问题，必须：\n\n1. 立即就医进行专业评估\n2. 开始系统心理治疗\n3. 评估药物治疗需求\n4. 建立24小时支持系统\n5. 制定危机干预计划\n\n关于动物互动：\n- 暂时由他人代为照顾动物\n- 在治疗稳定后逐步恢复互动\n- 将动物照护作为康复目标之一",
      followUp: "需要立即就医接受专业治疗。在康复过程中，可以将与动物的互动作为治疗的补充方式，但需要在专业医生的指导下进行。"
    };
  }
};