<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="doc" :aria-label="`${title} documentation`">
    <h2>{{ title }}</h2>
    <p>This documentation page is ready for its Vue implementation.</p>
  </section>
</template>

<style scoped>
.doc {
  width: 100%;
  min-height: 12rem;
  margin-bottom: 30vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
}

.doc h2,
.doc p {
  margin: 0;
}
</style>
