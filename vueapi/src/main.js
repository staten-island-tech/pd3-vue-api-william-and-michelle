import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'

import './assets/main.css'

const app = createApp(app)

App.use(router)

createApp(App).mount('#app')
