import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePricingStore = defineStore('pricing', () => {
  const memberships = ref([
    {
      id: 1,
      name: 'The Flow',
      price: '220',
      classes: '8',
      description: 'Find your balance and build your practice at a steady pace. The Flow is perfect for those who want a consistent Pilates routine without overcommitting. With eight classes a month, you’ll strengthen, lengthen, and connect, leaving room for life’s other rhythms.'
    },
    {
      id: 2,
      name: 'The Rhythm',
      price: '300',
      classes: '12',
      description: 'Move to your own beat with The Rhythm. Designed for those ready to elevate their practice, this membership offers twelve classes a month to keep your body engaged and your mind in tune. A harmonious blend of challenge and flexibility for deeper transformation.'
    },
    {
      id: 3,
      name: 'Cloud 9',
      price: '330',
      classes: 'Unlimited',
      description: 'Your all-access pass to mindful movement. With unlimited classes, Cloud 9 is for the committed Pilates enthusiast who wants the freedom to flow anytime. Immerse yourself in strength, control, and connection—whenever inspiration strikes.'
    },
  ])
  const packages = ref([
    {
      id: 1,
      name: 'The Trio',
      price: '100',
      classes: '3',
      description: ''
    },
    {
      id: 2,
      name: 'The TBD',
      price: '150',
      classes: '5',
      description: ''
    },
    {
      id: 3,
      name: 'One to Nine',
      price: '252',
      classes: '9',
      description: ''
    },
  ])
  return {
    memberships,
    packages
  }
})
