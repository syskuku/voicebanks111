/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",        // 扫描根目录下的组件 (如 App.tsx)
    "./components/**/*.{js,ts,jsx,tsx}", // 扫描 components 目录
    "./src/**/*.{js,ts,jsx,tsx}"  // 以防万一，扫描 src 目录
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Microsoft YaHei"', 'sans-serif'],
        display: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        miku: {
          pink: '#ff7eb6',
          dark: '#e65a95',
          light: '#ffb3d6',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      }
    },
  },
  plugins: [],
}