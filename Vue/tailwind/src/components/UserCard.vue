<template>
  <div class="max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl">
    <div class="h-24 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    
    <div class="px-6 pb-6 text-center">
      <div class="relative -mt-12 inline-block">
        <img 
          :src="user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop'" 
          :alt="user.name"
          class="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 object-cover shadow-md"
        />
        <span 
          v-if="user.isOnline" 
          class="absolute bottom-1 right-1 block h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-800"
          title="Online"
        ></span>
      </div>

      <div class="mt-3">
        <h3 class="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
          {{ user.name }}
        </h3>
        <p class="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          @{{ user.username }}
        </p>
      </div>

      <p class="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {{ user.bio || 'No bio provided yet.' }}
      </p>

      <div class="mt-6 grid grid-cols-3 gap-2 py-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
        <div>
          <span class="block text-lg font-bold text-slate-800 dark:text-white">{{ formatStat(user.followers) }}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Followers</span>
        </div>
        <div>
          <span class="block text-lg font-bold text-slate-800 dark:text-white">{{ formatStat(user.following) }}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Following</span>
        </div>
        <div>
          <span class="block text-lg font-bold text-slate-800 dark:text-white">{{ formatStat(user.projects) }}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Projects</span>
        </div>
      </div>

      <div class="mt-6 flex gap-3">
        <button 
          @click="$emit('follow', user.id)"
          class="flex-1 justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
        >
          Follow
        </button>
        <button 
          @click="$emit('message', user.id)"
          class="flex-1 justify-center rounded-xl bg-white dark:bg-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors duration-200"
        >
          Message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Define explicit component props
const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      name: 'Sarah Jenkins',
      username: 'sarah_j',
      bio: 'Product Designer & Frontend Enthusiast. Building the future of web interfaces one pixel at a time.',
      avatar: '',
      followers: 12400,
      following: 482,
      projects: 34,
      isOnline: true
    })
  }
})

// Define component events
defineEmits(['follow', 'message'])

// Helper function to keep stats looking clean (e.g., 12.4K)
const formatStat = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num
}
</script>