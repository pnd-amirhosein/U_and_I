<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(5)

const onPageChange = (event: CustomEvent<number>) => {
  currentPage.value = event.detail
}
</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">Simple Input</h4>

      <eui-paginator
        :totalPages="10"
        :defaultCurrentPage="currentPage"
        @currentPage="onPageChange"
      />

      <span>current page: {{ currentPage }}</span>
    </span>


    <span class="flex">
      <h4 class="title">Simple Input</h4>

      <eui-paginator
        :totalPages="10"
        :defaultCurrentPage="currentPage"
        :disabled="true"
      />
    </span>

  </div>
</template>