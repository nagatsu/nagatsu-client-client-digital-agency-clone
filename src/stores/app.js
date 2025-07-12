import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const loading = ref(false)
  const sidebarOpen = ref(false)
  const theme = ref('light') // Force light theme by default
  const notifications = ref([])
  const user = ref(null)
  
  // Getters
  const isAuthenticated = computed(() => !!user.value)
  const unreadNotifications = computed(() => 
    notifications.value.filter(n => !n.read).length
  )
  
  // Actions
  function setLoading(value) {
    loading.value = value
  }
  
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }
  
  function closeSidebar() {
    sidebarOpen.value = false
  }
  
  function openSidebar() {
    sidebarOpen.value = true
  }
  
  function setTheme(newTheme) {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
  }
  
  function addNotification(notification) {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9)
    notifications.value.unshift({
      id,
      read: false,
      createdAt: new Date(),
      ...notification
    })
    
    // 通知数制限（メモリリーク防止）
    if (notifications.value.length > 10) {
      notifications.value.splice(10)
    }
    
    // 自動削除（必要に応じて）
    if (notification.autoRemove !== false) {
      setTimeout(() => {
        removeNotification(id)
      }, notification.duration || 5000)
    }
  }
  
  function removeNotification(id) {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }
  
  function markNotificationAsRead(id) {
    const notification = notifications.value.find(n => n.id === id)
    if (notification) {
      notification.read = true
    }
  }
  
  function markAllNotificationsAsRead() {
    notifications.value.forEach(n => n.read = true)
  }
  
  function clearNotifications() {
    notifications.value = []
  }
  
  function setUser(userData) {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('isAuthenticated', 'true')
  }
  
  function logout() {
    user.value = null
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    clearNotifications()
  }
  
  // テーマリセット機能追加
  function resetTheme() {
    theme.value = 'light'
    localStorage.setItem('theme', 'light')
    // DOMのクラスも即座に更新
    document.documentElement.classList.remove('dark')
  }

  // 初期化
  function initialize() {
    // 二重初期化防止
    if (window.__APP_INITIALIZED__) return
    window.__APP_INITIALIZED__ = true
    
    // Force light theme - ignore saved theme and system preference
    theme.value = 'light'
    localStorage.setItem('theme', 'light')
    
    // Always ensure light theme DOM class
    document.documentElement.classList.remove('dark')
    
    // ユーザー情報復元
    const savedUser = localStorage.getItem('user')
    const isAuth = localStorage.getItem('isAuthenticated')
    if (savedUser && isAuth === 'true') {
      try {
        user.value = JSON.parse(savedUser)
      } catch (e) {
        console.error('Failed to parse saved user data:', e)
        logout()
      }
    }
  }
  
  return {
    // State
    loading,
    sidebarOpen,
    theme,
    notifications,
    user,
    
    // Getters
    isAuthenticated,
    unreadNotifications,
    
    // Actions
    setLoading,
    toggleSidebar,
    closeSidebar,
    openSidebar,
    setTheme,
    resetTheme,
    addNotification,
    removeNotification,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    clearNotifications,
    setUser,
    logout,
    initialize
  }
})