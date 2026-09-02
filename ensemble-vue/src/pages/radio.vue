<script setup lang="ts">
import { EuiRadio, EuiRadioGroup } from 'ensemble-ui/vue';

</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">Horizontal separate:</h4>

      <EuiRadioGroup
        styleValue="width:25vw;"
        id="pets"
      >
        <EuiRadio value="dog">Dog</EuiRadio>
        <EuiRadio value="cat">Cat</EuiRadio>
        <EuiRadio value="fox">Fox</EuiRadio>
      </EuiRadioGroup>
    </span>


    <span class="flex">
      <h4 class="title">Horizontal Stacked:</h4>

      <EuiRadioGroup
        styleValue="width:25vw;"
        stacked
        id="pets"
      >
        <EuiRadio value="dog">Dog</EuiRadio>
        <EuiRadio value="cat">Cat</EuiRadio>
        <EuiRadio value="fox">Fox</EuiRadio>
      </EuiRadioGroup>
    </span>


    <span class="flex">
      <h4 class="title">Vertical separate:</h4>

      <EuiRadioGroup
        alignment="vertical"
        styleValue="width:25vw;"
        id="pets"
      >
        <EuiRadio value="dog">Dog</EuiRadio>
        <EuiRadio value="cat">Cat</EuiRadio>
        <EuiRadio value="fox">Fox</EuiRadio>
      </EuiRadioGroup>
    </span>


    <span class="flex">
      <h4 class="title">Vertical Stacked:</h4>

      <EuiRadioGroup
        alignment="vertical"
        styleValue="width:25vw;"
        stacked
        id="pets"
      >
        <EuiRadio value="dog">Dog</EuiRadio>
        <EuiRadio value="cat">Cat</EuiRadio>
        <EuiRadio value="fox">Fox</EuiRadio>
      </EuiRadioGroup>
    </span>

  </div>
</template>