import { useContactStore } from '@/stores/ContactFormStore.js'
/**
 * Composable for managing contact form state throughout the application
 * @returns {Object} Contact form state and actions
 */
export function useContact() {
  const store = useContactStore()

  const openContactForm = (mode = 'basic', prefilledData = {}) => {
    store.openContactForm(mode, prefilledData)
  }

  const closeContactForm = () => {
    store.closeContactForm()
  }

  const openBasicContactForm = (prefilledData = {}) => {
    store.openContactForm('basic', prefilledData)
  }

  const openGetStartedForm = (prefilledData = {}) => {
    store.openContactForm('getStarted', prefilledData)
  }

  return {
    // State
    isOpen: store.isOpen,
    mode: store.mode,
    prefilledData: store.data,

    // Actions
    openContactForm,
    closeContactForm,
    openBasicContactForm,
    openGetStartedForm,

    // Raw store access if needed
    store
  }
}
