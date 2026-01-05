// ProjectsView.vue — Page qui affiche la liste de tous les projets. // Récupère les données depuis
// data/projects.json. // Affiche une grille responsive de cards avec RouterLink vers les détails.

<script setup>
import { onMounted, ref } from 'vue'
import projects from '@/data/projects.json'
import ProjectCard from '@/components/ProjectCard.vue'
import AppLayout from '@/components/AppLayout.vue'

// ✅ Template ref (Back to top)
const topRef = ref(null)

const scrollToTop = () => {
  topRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ✅ Titre d’onglet (pro + indique Vue.js)
onMounted(() => {
  document.title = 'Projets — Benito Studio (Vue.js)'
})
</script>

<template>
  <AppLayout>
    <!-- ✅ Anchor for back-to-top -->
    <div ref="topRef"></div>

    <div class="container mx-auto px-4 py-12">
      <!-- TITRE -->
      <h1 class="text-4xl md:text-5xl font-bold text-[#1D2939]! dark:text-white! mb-8">
        Mes projets
      </h1>

      <!-- GRID DES PROJETS -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>

      <!-- ✅ BACK TO TOP -->
      <div class="mt-10 flex justify-center">
        <button
          type="button"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D2939] text-white text-sm font-medium hover:bg-black transition-colors"
          @click="scrollToTop"
        >
          Back to top ↑
        </button>
      </div>
    </div>
  </AppLayout>
</template>
