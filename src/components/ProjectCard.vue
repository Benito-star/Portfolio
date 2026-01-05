<script setup>
import { RouterLink } from 'vue-router'
import TechBadge from './TechBadge.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    :to="`/project/${project.id}`"
    class="group block rounded-2xl overflow-hidden border border-[#E5E7EB] dark:border-[#111827] bg-white dark:bg-[#020617] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <!-- MAIN IMAGE (CONSISTENT HEIGHT) -->
    <div
      class="relative bg-[#020617] dark:bg-[#020617] aspect-video flex items-center justify-center before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(ellipse_at_top,rgba(0,201,255,0.14),transparent_60%)]"
    >
      <img
        :src="`/images/${project.image}`"
        :alt="project.title"
        :class="[
          // Base: fill the fixed image area, keep full logo visible
          'h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-105',

          // ✅ Boost ONLY for the paw logo (project-2) while keeping it fully visible
          project.id === 'project-2' ? 'p-6 scale-[1.25] group-hover:scale-[1.35]' : '',
        ]"
        @error="$event.target.style.display = 'none'"
      />

      <!-- ✅ "Live site" badge if a URL exists (clickable, opens in new tab) -->
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur hover:bg-black/45 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label="Open live site in a new tab"
        title="Open live site"
      >
        <span class="inline-block h-2 w-2 rounded-full bg-[#00C9FF]"></span>
        Live site
      </a>

      <!-- ✅ "Case study" badge if no URL and status = case -->
      <span
        v-else-if="project.status === 'case'"
        class="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur"
      >
        <span class="inline-block h-2 w-2 rounded-full bg-[#D4AF73]"></span>
        Case study
      </span>

      <!-- Subtle hover overlay -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
    </div>

    <!-- CONTENT -->
    <div class="p-6">
      <!-- TITLE -->
      <h3
        class="text-xl font-semibold text-[#1D2939]! dark:text-white! mb-2 group-hover:text-[#D4AF73] transition-colors"
      >
        {{ project.title }}
      </h3>

      <!-- DESCRIPTION -->
      <p class="text-sm text-[#667085] dark:text-[#E5E7EB] mb-4 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- TECHNOLOGIES -->
      <div v-if="project.tech?.length" class="flex flex-wrap gap-2 mt-2">
        <TechBadge v-for="t in project.tech" :key="t" :label="t" />
      </div>
    </div>
  </RouterLink>
</template>
