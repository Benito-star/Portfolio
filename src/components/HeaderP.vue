<!-- HeaderP.vue — Barre de navigation principale du portfolio -->
<!-- Affiche le logo, les liens de navigation et le bouton Light/Dark -->
<!-- Composant global présent sur toutes les pages -->

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  dark: Boolean,
})

const emit = defineEmits(['toggle-dark'])

const route = useRoute()

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Projets', to: '/projects' },
  { label: 'À propos', to: '/about' },
]

const isMenuOpen = ref(false)
const menuPanel = ref(null)
const menuButton = ref(null)

const isActive = (item) => {
  if (item.to === '/') return route.path === '/'

  if (item.to === '/projects') {
    return route.path === '/projects' || route.path.startsWith('/project/')
  }

  return route.path === item.to
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const onKeydown = (event) => {
  if (!isMenuOpen.value) return
  if (event.key === 'Escape') closeMenu()
}

const onPointerDown = (event) => {
  if (!isMenuOpen.value) return

  const path = typeof event.composedPath === 'function' ? event.composedPath() : []

  const clickedInMenu =
    menuPanel.value && (menuPanel.value.contains(event.target) || path.includes(menuPanel.value))

  const clickedOnButton =
    menuButton.value && (menuButton.value.contains(event.target) || path.includes(menuButton.value))

  if (!clickedInMenu && !clickedOnButton) closeMenu()
}

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

<template>
  <header
    class="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/85 backdrop-blur-xl dark:border-[#2C3348] dark:bg-[#0B1020]/85"
  >
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
      <!-- Logo + identité -->
      <RouterLink
        to="/"
        class="group flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B1020]"
        aria-label="Accueil — Benito Studio"
        @click="closeMenu"
      >
        <picture
          class="shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-105"
        >
          <img
            src="/images/PixelBurst-Color.svg"
            alt="Logo Benito Studio"
            width="40"
            height="40"
            decoding="async"
            class="hidden h-10 w-10 scale-[1.35] object-contain dark:block"
          />

          <img
            src="/images/PixelBurst-BW.svg"
            alt="Logo Benito Studio"
            width="40"
            height="40"
            decoding="async"
            class="h-10 w-10 scale-[1.2] object-contain dark:hidden"
          />
        </picture>

        <div class="leading-tight">
          <div
            class="font-semibold tracking-tight text-[#1D2939] transition-colors group-hover:text-[#0B1020] dark:text-white dark:group-hover:text-[#D4AF73]"
          >
            Benito Studio
          </div>

          <div
            class="text-[11px] uppercase tracking-[0.16em] text-[#98A2B3] transition-colors group-hover:text-[#667085] dark:text-[#D4AF73] dark:group-hover:text-[#E2E8F0]"
          >
            UI/UX & intégration web
          </div>
        </div>
      </RouterLink>

      <!-- Navigation + actions -->
      <div class="flex items-center gap-2 sm:gap-4">
        <!-- Navigation desktop -->
        <nav class="hidden items-center gap-1 text-sm sm:flex" aria-label="Navigation principale">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :aria-current="isActive(item) ? 'page' : undefined"
            :class="[
              'rounded-full px-4 py-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B1020]',
              isActive(item)
                ? 'bg-[#1D2939] text-white dark:bg-[#D4AF73] dark:text-[#0B1020]'
                : 'text-[#667085] hover:bg-[#F3F4F6] hover:text-[#1D2939] dark:text-[#E2E4E8] dark:hover:bg-[#1A1F2E] dark:hover:text-white',
            ]"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <!-- CTA desktop -->
        <RouterLink
          to="/contact"
          class="hidden rounded-full border border-[#D4AF73]/60 px-4 py-2 text-sm font-semibold text-[#1D2939] transition-colors hover:bg-[#D4AF73] hover:text-[#0B1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:text-white dark:focus-visible:ring-offset-[#0B1020] md:inline-flex"
        >
          Me contacter
        </RouterLink>

        <!-- Toggle dark mode -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#1D2939] transition-colors hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:border-[#2C3348] dark:bg-[#1A1F2E] dark:text-[#E2E8F0] dark:hover:bg-[#283044] dark:focus-visible:ring-offset-[#0B1020]"
          :aria-label="dark ? 'Activer le mode clair' : 'Activer le mode sombre'"
          @click="emit('toggle-dark')"
        >
          <!-- Sun -->
          <svg
            v-if="!dark"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 3v1M12 20v1M4.222 4.222l.707.707M18.364 18.364l.707.707M1 12h1M22 12h1M4.222 19.778l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 110 10 5 5 0 010-10z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          <!-- Moon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Bouton menu mobile -->
        <button
          ref="menuButton"
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#1D2939] transition-colors hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:border-[#2C3348] dark:bg-[#1A1F2E] dark:text-[#E2E8F0] dark:hover:bg-[#283044] dark:focus-visible:ring-offset-[#0B1020] sm:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="toggleMenu"
        >
          <!-- Burger -->
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>

          <!-- Close -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div
      v-if="isMenuOpen"
      id="mobile-nav"
      ref="menuPanel"
      class="absolute left-0 right-0 top-full border-b border-[#E5E7EB] bg-white/95 shadow-lg backdrop-blur-xl dark:border-[#2C3348] dark:bg-[#0B1020]/95 sm:hidden"
    >
      <nav
        class="container mx-auto flex flex-col gap-2 px-4 py-4 text-sm"
        aria-label="Navigation mobile"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :aria-current="isActive(item) ? 'page' : undefined"
          :class="[
            'rounded-xl px-4 py-3 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73]',
            isActive(item)
              ? 'bg-[#1D2939] text-white dark:bg-[#D4AF73] dark:text-[#0B1020]'
              : 'text-[#667085] hover:bg-[#F3F4F6] hover:text-[#1D2939] dark:text-[#E2E4E8] dark:hover:bg-[#1A1F2E] dark:hover:text-white',
          ]"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <RouterLink
          to="/contact"
          class="mt-2 rounded-xl bg-[#1D2939] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:bg-[#D4AF73] dark:text-[#0B1020]"
          @click="closeMenu"
        >
          Discuter d’une opportunité →
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
