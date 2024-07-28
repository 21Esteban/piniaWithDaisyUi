<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <!-- header -->
      <div class="border-b border-blue-500">
        <slot name="header"/>
      </div>

      <div class="my-5 border-b border-blue-500">
        <slot name="body"/>
      </div>

      <div class="modal-action flex flex-col ">
        <slot name="footer"/>
      </div>
    </div>
  </dialog>
  <div
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
    v-if="prueba"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const prueba = computed(() => {
  console.log(props.open)
  return props.open
})
</script>

<style></style>
