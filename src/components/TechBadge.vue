<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span
    class="px-2 py-[3px] text-[12px] rounded-full bg-[#F5F5F5] text-[#1D2939] dark:bg-[#1F2937] dark:text-[#E5E7EB] border border-[#E5E7EB] dark:border-[#374151] font-medium tracking-wide"
  >
    {{ label }}
  </span>
</template>
