/* 封装一个自定义的按钮组件 */
export default {
  data() {
    return {
      count: 0,
    };
  },
  template: `
  <div>
    <h2>子组件</h2>
    <button @click='count++'>Click ME</button> <span>{{count}}</span>
  <div>
  `,
};
