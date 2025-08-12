<script setup>
import { ref } from 'vue'
import ClassesMenu from '@/components/classes/ClassesMenu.vue'
import ClassModal from '@/components/classes/ClassModal.vue'
import { useClassesStore } from '@/stores/classesStore.js'
import PrivateClasses from '@/components/classes/PrivateClassesSection.vue'

const classesStore = useClassesStore()

const isModalOpen = ref(false)
const selectedClass = ref(null)

const handleClassClick = (classData) => {
  selectedClass.value = classData
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedClass.value = null
}
</script>
<template>
  <div id="main-content" class="main-content">
    <section class="section" id="class-list">
      <ClassesMenu :items="classesStore.classes" @classClick="handleClassClick" />
    </section>
    <ClassModal :isOpen="isModalOpen" :classData="selectedClass" @close="closeModal" />
    <section class="section">
      <PrivateClasses />
    </section>
  </div>
</template>
<style scoped>
#main-content {
  height: 100%;
}
#class-list {
  height: 100vh;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
