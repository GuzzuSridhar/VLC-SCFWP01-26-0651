<script setup>
import BaseCard from './basecard.vue';
</script>

<template>
  <div class="example-box">
    <h3>Directive: v-slot (Shorthand: #)</h3>

    <BaseCard>
      <template #header>
        <h4>Custom Profile</h4>
      </template>

      <p>This content goes into the main body of the card because it doesn't have a name.</p>

      <template #footer>
        <button>Click Me</button>
      </template>
    </BaseCard>
  </div>
</template>