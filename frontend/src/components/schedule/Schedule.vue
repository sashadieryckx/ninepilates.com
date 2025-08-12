<script setup>
import { onMounted, onUnmounted, nextTick, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'ClassSchedule'
})

const route = useRoute()
let scriptElement = null
let isComponentMounted = false

onMounted(async () => {
  isComponentMounted = true

  // Only load if we're actually on the schedule route
  if (route.name !== 'schedule') {
    console.log('Not on schedule route, skipping Momence load')
    return
  }

  // Wait for DOM to be fully rendered
  await nextTick()

  console.log('Schedule component mounted, loading Momence plugin...')

  // Add a small delay to ensure the div is ready
  setTimeout(() => {
    if (isComponentMounted) {
      loadMomenceScript()
    }
  }, 100)
})

function loadMomenceScript() {
  // Double-check we're still mounted and on the right route
  if (!isComponentMounted || route.name !== 'schedule') {
    console.log('Component unmounted or route changed, cancelling Momence load')
    return
  }

  // Complete cleanup of any existing Momence content and scripts
  const existingScripts = document.querySelectorAll('script[src*="momence.com"]')
  existingScripts.forEach(script => script.remove())

  const existingContent = document.querySelectorAll('[class*="momence"], [id*="momence"]')
  existingContent.forEach(el => el.remove())

  // Clear any cached Momence globals
  if (window.momence) {
    delete window.momence
  }
  if (window.Momence) {
    delete window.Momence
  }

  // Ensure the target div exists and is clean
  const targetDiv = document.getElementById('ribbon-schedule')
  if (!targetDiv) {
    console.error('Target div #ribbon-schedule not found')
    return
  }

  // Clear the target div content
  targetDiv.innerHTML = ''

  console.log('Target div found and cleaned, loading fresh Momence script...')

  // Create script element - try the most common Momence URL format
  scriptElement = document.createElement('script')
  scriptElement.async = true
  scriptElement.type = 'text/javascript' // Change from 'module' to standard script type
  // Use the standard Momence widget URL format
  scriptElement.src = 'https://momence.com/plugin/host-schedule/host-schedule.js'

  // Set Momence plugin attributes
  scriptElement.setAttribute('host_id', '83188')
  scriptElement.setAttribute('teacher_ids', '[]')
  scriptElement.setAttribute('location_ids', '[]')
  scriptElement.setAttribute('tag_ids', '[]')
  scriptElement.setAttribute('default_filter', 'show-all')
  scriptElement.setAttribute('locale', 'en')

  scriptElement.onload = () => {
    if (!isComponentMounted) return

    console.log('Momence script loaded successfully')

    // Force initialization with longer delay
    setTimeout(() => {
      if (!isComponentMounted) return

      const content = document.getElementById('ribbon-schedule')
      if (content && content.innerHTML.trim() === '') {
        console.log('Content still empty, trying to force initialization...')

        // Try to trigger initialization manually if the plugin has methods
        if (window.momence && window.momence.init) {
          window.momence.init()
        }

        // Check again after manual init attempt
        setTimeout(() => {
          const contentCheck = document.getElementById('ribbon-schedule')
          if (contentCheck && contentCheck.innerHTML.trim() === '') {
            console.log('Manual initialization failed. Host ID: 83188')
            console.log('Make sure this host ID is correct in your Momence account')
          } else {
            console.log('Manual initialization successful')
          }
        }, 2000)

      } else {
        console.log('Schedule content loaded successfully')
        // Move any misplaced content to the correct div
        const misplacedContent = document.querySelector('body > [class*="momence"], body > [id*="momence"]')
        if (misplacedContent && content) {
          content.appendChild(misplacedContent)
          console.log('Moved misplaced Momence content to correct container')
        }
      }
    }, 1000) // Increased initial delay
  }

  scriptElement.onerror = (error) => {
    console.error('404 or other error loading Momence script:', error)
    console.error('Script URL attempted:', scriptElement.src)
    console.log('Trying alternative script loading method...')

    // Try alternative loading method
    setTimeout(() => {
      loadMomenceAlternative()
    }, 1000)
  }

  // Insert the script right before the target div to ensure proper association
  targetDiv.parentNode.insertBefore(scriptElement, targetDiv)
}

function loadMomenceAlternative() {
  console.log('Trying alternative Momence loading methods...')

  // Method 1: Try different script URL variations based on common widget patterns
  const alternativeUrls = [
    'https://widget.momence.com/host-schedule/host-schedule.js',
    'https://embed.momence.com/host-schedule.js',
    'https://momence.com/js/widget/host-schedule.js',
    'https://momence.com/static/js/host-schedule.js',
    'https://cdn.momence.com/host-schedule.js'
  ]

  let urlIndex = 0

  function tryNextUrl() {
    if (urlIndex >= alternativeUrls.length) {
      console.error('All alternative URLs failed.')
      console.log('This might mean:')
      console.log('1. Your Momence account needs to be configured for website plugins')
      console.log('2. Your host_id (83188) might be incorrect')
      console.log('3. The widget feature might not be enabled in your plan')
      console.log('4. You might need to contact Momence support for the correct integration code')
      return
    }

    const testScript = document.createElement('script')
    testScript.async = true
    testScript.type = 'text/javascript'
    testScript.src = alternativeUrls[urlIndex]

    // Set Momence plugin attributes
    testScript.setAttribute('host_id', '83188')
    testScript.setAttribute('teacher_ids', '[]')
    testScript.setAttribute('location_ids', '[]')
    testScript.setAttribute('tag_ids', '[]')
    testScript.setAttribute('default_filter', 'show-all')
    testScript.setAttribute('locale', 'en')

    testScript.onload = () => {
      console.log(`✓ Alternative URL ${urlIndex + 1} worked:`, alternativeUrls[urlIndex])
      // Script loaded successfully, initialization should follow
    }

    testScript.onerror = () => {
      console.log(`✗ Alternative URL ${urlIndex + 1} failed:`, alternativeUrls[urlIndex])
      testScript.remove()
      urlIndex++
      tryNextUrl()
    }

    const targetDiv = document.getElementById('ribbon-schedule')
    if (targetDiv) {
      targetDiv.parentNode.insertBefore(testScript, targetDiv)
    }
  }

  tryNextUrl()
}

onBeforeUnmount(() => {
  isComponentMounted = false
  console.log('Schedule component unmounting, cleaning up Momence...')
})

onUnmounted(() => {
  // Clean up script
  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement)
    scriptElement = null
  }

  // Clean up any Momence-generated content
  const momenceElements = document.querySelectorAll('[class*="momence"], [id*="momence"]')
  momenceElements.forEach(el => el.remove())

  console.log('Momence cleanup completed')
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
