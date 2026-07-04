<script setup>
import { ref } from 'vue';

const isVisible = ref(true);

const toggle = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-show</h3>
    
    <button @click="toggle">
      {{ isVisible ? 'Hide' : 'Show' }} Message
    </button>

    <p v-show="isVisible" class="message">
      Peek-a-boo! I am using v-show.
    </p>

    <div class="explanation">
      <p><strong>Status:</strong> {{ isVisible ? 'Visible' : 'Hidden via CSS' }}</p>
    </div>
  </div>
</template>

<style scoped>
.message {
  padding: 10px;
  background-color: #e8f5e9;
  border-left: 5px solid #42b983;
}
button {
  margin-bottom: 20px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>