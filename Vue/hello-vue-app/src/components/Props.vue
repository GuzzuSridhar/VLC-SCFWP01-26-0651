<script setup>
defineProps({
  name: {
    type: String,
    default: 'Guest'
  }
})
</script>

<template>
  <div class="greeter-card">
    <div class="greeter-avatar">
      <span>{{ name.charAt(0).toUpperCase() }}</span>
    </div>
    <div class="greeter-content">
      <h2 class="greeter-title">Hello, <span class="highlight">{{ name }}</span>! 👋</h2>
      <p class="greeter-text">Welcome to your Vue application. Glad to have you here!</p>
    </div>
  </div>
</template>

<style scoped>
.greeter-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  margin: 20px auto;
  max-width: 500px;
  box-shadow: var(--shadow);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s;
  text-align: left;
}

.greeter-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-border);
}

.greeter-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--accent-bg);
  color: var(--accent);
  font-size: 24px;
  font-weight: bold;
  border: 1px solid var(--accent-border);
}

.greeter-content {
  flex: 1;
}

.greeter-title {
  margin: 0 0 6px 0;
  font-size: 22px;
  font-weight: 600;
  color: var(--text-h);
}

.highlight {
  color: var(--accent);
  position: relative;
  display: inline-block;
}

.greeter-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.4;
  color: var(--text);
}

@media (max-width: 600px) {
  .greeter-card {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
}
</style>
