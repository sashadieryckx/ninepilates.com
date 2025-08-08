<script setup>
import { ref } from 'vue'
import ClassesMenu from '@/components/classes/ClassesMenu.vue'
import ClassModal from '@/components/classes/ClassModal.vue'
import { useClassesStore } from '@/stores/classesStore.js'

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
    <section class="section">
      <ClassesMenu :items="classesStore.classes" @classClick="handleClassClick" />
    </section>

    <ClassModal :isOpen="isModalOpen" :classData="selectedClass" @close="closeModal" />
  </div>
</template>
<style scoped>
#main-content {
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
