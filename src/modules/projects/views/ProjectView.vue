<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="projectName?.name" />
      <section class="m-2">
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th class="w-14">Completada</th>
                <th>Tarea</th>
                <th>Completada en</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 2 -->
              <tr class="hover" v-for="task in projectName?.task" :key="task.id">
                <th>
                  <div class="form-control">
                    <label class="cursor-pointer label">
                      <input
                        type="checkbox"
                        :checked="!!task.completedAt"
                        class="checkbox checkbox-success"
                        @click="completeTask(task.id, projectName.id)"
                      />
                    </label>
                  </div>
                </th>
                <td>{{ task.name }}</td>
                <td>{{ task.completedAt }}</td>
                <td>Purple</td>
              </tr>

              <tr class="hover">
                <th></th>
                <td>
                  <input
                    type="text"
                    class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                    placeholder="Nueva Tarea"
                    v-model="inputText"
                  />
                </td>
                <td></td>
                <td>
                  <button class="btn btn-accent" @click="sendForm">guardar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue'
import { computed, ref } from 'vue'
import { useProjectsStore } from '../store/projects.store'
// import type { Project } from '../interfaces/project.interface'
// import { useRoute } from 'vue-router'

interface Props {
  id: string
}

const props = defineProps<Props>()
const projectStore = useProjectsStore()
const inputText = ref('')

const projectName = computed(() => {
  return projectStore.projectList.find((project) => {
    return project.id === props.id
  })
})

function sendForm() {
  projectStore.addTaskToProject(inputText.value, props.id)
  inputText.value = ''
}

function completeTask(taskId: string, projectId: string) {
  // console.log(taskId);
  // console.log(projectId);
  projectStore.toggleTask(taskId, projectId)
}

// const project = ref<Project | null>()
// const route = useRoute()
// //asi obtenemos el parametro de ruta
// console.log(route.params.id)
// console.log(props.id);

// watch(()=>props.id,()=>{
//     project.value = projectStore.projectList.find((project)=>project.id === props.id)
// }, {immediate:true})

//el inmediate funciona para que el watch se ejecute tambien en el momento en el que se monta la aplicacion
</script>

<style></style>

<!-- una forma de obtener el id o los parametros de la ruta es colocandole en el routes , el atributo props en true,
sino usando const route = useRoute()

asi obtenemos el parametro de ruta 
console.log(route.params.id) 

lo podemos obtener -->
