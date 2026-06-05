<!-- ProjectDetailView.vue — Page détaillée d’un projet / étude de cas.
Reçoit l’ID via la route dynamique /project/:id. -->

<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed, watch } from 'vue'
import projects from '@/data/projects.json'
import AppLayout from '../components/AppLayout.vue'

const route = useRoute()

// ID réactif pour permettre la navigation précédent / suivant
const id = computed(() => route.params.id)

// Projet actuel
const project = computed(() => {
  return projects.find((item) => item.id === id.value)
})

// Scroll en haut à chaque changement de projet
watch(
  () => id.value,
  () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  },
  { immediate: true },
)

// SEO dynamique
watch(
  () => project.value,
  (currentProject) => {
    if (!currentProject) {
      document.title = 'Projet introuvable — Benito Studio'
      return
    }

    document.title = `${currentProject.title} — Étude de cas | Benito Studio`

    const description =
      currentProject.tagline ||
      currentProject.description ||
      `Étude de cas du projet ${currentProject.title} par Benito Studio.`

    let metaDescription = document.querySelector('meta[name="description"]')

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', description)
  },
  { immediate: true },
)

// Index du projet courant
const currentIndex = computed(() => {
  return projects.findIndex((item) => item.id === project.value?.id)
})

// Projet précédent
const previousProject = computed(() => {
  if (currentIndex.value > 0) return projects[currentIndex.value - 1]
  return null
})

// Projet suivant
const nextProject = computed(() => {
  if (currentIndex.value < projects.length - 1) return projects[currentIndex.value + 1]
  return null
})

// Données compatibles avec tes projets existants
const badges = computed(() => project.value?.tech || [])
const metaType = computed(() => project.value?.type || '')
const metaStatus = computed(() => project.value?.status || '')
const caseStudy = computed(() => project.value?.caseStudy || {})

const problemPoints = computed(() => caseStudy.value.problem || [])

// Compatible avec tes deux écritures : objectives / objectifs
const objectivePoints = computed(
  () => caseStudy.value.objectives || caseStudy.value.objectifs || [],
)

const myRolePoints = computed(() => caseStudy.value.myRole || [])
const processPoints = computed(() => caseStudy.value.process || [])
const uiChoices = computed(() => caseStudy.value.uiChoices || [])
const technicalChoices = computed(() => caseStudy.value.technicalChoices || [])
const results = computed(() => caseStudy.value.results || [])
const learnings = computed(() => caseStudy.value.learnings || [])

const highlights = computed(() => project.value?.galleryHighlights || [])
const fullPages = computed(() => project.value?.galleryFull || [])

const aboutText = computed(() => {
  return project.value?.longDescription || project.value?.detail || project.value?.description || ''
})

const mainImageSrc = computed(() => {
  const img = project.value?.image
  return img ? `/images/${img}` : ''
})

const hasCaseStudyContent = computed(() => {
  return (
    problemPoints.value.length ||
    objectivePoints.value.length ||
    myRolePoints.value.length ||
    processPoints.value.length ||
    uiChoices.value.length ||
    technicalChoices.value.length ||
    results.value.length ||
    learnings.value.length
  )
})

const metaStatusLabel = computed(() => {
  return formatProjectStatus(metaStatus.value)
})

const mainImageCaption = computed(() => {
  if (project.value?.id === 'project-3') {
    return 'Insigne principal PixelBurst — version couleur.'
  }

  if (project.value?.id === 'project-1') {
    return 'Aperçu principal — page d’accueil STRUB.'
  }

  if (project.value?.id === 'project-2') {
    return 'Aperçu principal du guide SEO WordPress / Elementor.'
  }

  return 'Aperçu principal du projet.'
})

const mainImageAlt = computed(() => {
  if (project.value?.id === 'project-3') {
    return 'Insigne principal PixelBurst en version couleur'
  }

  return `Aperçu du projet ${project.value?.title || ''}`
})

function formatProjectStatus(status = '') {
  const normalizedStatus = String(status).toLowerCase()

  if (!status) return '—'
  if (normalizedStatus === 'case') return 'Étude de cas'
  if (normalizedStatus === 'live') return 'En ligne'

  return status
}

function isPixelBurstVisual(src = '') {
  return src.toLowerCase().includes('pixelburst')
}

