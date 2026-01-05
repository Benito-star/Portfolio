<!-- Footer.vue — Bas de page du portfolio. -->
<!-- Affiche le CTA “me contacter”, les tags de style du portfolio, -->
<!-- ainsi que les informations légales, branding et liens professionnels. -->

<script setup>
import { RouterLink } from 'vue-router'
import PrimaryButton from './PrimaryButton.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-[#E5E7EB] bg-white mt-16 pt-12">
    <!-- CTA CONTACT -->
    <div class="container mx-auto px-4 pb-12 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-[#1D2939] mb-4 font-playfair">
        Un projet en tête ?
      </h2>

      <p class="text-sm text-[#667085] max-w-xl mx-auto mb-6 leading-relaxed">
        Je crée des interfaces modernes, élégantes et orientées conversion. Parlons ensemble de
        votre projet et voyons ce que nous pouvons créer.
      </p>

      <!-- ✅ ICI : on ajoute focus=1 -->
      <RouterLink :to="{ path: '/contact', query: { focus: '1' } }" class="inline-block">
        <PrimaryButton>Me contacter →</PrimaryButton>
      </RouterLink>
    </div>

    <!-- INFOS BAS DE PAGE -->
    <div class="border-t border-[#E5E7EB]">
      <div
        class="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#98A2B3]"
      >
        <!-- Copyright dynamique + branding -->
        <div>© {{ currentYear }} Benito Studio — Webdesign Portfolio</div>

        <!-- Liens professionnels (icônes premium) -->
        <div class="flex items-center gap-4">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/benito-star"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            class="flex items-center justify-center w-6 h-6 text-[#98A2B3] hover:text-[#D4AF73] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 -translate-y-[2px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.98 0h3.84v2.16h.06c.54-1.02 1.86-2.16 3.84-2.16 4.08 0 4.82 2.7 4.82 6.22V24h-4v-7.22c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.76 1.87-2.76 3.8V24h-4V8z"
              />
            </svg>
          </a>

          <!-- Email -->
          <a
            href="mailto:benoit.durieux@hotmail.be"
            aria-label="Envoyer un email"
            class="flex items-center justify-center w-6 h-6 text-[#98A2B3] hover:text-[#D4AF73] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 5h18v14H3V5zm18 0l-9 7-9-7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <!-- Tags de style -->
        <div class="flex flex-wrap justify-center gap-2">
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Élégant</span>
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Moderne</span>
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Premium</span>
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Minimal</span>
        </div>
      </div>
    </div>
  </footer>
</template>
