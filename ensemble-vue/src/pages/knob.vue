<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)

const changeValue1 = () => {
  const values = [10, 20, 30, 70, 90]

  const nextCounter =
    counter.value + 1 > values.length - 1
      ? 0
      : counter.value + 1

  counter.value = nextCounter
  value1.value = values[nextCounter]
}

const changeValue2 = () => {
  const values = [12, 20, 30, 45]

  const nextCounter =
    counter.value + 1 > values.length - 1
      ? 0
      : counter.value + 1

  counter.value = nextCounter
  value2.value = values[nextCounter]
}

const changeValue3 = () => {
  const values = [10, 20, 30, 70, 90]

  const nextCounter =
    counter.value + 1 > values.length - 1
      ? 0
      : counter.value + 1

  counter.value = nextCounter
  value3.value = values[nextCounter]
}
</script>

<template>
  <div class="doc">

    <!-- Simple -->
    <span class="flex">
      <h4 class="title">Simple:</h4>

      <eui-knob
        style="width: 100px"
        :value="value1"
      />

      <eui-button
        @click="changeValue1"
        size="md"
        variant="success"
      >
        Knob
      </eui-button>
    </span>


    <!-- Numeric -->
    <span class="flex">
      <h4 class="title">Numeric:</h4>

      <eui-knob
        style="width: 100px"
        :value="value2"
        :min="10"
        :max="50"
      />

      <eui-button
        @click="changeValue2"
        size="md"
        variant="success"
      >
        Knob
      </eui-button>
    </span>


    <!-- Percent -->
    <span class="flex">
      <h4 class="title">Percent:</h4>

      <eui-knob
        style="width: 100px"
        :value="value3"
        :isPercent="true"
      />

      <eui-button
        @click="changeValue3"
        size="md"
        variant="success"
      >
        Knob
      </eui-button>
    </span>

  </div>
</template>