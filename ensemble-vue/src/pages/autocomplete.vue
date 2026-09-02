<script setup lang="ts">
import { EuiAutoComplete } from 'ensemble-ui/vue'

type Product = {
  id: number
  title: string
  [key: string]: unknown
}

type ProductsResponse = {
  products: Product[]
}

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

function onProductSelected(event: CustomEvent<Product>) {
  console.log('Product selected from Vue!', event.detail)
}
</script>

<template>
  <section class="doc" aria-label="Autocomplete documentation">
    <div class="flex">
      <h4 class="title">autocomplete example</h4>

      <EuiAutoComplete
        placeholder="Search products..."
        display-field="title"
        style-value="width: 25vw;"
        :fetch-suggestions="fetchSuggestions"
        @item-selected="onProductSelected"
      />
    </div>
  </section>
</template>