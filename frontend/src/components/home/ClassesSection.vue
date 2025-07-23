<script setup>
import ClassesCard from '@/components/classes/ClassesCard.vue'
import { useClassesStore } from '@/stores/classesStore'
const classesStore = useClassesStore()
</script>
<template>
  <div id="classes-section">
    <ClassesCard v-for="classInfo in classesStore.classesInfo" :key="classInfo.id" :classesInfo="classInfo" />
  </div>
</template>
<style scoped>

</style>
