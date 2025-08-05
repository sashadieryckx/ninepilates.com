<template>
  <div class="c2a-container">
    <button>
      <p class="roman">See our offerings</p>
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
  transition: all 0.3s ease;
}
.c2a-container button {
  background-color: var(--mocha);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 14px;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.c2a-container button p {
  font-size: 1rem;
  transform: translateY(-8%);
  color: var(--coral);
}
.c2a-container:hover {
  scale: 1.03;
}
</style>
