<script setup lang="ts">
const date = new Date()

const onDateSelected = (event: CustomEvent) => {
  const selectedDate = event.detail

  console.log('Date selected from Vue!', selectedDate)
}
</script>

<template>
  <div
    class="doc"
    style="height: 30vh"
  >
    <span class="flex">
      <h4 class="title">Basic datepicker</h4>

      <eui-datepicker
        :date="date"
        @dateChanged="onDateSelected"
        styleValue="width: 25vw;"
      />
    </span>
  </div>
</template>