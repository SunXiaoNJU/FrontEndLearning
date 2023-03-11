import { createApp } from "vue";
import App from "./App.vue";
import newApp from "./newApp.vue";

/* App.vue是根组件
    - createApp(App) 将根组件关联到应用上
    - vm是根组件的实例
*/
const vm = createApp(App).mount("#app");
// 将vm设置为全局变量
window.vm = vm;

const new_app = createApp(newApp);
// 通过app来添加全局变量
new_app.config.globalProperties.hello = "Hello, this is global properties.";
new_app.mount("#newApp");
