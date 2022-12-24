import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { register } from '@tauri-apps/api/globalShortcut';


createApp(App).mount("#app");