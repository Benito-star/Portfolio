<!-- ProjectsView.vue — Liste des projets du portfolio.
Récupère les données depuis data/projects.json.
Affiche une grille responsive de cards avec RouterLink vers les détails. -->

<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import projects from '@/data/projects.json'
import ProjectCard from '@/components/ProjectCard.vue'
import AppLayout from '@/components/AppLayout.vue'

// Nombre de projets affichés
const projectsCount = computed(() => projects.length)

// Quelques compétences affichées dans le hero
const focusBadges = [
  'UI/UX',
  'WordPress',
  'Vue.js',
  'Tailwind CSS',
  'SEO on-page',
  'Responsive design',
]

// Lien vers le CV PDF placé dans public/documents
const cvHref = '/documents/CV-Benoit-Durieux-Webdesigner-UIUX.pdf'

// Titre d’onglet + meta description
onMounted(() => {
  document.title = 'Projets — Benito Studio | Webdesigner UI/UX junior'

  const description =
    'Découvrez les projets de Benito Studio : webdesign UI/UX, WordPress, intégration web, Vue.js, Tailwind CSS, responsive design et SEO on-page.'

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
      <!-- HERO PROJETS -->
      <section class="mx-auto max-w-6xl">
        <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p
              class="mb-4 inline-flex rounded-full border border-[#D4AF73]/40 bg-[#D4AF73]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]"
            >
              Portfolio
            </p>

            <h1
              class="max-w-4xl text-4xl font-bold leading-tight !text-[#1D2939] dark:!text-white md:text-5xl"
            >
              Mes projets webdesign, UI/UX et intégration.
            </h1>

            <p
              class="mt-5 max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300 md:text-base"
            >
              Une sélection de projets pensés pour montrer ma capacité à structurer une interface,
              concevoir une expérience claire et intégrer des pages modernes, responsive et
              orientées qualité.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="badge in focusBadges"
                :key="badge"
                class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs !text-[#344054] dark:border-[#334155] dark:bg-[#101827] dark:!text-slate-200"
              >
                {{ badge }}
              </span>
            </div>
          </div>

          <!-- Carte résumé -->
          <aside
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            aria-label="Lecture recruteur des projets"
          >
            <h2 class="text-xl font-semibold !text-[#1D2939] dark:!text-white">
              Ce que ces projets démontrent
            </h2>

            <p class="mt-3 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              Une capacité à concevoir des interfaces claires, structurer l’information, intégrer
              des pages responsive et appliquer les bonnes pratiques WordPress, SEO on-page et
              accessibilité.
            </p>
          </aside>
        </div>
      </section>

      <!-- GRILLE DES PROJETS -->
      <section class="mx-auto mt-14 max-w-6xl" aria-labelledby="projects-list-title">
        <div class="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="projects-list-title"
              class="text-2xl font-semibold !text-[#1D2939] dark:!text-white md:text-3xl"
            >
              Projets sélectionnés
            </h2>

            <p class="mt-2 max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              Priorité aux projets qui montrent le mieux mon profil hybride : design clair,
              intégration propre et logique web professionnelle.
            </p>
          </div>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </section>

      <!-- CTA BAS DE PAGE -->
      <section class="mx-auto mt-16 max-w-6xl">
        <div
          class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-8"
        >
          <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
                Pour aller plus loin
              </p>

              <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white">
                Vous voulez situer mon profil au-delà des projets ?
              </h2>

              <p
                class="mt-3 max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300"
              >
                Ces réalisations montrent ma capacité à structurer une interface, intégrer des pages
                responsive et mettre en œuvre des bonnes pratiques WordPress, SEO on-page et
                accessibilité. Pour mieux comprendre mon parcours et mon positionnement, vous pouvez
                consulter mon profil ou ouvrir mon CV.
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <RouterLink
                to="/about"
                class="inline-flex items-center justify-center rounded-full bg-[#D4AF73] px-6 py-3 text-sm font-semibold !text-[#0B1020] transition-colors hover:bg-[#C99E55] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B1020]"
                aria-label="Découvrir mon parcours de webdesigner UI UX junior"
              >
                Découvrir mon parcours
              </RouterLink>

              <a
                href="/documents/CV_Visuel_Benoit-Durieux.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full border border-[#D4AF73]/50 px-6 py-3 text-sm font-semibold !text-[#1D2939] transition-colors hover:bg-[#D4AF73] hover:!text-[#0B1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:!text-white dark:focus-visible:ring-offset-[#0B1020]"
                aria-label="Ouvrir mon CV PDF dans un nouvel onglet"
              >
                Ouvrir mon CV PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </AppLayout>
</template>
