import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
// md编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// md预览器

import Prism from 'prismjs';

VueMarkdownEditor.use(githubTheme, {
  Prism,
});


import './assets/main.css'
import '@kangc/v-md-editor/lib/style/base-editor.css';
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon);
app.use(VueMarkdownEditor);
app.mount('#app')
