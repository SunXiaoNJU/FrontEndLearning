// 引入 vue
// 这里引入的Vue默认不支持通过template属性来设置模板
import { createApp } from "vue";
// 根组件
const App = {
  data() {
    return {
      message: "Vue",
    };
  },
  template: "<h1>{{message}}</h1>",
};
// 创建app并挂载，mount返回值是组件的实例
createApp(App).mount("#root");
