<!-- HomeView.vue — Page d’accueil du portfolio Benito Studio. -->
<!-- Présente l’introduction, l’accroche principale et le CTA vers les projets. -->

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'
import projects from '@/data/projects.json'

// Projet phare affiché dans le hero
const featuredProject = projects.find((project) => project.id === 'project-1') || projects[0]
const featuredImage = featuredProject?.image ? `/images/${featuredProject.image}` : ''

// Services proposés
const services = [
  {
    title: 'UI/UX',
    desc: "Design d'interfaces centrées utilisateur et maquettes précises.",
    bullets: ['Wireframes & prototypes', 'Hiérarchie visuelle', 'Composants réutilisables'],
  },
  {
    title: 'Intégration front-end',
    desc: 'Intégration responsive et optimisée en Vue.js et Tailwind CSS.',
    bullets: ['Vue 3 (Composition API)', 'Vue Router', 'Tailwind CSS'],
  },
  {
    title: 'WordPress & SEO',
    desc: 'Sites WordPress performants avec WooCommerce et SEO on-page.',
    bullets: ['WooCommerce', 'Elementor & Gutenberg', 'SEO on-page & accessibilité'],
  },
]

// Étapes du processus de travail
const processSteps = [
  {
    title: 'Découverte',
    desc: 'Objectifs, cible, contraintes et inspirations.',
  },
  {
    title: 'Structure',
    desc: 'Arborescence, wireframes et priorisation du message.',
  },
  {
    title: 'Design & prototypes',
    desc: 'Maquettes UI/UX, prototypes interactifs et cohérence de la charte.',
  },
  {
    title: 'Intégration & SEO',
    desc: 'Intégration responsive sous Vue.js / Tailwind CSS, WordPress et optimisation SEO de base.',
  },
  {
    title: 'Livraison & suivi',
    desc: 'Check final, documentation, formation et conseils pour l’évolution du site.',
  },
]

// Compétences et outils techniques
const stackBadges = [
  'WordPress',
  'Elementor & Gutenberg',
  'WooCommerce',
  'Vue 3',
  'Vue Router',
  'Tailwind CSS',
  'Bootstrap',
  'HTML5',
  'CSS3',
  'JavaScript bases',
  'PHP bases',
  'Figma',
  'Photoshop',
  'Illustrator',
  'SEO on-page',
  'Responsive design',
  'Accessibilité web',
  'Google Search Console',
  'Core Web Vitals',
  'PageSpeed Insights',
]

// IA présentées de manière professionnelle et compacte
const aiWorkflows = [
  {
    title: 'Briefs & contenus',
    tools: ['ChatGPT', 'Claude'],
    desc: 'Reformulation de briefs, variantes de copy et structuration d’idées.',
  },
  {
    title: 'Recherche & veille',
    tools: ['Perplexity', 'Gemini'],
    desc: 'Recherche rapide, synthèse de sources et aide à la veille digitale.',
  },
  {
    title: 'Structure UX',
    tools: ['Relume', 'Figma Make'],
    desc: 'Aide à la génération de sitemaps, sections, wireframes et pistes d’interface.',
  },
  {
    title: 'Prototypage rapide',
    tools: ['Lovable', 'GitHub Copilot'],
    desc: 'Exploration de prototypes, aide sur snippets HTML/CSS/JS et itérations rapides.',
  },
  {
    title: 'Exploration visuelle',
    tools: ['Galileo AI', 'Adobe Firefly'],
    desc: 'Recherche de directions UI, variations visuelles et soutien à l’idéation.',
  },
  {
    title: 'Documentation',
    tools: ['Notion AI', 'Canva AI'],
    desc: 'Synthèses, supports de présentation, documentation et organisation d’idées.',
  },
]

// Titre d’onglet
onMounted(() => {
  document.title = 'Benito Studio — Webdesigner UI/UX junior'
})
</script>

