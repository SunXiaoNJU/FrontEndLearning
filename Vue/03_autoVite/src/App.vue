<script>
export default {
  // 使用Vue，减少使用箭头函数，因为箭头函数没有this
  // 在data中，this就是当前的组件实例vm
  data() {
    // 直接向组件实例中添加了一个属性name，但是不会被vue代理，不是响应式数据，修改后页面不会发生变化。
    this.name = "Jack";
    console.log(this);
    // data会返回一个对象作为一个返回值，vue会对该对象进行代理，从而将其转换成响应式数据，可以通过组件实例访问。
    return {
      msg: "Vue",
    };
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
