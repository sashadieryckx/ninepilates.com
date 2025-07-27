import { ref } from 'vue'
import { defineStore } from 'pinia'

import Breathe from '../assets/content/breathe.png'
import Concentration from '../assets/content/concentration.png'
import Control from '../assets/content/control.png'
import Centering from '../assets/content/centering.png'

export const usePrinciplesStore = defineStore('principles', () => {
  const principles = ref([
    {
      id: '1',
      name: 'Breathing',
      subheading: 'Reconnect the body and mind through conscious breath.',
      description: 'The breath is the essential link between the mind and the body. It draws our wandering mind back into our bodies and back to the task at hand. It is the foundation of our existence and the rhythm that accompanies us from birth to death. In Pilates the breath is integrated into every movement in order to focus our awareness on what we are doing, to improve the flow of oxygen through our bodies and to improve the capacity of our lungs.',
      image: Breathe,
    },
    {
      id: '2',
      name: 'Concentration',
      subheading: 'Presence in motion — every movement begins with awareness.',
      description: 'To concentrate is to pay attention to what you are doing. To be present with and in control of the task at hand. Without concentration the exercises lose their form and their purpose. When teaching it is important to have a client do only as many repetitions as they can without losing their concentration. As Joe often said, “It is better to do five repetitions perfectly than 20 without paying attention.',
      image: Concentration,
    },
    {
      id: '3',
      name: 'Control',
      image: Control,
      subheading: 'Master your body through intentional movement.',
      description: 'To be in control is to understand and maintain the proper form, alignment and effort during an entire exercise. Pilates exercises are never done without engaging the mind to control the movements and the efforts that the body is making.',
    },
    {
      id: '4',
      name: 'Centering',
      image: Centering,
      subheading: 'Find strength from within — the core of every motion.',
      description: 'In Pilates all movement radiates outward from the center. Developing a strong, stable and flexible center is one of the defining features of this form of exercise.',
    },
    {
      id: '5',
      name: 'Precision',
      subheading: 'Refine each movement with focus, form, and purpose.',
    },
    {
      id: '6',
      name: 'Balance',
      subheading: 'Cultivate stability and harmony in every movement.',
      description: 'All movements in Pilates are done with a sense of rhythm and flow. Flow creates smooth, graceful and functional movements. It decreases the amount of stress placed on our joints and develops movement patterns that integrate our body into a smoothly flowing whole.',
    },
    {
      id: '7',
      name: 'Rhythm Flow',
      subheading: 'Embrace the natural rhythm of your body.',
      description: 'All movements in Pilates are done with a sense of rhythm and flow. Flow creates smooth, graceful and functional movements. It decreases the amount of stress placed on our joints and develops movement patterns that integrate our body into a smoothly flowing whole.',
    },
    {
      id: '8',
      name: 'Wholeness',
      subheading: 'Integrate mind, body, and spirit for holistic wellness.',
      description: 'Pilates is fundamentally about integration: integrating movement into a flowing whole body experience, integrating the mind and body to create clarity and purpose, integrating mind, body and spirit to create a life of balance.',
    },
    {
      id: '9',
      name: 'Relaxation',
      subheading: 'Let go of tension to move freely and live fully.',
      description: 'To be healthy in body and mind it is important to understand the balance between effort and relaxation. In Pilates we learn to use just the amount of effort needed to complete the exercise correctly, no more, no less. Learning to release unnecessary tension in our bodies helps us to find ease and flow in movement and in the rest of our lives.',
    },
  ])

  return { principles }

})
