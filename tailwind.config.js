/** @type {import('@tailwindcss/postcss').Config} */
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    // Button variants
    'btn', 'btn-primary', 'btn-secondary', 'btn-success', 'btn-warning', 'btn-error', 'btn-outline', 'btn-ghost',
    // Button sizes
    'btn-xs', 'btn-sm', 'btn-md', 'btn-lg', 'btn-xl',
    // Card classes
    'card', 'card-body', 'card-header', 'card-footer',
    // Form classes
    'form-input', 'form-label', 'form-error', 'form-help',
    // Nav classes
    'nav-link', 'nav-link-active',
    // Badge classes
    'badge'
  ],
  darkMode: 'class', // クラスベースダークモード
  theme: {
    extend: {
      // デジタル庁デザインシステム準拠のカラーパレット
      colors: {
        // Primary Colors (デジタル庁ブルー系)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0969da', // Digital Agency Primary
          600: '#0052cc',
          700: '#0041a3',
          800: '#1e3a8a',
          900: '#1e40af',
          950: '#172554',
        },
        // Success Colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1f883d', // Digital Agency Success
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Warning Colors
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#fb8500', // Digital Agency Warning
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Error Colors
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#cf222e', // Digital Agency Error
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Info Colors
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Digital Agency Info
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Neutral Colors
        neutral: {
          50: '#f8fafc',
          100: '#f6f8fa', // Digital Agency Light
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#656d76', // Digital Agency Medium
          700: '#374151',
          800: '#1f2937',
          900: '#24292f', // Digital Agency Dark
          950: '#0f172a',
        },
        // Dark mode specific colors (WCAG AA compliant)
        dark: {
          50: '#0f172a',   // Background - darkest
          100: '#1e293b',  // Card background
          200: '#334155',  // Container background
          300: '#475569',  // Border color
          400: '#64748b',  // Disabled text
          500: '#94a3b8',  // Muted text
          600: '#cbd5e1',  // Secondary text
          700: '#e2e8f0',  // Primary text (high contrast)
          800: '#f1f5f9',  // Heading text (highest contrast)
          900: '#ffffff',  // Maximum contrast text
        },
        // Secondary Colors (complementary to primary)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      // Typography (デジタル庁フォントスケール)
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-1': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['1.75rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-6': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-regular': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      // Spacing (8px grid system)
      spacing: {
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem',     // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem',    // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '7': '1.75rem',    // 28px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
      },
      // Border Radius
      borderRadius: {
        'xs': '0.125rem',  // 2px
        'sm': '0.25rem',   // 4px
        'md': '0.375rem',  // 6px
        'lg': '0.5rem',    // 8px
        'xl': '0.75rem',   // 12px
        '2xl': '1rem',     // 16px
        '3xl': '1.5rem',   // 24px
      },
      // Shadows (デジタル庁準拠)
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'digital': '0 2px 8px 0 rgb(9 105 218 / 0.15)', // Digital Agency signature shadow
      },
      // Breakpoints (responsive design)
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
}
