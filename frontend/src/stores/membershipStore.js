import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMembershipsStore = defineStore('memberships', () => {
    const memberships = ref([
        {
            id: 1,
            title: "The Rhythm",
            description: "A gentle pace to support your practice. Ideal for those new to Pilates or seeking balance in a busy schedule. Find your rhythm, one breath at a time.",
            price: '120/mo',
            classes: '4',
        },
        {
            id: 2,
            title: "The Flow",
            description: "For those ready to deepen their connection. With consistent movement and mindful progression, this package helps you stay in tune with your body and your goals.",
            price: '220/mo',
            classes: '8',
        },
        {
            id: 3,
            title: "Cloud 9",
            description: "Our most immersive experience. Designed for those fully committed to their well-being — elevate your strength, control, and presence with regular, restorative movement.",
            price: '300/mo',
            classes: '12',
        }
    ])

    return { memberships }
})