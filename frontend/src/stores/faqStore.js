import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFAQStore = defineStore('faq', () => {
    const faqs = ref([
        {
            id: 1,
            question: "What is Nine Pilates?",
            answer: "Nine Pilates is a reformer Pilates studio that focuses on mindful movement and holistic wellness."
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
          question: "Do I need previous Pilates experience to join?",
          answer: "No prior experience is necessary. We have classes for every level."
        },
        {
          id: 5,
          question: "Which class should I take if it’s my first time on the reformer?",
          answer: "We recommend starting with our \"The Nine Foundations\" Reformer class, which is designed for beginners."
        },
        {
          id: 6,
          question: "What is the class size?",
          answer: "Our classes are intentionally kept to a maximum of 8 attendees to ensure personalized attention."
        },
        {
          id: 7,
          question: "Where is Nine Pilates Located?",
          answer: "We are located at 511 Lacolle Way Unit A5 and have on-site parking."
        },
        {
          id: 8,
          question: "What is your cancellation policy?",
          answer: "We require 1 hour notice for cancellations, otherwise you will be charged for the class."
        },
        {
          id: 9,
          question: "Do you have changing rooms or showers?",
          answer: "We have a unisex bathroom with two stalls available to our clients."
        },



    ])

    return { faqs }
})
