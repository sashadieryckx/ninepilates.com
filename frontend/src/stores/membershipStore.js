import { ref } from 'vue'
import { defineStore } from 'pinia'

import Breathe from '../assets/content/breathe.png'
import Concentration from '../assets/content/concentration.png'

export const useMembershipsStore = defineStore('memberships', () => {
    const memberships = ref([
        {
            id: 1,
            title: "The Flow",
            description: "A gentle pace to support your practice. Ideal for those new to Pilates or seeking balance in a busy schedule. Find your rhythm, one breath at a time.",
            price: '100/mo',
            classes: '4',
            image: Breathe,
            signUp: 'https://momence.com/Nine-Pilates-Inc./membership/The-Flow---8-Classes-%2F-Month/491005'
        },
        {
            id: 2,
            title: "The Rhythm",
            description: "For those ready to deepen their connection. With consistent movement and mindful progression, this package helps you stay in tune with your body and your goals.",
            price: '220/mo',
            classes: '8',
            image: Concentration,
            signUp: 'https://momence.com/Nine-Pilates-Inc./membership/The-Rhythm---12-Classes-%2F-Month/491006'
        },
        {
            id: 3,
            title: "Cloud 9",
            description: "Our most immersive experience. Designed for those fully committed to their well-being — elevate your strength, control, and presence with regular, restorative movement.",
            price: '350/mo',
            classes: 'Unlimited',
            image: Concentration,
            signUp: 'https://momence.com/Nine-Pilates-Inc./membership/Cloud-9-%E2%80%93-Unlimited-%2F-Month/491008'
        }
    ])

    return { memberships }
})
