import { ref } from 'vue'
import { defineStore } from 'pinia'

import NineFoundations from '../assets/content/classes/nineFoundations.png'
import FormFlow from '../assets/content/classes/formFlow.png'
import Inferno from '../assets/content/classes/inferno.png'

export const useClassesStore = defineStore('classes', () => {
  const classesInfo = ref([
    {
      id: 'I',
      name: 'Reformer Pilates',
      description: 'A dynamic workout using the reformer machine to enhance strength and flexibility.',
    },
    {
      id: 'II',
      name: 'Mat Pilates',
      description: 'A traditional Pilates workout performed on a mat, focusing on core strength and flexibility.',
    },
    {
      id: 'III',
      name: 'Contemporary Pilates',
      description: 'A modern approach to Pilates, incorporating elements from various styles to create a unique workout.',
    },
  ])
  
  const classes = ref([
    {
      id: 1,
      slug: 'the-nine-foundations',
      title: 'The Nine Foundations',
      subtitle: 'Beginner – Required for First-Timers',
      description: 'A slow-paced, beginner-friendly introduction to the reformer. This class focuses on alignment, breathwork, and control, helping you build confidence with the equipment and master the Nine Pilates principles.',
      notes: 'First time on a reformer? This class is HIGHLY recommended before joining more advanced formats.',
      image: NineFoundations
    },
    {
      id: 2,
      slug: 'form-and-flow',
      title: 'Form & Flow',
      subtitle: 'All Levels Sculpt',
      description: 'A full-body flow class combining strength, coordination, and control in rhythmic sequences that sculpt and re-energize. Expect dynamic transitions, core engagement, and mindful movement that challenges your entire body from the inside out.',
      notes: 'Open to all levels, with modifications and intensifiers provided.',
      image: FormFlow
    },
    {
      id: 3,
      slug: 'inferno',
      title: 'Inferno',
      subtitle: 'Burn & Endure – Advanced',
      description: 'This endurance-based reformer class dials up the intensity through slower pacing, higher reps, and deep muscle engagement. Each sequence is designed to push your strength and stamina with minimal rest, longer holds, and serious shake. You’ll challenge not just your muscles, but also your focus, patience, and mental resilience.',
      notes: 'This is not a speed-based class — it’s a precision burn for experienced movers ready to meet their edge.',
      image: Inferno
    },
    {
      id: 4,
      slug: 'glute-mode',
      title: 'Glute Mode',
      subtitle: 'Core & Glutes Focus',
      description: 'A lower-body focused sculpt class targeting your glutes and core with precision and intensity. Expect deep glute activation, core stabilization, and strong sequencing that lifts, tones, and strengthens your posterior chain.',
      notes: 'The tempo is controlled, the movements intentional — and the burn, undeniable. Prior reformer experience strongly recommended.'
    },
    {
      id: 5,
      slug: 'airnine-nine',
      title: 'Air Nine',
      subtitle: 'Jumpboard HIIT – Cardio & Core',
      description: 'Elevate your heart rate and fire up your core in this high-energy, low-impact cardio class using the jumpboard. Expect explosive intervals, muscular endurance work, and full-body sequences that challenge your breath and stamina. Horizontal training at its best — targeting muscular endurance while boosting cardiovascular performance on the reformer. Bounce, sculpt, and sweat — all while protecting your joints.',
      notes: 'Reformer experience required.'
    },
    {
      id: 6,
      slug: 'restore-and-stretch',
      title: 'Restore & Stretch',
      subtitle: 'Recovery – All Levels',
      description: 'A slow, breath-driven reformer class focused on deep stretching, mobility, and nervous system reset. Move intentionally through lengthening sequences that release tension, restore alignment, and bring balance to the body and mind.',
      notes: 'Ideal for rest days, recovery, or as a complement to more intense sessions. Leave feeling grounded, open, and recharged.'
    }
  ])

  const getters = {
    getClassById: (state) => (id) => state.classes.find(c => c.id === id)
  }

  return { classesInfo, classes, getters }

})
