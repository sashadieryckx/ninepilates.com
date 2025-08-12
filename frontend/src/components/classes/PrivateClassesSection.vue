<script setup>
</script>
<template>
  <div id="private-classes-section">
    <div id="private-classes-heading" class="df-pad">
      <h2 class="roman">We also offer private sessions</h2>
      <h5 class="light">
        Experience fully customized Pilates sessions tailored to your body, goals, and pace—offering the attention, precision, and guidance you need to progress with confidence.
      </h5>
    </div>
  </div>
</template>
<style scoped>
#private-classes-section {
  position: relative;
  z-index: 1;
  padding: 4rem 0em;
}
#private-classes-heading {
  margin-bottom: 4rem;
}
h2 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 1rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #private-classes-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #private-classes-heading {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    width: 75%;
  }
  h5 {
    margin-top: 2rem;
    width: 60%;
    text-align: center;
  }
}
</style>
