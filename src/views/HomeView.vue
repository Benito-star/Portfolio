// HomeView.vue — Page d’accueil du portfolio Benito Studio. // Présente l’introduction, l’accroche
principale et le CTA vers les projets. // Première page vue par un employeur ou un examinateur.

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import AppLayout from '../components/AppLayout.vue'

// ✅ Titre d’onglet (pro + indique Vue.js)
onMounted(() => {
  document.title = 'Benito Studio — Portfolio (Vue.js)'
})

// Contenu (simple, propre, maintenable)
const services = [
  {
    title: 'UI/UX & Design system',
    desc: 'Maquettes, hiérarchie visuelle et composants cohérents pour un rendu premium.',
    bullets: ['Wireframes & UI', 'Design tokens', 'Composants réutilisables'],
  },
  {
    title: 'Intégration front (Vue)',
    desc: 'Interfaces modernes, responsive et propres, avec une attention forte aux détails.',
    bullets: ['Vue 3 (SFC)', 'Vue Router', 'Tailwind CSS'],
  },
  {
    title: 'WordPress & SEO',
    desc: 'Sites vitrines et bases e-commerce, structurés pour être performants et évolutifs.',
    bullets: ['WooCommerce', 'SEO on-page', 'Performance'],
  },
]

const processSteps = [
  { title: 'Découverte', desc: 'objectifs, cible, contraintes et inspirations.' },
  { title: 'Structure', desc: 'arborescence, wireframes, priorisation du message.' },
  { title: 'Design', desc: 'maquettes, composants, cohérence de la charte.' },
  { title: 'Intégration', desc: 'responsive, détails UI, tests navigateurs.' },
  { title: 'Livraison', desc: 'check final, ajustements et conseils pour la suite.' },
]

const stackBadges = [
  'Vue 3 (SFC)',
  'Vue Router',
  'Tailwind CSS',
  'Composants réutilisables',
  'Rendering (v-if / v-for)',
  'Data binding (v-model)',
]
</script>

<template>
  <AppLayout>
    <div class="container mx-auto px-4 py-12">
      <!-- HERO -->
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

            <RouterLink to="/about" class="text-sm dark:text-white/95 underline underline-offset-4">
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
              Exploration UI : structure claire, typographie premium, palette sobre avec accent
              doré.
            </p>

            <div class="flex gap-2 flex-wrap text-[11px]">
              <span class="px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#344054]">
                Playfair Display / Montserrat
              </span>
              <span class="px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#344054]">
                #1D2939 · #D4AF73 · #00C9FF
              </span>
              <span class="px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#344054]">
                Vue 3 · Router · Tailwind
              </span>
            </div>

            <div class="pt-2">
              <RouterLink
                to="/projects"
                class="text-xs font-medium text-[#1D2939] underline underline-offset-4"
              >
                Voir tous les projets →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION: Ce que je propose -->
      <div class="mt-14">
        <div class="max-w-2xl">
          <h2 class="text-xl md:text-2xl font-semibold dark:!text-white/95 mb-2">
            Ce que je propose
          </h2>
          <p class="text-sm text-[#98A2B3] leading-relaxed">
            Une approche orientée clarté, cohérence et finition : design premium, intégration propre
            et structure prête à évoluer.
          </p>
        </div>

        <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(s, idx) in services"
            :key="idx"
            class="bg-white rounded-2xl border border-[#E5E7EB] p-6"
          >
            <h3 class="text-sm font-semibold text-[#1D2939] mb-2">{{ s.title }}</h3>
            <p class="text-sm text-[#667085] leading-relaxed mb-4">
              {{ s.desc }}
            </p>

            <ul class="list-disc list-inside pl-0 m-0 space-y-1 text-xs text-[#667085]">
              <li v-for="(b, i) in s.bullets" :key="i">{{ b }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION: Ma méthode -->
      <div class="mt-14">
        <h2 class="text-xl md:text-2xl font-semibold dark:!text-white/95 mb-6">Ma méthode</h2>

        <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <ol
            class="list-decimal list-inside pl-0 m-0 space-y-3 text-sm text-[#667085] marker:text-[#98A2B3]"
          >
            <li v-for="(step, idx) in processSteps" :key="idx">
              <span class="font-semibold text-[#1D2939]">{{ step.title }} :</span>
              {{ step.desc }}
            </li>
          </ol>
        </div>
      </div>

      <!-- SECTION: Stack & outils (scan rapide) -->
      <div class="mt-14">
        <h2 class="text-xl md:text-2xl font-semibold dark:!text-white/95 mb-4">Stack & outils</h2>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="(tag, idx) in stackBadges"
            :key="idx"
            class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5 text-xs"
          >
            {{ tag }}
          </span>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <RouterLink
            to="/projects"
            class="px-5 py-3 rounded-full bg-[#1D2939] text-white text-sm font-medium tracking-wide hover:bg-black transition-colors"
          >
            Explorer mes projets
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-5 py-3 rounded-full border border-white/15 text-white/90 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Me contacter
          </RouterLink>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
