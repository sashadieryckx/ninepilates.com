<script setup>
import { ref, onMounted } from 'vue'
// Unhead SEO
import { useHead } from '@unhead/vue'
useHead({
  title: 'Nine Pilates | Schedule',
  meta: [
    {
      name: 'description',
      content:
        'See our schedule for upcoming classes at Nine Pilates.',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
})
import Schedule from '@/components/schedule/Schedule.vue'

const scheduleKey = ref(0)

// Force component remount when navigating to schedule
onMounted(() => {
  scheduleKey.value = Date.now()
  console.log('ScheduleView mounted, forcing Schedule component refresh')
})
</script>
<template>
  <div id="main-content" class="main-content">
    <section class="section" id="schedule">
      <!-- Key forces component to remount completely -->
      <Schedule :key="scheduleKey" />
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
  width: 100%;
}
</style>
