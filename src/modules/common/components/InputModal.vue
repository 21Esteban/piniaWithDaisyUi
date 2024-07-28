<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ tittle }}</h3>
      <p class="py-4">{{ subtittle??'Ingrese la data necesaria' }}</p>

      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValues">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'ingrese un valor'"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end align-middle mt-5 gap-3">
            <button class="btn" @click="closeModal">Close</button>
            <button class="btn bg-primary" type="submit">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
    v-if="open"
  ></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
////////

interface Props {
  open: Boolean
  placeholder: String
  tittle: String
  subtittle: String
}

const props = defineProps<Props>()

const emits = defineEmits<{
  close: [void]
  value: [text: String]
}>()

//////

const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

/////
watch(props,({open})=>{
  if(open){
    inputRef.value?.focus()
  }
})

/////

function submitValues() {
  if (!inputValue.value) {
    //foco en el elemento
    inputRef.value?.focus()
    inputRef.value?.classList.remove('input-primary')
    inputRef.value?.classList.add('input-error')

    return
  }
  emits('value', inputValue.value.trim())
  emits('close')

  inputValue.value = ''
}

function closeModal() {
  emits('close')
}

///////
</script>
<style></style>
