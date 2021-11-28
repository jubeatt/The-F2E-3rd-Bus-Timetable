<template>
  <div class="global-bus">
    <h1 class="global-bus__text">那個客運頁面...(｡ŏ﹏ŏ)<br>再給我一點時間！我一定能完成的(•ө•)♡</h1>
  </div>
</template>

<style lang="scss">
.global-bus {
  height: 100vh;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__text {
    color: var(--blue);
    font-size: 2rem;
    line-height: 2;
    text-align: center;
    @include mediaQuery-tablet {
      font-size: 3rem;
    }
  }
}
</style>
