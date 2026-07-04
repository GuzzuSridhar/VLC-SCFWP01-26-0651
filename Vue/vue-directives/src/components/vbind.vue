<script setup>
import { ref } from 'vue';

const imageSrc = ref('https://vuejs.org/logo.svg');
const siteUrl = ref('https://vuejs.org');
const isImportant = ref(false);
const btnText = ref('Toggle Style');

const toggleStyle = () => {
  isImportant.value = !isImportant.value;
};
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-bind (Shorthand: :)</h3>

    <img :src="imageSrc" alt="Vue Logo" width="100" />

    <p>
      <a :href="siteUrl" target="_blank">Go to Vue Website</a>
    </p>

    <p :class="{ 'warning-text': isImportant }">
      This text changes color when you toggle the button.
    </p>

    <button @click="toggleStyle">{{ btnText }}</button>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #9b59b6; padding: 20px; border-radius: 8px; }
.warning-text { color: #e74c3c; font-weight: bold; font-size: 1.2rem; }
img { display: block; margin-bottom: 10px; }
</style>