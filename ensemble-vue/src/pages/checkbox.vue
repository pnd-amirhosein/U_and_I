<script setup lang="ts">
import { ref } from 'vue'

const vals = ref([
  'false', 'false', 'false',
  'null', 'null', 'null',
  'null', 'null', 'null',
  'null', 'null', 'null',
  'null', 'null', 'null',
  'null',
])

const updateValue = (index: number, value: unknown) => {
  vals.value[index] = String(value)
}
</script>

<template>
  <div class="doc">

    <!-- Classic checkbox -->
    <span class="flex">
      <h4 class="title">Classic checkbox (null,true)</h4>

      <eui-checkbox
        @valueChange="updateValue(9, $event.detail)"
        :states="['null', 'true']"
        size="sm"
      />
      <span class="valued">{{ vals[9] }}</span>

      <eui-checkbox
        @valueChange="updateValue(10, $event.detail)"
        :states="['null', 'true']"
        size="md"
      />
      <span class="valued">{{ vals[10] }}</span>

      <eui-checkbox
        @valueChange="updateValue(11, $event.detail)"
        :states="['null', 'true']"
        size="lg"
      />
      <span class="valued">{{ vals[11] }}</span>

      <eui-checkbox
        @valueChange="updateValue(12, $event.detail)"
        :states="['null', 'true']"
        size="lg"
        mode="outline"
      />
      <span class="valued">{{ vals[12] }}</span>
    </span>


    <!-- Force to choose -->
    <span class="flex">
      <h4 class="title">Force to choose: false, true</h4>

      <eui-checkbox
        @valueChange="updateValue(0, $event.detail)"
        :states="['false', 'true']"
        size="sm"
        value="false"
      />
      <span class="valued">{{ vals[0] }}</span>

      <eui-checkbox
        @valueChange="updateValue(1, $event.detail)"
        :states="['false', 'true']"
        size="md"
        value="false"
      />
      <span class="valued">{{ vals[1] }}</span>

      <eui-checkbox
        @valueChange="updateValue(2, $event.detail)"
        :states="['false', 'true']"
        size="lg"
        value="false"
      />
      <span class="valued">{{ vals[2] }}</span>

      <eui-checkbox
        @valueChange="updateValue(13, $event.detail)"
        :states="['false', 'true']"
        size="lg"
        mode="outline"
        value="false"
      />
      <span class="valued">{{ vals[13] }}</span>
    </span>


    <!-- Optional -->
    <span class="flex">
      <h4 class="title">
        Choose but optional: (null,false,true)
      </h4>

      <eui-checkbox
        @valueChange="updateValue(3, $event.detail)"
        :states="['null', 'false', 'true']"
        size="sm"
      />
      <span class="valued">{{ vals[3] }}</span>

      <eui-checkbox
        @valueChange="updateValue(4, $event.detail)"
        :states="['null', 'false', 'true']"
        size="md"
      />
      <span class="valued">{{ vals[4] }}</span>

      <eui-checkbox
        @valueChange="updateValue(5, $event.detail)"
        :states="['null', 'false', 'true']"
        size="lg"
      />
      <span class="valued">{{ vals[5] }}</span>

      <eui-checkbox
        @valueChange="updateValue(14, $event.detail)"
        :states="['null', 'false', 'true']"
        size="lg"
        mode="outline"
      />
      <span class="valued">{{ vals[14] }}</span>
    </span>


    <!-- Full options -->
    <span class="flex">
      <h4 class="title">
        Full options: (null, false, partial, true)
      </h4>

      <eui-checkbox
        @valueChange="updateValue(6, $event.detail)"
        :states="['null', 'false', 'partial', 'true']"
        size="sm"
      />
      <span class="valued">{{ vals[6] }}</span>

      <eui-checkbox
        @valueChange="updateValue(7, $event.detail)"
        :states="['null', 'false', 'partial', 'true']"
        size="md"
      />
      <span class="valued">{{ vals[7] }}</span>

      <eui-checkbox
        @valueChange="updateValue(8, $event.detail)"
        :states="['null', 'false', 'partial', 'true']"
        size="lg"
      />
      <span class="valued">{{ vals[8] }}</span>

      <eui-checkbox
        @valueChange="updateValue(15, $event.detail)"
        :states="['null', 'false', 'partial', 'true']"
        size="lg"
        mode="outline"
      />
      <span class="valued">{{ vals[15] }}</span>
    </span>

  </div>
</template>