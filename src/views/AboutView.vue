// AboutView.vue — Page de présentation personnelle.

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'
import OrbitingSkills from '@/components/OrbitingSkills.vue'

const skillGroups = [
  {
    title: 'UI/UX & design web',
    items: [
      'Wireframes',
      'Maquettes Figma',
      'Hiérarchie visuelle',
      'Design responsive',
      'Design system de base',
    ],
  },
  {
    title: 'Intégration web',
    items: ['HTML', 'CSS', 'JavaScript', 'Vue 3', 'Vue Router', 'Tailwind CSS'],
  },
  {
    title: 'CMS & e-commerce',
    items: ['WordPress', 'Elementor', 'WooCommerce', 'PrestaShop', 'Gestion de contenu'],
  },
  {
    title: 'SEO & qualité',
    items: [
      'SEO on-page',
      'Structure Hn',
      'Responsive design',
      'Accessibilité de base',
      'Performance web',
    ],
  },
]

const methodSteps = [
  {
    title: 'Comprendre',
    desc: 'Identifier les objectifs, la cible, les contraintes et le message principal.',
  },
  {
    title: 'Structurer',
    desc: 'Organiser l’arborescence, les contenus, les priorités et les parcours utilisateur.',
  },
  {
    title: 'Designer',
    desc: 'Créer une interface claire, cohérente, responsive et alignée avec l’identité visuelle.',
  },
  {
    title: 'Intégrer',
    desc: 'Transformer la maquette en interface propre, maintenable et adaptée aux écrans.',
  },
  {
    title: 'Optimiser',
    desc: 'Vérifier les détails UI, les bases SEO, la lisibilité, la performance et l’accessibilité.',
  },
]

const journeyItems = [
  {
    period: '2023–2025',
    title: 'Études Webdesign — IFOSUP Bruxelles',
    desc: 'UI/UX, intégration web, WordPress, projets concrets et portfolio professionnel.',
  },
  {
    period: '2022–2023',
    title: 'Formation E-commerce — IFAPME',
    desc: 'Logique business, vente en ligne, parcours client, contenu produit et bases e-commerce.',
  },
  {
    period: 'Aujourd’hui',
    title: 'Portfolio Benito Studio',
    desc: 'Projet personnel construit avec Vue.js et Tailwind CSS pour présenter mes compétences et mes projets.',
  },
]

const strengths = [
  'Profil hybride design + intégration',
  'Bonne compréhension WordPress / CMS',
  'Sens du détail UI et de la lisibilité',
  'Approche structurée et professionnelle',
  'Capacité à documenter et expliquer les choix',
  'Progression continue sur Vue.js, SEO et accessibilité',
]

onMounted(() => {
  document.title = 'À propos — Benito Studio | Webdesigner UI/UX junior'

  const description =
    'À propos de Benito Studio : webdesigner UI/UX junior avec double compétence design et intégration web, orienté WordPress, responsive design, SEO on-page et accessibilité de base.'

  let metaDescription = document.querySelector('meta[name="description"]')

  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }

  metaDescription.setAttribute('content', description)
})
</script>

