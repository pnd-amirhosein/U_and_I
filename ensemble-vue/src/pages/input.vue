<script setup lang="ts">
const sell = '1'

const checkMate = (value: unknown): boolean => {
  return !value
}
</script>

<template>
  <div class="doc">

    <!-- Simple Input -->
    <span class="flex">
      <h4 class="title">Simple Input</h4>

      <eui-input
        styleValue="width:25vw;"
        :nativeAttrs="{ placeHolder: 'simple input' }"
      />
    </span>


    <!-- Numeric Input -->
    <span class="flex">
      <h4 class="title">Simple numeric Input</h4>

      <eui-input
        styleValue="width:25vw;"
        type="number"
        :nativeAttrs="{ placeHolder: 'simple input' }"
      />
    </span>


    <!-- Numeric Input with min/max -->
    <span class="flex">
      <h4 class="title">Numeric Input with min max (2,8)</h4>

      <eui-input
        styleValue="width:25vw;"
        :min="2"
        :max="8"
        type="number"
        :nativeAttrs="{ placeHolder: 'simple input' }"
      />
    </span>


    <!-- Validation -->
    <span class="flex">
      <h4 class="title">
        Input with validation (maxlength:10)
      </h4>

      <eui-input
        styleValue="width:25vw;"
        :validation="{ maxLength: 10 }"
        type="text"
      />
    </span>


    <!-- Success message -->
    <span class="flex">
      <h4 class="title">Success message</h4>

      <eui-input
        styleValue="width:25vw;"
        type="text"
        :validation="{
          custom: checkMate(sell)
        }"
        :alert="{
          message: 'There is a success!',
          type: 'success'
        }"
      />
    </span>


    <!-- Password -->
    <span class="flex">
      <h4 class="title">Password input</h4>

      <eui-input
        styleValue="width:25vw;"
        :nativeAttrs="{ placeHolder: 'enter password' }"
        type="password"
      />
    </span>

  </div>
</template>