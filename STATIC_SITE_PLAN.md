# デジタル庁サイトクローン - 静的サイト構造計画

## 🎯 プロジェクト変更方針

### 技術スタック変更
- **変更前**: Vue.js + Vite + TypeScript (ビルド問題・複雑性)
- **変更後**: 純粋HTML + CSS + JavaScript (静的配信・高速)

### 目的
- ビルドエラー回避・取り回し改善
- 高速デプロイ・確実な動作保証
- Model-Aコンポーネント政府系適用検証の実証

## 📋 デジタル庁サイト主要10ページ分析

### 1. トップページ (/)
- **URL**: https://www.digital.go.jp/
- **目的**: 中央ランディング - 最新ニュース・サービス・活動紹介
- **主要要素**: トピックス、ニュース、サービス、政策ダッシュボード

### 2. マイナンバーカードページ (/policies/mynumber)
- **URL**: https://www.digital.go.jp/policies/mynumber
- **目的**: マイナンバーカードシステム・利用方法説明
- **主要要素**: カード概要、スマホ認証、サービス説明

### 3. サービスページ (/services)
- **URL**: https://www.digital.go.jp/services
- **目的**: デジタル政府サービス一覧
- **主要要素**: マイナポータル、e-Gov、G-BizID、Visit Japan Web

### 4. 調達ページ (/procurement)
- **URL**: https://www.digital.go.jp/procurement
- **目的**: 公共調達・入札情報
- **主要要素**: 入札公告、公募情報、調達ガイドライン

### 5. 採用ページ (/recruitment)
- **URL**: https://www.digital.go.jp/recruitment
- **目的**: デジタル庁採用情報
- **主要要素**: 新卒・中途・官民人事交流

### 6. 報道室ページ (/press)
- **URL**: https://www.digital.go.jp/press
- **目的**: メディア・プレス関連情報
- **主要要素**: プレスリリース、大臣会見

### 7. 政策ダッシュボード (/resources/govdashboard)
- **URL**: https://www.digital.go.jp/resources/govdashboard
- **目的**: DX取組の可視化
- **主要要素**: 行政手続き、準公共分野、社会のデジタル化

### 8. ニュースページ (/news)
- **URL**: https://www.digital.go.jp/news
- **目的**: 最新情報・活動報告
- **主要要素**: 最新発表、政策更新

### 9. 組織概要ページ (/about)
- **URL**: https://www.digital.go.jp/about
- **目的**: 組織情報
- **主要要素**: 使命、構造、指導部

### 10. お問い合わせページ (/contact)
- **URL**: https://www.digital.go.jp/contact
- **目的**: 連絡先・問い合わせ方法
- **主要要素**: 各種問い合わせフォーム、FAQ

## 🏗️ 静的サイト構造設計

### ディレクトリ構造
```
client-digital-agency-clone/
├── index.html              # トップページ
├── policies/
│   └── mynumber.html       # マイナンバーカード
├── services.html           # サービス一覧
├── procurement.html        # 調達情報
├── recruitment.html        # 採用情報
├── press.html             # 報道室
├── resources/
│   └── govdashboard.html  # 政策ダッシュボード
├── news.html              # ニュース
├── about.html             # 組織概要
├── contact.html           # お問い合わせ
├── css/
│   ├── styles.css         # 共通スタイル
│   └── components.css     # Model-A準拠コンポーネント
├── js/
│   ├── main.js           # 共通JavaScript
│   └── components.js     # インタラクティブ要素
└── assets/
    ├── images/          # 画像
    └── icons/           # アイコン
```

## 🎨 Model-A準拠コンポーネント実装

### 政府系UI要素の静的実装
1. **BaseButton** → 静的ボタンクラス
2. **BaseAlert** → 静的通知バナー
3. **BaseCard** → 静的カードレイアウト
4. **BaseFooter** → 静的フッター構造
5. **BaseNavigation** → 静的ナビゲーション

### JDS準拠デザイン原則
- 静かな力強さ: 控えめで確実な機能性
- 公共性: アクセシビリティ・包摂性
- 構造美: 機能的必然性からの美しさ

## 📈 検証項目

### Model-A適用度検証
1. **コンポーネント利用率**: 静的実装でどの程度Model-A要素を活用できるか
2. **デザイン整合性**: JDS準拠デザインの政府サイト適合度
3. **アクセシビリティ**: WCAG 2.1 AA準拠の静的実装
4. **営業実用性**: 「政府品質」説得材料としての効果

### 技術的優位性
1. **デプロイ速度**: 静的ファイル配信の高速性
2. **安定性**: ビルドエラーなしの確実な動作
3. **保守性**: シンプルな構造による修正容易性

---

**次ステップ**: 静的サイト構造への変更実装 → デジタル庁10ページクローン作成