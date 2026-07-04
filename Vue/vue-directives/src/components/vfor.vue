<script setup>
import { ref } from 'vue';

const fruits = ref([
  { id: 1, name: 'Apple', color: 'Red', icon: '🍎' },
  { id: 2, name: 'Banana', color: 'Yellow', icon: '🍌' },
  { id: 3, name: 'Grape', color: 'Purple', icon: '🍇' },
  { id: 4, name: 'Kiwi', color: 'Green', icon: '🥝' }
]);
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-for</h3>
    <p>Rendering a list from an array:</p>

    <ul>
      <li v-for="(fruit, index) in fruits" :key="fruit.id" class="fruit-item">
        <span class="index">#{{ index + 1 }}</span>
        <span class="icon">{{ fruit.icon }}</span>
        <strong>{{ fruit.name }}</strong> 
        <small>({{ fruit.color }})</small>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.example-box { border: 1px solid #f39c12; padding: 20px; border-radius: 8px; }
ul { list-style: none; padding: 0; }
.fruit-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  gap: 10px;
  align-items: center;
}
.index { color: #999; font-size: 0.8rem; }
.icon { font-size: 1.5rem; }
</style>