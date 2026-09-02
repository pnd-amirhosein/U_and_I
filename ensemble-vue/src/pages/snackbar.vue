<script setup lang="ts">
import { EuiButton, EuiSnackbar } from 'ensemble-ui/vue'
import { ref } from 'vue'

const open = ref<boolean[]>(
  Array(13).fill(false)
)

const showSnackbar = (index: number) => {
  const next = [...open.value]
  next[index] = true
  open.value = next
}
</script>

<template>
  <div class="doc">

    <!-- Light / Info -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(1)" mode="text-button" variant="info">
        light
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[1]" @dismissing="open[1] = false" :awake-time="3000" :dismiss="false" variant="info"
          message="Lorem Ipsum is simply dummy text..." />
      </span>
    </span>


    <!-- Light / Warning -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(2)" mode="text-button" variant="warning">
        light
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[2]" @dismissing="open[2] = false" :awake-time="3000" :dismiss="false"
          variant="warning" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Light / Danger -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(3)" mode="text-button" variant="danger">
        light
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[3]" @dismissing="open[3] = false" :awakeTime="3000" :dismiss="false" variant="danger"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Light / Success -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(4)" mode="text-button" variant="success">
        light
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[4]" @dismissing="open[4] = false" :awakeTime="3000" :dismiss="false" variant="success"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <span class="flex" />


    <!-- Header / Info -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(5)" mode="text-button" variant="info">
        Header
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[5]" @dismissing="open[5] = false" :awakeTime="3000" :dismiss="false" variant="info"
          header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Header / Warning -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(6)" mode="text-button" variant="warning">
        Header
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[6]" @dismissing="open[6] = false" :awakeTime="3000" :dismiss="false" variant="warning"
          header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Header / Danger -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(7)" mode="text-button" variant="danger">
        Header
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[7]" @dismissing="open[7] = false" :awakeTime="3000" :dismiss="false" variant="danger"
          header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Header / Success -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(8)" mode="text-button" variant="success">
        Header
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[8]" @dismissing="open[8] = false" :awakeTime="3000" :dismiss="false" variant="success"
          header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <span class="flex" />


    <!-- Header / Dismiss / Info -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(9)" mode="text-button" variant="info">
        Header - dissmiss
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[9]" :awakeTime="3000" :dismiss="true" variant="info" @dismissing="open[9] = false"
          header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Header / Dismiss / Warning -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(10)" mode="text-button" variant="warning">
        Header - dissmiss
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[10]" @dismissing="open[10] = false" :awakeTime="3000" :dismiss="true"
          variant="warning" header="New Update!"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Header / Dismiss / Danger -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(11)" mode="text-button" variant="danger">
        Header - dissmiss
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[11]" @dismissing="open[11] = false" :awakeTime="3000" :dismiss="true" variant="danger"
          header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>


    <!-- Header / Dismiss / Success -->
    <span class="flex" style="width: 50vw">
      <EuiButton @click="showSnackbar(12)" mode="text-button" variant="success">
        Header - dissmiss
      </EuiButton>

      <span class="snackbar-container" style="width: 100%">
        <EuiSnackbar :open="open[12]" @dismissing="open[12] = false" :awakeTime="3000" :dismiss="true"
          variant="success" header="New Update!"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </span>
    </span>

  </div>
</template>