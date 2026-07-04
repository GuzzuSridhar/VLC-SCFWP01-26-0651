<script setup>
import { ref } from 'vue';
const message = ref('Hello! I only appeared once I was ready.');
</script>

<template>
  <div v-cloak class="example-box">
    <h3>Directive: v-cloak</h3>
    <p>{{ message }}</p>
  </div>
</template>

/* This hides any element with the v-cloak attribute */

<style>
    [v-cloak] {
      display: none;
    }
</style>

<style scoped>
.example-box { border: 1px solid #34495e; padding: 20px; border-radius: 8px; }
</style>