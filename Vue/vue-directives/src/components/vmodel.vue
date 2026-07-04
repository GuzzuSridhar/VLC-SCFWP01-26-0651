<script setup>
import { ref } from 'vue';

const username = ref('');
const favoriteColor = ref('#42b983');
const agreeToTerms = ref(false);
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-model</h3>

    <div class="field">
      <label>Enter Name:</label>
      <input v-model="username" placeholder="Type something..." />
      <p>Your name is: <strong>{{ username }}</strong></p>
    </div>

    <hr />

    <div class="field">
      <label>Pick a theme color:</label>
      <input type="color" v-model="favoriteColor" />
      <span :style="{ color: favoriteColor }"> This text changes color!</span>
    </div>

    <hr />

    <div class="field">
      <label>
        <input type="checkbox" v-model="agreeToTerms" />
        I agree to the terms
      </label>
      <p>Status: {{ agreeToTerms ? '✅ Agreed' : '❌ Not Agreed' }}</p>
    </div>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #42b983; padding: 20px; border-radius: 8px; }
.field { margin: 15px 0; }
label { display: block; margin-bottom: 5px; font-weight: bold; }
input[type="text"] { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
</style>