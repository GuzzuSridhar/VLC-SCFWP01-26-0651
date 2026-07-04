<script setup>
import { ref } from 'vue';

const htmlString = ref('<em style="color: #42b983;">This text is italic and green!</em>');
const linkString = ref('<a href="https://vuejs.org" target="_blank">Visit Vue Docs</a>');
const scriptWarning = ref('<img src="x" onerror="alert(\'Hacked!\')">');
</script>

<template>
  <div class="example-box">
    <h3>Using v-html</h3>
    <div v-html="linkString"></div>

    <p v-html="htmlString"></p>

    <hr />
    
    <h3>Comparison with v-text</h3>
    <p v-text="htmlString"></p>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #35495e; padding: 20px; border-radius: 8px; }
</style>