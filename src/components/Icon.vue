<template>
    <div :innerHTML="ICONS[icon]">
    </div>
</template>
  
<script setup lang="ts">

import {defineProps} from 'vue';
import { ICONS } from '../utils/icons';

const { icon } = defineProps({
    icon: {type: String, required: true},
});
</script>