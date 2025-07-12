/**
 * Model-A Maturity Score Calculator
 * Model-Aデザインシステムの成熟度を定量的に評価するシステム
 */

export interface ComponentUsage {
  componentName: string
  purposeDefined: boolean
  emotionalGoal: boolean
  richnessLevel: 1 | 2 | 3
  industryOptimized: boolean
  metricsTracked: boolean
}

export interface PageAnalysis {
  pageName: string
  cognitiveFlowDefined: boolean
  emotionalJourneyMapped: boolean
  informationHierarchy: number // 0-100
  componentHarmony: number // 0-100
  businessValueAlignment: number // 0-100
}

export interface MaturityDimensions {
  // 情報設計成熟度 (0-100)
  informationArchitecture: {
    hierarchy: number      // 階層の論理性
    flow: number          // フローの自然さ
    context: number       // 文脈の一貫性
    purposeClarity: number // 目的の明確さ
  }
  
  // コンポーネント活用度 (0-100)
  componentUtilization: {
    coverage: number      // 使用率
    purposeClarity: number // 目的の明確さ
    richnessLevel: number  // リッチネス活用
    combination: number    // 組み合わせの巧みさ
  }
  
  // 感情設計成熟度 (0-100)
  emotionalDesign: {
    consistency: number    // 感情の一貫性
    journey: number       // 感情フローの完成度
    impact: number        // 感情的インパクト
    cultural: number      // 文化的配慮（日本的美意識）
  }
  
  // ビジネス価値実現度 (0-100)
  businessValue: {
    persuasiveness: number // 説得力
    differentiation: number // 差別化
    actionability: number  // 行動誘発力
    measurability: number  // 測定可能性
  }
}

export interface MaturityScore {
  overall: number
  dimensions: MaturityDimensions
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master'
  recommendations: string[]
  timestamp: Date
}

export class MaturityScoreCalculator {
  /**
   * コンポーネント使用状況から成熟度を計算
   */
  calculateComponentScore(components: ComponentUsage[]): number {
    if (components.length === 0) return 0

    const scores = {
      purposeDefined: 0,
      emotionalGoal: 0,
      richnessUtilization: 0,
      industryOptimization: 0,
      metricsTracking: 0
    }

    components.forEach(comp => {
      if (comp.purposeDefined) scores.purposeDefined++
      if (comp.emotionalGoal) scores.emotionalGoal++
      scores.richnessUtilization += comp.richnessLevel / 3
      if (comp.industryOptimized) scores.industryOptimization++
      if (comp.metricsTracked) scores.metricsTracking++
    })

    const totalComponents = components.length
    return Math.round(
      (scores.purposeDefined / totalComponents) * 20 +
      (scores.emotionalGoal / totalComponents) * 20 +
      (scores.richnessUtilization / totalComponents) * 20 +
      (scores.industryOptimization / totalComponents) * 20 +
      (scores.metricsTracking / totalComponents) * 20
    )
  }

  /**
   * ページ分析から情報設計スコアを計算
   */
  calculateInformationScore(pages: PageAnalysis[]): number {
    if (pages.length === 0) return 0

    let totalScore = 0
    pages.forEach(page => {
      const pageScore = 
        (page.cognitiveFlowDefined ? 20 : 0) +
        (page.emotionalJourneyMapped ? 20 : 0) +
        (page.informationHierarchy * 0.2) +
        (page.componentHarmony * 0.2) +
        (page.businessValueAlignment * 0.2)
      
      totalScore += pageScore
    })

    return Math.round(totalScore / pages.length)
  }

  /**
   * 感情設計の一貫性を評価
   */
  evaluateEmotionalConsistency(
    primaryEmotion: string,
    componentsUsed: string[],
    emotionalDesignDB: any
  ): number {
    const recommendedComponents = emotionalDesignDB[primaryEmotion]?.recommendedComponents || []
    const matchCount = componentsUsed.filter(comp => 
      recommendedComponents.includes(comp)
    ).length

    return Math.round((matchCount / componentsUsed.length) * 100)
  }

