<template>
  <v-container fluid="" class="pa-0">
    <Slider />
    <Trending />
    <LatestArticle />
  </v-container>
</template>

<script>
import Slider from "../components/Slider/Slider.vue";
import Trending from "../components/Trending/Trending.vue";
import LatestArticle from "../components/Latest/LatestArticle.vue";
export default {
  name: "index",
  components: {LatestArticle, Trending, Slider}
}
</script>

<style scoped>

</style>