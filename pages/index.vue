<template>
  <card-layout>
    <card-image/>
    <card-image/>
    <card-image/>
  </card-layout>
</template>

<script>
import CardLayout from "../components/layout/CardLayout";
import CardImage from "../components/cards/CardImage";

export default {
  name: "index.vue",
  components: {CardImage, CardLayout}
}
</script>

<style scoped>
</style>
