<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-0 text-white hover:bg-red-600 transition-colors"
  >
    <slot>
      <img src="../assets/youtube.png" alt="youtube" class="w-10 h-10" />
    </slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>

<style scoped></style>
