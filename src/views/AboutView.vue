// AboutView.vue — Page de présentation personnelle. // Décrit ton profil, ton parcours, ton style
de design et tes compétences. // Présente le contexte professionnel aux employeurs ou examinateurs.

<script setup>
import AppLayout from '../components/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-4xl font-bold dark:!text-white/95 mb-6">
        À propos de Benito Studio
      </h1>

      <!-- HERO: texte + 2 cartes (Stack + Services) -->
      <div class="grid md:grid-cols-2 gap-10">
        <div class="space-y-4 text-sm text-[#667085] leading-relaxed">
          <p>
            Je suis
            <span class="font-medium text-[#1D2939] dark:text-white/90">webdesigner </span>
            <span class="font-medium text-[#1D2939] dark:text-white/90">UI/UX</span>. Je conçois des
            interfaces élégantes, modernes et orientées conversion, avec une attention forte à la
            clarté, aux détails et à la cohérence d’une charte graphique.
          </p>

          <!-- Hiérarchie visuelle: légèrement plus clair -->
          <p class="text-white/75">
            Ce site sert également de projet d’examen : Vue 3 + Router, données dynamiques, et
            intégration fidèle d’une charte graphique.
          </p>

          <!-- Reformulation “métier” -->
          <p>
            J’y applique une approche orientée maintenabilité : composants réutilisables, routing
            structuré (routes dynamiques) et Composition API (ref, onMounted) pour gérer l’état et
            le cycle de vie.
          </p>

          <!-- Badges: libellés plus “impact” -->
          <ul class="flex flex-wrap gap-2 text-xs">
            <li class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5">
              Vue 3 (SFC)
            </li>
            <li class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5">
              Composition API (ref, onMounted)
            </li>
            <li class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5">
              Vue Router (routes dynamiques)
            </li>
            <li class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5">
              Composants réutilisables
            </li>
            <li class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5">
              Rendering (v-if / v-for)
            </li>
            <li class="px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/5">
              Data binding (v-model)
            </li>
          </ul>

          <p class="text-xs text-[#98A2B3] dark:text-white/60">
            Basé en Belgique — projets à distance possibles.
          </p>
        </div>

        <div class="space-y-6">
          <!-- Carte 1: Stack & compétences (mise à jour) -->
          <div
            class="bg-white rounded-2xl border border-[#E5E7EB] p-6 space-y-3 text-sm text-[#667085]"
          >
            <h2 class="font-semibold text-[#1D2939] mb-2">Stack & compétences</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Vue 3 + Vue Router</li>
              <li>HTML, CSS, Tailwind, JavaScript</li>
              <li>UI/UX, design system & intégration pixel-perfect</li>
              <li>WordPress / WooCommerce, Prestashop</li>
              <li>SEO (bases + optimisation on-page)</li>
            </ul>
          </div>

          <!-- Carte 2: Ce que je peux réaliser -->
          <div
            class="bg-white rounded-2xl border border-[#E5E7EB] p-6 space-y-3 text-sm text-[#667085]"
          >
            <h2 class="font-semibold text-[#1D2939] mb-2">Ce que je peux réaliser</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Site vitrine premium (1–10 pages)</li>
              <li>Landing page orientée conversion</li>
              <li>Intégration fidèle de maquettes Figma</li>
              <li>Refonte UI + amélioration UX</li>
              <li>WordPress : pages, thème, performance, SEO</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION: Ce que je fais (services) -->
      <div class="mt-12">
        <h2 class="text-xl md:text-2xl font-semibold text-[#1D2939] dark:!text-white/95 mb-6">
          Ce que je fais
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">
              UI/UX & maquettes
            </h3>
            <p class="text-sm text-[#667085] leading-relaxed">
              Maquettage, hiérarchie visuelle, parcours utilisateur et composants réutilisables.
            </p>
          </div>

          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">
              Intégration front
            </h3>
            <p class="text-sm text-[#667085] leading-relaxed">
              Interfaces propres, responsive et accessibles, avec une attention forte aux détails
              UI.
            </p>
          </div>

          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">
              WordPress & e-commerce
            </h3>
            <p class="text-sm text-[#667085] leading-relaxed">
              Sites vitrines, WooCommerce, bases e-commerce et structure de contenu prête à évoluer.
            </p>
          </div>

          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">
              SEO & performance
            </h3>
            <p class="text-sm text-[#667085] leading-relaxed">
              Optimisation on-page : structure, vitesse, clarté du contenu et bonnes pratiques.
            </p>
          </div>
        </div>
      </div>

      <!-- SECTION: Ma méthode (process) -->
      <div class="mt-12">
        <h2 class="text-xl md:text-2xl font-semibold text-[#1D2939] dark:!text-white/95 mb-6">
          Ma méthode
        </h2>

        <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <ol
            class="list-decimal list-inside pl-0 m-0 space-y-3 text-sm text-[#667085] marker:text-[#98A2B3]"
          >
            <li>
              <span class="font-semibold text-[#1D2939]">Découverte :</span>
              objectifs, cible, contraintes, inspirations.
            </li>
            <li>
              <span class="font-semibold text-[#1D2939]">Structure :</span>
              arborescence, wireframe, priorisation du message.
            </li>
            <li>
              <span class="font-semibold text-[#1D2939]">Design :</span>
              maquettes, composants, cohérence de la charte.
            </li>
            <li>
              <span class="font-semibold text-[#1D2939]">Intégration :</span>
              responsive, détails UI, tests navigateurs.
            </li>
            <li>
              <span class="font-semibold text-[#1D2939]">Livraison :</span>
              check final, ajustements et conseils pour la suite.
            </li>
          </ol>
        </div>
      </div>

      <!-- SECTION: Parcours (timeline courte) -->
      <div class="mt-12">
        <h2 class="text-xl md:text-2xl font-semibold text-[#1D2939] dark:!text-white/95 mb-6">
          Parcours
        </h2>

        <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <ul
            class="list-disc list-inside pl-0 m-0 space-y-3 text-sm text-[#667085] marker:text-[#98A2B3]"
          >
            <li>
              <span class="font-semibold text-[#1D2939]">2023–2025 :</span>
              Formation Webdesign (IFOSUP) : UI/UX, intégration, projets concrets.
            </li>
            <li>
              <span class="font-semibold text-[#1D2939]">2022–2023 :</span>
              Formation E-commerce (IFAPME) : logique business & vente en ligne.
            </li>
            <li>
              <span class="font-semibold text-[#1D2939]">Expériences :</span>
              support technique, mises à jour WordPress et mise en page : rigueur, autonomie,
              fiabilité.
            </li>
          </ul>
        </div>
      </div>

      <!-- SECTION: Outils -->
      <div class="mt-12">
        <h2 class="text-xl md:text-2xl font-semibold text-[#1D2939] dark:!text-white/95 mb-6">
          Outils
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">Design</h3>
            <p class="text-sm text-[#667085] leading-relaxed">Figma, Photoshop, Illustrator</p>
          </div>

          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">Dev</h3>
            <p class="text-sm text-[#667085] leading-relaxed">
              VS Code / Visual Studio, Git (si besoin)
            </p>
          </div>

          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">CMS</h3>
            <p class="text-sm text-[#667085] leading-relaxed">WordPress, WooCommerce</p>
          </div>

          <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6">
            <h3 class="font-semibold text-[#1D2939] dark:text-white/90 mb-2 text-sm">E-commerce</h3>
            <p class="text-sm text-[#667085] leading-relaxed">Prestashop</p>
          </div>
        </div>
      </div>

      <!-- MINI-BLOC: crédibilité + CTA (optionnel, mais utile) -->
      <div class="mt-12">
        <div class="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-lg md:text-xl font-semibold text-[#1D2939] dark:text-white/90 mb-2">
                Ce que tu gagnes en travaillant avec moi
              </h2>
              <ul class="list-disc list-inside text-sm text-[#667085] space-y-1">
                <li>Une interface claire (message + hiérarchie)</li>
                <li>Un rendu premium (détails, cohérence, finition)</li>
                <li>Une base prête à évoluer (structure, composants, maintenabilité)</li>
              </ul>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <RouterLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium bg-[#101828] text-white hover:opacity-90 transition"
              >
                Voir mes projets
              </RouterLink>

              <RouterLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium border border-[#E5E7EB] text-[#1D2939] hover:bg-[#F9FAFB] transition"
              >
                Me contacter
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
