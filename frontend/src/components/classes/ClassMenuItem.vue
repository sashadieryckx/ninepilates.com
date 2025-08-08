<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

defineProps({
  slug: String,
  text: String,
  image: String,
})

const itemRef = ref(null)
const marqueeRef = ref(null)
const marqueeInnerRef = ref(null)

const animationDefaults = { duration: 0.6, ease: 'expo' }

const distMetric = (x, y, x2, y2) => {
  const xDiff = x - x2
  const yDiff = y - y2
  return xDiff * xDiff + yDiff * yDiff
}

const findClosestEdge = (mouseX, mouseY, width, height) => {
  const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0)
  const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height)
  return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
}

const handleMouseEnter = (ev) => {
  if (!itemRef.value || !marqueeRef.value || !marqueeInnerRef.value) return
  const rect = itemRef.value.getBoundingClientRect()
  const x = ev.clientX - rect.left
  const y = ev.clientY - rect.top
  const edge = findClosestEdge(x, y, rect.width, rect.height)

  gsap
    .timeline({ defaults: animationDefaults })
    .set(marqueeRef.value, { y: edge === 'top' ? '-101%' : '101%' }, 0)
    .set(marqueeInnerRef.value, { y: edge === 'top' ? '101%' : '-101%' }, 0)
    .to([marqueeRef.value, marqueeInnerRef.value], { y: '0%' }, 0)
}

const handleMouseLeave = (ev) => {
  if (!itemRef.value || !marqueeRef.value || !marqueeInnerRef.value) return
  const rect = itemRef.value.getBoundingClientRect()
  const x = ev.clientX - rect.left
  const y = ev.clientY - rect.top
  const edge = findClosestEdge(x, y, rect.width, rect.height)

  gsap
    .timeline({ defaults: animationDefaults })
    .to(marqueeRef.value, { y: edge === 'top' ? '-101%' : '101%' }, 0)
    .to(marqueeInnerRef.value, { y: edge === 'top' ? '101%' : '-101%' }, 0)
}
</script>
<template>
  <div class="menu__item" ref="itemRef">
    <a
      class="menu__item-link"
      :href="link"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      {{ text }}
    </a>
    <div class="marquee" ref="marqueeRef">
      <div class="marquee__inner-wrap" ref="marqueeInnerRef">
        <div class="marquee__inner" aria-hidden="true">
          <template v-for="n in 4" :key="n">
            <span>{{ text }}</span>
            <div class="marquee__img" :style="{ backgroundImage: `url(${image})` }" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
