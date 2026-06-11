// ContactView.vue — Page de contact du portfolio.

<script setup>
import { ref, watch, nextTick, onMounted, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvjlevk'

const directEmail = 'benoit.durieux@hotmail.be'
const linkedinUrl = 'https://www.linkedin.com/in/beno%C3%AEt-durieux-15424140b/'

const route = useRoute()

const linkedinBadgeScriptId = 'linkedin-badge-script'

const initLinkedInBadge = async () => {
  await nextTick()
  window?.LI?.ProfileBadge?.init?.()
}

const loadLinkedInBadgeScript = () => {
  const existingScript = document.getElementById(linkedinBadgeScriptId)

  if (existingScript) {
    initLinkedInBadge()
    return
  }

  const script = document.createElement('script')
  script.id = linkedinBadgeScriptId
  script.src = 'https://platform.linkedin.com/badges/js/profile.js'
  script.async = true
  script.defer = true
  script.type = 'text/javascript'
  script.onload = initLinkedInBadge

  document.body.appendChild(script)
}

onMounted(() => {
  document.title = 'Contact — Benito Studio | Webdesigner UI/UX junior'

  const description =
    'Contactez Benito Studio, webdesigner UI/UX junior avec double compétence design et intégration web, orienté WordPress, responsive design, SEO on-page et accessibilité de base.'

  let metaDescription = document.querySelector('meta[name="description"]')

  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }

  metaDescription.setAttribute('content', description)

  loadLinkedInBadgeScript()
})

const formCardRef = ref(null)
const nameInputRef = ref(null)
const focusHandled = ref(false)

const fullName = ref('')
const email = ref('')
const contactReason = ref('')
const message = ref('')
const website = ref('')

const status = ref('idle')
const alertVisible = ref(false)
const alertType = ref('success')
const alertText = ref('')

const isSending = computed(() => status.value === 'loading')
const isEndpointConfigured = computed(() => !FORMSPREE_ENDPOINT.includes('REPLACE_ME'))

const closeAlert = () => {
  alertVisible.value = false
}

const showAlert = (type, text) => {
  status.value = type
  alertType.value = type
  alertText.value = text
  alertVisible.value = true
}

watch(
  () => route.query.focus,
  async (value) => {
    if (value !== '1' || focusHandled.value) return

    focusHandled.value = true

    await nextTick()

    formCardRef.value?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    nameInputRef.value?.focus?.({ preventScroll: true })
  },
  { immediate: true },
)

const isValidEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const validateForm = () => {
  if (website.value.trim()) return 'Votre message n’a pas pu être envoyé.'

  if (!fullName.value.trim() || !email.value.trim() || !message.value.trim()) {
    return 'Veuillez remplir votre nom, votre e-mail et votre message.'
  }

  if (!isValidEmail(email.value.trim())) return 'Veuillez entrer une adresse e-mail valide.'

  if (message.value.trim().length < 15) {
    return 'Ajoutez quelques détails à votre message pour que je puisse vous répondre correctement.'
  }

  return null
}

const sendMessage = async () => {
  if (!isEndpointConfigured.value) {
    throw new Error(
      'Le formulaire n’est pas encore connecté à Formspree. Vous pouvez me contacter directement par e-mail via le bouton à droite.',
    )
  }

  const data = new FormData()

  data.append('name', fullName.value.trim())
  data.append('email', email.value.trim())
  data.append('_replyto', email.value.trim())
  data.append('reason', contactReason.value || 'Non précisé')
  data.append('message', message.value.trim())
  data.append('_subject', `Nouveau message — Benito Studio (${contactReason.value || 'Contact'})`)

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })

  let json = null

  try {
    json = await response.json()
  } catch {}

  if (!response.ok) {
    const errorMessage =
      json?.errors
        ?.map((error) => error.message)
        .filter(Boolean)
        .join(' ') || 'Une erreur s’est produite. Vérifiez votre endpoint Formspree et réessayez.'

    throw new Error(errorMessage)
  }

  return json
}

const onSubmit = async () => {
  alertVisible.value = false

  const validationError = validateForm()

  if (validationError) {
    showAlert('error', validationError)
    return
  }

  status.value = 'loading'

  try {
    await sendMessage()

    showAlert('success', 'Message envoyé. Je vous répondrai rapidement.')

    fullName.value = ''
    email.value = ''
    contactReason.value = ''
    message.value = ''
    website.value = ''
  } catch (error) {
    showAlert('error', error?.message || 'Une erreur s’est produite. Réessayez dans un instant.')
  }
}
</script>

