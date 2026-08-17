<script setup lang="ts">
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
      <h4 class="title">Dropdown by title</h4>

      <eui-dropdown
        :data="data"
        displayField="title"
        @itemSelected="onProductSelected"
        styleValue="width: 25vw;"
        placeholder="Search products..."
      />
    </span>


    <span class="flex">
      <h4 class="title">Dropdown by dimensions.height</h4>

      <eui-dropdown
        :data="data"
        displayField="dimensions.height"
        @itemSelected="onProductSelected"
        styleValue="width: 25vw;"
        placeholder="Search products..."
      />
    </span>


    <span class="flex">
      <h4 class="title">Dropdown by reviews.reviewerName</h4>

      <eui-dropdown
        :data="data"
        displayField="reviews.reviewerName"
        @itemSelected="onProductSelected"
        styleValue="width: 25vw;"
        placeholder="Search products..."
      />
    </span>


    <span class="flex">
      <h4 class="title">Default value</h4>

      <eui-dropdown
        :data="data"
        displayField="title"
        defaultValue="Red Nail Polish"
        @itemSelected="onProductSelected"
        styleValue="width: 25vw;"
        placeholder="Search products..."
      />
    </span>

  </div>
</template>