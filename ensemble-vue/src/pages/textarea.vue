<script setup lang="ts">
import { EuiTextarea } from 'ensemble-ui/vue'

const test = () => {
  console.log(872368723);

  var el = getComputedStyle(document.documentElement).fontSize
  console.log(el);
  if (el)
    console.log("LOGGGGG", el
      // getComputedStyle(el)
      //   .getPropertyValue('--space-5xl')
    )
}
</script>

<template>
  <div class="doc" @click="test()">
    <span class="flex">
      <h4 class="title">Simple Input</h4>

      <EuiTextarea style-value="width:25vw;" :native-attrs="{ placeHolder: 'simple input' }" />
    </span>
  </div>
</template>