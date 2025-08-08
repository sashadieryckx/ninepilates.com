<script setup>
import ClassesMenu from '@/components/classes/ClassesMenu.vue'

const menuItems = [
  {
    slug: '/class1',
    text: 'Class 1',
    image: '/images/class1.jpg',
  },
  {
    slug: '/class2',
    text: 'Class 2',
    image: '/images/class2.jpg',
  },
  {
    slug: '/class3',
    text: 'Class 3',
    image: '/images/class3.jpg',
  },
]
</script>
<template>
  <div id="main-content" class="main-content">
    <section class="section">
      <ClassesMenu :items="menuItems" />
    </section>
  </div>
</template>
<style scoped>
#main-content {
  height: 100vh;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
