<script setup>
defineProps({
  title: String,
  c2a: String,
})
</script>
<template>
  <div id="offering-block">
    <h2 class="roman">{{ title }}</h2>
    <button class="c2a interactive">
      <p class="roman">{{ c2a }}</p>
    </button>
  </div>
</template>
<style scoped>
#offering-block {
  border-radius: 50px;
  background-color: var(--soya);
}
.c2a {
  background-color: var(--mocha);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease;
}
.c2a p {
  font-size: 1rem;
  transform: translateY(-8%);
  color: var(--coral);
}
.c2a:hover {
  transform: scale(1.03);
  box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
  -moz-box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
}
h2 {
  color: var(--coral);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #offering-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .c2a p {
    font-size: 1.25rem;
  }
}
</style>
