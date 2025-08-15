<script setup>
</script>
<template>
  <div id="founders-membership-content">
    <h3 class="italic">Limited Time Only</h3>
    <h2 class="roman">Founders Membership</h2>
    <h5 class="light">Unlimited classes. Exclusive rate. Be part of our story from the very start.</h5>
    <button class="c2a interactive">
      <p class="roman">Start your journey</p>
    </button>
  </div>
</template>
<style scoped>
#founders-membership-content {
  height: 100vh;
  width: 100%;
  border-radius: 50px;
  background-color: var(--soya);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
h2, h3, h5 {
  color: var(--coral);
  width: 50%;
  text-align: center;
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
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .c2a p {
    font-size: 1.25rem;
  }
}
</style>
