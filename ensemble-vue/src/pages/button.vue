<script setup lang="ts">
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariant = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'neutral'
type ButtonMode = 'normal' | 'outline' | 'text-button'

type ButtonExample = {
  label: string
  size?: ButtonSize
}

type ButtonRow = {
  title: string
  variant?: ButtonVariant
  mode?: ButtonMode
  buttons: ButtonExample[]
}

const normalRows: ButtonRow[] = [
  {
    title: 'primary - normal buttons:',
    variant: 'primary',
    buttons: [
      { label: 'Small Primary', size: 'sm' },
      { label: 'Medium Primary', size: 'md' },
      { label: 'large Primary', size: 'lg' },
    ],
  },
  {
    title: 'success - normal buttons:',
    variant: 'success',
    buttons: [
      { label: 'Small success', size: 'sm' },
      { label: 'Medium success', size: 'md' },
      { label: 'large success', size: 'lg' },
    ],
  },
  {
    title: 'info - normal buttons:',
    variant: 'info',
    buttons: [
      { label: 'Small info', size: 'sm' },
      { label: 'Medium info', size: 'md' },
      { label: 'large info', size: 'lg' },
    ],
  },
  {
    title: 'warning - normal buttons:',
    variant: 'warning',
    buttons: [
      { label: 'Small warning', size: 'sm' },
      { label: 'Medium warning', size: 'md' },
      { label: 'large warning', size: 'lg' },
    ],
  },
  {
    title: 'danger - normal buttons:',
    variant: 'danger',
    buttons: [
      { label: 'Small danger', size: 'sm' },
      { label: 'Medium danger', size: 'md' },
      { label: 'large danger', size: 'lg' },
    ],
  },
]

const outlineRows: ButtonRow[] = [
  {
    title: 'primary - outline buttons:',
    variant: 'primary',
    mode: 'outline',
    buttons: [
      { label: 'Small Primary', size: 'sm' },
      { label: 'Medium Primary', size: 'md' },
      { label: 'large Primary', size: 'lg' },
    ],
  },
  {
    title: 'success - outline buttons:',
    variant: 'success',
    mode: 'outline',
    buttons: [
      { label: 'Small success', size: 'sm' },
      { label: 'Medium success', size: 'md' },
      { label: 'large success', size: 'lg' },
    ],
  },
  {
    title: 'info - outline buttons:',
    variant: 'info',
    mode: 'outline',
    buttons: [
      { label: 'Small info', size: 'sm' },
      { label: 'Medium info', size: 'md' },
      { label: 'large success', size: 'lg' },
    ],
  },
  {
    title: 'info - outline buttons:',
    variant: 'info',
    mode: 'outline',
    buttons: [
      { label: 'Small info', size: 'sm' },
      { label: 'Medium info', size: 'md' },
      { label: 'large info', size: 'lg' },
    ],
  },
  {
    title: 'warning - outline buttons:',
    variant: 'warning',
    mode: 'outline',
    buttons: [
      { label: 'Small warning', size: 'sm' },
      { label: 'Medium warning', size: 'md' },
      { label: 'large warning', size: 'lg' },
    ],
  },
  {
    title: 'danger - outline buttons:',
    variant: 'danger',
    mode: 'outline',
    buttons: [
      { label: 'Small danger', size: 'sm' },
      { label: 'Medium danger', size: 'md' },
      { label: 'large danger', size: 'lg' },
    ],
  },
]

const textButtonRows: ButtonRow[] = [
  {
    title: 'primary - text-button buttons:',
    variant: 'primary',
    mode: 'text-button',
    buttons: [
      { label: 'Small Primary', size: 'sm' },
      { label: 'Medium Primary', size: 'md' },
      { label: 'large Primary', size: 'lg' },
    ],
  },
  {
    title: 'success - text-button buttons:',
    variant: 'success',
    mode: 'text-button',
    buttons: [
      { label: 'Small success', size: 'sm' },
      { label: 'Medium success', size: 'md' },
      { label: 'large success', size: 'lg' },
    ],
  },
  {
    title: 'info - text-button buttons:',
    variant: 'info',
    mode: 'text-button',
    buttons: [
      { label: 'Small info', size: 'sm' },
      { label: 'Medium info', size: 'md' },
      { label: 'large info', size: 'lg' },
    ],
  },
  {
    title: 'warning - text-button buttons:',
    variant: 'warning',
    mode: 'text-button',
    buttons: [
      { label: 'Small warning', size: 'sm' },
      { label: 'Medium warning', size: 'md' },
      { label: 'large warning', size: 'lg' },
    ],
  },
  {
    title: 'danger - text-button buttons:',
    variant: 'danger',
    mode: 'text-button',
    buttons: [
      { label: 'Small danger', size: 'sm' },
      { label: 'Medium danger', size: 'md' },
      { label: 'large danger', size: 'lg' },
    ],
  },
]

const neutralButtons: ButtonExample[] = [
  { label: 'Small neutral' },
  { label: 'Medium neutral' },
  { label: 'large neutral' },
]

const disabledButtons = ['Small Primary', 'Medium Primary', 'large Primary']
</script>

<template>
  <section class="doc" aria-label="Button documentation">
    <div v-for="row in normalRows" :key="row.title" class="flex">
      <h4 class="title">{{ row.title }}</h4>
      <eui-button v-for="button in row.buttons" :key="button.label" :size="button.size" :variant="row.variant"
        :mode="row.mode">
        {{ button.label }}
      </eui-button>
    </div>

    <div class="divider" />

    <div v-for="(row, index) in outlineRows" :key="`${row.title}-${index}`" class="flex">
      <h4 class="title">{{ row.title }}</h4>
      <eui-button v-for="button in row.buttons" :key="button.label" :size="button.size" :variant="row.variant"
        :mode="row.mode">
        {{ button.label }}
      </eui-button>
    </div>

    <div class="divider" />

    <div v-for="row in textButtonRows" :key="row.title" class="flex">
      <h4 class="title">{{ row.title }}</h4>
      <eui-button v-for="button in row.buttons" :key="button.label" :size="button.size" :variant="row.variant"
        :mode="row.mode">
        {{ button.label }}
      </eui-button>
    </div>

    <div class="flex">
      <h4 class="title">neutral buttons:</h4>
      <eui-button v-for="button in neutralButtons" :key="button.label" variant="neutral">
        {{ button.label }}
      </eui-button>
    </div>

    <div class="divider" />

    <div class="flex">
      <h4 class="title">primary - text-button buttons:</h4>
      <eui-button v-for="label in disabledButtons" :key="label" :disabled="true">{{ label}}</eui-button>
    </div>
  </section>
</template>
