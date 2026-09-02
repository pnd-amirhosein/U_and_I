<script setup lang="ts">
import { EuiColorPicker } from 'ensemble-ui/vue';

</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">Color picker - compact:</h4>
      <EuiColorPicker />
    </span>

    <span class="flex">
      <h4 class="title">Color picker - standard:</h4>
      <EuiColorPicker mode="standard" />
    </span>

    <span class="flex">
      <h4 class="title">Color picker - full:</h4>
      <EuiColorPicker mode="full" />
    </span>

  </div>
</template>