function galleryImageClass(src = '') {
  if (isPixelBurstVisual(src)) {
    return 'h-52 w-full bg-white object-contain p-8 transition-transform duration-300 group-hover:scale-[1.02] dark:bg-[#020617]'
  }

  return 'h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
}

function captionFromSrc(src = '') {
  const source = src.toLowerCase()

  // Projet PixelBurst
  if (source.includes('pixelburst-color')) return 'Insigne PixelBurst — version couleur'
  if (source.includes('pixelburst-bw')) return 'Insigne PixelBurst — version noir & gris'

  // Projet STRUB
  // Sections
  if (source.includes('header')) return 'Header — Navigation'
  if (source.includes('hero')) return 'Hero — proposition de valeur'
  if (source.includes('solutions')) return 'Solutions — structure de l’offre'
  if (source.includes('solution-gamme')) return 'Solutions — structure de l’offre'
  if (
    source.includes('certifications') ||
    source.includes('temoignages') ||
    source.includes('reassurance') ||
    source.includes('certifs')
  ) {
    return 'Réassurance — témoignages & certifications'
  }
  if (source.includes('accompagnement')) return 'Cas usage & Accompagnement'
  if (source.includes('faq')) return 'FAQ — objections & réponses'
  if (source.includes('cta')) return 'CTA — conversion'
  if (source.includes('footer')) return 'Footer'

  // Full-pages STRUB
  if (source.includes('distributeur')) return 'Page complète — Devenir partenaire'
  if (source.includes('accueil-full')) return 'Page complète — Accueil'
  if (source.includes('a-propos-full')) return 'Page complète — À propos'
  if (source.includes('contact-full')) return 'Page complète — Contact'
  if (source.includes('support-sav-full')) return 'Page complète — Support & SAV'
  if (source.includes('machine-full')) return 'Page complète — Machine esthétique'

  // Projet SEO WordPress / Elementor
  // Full-pages
  if (source.includes('seo-guide-home')) return 'Accueil — promesse du guide'
  if (source.includes('seo-guide-bases-seo')) return 'Bases SEO — vulgarisation pédagogique'
  if (source.includes('seo-guide-elementor')) return 'Elementor — structure des pages'
  if (source.includes('seo-guide-yoast')) return 'Yoast — métadonnées & configuration'
  if (source.includes('seo-guide-performance')) return 'Performance — images & responsive'
  if (source.includes('seo-guide-checklist')) return 'Checklist — contrôle avant mise en ligne'
  if (source.includes('seo-guide-erreurs')) return 'Erreurs fréquentes — diagnostic & solutions'
  if (source.includes('seo-guide-ressources')) return 'Ressources — glossaire & outils'

  // Sections SEO
  if (source.includes('/projects/seo/sections/') && source.includes('home-section')) {
    return 'Accueil — promesse du guide'
  }
  if (source.includes('parcours-chapitres')) return 'Parcours — chapitres du guide'
  if (source.includes('bases-seo-piliers')) return 'Bases SEO — piliers & vulgarisation'
  if (source.includes('elementor-structure-hn')) return 'Elementor — structure Hn & arborescence'
  if (source.includes('yoast-metadonnees')) return 'Yoast — métadonnées & bonnes pratiques'
  if (source.includes('checklist-livraison')) return 'Checklist — contrôle avant mise en ligne'

  return 'Aperçu du projet'
}
</script>

