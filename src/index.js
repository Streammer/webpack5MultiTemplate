import './template.html';
import './index.scss';
import './js/main.js'
import './js/slider-with-arrows.js'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

createApp(App).use(router).mount('#app')