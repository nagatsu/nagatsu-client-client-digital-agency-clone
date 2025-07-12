import { createRouter, createWebHistory } from 'vue-router'

// Layout
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// Main Pages
import LandingPage from '@/pages/gateway/LandingPage.vue'
import WelcomePageRedesigned from '@/pages/welcome/WelcomePageRedesigned.vue'
import ComponentsPage from '@/pages/ComponentsPage.vue'
import StorybookPage from '@/pages/gateway/StorybookPage.vue'

// Component Category Pages
import ComponentsBasicsPage from '@/pages/ComponentsBasicsPage.vue'
import ComponentsNavigationPage from '@/pages/ComponentsNavigationPage.vue'
import ComponentsLayoutPage from '@/pages/ComponentsLayoutPage.vue'
import ComponentsDataPage from '@/pages/ComponentsDataPage.vue'
import ComponentsAdvancedPage from '@/pages/ComponentsAdvancedPage.vue'

// Other Pages
import IconsPage from '@/pages/IconsPage.vue'
import ImagesPage from '@/pages/ImagesPage.vue'
import EcommerceSimple from '@/pages/EcommerceSimple.vue'
import MediaPage from '@/pages/MediaPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import CryptoPage from '@/pages/CryptoPage.vue'

// Government Site Clone for Issue #109 Verification
import DigitalAgencyClone from '@/pages/DigitalAgencyClone.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: WelcomePageRedesigned
      },
      {
        path: 'components',
        name: 'components',
        component: ComponentsPage
      },
      {
        path: 'storybook',
        name: 'storybook',
        component: StorybookPage
      },
      // Component Categories
      {
        path: 'components/basics',
        name: 'components-basics',
        component: ComponentsBasicsPage
      },
      {
        path: 'components/navigation',
        name: 'components-navigation',
        component: ComponentsNavigationPage
      },
      {
        path: 'components/layout',
        name: 'components-layout',
        component: ComponentsLayoutPage
      },
      {
        path: 'components/data',
        name: 'components-data',
        component: ComponentsDataPage
      },
      {
        path: 'components/advanced',
        name: 'components-advanced',
        component: ComponentsAdvancedPage
      },
      // Other Pages
      {
        path: 'icons',
        name: 'icons',
        component: IconsPage
      },
      {
        path: 'images',
        name: 'images',
        component: ImagesPage
      },
      {
        path: 'ecommerce',
        name: 'ecommerce',
        component: EcommerceSimple
      },
      {
        path: 'media',
        name: 'media',
        component: MediaPage
      },
      {
        path: 'admin',
        name: 'admin',
        component: AdminPage
      },
      {
        path: 'crypto',
        name: 'crypto',
        component: CryptoPage
      },
      // Government Site Clone - Issue #109 Verification
      {
        path: 'digital-agency-clone',
        name: 'digital-agency-clone',
        component: DigitalAgencyClone
      }
    ]
  }
]

// 新しいDefaultLayout.vueでのテスト
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router