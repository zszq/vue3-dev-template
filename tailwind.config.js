/** @type {import('tailwindcss').Config} */
import extend from './src/styles/tailwindExtend.ts';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend
  },
  plugins: [
    function ({ addBase }) {
      /* 处理el-button背景色消失 */
      addBase({
        '.el-button': {
          'background-color': 'var(--el-button-bg-color)'
        }
      });
    }
  ]
  // corePlugins: {
  //   preflight: false
  // }
};
