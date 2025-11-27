// ProjectsView.vue — Page qui affiche la liste de tous les projets. // Récupère les données depuis
data/projects.json. // Affiche une grille responsive de cards avec RouterLink vers les détails.

<script setup>
import { RouterLink } from 'vue-router'
import projects from '@/data/projects.json'
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <!-- TITRE -->
    <h1 class="text-4xl md:text-5xl font-bold mb-10 text-[#1D2939]">Mes projets</h1>

    <!-- GRID DES PROJETS -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <RouterLink
        v-for="project in projects"
        :key="project.id"
        :to="`/project/${project.id}`"
        class="group block bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
      >
        <!-- IMAGE PRINCIPALE -->
        <img
          :src="`/images/${project.image}`"
          :alt="project.title"
          class="w-full h-48 object-cover"
          @error="$event.target.style.display = 'none'"
        />

        <!-- CONTENU -->
        <div class="p-6">
          <!-- TITRE -->
          <h3
            class="text-xl font-semibold text-[#1D2939] mb-2 group-hover:text-[#D4AF73] transition-colors"
          >
            {{ project.title }}
          </h3>

          <!-- DESCRIPTION -->
          <p class="text-sm text-[#667085] mb-4 leading-relaxed">
            {{ project.description }}
          </p>

          <!-- TECHNOLOGIES -->
          <p v-if="project.tech?.length" class="text-[13px] text-[#98A2B3] tracking-wide">
            {{ project.tech.join(' · ') }}
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
