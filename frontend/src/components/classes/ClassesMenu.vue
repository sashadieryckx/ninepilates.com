<script setup>
import MenuItem from '@/components/classes/ClassMenuItem.vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['classClick'])

const handleClassClick = (item) => {
  emit('classClick', item)
}
</script>
<template>
  <div class="menu-wrap interactive">
    <nav class="menu">
      <MenuItem
        v-for="item in items"
        :key="item.id"
        :slug="item.slug"
        :title="item.title"
        :image="item.image"
        @click="handleClassClick(item)"
      />
    </nav>
  </div>
</template>
<style scoped>
.menu-wrap {
  width: 100%;
  height: 100%;
  max-width: 75vw;
  max-height: 80vh;
  overflow: hidden;
  padding: 0 1rem;
}
.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
}
.menu :last-child {
  border-bottom: none;
}
.menu__item {
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
  border-bottom: 2px solid var(--mocha);
}

.menu__item-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 600;
  color: var(--blanco);
  font-size: 4vh;
}

.menu__item-link:hover {
  color: var(--mocha);
  cursor: pointer;
}

.menu__item-link:focus:not(:focus-visible) {
  color: var(--mocha);
}

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: var(--blanco);
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
  color: #060010;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4vh;
  line-height: 1.2;
  padding: 1vh 1vw 0;
}

.marquee__img {
  width: 200px;
  height: 7vh;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 50px;
  background-size: cover;
  background-position: 50% 50%;
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
  .menu-wrap {
    padding: 0 4rem;
  }
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
