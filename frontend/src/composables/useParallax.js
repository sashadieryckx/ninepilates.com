import { onMounted, onUnmounted, nextTick } from 'vue'
import { Parallax, cleanupParallax, initParallaxForElement } from '@/assets/js/globalAnimations.js'

/**
 * Composable for managing parallax effects in Vue components
 * Automatically initializes parallax on mount and cleans up on unmount
 */
export function useParallax() {
  let isInitialized = false

  const initializeParallax = async () => {
    if (!isInitialized) {
      await nextTick()
      Parallax()
      isInitialized = true
    }
  }

  const cleanup = () => {
    if (isInitialized) {
      cleanupParallax()
      isInitialized = false
    }
  }

  const addParallaxToElement = (element) => {
    if (element) {
      initParallaxForElement(element)
    }
  }

  onMounted(() => {
    initializeParallax()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    initializeParallax,
    addParallaxToElement,
    cleanup
  }
}

/**
 * Global parallax initialization for app-wide use
 * Call this in your main app component or router
 */
export function useGlobalParallax() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Check if the added node has parallax class
          if (node.classList && node.classList.contains('parallax')) {
            initParallaxForElement(node)
          }
          // Check for parallax elements within the added node
          const parallaxElements = node.querySelectorAll && node.querySelectorAll('.parallax')
          if (parallaxElements) {
            parallaxElements.forEach(initParallaxForElement)
          }
        }
      })
    })
  })

  onMounted(() => {
    // Initialize existing parallax elements
    Parallax()
    
    // Start observing for dynamically added elements
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })

  onUnmounted(() => {
    observer.disconnect()
    cleanupParallax()
  })

  return {
    initializeParallax: Parallax,
    cleanup: cleanupParallax
  }
}
