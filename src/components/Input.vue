<script setup lang="ts">
import { ref, defineProps, defineModel } from 'vue';

const { type, to } = defineProps<{ type: string, to: string }>();

const model = defineModel();

const wasTouched = ref(false);

</script>

<template>
  <div class="flex flex-1 flex-col w-full">
    <label :for="to">{{ to }} </label>
    <input
      class="w-full bg-secondary-dark px-4 py-2 focus:outline-primary focus:outline-1"
      :class="{'outline-error': wasTouched && model}"
      @click="wasTouched = true"
      :type="type"
      :name="to"
      :placeholder="`Insert your ${to.toLowerCase()} here…`"
      v-model="model"
    />
    <p class=" text-error" v-if="wasTouched && !model">This field is required</p>
  </div>
</template>

<style scoped>
</style>
