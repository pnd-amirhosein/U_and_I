<script setup lang="ts">
import { ref } from 'vue'
import { EuiButton, EuiStepper } from 'ensemble-ui/vue'

const steps = [
  'Select flight',
  'Passengers',
  'Travel info',
  'Payment method',
  'Finalize',
]

const currentStep = ref(0)

const change = (value: number) => {
  let next = currentStep.value + value

  if (next > steps.length) {
    next = steps.length
  } else if (next < 0) {
    next = 0
  }

  currentStep.value = next
}

const selected = (step: number) => {
  currentStep.value = step
}

const onStepSelect = (event: CustomEvent<number>) => {
  selected(event.detail)
}
</script>

<template>
  <div class="doc">

    <span class="flex flex-col">
      <h4 class="title">Stepper - horizontal:</h4>

      <span class="stepper-wrapper">
        <EuiStepper
          :steps="steps"
          :current-step="currentStep"
          @step-select="onStepSelect"
        />
      </span>
    </span>


    <span class="flex flex-col">
      <h4 class="title">Stepper - vertical:</h4>

      <span class="stepper-wrapper vertical">
        <EuiStepper
          :steps="steps"
          :current-step="currentStep"
          orientation="vertical"
          @step-select="onStepSelect"
        />
      </span>

      <span class="flex justify-between w-80">
        <EuiButton
          @click="change(-1)"
          mode="outline"
          size="sm"
          variant="info"
        >
          Previous
        </EuiButton>

        <EuiButton
          @click="change(1)"
          mode="outline"
          size="sm"
          variant="info"
        >
          Next
        </EuiButton>
      </span>
    </span>

  </div>
</template>