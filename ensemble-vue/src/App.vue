<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { docs } from './docs'

const route = useRoute()
const router = useRouter()

const showClose = computed(() => route.path !== '/')

function openDoc(path: string) {
  router.push(path)
}

function closeDoc() {
  router.push('/')
}
</script>

<template>
  <main class="main">
    <section class="home">
      <h1>Welcome to EUI's very first documentation page!</h1>

      <div class="links" aria-label="Documentation pages">
        <eui-button
          v-for="doc in docs"
          :key="doc.path"
          size="md"
          :variant="doc.variant"
          @click="openDoc(doc.path)"
        >
          {{ doc.label }}
        </eui-button>
      </div>
    </section>

    <div v-if="showClose" class="closer">
      <button class="close-button" type="button" aria-label="Return to the documentation home" @click="closeDoc">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <RouterView />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.home {
  width: 100%;
  min-height: 50vh;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 1px 7px 7px #00000010;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
}

.home h1 {
  margin: 0;
  text-align: center;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 50rem;
}

.closer {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.close-button {
  width: 36px;
  height: 36px;
  padding: 0;
  color: #dc2626;
  background: transparent;
  border: 0;
  border-radius: 9999px;
  cursor: pointer;
}

.close-button:hover {
  color: white;
  background-color: #dc2626;
}

.close-button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.close-button svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 640px) {
  .home {
    padding: 1.5rem 1rem;
  }
}
</style>
