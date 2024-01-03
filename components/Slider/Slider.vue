<template>
  <v-card
      flat="true"
      class="mx-auto"
  >
    <v-carousel
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background="true"
        delimiter-icon="mdi-square"
        :height="$vuetify.display.xs ? 376 : 400"
    >

      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          :cover="true"
          :cycle="true"
      ></v-carousel-item>
      <div
          style="
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150px; /* Adjust the height of the overlay */
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
    "
      >
        <p class="px-10 text-center text-white font-weight-bold fade-in-up" :class="$vuetify.display.mdAndUp ? 'text-body-1' : 'text-body-1'">
          Hello World
        </p>
        <p class="px-10 text-center text-white font-weight-bold fade-in-up" :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h5'">
          How to capture the essence of a real fall wedding
        </p>
      </div>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'green',
        'grey',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>