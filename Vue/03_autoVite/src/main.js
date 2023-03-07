import { createApp } from "vue";
import App from "./App.vue";

/* App.vue是根组件
    - createApp(App) 将根组件关联到应用上
    - vm是根组件的实例
*/
const vm = createApp(App).mount("#app");
// 将vm设置为全局变量
window.vm = vm;
