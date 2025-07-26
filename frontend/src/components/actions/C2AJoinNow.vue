<template>
  <div id="learn-more">
    <button>
      <p class="roman">Join now</p>
    </button>
  </div>
</template>
<style scoped>
#learn-more {
  margin-top: 1rem;
}
#learn-more button {
  font-size: 1rem;
  padding: 0.25rem 1.5rem;
  background-color: var(--mocha);
  color: var(--coral);
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
#learn-more p {
  font-size: 1rem;
  transform: translateY(-3px);
}
#learn-more button:hover {
  transform: scale(1.03);
}
</style>
