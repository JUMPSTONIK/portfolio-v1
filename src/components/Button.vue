<script setup lang="ts">
import Icon from "./Icon.vue";
import { computed } from "vue";

const { text, isPrimary, showIcon } = defineProps({
  text: String,
  type: {
    type: String as () => "button" | "submit" | "reset" | undefined,
    default: "button",
  },
  isPrimary: { type: Boolean, default: true },
  showIcon: { type: Boolean, default: false },
});

const btnClasses = computed(() => ({
  "bg-primary-darker": isPrimary,
  "hover:bg-primary": isPrimary,
  "disabled:bg-secondary-dark": isPrimary,
  "bg-secondary": !isPrimary,
  "hover:bg-primary-darker": !isPrimary,
  "disabled:bg-white": !isPrimary,
  border: !isPrimary,
  "border-secondary-dark": !isPrimary,
  "disabled:border-secondary": !isPrimary,
}));

const iconClasses = computed(() => ({
  "text-primary": isPrimary,
  "text-white": isPrimary,
}));

</script>

<template>
  <button
    class="max-w-fit min-w-40"
    :type="type"
  >
    <div class="flex" :class="btnClasses">
      <div v-if="showIcon" class="base w-[45px]">
        <Icon :class="iconClasses" :icon="'arrow'"></Icon>
      </div>

      <div
        class="base uppercase text-xs px-9"
        :class="{
          'text-white': isPrimary,
          'hover:text-white': !isPrimary,
          'text-primary-darker': !isPrimary,
        }"
      >
        <p>{{ text }}</p>
      </div>
    </div>
  </button>
</template>

<style scoped>
.base {
  @apply h-[45px] flex justify-center items-center;
}
</style>
