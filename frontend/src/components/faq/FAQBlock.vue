<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  faq: {
    type: Object,
    required: true
  },
  // Allow parent to set initial open state (optional)
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(!!props.defaultOpen)
const panel = ref(null)
const panelInner = ref(null)
let tween = null

function open() {
  // Measure inner height
  const h = panelInner.value?.offsetHeight || 0
  // Kill any running tween
  tween?.kill()
  // Set initial state before animating
  gsap.set(panel.value, { height: 0, overflow: 'hidden', autoAlpha: 1 })
  tween = gsap.to(panel.value, {
    height: h,
    duration: 0.35,
    ease: 'power2.out',
    onComplete: () => {
      // Let content be naturally sized after opening
      gsap.set(panel.value, { height: 'auto', overflow: 'visible' })
    }
  })
}

function close() {
  // Kill any running tween
  tween?.kill()
  // Ensure we're measuring from current height (auto -> pixel)
  const current = panel.value?.offsetHeight || 0
  gsap.set(panel.value, { height: current, overflow: 'hidden' })
  tween = gsap.to(panel.value, {
    height: 0,
    autoAlpha: 1, // keep visible for smooth collapse
    duration: 0.3,
    ease: 'power2.inOut',
    onComplete: () => {
      gsap.set(panel.value, { overflow: 'hidden' })
    }
  })
}

async function toggle() {
  isOpen.value = !isOpen.value
  await nextTick()
  if (isOpen.value) open()
  else close()
}

onMounted(() => {
  // Initialize collapsed state visually
  if (!isOpen.value) {
    gsap.set(panel.value, { height: 0, overflow: 'hidden' })
  }
})

onBeforeUnmount(() => {
  tween?.kill()
})
</script>

<template>
  <article id="faq-block">
    <button
      class="faq-header"
      :aria-expanded="isOpen.toString()"
      :aria-controls="`panel-${props.faq.id}`"
      @click="toggle"
    >
      <h4 class="question light">{{ props.faq.question }}</h4>
      <span class="indicator" :class="{ open: isOpen }" aria-hidden="true"></span>
    </button>

    <div
      class="faq-panel"
      :id="`panel-${props.faq.id}`"
      role="region"
      :aria-hidden="(!isOpen).toString()"
      ref="panel"
    >
      <div class="faq-panel-inner" ref="panelInner">
        <p class="answer light">{{ props.faq.answer }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.faq-block {
  width: 100%;
  max-width: 900px;
  border-top: 1px solid var(--onyx);
}
.faq-header {
  width: 100%;
  min-width: 45vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: transparent;
  border: 0;
  padding: 1.25rem 0;
  cursor: pointer;
  text-align: left;
}

.question {
  margin: 0;
}

.indicator {
  position: relative;
  width: 18px;
  height: 18px;
}
.indicator::before,
.indicator::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: translate(-50%, -50%);
  transition: transform 0.25s ease;
}
.indicator::after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.indicator.open::after {
  transform: translate(-50%, -50%) rotate(0deg);
}
.faq-panel {
  will-change: height;
}
.faq-panel-inner {
  padding: 0 0 1rem 0;
}
.answer {
  margin: 0;
  opacity: 0.9;
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .faq-header {
    max-width: 45vw;
  }
  .answer {
    font-size: 1.25rem;
    width: 90%;
  }
}
</style>
