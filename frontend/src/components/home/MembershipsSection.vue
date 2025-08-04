<script setup>
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import MembershipsCard from './MembershipsCard.vue'
import { useMembershipsStore } from '@/stores/membershipStore'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const membershipsStore = useMembershipsStore()
const scrollTriggerInstance = ref(null)

onMounted(async () => {
  // Wait for DOM to be fully rendered
  await nextTick()

  // Add a small delay to ensure all components are mounted
  setTimeout(() => {
    initAnimation()
  }, 100)
})

const initAnimation = () => {
  const membershipCards = document.querySelectorAll('.card')
  const membershipsSection = document.getElementById('memberships-section-content')

  if (window.innerWidth >= 1280 && membershipCards.length > 0 && membershipsSection) {
    // Set initial state immediately to prevent flash
    gsap.set(membershipCards, {
      opacity: 0,
      y: 20,
      willChange: 'transform, opacity'
    })

    scrollTriggerInstance.value = gsap.to(membershipCards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        id: 'memberships-section-animation',
        trigger: membershipsSection,
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
        refreshPriority: -1,
        onComplete: () => {
          // Remove will-change after animation completes for better performance
          gsap.set(membershipCards, { willChange: 'auto' })
        }
      },
    })

    // Refresh ScrollTrigger to ensure proper positioning
    ScrollTrigger.refresh()
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

  // Reset any remaining transforms
  gsap.set('.card', {
    clearProps: 'all',
    willChange: 'auto'
  })
})
</script>
<template>
  <div id="memberships-section-content">
    <div class="memberships-heading df-pad">
      <h2 class="roman">Memberships made to <span class="light-italic">move</span> with you</h2>
      <h5 class="light">
        Explore our membership options and find the perfect fit for your journey with us.
      </h5>
    </div>
    <div class="memberships df-mar">
      <MembershipsCard
        v-for="membership in membershipsStore.memberships"
        :key="membership.id"
        :memberships="membership"
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
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
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
  .memberships {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
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
