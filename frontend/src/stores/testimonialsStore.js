import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTestimonialsStore = defineStore('testimonials', () => {
    const testimonials = ref([
        {
            id: 1,
            text: "Nine Pilates completely transformed how I feel in my body. The sessions are mindful, challenging, and deeply restorative. I've never felt stronger or more connected.",
            author: "Emily Kirkland",
            date: "April 12, 2025"
        },
        {
            id: 2,
            text: "From the moment I walked into the studio, I felt supported. Every class feels intentional and empowering. Highly recommend Nine to anyone looking to strengthen both body and mind.",
            author: "Jason Mendosa",
            date: "May 2, 2025"
        },
        {
            id: 3,
            text: "The instructors at Nine have a beautiful way of blending strength and mindfulness. I’ve gained core control, flexibility, and a sense of calm I didn’t expect.",
            author: "Sofia De La Cruz",
            date: "June 3, 2025"
        }
    ])

    return { testimonials }
})