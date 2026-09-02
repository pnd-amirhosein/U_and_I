<script setup lang="ts">
import { EuiDialogue } from 'ensemble-ui/vue';

</script>

<template>
  <div class="doc">

    <!-- Info -->
    <span class="flex">
      <h4 class="title">Info dialogue:</h4>

      <EuiDialogue
        styleValue="min-width: 25vw;"
        variant="info"
        headerMessage="Information fetched!"
      >
        <div slot="body">
          <span style="display: flex; flex-direction: column;">
            <div>Found 3 system operation(s):</div>

            <ul>
              <li>Data attachment</li>
              <li>PDF parser</li>
              <li>Document generator</li>
            </ul>
          </span>
        </div>

        <div slot="footer">
          <eui-button variant="info">close</eui-button>
          <eui-button variant="neutral">see details</eui-button>
        </div>
      </EuiDialogue>
    </span>


    <!-- Success -->
    <span class="flex">
      <h4 class="title">Success dialogue:</h4>

      <EuiDialogue
        styleValue="min-width: 25vw;"
        variant="success"
        headerMessage="Operation successfully done!"
      >
        <div slot="body">
          <span style="display: flex; flex-direction: column;">
            <div>Found 3 system operation(s):</div>

            <ul>
              <li>Data attachment</li>
              <li>PDF parser</li>
              <li>Document generator</li>
            </ul>
          </span>
        </div>

        <div slot="footer">
          <eui-button variant="success">close</eui-button>
          <eui-button variant="neutral">see details</eui-button>
        </div>
      </EuiDialogue>
    </span>


    <!-- Warning -->
    <span class="flex">
      <h4 class="title">Warning dialogue:</h4>

      <EuiDialogue
        styleValue="min-width: 25vw;"
        variant="warning"
        headerMessage="Maintain your operations!"
      >
        <div slot="body">
          <span style="display: flex; flex-direction: column;">
            <div>Found 3 system operation(s):</div>

            <ul>
              <li>Data attachment</li>
              <li>PDF parser</li>
              <li>Document generator</li>
            </ul>
          </span>
        </div>

        <div slot="footer">
          <eui-button variant="warning">close</eui-button>
          <eui-button variant="neutral">see details</eui-button>
        </div>
      </EuiDialogue>
    </span>


    <!-- Danger -->
    <span class="flex">
      <h4 class="title">Danger dialogue:</h4>

      <EuiDialogue
        styleValue="min-width: 25vw;"
        variant="danger"
        headerMessage="System null exception!"
      >
        <div slot="body">
          <span style="display: flex; flex-direction: column;">
            <div>Found 3 system operation(s):</div>

            <ul>
              <li>Data attachment</li>
              <li>PDF parser</li>
              <li>Document generator</li>
            </ul>
          </span>
        </div>

        <div slot="footer">
          <eui-button variant="danger">close</eui-button>
          <eui-button variant="neutral">see details</eui-button>
        </div>
      </EuiDialogue>
    </span>

  </div>
</template>