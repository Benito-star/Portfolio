// AboutView.vue — Page de présentation personnelle. // Décrit ton profil, ton parcours, ton style
de design et tes compétences. // Présente le contexte professionnel aux employeurs ou examinateurs.

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">À propos de Benito Studio</h1>

    <div class="grid md:grid-cols-2 gap-10">
      <div class="space-y-4 text-sm text-[#667085] leading-relaxed">
        <p>
          Benito Studio est un portfolio de webdesign mettant en avant des interfaces élégantes,
          modernes et minimalistes. Chaque projet est pensé pour être à la fois esthétique et
          fonctionnel.
        </p>
        <p>
          Ce site sert également de projet d’examen : architecture Vue 3 avec router, données
          dynamiques, et intégration fidèle d’une charte graphique.
        </p>
      </div>

      <div
        class="bg-white rounded-2xl border border-[#E5E7EB] p-6 space-y-3 text-sm text-[#667085]"
      >
        <h2 class="font-semibold text-[#1D2939] mb-2">Stack & compétences</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Vue 3 + Vue Router</li>
          <li>HTML, CSS, Tailwind</li>
          <li>Design system & chartes graphiques</li>
          <li>UX / UI orientées conversion</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>
