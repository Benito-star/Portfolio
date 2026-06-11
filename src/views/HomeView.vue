<!-- HomeView.vue — Page d’accueil du portfolio Benito Studio. -->
<!-- Présente l’introduction, l’accroche principale et le CTA vers les projets. -->

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'
import projects from '@/data/projects.json'
import AuroraHeroShader from '../components/AuroraHeroShader.vue'
import SkillLogoMarquee from '@/components/SkillLogoMarquee.vue'

const featuredProject = projects.find((project) => project.id === 'project-1') || projects[0]
const featuredImage = featuredProject?.heroImage
  ? `/images/${featuredProject.heroImage}`
  : featuredProject?.image
    ? `/images/${featuredProject.image}`
    : ''

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

const processSteps = [
  { title: 'Découverte', desc: 'Objectifs, cible, contraintes et inspirations.' },
  { title: 'Structure', desc: 'Arborescence, wireframes et priorisation du message.' },
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

const stackBadges = [
  'Responsive design',
  'Accessibilité web',
  'SEO on-page',
  'Performance web',
  'Core Web Vitals',
  'PageSpeed Insights',
  'Google Search Console',
  'Intégration HTML/CSS',
  'WordPress & Elementor',
  'WooCommerce',
  'Vue.js & Vue Router',
]

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

onMounted(() => {
  document.title = 'Benito Studio — Webdesigner UI/UX junior'
})
</script>

<template>
  <AppLayout>
    <section class="relative isolate overflow-hidden">
      <AuroraHeroShader />

      <div class="container relative z-10 mx-auto px-4 py-12 md:py-16">
        <section class="grid gap-10 md:min-h-[calc(100vh-96px)] md:grid-cols-2 md:items-center">
          <div class="relative z-10 md:-translate-y-8">
            <p
              class="mb-4 inline-flex rounded-full border border-[#D4AF73]/40 bg-[#D4AF73]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]"
            >
              Portfolio webdesigner junior
            </p>

            <h1
              class="mb-5 max-w-3xl text-4xl font-bold leading-tight !text-[#1D2939] dark:!text-white md:text-5xl"
            >
              Webdesigner UI/UX junior avec
              <span class="!text-[#D4AF73]">double compétence</span>
              design & intégration web.
            </h1>

            <p
              class="mb-7 max-w-xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300 md:text-base"
            >
              Je conçois et j’intègre des interfaces web modernes, responsive et orientées
              utilisateur. Mon profil combine design UI/UX, intégration front-end et création de
              sites WordPress optimisés pour la lisibilité, la performance et le référencement
              naturel.
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

          <div
            class="relative z-10 w-full [perspective:1200px] md:mx-auto md:max-w-[92%]"
            aria-label="Projet mis en avant"
          >
            <RouterLink
              to="/project/project-1"
              class="hero-project-float group relative block overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:border-[#334155] dark:bg-[#101827] dark:shadow-black/30 dark:focus-visible:ring-offset-[#0B1020]"
              aria-label="Voir l’étude de cas STRUB Aesthetic Technology"
            >
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

                <div
                  class="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] dark:border-[#334155] dark:bg-[#162338]"
                >
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

                  <div
                    v-if="featuredImage"
                    class="relative aspect-video overflow-hidden bg-[#020617]"
                  >
                    <img
                      :src="featuredImage"
                      :alt="`Aperçu du projet ${featuredProject?.title || 'projet phare'}`"
                      class="h-full w-full object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                      @error="$event.target.style.display = 'none'"
                    />

                    <div
                      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/55 via-transparent to-transparent"
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

                  <div class="p-5">
                    <div class="mb-5">
                      <h2 class="text-xl font-semibold !text-[#1D2939] dark:!text-white">
                        STRUB Aesthetic Technology
                      </h2>

                      <p class="mt-2 text-xs leading-relaxed !text-[#667085] dark:!text-slate-300">
                        Conception et intégration d’un site WordPress B2B premium avec architecture
                        de contenu, pages produits, responsive design, formulaires et optimisation
                        SEO de base.
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

                    <span
                      class="inline-flex text-sm font-semibold !text-[#1D2939] underline underline-offset-4 transition-colors group-hover:!text-[#D4AF73] dark:!text-[#D4AF73] dark:group-hover:!text-[#EACA8A]"
                    >
                      Voir l’étude de cas →
                    </span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </section>
      </div>
    </section>

    <section class="py-14 dark:bg-transparent">
      <div class="container mx-auto px-4">
        <section>
          <span class="mb-3 block h-px w-10 bg-[#D4AF73]"></span>
          <h2 class="mb-4 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
            Ce que je propose
          </h2>

          <p class="mb-8 text-sm leading-relaxed !text-[#475467] dark:!text-slate-300">
            Des compétences complémentaires en design UI/UX, intégration front-end et WordPress pour
            concevoir des sites modernes, cohérents et faciles à maintenir.
          </p>

          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="(service, index) in services"
              :key="index"
              v-reveal
              class="rounded-2xl border border-[#D6DEE8] bg-white p-6 shadow-sm shadow-slate-200/40 transition-colors dark:border-[#334155] dark:bg-[#101827] dark:shadow-black/20"
            >
              <h3 class="mb-2 text-lg font-semibold !text-[#1D2939] dark:!text-white">
                {{ service.title }}
              </h3>

              <p class="mb-4 text-sm leading-relaxed !text-[#475467] dark:!text-slate-300">
                {{ service.desc }}
              </p>

              <ul
                class="flex flex-wrap gap-x-3 gap-y-2 text-xs !text-[#667085] dark:!text-slate-400"
              >
                <li
                  v-for="(bullet, idx) in service.bullets"
                  :key="idx"
                  class="flex items-center gap-1.5"
                >
                  <span
                    class="h-1 w-1 rounded-full bg-[#D4AF73] dark:bg-[#D4AF73]"
                    aria-hidden="true"
                  ></span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section class="mt-14">
          <span class="mb-3 block h-px w-10 bg-[#D4AF73]"></span>
          <h2 class="mb-4 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
            Ma méthode
          </h2>

          <p class="mb-8 max-w-3xl text-sm leading-relaxed !text-[#475467] dark:!text-slate-300">
            Une approche simple et structurée pour avancer étape par étape, du brief initial à une
            interface claire, responsive et maintenable.
          </p>

          <div class="grid gap-4 md:grid-cols-5">
            <article
              v-for="(step, index) in processSteps"
              :key="step.title"
              v-reveal
              class="rounded-2xl border border-[#D6DEE8] bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-[#334155] dark:bg-[#101827] dark:shadow-black/20"
            >
              <span
                class="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF73]/15 text-sm font-bold !text-[#D4AF73]"
              >
                {{ index + 1 }}
              </span>

              <h3 class="mb-2 text-sm font-semibold !text-[#1D2939] dark:!text-white">
                {{ step.title }}
              </h3>

              <p class="text-xs leading-relaxed !text-[#475467] dark:!text-slate-300">
                {{ step.desc }}
              </p>
            </article>
          </div>
        </section>

        <section class="mt-14">
          <span class="mb-3 block h-px w-10 bg-[#D4AF73]"></span>
          <h2 class="mb-4 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
            Stack &amp; outils
          </h2>

          <p class="mb-5 max-w-3xl text-sm leading-relaxed !text-[#475467] dark:!text-slate-300">
            Technologies et outils utilisés dans mes projets de design, d’intégration front-end,
            d’optimisation SEO et de création de sites WordPress.
          </p>

          <SkillLogoMarquee />

          <div class="mb-8 flex flex-wrap gap-1.5">
            <span
              v-for="(tag, idx) in stackBadges"
              :key="idx"
              class="rounded-full border border-[#D6DEE8] bg-white px-2.5 py-1 text-[11px] !text-[#344054] shadow-sm shadow-slate-200/30 dark:border-[#334155] dark:bg-[#101827] dark:!text-slate-200 dark:shadow-black/10"
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

        <section class="mt-14">
          <span class="mb-3 block h-px w-10 bg-[#D4AF73]"></span>
          <h2 class="mb-4 text-xl font-semibold !text-[#1D2939] dark:!text-white md:text-2xl">
            Outils IA
          </h2>

          <p class="mb-6 max-w-3xl text-sm leading-relaxed !text-[#475467] dark:!text-slate-300">
            J’utilise l’IA comme outil d’assistance pour accélérer la recherche, la structuration,
            la documentation et certaines phases de prototypage. Les décisions de conception et les
            choix UX restent guidés par l’analyse et les objectifs du projet.
          </p>

          <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="(workflow, index) in aiWorkflows"
              :key="index"
              v-reveal
              class="rounded-xl border border-[#D6DEE8] bg-white p-4 shadow-sm shadow-slate-200/40 dark:border-[#334155] dark:bg-[#101827] dark:shadow-black/20"
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

              <p class="text-xs leading-relaxed !text-[#475467] dark:!text-slate-300">
                {{ workflow.desc }}
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
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
