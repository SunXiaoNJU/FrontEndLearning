// 引入 vue
// 这里引入的Vue默认不支持通过template属性来设置模板
import { createApp } from "vue";
// 根组件
import App from "./App.vue";

// 创建app并挂载，mount返回值是根组件的实例
createApp(App).mount("#root");
