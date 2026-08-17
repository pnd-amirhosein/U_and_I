<script setup lang="ts">
const test = () => {
  console.log('Test is clicked!')
}
</script>

<template>
  <div class="doc">
    <span class="flex">
      <h4 class="title">empty state:</h4>

      <eui-empty-state
        icon="x-mark"
        primaryAction="Create new chat"
        secondaryAction="join existing chats"
        @primaryClick="test"
        @secondaryClick="test"
      >
        <span>It’s lonely here...</span>
      </eui-empty-state>
    </span>
  </div>
</template>