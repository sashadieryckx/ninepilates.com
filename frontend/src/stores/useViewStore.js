import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useViewStore = defineStore('view', () => {
  const activeSection = ref(null)

  function setActiveSection(id) {
    activeSection.value = id
  }

  return { activeSection, setActiveSection }
})
