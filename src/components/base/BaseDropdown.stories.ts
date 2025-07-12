import type { Meta, StoryObj } from '@storybook/vue3';
import BaseDropdown from './BaseDropdown.vue';

const meta: Meta<typeof BaseDropdown> = {
  title: 'Base/BaseDropdown',
  component: BaseDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
    components: { BaseDropdown },
    setup() {
      return { args }
    },
    template: `
      <BaseDropdown v-bind="args">
        <template #button>
          <span>Options</span>
        </template>
        <div class="py-1">
          <button class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
            Item 1
          </button>
          <button class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
            Item 2
          </button>
        </div>
      </BaseDropdown>
    `,
  }),
};
