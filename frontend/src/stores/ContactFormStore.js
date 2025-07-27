import { defineStore } from 'pinia'
import { ContactOpen, ContactClose } from '@/assets/js/globalUtils.js'

export const useContactStore = defineStore('contact', {
  state: () => ({
    contactFormOpen: false,
  }),
  getters: {
    isOpen: (state) => state.contactFormOpen,
  },
  actions: {
    openContactForm() {
      this.contactFormOpen = true

      setTimeout(() => {
        ContactOpen()
      }, 50)
    },
    closeContactForm() {
      ContactClose()
      document.body.style.overflow = ''
    },
  }
})
