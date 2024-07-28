<script setup lang="ts">
// @ts-ignore
import TopMenu from '@/modules/common/components/TopMenu.vue'
// @ts-ignore
import SideMenu from '../components/SideMenu.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- top menu -->
    <TopMenu />
    <main class="flex flex-row h-full">
      <!-- side menu -->
      <SideMenu />
      <router-view></router-view>
    </main>
  </div>
</template>

<style></style>
