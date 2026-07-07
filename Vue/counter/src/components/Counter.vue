<template>
  <div>
  <h2>The count is: {{ count }} </h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="reset">Reset</button>
</div>

</template>

<script setup>
import { ref } from 'vue';

// ref in vue is similar to useState in react
 const count = ref(0);

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = 0

  // function decrement(){
  //   count.value--;
  // }
  // function increment(){
  //   count.value++;
  // }

    // function reset(){
  //   count.value = 0;
  // }
</script>

<style scoped>
  div{
    text-align: center;
  }
</style>