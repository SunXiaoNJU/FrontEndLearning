<script setup>
import { reactive, ref, computed } from "vue";

/* 
reactive():
    - 返回一个对象的响应式代理，是一个深层响应式对象
    - 也可以使用shallowReactive()来创建一个浅层响应式对象
    - 只能返回对象的响应式代理！不能处理原始值

ref():
    - 接收一个任意值，并返回它的响应式代理
    - 访问ref对象时，必须通过 对象.value 来访问其中的值
    - 在模板中，会自动解包，不需要写.value
*/
const msg = "组合式Vue";
const stu = reactive({
  name: "sunxiao",
  age: 20,
});

// ref在生成响应式代理时，它是将值包装成一个对象 {value : ref中的值}
let count = ref(0);

// computed 用来生成计算属性
const newMsg = computed(() => {
  return count.value;
});

// 采用v-bind对属性进行赋值
let isdisabled = ""; // true
isdisabled = NaN; // false
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ stu.age }}</h2>
  <h3>count: {{ newMsg }}</h3>
  <button @click="count++" :disabled="isdisabled">CLICK ME {{ count }}</button>
</template>

<style scoped>
/* scoped 代表是局部样式 */
h1 {
  background-color: aliceblue;
  color: aqua;
}
</style>
