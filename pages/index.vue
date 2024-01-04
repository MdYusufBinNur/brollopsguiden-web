<template>
  <v-container fluid="" class="pa-0">
    <Slider />
    <Trending />
    <LatestArticle />
    <AdComponent />
  </v-container>
</template>

<script>
import Slider from "../components/Slider/Slider.vue";
import Trending from "../components/Trending/Trending.vue";
import LatestArticle from "../components/Latest/LatestArticle.vue";
import AdComponent from "../components/Ad/AdComponent.vue";
export default {
  name: "index",
  components: {AdComponent, LatestArticle, Trending, Slider}
}
</script>

<style scoped>

</style>