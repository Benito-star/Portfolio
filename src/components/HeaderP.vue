<!-- Header.vue — Barre de navigation principale du portfolio -->
<!-- Affiche le logo, les liens de navigation et le bouton Light/Dark -->
<!-- Composant global présent sur toutes les pages -->

<template>
  <header class="relative border-b border-[#E5E7EB] bg-white/80 dark:bg-[#1A1F2E]/80 backdrop-blur">
    <div class="container mx-auto flex items-center justify-between py-4 px-4">
      <!-- Logo + Nom -->
      <RouterLink to="/" class="flex items-center gap-3" @click="closeMenu">
        <!-- LOGO clair / sombre -->
        <picture>
          <!-- Dark mode -->
          <img
            src="/images/PixelBurst-Color.svg"
            alt="Benito Studio logo (dark)"
            class="h-10 w-10 object-contain scale-[1.4] hidden dark:block"
          />

          <!-- Light mode -->
          <img
            src="/images/PixelBurst-BW.svg"
            alt="Benito Studio logo (light)"
            class="h-10 w-10 object-contain scale-[1.2] dark:hidden"
          />
        </picture>

        <!-- Branding text -->
        <div>
          <div class="font-semibold tracking-tight text-[#1D2939] dark:text-white">
            Benito Studio
          </div>
          <div class="text-xs uppercase tracking-[0.14em] text-[#98A2B3] dark:text-[#D4AF73]">
            Webdesign Portfolio
          </div>
        </div>
      </RouterLink>

      <!-- Nav + buttons -->
      <div class="flex items-center gap-2 sm:gap-6">
        <!-- Mobile menu button -->
        <button
          ref="menuButton"
          type="button"
          class="sm:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E7EB] dark:border-[#2C3348] bg-white dark:bg-[#283044] hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] transition-colors"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
          aria-label="Open menu"
          @click="toggleMenu"
        >
          <!-- Burger icon -->
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#1D2939] dark:text-[#E2E8F0]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>

          <!-- X icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#1D2939] dark:text-[#E2E8F0]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <!-- Desktop nav -->
        <nav class="hidden sm:flex items-center gap-6 text-sm">
          <RouterLink
            to="/"
            class="relative text-[#667085] dark:text-[#E2E4E8] transition-colors hover:text-[#1D2939] dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#D4AF73] after:transition-all after:duration-300"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/projects"
            class="relative text-[#667085] dark:text-[#E2E4E8] transition-colors hover:text-[#1D2939] dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#D4AF73] after:transition-all after:duration-300"
          >
            Projects
          </RouterLink>

          <RouterLink
            to="/about"
            class="relative text-[#667085] dark:text-[#E2E4E8] transition-colors hover:text-[#1D2939] dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#D4AF73] after:transition-all after:duration-300"
          >
            About
          </RouterLink>

          <RouterLink
            to="/contact"
            class="relative text-[#667085] dark:text-[#E2E4E8] transition-colors hover:text-[#1D2939] dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#D4AF73] after:transition-all after:duration-300"
          >
            Contact
          </RouterLink>
        </nav>

        <!-- Light/Dark toggle -->
        <button
          type="button"
          @click="emit('toggle-dark')"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E7EB] dark:border-[#2C3348] bg-white dark:bg-[#283044] hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] transition-colors"
          aria-label="Toggle dark mode"
        >
          <!-- Sun (light mode) -->
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

          <!-- Moon (dark mode) -->
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

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      id="mobile-nav"
      ref="menuPanel"
      class="sm:hidden absolute left-0 right-0 top-full border-b border-[#E5E7EB] dark:border-[#2C3348] bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur"
    >
      <div class="container mx-auto px-4 py-3">
        <nav class="flex flex-col gap-2 text-sm">
          <RouterLink
            to="/"
            @click="closeMenu"
            class="px-3 py-2 rounded-lg text-[#667085] dark:text-[#E2E4E8] hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/projects"
            @click="closeMenu"
            class="px-3 py-2 rounded-lg text-[#667085] dark:text-[#E2E4E8] hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            Projects
          </RouterLink>

          <RouterLink
            to="/about"
            @click="closeMenu"
            class="px-3 py-2 rounded-lg text-[#667085] dark:text-[#E2E4E8] hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            About
          </RouterLink>

          <RouterLink
            to="/contact"
            @click="closeMenu"
            class="px-3 py-2 rounded-lg text-[#667085] dark:text-[#E2E4E8] hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] hover:text-[#1D2939] dark:hover:text-white transition-colors"
          >
            Contact
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  dark: Boolean,
})

// ✅ IMPORTANT: grab the emit function
const emit = defineEmits(['toggle-dark'])

const isMenuOpen = ref(false)
const menuPanel = ref(null)
const menuButton = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const onKeydown = (e) => {
  if (!isMenuOpen.value) return
  if (e.key === 'Escape') closeMenu()
}

const onPointerDown = (e) => {
  if (!isMenuOpen.value) return

  const path = typeof e.composedPath === 'function' ? e.composedPath() : []
  const clickedInMenu =
    (menuPanel.value && (menuPanel.value.contains(e.target) || path.includes(menuPanel.value))) ||
    false
  const clickedOnButton =
    (menuButton.value &&
      (menuButton.value.contains(e.target) || path.includes(menuButton.value))) ||
    false

  if (!clickedInMenu && !clickedOnButton) closeMenu()
}

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('pointerdown', onPointerDown, { capture: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('pointerdown', onPointerDown, { capture: true })
})
</script>
