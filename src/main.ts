import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// import "tailwindcss/tailwind.css"
import '@/styles/index.css';

import svgIcon from './icons';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(svgIcon);

app.mount('#app');
