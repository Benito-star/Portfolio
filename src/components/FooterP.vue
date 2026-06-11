<!-- FooterP.vue — Bas de page du portfolio. -->

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const currentYear = new Date().getFullYear()

const email = 'benoit.durieux@hotmail.be'
const emailLink = `mailto:${email}`

const linkedinUrl = 'https://www.linkedin.com/in/beno%C3%AEt-durieux-15424140b/'

// Masque le CTA uniquement sur la page contact
const showFooterCta = computed(() => route.path !== '/contact')
</script>

<template>
  <footer class="border-t border-[#E5E7EB] bg-white dark:border-[#2C3347] dark:bg-[#0B1020]">
    <div class="container mx-auto px-4" :class="showFooterCta ? 'py-14' : 'py-8'">
      <!-- CTA footer : affiché partout sauf sur /contact -->
      <section
        v-if="showFooterCta"
        class="footer-border-beam relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#D4AF73]/15 px-6 py-10 text-center dark:border-[#D4AF73]/20 md:px-10"
        aria-labelledby="footer-title"
      >
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
          Contact
        </p>

        <h2
          id="footer-title"
          class="mb-4 text-2xl font-semibold leading-tight !text-[#1D2939] dark:!text-white md:text-3xl"
        >
          Prêt à démarrer un projet ?
        </h2>

        <p
          class="mx-auto mb-6 max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300 md:text-base"
        >
          Webdesigner UI/UX junior avec double compétence design + intégration web. J’accompagne les
          marques pour créer des interfaces modernes, responsive et performantes.
        </p>

        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-[#1D2939] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 dark:bg-[#D4AF73] dark:!text-[#0B1020] dark:hover:bg-[#c79f5f] dark:focus-visible:ring-offset-[#0B1020]"
        >
          Discuter de votre projet
        </RouterLink>
      </section>

      <!-- Navigation + liens -->
      <div
        class="flex flex-col items-center justify-between gap-8 border-[#E5E7EB] dark:border-[#2C3347] md:flex-row"
        :class="showFooterCta ? 'mt-10 border-t pt-8' : 'mt-0 border-t-0 pt-0'"
      >
        <!-- Navigation secondaire -->
        <nav
          class="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"
          aria-label="Navigation secondaire"
        >
          <RouterLink
            to="/"
            class="!text-[#667085] transition-colors hover:!text-[#1D2939] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:!text-slate-300 dark:hover:!text-white"
          >
            Accueil
          </RouterLink>

          <RouterLink
            to="/projects"
            class="!text-[#667085] transition-colors hover:!text-[#1D2939] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:!text-slate-300 dark:hover:!text-white"
          >
            Projets
          </RouterLink>

          <RouterLink
            to="/about"
            class="!text-[#667085] transition-colors hover:!text-[#1D2939] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:!text-slate-300 dark:hover:!text-white"
          >
            À propos
          </RouterLink>

          <RouterLink
            to="/contact"
            class="!text-[#667085] transition-colors hover:!text-[#1D2939] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:!text-slate-300 dark:hover:!text-white"
          >
            Contact
          </RouterLink>
        </nav>

        <!-- Liens externes / contact direct -->
        <div class="flex items-center gap-3">
          <a
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir mon profil LinkedIn dans un nouvel onglet"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white !text-[#667085] transition-colors hover:border-[#D4AF73] hover:!text-[#1D2939] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:border-[#2C3347] dark:bg-[#101827] dark:!text-slate-300 dark:hover:!text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.64 4.75 6.08V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23H8V8z"
              />
            </svg>
          </a>

          <a
            :href="emailLink"
            :aria-label="`Envoyer un e-mail à ${email}`"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white !text-[#667085] transition-colors hover:border-[#D4AF73] hover:!text-[#1D2939] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:border-[#2C3347] dark:bg-[#101827] dark:!text-slate-300 dark:hover:!text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6h16v12H4V6z"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linejoin="round"
              />
              <path
                d="M4 7l8 6 8-6"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6 text-xs dark:border-[#2C3347] md:flex-row"
      >
        <p class="!text-[#98A2B3] dark:!text-slate-500">
          © {{ currentYear }} Benito Studio — Tous droits réservés.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/mentions-legales"
            class="!text-[#98A2B3] transition-colors hover:!text-[#1D2939] hover:underline dark:!text-slate-500 dark:hover:!text-slate-300"
          >
            Mentions légales
          </RouterLink>

          <RouterLink
            to="/politique-confidentialite"
            class="!text-[#98A2B3] transition-colors hover:!text-[#1D2939] hover:underline dark:!text-slate-500 dark:hover:!text-slate-300"
          >
            Politique de confidentialité
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-border-beam::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: 1.5rem;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 260deg,
    rgba(212, 175, 115, 0.75) 285deg,
    rgba(43, 168, 200, 0.45) 305deg,
    transparent 330deg,
    transparent 360deg
  );
  animation: footerBorderBeam 10s linear infinite;
  pointer-events: none;

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.footer-border-beam::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: 1.45rem;
  background: radial-gradient(circle at top, rgba(212, 175, 115, 0.06), transparent 45%);
  pointer-events: none;
}

.footer-border-beam > * {
  position: relative;
  z-index: 1;
}

@keyframes footerBorderBeam {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-border-beam::before {
    animation: none;
  }
}
</style>
