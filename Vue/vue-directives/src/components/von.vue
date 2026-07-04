<script setup>
import { ref } from 'vue';

const count = ref(0);
const status = ref('Waiting for input...');

const increment = () => {
  count.value++;
};

const resetCounter = () => {
  count.value = 0;
};

const handleEnter = (event) => {
  status.value = `You pressed Enter! (Value: ${event.target.value})`;
};
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-on (Shorthand: @)</h3>

    <div class="section">
      <p>Counter: <strong>{{ count }}</strong></p>
      <button @click="increment">Add 1</button>
      <button @click="resetCounter">Reset</button>
    </div>

    <hr />

    <div class="section">
      <p>Status: {{ status }}</p>
      <input 
        type="text" 
        placeholder="Type something and press Enter"
        @keyup.enter="handleEnter" 
      />
    </div>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #3498db; padding: 20px; border-radius: 8px; }
.section { margin: 15px 0; }
button { margin-right: 10px; padding: 5px 15px; cursor: pointer; }
input { padding: 8px; width: 250px; }
</style>