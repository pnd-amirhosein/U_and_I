<script setup lang="ts">
import { EuiBadge } from 'ensemble-ui/vue';

const colors = [
  'primary',
  'success',
  'warning',
  'danger',
  'outline',
  'outline-filled',
  'pending',
] as const
</script>

<template>
  <section class="doc" aria-label="Badge documentation">
    <div v-for="color in colors" :key="`blank-${color}`" class="flex">
      <h4 class="title">blank / {{ color }}</h4>
      <EuiBadge type="blank" :color="color" />
    </div>

    <div v-for="color in colors" :key="`number-${color}`" class="flex">
      <h4 class="title">number / {{ color }}</h4>
      <EuiBadge type="number" :color="color">1</EuiBadge>
    </div>

    <div v-for="color in colors" :key="`icon-${color}`" class="flex">
      <h4 class="title">icon / {{ color }}</h4>
      <EuiBadge type="icon" :color="color">
        <eui-icon name="academic-cap" type="solid" />
      </EuiBadge>
    </div>

    <div v-for="color in colors" :key="`text-${color}`" class="flex">
      <h4 class="title">text / {{ color }}</h4>
      <EuiBadge type="text" :color="color">#1st anniversarry!</EuiBadge>
    </div>

    <div v-for="color in colors" :key="`text-icon-${color}`" class="flex">
      <h4 class="title">text-icon / {{ color }}</h4>
      <EuiBadge type="text-icon" :color="color">
        <div>Battery low!</div>
        <eui-icon name="battery-0" type="solid" />
      </EuiBadge>
    </div>
  </section>
</template>
