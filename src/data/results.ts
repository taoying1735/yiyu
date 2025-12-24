import { AssessmentResult } from '../types';

// 快速版结果 - 5个有价值内容
export const getSimpleResult = (score: number): AssessmentResult => {
  const maxScore = 30;
  const percentage = (score / maxScore) * 100;

  if (percentage <= 25) {
    return {
      score,
      severity: "心理状态良好",
      recommendation: "建议：\n1. 保持健康的生活方式\n2. 定期进行自我评估\n3. 培养积极的兴趣爱好\n4. 维持良好的社交关系\n5. 保持规律的作息时间",
      riskLevel: "低风险",
      followUp: "建议3-6个月后再次进行评估",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您的情绪状态稳定，能够很好地应对日常生活中的压力和挑战。"
        },
        {
          category: "压力水平",
          score: Math.round(percentage),
          interpretation: "您的压力水平适中，具备良好的压力管理能力。"
        },
        {
          category: "睡眠质量",
          score: Math.round(percentage),
          interpretation: "您的睡眠质量良好，有助于维持身心平衡。"
        },
        {
          category: "生活满意度",
          score: Math.round(percentage),
          interpretation: "您对当前的生活状态较为满意，积极面对生活。"
        },
        {
          category: "社交能力",
          score: Math.round(percentage),
          interpretation: "您的社交能力良好，能够与周围人建立和谐的关系。"
        }
      ]
    };
  } else if (percentage <= 50) {
    return {
      score,
      severity: "轻微心理困扰",
      recommendation: "建议：\n1. 注意休息和放松\n2. 保持规律作息\n3. 适当运动\n4. 与亲友交流\n5. 学习情绪管理技巧",
      riskLevel: "中低风险",
      followUp: "建议1-2个月后再次评估",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您可能偶尔感到情绪低落或焦虑，但整体情绪调节能力正常。"
        },
        {
          category: "压力水平",
          score: Math.round(percentage),
          interpretation: "您感受到一定的生活压力，建议学习有效的压力缓解方法。"
        },
        {
          category: "睡眠质量",
          score: Math.round(percentage),
          interpretation: "您的睡眠可能受到轻微影响，建议建立更好的睡前习惯。"
        },
        {
          category: "生活满意度",
          score: Math.round(percentage),
          interpretation: "您对生活的某些方面可能不太满意，建议积极寻求改善。"
        },
        {
          category: "社交能力",
          score: Math.round(percentage),
          interpretation: "您的社交活动可能有所减少，建议主动与朋友家人保持联系。"
        }
      ]
    };
  } else if (percentage <= 75) {
    return {
      score,
      severity: "中度心理困扰",
      recommendation: "建议：\n1. 寻求专业咨询\n2. 加强自我关注\n3. 调整生活节奏\n4. 保持社交活动\n5. 尝试放松训练",
      riskLevel: "中度风险",
      followUp: "建议2周内进行专业评估",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您经常感到情绪低落或焦虑，需要关注情绪健康。"
        },
        {
          category: "压力水平",
          score: Math.round(percentage),
          interpretation: "您承受较大的压力，需要学习更有效的应对策略。"
        },
        {
          category: "睡眠质量",
          score: Math.round(percentage),
          interpretation: "您的睡眠问题较为明显，可能影响日常生活。"
        },
        {
          category: "生活满意度",
          score: Math.round(percentage),
          interpretation: "您对生活的满意度较低，需要寻找提升幸福感的方法。"
        },
        {
          category: "社交能力",
          score: Math.round(percentage),
          interpretation: "您的社交活动明显减少，可能存在社交回避倾向。"
        }
      ]
    };
  } else {
    return {
      score,
      severity: "严重心理困扰",
      recommendation: "建议：\n1. 立即寻求专业帮助\n2. 保持与家人密切联系\n3. 避免独处\n4. 规律作息和饮食\n5. 建立危机支持系统",
      riskLevel: "高风险",
      followUp: "需要立即就医",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您的情绪状态需要立即关注，可能存在抑郁或焦虑症状。"
        },
        {
          category: "压力水平",
          score: Math.round(percentage),
          interpretation: "您承受的压力已经超出正常范围，需要专业干预。"
        },
        {
          category: "睡眠质量",
          score: Math.round(percentage),
          interpretation: "您的睡眠问题严重，需要专业治疗改善。"
        },
        {
          category: "生活满意度",
          score: Math.round(percentage),
          interpretation: "您对生活失去兴趣和希望，这是需要重视的信号。"
        },
        {
          category: "社交能力",
          score: Math.round(percentage),
          interpretation: "您可能完全回避社交，需要重建社会支持网络。"
        }
      ]
    };
  }
};

