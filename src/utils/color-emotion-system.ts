/**
 * 🎨 Color-Emotion Integration System
 * カラーパレットガイドとModel-A感情設計を統合するシステム
 */

export interface ColorPsychology {
  hex: string
  name: string
  emotionalImpact: string[]
  businessContext: string[]
  accessibility: {
    contrastRatio: number
    colorBlindSafe: boolean
    wcagLevel: 'AA' | 'AAA'
  }
  culturalContext: {
    japan: string
    global: string
  }
}

export interface IndustryColorStrategy {
  industry: string
  primaryColor: ColorPsychology
  secondaryColor: ColorPsychology
  accentColor: ColorPsychology
  reasoning: string
  emotionalJourney: {
    entry: string    // 入口での感情
    engagement: string // エンゲージメント時の感情
    action: string   // アクション時の感情
  }
  implementationGuidelines: {
    primaryUsage: string[]
    secondaryUsage: string[]
    accentUsage: string[]
    avoidance: string[]
  }
}

export class ColorEmotionSystem {
  private colorDatabase: Map<string, ColorPsychology> = new Map()
  private industryStrategies: Map<string, IndustryColorStrategy> = new Map()

  constructor() {
    this.initializeColorDatabase()
    this.initializeIndustryStrategies()
  }

  /**
   * カラーデータベースを初期化
   */
  private initializeColorDatabase() {
    const colors: ColorPsychology[] = [
      // 医療系ブルー
      {
        hex: '#0969da',
        name: '医療系ブルー',
        emotionalImpact: ['trust', 'reliability', 'professionalism'],
        businessContext: ['医療', '金融', '法律', 'コンサルティング'],
        accessibility: {
          contrastRatio: 7.2,
          colorBlindSafe: true,
          wcagLevel: 'AAA'
        },
        culturalContext: {
          japan: '誠実さ・信頼性の象徴、企業文化で重視される色',
          global: '医療・技術分野での標準的な信頼色'
        }
      },
      // 健康系グリーン
      {
        hex: '#1f883d',
        name: '健康系グリーン',
        emotionalImpact: ['health', 'growth', 'stability'],
        businessContext: ['医療', '環境', '食品', '教育'],
        accessibility: {
          contrastRatio: 6.8,
          colorBlindSafe: true,
          wcagLevel: 'AAA'
        },
        culturalContext: {
          japan: '自然・健康の象徴、安心感を与える色',
          global: '成長・持続可能性の象徴'
        }
      },
      // 注意喚起オレンジ
      {
        hex: '#fb8500',
        name: '注意喚起オレンジ',
        emotionalImpact: ['attention', 'energy', 'warmth'],
        businessContext: ['警告', '重要情報', '食品', 'エンターテイメント'],
        accessibility: {
          contrastRatio: 5.1,
          colorBlindSafe: false,
          wcagLevel: 'AA'
        },
        culturalContext: {
          japan: '活力・積極性の表現、注意喚起に効果的',
          global: '食欲増進・エネルギッシュな印象'
        }
      },
      // コーポレートブルー
      {
        hex: '#3b82f6',
        name: 'コーポレートブルー',
        emotionalImpact: ['professionalism', 'innovation', 'efficiency'],
        businessContext: ['SaaS', 'テクノロジー', 'スタートアップ', 'コンサルティング'],
        accessibility: {
          contrastRatio: 6.5,
          colorBlindSafe: true,
          wcagLevel: 'AAA'
        },
        culturalContext: {
          japan: 'モダンな企業イメージ、革新性の表現',
          global: 'テック企業の標準色、信頼と革新の両立'
        }
      },
      // 情熱のレッド
      {
        hex: '#dc2626',
        name: '情熱のレッド',
        emotionalImpact: ['urgency', 'passion', 'action'],
        businessContext: ['EC', 'セール', '緊急', 'エンターテイメント'],
        accessibility: {
          contrastRatio: 5.9,
          colorBlindSafe: false,
          wcagLevel: 'AA'
        },
        culturalContext: {
          japan: '情熱・決意の表現、祭りや特別な日の色',
          global: '緊急性・重要性の強調、購買意欲の刺激'
        }
      },
      // 温かみのオレンジ
      {
        hex: '#d97706',
        name: '温かみのオレンジ',
        emotionalImpact: ['warmth', 'appetite', 'friendliness'],
        businessContext: ['飲食', 'ホスピタリティ', '家族向け', 'コミュニティ'],
        accessibility: {
          contrastRatio: 4.8,
          colorBlindSafe: false,
          wcagLevel: 'AA'
        },
        culturalContext: {
          japan: '温かみ・親しみやすさ、家庭的な雰囲気',
          global: '食欲増進・社交的な印象'
        }
      }
    ]

    colors.forEach(color => {
      this.colorDatabase.set(color.hex, color)
    })
  }

