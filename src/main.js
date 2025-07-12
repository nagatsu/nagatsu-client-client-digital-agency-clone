import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'

// Model-A inherited base components
import BaseButton from './components/base/BaseButton.vue'
import BaseCard from './components/base/BaseCard.vue'
import BaseInput from './components/base/BaseInput.vue'
import BaseModal from './components/base/BaseModal.vue'
import BaseAlert from './components/base/BaseAlert.vue'

const app = createApp(App)
const pinia = createPinia()

// Pinia store
app.use(pinia)

// Vue Router
app.use(router)

// Global components (inherited from Model-A)
app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseInput', BaseInput)
app.component('BaseModal', BaseModal)
app.component('BaseAlert', BaseAlert)

// Client-specific configuration
app.config.globalProperties.$version = '1.0.0'
app.config.globalProperties.$client = 'Client client-digital-agency-clone'
app.config.globalProperties.$author = 'nagatsu dev AI Team'

// Development mode settings
if (import.meta.env.DEV) {
  app.config.performance = true
  console.log('🚀 Client client-digital-agency-clone - Development Mode')
  console.log('📚 Based on Model-A Design System (94.5/100)')
  console.log('🤖 Created by nagatsu dev AI Team')
}

app.mount('#app')
