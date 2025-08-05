<template>
  <div class="c2a-container">
    <button>
      <p class="roman">Start your journey</p>
    </button>
  </div>
</template>
<style scoped>
.c2a-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
}
.c2a-container button {
  background-color: transparent;
  backdrop-filter: blur(5px);
  color: var(--blanco);
  border: none;
  border-radius: 50px;
  border: 1px solid var(--coral);
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.c2a-container button p {
  font-size: 1.25rem;
  transform: translateY(-8%);
  color: var(--coral);
  text-wrap: nowrap;
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .c2a-container button p {
    font-size: 1.25rem;
  }
}
</style>
