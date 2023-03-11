<script setup>
import { ref } from 'vue';
let count = ref(0);
</script>

<template>
  <button @click="count++">CLICK ME : {{ count }}</button>
</template>
