<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

defineProps({
  slug: String,
  title: String,
  image: String,
})

const emit = defineEmits(['click'])

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

const handleClick = () => {
  emit('click')
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
    <button
      class="menu__item-link"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      {{ title }}
    </button>
    <div class="marquee" ref="marqueeRef">
      <div class="marquee__inner-wrap" ref="marqueeInnerRef">
        <div class="marquee__inner" aria-hidden="true">
          <template v-for="n in 4" :key="n">
            <span class="bold">{{ title }}</span>
            <div class="marquee__img" :style="{ backgroundImage: `url(${image})` }"></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu__item {
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.menu__item-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 600;
  color: var(--mocha);
  font-size: 4vh;
  background: transparent;
  border: none;
}

.menu__item-link:hover {
  color: var(--mocha);
}

.menu__item-link:focus:not(:focus-visible) {
  color: var(--blanco);
}

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: var(--onyx);
  transform: translate3d(0, 101%, 0);
  transition: transform 0.6s ease-expo;
}

.marquee__inner-wrap {
  height: 100%;
  width: 200%;
  display: flex;
  transform: translateX(0);
}

.marquee__inner {
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 200%;
  will-change: transform;
  animation: marquee 15s linear infinite;
}

.marquee span {
  color: var(--coral);
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4vh;
  line-height: 1.2;
  padding: 1vh 1vw 0;
  transform: translateY(-10px);
}

.marquee__img {
  width: 200px;
  height: 7vh;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 50px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.menu__item-link:hover + .marquee {
  transform: translate3d(0, 0%, 0);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
}
/* DESKTOP 2 [GLOBAL] */
@media (min-width: 1440px) {
}
/* DESKTOP 3 [GLOBAL] */
@media (min-width: 1728px) {
}
/* DESKTOP 4 (Standard pc Monitor) */
@media only screen and (min-width: 1920px) {
}
/* DESKTOP 5 (4k Monitor) */
@media only screen and (min-width: 2160px) {
}
</style>
