<script setup>
import { ref, onMounted } from 'vue';

// 1. Capture the exact time when the script runs
const loginTime = new ref(new Date().toLocaleTimeString());

// 2. A separate variable to show "Live" time for comparison
const currentTime = ref(new Date().toLocaleTimeString());

// Update the live clock every second
setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString();
}, 1000);
</script>

<template>
  <div class="example-box">
    <h3>Session Tracker</h3>

    <p>Current Time: <strong>{{ currentTime }}</strong></p>

    <div class="session-card" v-once>
      <p>Logged in at: <strong>{{ loginTime }}</strong></p>
      <small>(This timestamp is frozen by v-once)</small>
    </div>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #2c3e50; padding: 20px; border-radius: 8px; }
.session-card { 
  background-color: #f1f2f6; 
  padding: 10px; 
  border-left: 5px solid #3498db;
  margin-top: 10px;
}
</style>