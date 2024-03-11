<script setup lang="ts">
import Icon from './Icon.vue'
import { ref, computed } from 'vue';

const isHovered = ref(false)

const { text, isPrimary, isDisabled, showIcon } = defineProps({
    text: String,
    isPrimary: { type: Boolean, default: true },
    isDisabled: { type: Boolean, default: false },
    showIcon: { type: Boolean, default: false },
});

const btnClasses = computed(() => ({
    'bg-primary-darker': isPrimary && !isHovered && !isDisabled,
    'bg-secondary': !isPrimary && !isHovered && !isDisabled,
    'bg-primary': isPrimary && isHovered && !isDisabled,
    'bg-primary-grayish': !isPrimary && isHovered && !isDisabled,
    'bg-secondary-dark': isPrimary && isDisabled,
    'bg-white': !isPrimary && isDisabled,
    'border': !isPrimary,
    'border-secondary-dark': !isPrimary,
    'border-secondary': !isPrimary && isDisabled,
}));

const iconClasses = computed(() => ({
    'text-primary': isPrimary && !isHovered && !isDisabled,
    'text-white': isPrimary && isHovered || isDisabled,
}));

const handleMouseOver = () => {
    isHovered.value = true;
}

const handleMouseOut = () => {
    isHovered.value = false;
}
</script>

<template>
    <button @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        <div :class="btnClasses">

            <div v-if="showIcon" class="base w-[45px]">
                <Icon :class="iconClasses" :icon="'arrow'"></Icon>
            </div>

            <div class="base uppercase text-xs px-9" :class="{
        'text-white': isPrimary,
        'text-primary-grayish': !isPrimary
    }">
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
