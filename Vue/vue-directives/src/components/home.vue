<template>
  <div class="gallery-wrapper">
    <header class="gallery-header">
      <h1>Vue Directives Master Gallery</h1>
      <p>A comprehensive collection of Vue.js core features</p>
    </header>

    <nav class="directive-nav">
      <RouterLink to="/else" class="nav-item">v-else</RouterLink>
      <RouterLink to="/elseif" class="nav-item">v-else-if</RouterLink>
      <RouterLink to="/txt" class="nav-item">v-text</RouterLink>
      <RouterLink to="/htm" class="nav-item">v-html</RouterLink>
      <RouterLink to="/show" class="nav-item">v-show</RouterLink>
      <RouterLink to="/for" class="nav-item">v-for</RouterLink>
      <RouterLink to="/on" class="nav-item">v-on</RouterLink>
      <RouterLink to="/bind" class="nav-item">v-bind</RouterLink>
      <RouterLink to="/model" class="nav-item">v-model</RouterLink>
      <RouterLink to="/slot" class="nav-item">v-slot</RouterLink>
      <RouterLink to="/pre" class="nav-item">v-pre</RouterLink>
      <RouterLink to="/once" class="nav-item">v-once</RouterLink>
      <RouterLink to="/memo" class="nav-item">v-memo</RouterLink>
      <RouterLink to="/cloak" class="nav-item">v-cloak</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
/* 1. This covers the entire background of the home view */
.home-wrapper {
  background-color: #1b7dde; /* A soft, modern off-white/blue */
  min-height: 100vh;         /* Ensures the color goes all the way to the bottom */
  padding: 40px 20px;
}

.gallery-header {
  text-align: center;
  margin-bottom: 50px;
}

.gallery-header h1 {
  color: #1f64a8;
  font-size: 2.5rem;
  font-weight: 800;
}

/* 2. Grid Container */
.gallery-wrapper {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.gallery-header {
  text-align: center;
  margin-bottom: 40px;
}

/* The Grid Container */
.directive-nav {
  display: grid;
  /* This creates columns that are at least 150px wide and fill the space */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

/* Individual Link Styling */
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  background-color: #ffffff;
  border: 2px solid #ecf0f1;
  border-radius: 10px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Hover effects */
.nav-item:hover {
  border-color: #42b983; /* Vue Green */
  color: #42b983;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.2);
}

/* Highlighting the active link */
.router-link-active {
  background-color: #42b983;
  border-color: #42b983;
  color: white !important;
}
</style>