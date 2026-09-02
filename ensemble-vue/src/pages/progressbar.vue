<script setup lang="ts">
import { EuiProgressbar } from 'ensemble-ui/vue';

</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">Progressbar - sm:</h4>

      <EuiProgressbar
        styleValue="width:25vw;"
        size="sm"
        :value="0.5"
      />
    </span>


    <span class="flex">
      <h4 class="title">Progressbar - md:</h4>

      <EuiProgressbar
        styleValue="width:25vw;"
        size="md"
        :value="0.5"
      />
    </span>


    <span class="flex">
      <h4 class="title">Progressbar - lg:</h4>

      <EuiProgressbar
        styleValue="width:25vw;"
        size="lg"
        :value="0.5"
      />
    </span>

  </div>
</template>