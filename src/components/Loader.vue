<template>
  <teleport to="body">
    <Loading
      :active="isLoading"
      :loader="type || 'dots'"
      :color="color || '#fff'"
      :opacity="opacity || 0.08"
      :background-color="background || '#fff'"
      :blur="blur || null"
      :is-full-page="isFullPage || true"
    />
  </teleport>
</template>
<script>
import Loading from 'vue-loading-overlay'

export default {
  name: 'Loader',
  props: ['isLoading', 'type', 'color', 'opacity', 'background', 'blur', 'isFullPage'],
  components: { Loading }
}
</script>
