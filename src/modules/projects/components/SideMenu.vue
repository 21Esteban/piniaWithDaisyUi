<template>
  <aside class="bg-base-200 w-72 min-h-full">
    <h2 class="text-lg font-bold mx-4">Projects</h2>
    <p class="text-sm text-gray-500 ml-4" v-if="projectsStore.noProjects">no hay proyectos</p>
    <!-- menu -->
    <ul class="menu rounded-box w-56" v-else>
      <li v-for="(project, index) in projectsStore.projectList" :key="index">
        <template v-if="project.task.length > 0">
          <details open>
            <summary>{{ project.name }}</summary>
            <ul>
              <li v-for="task in project.task" :key="task.id">
                <router-link :to="`/project/${project.id}`">{{ task.name }}</router-link>
              </li>
            </ul>
          </details>
        </template>

        <template v-else>
          <router-link :to="`/project/${project.id}`">{{ project.name }}</router-link>
        </template> 
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useProjectsStore } from '../store/projects.store'

const projectsStore = useProjectsStore()
</script>

<style></style>
