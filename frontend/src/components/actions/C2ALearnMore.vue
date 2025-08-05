<template>
  <div id="learn-more">
    <button>
      <p class="roman">Learn More</p>
    </button>
  </div>
</template>
<style scoped>
#learn-more {
  margin-top: 1rem;
}
#learn-more button {
  font-size: 1rem;
  background-color: transparent;
  color: var(--mocha);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
#learn-more p {
  font-size: 1rem;
  transform: translateY(-3px);
  text-decoration: underline;
}
#learn-more button:hover {
  color: var(--soya);
}
</style>
