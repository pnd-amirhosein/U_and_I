<script setup lang="ts">
import { EuiBreadcrumb } from 'ensemble-ui/vue'

type BreadcrumbData = {
  id: number
  icon?: string
  title: string
  action?: () => void
}

const data: BreadcrumbData[] = [
  {
    id: 1,
    title: 'Academy',
    action: () => {
      console.log(12)
    },
    icon: 'academic-cap',
  },
  {
    id: 2,
    title: 'adjustments-horizontal',
    action: () => {
      console.log(13)
    },
    icon: 'adjustments-horizontal',
  },
]
</script>

<template>
  <section class="doc" aria-label="Breadcrumb documentation">
    <div class="flex">
      <h4 class="title">Breadcrumb:</h4>

      <EuiBreadcrumb :data="data" />
    </div>
  </section>
</template>
