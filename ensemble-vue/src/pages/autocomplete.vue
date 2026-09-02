<script setup lang="ts">
import { EuiAutoComplete } from 'ensemble-ui/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

type Product = {
  id: number
  title: string
  [key: string]: unknown
}

type ProductsResponse = {
  products: Product[]
}

type AutoCompleteElement = HTMLElement & {
  displayField?: string
  fetchSuggestions?: (query: string) => Promise<Product[]>
  styleValue?: string
}

const autoComplete = ref<AutoCompleteElement>()

async function fetchSuggestions(query: string): Promise<Product[]> {
  if (!query || query.trim() === '') {
    return []
  }

  const response = await fetch('https://dummyjson.com/products')
  const data: ProductsResponse = await response.json()

  return data.products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  )
}

function onProductSelected(event: Event) {
  const product = (event as CustomEvent<Product>).detail

  console.log('Product selected from Vue!', product)
}

onMounted(() => {
  const element = autoComplete.value

  if (!element) {
    return
  }

  element.fetchSuggestions = fetchSuggestions
  element.displayField = 'title'
  element.styleValue = 'width: 25vw;'
  element.addEventListener('itemSelected', onProductSelected)
})

onBeforeUnmount(() => {
  autoComplete.value?.removeEventListener('itemSelected', onProductSelected)
})
</script>

<template>
  <section class="doc" aria-label="Autocomplete documentation">
    <div class="flex">
      <h4 class="title">autocomplete example</h4>

      <EuiAutoComplete ref="autoComplete" placeholder="Search products..." />
    </div>
  </section>
</template>
