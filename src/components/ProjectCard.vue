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
  <article v-reveal class="group relative">
    <div
      class="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D4AF73]/40 hover:shadow-[0_0_0_1px_rgba(212,175,115,0.18),0_18px_45px_rgba(2,6,23,0.18)] dark:border-[#111827] dark:bg-[#020617] dark:hover:border-[#D4AF73]/45 dark:hover:shadow-[0_0_0_1px_rgba(212,175,115,0.16),0_0_22px_rgba(212,175,115,0.08)]"
    >
      <RouterLink
        :to="`/project/${project.id}`"
        class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B1020]"
        :aria-label="`Voir l’étude de cas du projet ${project.title}`"
      >
        <!-- IMAGE -->
        <div
          :class="[
            'relative flex items-center justify-center overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top,rgba(0,201,255,0.14),transparent_60%)]',

            project.id === 'project-1'
              ? 'h-60 bg-white dark:bg-white'
              : 'aspect-video bg-[#020617]',
          ]"
        >
          <img
            :src="`/images/${project.image}`"
            :alt="project.title"
            :class="[
              'h-full w-full transition-transform duration-500 ease-out',

              project.id === 'project-1'
                ? 'object-contain p-0 motion-safe:group-hover:scale-[1.08]'
                : 'object-contain p-6 motion-safe:group-hover:scale-[1.05]',
            ]"
            loading="lazy"
            decoding="async"
            @error="$event.target.style.display = 'none'"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></div>
        </div>

        <!-- CONTENU -->
        <div class="p-6">
          <h3
            class="mb-2 text-xl font-semibold !text-[#1D2939] transition-colors duration-300 group-hover:!text-[#D4AF73] dark:!text-white"
          >
            {{ project.title }}
          </h3>

          <p class="mb-4 text-sm leading-relaxed !text-[#667085] dark:!text-[#E5E7EB]">
            {{ project.description }}
          </p>

          <div v-if="project.tech?.length" class="mt-2 flex flex-wrap gap-2">
            <TechBadge v-for="tech in project.tech" :key="tech" :label="tech" />
          </div>
        </div>
      </RouterLink>

      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-wide !text-white backdrop-blur transition-colors hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-label="Ouvrir le site en ligne dans un nouvel onglet"
        title="Ouvrir le site"
        @click.stop
      >
        <span class="inline-block h-2 w-2 rounded-full bg-[#00C9FF]"></span>
        Live site
      </a>

      <span
        v-else-if="project.status === 'case'"
        class="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-wide !text-white backdrop-blur"
      >
        <span class="inline-block h-2 w-2 rounded-full bg-[#D4AF73]"></span>
        Case study
      </span>
    </div>
  </article>
</template>
