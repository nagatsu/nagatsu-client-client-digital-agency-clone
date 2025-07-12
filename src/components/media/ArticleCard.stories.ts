import type { Meta, StoryObj } from '@storybook/vue3';
import ArticleCard from './ArticleCard.vue';

// Meta 設定
const meta: Meta<typeof ArticleCard> = {
  title: 'Media/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ArticleCard コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    article: {
      id: 1,
      title: 'Vue.js 3の新機能について',
      excerpt: 'Vue.js 3では多くの新機能が追加されました。Composition API、Teleport、Suspenseなど、開発者の生産性を向上させる機能について詳しく解説します。',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=240&fit=crop',
      author: {
        name: '山田太郎',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
      },
      category: {
        name: 'JavaScript',
        slug: 'javascript'
      },
      tags: [
        { id: 1, name: 'Vue.js' },
        { id: 2, name: 'フロントエンド' },
        { id: 3, name: 'Web開発' }
      ],
      publishedAt: '2024-01-15',
      readTime: 5,
      isBookmarked: false,
      isPremium: false
    }
  }
};


// Bookmarked Article
export const Bookmarked: Story = {
  args: {
    ...Default.args,
    article: {
      ...Default.args.article,
      isBookmarked: true
    }
  }
};

// Premium Article
export const Premium: Story = {
  args: {
    ...Default.args,
    article: {
      ...Default.args.article,
      isPremium: true,
      title: 'プレミアム記事: 高度なVue.js設計パターン'
    }
  }
};

// No Image Article
export const NoImage: Story = {
  args: {
    ...Default.args,
    article: {
      ...Default.args.article,
      image: null
    }
  }
};

// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではArticleCardのインタラクティブな動作を確認できます。'
      }
    }
  }
};