// 标准版结果 - 10个有价值内容
export const getStandardResult = (score: number): AssessmentResult => {
  const maxScore = 147;
  const percentage = (score / maxScore) * 100;

  const baseLifestyle = [
    {
      area: "作息调整",
      suggestions: [
        "建立固定的睡眠时间表，每天同一时间入睡和起床",
        "睡前1小时避免使用电子设备",
        "创造舒适的睡眠环境，保持房间黑暗、安静、凉爽"
      ]
    },
    {
      area: "运动锻炼",
      suggestions: [
        "每周至少进行3次中等强度运动，每次30分钟",
        "选择自己喜欢的运动方式，如散步、游泳、瑜伽",
        "工作间隙进行简单的伸展运动"
      ]
    },
    {
      area: "饮食健康",
      suggestions: [
        "保持规律的三餐时间",
        "增加富含维生素和矿物质的食物摄入",
        "减少咖啡因和高糖食物的摄入"
      ]
    },
    {
      area: "压力管理",
      suggestions: [
        "学习深呼吸放松技巧",
        "尝试正念冥想练习",
        "培养能够带来愉悦感的兴趣爱好"
      ]
    }
  ];

  if (percentage <= 25) {
    return {
      score,
      severity: "心理状态稳定",
      riskLevel: "低风险",
      recommendation: "您的心理状态整体良好，建议继续保持当前的健康生活方式。",
      followUp: "建议3-6个月后再次进行评估",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您的情绪状态稳定，能够很好地处理日常生活中的情绪波动。"
        },
        {
          category: "认知功能",
          score: Math.round(percentage),
          interpretation: "您的注意力、记忆力和思维能力表现良好。"
        },
        {
          category: "行为模式",
          score: Math.round(percentage),
          interpretation: "您的生活作息规律，行为表现积极健康。"
        },
        {
          category: "生理症状",
          score: Math.round(percentage),
          interpretation: "您的生理状态良好，睡眠和食欲正常。"
        },
        {
          category: "社会功能",
          score: Math.round(percentage),
          interpretation: "您的人际关系和谐，社会适应能力良好。"
        },
        {
          category: "工作学习",
          score: Math.round(percentage),
          interpretation: "您的工作或学习效率较高，能够完成各项任务。"
        },
        {
          category: "自我评价",
          score: Math.round(percentage),
          interpretation: "您对自我有较为积极的认知和评价。"
        },
        {
          category: "压力应对",
          score: Math.round(percentage),
          interpretation: "您具备良好的压力应对能力和韧性。"
        },
        {
          category: "生活意义",
          score: Math.round(percentage),
          interpretation: "您对生活有清晰的目标和意义感。"
        },
        {
          category: "未来展望",
          score: Math.round(percentage),
          interpretation: "您对未来持积极乐观的态度。"
        }
      ],
      lifestyle: baseLifestyle
    };
  } else if (percentage <= 50) {
    return {
      score,
      severity: "轻度心理困扰",
      riskLevel: "中低风险",
      recommendation: "您可能存在轻度的心理困扰，建议适当调整生活方式，关注自我心理健康。",
      followUp: "建议1-2个月后再次评估",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您偶尔会感到焦虑或低落，但总体情绪调节能力尚可。"
        },
        {
          category: "认知功能",
          score: Math.round(percentage),
          interpretation: "您的注意力有时难以集中，记忆力轻微下降。"
        },
        {
          category: "行为模式",
          score: Math.round(percentage),
          interpretation: "您的生活作息基本规律，但某些习惯可能需要调整。"
        },
        {
          category: "生理症状",
          score: Math.round(percentage),
          interpretation: "您可能偶尔出现睡眠问题或食欲变化。"
        },
        {
          category: "社会功能",
          score: Math.round(percentage),
          interpretation: "您的社交活动基本正常，但在某些情况下可能回避社交。"
        },
        {
          category: "工作学习",
          score: Math.round(percentage),
          interpretation: "您的工作或学习效率有时会受到影响。"
        },
        {
          category: "自我评价",
          score: Math.round(percentage),
          interpretation: "您对自己的评价有时不够积极，存在自我怀疑。"
        },
        {
          category: "压力应对",
          score: Math.round(percentage),
          interpretation: "您面对压力时有时感到困难，需要学习应对策略。"
        },
        {
          category: "生活意义",
          score: Math.round(percentage),
          interpretation: "您可能对生活的意义感到困惑，需要重新思考人生目标。"
        },
        {
          category: "未来展望",
          score: Math.round(percentage),
          interpretation: "您对未来有时感到担忧，需要培养更积极的心态。"
        }
      ],
      lifestyle: baseLifestyle
    };
  } else if (percentage <= 75) {
    return {
      score,
      severity: "中度心理困扰",
      riskLevel: "中度风险",
      recommendation: "您可能存在中度心理困扰，建议及时寻求专业心理咨询。",
      followUp: "建议2周内进行专业评估",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您经常感到情绪低落或焦虑，需要关注情绪健康。"
        },
        {
          category: "认知功能",
          score: Math.round(percentage),
          interpretation: "您的注意力难以集中，记忆力明显下降。"
        },
        {
          category: "行为模式",
          score: Math.round(percentage),
          interpretation: "您的生活作息出现明显紊乱，需要调整。"
        },
        {
          category: "生理症状",
          score: Math.round(percentage),
          interpretation: "您的睡眠和食欲问题较为明显，影响日常生活。"
        },
        {
          category: "社会功能",
          score: Math.round(percentage),
          interpretation: "您的社交活动明显减少，可能存在社交回避。"
        },
        {
          category: "工作学习",
          score: Math.round(percentage),
          interpretation: "您的工作或学习效率明显下降，难以完成任务。"
        },
        {
          category: "自我评价",
          score: Math.round(percentage),
          interpretation: "您对自己的评价较为消极，存在明显的自我否定。"
        },
        {
          category: "压力应对",
          score: Math.round(percentage),
          interpretation: "您的压力应对能力不足，需要学习有效的应对方法。"
        },
        {
          category: "生活意义",
          score: Math.round(percentage),
          interpretation: "您可能对生活失去意义感，需要重新寻找人生目标。"
        },
        {
          category: "未来展望",
          score: Math.round(percentage),
          interpretation: "您对未来持悲观态度，需要建立更积极的展望。"
        }
      ],
      lifestyle: baseLifestyle
    };
  } else {
    return {
      score,
      severity: "重度心理困扰",
      riskLevel: "高风险",
      recommendation: "您可能存在严重的心理健康问题，建议立即就医，进行专业治疗。",
      followUp: "需要立即就医",
      detailedAnalysis: [
        {
          category: "情绪状态",
          score: Math.round(percentage),
          interpretation: "您的情绪状态需要立即关注，可能存在抑郁或焦虑障碍。"
        },
        {
          category: "认知功能",
          score: Math.round(percentage),
          interpretation: "您的认知功能严重受损，影响正常生活。"
        },
        {
          category: "行为模式",
          score: Math.round(percentage),
          interpretation: "您的生活作息严重紊乱，需要专业干预。"
        },
        {
          category: "生理症状",
          score: Math.round(percentage),
          interpretation: "您的生理症状严重，需要全面的身体检查。"
        },
        {
          category: "社会功能",
          score: Math.round(percentage),
          interpretation: "您的社会功能严重受损，可能完全回避社交。"
        },
        {
          category: "工作学习",
          score: Math.round(percentage),
          interpretation: "您的工作或学习能力严重下降，可能无法正常工作学习。"
        },
        {
          category: "自我评价",
          score: Math.round(percentage),
          interpretation: "您的自我评价极低，可能存在强烈的自我否定感。"
        },
        {
          category: "压力应对",
          score: Math.round(percentage),
          interpretation: "您的压力应对能力严重不足，处于危机状态。"
        },
        {
          category: "生活意义",
          score: Math.round(percentage),
          interpretation: "您可能感到生活完全失去意义，这是严重的警示信号。"
        },
        {
          category: "未来展望",
          score: Math.round(percentage),
          interpretation: "您对未来感到绝望，需要立即的专业帮助。"
        }
      ],
      lifestyle: baseLifestyle
    };
  }
};