  /**
   * 業界別カラー戦略を初期化
   */
  private initializeIndustryStrategies() {
    const strategies: IndustryColorStrategy[] = [
      {
        industry: '医療',
        primaryColor: this.colorDatabase.get('#0969da')!,
        secondaryColor: this.colorDatabase.get('#1f883d')!,
        accentColor: this.colorDatabase.get('#fb8500')!,
        reasoning: '信頼性（ブルー）と健康（グリーン）で安心感を演出し、重要情報（オレンジ）で適切な注意喚起を行う',
        emotionalJourney: {
          entry: '不安・心配 → 信頼できる専門性への安心',
          engagement: '健康への希望 → 適切な治療への期待',
          action: '重要情報への注目 → 確信を持った行動'
        },
        implementationGuidelines: {
          primaryUsage: ['ヘッダー', 'メインCTA', 'ロゴ', '主要情報'],
          secondaryUsage: ['成功状態', '健康関連情報', 'サブCTA'],
          accentUsage: ['警告', '重要なお知らせ', '緊急連絡先'],
          avoidance: ['背景全面', '長時間注視する要素でのオレンジ多用']
        }
      },
      {
        industry: 'SaaS',
        primaryColor: this.colorDatabase.get('#3b82f6')!,
        secondaryColor: this.colorDatabase.get('#6b7280')!,
        accentColor: this.colorDatabase.get('#10b981')!,
        reasoning: 'プロフェッショナル（ブルー）と中立性（グレー）で信頼を構築し、成功（グリーン）で価値を実証',
        emotionalJourney: {
          entry: '課題・困難 → 解決可能性への期待',
          engagement: '効率性の実感 → 生産性向上への確信',
          action: '成果の可視化 → 継続利用への決意'
        },
        implementationGuidelines: {
          primaryUsage: ['ダッシュボード', 'プライマリーCTA', 'ブランドアイデンティティ'],
          secondaryUsage: ['データ表示', 'ナビゲーション', '補助情報'],
          accentUsage: ['成功指標', '達成状況', '重要な成果'],
          avoidance: ['エラー表示', '失敗状態での緑使用']
        }
      },
      {
        industry: '飲食',
        primaryColor: this.colorDatabase.get('#d97706')!,
        secondaryColor: this.colorDatabase.get('#1f883d')!,
        accentColor: this.colorDatabase.get('#dc2626')!,
        reasoning: '食欲増進（オレンジ）と新鮮さ（グリーン）で食への期待を高め、特別感（レッド）で選択を促進',
        emotionalJourney: {
          entry: '空腹・食への欲求 → 美味しそうな期待',
          engagement: '新鮮さ・健康への安心 → 食べたい気持ちの高まり',
          action: '特別な体験への憧れ → 注文・予約への行動'
        },
        implementationGuidelines: {
          primaryUsage: ['ブランド色', 'メニュー見出し', '温かみのある要素'],
          secondaryUsage: ['新鮮さアピール', '健康メニュー', '自然素材強調'],
          accentUsage: ['特別メニュー', '限定オファー', '緊急性演出'],
          avoidance: ['寒色系との混在', '人工的な印象を与える組み合わせ']
        }
      }
    ]

    strategies.forEach(strategy => {
      this.industryStrategies.set(strategy.industry, strategy)
    })
  }

