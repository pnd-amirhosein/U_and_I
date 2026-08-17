<script setup lang="ts">
import { onMounted, ref } from 'vue'

type BreadcrumbData = {
  id: number
  icon?: string
  title: string
  action?: () => void
}

type BreadcrumbElement = HTMLElement & {
  data?: BreadcrumbData[]
}

const breadcrumb = ref<BreadcrumbElement>()

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

onMounted(() => {
  if (breadcrumb.value) {
    breadcrumb.value.data = data
  }
})
</script>

<template>
  <section class="doc" aria-label="Breadcrumb documentation">
    <div class="flex">
      <h4 class="title">Breadcrumb:</h4>

      <eui-breadcrumb ref="breadcrumb" />
    </div>
  </section>
</template>