// 专业版结果 - 20个有价值内容
export const getDetailedResult = (score: number): AssessmentResult => {
  const maxScore = 294;
  const percentage = (score / maxScore) * 100;

  const baseLifestyle = [
    {
      area: "生活规律",
      suggestions: [
        "制定详细的作息时间表，包括起床、用餐、工作、休息时间",
        "建立健康的生活习惯系统，如早起喝一杯水、睡前阅读",
        "保持规律的饮食作息，避免暴饮暴食或节食",
        "平衡工作与休息时间，学会合理分配精力"
      ]
    },
    {
      area: "身心平衡",
      suggestions: [
        "每天进行15-30分钟的正念冥想练习",
        "学习深呼吸放松技巧，每天练习3-5次",
        "参与瑜伽或太极等活动，促进身心和谐",
        "培养身心调节能力，学会自我觉察"
      ]
    },
    {
      area: "运动锻炼",
      suggestions: [
        "每周至少进行150分钟中等强度有氧运动",
        "选择自己喜欢的运动方式，如跑步、游泳、骑行",
        "结合力量训练，提高身体素质",
        "利用碎片时间进行活动，如走楼梯代替电梯"
      ]
    },
    {
      area: "社交支持",
      suggestions: [
        "主动与家人朋友保持定期联系",
        "参加兴趣小组或志愿者活动",
        "学会表达自己的情感和需求",
        "建立支持性的人际网络"
      ]
    },
    {
      area: "情绪管理",
      suggestions: [
        "记录情绪日记，了解情绪触发因素",
        "学习认知重构技巧，改变消极思维模式",
        "培养情绪调节策略，如运动、艺术创作",
        "在需要时寻求专业心理帮助"
      ]
    },
    {
      area: "认知训练",
      suggestions: [
        "进行记忆力训练，如记忆游戏、学习新技能",
        "练习专注力训练，如番茄工作法",
        "阅读思维类书籍，提升思维能力",
        "解决逻辑谜题，锻炼大脑"
      ]
    },
    {
      area: "职业发展",
      suggestions: [
        "制定清晰的职业发展目标",
        "提升专业技能和知识水平",
        "学会管理工作压力，建立工作边界",
        "寻求导师或职业指导"
      ]
    }
  ];

  const baseBooks = [
    {
      category: "心理健康基础",
      books: [
        { title: "《活出生命的意义》", author: "维克多·弗兰克尔", description: "探讨生命意义和心理韧性的经典著作" },
        { title: "《自我关怀的力量》", author: "克里斯汀·内夫", description: "学习自我关怀和情绪管理的实用指南" },
        { title: "《情绪急救》", author: "盖伊·温奇", description: "处理日常情绪问题的实用手册" },
        { title: "《心理急救》", author: "盖伊·温奇", description: "应对心理创伤和危机的指南" }
      ]
    },
    {
      category: "认知提升",
      books: [
        { title: "《思考，快与慢》", author: "丹尼尔·卡尼曼", description: "理解人类思维模式和决策机制" },
        { title: "《刻意练习》", author: "安德斯·艾利克森", description: "提升认知能力和技能水平的科学方法" },
        { title: "《深度工作》", author: "卡尔·纽波特", description: "培养专注力和深度思考能力" },
        { title: "《原则》", author: "瑞·达利欧", description: "建立系统化思维和决策框架" }
      ]
    },
    {
      category: "情绪管理",
      books: [
        { title: "《非暴力沟通》", author: "马歇尔·卢森堡", description: "改善人际沟通和关系的实用方法" },
        { title: "《正念减压》", author: "卡巴金", description: "通过正念练习改善心理健康的指导手册" },
        { title: "《情绪的语言》", author: "丹·西格尔", description: "理解和管理情绪的科学方法" },
        { title: "《焦虑症的自救》", author: "克莱尔·威克斯", description: "克服焦虑障碍的实用指南" }
      ]
    },
    {
      category: "人际关系",
      books: [
        { title: "《亲密关系》", author: "罗兰·米勒", description: "理解和改善人际关系的心理学指南" },
        { title: "《人性的弱点》", author: "戴尔·卡耐基", description: "建立良好人际关系的经典著作" },
        { title: "《关键对话》", author: "科里·帕特森", description: "处理高难度沟通的实用技巧" },
        { title: "《被讨厌的勇气》", author: "岸见一郎", description: "阿德勒心理学的人生启示" }
      ]
    },
    {
      category: "正念与冥想",
      books: [
        { title: "《当下的力量》", author: "埃克哈特·托利", description: "活在当下的灵性指导" },
        { title: "《冥想正念指南》", author: "乔·卡巴金", description: "正念冥想的入门与实践" },
        { title: "《平静的心》", author: "迪帕克·乔普拉", description: "寻找内心平静的智慧" },
        { title: "《正念的奇迹》", author: "一行禅师", description: "在日常生活中修习正念" }
      ]
    }
  ];

  const baseResources = [
    {
      type: "心理援助热线",
      links: [
        { title: "全国心理援助热线", url: "tel:400-161-9995" },
        { title: "青少年心理咨询热线", url: "tel:12355" },
        { title: "北京心理危机研究与干预中心", url: "tel:010-82951332" },
        { title: "上海心理援助热线", url: "tel:021-12320-5" }
      ]
    },
    {
      type: "在线心理咨询平台",
      links: [
        { title: "壹心理", url: "https://www.xinli001.com" },
        { title: "简单心理", url: "https://www.jiandanxinli.com" },
        { title: "昭阳医生", url: "https://www.gzjiayou.com" },
        { title: "丁香医生心理频道", url: "https://www.dxy.com" }
      ]
    },
    {
      type: "专业机构",
      links: [
        { title: "中国心理学会", url: "http://www.cpsbeijing.org" },
        { title: "中国心理卫生协会", url: "http://www.cma.org.cn" },
        { title: "各地三甲医院心理科", url: "建议就近选择" },
        { title: "社区心理健康服务中心", url: "建议就近选择" }
      ]
    }
  ];

  if (percentage <= 25) {
    return {
      score,
      severity: "心理状态良好",
      riskLevel: "低风险",
      recommendation: "您的心理状态良好，建议继续保持健康的生活方式，定期进行心理健康检查。",
      followUp: "建议每3-6个月进行一次心理健康评估",
      detailedAnalysis: [
        {
          category: "核心症状评估",
          score: Math.round(percentage),
          interpretation: "您的核心心理症状表现良好，情绪稳定，积极向上。"
        },
        {
          category: "情绪症状深度分析",
          score: Math.round(percentage),
          interpretation: "您的情绪调节能力强，能够有效处理各种情绪体验。"
        },
        {
          category: "认知功能全面评估",
          score: Math.round(percentage),
          interpretation: "您的注意力、记忆力、思维能力都处于良好状态。"
        },
        {
          category: "认知功能细分",
          score: Math.round(percentage),
          interpretation: "记忆力、思维速度、决策能力、学习能力均表现优秀。"
        },
        {
          category: "生理症状评估",
          score: Math.round(percentage),
          interpretation: "您的生理状态良好，睡眠、食欲、精力水平正常。"
        },
        {
          category: "生理功能细节",
          score: Math.round(percentage),
          interpretation: "各系统功能正常，无明显躯体化症状。"
        },
        {
          category: "行为症状评估",
          score: Math.round(percentage),
          interpretation: "您的行为模式健康，生活规律，适应良好。"
        },
        {
          category: "行为功能细节",
          score: Math.round(percentage),
          interpretation: "工作效率、社交活动、日常功能均表现良好。"
        },
        {
          category: "人际关系评估",
          score: Math.round(percentage),
          interpretation: "您的人际关系和谐，社会支持网络完善。"
        },
        {
          category: "人际功能细节",
          score: Math.round(percentage),
          interpretation: "家庭关系、朋友关系、工作关系均处于良好状态。"
        },
        {
          category: "自我认知评估",
          score: Math.round(percentage),
          interpretation: "您的自我认知清晰，自我价值感积极。"
        },
        {
          category: "自我认知细节",
          score: Math.round(percentage),
          interpretation: "自我接纳度高，生活目标明确，未来充满希望。"
        },
        {
          category: "压力应对能力",
          score: Math.round(percentage),
          interpretation: "您的压力应对能力强，具备良好的心理韧性。"
        },
        {
          category: "适应能力评估",
          score: Math.round(percentage),
          interpretation: "您的环境适应能力强，能够灵活应对变化。"
        },
        {
          category: "生活质量评估",
          score: Math.round(percentage),
          interpretation: "您的生活质量高，生活满意度强。"
        },
        {
          category: "生活满意度细节",
          score: Math.round(percentage),
          interpretation: "工作满意度、生活满意度、人际关系满意度均较高。"
        },
        {
          category: "心理资源评估",
          score: Math.round(percentage),
          interpretation: "您的心理资源丰富，具备良好的心理储备。"
        },
        {
          category: "成长潜力评估",
          score: Math.round(percentage),
          interpretation: "您具备很强的个人成长和发展潜力。"
        },
        {
          category: "整体功能评估",
          score: Math.round(percentage),
          interpretation: "您的整体心理功能良好，社会适应能力强。"
        },
        {
          category: "综合健康指标",
          score: Math.round(percentage),
          interpretation: "您的心理健康综合指标优秀，继续保持当前状态。"
        }
      ],
      lifestyle: baseLifestyle,
      recommendedBooks: baseBooks,
      resources: baseResources
    };
  } else if (percentage <= 50) {
    return {
      score,
      severity: "轻度心理健康问题",
      riskLevel: "中低风险",
      recommendation: "您可能存在轻度心理健康问题，建议适当调整生活方式，关注自我心理健康，必要时寻求专业咨询。",
      followUp: "建议1-2个月内进行专业心理咨询",
      detailedAnalysis: [
        {
          category: "核心症状评估",
          score: Math.round(percentage),
          interpretation: "您有一些核心心理症状，但总体可控。"
        },
        {
          category: "情绪症状深度分析",
          score: Math.round(percentage),
          interpretation: "您偶尔出现情绪波动，需要加强情绪管理。"
        },
        {
          category: "认知功能全面评估",
          score: Math.round(percentage),
          interpretation: "您的认知功能基本正常，但某些方面需要提升。"
        },
        {
          category: "认知功能细分",
          score: Math.round(percentage),
          interpretation: "注意力有时分散，记忆力轻微下降，需要认知训练。"
        },
        {
          category: "生理症状评估",
          score: Math.round(percentage),
          interpretation: "您有一些轻微的生理症状，需要注意。"
        },
        {
          category: "生理功能细节",
          score: Math.round(percentage),
          interpretation: "睡眠质量有时不佳，可能有轻微躯体不适。"
        },
        {
          category: "行为症状评估",
          score: Math.round(percentage),
          interpretation: "您的行为模式基本正常，但有些习惯需要调整。"
        },
        {
          category: "行为功能细节",
          score: Math.round(percentage),
          interpretation: "工作效率有时受影响，社交活动轻微减少。"
        },
        {
          category: "人际关系评估",
          score: Math.round(percentage),
          interpretation: "您的人际关系基本和谐，但某些关系需要改善。"
        },
        {
          category: "人际功能细节",
          score: Math.round(percentage),
          interpretation: "有时感到社交困难，需要提升沟通技巧。"
        },
        {
          category: "自我认知评估",
          score: Math.round(percentage),
          interpretation: "您的自我认知基本清晰，但有时自我怀疑。"
        },
        {
          category: "自我认知细节",
          score: Math.round(percentage),
          interpretation: "自我接纳度有待提高，需要增强自信心。"
        },
        {
          category: "压力应对能力",
          score: Math.round(percentage),
          interpretation: "您的压力应对能力一般，需要学习更多应对策略。"
        },
        {
          category: "适应能力评估",
          score: Math.round(percentage),
          interpretation: "您的适应能力尚可，但面对变化时有困难。"
        },
        {
          category: "生活质量评估",
          score: Math.round(percentage),
          interpretation: "您的生活质量中等，有提升空间。"
        },
        {
          category: "生活满意度细节",
          score: Math.round(percentage),
          interpretation: "某些生活领域不太满意，需要积极改善。"
        },
        {
          category: "心理资源评估",
          score: Math.round(percentage),
          interpretation: "您的心理资源一般，需要加强心理储备。"
        },
        {
          category: "成长潜力评估",
          score: Math.round(percentage),
          interpretation: "您具备一定的成长潜力，需要挖掘和发展。"
        },
        {
          category: "整体功能评估",
          score: Math.round(percentage),
          interpretation: "您的整体心理功能尚可，但需要针对性改善。"
        },
        {
          category: "综合健康指标",
          score: Math.round(percentage),
          interpretation: "您的心理健康综合指标中等，建议持续关注。"
        }
      ],
      lifestyle: baseLifestyle,
      recommendedBooks: baseBooks,
      resources: baseResources
    };
  } else if (percentage <= 75) {
    return {
      score,
      severity: "中度心理健康问题",
      riskLevel: "中度风险",
      recommendation: "您可能存在中度心理健康问题，建议及时进行专业心理咨询，考虑药物治疗评估。",
      followUp: "建议在2周内进行专业心理评估",
      detailedAnalysis: [
        {
          category: "核心症状评估",
          score: Math.round(percentage),
          interpretation: "您的核心心理症状明显，需要专业关注。"
        },
        {
          category: "情绪症状深度分析",
          score: Math.round(percentage),
          interpretation: "您经常出现情绪问题，需要专业的情绪干预。"
        },
        {
          category: "认知功能全面评估",
          score: Math.round(percentage),
          interpretation: "您的认知功能受到明显影响，需要认知训练。"
        },
        {
          category: "认知功能细分",
          score: Math.round(percentage),
          interpretation: "注意力难以集中，记忆力下降明显，思维迟缓。"
        },
        {
          category: "生理症状评估",
          score: Math.round(percentage),
          interpretation: "您的生理症状较为明显，需要医学评估。"
        },
        {
          category: "生理功能细节",
          score: Math.round(percentage),
          interpretation: "睡眠问题严重，可能有多种躯体不适症状。"
        },
        {
          category: "行为症状评估",
          score: Math.round(percentage),
          interpretation: "您的行为模式明显改变，需要行为干预。"
        },
        {
          category: "行为功能细节",
          score: Math.round(percentage),
          interpretation: "工作效率显著下降，社交活动明显减少。"
        },
        {
          category: "人际关系评估",
          score: Math.round(percentage),
          interpretation: "您的人际关系紧张，需要关系治疗。"
        },
        {
          category: "人际功能细节",
          score: Math.round(percentage),
          interpretation: "存在明显的社交回避和人际冲突。"
        },
        {
          category: "自我认知评估",
          score: Math.round(percentage),
          interpretation: "您的自我认知消极，需要认知治疗。"
        },
        {
          category: "自我认知细节",
          score: Math.round(percentage),
          interpretation: "自我评价低，存在明显的自我否定。"
        },
        {
          category: "压力应对能力",
          score: Math.round(percentage),
          interpretation: "您的压力应对能力不足，需要专业指导。"
        },
        {
          category: "适应能力评估",
          score: Math.round(percentage),
          interpretation: "您的适应能力较差，难以应对环境变化。"
        },
        {
          category: "生活质量评估",
          score: Math.round(percentage),
          interpretation: "您的生活质量较低，需要全面改善。"
        },
        {
          category: "生活满意度细节",
          score: Math.round(percentage),
          interpretation: "多个生活领域不满意，生活质量下降。"
        },
        {
          category: "心理资源评估",
          score: Math.round(percentage),
          interpretation: "您的心理资源不足，需要补充心理能量。"
        },
        {
          category: "成长潜力评估",
          score: Math.round(percentage),
          interpretation: "您的成长潜力受限，需要专业帮助释放。"
        },
        {
          category: "整体功能评估",
          score: Math.round(percentage),
          interpretation: "您的整体心理功能受损，需要综合治疗。"
        },
        {
          category: "综合健康指标",
          score: Math.round(percentage),
          interpretation: "您的心理健康综合指标较差，需要专业干预。"
        }
      ],
      lifestyle: baseLifestyle,
      recommendedBooks: baseBooks,
      resources: baseResources,
      emergencyResources: [
        {
          type: "危机干预热线",
          contact: "400-161-9995",
          description: "24小时心理危机干预热线"
        },
        {
          type: "紧急医疗",
          contact: "120",
          description: "如出现自伤或伤人念头，请立即拨打"
        },
        {
          type: "就近就医",
          contact: "当地三甲医院心理科/精神科",
          description: "建议尽快到专业医疗机构就诊"
        }
      ]
    };
  } else {
    return {
      score,
      severity: "严重心理健康问题",
      riskLevel: "高风险",
      recommendation: "您可能存在严重的心理健康问题，必须立即就医进行专业评估和治疗，开始系统心理治疗和药物治疗评估。",
      followUp: "需要立即就医接受专业治疗",
      detailedAnalysis: [
        {
          category: "核心症状评估",
          score: Math.round(percentage),
          interpretation: "您的核心心理症状严重，可能符合心理障碍诊断标准。"
        },
        {
          category: "情绪症状深度分析",
          score: Math.round(percentage),
          interpretation: "您存在严重的情绪障碍，需要紧急专业干预。"
        },
        {
          category: "认知功能全面评估",
          score: Math.round(percentage),
          interpretation: "您的认知功能严重受损，影响正常生活功能。"
        },
        {
          category: "认知功能细分",
          score: Math.round(percentage),
          interpretation: "注意力、记忆力、思维能力均严重受损。"
        },
        {
          category: "生理症状评估",
          score: Math.round(percentage),
          interpretation: "您的生理症状严重，需要全面的医学评估。"
        },
        {
          category: "生理功能细节",
          score: Math.round(percentage),
          interpretation: "严重的睡眠障碍，多种躯体化症状明显。"
        },
        {
          category: "行为症状评估",
          score: Math.round(percentage),
          interpretation: "您的行为模式严重异常，需要紧急行为干预。"
        },
        {
          category: "行为功能细节",
          score: Math.round(percentage),
          interpretation: "工作学习能力严重受损，社会功能明显受损。"
        },
        {
          category: "人际关系评估",
          score: Math.round(percentage),
          interpretation: "您的人际关系严重受损，可能完全社会隔离。"
        },
        {
          category: "人际功能细节",
          score: Math.round(percentage),
          interpretation: "严重的社交回避，可能存在人际敌意。"
        },
        {
          category: "自我认知评估",
          score: Math.round(percentage),
          interpretation: "您的自我认知严重扭曲，需要紧急认知治疗。"
        },
        {
          category: "自我认知细节",
          score: Math.round(percentage),
          interpretation: "严重的自我否定，可能存在自我伤害意念。"
        },
        {
          category: "压力应对能力",
          score: Math.round(percentage),
          interpretation: "您的压力应对能力崩溃，处于危机状态。"
        },
        {
          category: "适应能力评估",
          score: Math.round(percentage),
          interpretation: "您的适应能力严重受损，无法应对日常变化。"
        },
        {
          category: "生活质量评估",
          score: Math.round(percentage),
          interpretation: "您的生活质量极低，生活几乎无法正常进行。"
        },
        {
          category: "生活满意度细节",
          score: Math.round(percentage),
          interpretation: "对生活完全不满意，可能感到绝望。"
        },
        {
          category: "心理资源评估",
          score: Math.round(percentage),
          interpretation: "您的心理资源枯竭，急需外部支持。"
        },
        {
          category: "成长潜力评估",
          score: Math.round(percentage),
          interpretation: "您的成长潜力严重受阻，需要专业帮助恢复。"
        },
        {
          category: "整体功能评估",
          score: Math.round(percentage),
          interpretation: "您的整体心理功能严重受损，需要综合治疗。"
        },
        {
          category: "综合健康指标",
          score: Math.round(percentage),
          interpretation: "您的心理健康综合指标极差，需要立即专业治疗。"
        }
      ],
      lifestyle: baseLifestyle,
      recommendedBooks: baseBooks,
      resources: baseResources,
      emergencyResources: [
        {
          type: "危机干预热线",
          contact: "400-161-9995",
          description: "24小时心理危机干预热线，请立即拨打"
        },
        {
          type: "紧急医疗",
          contact: "120",
          description: "如出现自伤或伤人念头，请立即拨打120或前往最近医院"
        },
        {
          type: "紧急就医",
          contact: "立即前往三甲医院心理科/精神科",
          description: "不要等待，立即寻求专业医疗帮助"
        },
        {
          type: "家人支持",
          contact: "联系家人或信任的朋友",
          description: "不要独自面对，告诉信任的人您的状况"
        }
      ]
    };
  }
};
