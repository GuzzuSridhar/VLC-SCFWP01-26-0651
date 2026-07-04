<script setup>
import { ref } from 'vue';

const list = ref([
  { id: 1, name: 'Alice', color: 'red' },
  { id: 2, name: 'Bob', color: 'blue' }
]);

const selected = ref(1);
const subscriberCount = ref(100); // A variable that changes often
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-memo</h3>

    <div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
      <p :style="{ color: item.id === selected ? 'green' : 'black' }">
        User: {{ item.name }} | Subscribers: {{ subscriberCount }}
      </p>
    </div>

    <hr />

    <button @click="selected = 1">Select Alice</button>
    <button @click="selected = 2">Select Bob</button>
    <button @click="subscriberCount++">Add Subscriber</button>

    <p class="note">
      <strong>Observation:</strong> When you click "Add Subscriber," the number 
      won't change on the screen! This is because the memo condition 
      (is this item selected?) hasn't changed.
    </p>
  </div>
</template>