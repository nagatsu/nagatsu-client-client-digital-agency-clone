/**
 * ユーティリティヘルパー関数集
 * デジタル庁デザインシステム準拠のモックアップテンプレート用
 */

// ユニークID生成
export function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

// 文字列のトランケート
export function truncate(str, length = 100, suffix = '...') {
  if (!str || str.length <= length) return str
  return str.slice(0, length) + suffix
}

// 数値のフォーマット
export function formatNumber(num, locale = 'ja-JP') {
  return new Intl.NumberFormat(locale).format(num)
}

// 通貨フォーマット
export function formatCurrency(amount, currency = 'JPY', locale = 'ja-JP') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount)
}

// 日付フォーマット
export function formatDate(date, format = 'YYYY/MM/DD') {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hour = String(d.getHours()).padStart(2, '0')
  const minute = String(d.getMinutes()).padStart(2, '0')
  
  const formats = {
    'YYYY/MM/DD': `${year}/${month}/${day}`,
    'YYYY-MM-DD': `${year}-${month}-${day}`,
    'MM/DD': `${month}/${day}`,
    'YYYY/MM/DD HH:mm': `${year}/${month}/${day} ${hour}:${minute}`,
    'relative': formatRelativeTime(d)
  }
  
  return formats[format] || formats['YYYY/MM/DD']
}

// 相対時間表示
export function formatRelativeTime(date) {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (seconds < 60) return 'たった今'
  if (minutes < 60) return `${minutes}分前`
  if (hours < 24) return `${hours}時間前`
  if (days < 7) return `${days}日前`
  
  return formatDate(date)
}

// ファイルサイズフォーマット
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 B'
  
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// バリデーション関数
export const validators = {
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) ? null : 'メールアドレスの形式が正しくありません'
  },
  
  required: (value) => {
    return value && value.toString().trim() ? null : 'この項目は必須です'
  },
  
  minLength: (min) => (value) => {
    return value && value.length >= min ? null : `${min}文字以上で入力してください`
  },
  
  maxLength: (max) => (value) => {
    return !value || value.length <= max ? null : `${max}文字以内で入力してください`
  },
  
  phone: (value) => {
    const pattern = /^[\d\-\(\)\+\s]+$/
    return pattern.test(value) ? null : '電話番号の形式が正しくありません'
  },
  
  url: (value) => {
    try {
      new URL(value)
      return null
    } catch {
      return 'URLの形式が正しくありません'
    }
  }
}

// デバウンス関数
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// スロットル関数
export function throttle(func, limit) {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// クラス名結合
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// オブジェクトの深いクローン
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// 配列のグループ化
export function groupBy(array, key) {
  return array.reduce((result, item) => {
    const group = item[key]
    if (!result[group]) {
      result[group] = []
    }
    result[group].push(item)
    return result
  }, {})
}

// 配列のシャッフル
export function shuffle(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// ローカルストレージヘルパー
export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key)
      return true
    } catch {
      return false
    }
  },
  
  clear() {
    try {
      localStorage.clear()
      return true
    } catch {
      return false
    }
  }
}

// URLパラメータヘルパー
export const urlParams = {
  get(name) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
  },
  
  set(name, value) {
    const url = new URL(window.location)
    url.searchParams.set(name, value)
    window.history.pushState({}, '', url)
  },
  
  remove(name) {
    const url = new URL(window.location)
    url.searchParams.delete(name)
    window.history.pushState({}, '', url)
  },
  
  getAll() {
    const urlParams = new URLSearchParams(window.location.search)
    return Object.fromEntries(urlParams)
  }
}

// カラーユーティリティ
export const colors = {
  // HEXをRGBに変換
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  },
  
  // RGBをHEXに変換
  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  },
  
  // 明度計算
  getLuminance(hex) {
    const rgb = this.hexToRgb(hex)
    if (!rgb) return 0
    
    const { r, g, b } = rgb
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255
  },
  
  // コントラスト比計算
  getContrastRatio(color1, color2) {
    const lum1 = this.getLuminance(color1)
    const lum2 = this.getLuminance(color2)
    return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05)
  }
}

// レスポンシブヘルパー
export const responsive = {
  isMobile: () => window.innerWidth < 768,
  isTablet: () => window.innerWidth >= 768 && window.innerWidth < 1024,
  isDesktop: () => window.innerWidth >= 1024,
  
  onResize(callback) {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
  }
}

// フォーム関連ユーティリティ
export const form = {
  // フォームデータをオブジェクトに変換
  serialize(formElement) {
    const formData = new FormData(formElement)
    return Object.fromEntries(formData)
  },
  
  // バリデーション実行
  validate(data, rules) {
    const errors = {}
    
    Object.keys(rules).forEach(field => {
      const value = data[field]
      const fieldRules = Array.isArray(rules[field]) ? rules[field] : [rules[field]]
      
      for (const rule of fieldRules) {
        const error = rule(value)
        if (error) {
          errors[field] = error
          break
        }
      }
    })
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  }
}