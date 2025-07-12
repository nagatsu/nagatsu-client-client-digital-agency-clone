import { createRouter, createWebHistory } from 'vue-router'

// レイアウト
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

// ページコンポーネント
// import HomePage from '@/pages/HomePage.vue'
// import ComponentsPage from '@/pages/ComponentsPage.vue'
// import ComponentsBasicsPage from '@/pages/ComponentsBasicsPage.vue'
// import ComponentsNavigationPage from '@/pages/ComponentsNavigationPage.vue'
// import ComponentsLayoutPage from '@/pages/ComponentsLayoutPage.vue'
// import ComponentsDataPage from '@/pages/ComponentsDataPage.vue'
// import ComponentsAdvancedPage from '@/pages/ComponentsAdvancedPage.vue'
// import IconsPage from '@/pages/IconsPage.vue'
// import ImagesPage from '@/pages/ImagesPage.vue'
// import EcommerceComponentsPage from '@/pages/EcommerceComponentsPage.vue'
// import EcommerceSimplePage from '@/pages/EcommerceSimplePage.vue'
// import TestBasicPage from '@/pages/TestBasicPage.vue'
// import MinimalTestPage from '@/pages/MinimalTestPage.vue'
// import SafeTestPage from '@/pages/SafeTestPage.vue'
import DebugPage from '@/pages/DebugPage.vue'
import CompositionTestPage from '@/pages/CompositionTestPage.vue'
// import FormsPage from '@/pages/FormsPage.vue'
// import DashboardPage from '@/pages/DashboardPage.vue'
// import LoginPage from '@/pages/auth/LoginPage.vue'
// import RegisterPage from '@/pages/auth/RegisterPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/debug'
  },
  // {
  //   path: '/',
  //   component: DefaultLayout,
  //   children: [
      {
        path: '/components/navigation',
        name: 'ComponentsNavigation',
        component: ComponentsNavigationPage,
        meta: {
          title: 'ナビゲーションコンポーネント'
        }
      },
      {
        path: '/components/layout',
        name: 'ComponentsLayout',
        component: ComponentsLayoutPage,
        meta: {
          title: 'レイアウトコンポーネント'
        }
      },
      {
        path: '/components/data',
        name: 'ComponentsData',
        component: ComponentsDataPage,
        meta: {
          title: 'データ表示コンポーネント'
        }
      },
      {
        path: '/components/advanced',
        name: 'ComponentsAdvanced',
        component: ComponentsAdvancedPage,
        meta: {
          title: '高度なコンポーネント'
        }
      },
      {
        path: '/icons',
        name: 'Icons',
        component: IconsPage,
        meta: {
          title: 'アイコンライブラリ'
        }
      },
      // {
      //   path: '/images',
      //   name: 'Images',
      //   component: ImagesPage,
      //   meta: {
      //     title: '画像コンポーネント'
      //   }
      // },
      // {
      //   path: '/ecommerce',
      //   name: 'EcommerceComponents',
      //   component: EcommerceComponentsPage,
      //   meta: {
      //     title: 'ECサイト向けコンポーネント'
      //   }
      // },
      {
        path: '/ecommerce-test',
        name: 'EcommerceSimple',
        component: EcommerceSimplePage,
        meta: {
          title: 'ECサイト向けコンポーネント（テスト版）'
        }
      },
      {
        path: '/test-basic',
        name: 'TestBasic',
        component: TestBasicPage,
        meta: {
          title: '基本テストページ'
        }
      },
      {
        path: '/minimal-test',
        name: 'MinimalTest',
        component: MinimalTestPage,
        meta: {
          title: '最小限テストページ'
        }
      },
  {
    path: '/safe-test',
    name: 'SafeTest',
    component: SafeTestPage,
    meta: {
      title: '安全テストページ'
    }
  },
  {
    path: '/debug',
    name: 'Debug',
    component: DebugPage,
    meta: {
      title: 'Debug Page'
    }
  },
  {
    path: '/composition-test',
    name: 'CompositionTest',
    component: CompositionTestPage,
    meta: {
      title: 'Composition API Test'
    }
  },
      {
        path: '/forms',
        name: 'Forms',
        component: FormsPage,
        meta: {
          title: 'フォーム'
        }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        meta: {
          title: 'ダッシュボード',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: LoginPage,
        meta: {
          title: 'ログイン',
          guest: true
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: RegisterPage,
        meta: {
          title: '新規登録',
          guest: true
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      title: 'ページが見つかりません'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// ナビゲーションガード
router.beforeEach((to, from, next) => {
  // ページタイトル設定
  if (to.meta.title) {
    document.title = `${to.meta.title} | Nagatsu Mockup Template`
  }
  
  // 認証チェック（実際の認証ロジックに置き換え）
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/auth/login')
  } else if (to.meta.guest && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router