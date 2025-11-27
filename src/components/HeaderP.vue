<!-- Header.vue — Barre de navigation principale du portfolio -->
<!-- Affiche le logo, les liens de navigation et le bouton Light/Dark -->
<!-- Composant global présent sur toutes les pages -->

<template>
  <header class="border-b border-[#E5E7EB] bg-white/80 dark:bg-[#1A1F2E]/80 backdrop-blur">
    <div class="container mx-auto flex items-center justify-between py-4 px-4">
      <!-- Logo + Nom -->
      <RouterLink to="/" class="flex items-center gap-3">
        <!-- LOGO clair / sombre -->
        <picture>
          <!-- Mode sombre -->
          <img
            src="/images/PixelBurst-Color.svg"
            alt="Logo Benito Studio sombre"
            class="h-10 w-10 object-contain scale-[2.2] hidden dark:block"
          />

          <!-- Mode clair -->
          <img
            src="/images/PixelBurst-BW.svg"
            alt="Logo Benito Studio clair"
            class="h-10 w-10 object-contain scale-[1.2] dark:hidden"
          />
        </picture>

        <!-- Texte du branding -->
        <div>
          <div class="font-semibold tracking-tight text-[#1D2939] dark:text-white">
            Benito Studio
          </div>
          <div class="text-xs uppercase tracking-[0.14em] text-[#98A2B3] dark:text-[#D4AF73]">
            Webdesign Portfolio
          </div>
        </div>
      </RouterLink>

      <!-- Nav + bouton -->
      <div class="flex items-center gap-6">
        <nav class="hidden sm:flex items-center gap-6 text-sm">
          <RouterLink
            to="/"
            class="text-[#667085] dark:text-[#E2E4E8] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            Accueil
          </RouterLink>

          <RouterLink
            to="/projects"
            class="text-[#667085] dark:text-[#E2E4E8] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            Projets
          </RouterLink>

          <RouterLink
            to="/about"
            class="text-[#667085] dark:text-[#E2E4E8] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            À propos
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-[#667085] dark:text-[#E2E4E8] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            Contact
          </RouterLink>
        </nav>

        <!-- Bouton Light/Dark -->
        <button
          @click="$emit('toggle-dark')"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E7EB] dark:border-[#2C3348] bg-white dark:bg-[#283044] hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] transition-colors"
        >
          <!-- Soleil (mode clair) -->
          <svg
            v-if="!dark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#1D2939]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3v1M12 20v1M4.222 4.222l.707.707M18.364 18.364l.707.707M1 12h1M22 12h1M4.222 19.778l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 110 10 5 5 0 010-10z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>

          <!-- Lune (mode sombre) -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#E2E8F0]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  dark: Boolean,
})

defineEmits(['toggle-dark'])
</script>
