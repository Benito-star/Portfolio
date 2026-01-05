<!-- AppLayout.vue — Structure globale du portfolio -->
<!-- Gère Header + Footer + Dark Mode + wrapper de page -->

<template>
  <div
    class="min-h-screen flex flex-col bg-white text-[#1D2939] dark:bg-[#0B1020] dark:text-[#E2E4E8]"
  >
    <!-- Header global -->
    <HeaderP :dark="isDark" @toggle-dark="toggleDark" />

    <!-- Contenu des pages -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer global -->
    <FooterP />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeaderP from './HeaderP.vue'
import FooterP from './FooterP.vue'

const isDark = ref(false)

function applyTheme(value) {
  const root = document.documentElement
  if (value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

function toggleDark() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const stored = localStorage.getItem('theme')

  if (stored === 'dark') {
    isDark.value = true
  } else if (stored === 'light') {
    isDark.value = false
  } else {
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  }

  applyTheme(isDark.value)
})
</script>