<template>
  <AppLayout>
    <div class="container mx-auto px-4 py-12 md:py-16">
      <!-- HERO -->
      <section class="grid gap-10 md:grid-cols-2 md:items-center">
        <!-- Bloc texte -->
        <div>
          <p
            class="mb-4 inline-flex rounded-full border border-[#D4AF73]/40 bg-[#D4AF73]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]"
          >
            Portfolio webdesigner junior
          </p>

          <h1
            class="mb-5 max-w-3xl text-4xl font-bold leading-tight !text-[#1D2939] dark:!text-white md:text-5xl"
          >
            Webdesigner UI/UX junior,
            <span class="!text-[#D4AF73]">design clair</span>
            & intégration web.
          </h1>

          <p
            class="mb-7 max-w-xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300 md:text-base"
          >
            Je conçois des interfaces modernes, responsive et structurées, avec une double
            compétence design + intégration. Mon objectif : créer des sites lisibles, crédibles et
            faciles à faire évoluer.
          </p>

          <div class="mb-7 flex flex-wrap items-center gap-4">
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

          <ul class="flex flex-wrap gap-x-3 gap-y-2 text-xs !text-[#98A2B3] dark:!text-slate-400">
            <li>UI/UX</li>
            <li aria-hidden="true">•</li>
            <li>WordPress</li>
            <li aria-hidden="true">•</li>
            <li>Vue.js / Tailwind</li>
            <li aria-hidden="true">•</li>
            <li>Responsive</li>
            <li aria-hidden="true">•</li>
            <li>SEO on-page</li>
          </ul>
        </div>

        <!-- Carte projet phare / mockup flottant -->
        <div class="relative [perspective:1200px]" aria-label="Projet mis en avant">
          <aside
            class="hero-project-float relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-2xl dark:border-[#334155] dark:bg-[#101827] dark:shadow-black/30"
          >
            <!-- Glow subtil intégré à la carte -->
            <div
              class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,115,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(0,201,255,0.10),transparent_34%)]"
              aria-hidden="true"
            ></div>

            <div class="relative">
              <p
                class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] !text-[#98A2B3] dark:!text-[#D4AF73]"
              >
                Projet phare
              </p>

              <!-- Mockup navigateur -->
              <div
                class="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] dark:border-[#334155] dark:bg-[#162338]"
              >
                <!-- Barre supérieure type navigateur -->
                <div
                  class="flex items-center justify-between border-b border-[#E5E7EB] bg-white px-4 py-3 dark:border-[#334155] dark:bg-[#0B1020]"
                >
                  <div class="flex items-center gap-1.5" aria-hidden="true">
                    <span class="h-2.5 w-2.5 rounded-full bg-[#EF4444]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#F59E0B]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#22C55E]"></span>
                  </div>

                  <span
                    class="rounded-full bg-[#F3F4F6] px-3 py-1 text-[10px] font-medium !text-[#667085] dark:bg-[#101827] dark:!text-slate-400"
                  >
                    Case study
                  </span>
                </div>

                <!-- Image du projet -->
                <div
                  v-if="featuredImage"
                  class="relative h-44 overflow-hidden bg-[#020617] md:h-52"
                >
                  <img
                    :src="featuredImage"
                    :alt="`Aperçu du projet ${featuredProject?.title || 'projet phare'}`"
                    class="h-full w-full object-cover opacity-95 transition-transform duration-700 ease-out hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    @error="$event.target.style.display = 'none'"
                  />

                  <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent"
                    aria-hidden="true"
                  ></div>

                  <div class="absolute bottom-4 left-4 right-4">
                    <span
                      class="inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-medium !text-white backdrop-blur"
                    >
                      WordPress B2B premium
                    </span>
                  </div>
                </div>

                <!-- Contenu mockup -->
                <div class="p-5">
                  <div class="mb-5">
                    <h2 class="text-xl font-semibold !text-[#1D2939] dark:!text-white">
                      STRUB Aesthetic Technology
                    </h2>

                    <p class="mt-2 text-xs leading-relaxed !text-[#667085] dark:!text-slate-300">
                      Site WordPress B2B premium : structure d’offre, pages produits, formulaires,
                      responsive design et bases SEO.
                    </p>
                  </div>

                  <div class="mb-5 flex flex-wrap gap-2 text-[11px]">
                    <span
                      class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 !text-[#344054] dark:border-[#475569] dark:bg-[#0B1020] dark:!text-slate-200"
                    >
                      UI/UX
                    </span>

                    <span
                      class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 !text-[#344054] dark:border-[#475569] dark:bg-[#0B1020] dark:!text-slate-200"
                    >
                      WordPress
                    </span>

                    <span
                      class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 !text-[#344054] dark:border-[#475569] dark:bg-[#0B1020] dark:!text-slate-200"
                    >
                      SEO on-page
                    </span>

                    <span
                      class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 !text-[#344054] dark:border-[#475569] dark:bg-[#0B1020] dark:!text-slate-200"
                    >
                      Responsive
                    </span>
                  </div>

                  <RouterLink
                    to="/project/project-1"
                    class="inline-flex text-sm font-semibold !text-[#1D2939] underline underline-offset-4 transition-colors hover:!text-[#D4AF73] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:!text-[#D4AF73] dark:hover:!text-[#EACA8A]"
                  >
                    Voir l’étude de cas →
                  </RouterLink>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- SECTION : Services -->
      <section class="mt-14">
        <h2 class="mb-4 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
          Ce que je propose
        </h2>

        <p class="mb-8 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
          Une approche tournée vers l’utilisateur et la performance : design UI/UX premium,
          intégration front-end moderne et solutions WordPress optimisées pour un référencement
          naturel et une accessibilité de base.
        </p>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(service, index) in services"
            :key="index"
            class="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-colors dark:border-[#334155] dark:bg-[#101827]"
          >
            <h3 class="mb-2 text-lg font-semibold !text-[#1D2939] dark:!text-white">
              {{ service.title }}
            </h3>

            <p class="mb-4 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              {{ service.desc }}
            </p>

            <ul class="flex flex-wrap gap-x-3 gap-y-2 text-xs !text-[#98A2B3] dark:!text-slate-400">
              <li
                v-for="(bullet, idx) in service.bullets"
                :key="idx"
                class="flex items-center gap-1.5"
              >
                <span
                  class="h-1 w-1 rounded-full bg-[#98A2B3] dark:bg-[#D4AF73]"
                  aria-hidden="true"
                ></span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- SECTION : Ma méthode -->
      <section class="mt-14">
        <h2 class="mb-6 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
          Ma méthode
        </h2>

        <div
          class="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
        >
          <ol
            class="list-decimal list-inside space-y-3 text-sm !text-[#667085] marker:!text-[#98A2B3] dark:!text-slate-300 dark:marker:!text-slate-500"
          >
            <li v-for="(step, idx) in processSteps" :key="idx">
              <span class="font-semibold !text-[#1D2939] dark:!text-white">
                {{ step.title }} :
              </span>
              {{ step.desc }}
            </li>
          </ol>
        </div>
      </section>

      <!-- SECTION : Stack & outils -->
      <section class="mt-14">
        <h2 class="mb-4 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
          Stack &amp; outils
        </h2>

        <p class="mb-5 max-w-3xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
          Les outils que j’utilise pour concevoir, intégrer, optimiser et documenter des interfaces
          web modernes.
        </p>

        <div class="mb-8 flex flex-wrap gap-2">
          <span
            v-for="(tag, idx) in stackBadges"
            :key="idx"
            class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs !text-[#344054] dark:border-[#334155] dark:bg-[#101827] dark:!text-slate-200"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex flex-wrap gap-4">
          <RouterLink
            to="/projects"
            class="inline-flex items-center justify-center rounded-full bg-[#1D2939] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:bg-[#D4AF73] dark:!text-[#0B1020] dark:hover:bg-[#c79f5f] dark:focus-visible:ring-offset-[#0B1020]"
          >
            Découvrir mes projets
          </RouterLink>

          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full border border-[#D4AF73]/50 px-6 py-3 text-sm font-semibold !text-[#1D2939] transition-colors hover:bg-[#D4AF73] hover:!text-[#0B1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:!text-white dark:focus-visible:ring-offset-[#0B1020]"
          >
            Discuter de votre projet
          </RouterLink>
        </div>
      </section>

      <!-- SECTION : Outils IA -->
      <section class="mt-14">
        <h2 class="mb-4 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
          Outils IA
        </h2>

        <p class="mb-6 max-w-3xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
          J’utilise l’IA comme appui de travail : recherche, structuration, idéation, prototypage
          rapide et documentation. L’objectif reste de gagner en efficacité sans remplacer la
          réflexion design.
        </p>

        <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(workflow, index) in aiWorkflows"
            :key="index"
            class="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
          >
            <h3 class="mb-2 text-sm font-semibold !text-[#1D2939] dark:!text-white">
              {{ workflow.title }}
            </h3>

            <div class="mb-2 flex flex-wrap gap-1.5">
              <span
                v-for="tool in workflow.tools"
                :key="tool"
                class="rounded-full border border-[#D4AF73]/40 bg-[#D4AF73]/10 px-2.5 py-1 text-[11px] font-semibold !text-[#8A6726] dark:!text-[#D4AF73]"
              >
                {{ tool }}
              </span>
            </div>

            <p class="text-xs leading-relaxed !text-[#667085] dark:!text-slate-300">
              {{ workflow.desc }}
            </p>
          </article>
        </div>
      </section>
    </div>
  </AppLayout>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .hero-project-float {
    animation: heroProjectFloat 6s ease-in-out infinite;
    transform-style: preserve-3d;
  }

  @keyframes heroProjectFloat {
    0%,
    100% {
      transform: translateY(0) rotateX(0deg) rotateY(0deg);
    }

    50% {
      transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
    }
  }
}
</style>
