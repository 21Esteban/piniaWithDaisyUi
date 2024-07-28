import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Project } from '../interfaces/project.interface'
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '@vueuse/core'

// const initialLoad = () => {

//     const projects = localStorage.getItem("projects") ?? []


//   return [
//     {
//       id: uuidv4(),
//       name: 'Project 1',
//       task: []
//     },
//     {
//       id: uuidv4(),
//       name: 'Project 2',
//       task: []
//     }
//   ]
// }

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>("projects",[]))

  function addProject(name: string) {
    if (!name) return
    projects.value.push({
      id: uuidv4(),
      name: name,
      task: []
    })
  }

  return {
    //properties
    // projects ,

    //getters
    projectList: computed(() => [...projects.value]),

    //actions
    addProject
  }
})
