<!-- ProjectDetailView.vue — Page détaillée d’un projet.
Reçoit l’ID via la route dynamique /project/:id.
Affiche le projet complet : hero + meta + mini case study + galerie.
Inclut également la navigation Précédent/Suivant entre les projets. -->

<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed, watch } from 'vue'
import projects from '@/data/projects.json'
import AppLayout from '../components/AppLayout.vue'

const route = useRoute()

// ✅ id réactif (important quand on change de projet via "Précédent/Suivant")
const id = computed(() => route.params.id)

// ✅ Scroll en haut à chaque arrivée/changement de projet (sécurité, même si router scrollBehavior existe)
watch(
  () => id.value,
  () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  },
  { immediate: true },
)

// Projet actuel
const project = computed(() => {
  return projects.find((p) => p.id === id.value)
})

// ✅ Titre d’onglet (pro + indique Vue.js)
watch(
  () => project.value?.title,
  (t) => {
    document.title = t ? `${t} — Benito Studio (Vue.js)` : 'Benito Studio (Vue.js)'
  },
  { immediate: true },
)

// Trouver index du projet actuel
const currentIndex = computed(() => {
  return projects.findIndex((p) => p.id === project.value?.id)
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

// Helpers case study (compatibles même si caseStudy n'existe pas sur certains projets)
const badges = computed(() => project.value?.tech || [])
const metaType = computed(() => project.value?.type || '')
const metaStatus = computed(() => project.value?.status || '')

const caseStudy = computed(() => project.value?.caseStudy || {})
const problemPoints = computed(() => caseStudy.value.problem || [])
const objectivePoints = computed(() => caseStudy.value.objectives || [])
const myRolePoints = computed(() => caseStudy.value.myRole || [])

const highlights = computed(() => project.value?.galleryHighlights || [])
const fullPages = computed(() => project.value?.galleryFull || [])

// Petit helper : titres lisibles à partir du nom de fichier
function captionFromSrc(src = '') {
  const s = src.toLowerCase()
  if (s.includes('hero')) return 'Hero & proposition de valeur'
  if (s.includes('nos_solutions')) return 'Solutions / machines (structure + lisibilité)'
  if (s.includes('temoignages') || s.includes('certifs'))
    return 'Réassurance : témoignages & certifications'
  if (s.includes('faq')) return 'FAQ : objections & réponses'
  if (s.includes('cta')) return 'CTA & conversion (actions clés)'
  if (s.includes('distributeur')) return 'Parcours partenaire : devenir distributeur'
  if (s.includes('home-full')) return 'Page complète : Accueil'
  if (s.includes('about-full')) return 'Page complète : À propos'
  if (s.includes('contact-full')) return 'Page complète : Contact'
  return 'Écran du projet'
}

// Pour compat : ton ancien champ longDescription
const aboutText = computed(() => {
  return project.value?.longDescription || project.value?.detail || project.value?.description || ''
})

// Image principale : on garde ton comportement existant (/images/ + project.image)
const mainImageSrc = computed(() => {
  const img = project.value?.image
  return img ? `/images/${img}` : ''
})
</script>

<template>
  <AppLayout>
    <div class="container mx-auto px-4 py-12">
      <!-- SI LE PROJET EXISTE -->
      <div v-if="project" class="space-y-12">
        <!-- HERO + META -->
        <div class="grid lg:grid-cols-12 gap-10 items-start">
          <!-- Col gauche : titre, accroche, badges, CTA -->
          <div class="lg:col-span-7">
            <h1 class="text-4xl md:text-5xl font-bold text-[#1D2939] dark:!text-white/95">
              {{ project.title }}
            </h1>

            <p class="mt-3 text-sm md:text-base text-[#667085] dark:text-[#CBD2E1] max-w-2xl">
              {{ project.tagline || project.description }}
            </p>

            <div v-if="badges.length" class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="(t, idx) in badges"
                :key="idx"
                class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5 text-xs"
              >
                {{ t }}
              </span>
            </div>

            <div class="mt-7 flex flex-wrap gap-3">
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-6 py-3 bg-[#1D2939] text-white text-sm font-medium rounded-full hover:bg-black transition-colors"
              >
                Voir la démo →
              </a>

              <a
                href="#screens"
                class="inline-block px-6 py-3 rounded-full border border-white/15 text-white/90 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Voir les écrans
              </a>

              <RouterLink
                to="/projects"
                class="inline-block px-6 py-3 rounded-full border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Retour aux projets
              </RouterLink>
            </div>
          </div>

          <!-- Col droite : carte meta + image principale -->
          <aside class="lg:col-span-5 space-y-6">
            <div
              class="bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] rounded-3xl p-6 shadow-sm"
            >
              <h2 class="text-sm font-semibold text-[#1D2939] dark:text-white/95 mb-4">
                Détails du projet
              </h2>

              <dl class="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div>
                  <dt class="text-xs text-[#98A2B3] uppercase tracking-[0.12em]">Année</dt>
                  <dd class="text-[#1D2939] dark:text-white/90 font-medium">
                    {{ project.year || '—' }}
                  </dd>
                </div>

                <div>
                  <dt class="text-xs text-[#98A2B3] uppercase tracking-[0.12em]">Statut</dt>
                  <dd class="text-[#1D2939] dark:text-white/90 font-medium">
                    {{ metaStatus || '—' }}
                  </dd>
                </div>

                <div class="col-span-2" v-if="metaType || project.type">
                  <dt class="text-xs text-[#98A2B3] uppercase tracking-[0.12em]">Type</dt>
                  <dd class="text-[#1D2939] dark:text-white/90 font-medium">
                    {{ metaType || '—' }}
                  </dd>
                </div>

                <div class="col-span-2" v-if="project.role">
                  <dt class="text-xs text-[#98A2B3] uppercase tracking-[0.12em]">Rôle</dt>
                  <dd class="text-[#1D2939] dark:text-white/90 font-medium">
                    {{ project.role }}
                  </dd>
                </div>
              </dl>

              <div class="mt-5 bg-[#F3F4F6] dark:bg-[#1f2533] rounded-xl p-4">
                <p class="text-xs text-[#667085] dark:text-[#CBD2E1] leading-relaxed">
                  {{ aboutText }}
                </p>
              </div>
            </div>

            <div v-if="mainImageSrc">
              <img
                :src="mainImageSrc"
                :alt="project.title"
                class="rounded-3xl w-full shadow-sm border border-[#E5E7EB] dark:border-[#323B52]"
                @error="$event.target.style.display = 'none'"
              />
            </div>
          </aside>
        </div>

        <!-- À PROPOS -->
        <div>
          <div
            class="bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] rounded-3xl p-6 shadow-sm space-y-3"
          >
            <h2 class="text-xl font-semibold text-[#1D2939] dark:!text-white/95">
              À propos de ce projet
            </h2>
            <p class="text-sm text-[#667085] dark:text-[#CBD2E1] leading-relaxed">
              {{ aboutText }}
            </p>
          </div>
        </div>

        <!-- B. CONTEXTE & OBJECTIFS (mini case study) -->
        <div v-if="problemPoints.length || objectivePoints.length" class="space-y-6">
          <h2 class="text-2xl font-semibold text-[#1D2939] dark:!text-white/95">
            Contexte & objectifs
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div
              class="bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] rounded-3xl p-6 shadow-sm"
              v-if="problemPoints.length"
            >
              <h3 class="text-sm font-semibold text-[#1D2939] dark:text-white/95 mb-3">
                Problématique
              </h3>
              <ul
                class="list-disc list-inside pl-0 m-0 space-y-2 text-sm text-[#667085] dark:text-[#CBD2E1]"
              >
                <li v-for="(p, idx) in problemPoints" :key="idx">{{ p }}</li>
              </ul>
            </div>

            <div
              class="bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] rounded-3xl p-6 shadow-sm"
              v-if="objectivePoints.length"
            >
              <h3 class="text-sm font-semibold text-[#1D2939] dark:text-white/95 mb-3">
                Objectifs
              </h3>
              <ul
                class="list-disc list-inside pl-0 m-0 space-y-2 text-sm text-[#667085] dark:text-[#CBD2E1]"
              >
                <li v-for="(o, idx) in objectivePoints" :key="idx">{{ o }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- C. MON RÔLE (ce que tu as fait) -->
        <div v-if="myRolePoints.length" class="space-y-6">
          <h2 class="text-2xl font-semibold text-[#1D2939] dark:!text-white/95">Mon rôle</h2>

          <div
            class="bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] rounded-3xl p-6 shadow-sm"
          >
            <ul
              class="list-disc list-inside pl-0 m-0 space-y-2 text-sm text-[#667085] dark:text-[#CBD2E1]"
            >
              <li v-for="(r, idx) in myRolePoints" :key="idx">{{ r }}</li>
            </ul>
          </div>
        </div>

        <!-- DOCUMENTS (PDF / livrables) -->
        <div v-if="project.documents?.length" class="space-y-4">
          <h2 class="text-2xl font-semibold text-[#1D2939] dark:!text-white/95">Documents</h2>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="(doc, i) in project.documents"
              :key="i"
              :href="doc.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-5 py-3 rounded-full bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] text-[#1D2939] dark:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] transition-colors shadow-sm text-sm font-medium"
            >
              {{ doc.label }} →
            </a>
          </div>

          <p class="text-sm text-[#667085] dark:text-[#CBD2E1]">
            Ouverture dans un nouvel onglet (PDF).
          </p>
        </div>

        <!-- ÉCRANS (nouvelle structure) -->
        <div v-if="highlights.length || fullPages.length" class="space-y-6" id="screens">
          <h2 class="text-2xl font-semibold text-[#1D2939] dark:!text-white/95">
            Écrans du projet
          </h2>

          <div v-if="highlights.length">
            <p class="text-sm text-[#98A2B3] dark:text-white/60 mb-4">Highlights (sections clés)</p>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                v-for="(src, idx) in highlights"
                :key="idx"
                :href="src"
                target="_blank"
                rel="noopener"
                class="bg-white dark:bg-[#242B3B] rounded-2xl border border-[#E5E7EB] dark:border-[#323B52] overflow-hidden hover:shadow-sm transition-shadow"
              >
                <div class="p-4">
                  <p class="text-xs text-[#98A2B3] uppercase tracking-[0.12em]">Section</p>
                  <h3 class="mt-1 text-sm font-semibold text-[#1D2939] dark:text-white/95">
                    {{ captionFromSrc(src) }}
                  </h3>
                </div>
                <img :src="src" :alt="captionFromSrc(src)" class="w-full h-48 object-cover" />
              </a>
            </div>
          </div>

          <div v-if="fullPages.length" class="mt-10">
            <p class="text-sm text-[#98A2B3] dark:text-white/60 mb-4">
              Pages complètes (full page)
            </p>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                v-for="(src, idx) in fullPages"
                :key="idx"
                :href="src"
                target="_blank"
                rel="noopener"
                class="bg-white dark:bg-[#242B3B] rounded-2xl border border-[#E5E7EB] dark:border-[#323B52] overflow-hidden hover:shadow-sm transition-shadow"
              >
                <div class="p-4">
                  <p class="text-xs text-[#98A2B3] uppercase tracking-[0.12em]">Full page</p>
                  <h3 class="mt-1 text-sm font-semibold text-[#1D2939] dark:text-white/95">
                    {{ captionFromSrc(src) }}
                  </h3>
                </div>
                <img :src="src" :alt="captionFromSrc(src)" class="w-full h-48 object-cover" />
              </a>
            </div>
          </div>
        </div>

        <!-- NAVIGATION PRÉCÉDENT / SUIVANT -->
        <div
          class="flex justify-between items-center pt-10 border-t border-[#E5E7EB] dark:border-[#323B52]"
        >
          <!-- Projet précédent -->
          <RouterLink
            v-if="previousProject"
            :to="`/project/${previousProject.id}`"
            class="px-6 py-3 rounded-full bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] text-[#1D2939] dark:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] transition-colors shadow-sm"
          >
            ← {{ previousProject.title }}
          </RouterLink>

          <div v-else></div>

          <!-- Projet suivant -->
          <RouterLink
            v-if="nextProject"
            :to="`/project/${nextProject.id}`"
            class="px-6 py-3 rounded-full bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] text-[#1D2939] dark:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#323B52] transition-colors shadow-sm"
          >
            {{ nextProject.title }} →
          </RouterLink>

          <div v-else></div>
        </div>
      </div>

      <!-- SI PROJET INTROUVABLE -->
      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-red-500">Projet introuvable</h2>
        <p class="text-[#98A2B3]">Vérifie l’URL ou retourne à la liste.</p>

        <RouterLink
          to="/projects"
          class="inline-block mt-6 px-6 py-3 rounded-full bg-[#1D2939] text-white text-sm font-medium hover:bg-black transition-colors"
        >
          Retour aux projets
        </RouterLink>
      </div>
    </div>
  </AppLayout>
</template>