<template>
  <AppLayout>
    <main class="container mx-auto px-4 py-12 md:py-16">
      <!-- HERO ABOUT -->
      <section class="mx-auto max-w-6xl">
        <div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p
              class="mb-4 inline-flex rounded-full border border-[#D4AF73]/40 bg-[#D4AF73]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]"
            >
              À propos
            </p>

            <h1
              class="mb-5 max-w-4xl text-4xl font-bold leading-tight !text-[#1D2939] dark:!text-white md:text-5xl"
            >
              Webdesigner UI/UX junior avec une double compétence
              <span class="!text-[#D4AF73]">design + intégration web</span>.
            </h1>

            <p
              class="max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300 md:text-base"
            >
              Je conçois des interfaces claires, modernes et responsive, puis je les transforme en
              expériences web structurées. Mon profil se situe entre le design d’interface,
              l’intégration front-end et les environnements CMS comme WordPress.
            </p>

            <div class="mt-7 flex flex-wrap gap-3">
              <RouterLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-full bg-[#1D2939] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:bg-[#D4AF73] dark:!text-[#0B1020] dark:hover:bg-[#c79f5f] dark:focus-visible:ring-offset-[#0B1020]"
              >
                Voir mes projets
              </RouterLink>

              <RouterLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-full border border-[#D4AF73]/50 px-6 py-3 text-sm font-semibold !text-[#1D2939] transition-colors hover:bg-[#D4AF73] hover:!text-[#0B1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:!text-white dark:focus-visible:ring-offset-[#0B1020]"
              >
                Me contacter
              </RouterLink>
            </div>
          </div>

          <aside
            v-reveal
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            aria-label="Résumé du profil"
          >
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Profil
            </p>

            <div class="flex items-center gap-4">
              <img
                src="/images/photo-profil.png"
                alt="Portrait professionnel de Benoît Durieux"
                class="h-16 w-16 shrink-0 rounded-full border border-[#D4AF73]/40 object-cover shadow-sm"
                loading="lazy"
                decoding="async"
              />

              <div>
                <h2 class="text-xl font-semibold !text-[#1D2939] dark:!text-white">
                  Benito Studio
                </h2>

                <p class="mt-1 text-sm font-medium !text-[#667085] dark:!text-slate-300">
                  Webdesigner UI/UX junior
                </p>
              </div>
            </div>

            <p class="mt-5 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              Portfolio personnel créé pour présenter mes projets, ma méthode et ma capacité à
              relier design, intégration, WordPress, SEO on-page et responsive design.
            </p>

            <div class="mt-5 grid gap-3 text-sm">
              <div
                class="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 dark:border-[#334155] dark:bg-[#0B1020]"
              >
                <p class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500">
                  Localisation
                </p>
                <p class="mt-1 font-semibold !text-[#1D2939] dark:!text-white">
                  Belgique — ouvert aux opportunités hybrides et remote
                </p>
              </div>

              <div
                class="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 dark:border-[#334155] dark:bg-[#0B1020]"
              >
                <p class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500">
                  Cibles
                </p>
                <p class="mt-1 font-semibold !text-[#1D2939] dark:!text-white">
                  Agences web, studios digitaux, e-commerce, équipes marketing
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- STACK & OUTILS -->
      <section class="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
            Stack & outils
          </p>

          <h2 class="text-3xl font-semibold !text-[#1D2939] dark:!text-white">
            Une double compétence design + intégration.
          </h2>

          <p class="mt-4 max-w-xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
            Je combine UI/UX, intégration front-end, WordPress, Elementor, SEO on-page et
            accessibilité de base pour concevoir des interfaces claires, responsive et maintenables.
          </p>
        </div>

        <OrbitingSkills />
      </section>

      <!-- POSITIONNEMENT -->
      <section class="mx-auto mt-16 max-w-6xl">
        <div
          v-reveal
          class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-8"
        >
          <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
                Positionnement
              </p>

              <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white md:text-3xl">
                Un profil junior orienté production web concrète.
              </h2>
            </div>

            <div class="space-y-4 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              <p>
                Je ne me positionne pas comme un designer purement théorique. Mon intérêt est de
                concevoir des interfaces utiles, lisibles et élégantes, tout en comprenant les
                contraintes d’intégration, de CMS, de responsive design, de SEO on-page et de
                maintenance.
              </p>

              <p>
                Cette double compétence me permet de mieux dialoguer avec les développeurs, les
                clients, les équipes marketing et les recruteurs qui cherchent un junior capable de
                produire, structurer et améliorer une présence web.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- COMPÉTENCES -->
      <section class="mx-auto mt-16 max-w-6xl">
        <div class="mb-8">
          <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white md:text-3xl">
            Compétences principales
          </h2>

          <p class="mt-3 max-w-3xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
            Une base polyvalente pour travailler sur des sites vitrines, portfolios, pages de vente,
            interfaces CMS et projets web orientés clarté, conversion et qualité d’exécution.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="group in skillGroups"
            :key="group.title"
            v-reveal
            class="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
          >
            <h3 class="mb-4 text-base font-semibold !text-[#1D2939] dark:!text-white">
              {{ group.title }}
            </h3>

            <ul class="space-y-2 text-sm !text-[#667085] dark:!text-slate-300">
              <li v-for="item in group.items" :key="item" class="flex gap-2">
                <span
                  class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF73]"
                  aria-hidden="true"
                ></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- CE QUE J’APPORTE -->
      <section class="mx-auto mt-16 max-w-6xl">
        <div class="grid gap-8 lg:grid-cols-2">
          <div
            v-reveal
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-8"
          >
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Valeur ajoutée
            </p>

            <h2 class="mb-5 text-2xl font-semibold !text-[#1D2939] dark:!text-white">
              Ce que je peux apporter
            </h2>

            <ul class="space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
              <li v-for="strength in strengths" :key="strength" class="flex gap-3">
                <span
                  class="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF73]/15 text-xs font-bold !text-[#D4AF73]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{{ strength }}</span>
              </li>
            </ul>
          </div>

          <div
            v-reveal
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-8"
          >
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Projets types
            </p>

            <h2 class="mb-5 text-2xl font-semibold !text-[#1D2939] dark:!text-white">
              Ce que je peux réaliser
            </h2>

            <div class="grid gap-3 text-sm">
              <div class="rounded-2xl bg-[#F9FAFB] p-4 dark:bg-[#0B1020]">
                <h3 class="font-semibold !text-[#1D2939] dark:!text-white">
                  Site vitrine ou landing page
                </h3>
                <p class="mt-1 !text-[#667085] dark:!text-slate-300">
                  Structure claire, design responsive, message lisible et CTA visibles.
                </p>
              </div>

              <div class="rounded-2xl bg-[#F9FAFB] p-4 dark:bg-[#0B1020]">
                <h3 class="font-semibold !text-[#1D2939] dark:!text-white">
                  Refonte UI / amélioration UX
                </h3>
                <p class="mt-1 !text-[#667085] dark:!text-slate-300">
                  Hiérarchie visuelle, cohérence graphique, lisibilité mobile et parcours
                  utilisateur.
                </p>
              </div>

              <div class="rounded-2xl bg-[#F9FAFB] p-4 dark:bg-[#0B1020]">
                <h3 class="font-semibold !text-[#1D2939] dark:!text-white">WordPress / CMS</h3>
                <p class="mt-1 !text-[#667085] dark:!text-slate-300">
                  Pages structurées, contenus organisés, SEO on-page et base maintenable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MÉTHODE -->
      <section class="mx-auto mt-16 max-w-6xl">
        <div class="mb-8">
          <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white md:text-3xl">
            Ma méthode
          </h2>

          <p class="mt-3 max-w-3xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
            Une approche simple, lisible et réaliste pour avancer étape par étape, sans perdre de
            vue l’objectif utilisateur, la qualité d’exécution et la maintenabilité.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-5">
          <article
            v-for="(step, index) in methodSteps"
            :key="step.title"
            v-reveal
            class="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
          >
            <span
              class="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF73]/15 text-sm font-bold !text-[#D4AF73]"
            >
              {{ index + 1 }}
            </span>

            <h3 class="mb-2 text-sm font-semibold !text-[#1D2939] dark:!text-white">
              {{ step.title }}
            </h3>

            <p class="text-xs leading-relaxed !text-[#667085] dark:!text-slate-300">
              {{ step.desc }}
            </p>
          </article>
        </div>
      </section>

      <!-- PARCOURS -->
      <section class="mx-auto mt-16 max-w-6xl">
        <div class="mb-8">
          <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white md:text-3xl">
            Parcours
          </h2>

          <p class="mt-3 max-w-3xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
            Un parcours construit autour du webdesign, de l’e-commerce, de WordPress et de la
            production d’interfaces concrètes.
          </p>
        </div>

        <div
          v-reveal
          class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-8"
        >
          <ol class="space-y-6">
            <li
              v-for="item in journeyItems"
              :key="item.title"
              class="grid gap-3 border-b border-[#E5E7EB] pb-6 last:border-b-0 last:pb-0 dark:border-[#334155] md:grid-cols-[140px_1fr]"
            >
              <p class="text-sm font-semibold !text-[#D4AF73]">
                {{ item.period }}
              </p>

              <div>
                <h3 class="text-base font-semibold !text-[#1D2939] dark:!text-white">
                  {{ item.title }}
                </h3>

                <p class="mt-1 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
                  {{ item.desc }}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <!-- CTA FINAL -->
      <section class="mx-auto mt-16 max-w-6xl">
        <div
          v-reveal
          class="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-10"
        >
          <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
                PROJETS
              </p>

              <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white">
                Découvrez mes projets webdesign
              </h2>

              <p
                class="mt-3 max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300"
              >
                Une sélection de projets pour voir mon approche en UI/UX, WordPress, intégration
                responsive et structuration de contenus.
              </p>
            </div>

            <div class="flex flex-wrap gap-3 md:justify-end">
              <RouterLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-full bg-[#1D2939] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:bg-[#D4AF73] dark:!text-[#0B1020] dark:hover:bg-[#c79f5f] dark:focus-visible:ring-offset-[#0B1020]"
              >
                Explorer les projets
              </RouterLink>

              <RouterLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-full border border-[#D4AF73]/50 px-6 py-3 text-sm font-semibold !text-[#1D2939] transition-colors hover:bg-[#D4AF73] hover:!text-[#0B1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:!text-white dark:focus-visible:ring-offset-[#0B1020]"
              >
                Me contacter
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  </AppLayout>
</template>
