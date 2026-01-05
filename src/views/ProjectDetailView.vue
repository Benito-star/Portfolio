// ProjectDetailView.vue — Page détaillée d’un projet. // Reçoit l’ID via la route dynamique // //
/project/:id. // Affiche le projet complet : image principale, description, galerie, infos. // //
Inclut également la navigation Précédent/Suivant entre les projets.

<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed, watch } from 'vue'
import projects from '@/data/projects.json'
import AppLayout from '../components/AppLayout.vue'

const route = useRoute()

// ✅ id réactif (important quand on change de projet via "Précédent/Suivant")
const id = computed(() => route.params.id)

// ✅ Scroll en haut à chaque arrivée/changement de projet
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
  if (currentIndex.value > 0) {
    return projects[currentIndex.value - 1]
  }
  return null
})

// Projet suivant
const nextProject = computed(() => {
  if (currentIndex.value < projects.length - 1) {
    return projects[currentIndex.value + 1]
  }
  return null
})
</script>

<template>
  <AppLayout>
    <div class="container mx-auto px-4 py-12">
      <!-- SI LE PROJET EXISTE -->
      <div v-if="project" class="space-y-12">
        <!-- TITRE -->
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-[#1D2939] dark:text-white mb-4">
            {{ project.title }}
          </h1>

          <p class="text-[#667085] dark:text-[#CBD2E1] max-w-2xl text-sm leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- IMAGE PRINCIPALE -->
        <div>
          <img
            :src="`/images/${project.image}`"
            :alt="project.title"
            class="rounded-3xl w-full max-w-4xl shadow-sm border border-[#E5E7EB] dark:border-[#323B52]"
            @error="$event.target.style.display = 'none'"
          />
        </div>

        <!-- INFORMATIONS -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- COLONNE GAUCHE -->
          <div class="space-y-4">
            <div v-if="project.year">
              <h3 class="text-sm font-semibold text-[#1D2939] dark:text-white mb-1">Année</h3>
              <p class="text-[#667085] dark:text-[#CBD2E1]">{{ project.year }}</p>
            </div>

            <div v-if="project.role">
              <h3 class="text-sm font-semibold text-[#1D2939] dark:text-white mb-1">Rôle</h3>
              <p class="text-[#667085] dark:text-[#CBD2E1]">{{ project.role }}</p>
            </div>

            <div v-if="project.tech?.length">
              <h3 class="text-sm font-semibold text-[#1D2939] dark:text-white mb-1">
                Technologies
              </h3>
              <p class="text-[#667085] dark:text-[#CBD2E1] text-sm leading-relaxed">
                {{ project.tech.join(' · ') }}
              </p>
            </div>

            <div v-if="project.url">
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-6 py-3 bg-[#1D2939] text-white text-sm font-medium rounded-full hover:bg-black transition-colors"
              >
                Voir la démo →
              </a>
            </div>
          </div>

          <!-- COLONNE DESCRIPTION -->
          <div class="md:col-span-2">
            <div
              class="bg-white dark:bg-[#242B3B] border border-[#E5E7EB] dark:border-[#323B52] rounded-3xl p-6 shadow-sm space-y-4"
            >
              <h3 class="text-xl font-semibold text-[#1D2939] dark:text-white mb-2">
                À propos de ce projet
              </h3>

              <p class="text-sm text-[#667085] dark:text-[#CBD2E1] leading-relaxed">
                {{ project.longDescription || project.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- GALERIE -->
        <div v-if="project.gallery?.length" class="space-y-4">
          <h2 class="text-2xl font-semibold text-[#1D2939] dark:text-white">Galerie</h2>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              v-for="(img, i) in project.gallery"
              :key="i"
              :src="`/images/${img}`"
              class="rounded-2xl border border-[#E5E7EB] dark:border-[#323B52] shadow-sm object-cover h-56"
              @error="$event.target.style.display = 'none'"
            />
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
      </div>
    </div>
  </AppLayout>
</template>
