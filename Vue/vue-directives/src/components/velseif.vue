<script setup>
import { ref } from 'vue';

const score = ref(85);
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-if / v-else-if / v-else</h3>

    <div class="input-group">
      <label>Enter Score (0-100): </label>
      <input type="number" v-model="score" min="0" max="100" />
    </div>

    <div class="result-display">
      <h1 v-if="score >= 90" class="grade-a">Grade: A (Excellent! 🌟)</h1>
      
      <h1 v-else-if="score >= 80" class="grade-b">Grade: B (Great Job! 👍)</h1>
      
      <h1 v-else-if="score >= 70" class="grade-c">Grade: C (Good Effort! 🙂)</h1>
      
      <h1 v-else class="grade-f">Grade: Needs Improvement (📚)</h1>
    </div>

    <p>Current score: {{ score }}</p>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #3498db; padding: 20px; border-radius: 8px; }
.input-group { margin-bottom: 20px; }
input { padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 60px; }

.grade-a { color: #2ecc71; }
.grade-b { color: #3498db; }
.grade-c { color: #f1c40f; }
.grade-f { color: #e74c3c; }
</style>