<template>
  <AppLayout>
    <main class="container mx-auto px-4 py-12 md:py-16">
      <!-- SI LE PROJET EXISTE -->
      <div v-if="project" class="mx-auto max-w-6xl space-y-16">
        <!-- HERO PROJET -->
        <section class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <!-- Colonne gauche -->
          <div>
            <RouterLink
              to="/projects"
              class="mb-6 inline-flex text-sm font-semibold !text-[#667085] underline underline-offset-4 transition-colors hover:!text-[#D4AF73] dark:!text-slate-300 dark:hover:!text-[#D4AF73]"
            >
              ← Retour aux projets
            </RouterLink>

            <p
              class="mb-4 ml-6 inline-flex rounded-full border border-[#D4AF73]/40 bg-[#D4AF73]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]"
            >
              Étude de cas
            </p>

            <h1
              class="max-w-4xl text-4xl font-bold leading-tight !text-[#1D2939] dark:!text-white md:text-5xl"
            >
              {{ project.title }}
            </h1>

            <p
              class="mt-5 max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300 md:text-base"
            >
              {{ project.tagline || project.description }}
            </p>

            <div v-if="badges.length" class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="(tag, index) in badges"
                :key="index"
                class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs !text-[#344054] dark:border-[#334155] dark:bg-[#101827] dark:!text-slate-200"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full bg-[#1D2939] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:bg-[#D4AF73] dark:!text-[#0B1020] dark:hover:bg-[#c79f5f] dark:focus-visible:ring-offset-[#0B1020]"
              >
                Voir la démo →
              </a>

              <a
                v-if="highlights.length || fullPages.length"
                href="#screens"
                class="inline-flex items-center justify-center rounded-full border border-[#D4AF73]/50 px-6 py-3 text-sm font-semibold !text-[#1D2939] transition-colors hover:bg-[#D4AF73] hover:!text-[#0B1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:!text-white dark:focus-visible:ring-offset-[#0B1020]"
              >
                Voir les écrans
              </a>
            </div>
          </div>

          <!-- Colonne droite : meta -->
          <aside
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            aria-labelledby="project-details-title"
          >
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Détails
            </p>

            <h2
              id="project-details-title"
              class="mb-5 text-xl font-semibold !text-[#1D2939] dark:!text-white"
            >
              Informations projet
            </h2>

            <dl class="grid gap-4 text-sm">
              <div class="grid grid-cols-[110px_1fr] gap-4">
                <dt
                  class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
                >
                  Année
                </dt>
                <dd class="font-medium !text-[#1D2939] dark:!text-white">
                  {{ project.year || '—' }}
                </dd>
              </div>

              <div class="grid grid-cols-[110px_1fr] gap-4">
                <dt
                  class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
                >
                  Statut
                </dt>
                <dd class="font-medium !text-[#1D2939] dark:!text-white">
                  {{ metaStatusLabel }}
                </dd>
              </div>

              <div v-if="metaType" class="grid grid-cols-[110px_1fr] gap-4">
                <dt
                  class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
                >
                  Type
                </dt>
                <dd class="font-medium !text-[#1D2939] dark:!text-white">
                  {{ metaType }}
                </dd>
              </div>

              <div v-if="project.role" class="grid grid-cols-[110px_1fr] gap-4">
                <dt
                  class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
                >
                  Rôle
                </dt>
                <dd class="font-medium !text-[#1D2939] dark:!text-white">
                  {{ project.role }}
                </dd>
              </div>
            </dl>

            <div
              v-if="aboutText"
              class="mt-6 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 dark:border-[#334155] dark:bg-[#0B1020]"
            >
              <p class="text-xs leading-relaxed !text-[#667085] dark:!text-slate-300">
                {{ aboutText }}
              </p>
            </div>
          </aside>
        </section>

        <!-- IMAGE PRINCIPALE -->
        <section v-if="mainImageSrc">
          <figure
            :class="[
              'overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm dark:border-[#334155] dark:bg-[#101827]',
              project.id === 'project-3' ? 'mx-auto max-w-4xl' : '',
            ]"
          >
            <img
              :src="mainImageSrc"
              :alt="mainImageAlt"
              :class="[
                project.id === 'project-3'
                  ? 'mx-auto max-h-[620px] w-full object-contain p-8 md:p-12'
                  : 'w-full object-cover',
              ]"
              loading="lazy"
              @error="$event.target.style.display = 'none'"
            />

            <figcaption
              class="border-t border-[#E5E7EB] px-5 py-3 text-xs !text-[#98A2B3] dark:border-[#334155] dark:!text-slate-500"
            >
              {{ mainImageCaption }}
            </figcaption>
          </figure>
        </section>

        <!-- À PROPOS -->
        <section v-if="aboutText">
          <div
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-8"
          >
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Contexte
            </p>

            <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white">
              À propos de ce projet
            </h2>

            <p class="mt-4 max-w-4xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              {{ aboutText }}
            </p>
          </div>
        </section>

        <!-- CASE STUDY -->
        <section v-if="hasCaseStudyContent" class="space-y-8">
          <div>
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Case study
            </p>

            <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white md:text-3xl">
              Démarche et décisions
            </h2>

            <p class="mt-3 max-w-3xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              Une synthèse claire du problème, des objectifs, de mon rôle et des choix réalisés
              pendant le projet.
            </p>
          </div>

          <!-- Problème / Objectifs -->
          <div
            v-if="problemPoints.length || objectivePoints.length"
            class="grid gap-6 md:grid-cols-2"
          >
            <article
              v-if="problemPoints.length"
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            >
              <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">
                Problématique
              </h3>

              <ul class="space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
                <li v-for="(point, index) in problemPoints" :key="index" class="flex gap-2">
                  <span
                    class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]"
                    aria-hidden="true"
                  ></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>

            <article
              v-if="objectivePoints.length"
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            >
              <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">Objectifs</h3>

              <ul class="space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
                <li v-for="(point, index) in objectivePoints" :key="index" class="flex gap-2">
                  <span
                    class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]"
                    aria-hidden="true"
                  ></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>

          <!-- Mon rôle -->
          <article
            v-if="myRolePoints.length"
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
          >
            <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">Mon rôle</h3>

            <ul class="grid gap-3 text-sm !text-[#667085] dark:!text-slate-300 md:grid-cols-2">
              <li v-for="(point, index) in myRolePoints" :key="index" class="flex gap-2">
                <span
                  class="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF73]/15 text-xs font-bold !text-[#D4AF73]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>

          <!-- Processus -->
          <article
            v-if="processPoints.length"
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
          >
            <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">Processus</h3>

            <ol class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <li
                v-for="(point, index) in processPoints"
                :key="index"
                class="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm dark:border-[#334155] dark:bg-[#0B1020]"
              >
                <span class="mb-2 inline-flex text-xs font-bold !text-[#D4AF73]">
                  Étape {{ index + 1 }}
                </span>

                <p class="leading-relaxed !text-[#667085] dark:!text-slate-300">
                  {{ point }}
                </p>
              </li>
            </ol>
          </article>

          <!-- Choix UI/UX + techniques -->
          <div v-if="uiChoices.length || technicalChoices.length" class="grid gap-6 md:grid-cols-2">
            <article
              v-if="uiChoices.length"
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            >
              <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">
                Choix UI/UX
              </h3>

              <ul class="space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
                <li v-for="(point, index) in uiChoices" :key="index" class="flex gap-2">
                  <span
                    class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]"
                    aria-hidden="true"
                  ></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>

            <article
              v-if="technicalChoices.length"
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            >
              <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">
                Choix techniques
              </h3>

              <ul class="space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
                <li v-for="(point, index) in technicalChoices" :key="index" class="flex gap-2">
                  <span
                    class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]"
                    aria-hidden="true"
                  ></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>

          <!-- Résultats + apprentissages -->
          <div v-if="results.length || learnings.length" class="grid gap-6 md:grid-cols-2">
            <article
              v-if="results.length"
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            >
              <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">
                Résultat observable
              </h3>

              <ul class="space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
                <li v-for="(point, index) in results" :key="index" class="flex gap-2">
                  <span
                    class="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF73]/15 text-xs font-bold !text-[#D4AF73]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>

            <article
              v-if="learnings.length"
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            >
              <h3 class="mb-4 text-lg font-semibold !text-[#1D2939] dark:!text-white">
                Ce que j’ai appris
              </h3>

              <ul class="space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
                <li v-for="(point, index) in learnings" :key="index" class="flex gap-2">
                  <span
                    class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]"
                    aria-hidden="true"
                  ></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <!-- DOCUMENTS -->
        <section v-if="project.documents?.length" class="space-y-5">
          <div>
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Livrables
            </p>

            <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white">
              Documents du projet
            </h2>

            <p class="mt-3 text-sm !text-[#667085] dark:!text-slate-300">
              Documents complémentaires, ouverts dans un nouvel onglet.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="(doc, index) in project.documents"
              :key="index"
              :href="doc.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold !text-[#1D2939] shadow-sm transition-colors hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:border-[#334155] dark:bg-[#101827] dark:!text-white dark:hover:bg-[#162338]"
            >
              {{ doc.label }} →
            </a>
          </div>
        </section>

        <!-- ÉCRANS -->
        <section
          v-if="highlights.length || fullPages.length"
          id="screens"
          class="scroll-mt-24 space-y-8"
        >
          <div>
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Galerie
            </p>

            <h2 class="text-2xl font-semibold !text-[#1D2939] dark:!text-white md:text-3xl">
              Écrans du projet
            </h2>

            <p class="mt-3 max-w-3xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              Aperçu des sections clés et des pages complètes du projet.
            </p>
          </div>

          <!-- Highlights -->
          <div v-if="highlights.length">
            <h3
              class="mb-4 text-sm font-semibold uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
            >
              Sections clés
            </h3>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                v-for="(src, index) in highlights"
                :key="index"
                :href="src"
                target="_blank"
                rel="noopener noreferrer"
                class="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:border-[#334155] dark:bg-[#101827]"
              >
                <div class="p-5">
                  <p
                    class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
                  >
                    Section
                  </p>

                  <h4 class="mt-1 text-sm font-semibold !text-[#1D2939] dark:!text-white">
                    {{ captionFromSrc(src) }}
                  </h4>
                </div>

                <img
                  :src="src"
                  :alt="captionFromSrc(src)"
                  :class="galleryImageClass(src)"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <!-- Full pages -->
          <div v-if="fullPages.length">
            <h3
              class="mb-4 text-sm font-semibold uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
            >
              Pages complètes
            </h3>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                v-for="(src, index) in fullPages"
                :key="index"
                :href="src"
                target="_blank"
                rel="noopener noreferrer"
                class="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:border-[#334155] dark:bg-[#101827]"
              >
                <div class="p-5">
                  <p
                    class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500"
                  >
                    Full page
                  </p>

                  <h4 class="mt-1 text-sm font-semibold !text-[#1D2939] dark:!text-white">
                    {{ captionFromSrc(src) }}
                  </h4>
                </div>

                <img
                  :src="src"
                  :alt="captionFromSrc(src)"
                  :class="galleryImageClass(src)"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>

        <!-- NAVIGATION PRÉCÉDENT / SUIVANT -->
        <nav
          class="grid gap-4 border-t border-[#E5E7EB] pt-10 dark:border-[#334155] md:grid-cols-2"
          aria-label="Navigation entre les projets"
        >
          <RouterLink
            v-if="previousProject"
            :to="`/project/${previousProject.id}`"
            class="group rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-colors hover:bg-[#F9FAFB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:border-[#334155] dark:bg-[#101827] dark:hover:bg-[#162338]"
          >
            <p class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500">
              Projet précédent
            </p>

            <p
              class="mt-2 text-sm font-semibold !text-[#1D2939] group-hover:!text-[#D4AF73] dark:!text-white"
            >
              ← {{ previousProject.title }}
            </p>
          </RouterLink>

          <div v-else></div>

          <RouterLink
            v-if="nextProject"
            :to="`/project/${nextProject.id}`"
            class="group rounded-3xl border border-[#E5E7EB] bg-white p-5 text-right shadow-sm transition-colors hover:bg-[#F9FAFB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:border-[#334155] dark:bg-[#101827] dark:hover:bg-[#162338]"
          >
            <p class="text-xs uppercase tracking-[0.14em] !text-[#98A2B3] dark:!text-slate-500">
              Projet suivant
            </p>

            <p
              class="mt-2 text-sm font-semibold !text-[#1D2939] group-hover:!text-[#D4AF73] dark:!text-white"
            >
              {{ nextProject.title }} →
            </p>
          </RouterLink>

          <div v-else></div>
        </nav>
      </div>

      <!-- SI PROJET INTROUVABLE -->
      <section
        v-else
        class="mx-auto max-w-2xl rounded-3xl border border-[#E5E7EB] bg-white px-6 py-16 text-center shadow-sm dark:border-[#334155] dark:bg-[#101827]"
      >
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">Erreur</p>

        <h1 class="text-3xl font-bold !text-[#1D2939] dark:!text-white">Projet introuvable</h1>

        <p class="mt-3 text-sm !text-[#667085] dark:!text-slate-300">
          Vérifiez l’URL ou retournez à la liste des projets.
        </p>

        <RouterLink
          to="/projects"
          class="mt-6 inline-flex items-center justify-center rounded-full bg-[#1D2939] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:bg-[#D4AF73] dark:!text-[#0B1020] dark:hover:bg-[#c79f5f] dark:focus-visible:ring-offset-[#0B1020]"
        >
          Retour aux projets
        </RouterLink>
      </section>
    </main>
  </AppLayout>
</template>
