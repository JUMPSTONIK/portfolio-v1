<script setup lang="ts">
import { ref, defineProps, defineModel } from 'vue';

const { to } = defineProps<{ to: string }>();

const model = defineModel<string>('')

const wasTouched = ref(false);

</script>

<template>
  <div class="flex flex-1 flex-col w-full">
    <label :for="to">{{ to }} </label>
    <textarea
      class="w-full bg-secondary-dark px-4 py-2 focus:outline-primary focus:outline-1"
      :class="{'outline-error': wasTouched && model}"
      @click="wasTouched = true"
      :placeholder="`Insert your ${to.toLowerCase()} here…`"
      :name="to"
      v-model="model"
      rows="5"
    />
    <p class=" text-error" v-if="wasTouched && !model">This field is required</p>
  </div>
</template>

<style scoped>
</style>