  /**
   * 業界に最適な色彩戦略を取得
   */
  getIndustryColorStrategy(industry: string): IndustryColorStrategy | null {
    return this.industryStrategies.get(industry) || null
  }

  /**
   * 色の感情的インパクトを分析
   */
  analyzeColorEmotion(hex: string): ColorPsychology | null {
    return this.colorDatabase.get(hex) || null
  }

  /**
   * 業界別推奨カラーパレットを生成
   */
  generateColorPalette(industry: string, brandPersonality?: string): {
    palette: {
      primary: string
      secondary: string
      accent: string
    }
    reasoning: string
    emotionalFlow: string[]
    implementationTips: string[]
  } | null {
    const strategy = this.getIndustryColorStrategy(industry)
    if (!strategy) return null

    return {
      palette: {
        primary: strategy.primaryColor.hex,
        secondary: strategy.secondaryColor.hex,
        accent: strategy.accentColor.hex
      },
      reasoning: strategy.reasoning,
      emotionalFlow: [
        strategy.emotionalJourney.entry,
        strategy.emotionalJourney.engagement,
        strategy.emotionalJourney.action
      ],
      implementationTips: [
        `プライマリー色: ${strategy.implementationGuidelines.primaryUsage.join('、')}で使用`,
        `セカンダリー色: ${strategy.implementationGuidelines.secondaryUsage.join('、')}で使用`,
        `アクセント色: ${strategy.implementationGuidelines.accentUsage.join('、')}で使用`,
        `注意事項: ${strategy.implementationGuidelines.avoidance.join('、')}は避ける`
      ]
    }
  }

  /**
   * アクセシビリティ適合性をチェック
   */
  checkAccessibility(colors: string[]): {
    overallScore: number
    details: Array<{
      color: string
      issues: string[]
      recommendations: string[]
    }>
  } {
    const results = colors.map(hex => {
      const color = this.colorDatabase.get(hex)
      const issues: string[] = []
      const recommendations: string[] = []

      if (color) {
        if (color.accessibility.contrastRatio < 4.5) {
          issues.push('コントラスト比が4.5:1を下回っています')
          recommendations.push('背景色との組み合わせを見直してください')
        }

        if (!color.accessibility.colorBlindSafe) {
          issues.push('色覚異常の方に識別困難な可能性があります')
          recommendations.push('色以外の識別手段（アイコン、テキスト）を併用してください')
        }

        if (color.accessibility.wcagLevel === 'AA' && color.accessibility.contrastRatio < 7) {
          recommendations.push('AAA準拠を目指す場合、より高いコントラストが必要です')
        }
      } else {
        issues.push('色情報がデータベースに存在しません')
      }

      return { color: hex, issues, recommendations }
    })

    // 全体スコアを計算（問題なしの色の割合）
    const problemFreeCount = results.filter(r => r.issues.length === 0).length
    const overallScore = Math.round((problemFreeCount / colors.length) * 100)

    return {
      overallScore,
      details: results
    }
  }

  /**
   * 文化的適合性を評価
   */
  evaluateCulturalFit(colors: string[], targetMarket: 'japan' | 'global' = 'japan'): {
    culturalScore: number
    insights: string[]
    recommendations: string[]
  } {
    const insights: string[] = []
    const recommendations: string[] = []

    colors.forEach(hex => {
      const color = this.colorDatabase.get(hex)
      if (color) {
        const culturalContext = color.culturalContext[targetMarket]
        insights.push(`${color.name}: ${culturalContext}`)

        // 日本市場特有の推奨事項
        if (targetMarket === 'japan') {
          if (color.emotionalImpact.includes('trust')) {
            recommendations.push('日本では信頼性が重視されるため、適切な選択です')
          }
          if (color.emotionalImpact.includes('urgency') && color.hex === '#dc2626') {
            recommendations.push('日本では赤い色の強い主張に注意が必要な場合があります')
          }
        }
      }
    })

    // 文化的適合スコア（簡易計算）
    const appropriateColors = colors.filter(hex => {
      const color = this.colorDatabase.get(hex)
      return color && (
        targetMarket === 'japan' 
          ? color.emotionalImpact.includes('trust') || color.emotionalImpact.includes('stability')
          : true
      )
    })

    const culturalScore = Math.round((appropriateColors.length / colors.length) * 100)

    return {
      culturalScore,
      insights,
      recommendations
    }
  }

