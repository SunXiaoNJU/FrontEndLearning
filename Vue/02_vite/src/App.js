// 引入子组件
import MyButton from "./components/MyButton";

// 创建根组件
export default {
  data() {
    return {
      message: "Vue",
    };
  },
  // 在组件中注册子组件，子组件之间是相互独立的，不会互相影响。
  components: {
    "my-button": MyButton,
  },

  template: `<h1>{{message}}</h1>
  <my-button></my-button>
  <my-button></my-button>
  `,
};
