<template>
  <div class="card">
    <header class="card-header">
      <slot name="header">Default Header</slot>
    </header>

    <main class="card-body">
      <slot></slot> // unnamed slot (default)
    </main>

    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.card { border: 2px solid #42b983; border-radius: 8px; margin: 10px; width: 300px; }
.card-header { background: #42b983; color: white; padding: 10px; }
.card-body { padding: 15px; }
.card-footer { border-top: 1px solid #eee; padding: 10px; font-size: 0.8rem; }
</style>