  /**
   * 包括的な色彩診断を実行
   */
  comprehensiveColorAnalysis(
    industry: string,
    colors: string[],
    targetMarket: 'japan' | 'global' = 'japan'
  ): {
    industryAlignment: number
    accessibility: ReturnType<typeof this.checkAccessibility>
    culturalFit: ReturnType<typeof this.evaluateCulturalFit>
    overallRecommendation: string
    actionItems: string[]
  } {
    const strategy = this.getIndustryColorStrategy(industry)
    const accessibility = this.checkAccessibility(colors)
    const culturalFit = this.evaluateCulturalFit(colors, targetMarket)

    // 業界適合度の評価
    let industryAlignment = 50
    if (strategy) {
      const recommendedColors = [
        strategy.primaryColor.hex,
        strategy.secondaryColor.hex,
        strategy.accentColor.hex
      ]
      const matchingColors = colors.filter(c => recommendedColors.includes(c))
      industryAlignment = Math.round((matchingColors.length / colors.length) * 100)
    }

    // 総合評価とアクションアイテム
    const averageScore = Math.round(
      (industryAlignment + accessibility.overallScore + culturalFit.culturalScore) / 3
    )

    const actionItems: string[] = []
    if (industryAlignment < 70) {
      actionItems.push('業界標準に沿った色彩への調整を検討')
    }
    if (accessibility.overallScore < 80) {
      actionItems.push('アクセシビリティ向上のための色調整')
    }
    if (culturalFit.culturalScore < 70) {
      actionItems.push('ターゲット市場の文化的背景への配慮')
    }

    let overallRecommendation = ''
    if (averageScore >= 80) {
      overallRecommendation = '優れた色彩設計です。細かな調整で更なる向上が期待できます。'
    } else if (averageScore >= 60) {
      overallRecommendation = '基本的には良好ですが、いくつかの改善点があります。'
    } else {
      overallRecommendation = '色彩設計の大幅な見直しをお勧めします。'
    }

    return {
      industryAlignment,
      accessibility,
      culturalFit,
      overallRecommendation,
      actionItems
    }
  }
}

// 使用例とユーティリティ関数
export function createIndustryColorGuide(industry: string): string {
  const system = new ColorEmotionSystem()
  const palette = system.generateColorPalette(industry)
  
  if (!palette) {
    return `${industry}業界のカラーガイドは現在準備中です。`
  }

  return `
# ${industry}業界カラーガイド

## 推奨カラーパレット
- **プライマリー**: ${palette.palette.primary}
- **セカンダリー**: ${palette.palette.secondary}  
- **アクセント**: ${palette.palette.accent}

## 設計理念
${palette.reasoning}

## 感情的フロー
${palette.emotionalFlow.map((flow, i) => `${i + 1}. ${flow}`).join('\n')}

## 実装ガイド
${palette.implementationTips.map(tip => `- ${tip}`).join('\n')}
`
}

export function validateIndustryColors(
  industry: string,
  colors: string[]
): { isValid: boolean; score: number; issues: string[] } {
  const system = new ColorEmotionSystem()
  const analysis = system.comprehensiveColorAnalysis(industry, colors)
  
  const averageScore = Math.round(
    (analysis.industryAlignment + analysis.accessibility.overallScore + analysis.culturalFit.culturalScore) / 3
  )
  
  return {
    isValid: averageScore >= 70,
    score: averageScore,
    issues: analysis.actionItems
  }
}