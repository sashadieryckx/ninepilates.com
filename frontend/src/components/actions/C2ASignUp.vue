<template>
  <div id="learn-more">
    <button>
      <p class="roman">Sign up →</p>
    </button>
  </div>
</template>
<style scoped>
#learn-more {
  margin-top: 1rem;
}
#learn-more button {
  position: relative;
  display: inline-block;
  font-size: 1rem;
  background-color: transparent;
  color: var(--mocha);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}
#learn-more p {
  font-size: 1rem;
  transform: translateY(-3px);
}
</style>
