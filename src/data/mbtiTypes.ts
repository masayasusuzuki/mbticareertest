import { MBTIType } from '../types';

export const mbtiTypes: MBTIType[] = [
  {
    type: 'ISTJ',
    title: '論理的な管理者',
    description: '誠実で実践的、事実に基づいて判断を下す現実主義者です。',
    strengths: [
      '責任感が強い',
      '細部まで注意を払う',
      '実践的で現実的',
      '誠実で信頼できる',
      '秩序を重んじる'
    ],
    weaknesses: [
      '融通が利きにくい',
      '新しい方法を受け入れるのに時間がかかる',
      '感情表現が苦手',
      '批判的になりやすい',
      '完璧主義的な傾向がある'
    ]
  },
  {
    type: 'ISFJ',
    title: '思いやりのある保護者',
    description: '献身的で温かく、他者のニーズに敏感な保護者タイプです。',
    strengths: [
      '思いやりがある',
      '信頼性が高い',
      '注意深い',
      '献身的',
      '忍耐強い'
    ],
    weaknesses: [
      '自己主張が苦手',
      '変化を好まない',
      '批判に敏感',
      '自分のニーズを後回しにしがち',
      'ストレスを抱え込みやすい'
    ]
  },
  {
    type: 'INFJ',
    title: '神秘的な理想主義者',
    description: '洞察力があり、他者の感情や動機を深く理解する理想主義者です。',
    strengths: [
      '洞察力が鋭い',
      '創造的思考力がある',
      '他者への共感力が高い',
      '誠実で献身的',
      '目標達成への意欲が強い'
    ],
    weaknesses: [
      '完璧主義的',
      '人の期待に応えすぎる',
      '批判に敏感',
      '自分を追い込みやすい',
      '現実との折り合いが難しい'
    ]
  },
  {
    type: 'INTJ',
    title: '戦略的な設計者',
    description: '独創的な思考と強い意志を持つ、戦略的なプランナーです。',
    strengths: [
      '論理的思考力が高い',
      '独創的なアイデアを生む',
      '高い目標設定力',
      '効率的な問題解決力',
      '知的好奇心が強い'
    ],
    weaknesses: [
      '感情表現が苦手',
      '他者への共感が難しい',
      '過度に批判的になる',
      '柔軟性に欠ける',
      '完璧主義的な傾向'
    ]
  },
  {
    type: 'ISTP',
    title: '論理的な職人',
    description: '物事の仕組みを理解し、実践的な解決策を見出す探究者です。',
    strengths: [
      '冷静な判断力',
      '危機対応能力が高い',
      '効率的な問題解決力',
      '適応力がある',
      '実践的な技能が豊富'
    ],
    weaknesses: [
      '感情表現が苦手',
      '長期的な計画が苦手',
      '約束や規則を軽視しがち',
      '他者の感情への配慮が不足',
      '飽きやすい'
    ]
  },
  {
    type: 'ISFP',
    title: '繊細な芸術家',
    description: '感性豊かで、自分の価値観に忠実に生きるアーティストです。',
    strengths: [
      '芸術的センスがある',
      '思いやりがある',
      '柔軟性がある',
      '誠実',
      '平和主義者'
    ],
    weaknesses: [
      '自己主張が苦手',
      '計画性に欠ける',
      '批判に敏感',
      '長期目標の設定が苦手',
      '競争を避ける'
    ]
  },
  {
    type: 'INFP',
    title: '理想主義的な仲介者',
    description: '深い共感力と創造性を持ち、理想を追求する夢想家です。',
    strengths: [
      '創造性が豊か',
      '強い共感力',
      '適応力がある',
      '誠実',
      '理想を追求する'
    ],
    weaknesses: [
      '現実的な判断が苦手',
      '批判に敏感',
      '自己批判が強い',
      '優柔不断になりやすい',
      '完璧主義的'
    ]
  },
  {
    type: 'INTP',
    title: '論理的な発明家',
    description: '論理的思考と創造性を組み合わせ、新しい可能性を探求する発明家です。',
    strengths: [
      '分析力が高い',
      '創造的な問題解決力',
      '客観的な視点',
      '知的好奇心が強い',
      '独創的な発想力'
    ],
    weaknesses: [
      '感情表現が苦手',
      '実践的な行動が遅い',
      '社交性に欠ける',
      '細かい規則を軽視',
      '完璧主義的'
    ]
  },
  {
    type: 'ESTP',
    title: '活動的な起業家',
    description: '行動力があり、現実的な問題解決を得意とする冒険家です。',
    strengths: [
      '行動力がある',
      '適応力が高い',
      '実践的',
      '危機対応能力が高い',
      'リスク管理が得意'
    ],
    weaknesses: [
      '忍耐力に欠ける',
      '長期計画が苦手',
      '細かい規則を軽視',
      '感情面への配慮不足',
      '衝動的になりやすい'
    ]
  },
  {
    type: 'ESFP',
    title: '陽気な芸能人',
    description: '明るく社交的で、周囲を楽しませることを得意とするエンターテイナーです。',
    strengths: [
      '社交性が高い',
      '明るく楽観的',
      '適応力がある',
      '実践的',
      '共感力がある'
    ],
    weaknesses: [
      '計画性に欠ける',
      '長期目標の設定が苦手',
      '集中力が続かない',
      '深刻な話題を避ける',
      '決断力に欠ける'
    ]
  },
  {
    type: 'ENFP',
    title: '情熱的な活動家',
    description: '創造的で情熱的、新しい可能性を追求する自由な精神の持ち主です。',
    strengths: [
      '創造性が豊か',
      '共感力が高い',
      '適応力がある',
      'コミュニケーション力が高い',
      '情熱的'
    ],
    weaknesses: [
      '優柔不断',
      '集中力が続かない',
      '現実的な判断が苦手',
      '感情的になりやすい',
      '計画性に欠ける'
    ]
  },
  {
    type: 'ENTP',
    title: '論理的な発明家',
    description: '知的好奇心が強く、新しいアイデアを生み出す革新者です。',
    strengths: [
      '創造的な問題解決力',
      '適応力が高い',
      '分析力がある',
      '知的好奇心が強い',
      '議論力がある'
    ],
    weaknesses: [
      '気が散りやすい',
      '細部への注意不足',
      '感情面への配慮不足',
      '反抗的になりやすい',
      '完遂力に欠ける'
    ]
  },
  {
    type: 'ESTJ',
    title: '実践的な管理者',
    description: '組織力があり、効率的な目標達成を重視する管理者タイプです。',
    strengths: [
      'リーダーシップ力',
      '組織力がある',
      '実践的',
      '責任感が強い',
      '効率を重視する'
    ],
    weaknesses: [
      '融通が利かない',
      '感情面への配慮不足',
      '新しい方法を受け入れにくい',
      '批判的になりやすい',
      '完璧主義的'
    ]
  },
  {
    type: 'ESFJ',
    title: '社交的な調整者',
    description: '思いやりがあり、他者との調和を重視する世話役です。',
    strengths: [
      '思いやりがある',
      '協調性が高い',
      '実践的',
      '責任感が強い',
      '社交性が高い'
    ],
    weaknesses: [
      '批判に敏感',
      '変化を好まない',
      '自己主張が苦手',
      '依存的になりやすい',
      '人の評価を気にしすぎる'
    ]
  },
  {
    type: 'ENFJ',
    title: 'カリスマ的な指導者',
    description: '人々を導き、成長を支援する情熱的なリーダーです。',
    strengths: [
      'リーダーシップ力',
      '共感力が高い',
      'コミュニケーション力が高い',
      '責任感が強い',
      '目標達成への意欲'
    ],
    weaknesses: [
      '批判に敏感',
      '完璧主義的',
      '自己犠牲的になりやすい',
      '優柔不断になることがある',
      'ストレスを抱え込む'
    ]
  },
  {
    type: 'ENTJ',
    title: '戦略的な指導者',
    description: '論理的思考と強いリーダーシップを持つ指導者タイプです。',
    strengths: [
      '強いリーダーシップ',
      '戦略的思考力',
      '決断力がある',
      '効率を重視する',
      '目標達成への意欲'
    ],
    weaknesses: [
      '感情面への配慮不足',
      '独断的になりやすい',
      '批判的になりやすい',
      '完璧主義的',
      '柔軟性に欠ける'
    ]
  }
];