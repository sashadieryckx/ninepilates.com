<script setup>
import { onMounted, onUnmounted, nextTick, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'ClassSchedule',
})

const route = useRoute()
let scriptElement = null
let isComponentMounted = false

onMounted(async () => {
  isComponentMounted = true

  if (route.name !== 'schedule') {
    return
  }
  await nextTick()
  setTimeout(() => {
    if (isComponentMounted) {
      loadMomenceScript()
    }
  }, 100)
})

function loadMomenceScript() {
  // Double-check we're still mounted and on the right route
  if (!isComponentMounted || route.name !== 'schedule') {
    return
  }

  // Complete cleanup of any existing Momence content and scripts
  const existingScripts = document.querySelectorAll('script[src*="momence.com"]')
  existingScripts.forEach((script) => script.remove())

  const existingContent = document.querySelectorAll('[class*="momence"], [id*="momence"]')
  existingContent.forEach((el) => el.remove())

  // Clear any cached Momence globals
  if (window.momence) {
    delete window.momence
  }
  if (window.Momence) {
    delete window.Momence
  }

  // Ensure the target div exists and is clean
  const targetDiv = document.getElementById('ribbon-schedule')

  targetDiv.innerHTML = ''

  scriptElement = document.createElement('script')
  scriptElement.async = true
  scriptElement.type = 'text/javascript'

  scriptElement.src = 'https://momence.com/plugin/host-schedule/host-schedule.js'

  // Set Momence plugin attributes
  scriptElement.setAttribute('host_id', '83188')
  scriptElement.setAttribute('teacher_ids', '[]')
  scriptElement.setAttribute('location_ids', '[]')
  scriptElement.setAttribute('tag_ids', '[]')
  scriptElement.setAttribute('default_filter', 'show-all')
  scriptElement.setAttribute('locale', 'en')

  scriptElement.onerror = (error) => {
    console.error('404 or other error loading Momence script:', error)
    console.error('Script URL attempted:', scriptElement.src)
  }
  targetDiv.parentNode.insertBefore(scriptElement, targetDiv)
}

onBeforeUnmount(() => {
  isComponentMounted = false
})

onUnmounted(() => {
  // Clean up script
  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement)
    scriptElement = null
  }

  // Clean up any Momence-generated content
  const momenceElements = document.querySelectorAll('[class*="momence"], [id*="momence"]')
  momenceElements.forEach((el) => el.remove())
})
</script>

<template>
  <div id="schedule-container" class="interactive">
    <div id="ribbon-schedule"></div>
  </div>
</template>
<style scoped>
#schedule-container {
  position: relative;
  z-index: 5;
  width: 100vw;
  height: 100%;
  padding: 2rem;
  background-color: var(--blanco);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#ribbon-schedule {
  width: 100%;
  position: relative;
  z-index: 1;
}
</style>
