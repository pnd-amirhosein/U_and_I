<script setup lang="ts">
import { EuiChips } from 'ensemble-ui/vue'
import { fakeProduct } from './fakeData.const'

const data = fakeProduct.products

const onProductSelected = (event: CustomEvent) => {
  const product = event.detail

  console.log('Product selected from Vue!', product)
}
</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">Chips by title</h4>

      <EuiChips
        :data="data"
        displayField="title"
        @itemSelected="onProductSelected"
        styleValue="width: 25vw;"
        placeholder="Search products..."
      />
    </span>


    <span class="flex">
      <h4 class="title">Chips by dimensions.height</h4>

      <EuiChips
        :data="data"
        displayField="dimensions.height"
        @itemSelected="onProductSelected"
        styleValue="width: 25vw;"
        placeholder="Search products..."
      />
    </span>


    <span class="flex">
      <h4 class="title">Chips by reviews.reviewerName</h4>

      <EuiChips
        :data="data"
        displayField="reviews.reviewerName"
        @itemSelected="onProductSelected"
        styleValue="width: 25vw;"
        placeholder="Search products..."
      />
    </span>

  </div>
</template>