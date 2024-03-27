import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../public/css/app.pcss'
import App from './App.vue'
import router from "./router/index.js"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// createApp(App).use(router).mount('#app')

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.mount('#app')



