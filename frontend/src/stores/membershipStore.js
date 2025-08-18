import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import Breathe from '../assets/content/breathe.png'
import Concentration from '../assets/content/concentration.png'

export const useMembershipsStore = defineStore('memberships', () => {
    const { t, locale } = useI18n()

    const memberships = computed(() => [
        {
            id: 1,
            title: t('pricing&packages.memberships.flow.title'),
            description: t('pricing&packages.memberships.flow.description'),
            price: t('pricing&packages.memberships.flow.price'),
            classes: t('pricing&packages.memberships.flow.classes'),
            image: Breathe,
            signUp: 'https://momence.com/Nine-Pilates-Inc./membership/The-Flow---8-Classes-%2F-Month/491005'
        },
        {
            id: 2,
            title: t('pricing&packages.memberships.rhythm.title'),
            description: t('pricing&packages.memberships.rhythm.description'),
            price: t('pricing&packages.memberships.rhythm.price'),
            classes: t('pricing&packages.memberships.rhythm.classes'),
            image: Concentration,
            signUp: 'https://momence.com/Nine-Pilates-Inc./membership/The-Rhythm---12-Classes-%2F-Month/491006'
        },
        {
            id: 3,
            title: t('pricing&packages.memberships.fullCycle.title'),
            description: t('pricing&packages.memberships.fullCycle.description'),
            price: t('pricing&packages.memberships.fullCycle.price'),
            classes: t('pricing&packages.memberships.fullCycle.classes'),
            image: Concentration,
            signUp: 'https://momence.com/Nine-Pilates-Inc./membership/Cloud-9-%E2%80%93-Unlimited-%2F-Month/491008'
        }
    ])

    return { memberships, locale }
})
