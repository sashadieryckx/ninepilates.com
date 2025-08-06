<script setup>
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import MembershipsCard from './MembershipsCard.vue'
import C2AMemberships from '@/components/actions/C2AMemberships.vue'
import C2APackages from '@/components/actions/C2APackages.vue'
import { useMembershipsStore } from '@/stores/membershipStore'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const membershipsStore = useMembershipsStore()
const scrollTriggerInstance = ref(null)
const animationInitialized = ref(false)

onMounted(async () => {
  // Wait for DOM to be fully rendered
  await nextTick()

  console.log('Component mounted, memberships length:', membershipsStore.memberships.length)

  // Simple timeout to ensure components are rendered
  setTimeout(() => {
    initAnimation()
  }, 500)

  // Also try a longer timeout as backup
  setTimeout(() => {
    if (!animationInitialized.value) {
      initAnimation()
    }
  }, 2000)
})

const initAnimation = () => {
  if (animationInitialized.value) {
    return
  }

  // Debug: Log all elements we can find
  console.log('All .card elements on page:', document.querySelectorAll('.card').length)
  console.log(
    'All .membership-card elements:',
    document.querySelectorAll('.membership-card').length,
  )
  console.log('Section exists:', !!document.getElementById('memberships-section-content'))
  console.log('Memberships div exists:', !!document.querySelector('.memberships'))

  // Use multiple selectors to ensure we find the cards
  let membershipCards = document.querySelectorAll('#memberships-section-content .memberships .card')

  // Fallback selectors if the above doesn't work
  if (membershipCards.length === 0) {
    membershipCards = document.querySelectorAll('.memberships .card')
  }
  if (membershipCards.length === 0) {
    membershipCards = document.querySelectorAll('.membership-card')
  }
  if (membershipCards.length === 0) {
    membershipCards = document.querySelectorAll('.card')
  }

  const membershipsSection = document.getElementById('memberships-section-content')

  // Remove screen size restriction for testing - we'll animate on all sizes
  if (membershipCards.length > 0 && membershipsSection) {
    // Set initial state immediately to prevent flash
    gsap.set(membershipCards, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      willChange: 'transform, opacity',
    })
    scrollTriggerInstance.value = gsap.to(membershipCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        id: 'memberships-section-animation',
        trigger: membershipsSection,
        start: 'top 60%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
        refreshPriority: -1,
        markers: false,
        onToggle: (self) => {
          console.log('ScrollTrigger toggled:', self.isActive)
        },
        onComplete: () => {
          // Remove will-change after animation completes for better performance
          gsap.set(membershipCards, { willChange: 'auto' })
          console.log('Animation completed')
        },
      },
    })

    console.log('ScrollTrigger created, refreshing...')

    // Refresh ScrollTrigger to ensure proper positioning
    ScrollTrigger.refresh()
    animationInitialized.value = true
  }
}

onUnmounted(() => {
  // Clean up all ScrollTrigger instances
  if (scrollTriggerInstance.value) {
    if (scrollTriggerInstance.value.scrollTrigger) {
      scrollTriggerInstance.value.scrollTrigger.kill()
    }
    scrollTriggerInstance.value.kill()
    scrollTriggerInstance.value = null
  }

  // Additional cleanup
  const trigger = ScrollTrigger.getById('memberships-section-animation')
  if (trigger) {
    trigger.kill()
  }

  // Kill all tweens targeting the cards
  gsap.killTweensOf('.card')
  gsap.killTweensOf('.memberships .card')

  // Reset any remaining transforms
  gsap.set('.card', {
    clearProps: 'all',
    willChange: 'auto',
  })

  // Reset animation flag
  animationInitialized.value = false
  console.log('Animation cleaned up')
})
</script>
<template>
  <div id="memberships-section-content">
    <div class="memberships-heading">
      <h2 class="roman">{{ t("home.memberships.heading") }}</h2>
      <h5 class="light">
        {{ t("home.memberships.description") }}
      </h5>
      <div class="c2a interactive">
        <router-link to="/packages-and-pricing">
          <C2AMemberships />
        </router-link>
        <router-link to="/packages-and-pricing">
          <C2APackages />
        </router-link>
      </div>
    </div>
    <div class="memberships df-mar">
      <MembershipsCard
        v-for="membership in membershipsStore.memberships"
        :key="membership.id"
        :memberships="membership"
        :reverse="membership.id === 2"
        class="card"
      />
    </div>
  </div>
</template>
<style scoped>
#memberships-section-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.memberships-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
h2 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 2rem;
}
.memberships {
  margin-top: 4rem;
}
.c2a {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 2rem;
}
/* Animation-ready cards */
.card {
  transform: translateZ(0); /* Force GPU acceleration */
  backface-visibility: hidden; /* Prevent flickering */
}

/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #memberships-section-content {
    padding-bottom: 12rem;
  }
  .memberships {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  h2 {
    width: 65%;
  }
  h5 {
    width: 50%;
  }
}
</style>
