// ContactView.vue — Page de contact du portfolio. // Contient ton formulaire ou ton CTA vers tes //
// moyens de communication. // Page essentielle pour un recruteur ou client.

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'

// Remplace par ton endpoint Formspree (ex: https://formspree.io/f/abcdwxyz)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_ME'

const route = useRoute()

// ✅ Titre d’onglet (pro + indique Vue.js)
onMounted(() => {
  document.title = 'Contact — Benito Studio (Vue.js)'
})

// ✅ refs DOM pour scroll + focus
const formCardRef = ref(null)
const nameInputRef = ref(null)
const focusHandled = ref(false)

// Champs du formulaire (refs)
const fullName = ref('')
const email = ref('')
const message = ref('')

// État d’envoi (ref)
const status = ref('idle') // 'idle' | 'loading' | 'success' | 'error'

// Message dismissible (refs)
const alertVisible = ref(false)
const alertType = ref('success') // 'success' | 'error'
const alertText = ref('')

const closeAlert = () => {
  alertVisible.value = false
}

// ✅ Quand on arrive sur /contact?focus=1 => scroll + focus (une seule fois)
watch(
  () => route.query.focus,
  async (v) => {
    if (v !== '1' || focusHandled.value) return
    focusHandled.value = true

    await nextTick()

    // Scroll vers la carte du formulaire
    formCardRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Focus sur le champ "Nom complet" (sans re-scroll)
    nameInputRef.value?.focus?.({ preventScroll: true })
  },
  { immediate: true },
)

const sendMessage = async () => {
  const data = new FormData()
  data.append('name', fullName.value)
  data.append('email', email.value)
  data.append('message', message.value)
  data.append('_subject', 'Nouveau message — Portfolio Benito Studio')

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' },
  })

  let json = null
  try {
    json = await res.json()
  } catch {
    // ignore
  }

  if (!res.ok) {
    const msg =
      json?.errors
        ?.map((e) => e.message)
        .filter(Boolean)
        .join(' ') || 'Une erreur s’est produite. Vérifiez votre endpoint Formspree et réessayez.'
    throw new Error(msg)
  }

  return json
}

const onSubmit = async () => {
  alertVisible.value = false

  if (!fullName.value.trim() || !email.value.trim() || !message.value.trim()) {
    status.value = 'error'
    alertType.value = 'error'
    alertText.value = 'Veuillez remplir tous les champs avant d’envoyer.'
    alertVisible.value = true
    return
  }

  status.value = 'loading'

  try {
    await sendMessage()

    status.value = 'success'
    alertType.value = 'success'
    alertText.value = 'Message envoyé. Je vous répondrai rapidement.'
    alertVisible.value = true

    fullName.value = ''
    email.value = ''
    message.value = ''
  } catch (e) {
    status.value = 'error'
    alertType.value = 'error'
    alertText.value = e?.message || 'Une erreur s’est produite. Réessayez dans un instant.'
    alertVisible.value = true
  }
}
</script>

<template>
  <AppLayout>
    <div class="container mx-auto px-4 py-12">
      <!-- Layout premium : 1 col (mobile) / 2 cols (lg) -->
      <div class="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
        <!-- COLONNE GAUCHE : titre + intro + form -->
        <section>
          <!-- TITRE (contraste corrigé) -->
          <h1 class="text-4xl md:text-5xl font-bold text-[#1D2939] dark:!text-white/95 mb-6">
            Me contacter
          </h1>

          <!-- INTRO (contraste corrigé) -->
          <p class="text-[#667085] dark:text-[#E2E4E8] text-sm leading-relaxed mb-10">
            Une idée de projet, une collaboration ou simplement une question ? Je serai ravi d’en
            discuter avec vous. Laissez-moi un message via ce formulaire et je vous répondrai
            rapidement.
          </p>

          <!-- ✅ ref sur la carte du formulaire -->
          <div ref="formCardRef" class="bg-white border border-[#E5E7EB] shadow-sm rounded-3xl p-8">
            <!-- ALERTE (success / error) -->
            <div
              v-if="alertVisible"
              class="mb-6 rounded-2xl border px-4 py-3 flex items-start justify-between gap-4"
              :class="
                alertType === 'success'
                  ? 'border-[#D1FADF] bg-[#ECFDF3] text-[#027A48]'
                  : 'border-[#FECDCA] bg-[#FEF3F2] text-[#B42318]'
              "
              role="status"
              aria-live="polite"
            >
              <p class="text-sm leading-relaxed">
                {{ alertText }}
              </p>

              <button
                type="button"
                class="shrink-0 rounded-lg px-2 py-1 hover:bg-black/5 transition-colors"
                aria-label="Fermer le message"
                @click="closeAlert"
              >
                ✕
              </button>
            </div>

            <!-- FORMULAIRE -->
            <form @submit.prevent="onSubmit" class="space-y-6">
              <!-- NOM -->
              <div>
                <label class="block text-sm font-medium text-[#1D2939] mb-1"> Nom complet </label>
                <input
                  ref="nameInputRef"
                  v-model="fullName"
                  type="text"
                  placeholder="Votre nom"
                  class="w-full px-4 py-3 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl text-sm text-[#1D2939] focus:outline-none focus:ring-2 focus:ring-[#1D2939] dark:focus:ring-[#D4AF73]"
                />
              </div>

              <!-- EMAIL -->
              <div>
                <label class="block text-sm font-medium text-[#1D2939] mb-1">
                  Adresse e-mail
                </label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="email@example.com"
                  class="w-full px-4 py-3 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl text-sm text-[#1D2939] focus:outline-none focus:ring-2 focus:ring-[#1D2939] dark:focus:ring-[#D4AF73]"
                />
              </div>

              <!-- MESSAGE -->
              <div>
                <label class="block text-sm font-medium text-[#1D2939] mb-1"> Message </label>
                <textarea
                  v-model="message"
                  rows="5"
                  placeholder="Écrivez votre message ici..."
                  class="w-full px-4 py-3 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl text-sm text-[#1D2939] resize-none focus:outline-none focus:ring-2 focus:ring-[#1D2939] dark:focus:ring-[#D4AF73]"
                ></textarea>
              </div>

              <!-- CTA -->
              <button
                type="submit"
                :disabled="status === 'loading'"
                class="px-6 py-3 bg-[#1D2939] text-white text-sm font-medium rounded-full hover:bg-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span v-if="status !== 'loading'">Envoyer le message →</span>
                <span v-else>Envoi en cours…</span>
              </button>
            </form>
          </div>
        </section>

        <!-- COLONNE DROITE : infos directes -->
        <aside class="lg:pt-20">
          <div
            class="rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 p-6 backdrop-blur"
          >
            <p class="text-sm text-[#667085] dark:text-[#E2E4E8]">Ou contactez-moi directement :</p>

            <div class="mt-4 space-y-1">
              <a
                href="mailto:benito.studio@example.com"
                class="font-medium text-[#1D2939] dark:text-white hover:text-[#D4AF73] dark:hover:text-[#D4AF73] transition-colors"
              >
                benito.studio@example.com
              </a>
              <p class="text-xs text-[#98A2B3]">Réponse en moins de 24h</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </AppLayout>
</template>
