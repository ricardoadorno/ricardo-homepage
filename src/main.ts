import { createApp } from 'vue';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';
import i18n from '@/i18n';
import './style.css';

const app = createApp(App);

app.use(MotionPlugin);
app.use(i18n);

app.mount('#app');
