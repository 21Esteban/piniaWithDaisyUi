<template>
  <!-- boton -->
  <button :class="['btn btn-circle btn-primary fixed', position]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

//interfaces

interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}
withDefaults(defineProps<Props>(), {
  position: 'bottom-right'
})

defineEmits(["click"]);


</script>

<style scoped>
.top-left {
  @apply top-10 left-10;
}
.top-rigth {
  @apply top-10 right-10;
}
.bottom-left {
  @apply bottom-10 left-10;
}
.bottom-right {
  @apply bottom-10 right-10;
}
</style>
