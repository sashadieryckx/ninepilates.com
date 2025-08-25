import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export const usePricingStore = defineStore('pricing', () => {
  const { t, locale, tm } = useI18n()

  const memberships = computed(() => [
    {
      id: 1,
      name: t('pricing&packages.memberships.flow.title'),
      price: '250',
      classes: t('pricing&packages.memberships.flow.classes'),
      description: t('pricing&packages.memberships.flow.description'),
      benefits: tm('pricing&packages.memberships.flow.benefits'),
      c2a: t('pricing&packages.memberships.flow.c2a'),
      link: 'https://momence.com/Nine-Pilates-Inc./membership/The-Flow---8-Classes-%2F-Month/491005'
    },
    {
      id: 2,
      name: t('pricing&packages.memberships.rhythm.title'),
      price: '300',
      classes: t('pricing&packages.memberships.rhythm.classes'),
      description: t('pricing&packages.memberships.rhythm.description'),
      benefits: tm('pricing&packages.memberships.rhythm.benefits'),
      c2a: t('pricing&packages.memberships.rhythm.c2a'),
      link: 'https://momence.com/Nine-Pilates-Inc./membership/The-Rhythm---12-Classes-%2F-Month/491006'
    },
    {
      id: 3,
      name: t('pricing&packages.memberships.cloud9.title'),
      price: '350',
      classes: t('pricing&packages.memberships.cloud9.classes'),
      description: t('pricing&packages.memberships.cloud9.description'),
      benefits: tm('pricing&packages.memberships.cloud9.benefits'),
      c2a: t('pricing&packages.memberships.cloud9.c2a'),
      link: 'https://momence.com/Nine-Pilates-Inc./membership/Cloud-9-%E2%80%93-Unlimited-%2F-Month/491008'
    },
  ])
  const packages = computed(() => [
    {
      id: 1,
      name: t('pricing&packages.packages.kickstart.title'),
      price: t('pricing&packages.packages.kickstart.price'),
      classes: t('pricing&packages.packages.kickstart.classes'),
      description: t('pricing&packages.packages.kickstart.description'),
      c2a: t('pricing&packages.packages.kickstart.c2a')
    },
    {
      id: 2,
      name: t('pricing&packages.packages.momentum.title'),
      price: t('pricing&packages.packages.momentum.price'),
      classes: t('pricing&packages.packages.momentum.classes'),
      description: t('pricing&packages.packages.momentum.description'),
      c2a: t('pricing&packages.packages.momentum.c2a')
    },
    {
      id: 3,
      name: t('pricing&packages.packages.elevate.title'),
      price: t('pricing&packages.packages.elevate.price'),
      classes: t('pricing&packages.packages.elevate.classes'),
      description: t('pricing&packages.packages.elevate.description'),
      c2a: t('pricing&packages.packages.elevate.c2a')
    },
  ])
  return {
    memberships,
    packages,
    locale
  }
})
