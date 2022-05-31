import { createApp } from 'vue'
import App from './App.vue'

import UnrealUI from 'unreal-ui-next'
import 'unreal-ui-next/lib/ur-index/style.css'

const app = createApp(App)
app.use(UnrealUI)
app.mount('#app')