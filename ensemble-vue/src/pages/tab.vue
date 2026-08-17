<script setup lang="ts">
import { EuiTab } from 'ensemble-ui/vue'

interface TabData {
  Title: string
  Icon?: string
  badgeCounter?: string
}

const data: TabData[] = [
  { Title: 'Personal info', Icon: 'user' },
  { Title: 'Stock data', Icon: 'arrow-trending-up' },
  { Title: 'Contact', Icon: 'phone', badgeCounter: '5' },
  { Title: 'Other info', Icon: 'ellipsis-horizontal' },
]
</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">TABS:</h4>

      <EuiTab :data="data" />
    </span>


    <span class="flex">
      <h4 class="title">TABS collapse:</h4>

      <EuiTab
        :data="data"
        collapse
      />
    </span>


    <span class="flex">
      <h4 class="title">TABS disabled:</h4>

      <EuiTab
        :data="data"
        disabled
      />
    </span>


    <span class="flex">
      <h4 class="title">TABS collapse and disabled:</h4>

      <EuiTab
        :data="data"
        collapse
        disabled
      />
    </span>

  </div>
</template>