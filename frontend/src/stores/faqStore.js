import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFAQStore = defineStore('faq', () => {
    const faqs = ref([
        {
            id: 1,
            question: "What is Nine Pilates?",
            answer: "Nine Pilates is a contemporary Pilates studio that focuses on mindful movement and holistic wellness."
        },
        {
            id: 2,
            question: "What should I wear to class?",
            answer: "We recommend wearing comfortable, form-fitting clothing that allows for a full range of motion."
        },
        {
            id: 3,
            question: "Do I need to bring my own equipment?",
            answer: "No, we provide all necessary equipment for our classes."
        },
        {
          id: 4,
          question: "What is the class size?",
          answer: "Our classes are intentionally kept to a maximum of 8 attendees to ensure personalized attention."
        }
    ])

    return { faqs }
})