<template>
  <AppLayout>
    <main class="container mx-auto px-4 py-12 md:py-16">
      <section class="mx-auto max-w-6xl">
        <!-- HERO CONTACT -->
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p
              class="mb-4 inline-flex rounded-full border border-[#D4AF73]/40 bg-[#D4AF73]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]"
            >
              Contact
            </p>

            <h1
              class="mb-5 max-w-3xl text-4xl font-bold leading-tight !text-[#1D2939] dark:!text-white md:text-5xl"
            >
              Parlons de votre projet ou d’une opportunité.
            </h1>

            <p
              class="max-w-2xl text-sm leading-relaxed !text-[#667085] dark:!text-slate-300 md:text-base"
            >
              Vous êtes recruteur, agence web, entreprise ou porteur de projet ? Je suis disponible
              pour discuter d’une opportunité junior, d’une collaboration ou d’un besoin web orienté
              UI/UX, WordPress, responsive design et intégration.
            </p>

            <ul class="mt-6 flex flex-wrap gap-2 text-xs">
              <li
                class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 !text-[#344054] dark:border-[#334155] dark:bg-[#101827] dark:!text-slate-200"
              >
                Webdesigner UI/UX junior
              </li>
              <li
                class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 !text-[#344054] dark:border-[#334155] dark:bg-[#101827] dark:!text-slate-200"
              >
                Design + intégration
              </li>
              <li
                class="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 !text-[#344054] dark:border-[#334155] dark:bg-[#101827] dark:!text-slate-200"
              >
                WordPress / Vue / Tailwind
              </li>
            </ul>
          </div>

          <aside
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
            aria-label="Disponibilité"
          >
            <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Disponibilité
            </p>

            <h2 class="text-lg font-semibold !text-[#1D2939] dark:!text-white">
              Ouvert aux opportunités junior
            </h2>

            <p class="mt-2 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
              Belgique, Luxembourg, Espagne.
            </p>

            <RouterLink
              to="/projects"
              class="mt-4 inline-flex text-sm font-semibold !text-[#1D2939] underline underline-offset-4 transition-colors hover:!text-[#D4AF73] dark:!text-[#D4AF73] dark:hover:!text-[#EACA8A]"
            >
              Voir mes projets →
            </RouterLink>
          </aside>
        </div>

        <!-- CONTENU PRINCIPAL -->
        <div class="mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
          <!-- FORMULAIRE -->
          <section
            v-reveal
            ref="formCardRef"
            class="shine-border-contact relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] md:p-8"
            aria-labelledby="contact-form-title"
          >
            <div class="mb-6">
              <h2
                id="contact-form-title"
                class="text-2xl font-semibold !text-[#1D2939] dark:!text-white"
              >
                Envoyer un message
              </h2>

              <p class="mt-2 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
                Donnez-moi quelques informations simples. Je vous répondrai avec une réponse claire
                et adaptée à votre besoin.
              </p>
            </div>

            <div
              v-if="alertVisible"
              class="mb-6 flex items-start justify-between gap-4 rounded-2xl border px-4 py-3"
              :class="
                alertType === 'success'
                  ? 'border-[#ABEFC6] bg-[#ECFDF3] !text-[#067647] dark:border-[#14532D] dark:bg-[#052E16] dark:!text-[#BBF7D0]'
                  : 'border-[#FECDCA] bg-[#FEF3F2] !text-[#B42318] dark:border-[#7F1D1D] dark:bg-[#3F0D0D] dark:!text-[#FECACA]'
              "
              :role="alertType === 'error' ? 'alert' : 'status'"
              aria-live="polite"
            >
              <p class="text-sm leading-relaxed">
                {{ alertText }}
              </p>

              <button
                type="button"
                class="shrink-0 rounded-lg px-2 py-1 transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:hover:bg-white/10"
                aria-label="Fermer le message"
                @click="closeAlert"
              >
                ✕
              </button>
            </div>

            <form class="space-y-6" @submit.prevent="onSubmit">
              <div class="hidden" aria-hidden="true">
                <label for="website">Site web</label>
                <input
                  id="website"
                  v-model="website"
                  type="text"
                  name="website"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>

              <div class="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    for="fullName"
                    class="mb-1.5 block text-sm font-medium !text-[#1D2939] dark:!text-white"
                  >
                    Nom complet
                  </label>

                  <input
                    id="fullName"
                    ref="nameInputRef"
                    v-model="fullName"
                    type="text"
                    name="name"
                    autocomplete="name"
                    placeholder="Votre nom"
                    required
                    class="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm !text-[#1D2939] outline-none transition-colors placeholder:!text-[#98A2B3] focus:border-[#D4AF73] focus:ring-2 focus:ring-[#D4AF73]/30 dark:border-[#334155] dark:bg-[#0B1020] dark:!text-white dark:placeholder:!text-slate-500"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="mb-1.5 block text-sm font-medium !text-[#1D2939] dark:!text-white"
                  >
                    Adresse e-mail
                  </label>

                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    placeholder="email@example.com"
                    required
                    class="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm !text-[#1D2939] outline-none transition-colors placeholder:!text-[#98A2B3] focus:border-[#D4AF73] focus:ring-2 focus:ring-[#D4AF73]/30 dark:border-[#334155] dark:bg-[#0B1020] dark:!text-white dark:placeholder:!text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label
                  for="contactReason"
                  class="mb-1.5 block text-sm font-medium !text-[#1D2939] dark:!text-white"
                >
                  Motif du contact
                </label>

                <select
                  id="contactReason"
                  v-model="contactReason"
                  name="reason"
                  class="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm !text-[#1D2939] outline-none transition-colors focus:border-[#D4AF73] focus:ring-2 focus:ring-[#D4AF73]/30 dark:border-[#334155] dark:bg-[#0B1020] dark:!text-white"
                >
                  <option value="">Sélectionner une option</option>
                  <option value="Opportunité junior / recrutement">
                    Opportunité junior / recrutement
                  </option>
                  <option value="Projet web / site vitrine">Projet web / site vitrine</option>
                  <option value="WordPress / CMS / e-commerce">WordPress / CMS / e-commerce</option>
                  <option value="Collaboration agence / freelance">
                    Collaboration agence / freelance
                  </option>
                  <option value="Autre demande">Autre demande</option>
                </select>
              </div>

              <div>
                <label
                  for="message"
                  class="mb-1.5 block text-sm font-medium !text-[#1D2939] dark:!text-white"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  v-model="message"
                  name="message"
                  rows="6"
                  placeholder="Expliquez brièvement votre besoin, l’opportunité ou le contexte du projet..."
                  required
                  class="w-full resize-none rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm !text-[#1D2939] outline-none transition-colors placeholder:!text-[#98A2B3] focus:border-[#D4AF73] focus:ring-2 focus:ring-[#D4AF73]/30 dark:border-[#334155] dark:bg-[#0B1020] dark:!text-white dark:placeholder:!text-slate-500"
                ></textarea>
              </div>

              <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  :disabled="isSending"
                  class="inline-flex items-center justify-center rounded-full bg-[#1D2939] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#D4AF73] dark:!text-[#0B1020] dark:hover:bg-[#c79f5f] dark:focus-visible:ring-offset-[#0B1020]"
                >
                  <span v-if="!isSending">Envoyer le message →</span>
                  <span v-else>Envoi en cours…</span>
                </button>

                <p class="text-xs leading-relaxed !text-[#98A2B3] dark:!text-slate-500">
                  Réponse généralement rapide selon disponibilité.
                </p>
              </div>
            </form>
          </section>

          <!-- INFOS DIRECTES -->
          <aside class="space-y-4 lg:flex lg:h-full lg:flex-col">
            <section
              v-reveal
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827]"
              aria-labelledby="direct-contact-title"
            >
              <h2
                id="direct-contact-title"
                class="text-lg font-semibold !text-[#1D2939] dark:!text-white"
              >
                Contact direct
              </h2>

              <p class="mt-2 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
                Pour une demande rapide, vous pouvez aussi m’écrire directement par e-mail.
              </p>

              <a
                :href="`mailto:${directEmail}`"
                class="mt-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF73]/50 px-4 py-2 text-sm font-semibold !text-[#1D2939] transition-colors hover:bg-[#D4AF73] hover:!text-[#0B1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF73] dark:!text-white"
              >
                {{ directEmail }}
              </a>
            </section>

            <section
              v-reveal
              class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] lg:flex lg:flex-1 lg:flex-col"
              aria-labelledby="linkedin-title"
            >
              <h2
                id="linkedin-title"
                class="text-lg font-semibold !text-[#1D2939] dark:!text-white"
              >
                Profil professionnel
              </h2>

              <p class="mt-2 text-sm leading-relaxed !text-[#667085] dark:!text-slate-300">
                Retrouvez mon parcours, mes projets et mes informations professionnelles sur
                LinkedIn.
              </p>

              <div class="mt-5 overflow-hidden rounded-2xl">
                <div class="block dark:hidden">
                  <div
                    class="badge-base LI-profile-badge"
                    data-locale="fr_FR"
                    data-size="medium"
                    data-theme="light"
                    data-type="VERTICAL"
                    data-vanity="benoît-durieux-15424140b"
                    data-version="v1"
                  >
                    <a
                      class="sr-only"
                      href="https://be.linkedin.com/in/beno%C3%AEt-durieux-15424140b?trk=profile-badge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Benoît Durieux
                    </a>
                  </div>
                </div>

                <div class="hidden dark:block">
                  <div
                    class="badge-base LI-profile-badge"
                    data-locale="fr_FR"
                    data-size="medium"
                    data-theme="dark"
                    data-type="VERTICAL"
                    data-vanity="benoît-durieux-15424140b"
                    data-version="v1"
                  >
                    <a
                      class="sr-only"
                      href="https://be.linkedin.com/in/beno%C3%AEt-durieux-15424140b?trk=profile-badge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Benoît Durieux
                    </a>
                  </div>
                </div>
              </div>

              <a
                :href="linkedinUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex items-center gap-2 text-sm font-semibold !text-[#D4AF73] underline underline-offset-4 transition-colors hover:!text-[#EACA8A] lg:mt-auto"
              >
                Ouvrir le profil LinkedIn →
              </a>
            </section>
          </aside>

          <section
            v-reveal
            class="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#334155] dark:bg-[#101827] lg:col-start-1"
            aria-labelledby="prepare-title"
          >
            <h2 id="prepare-title" class="text-lg font-semibold !text-[#1D2939] dark:!text-white">
              Informations utiles à envoyer
            </h2>

            <ul class="mt-4 space-y-3 text-sm !text-[#667085] dark:!text-slate-300">
              <li class="flex gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]" aria-hidden="true"></span>
                <span
                  >Type de besoin : recrutement, site web, WordPress, intégration ou UX/UI.</span
                >
              </li>

              <li class="flex gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]" aria-hidden="true"></span>
                <span>Contexte : entreprise, agence, projet personnel ou mission ponctuelle.</span>
              </li>

              <li class="flex gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF73]" aria-hidden="true"></span>
                <span>Délai, objectifs principaux et lien éventuel vers l’existant.</span>
              </li>
            </ul>
          </section>

          <!-- CTA PROJETS -->
          <section
            v-reveal
            class="mt-8 rounded-3xl border border-[#D4AF73]/20 bg-gradient-to-br from-[#1D2939] to-[#0B1020] p-8 text-center shadow-lg lg:col-span-2"
          >
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#D4AF73]">
              Portfolio
            </p>

            <h2 class="text-2xl font-semibold !text-white md:text-3xl">
              Avant de me contacter, découvrez quelques réalisations.
            </h2>

            <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed !text-slate-300">
              Explorez mes projets UI/UX, WordPress et intégration web pour mieux comprendre mon
              approche, ma méthode et mes compétences.
            </p>

            <RouterLink
              to="/projects"
              class="mt-6 inline-flex items-center justify-center rounded-full bg-[#D4AF73] px-6 py-3 text-sm font-semibold !text-[#0B1020] transition-colors hover:bg-[#EACA8A]"
            >
              Voir mes projets →
            </RouterLink>
          </section>
        </div>
      </section>
    </main>
  </AppLayout>
</template>

<style scoped>
.shine-border-contact::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: 1.5rem;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(212, 175, 115, 0.15) 20%,
    rgba(43, 168, 200, 0.28) 45%,
    rgba(212, 175, 115, 0.22) 65%,
    transparent 100%
  );
  background-size: 240% 240%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms ease;
  animation: contactShineBorder 8s linear infinite;

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.shine-border-contact:hover::before,
.shine-border-contact:focus-within::before {
  opacity: 1;
}

@keyframes contactShineBorder {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 240% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .shine-border-contact::before {
    animation: none;
  }
}
</style>
