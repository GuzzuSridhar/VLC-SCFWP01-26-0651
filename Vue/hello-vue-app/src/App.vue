<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Props from './components/Props.vue';

const username = ref('Developer');
</script>

<template>
  <h1>First Vue App</h1>
  
  <div class="input-container">
    <label for="username-input">Enter name: </label>
    <input 
      id="username-input" 
      v-model="username" 
      type="text" 
      placeholder="Type a name..."
      class="custom-input"
    />
  </div>

  <Props :name="username" />

  <HelloWorld />
</template>

<style scoped>
.input-container {
  margin: 20px auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--sans);
}

.input-container label {
  font-weight: 500;
  color: var(--text);
}

.custom-input {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.custom-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-bg);
}
</style>
