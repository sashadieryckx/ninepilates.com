import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'


export const useAboutValarieStore = defineStore('abouts', () => {
  const { t, locale } = useI18n()

  const aboutValarieInfo = computed(() => [
    {
      id: 1,
      heading: t('about.storySection.aboutMeHeading'),
      content: t('about.storySection.aboutMe'),
    },
    {
      id: 2,
      heading: t('about.storySection.myJourneyHeading'),
      content: t('about.storySection.myJourney'),
    },
    {
      id: 3,
      heading: t('about.storySection.inspirationHeading'),
      content: t('about.storySection.inspiration'),
    },
    {
      id: 4,
      heading: t('about.storySection.missionHeading'),
      content: t('about.storySection.mission'),
    },
  ])
  const valeriesTestimonials = ref([
    {
      id: 1,
      statement: 'Valérie is truly an exceptional Pilates instructor. Her passion, energy, and patience create such a welcoming and empowering environment.',
      review: 'She goes above and beyond to make sure everyone feels comfortable, offering thoughtful modifications and clear guidance throughout the class. You can tell she’s always well-prepared, and her attention to detail and client care—before, during, and after class—is unmatched. I’ve tried several instructors elsewhere, and Valérie truly stands out. Her classes are a highlight of my week.',
      author: 'Vanessa Dorion',
      date: 'September 5th, 2025',
    },
    {
      id: 2,
      statement: 'Valérie is such an incredible Pilates instructor. Her energy is contagious, and she has a natural ability to challenge and motivate in the most encouraging way.',
      review: 'Every class feels fresh and engaging thanks to her creative flows and thoughtful sequencing. I’m so excited for everything she’s building—I know it’s going to be a huge success!',
      author: 'Abbey McDonald',
      date: 'August 12th, 2025',
    },
    {
      id: 3,
      statement: 'Valérie creates a welcoming and inclusive environment for everyone.',
      review: 'Her classes are a perfect blend of challenge and support, and I always look forward to them.',
      author: 'Prosper Junior',
      date: 'June 17th, 2025',
    },
  ])
  return { aboutValarieInfo, valeriesTestimonials, locale }
})
