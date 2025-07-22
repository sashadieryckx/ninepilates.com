<template>
  <div class="c2a-container">
    <button>
      <p class="roman">Book Your Class</p>
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
  background-color: #c7b7a650;
  backdrop-filter: blur(5px);
  color: var(--blanco);
  border: none;
  border-radius: 50px;
  padding: 0.5rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c2a-container button p {
  transform: translateY(-8%);
}
</style>
