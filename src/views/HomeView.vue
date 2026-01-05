// HomeView.vue — Page d’accueil du portfolio Benito Studio. // Présente l’introduction, l’accroche
// principale et le CTA vers les projets. // Première page vue par un employeur ou un examinateur.

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import AppLayout from '../components/AppLayout.vue'

// ✅ Titre d’onglet (pro + indique Vue.js)
onMounted(() => {
  document.title = 'Benito Studio — Portfolio (Vue.js)'
})
</script>

<template>
  <AppLayout>
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <!-- Bloc texte -->
        <div>
          <h1 class="text-4xl md:text-5xl font-bold dark:!text-white/95 mb-4">
            Design your digital presence
          </h1>

          <p class="text-[#667085] mb-6 max-w-xl">
            Professional web design services tailored to your brand. Clean, modern interfaces that
            convert visitors into customers.
          </p>

          <div class="flex flex-wrap items-center gap-4 mb-6">
            <RouterLink
              to="/projects"
              class="px-5 py-3 rounded-full bg-[#1D2939] text-white text-sm font-medium tracking-wide hover:bg-black transition-colors"
            >
              Get started
            </RouterLink>

            <RouterLink
              to="/about"
              class="text-sm dark:!text-white/95 underline underline-offset-4"
            >
              Learn more →
            </RouterLink>
          </div>

          <div class="flex gap-3 text-xs text-[#98A2B3]">
            <span>Portfolio webdesign</span>
            <span>•</span>
            <span>Interfaces modernes</span>
            <span>•</span>
            <span>Expérience utilisateur</span>
          </div>
        </div>

        <!-- Carte de preview (light mode) -->
        <div class="bg-white rounded-3xl shadow-sm border border-[#E5E7EB] p-6 space-y-4">
          <p class="text-xs uppercase tracking-[0.18em] text-[#98A2B3]">Featured project</p>

          <div class="bg-[#F3F4F6] rounded-2xl p-5 space-y-3">
            <h2 class="text-xl font-semibold text-[#1D2939]">
              Benito Studio — Webdesign portfolio
            </h2>
            <p class="text-xs text-[#667085]">
              Exploration UI inspirée de ton examen : structure claire, typographie premium, palette
              sobre avec accent doré.
            </p>

            <div class="flex gap-2 flex-wrap text-[11px]">
              <span class="px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#344054]">
                Playfair Display / Montserrat
              </span>
              <span class="px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#344054]">
                #1D2939 · #D4AF73 · #00C9FF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