  /**
   * 総合的な成熟度スコアを計算
   */
  calculateMaturityScore(
    components: ComponentUsage[],
    pages: PageAnalysis[],
    emotionalConsistency: number,
    businessMetrics: {
      conversionRate?: number
      userSatisfaction?: number
      brandRecognition?: number
    } = {}
  ): MaturityScore {
    // 各次元のスコア計算
    const dimensions: MaturityDimensions = {
      informationArchitecture: {
        hierarchy: this.calculateHierarchyScore(pages),
        flow: this.calculateFlowScore(pages),
        context: this.calculateContextScore(pages),
        purposeClarity: this.calculatePurposeScore(pages)
      },
      componentUtilization: {
        coverage: this.calculateCoverageScore(components),
        purposeClarity: this.calculateComponentPurposeScore(components),
        richnessLevel: this.calculateRichnessScore(components),
        combination: this.calculateCombinationScore(components)
      },
      emotionalDesign: {
        consistency: emotionalConsistency,
        journey: this.calculateEmotionalJourneyScore(pages),
        impact: this.calculateEmotionalImpactScore(components),
        cultural: this.calculateCulturalScore(components)
      },
      businessValue: {
        persuasiveness: businessMetrics.conversionRate || 50,
        differentiation: businessMetrics.brandRecognition || 50,
        actionability: this.calculateActionabilityScore(components),
        measurability: this.calculateMeasurabilityScore(components)
      }
    }

    // 総合スコアの計算（各次元の重み付け平均）
    const overall = Math.round(
      (this.getDimensionAverage(dimensions.informationArchitecture) * 0.3) +
      (this.getDimensionAverage(dimensions.componentUtilization) * 0.25) +
      (this.getDimensionAverage(dimensions.emotionalDesign) * 0.25) +
      (this.getDimensionAverage(dimensions.businessValue) * 0.2)
    )

    // レベル判定
    const level = this.determineLevel(overall)

    // 改善提案の生成
    const recommendations = this.generateRecommendations(dimensions)

    return {
      overall,
      dimensions,
      level,
      recommendations,
      timestamp: new Date()
    }
  }

  /**
   * Helper: 階層スコアの計算
   */
  private calculateHierarchyScore(pages: PageAnalysis[]): number {
    const avg = pages.reduce((sum, page) => sum + page.informationHierarchy, 0) / pages.length
    return Math.round(avg)
  }

  /**
   * Helper: フロースコアの計算
   */
  private calculateFlowScore(pages: PageAnalysis[]): number {
    const flowComplete = pages.filter(p => p.cognitiveFlowDefined).length
    return Math.round((flowComplete / pages.length) * 100)
  }

  /**
   * Helper: コンテキストスコアの計算
   */
  private calculateContextScore(pages: PageAnalysis[]): number {
    const avg = pages.reduce((sum, page) => sum + page.componentHarmony, 0) / pages.length
    return Math.round(avg)
  }

  /**
   * Helper: 目的明確性スコアの計算
   */
  private calculatePurposeScore(pages: PageAnalysis[]): number {
    const avg = pages.reduce((sum, page) => sum + page.businessValueAlignment, 0) / pages.length
    return Math.round(avg)
  }

  /**
   * Helper: カバレッジスコアの計算
   */
  private calculateCoverageScore(components: ComponentUsage[]): number {
    // 全51コンポーネント中の使用率
    const totalComponents = 51
    const usedComponents = new Set(components.map(c => c.componentName)).size
    return Math.round((usedComponents / totalComponents) * 100)
  }

  /**
   * Helper: コンポーネント目的スコアの計算
   */
  private calculateComponentPurposeScore(components: ComponentUsage[]): number {
    const withPurpose = components.filter(c => c.purposeDefined).length
    return Math.round((withPurpose / components.length) * 100)
  }

  /**
   * Helper: リッチネススコアの計算
   */
  private calculateRichnessScore(components: ComponentUsage[]): number {
    const avgRichness = components.reduce((sum, c) => sum + c.richnessLevel, 0) / components.length
    return Math.round((avgRichness / 3) * 100)
  }

  /**
   * Helper: 組み合わせスコアの計算
   */
  private calculateCombinationScore(components: ComponentUsage[]): number {
    // リッチネスレベル2以上の割合
    const advanced = components.filter(c => c.richnessLevel >= 2).length
    return Math.round((advanced / components.length) * 100)
  }

  /**
   * Helper: 感情ジャーニースコアの計算
   */
  private calculateEmotionalJourneyScore(pages: PageAnalysis[]): number {
    const withJourney = pages.filter(p => p.emotionalJourneyMapped).length
    return Math.round((withJourney / pages.length) * 100)
  }

  /**
   * Helper: 感情的インパクトスコアの計算
   */
  private calculateEmotionalImpactScore(components: ComponentUsage[]): number {
    const withEmotionalGoal = components.filter(c => c.emotionalGoal).length
    return Math.round((withEmotionalGoal / components.length) * 100)
  }

  /**
   * Helper: 文化的配慮スコアの計算
   */
  private calculateCulturalScore(components: ComponentUsage[]): number {
    // 業界最適化されたコンポーネントの割合
    const optimized = components.filter(c => c.industryOptimized).length
    return Math.round((optimized / components.length) * 100)
  }

