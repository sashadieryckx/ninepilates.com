import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import Breathe from '../assets/content/breathe.png'
import Concentration from '../assets/content/concentration.png'
import Control from '../assets/content/control.png'
import Centering from '../assets/content/centering.png'
import Precision from '../assets/content/precision.png'
import Balance from '../assets/content/balance.png'
import Flow from '../assets/content/flow.png'
import Wholeness from '../assets/content/wholeness.png'
import Relaxation from '../assets/content/relaxation.png'

export const usePrinciplesStore = defineStore('principles', () => {
  const { t, locale } = useI18n()

  const principles = computed(() => [
    {
      id: '1',
      name: t('home.philosophy.principles.breathing'),
      subheading: t('home.philosophy.principles.breathingDescription'),
      image: Breathe,
    },
    {
      id: '2',
      name: t('home.philosophy.principles.concentration'),
      subheading: t('home.philosophy.principles.concentrationDescription'),
      image: Concentration,
    },
    {
      id: '3',
      name: t('home.philosophy.principles.control'),
      subheading: t('home.philosophy.principles.controlDescription'),
      image: Control,
    },
    {
      id: '4',
      name: t('home.philosophy.principles.centering'),
      subheading: t('home.philosophy.principles.centeringDescription'),
      image: Centering,
    },
    {
      id: '5',
      name: t('home.philosophy.principles.precision'),
      subheading: t('home.philosophy.principles.precisionDescription'),
      image: Precision,
    },
    {
      id: '6',
      name: t('home.philosophy.principles.balance'),
      subheading: t('home.philosophy.principles.balanceDescription'),
      image: Balance,
    },
    {
      id: '7',
      name: t('home.philosophy.principles.rhythm'),
      subheading: t('home.philosophy.principles.rhythmDescription'),
      image: Flow,
    },
    {
      id: '8',
      name: t('home.philosophy.principles.wholeness'),
      subheading: t('home.philosophy.principles.wholenessDescription'),
      image: Wholeness,
    },
    {
      id: '9',
      name: t('home.philosophy.principles.relaxation'),
      subheading: t('home.philosophy.principles.relaxationDescription'),
      image: Relaxation,
    },
  ])

  return { principles, locale }

})
