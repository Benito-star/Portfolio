// Footer.vue — Bas de page du portfolio. // Affiche le CTA “me contacter”, les tags de style du
portfolio, // ainsi que les informations légales et stylistiques.

<template>
  <footer class="border-t border-[#E5E7EB] bg-white mt-16 pt-12">
    <!-- CTA CONTACT -->
    <div class="container mx-auto px-4 pb-12 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-[#1D2939] mb-4 font-playfair">
        Un projet en tête ?
      </h2>

      <p class="text-sm text-[#667085] max-w-xl mx-auto mb-6 leading-relaxed">
        Je crée des interfaces modernes, élégantes et orientées conversion. Parlons ensemble de
        votre projet et voyons ce que nous pouvons créer.
      </p>

      <RouterLink
        to="/contact"
        class="inline-block px-8 py-3 bg-[#1D2939] text-white text-sm font-medium rounded-full hover:bg-black transition-colors"
      >
        Me contacter →
      </RouterLink>
    </div>

    <!-- INFOS BAS DE PAGE -->
    <div class="border-t border-[#E5E7EB]">
      <div
        class="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#98A2B3]"
      >
        <div>© 2025 Benito Studio — Webdesign Portfolio</div>

        <div class="flex gap-2">
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Élégant</span>
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Moderne</span>
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Premium</span>
          <span class="px-2 py-1 rounded-full bg-white border border-[#E5E7EB]">Minimal</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
