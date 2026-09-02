<script setup lang="ts">
import { EuiSlider } from 'ensemble-ui/vue';
import { ref } from 'vue'

const values = ref([0.5, 0.5, 0.5])

const updateValue = (index: number, value: number) => {
  values.value[index] = value
}
</script>

<template>
  <div class="doc">

    <span class="flex">
      <h4 class="title">Slider - sm:</h4>

      <EuiSlider
        styleValue="width:25vw;"
        size="sm"
        :value="0.5"
        @valueChange="updateValue(0, $event.detail)"
      />

      <span :style="{ width: '50px' }">
        {{ values[0] }}
      </span>
    </span>


    <span class="flex">
      <h4 class="title">Slider - md:</h4>

      <EuiSlider
        styleValue="width:25vw;"
        size="md"
        :value="0.5"
        @valueChange="updateValue(1, $event.detail)"
      />

      <span :style="{ width: '50px' }">
        {{ values[1] }}
      </span>
    </span>


    <span class="flex">
      <h4 class="title">Slider - lg:</h4>

      <EuiSlider
        styleValue="width:25vw;"
        size="lg"
        :value="0.5"
        @valueChange="updateValue(2, $event.detail)"
      />

      <span :style="{ width: '50px' }">
        {{ values[2] }}
      </span>
    </span>

  </div>
</template>