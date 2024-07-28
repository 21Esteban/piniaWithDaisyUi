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
  const projects = ref(useLocalStorage<Project[]>('projects', []))

  function addProject(name: string) {
    if (!name) return
    projects.value.push({
      id: uuidv4(),
      name: name,
      task: [],
      taskCompleted: []
    })
  }

  function addTaskToProject(text: string, id: string) {
    //primero buscamos el project
    const project = projects.value.find((project) => {
      return project.id === id
    })
    //una vez encontrado lo creamos el objeto task para guardarlo
    project?.task.push({
      id: uuidv4(),
      name: text,
      completedAt: null
    })
  }

  function toggleTask(taskId: string, projectId: string) {
    const project = projects.value.find((project) => {
      if (project.id === projectId) {
        return true
      }
    })

    const task = project?.task.find((task) => {
      if (task?.id === taskId) return true
    })

    if (!task) return false
    if(!project) return false

    task.completedAt = task?.completedAt ? null : new Date()

    project.taskCompleted.push(task)

    console.log(project.taskCompleted);

    
  }

  return {
    //properties
    projects,

    //getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsLength: computed(() => projects.value.length),

    //actions
    addProject,
    addTaskToProject,
    toggleTask
  }
})