  /**
   * Helper: アクション誘発スコアの計算
   */
  private calculateActionabilityScore(components: ComponentUsage[]): number {
    // CTAボタンなどアクション系コンポーネントの適切な使用
    const actionComponents = ['BaseButton', 'BaseAlert', 'BaseProgressIndicator']
    const actionUsage = components.filter(c => 
      actionComponents.includes(c.componentName) && c.richnessLevel >= 2
    ).length
    const totalActionComponents = components.filter(c => 
      actionComponents.includes(c.componentName)
    ).length
    
    if (totalActionComponents === 0) return 50
    return Math.round((actionUsage / totalActionComponents) * 100)
  }

  /**
   * Helper: 測定可能性スコアの計算
   */
  private calculateMeasurabilityScore(components: ComponentUsage[]): number {
    const tracked = components.filter(c => c.metricsTracked).length
    return Math.round((tracked / components.length) * 100)
  }

  /**
   * Helper: 次元の平均スコアを計算
   */
  private getDimensionAverage(dimension: Record<string, number>): number {
    const values = Object.values(dimension)
    return values.reduce((sum, val) => sum + val, 0) / values.length
  }

  /**
   * Helper: スコアからレベルを判定
   */
  private determineLevel(score: number): MaturityScore['level'] {
    if (score >= 90) return 'Master'
    if (score >= 80) return 'Expert'
    if (score >= 70) return 'Advanced'
    if (score >= 50) return 'Intermediate'
    return 'Beginner'
  }

  /**
   * Helper: 改善提案を生成
   */
  private generateRecommendations(dimensions: MaturityDimensions): string[] {
    const recommendations: string[] = []

    // 各次元の弱点を特定して提案
    Object.entries(dimensions).forEach(([dimensionName, metrics]) => {
      Object.entries(metrics).forEach(([metricName, score]) => {
        if (score < 70) {
          recommendations.push(
            this.getRecommendation(dimensionName, metricName, score)
          )
        }
      })
    })

    // 優先度の高い順に並べ替え
    return recommendations.slice(0, 5)
  }

  /**
   * Helper: 具体的な改善提案を生成
   */
  private getRecommendation(dimension: string, metric: string, score: number): string {
    const recommendations: Record<string, Record<string, string>> = {
      informationArchitecture: {
        hierarchy: '情報階層を見直し、h1→h2→h3の論理的な構造を確立してください',
        flow: '各ページの認知フロー（3秒→30秒→3分）を定義してください',
        context: 'コンポーネント間の関連性を強化し、文脈の一貫性を向上させてください',
        purposeClarity: '各セクションの存在理由とビジネス価値を明確にしてください'
      },
      componentUtilization: {
        coverage: 'より多様なコンポーネントを活用して、表現の幅を広げてください',
        purposeClarity: '各コンポーネントの使用目的とUX課題を定義してください',
        richnessLevel: 'Lv.2、Lv.3のリッチな組み合わせパターンを増やしてください',
        combination: 'コンポーネントの組み合わせでストーリーを語る実装を心がけてください'
      },
      emotionalDesign: {
        consistency: '選択した感情テーマに合わせてコンポーネントを統一してください',
        journey: '各ページの感情的な入口→中間→出口を設計してください',
        impact: 'コンポーネントごとに感情的ゴールを設定してください',
        cultural: '日本的美意識（間・静謐・誠実）を意識した実装を心がけてください'
      },
      businessValue: {
        persuasiveness: 'より説得力のある数値やエビデンスを追加してください',
        differentiation: '競合との差別化ポイントを明確に表現してください',
        actionability: 'CTAボタンやアクション誘導をより効果的に配置してください',
        measurability: '各コンポーネントの効果測定指標を設定してください'
      }
    }

    return recommendations[dimension]?.[metric] || 
      `${dimension}の${metric}を改善してください（現在: ${score}/100）`
  }
}

// 使用例
export function analyzeModelAMaturity(): MaturityScore {
  const calculator = new MaturityScoreCalculator()
  
  // サンプルデータ（実際の使用時は実データを渡す）
  const components: ComponentUsage[] = [
    {
      componentName: 'BaseButton',
      purposeDefined: true,
      emotionalGoal: true,
      richnessLevel: 2,
      industryOptimized: true,
      metricsTracked: true
    },
    // ... 他のコンポーネント
  ]
  
  const pages: PageAnalysis[] = [
    {
      pageName: 'Landing',
      cognitiveFlowDefined: true,
      emotionalJourneyMapped: true,
      informationHierarchy: 85,
      componentHarmony: 90,
      businessValueAlignment: 88
    },
    // ... 他のページ
  ]
  
  return calculator.calculateMaturityScore(
    components,
    pages,
    85, // emotionalConsistency
    {
      conversionRate: 75,
      userSatisfaction: 88,
      brandRecognition: 82
    }
  )
}