// ContactView.vue — Page de contact du portfolio. // Contient ton formulaire ou ton CTA vers tes
moyens de communication. // Page essentielle pour un recruteur ou client.

<script setup></script>

<template>
  <div class="container mx-auto px-4 py-12">
    <!-- TITRE -->
    <h1 class="text-4xl md:text-5xl font-bold text-[#1D2939] mb-6">Me contacter</h1>

    <!-- INTRO -->
    <p class="text-[#667085] max-w-2xl text-sm leading-relaxed mb-10">
      Une idée de projet, une collaboration ou simplement une question ? Je serai ravi d’en discuter
      avec vous. Laissez-moi un message via ce formulaire et je vous répondrai rapidement.
    </p>

    <!-- CARD DU FORMULAIRE -->
    <div class="bg-white border border-[#E5E7EB] shadow-sm rounded-3xl p-8 max-w-2xl">
      <!-- FORMULAIRE -->
      <form @submit.prevent class="space-y-6">
        <!-- NOM -->
        <div>
          <label class="block text-sm font-medium text-[#1D2939] mb-1"> Nom complet </label>
          <input
            type="text"
            placeholder="Votre nom"
            class="w-full px-4 py-3 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl text-sm text-[#1D2939] focus:outline-none focus:ring-2 focus:ring-[#1D2939]"
          />
        </div>

        <!-- EMAIL -->
        <div>
          <label class="block text-sm font-medium text-[#1D2939] mb-1"> Adresse e-mail </label>
          <input
            type="email"
            placeholder="email@example.com"
            class="w-full px-4 py-3 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl text-sm text-[#1D2939] focus:outline-none focus:ring-2 focus:ring-[#1D2939]"
          />
        </div>

        <!-- MESSAGE -->
        <div>
          <label class="block text-sm font-medium text-[#1D2939] mb-1"> Message </label>
          <textarea
            rows="5"
            placeholder="Écrivez votre message ici..."
            class="w-full px-4 py-3 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl text-sm text-[#1D2939] resize-none focus:outline-none focus:ring-2 focus:ring-[#1D2939]"
          ></textarea>
        </div>

        <!-- CTA -->
        <button
          type="submit"
          class="px-6 py-3 bg-[#1D2939] text-white text-sm font-medium rounded-full hover:bg-black transition-colors"
        >
          Envoyer le message →
        </button>
      </form>
    </div>

    <!-- INFOS DIRECTES -->
    <div class="mt-12 text-sm text-[#667085]">
      <p>Ou contactez-moi directement :</p>

      <div class="mt-3 space-y-1">
        <p class="font-medium text-[#1D2939]">benito.studio@example.com</p>
        <p class="text-xs text-[#98A2B3]">Réponse en moins de 24h</p>
      </div>
    </div>
  </div>
</template>
