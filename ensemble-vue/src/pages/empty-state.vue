<script setup lang="ts">
import { EuiEmptyState } from 'ensemble-ui/vue';


const test = () => {
  console.log('Test is clicked!')
}
</script>

<template>
  <div class="doc">
    <span class="flex">
      <h4 class="title">empty state:</h4>

      <EuiEmptyState
        icon="x-mark"
        primaryAction="Create new chat"
        secondaryAction="join existing chats"
        @primaryClick="test"
        @secondaryClick="test"
      >
        <span>It’s lonely here...</span>
      </EuiEmptyState>
    </span>
  </div>
</template>