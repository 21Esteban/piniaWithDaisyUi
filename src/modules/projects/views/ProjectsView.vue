    <script setup lang="ts">
    // @ts-ignore
    import CustomModal from '@/modules/common/components/CustomModal.vue'
    // @ts-ignore
    import FabButton from '@/modules/common/components/FabButton.vue'
    // @ts-ignore
    import InputModal from '@/modules/common/components/InputModal.vue'
    // @ts-ignore
    import AddCircle from '@/modules/common/icons/AddCircle.vue'
    // @ts-ignore
    import ModalIcon from '@/modules/common/icons/ModalIcon.vue'
    import { ref } from 'vue'
    import { useProjectsStore } from '../store/projects.store'
    
    const modalOpen = ref(false)
    const customModal = ref(false)
    //importamos nuestro store
    const projectsStore = useProjectsStore();
    
    
    function chageModalState() {
      modalOpen.value = false
    }
    </script>
<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>tareas</th>
          <th>avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 2 -->
        <tr class="hover" v-for="(project,index) in projectsStore.projectList" :key="project.id">
          <th>{{ index+1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{project.task.length}}</td>
          <td>
            <progress class="progress progress-info w-56" value="10" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
    <InputModal
      :open="modalOpen"
      @close="chageModalState"
      @value="projectsStore.addProject"
      :placeholder="'ingrese algo'"
      :tittle="'Bienvenido'"
      :subtittle="'Ingrese la data en el input'"
    />
    <CustomModal :open="customModal">
      <template #header>
        <h1 class="text-3xl">titulo del modal</h1>
      </template>
      <template #body>
        <h1 class="text-3xl">body del modal</h1>
      </template>
      <template #footer>
        <div class="flex justify-end align-middle mt-5 gap-3">
          <button class="btn" @click="customModal = false">Close</button>
          <button class="btn bg-primary" type="submit" @click="customModal = false">Aceptar</button>
        </div>
      </template>
    </CustomModal>
    <FabButton :position="'bottom-right'" @click="modalOpen = true">
      <AddCircle />
    </FabButton>
    <FabButton :position="'bottom-left'" @click="customModal = true">
      <ModalIcon />
    </FabButton>
  </div>
</template>


<style></style>
