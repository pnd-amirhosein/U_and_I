<script setup lang="ts">
import { ref } from 'vue'

const stretch = ref(75)
const weight = ref(500)

const stretchPersian = ref(75)
const weightPersian = ref(500)

const weightCalc = (value: number) => {
  weight.value = 100 + value * 800
}

const stretchCalc = (value: number) => {
  stretch.value = 75 + value * 50
}

const weightCalcPersian = (value: number) => {
  weightPersian.value = 100 + value * 850
}

const stretchCalcPersian = (value: number) => {
  stretchPersian.value = 50 + value * 100
}

const onWeightChange = (event: CustomEvent<number>) => {
  weightCalc(event.detail)
}

const onStretchChange = (event: CustomEvent<number>) => {
  stretchCalc(event.detail)
}

const onWeightPersianChange = (event: CustomEvent<number>) => {
  weightCalcPersian(event.detail)
}

const onStretchPersianChange = (event: CustomEvent<number>) => {
  stretchCalcPersian(event.detail)
}
</script>

<template>
  <div class="font-center flex gap-2">

    <!-- English -->
    <div class="english-text flex gap-2 flex-col justify-between">

      <h1
        class="text flex justify-center"
        :style="{
          fontStretch: `${stretch}%`,
          fontWeight: weight,
        }"
      >
        EnsembleUI, by Ilecy!
      </h1>

      <div class="flex flex-col gap-2">

        <div class="tool">
          <div class="flex justify-between">
            <div class="weight">Weight:</div>
            <div class="weight">{{ weight }}</div>
          </div>

          <eui-slider
            styleValue="width:40vw;"
            size="md"
            :value="0.5"
            @value-change="onWeightChange"
          />
        </div>

        <div class="tool">
          <div class="flex justify-between">
            <div class="weight">stretch:</div>
            <div class="weight">{{ stretch }}</div>
          </div>

          <eui-slider
            styleValue="width:40vw;"
            size="md"
            :value="0.5"
            @value-change="onStretchChange"
          />
        </div>

      </div>
    </div>


    <!-- Persian -->
    <div class="persian-text flex gap-2 flex-col justify-between">

      <h1
        class="text rtl flex justify-center"
        :style="{
          fontStretch: `${stretchPersian}%`,
          fontWeight: weightPersian,
        }"
      >
        انسمبل، توسط ایلسی!
      </h1>

      <div class="flex flex-col gap-2">

        <div class="tool">
          <div class="flex justify-between">
            <div class="weight">Weight:</div>
            <div class="weight">{{ weightPersian }}</div>
          </div>

          <eui-slider
            styleValue="width:40vw;"
            size="md"
            :value="0.5"
            @value-change="onWeightPersianChange"
          />
        </div>

        <div class="tool">
          <div class="flex justify-between">
            <div class="weight">stretch:</div>
            <div class="weight">{{ stretchPersian }}</div>
          </div>

          <eui-slider
            styleValue="width:40vw;"
            size="md"
            :value="0.5"
            @value-change="onStretchPersianChange"
          />
        </div>

      </div>
    </div>

  </div>
</template>