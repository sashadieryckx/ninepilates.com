import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClassesStore = defineStore('classes', () => {
  const classesInfo = ref([
    {
      id: 1,
      name: 'Reformer Pilates',
      description: 'A dynamic workout using the reformer machine to enhance strength and flexibility.',
    },
    {
      id: 2,
      name: 'Mat Pilates',
      description: 'A traditional Pilates workout performed on a mat, focusing on core strength and flexibility.',
    },
    {
      id: 3,
      name: 'Contemporary Pilates',
      description: 'A modern approach to Pilates, incorporating elements from various styles to create a unique workout experience.',
    },
  ])

  return { classesInfo }

})
