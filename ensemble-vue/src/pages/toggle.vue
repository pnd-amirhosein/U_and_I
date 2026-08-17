<script setup lang="ts">
const data = [
  { text: 'All', icon: 'archive-box-arrow-down' },
  { text: 'Unread', icon: 'adjustments-vertical' },
  { text: 'Favorites', icon: 'arrow-down' },
  { text: 'Archived', icon: 'bookmark' },
]
</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">Toggle:</h4>

      <eui-toggle
        :value="1"
        :data="data"
      />
    </span>

    <span class="flex">
      <h4 class="title">Toggle - disabled:</h4>

      <eui-toggle
        disabled
        :value="2"
        :data="data"
      />
    </span>

  </div>
</template>