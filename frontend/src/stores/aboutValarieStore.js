import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAboutValarieStore = defineStore('abouts', () => {
  const aboutValarieInfo = ref([
    {
      id: 1,
      heading: 'About me',
      content: 'I am Valarie, a passionate Pilates instructor dedicated to helping others achieve their fitness goals through the power of movement and mindfulness.',
    },
    {
      id: 2,
      heading: 'My Journey',
      content: 'My journey into Pilates began over a decade ago, and it has transformed my life in ways I never imagined. I am committed to sharing this transformative experience with others.',
    },
    {
      id: 3,
      heading: 'My Why',
      content: 'My inspiration comes from the belief that Pilates can empower individuals to connect with their bodies, improve their strength, and enhance their overall well-being. I strive to create a welcoming and inclusive environment for all.',
    },
    {
      id: 4,
      heading: 'My Mission',
      content: 'My mission with Nine Pilates is to provide high-quality Pilates instruction that caters to all levels, from beginners to advanced practitioners. I aim to inspire and motivate my clients to lead healthier, happier lives through the practice of Pilates.',
    },
  ])
  const valeriesTestimonials = ref([
    {
      id: 1,
      statement: 'Valarie is an amazing instructor! Her classes are always challenging and fun.',
      review: 'Valérie\'s passion for Pilates shines through in every class. I always leave feeling stronger and more centered.',
      author: 'Vanessa Dorion',
      date: 'September 5th, 2025',
    },
    {
      id: 2,
      statement: 'I have seen incredible improvements in my strength and flexibility since joining Valarie\'s classes.',
      review: 'Valérie\'s attention to detail and personalized approach make her classes truly special. I can\'t recommend her enough!',
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
  return { aboutValarieInfo, valeriesTestimonials }
})
