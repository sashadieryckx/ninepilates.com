import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrinciplesStore = defineStore('principles', () => {
  const principles = ref([
    {
      id: '1',
      name: 'Breathing',
      description: 'At Nine, we believe in a purposeful approach to movement — one that fosters deep connection between mind and body, cultivates inner strength, and creates lasting change through consistency, control, and care.',
    },
    {
      id: '2',
      name: 'Concentration',
      description: 'A traditional Pilates workout performed on a mat, focusing on core strength and flexibility.',
    },
    {
      id: '3',
      name: 'Control',
      description: 'A modern approach to Pilates, incorporating elements from various styles to create a unique workout.',
    },
    {
      id: '4',
      name: 'Centering',
      description: 'A high-intensity Pilates class that combines traditional exercises with cardio and strength training.',
    },
    {
      id: '5',
      name: 'Precision',
      description: 'A gentle Pilates class designed for relaxation and stress relief, focusing on breath and mindfulness.',
    },
    {
      id: '6',
      name: 'Balance',
      description: 'A specialized Pilates class that targets specific muscle groups for rehabilitation or strength building.',
    },
    {
      id: '7',
      name: 'Rhythum Flow',
      description: 'A specialized Pilates class that focuses on breath control and awareness, promoting relaxation and mindfulness.',
    },
    {
      id: '8',
      name: 'Wholeness',
      description: 'Pilates is fundamentally about integration: integrating movement into a flowing whole body experience, integrating the mind and body to create clarity and purpose, integrating mind, body and spirit to create a life of balance.',
    },
    {
      id: '9',
      name: 'Relaxation',
      description: 'To be healthy in body and mind it is important to understand the balance between effort and relaxation. In Pilates we learn to use just the amount of effort needed to complete the exercise correctly, no more, no less. Learning to release unnecessary tension in our bodies helps us to find ease and flow in movement and in the rest of our lives.',
    },
  ])

  return { principles }

})
