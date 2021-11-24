<template>
  <div class="wrap">
    <span class="status-msg status-msg--driving">4分</span>
    <span class="status-msg status-msg--not-yet">尚未發車</span>
    <span class="status-msg status-msg--active">進站中</span>
    <span class="status-msg status-msg--comming">即將進站</span>
    <span class="status-msg status-msg--traffic">交管不停</span>
    <span class="status-msg status-msg--last">末班駛離</span>
    <span class="status-msg status-msg--off">未營運</span>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  margin-top: 50px;
  margin-left: 50px;
}
.status-msg {
  display: inline-block;
  min-width: 80px;
  border-radius: 12px;
  padding: 12px 10px;
  margin-right: 15px;
  text-align: center;
  &--off {
    background-color: #142F43;
    color: #f5f5f5;
    // background-color: #7E370C;
  }
  &--active {
    background-color: var(--blue);
    color: var(--black);
  }
  &--comming {
    background-color: var(--blue);
    color: var(--black);
  }
  &--last {
    background-color: #FFAB4C;
    color: var(--black);
  }
  &--traffic {
    background-color: #F6416C;
    color: #f5f5f5;
    color: var(--black);
  }
  &--driving {
    background-color: var(--black);
    color: var(--blue);
    box-shadow: var(--shadow-button);
  }
  &--not-yet {
    background-color: #8785A2;
  }
}
</style>
