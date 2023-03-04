<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div>
    <h2>子组件</h2>
    <button @click="count++">Click ME</button>
    <span>{{ count }}</span>
  </div>
</template>
