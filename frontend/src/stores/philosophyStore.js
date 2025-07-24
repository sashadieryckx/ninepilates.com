import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrinciplesStore = defineStore('principles', () => {
  const principles = ref([
    {
      id: '1',
      name: 'Breathing',
      description: 'The breath is the essential link between the mind and the body. It draws our wandering mind back into our bodies and back to the task at hand. It is the foundation of our existence and the rhythm that accompanies us from birth to death. In Pilates the breath is integrated into every movement in order to focus our awareness on what we are doing, to improve the flow of oxygen through our bodies and to improve the capacity of our lungs.',
    },
    {
      id: '2',
      name: 'Concentration',
      description: 'To concentrate is to pay attention to what you are doing. To be present with and in control of the task at hand. Without concentration the exercises lose their form and their purpose. When teaching it is important to have a client do only as many repetitions as they can without losing their concentration. As Joe often said, “It is better to do five repetitions perfectly than 20 without paying attention.',
    },
    {
      id: '3',
      name: 'Control',
      description: 'To be in control is to understand and maintain the proper form, alignment and effort during an entire exercise. Pilates exercises are never done without engaging the mind to control the movements and the efforts that the body is making.',
    },
    {
      id: '4',
      name: 'Centering',
      description: 'In Pilates all movement radiates outward from the center. Developing a strong, stable and flexible center is one of the defining features of this form of exercise.',
    },
    {
      id: '5',
      name: 'Precision',
      description: 'Precision is the ability to perform exercises with optimum alignment, unconscious control and just the right amount of effort. Precision is the end product of concentration, control, centering and practice.',
    },
    {
      id: '6',
      name: 'Balance',
      description: 'All movements in Pilates are done with a sense of rhythm and flow. Flow creates smooth, graceful and functional movements. It decreases the amount of stress placed on our joints and develops movement patterns that integrate our body into a smoothly flowing whole.',
    },
    {
      id: '7',
      name: 'Rhythum Flow',
      description: 'All movements in Pilates are done with a sense of rhythm and flow. Flow creates smooth, graceful and functional movements. It decreases the amount of stress placed on our joints and develops movement patterns that integrate our body into a smoothly flowing whole.',
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
