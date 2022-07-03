<template>
  <div class="card-layout">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "CardLayout"
}
</script>

<style scoped>
.card-layout {
  display: flex;
  flex-wrap: wrap;
}
</style>
