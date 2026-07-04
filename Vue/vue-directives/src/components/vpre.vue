<script setup>
import { ref } from 'vue';
const message = ref('Hello Vue!');
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-pre</h3>

    <div class="section">
      <p><strong>Normal:</strong> {{ message }}</p>
    </div>

    <hr />

    <div class="section" v-pre>
      <p><strong>With v-pre:</strong> {{ message }}</p>
      <button @click="doSomething">Click Me</button>
    </div>

    <p class="note">
      Notice that in the second box, you see the actual curly braces and the button does nothing.
    </p>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #7f8c8d; padding: 20px; border-radius: 8px; }
.section { margin: 10px 0; padding: 10px; background: #f9f9f9; }
.note { font-size: 0.9rem; color: #666; font-style: italic; }
</style>