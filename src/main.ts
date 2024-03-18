import { createApp } from 'vue'
import { createPinia } from 'pinia'


import ElementPlus from 'element-plus'
import "@/styles/index.scss";

import * as ElementPlusIconVue from '@element-plus/icons-vue'
import router from './router'
import i18n from '@/language/index'
import App from './App.vue'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
