// App.vue — Composant racine du portfolio. // Gère le layout global : Header, RouterView dynamique,
Footer. // Contient également la gestion du mode Light/Dark via un state local.

<script setup>
import { ref, watch } from 'vue'
import Header from './components/HeaderP.vue'
import Footer from './components/FooterP.vue'

// état du thème (false = clair, true = sombre)
const dark = ref(false)

// applique / retire la classe "dark" sur <html>
watch(
  dark,
  (value) => {
    const html = document.documentElement
    if (value) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  },
  { immediate: true }, // applique l'état actuel dès le chargement
)
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-[#F3F4F6] text-[#5A5A5A] dark:bg-[#1A1F2E] dark:text-[#F3F4F6] transition-colors"
  >
    <!-- on passe l'état dark au header + un event pour le bouton -->
    <Header :dark="dark" @toggle-dark="dark = !dark" />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
