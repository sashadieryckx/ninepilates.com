import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export const useTestimonialsStore = defineStore('testimonials', () => {
    const { t, locale } = useI18n()

    const testimonials = computed(() => [
        {
            id: 1,
            text: t('home.testimonials.testimonial-content.client-1.feedback'),
            author:  t('home.testimonials.testimonial-content.client-1.name'),
            date: "September 12, 2025"
        },
        {
            id: 2,
            text: t('home.testimonials.testimonial-content.client-2.feedback'),
            author: t('home.testimonials.testimonial-content.client-2.name'),
            date: "September 2, 2025"
        },
        {
            id: 3,
            text: t('home.testimonials.testimonial-content.client-3.feedback'),
            author: t('home.testimonials.testimonial-content.client-3.name'),
            date: "August 28, 2025"
        }
    ])

    return { testimonials, locale }
})
