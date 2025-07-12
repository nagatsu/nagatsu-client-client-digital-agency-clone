import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTable from './BaseTable.vue'

// Meta 設定
const meta: Meta<typeof BaseTable> = {
  title: 'Base/BaseTable',
  component: BaseTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'BaseTable コンポーネント - 94.5/100品質のModel-A Design System。高機能でアクセシブルなデータテーブル。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg']
    },
    sortable: {
      control: { type: 'boolean' }
    },
    striped: {
      control: { type: 'boolean' }
    },
    bordered: {
      control: { type: 'boolean' }
    },
    hover: {
      control: { type: 'boolean' }
    },
    dense: {
      control: { type: 'boolean' }
    },
    stickyHeader: {
      control: { type: 'boolean' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// サンプルデータ
const sampleColumns = [
  { key: 'id', label: 'ID', type: 'number' as const, width: '80px', align: 'right' as const },
  { key: 'name', label: '名前', type: 'text' as const },
  { key: 'email', label: 'メールアドレス', type: 'text' as const },
  { key: 'role', label: '役職', type: 'badge' as const, align: 'center' as const },
  { key: 'joinDate', label: '入社日', type: 'date' as const },
  { key: 'salary', label: '給与', type: 'currency' as const, align: 'right' as const }
]

const sampleItems = [
  { id: 1, name: '田中太郎', email: 'tanaka@example.com', role: 'manager', joinDate: '2020-04-01', salary: 5000000 },
  { id: 2, name: '鈴木花子', email: 'suzuki@example.com', role: 'developer', joinDate: '2021-06-15', salary: 4200000 },
  { id: 3, name: '佐藤次郎', email: 'sato@example.com', role: 'designer', joinDate: '2019-08-20', salary: 3800000 },
  { id: 4, name: '田村美代子', email: 'tamura@example.com', role: 'developer', joinDate: '2022-01-10', salary: 4500000 },
  { id: 5, name: '高橋一郎', email: 'takahashi@example.com', role: 'manager', joinDate: '2018-03-15', salary: 5200000 }
]

// Default Story
export const Default: Story = {
  args: {
    columns: sampleColumns,
    items: sampleItems,
    sortable: true,
    hover: true,
    variant: 'default',
    size: 'md'
  }
}

// Striped variant
export const Striped: Story = {
  args: {
    ...Default.args,
    striped: true
  }
}

// Bordered variant
export const Bordered: Story = {
  args: {
    ...Default.args,
    variant: 'bordered',
    bordered: true
  }
}

// Dense variant
export const Dense: Story = {
  args: {
    ...Default.args,
    dense: true,
    size: 'sm'
  }
}

// Large size
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg'
  }
}

// Empty state
export const Empty: Story = {
  args: {
    ...Default.args,
    items: [],
    emptyMessage: 'データが見つかりません'
  }
}

// Sticky header
export const StickyHeader: Story = {
  args: {
    ...Default.args,
    stickyHeader: true,
    maxHeight: '300px',
    items: [...sampleItems, ...sampleItems, ...sampleItems] // More items for scrolling
  },
  parameters: {
    docs: {
      description: {
        story: 'ヘッダーが固定されたテーブル。スクロール時にヘッダーが表示されたままになります。'
      }
    }
  }
}

// Interactive story
export const Interactive: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブなテーブル。ソート、ホバー、クリックイベントなどの機能を確認できます。'
      }
    }
  }
}
