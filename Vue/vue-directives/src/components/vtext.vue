<script setup>
import { ref } from 'vue';

const title = ref('Directives: v-text');
const description = ref('This text is rendered using v-text.');
const rawHtml = ref('<strong>Caution:</strong> This will show as plain text.');
</script>

<template>
  <div class="example-box">
    <h2 v-text="title"></h2>
    
    <p v-text="description"></p>
    <p>Interpolation: {{ description }}</p>

    <div class="alert" v-text="rawHtml"></div>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #42b983; padding: 20px; border-radius: 8px; }
.alert { color: #e74c3c; margin-top: 10px; }
</style>