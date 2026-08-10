<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import { EuiButton, EuiInput, EuiColorPicker } from 'ensemble-ui/vue';

const test = () => {
  console.log('Vue button clicked!');
};

</script>

<template>
  <EuiButton @click="test">
    Vue works!
  </EuiButton>

  <EuiButton size='sm' variant='primary'>Small Primary</EuiButton>
  <EuiButton size='md' variant='primary'>Medium Primary</EuiButton>
  <EuiButton size='lg' variant='primary'>large Primary</EuiButton>

  <EuiInput styleValue="width:25vw;" :nativeAttrs="{ placeholder: 'enter password' }" type="password" />

   <EuiColorPicker mode="full" />
  <HelloWorld />
</template>
