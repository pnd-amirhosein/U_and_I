<script setup lang="ts">
import { EuiStat } from 'ensemble-ui/vue'

const value = {
  'Amir H. Mardani': 'FSD',
  'months of experience': '100<',
  'Projects': '+17',
  'Jobs': '+10',
}
</script>

<template>
  <div class="doc">

    <span class="flex flex-col">
      <h4 class="title">
        Stat - horizontal:
      </h4>

      <span class="stepper-wrapper">
        <EuiStat :data="value" />
      </span>
    </span>


    <span class="flex flex-col">
      <h4 class="title">
        Stat - vertical:
      </h4>

      <span class="stepper-wrapper">
        <EuiStat
          orientation="vertical"
          :data="value"
        />
      </span>
    </span>

  </div>
</template>