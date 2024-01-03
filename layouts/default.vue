<template>
  <v-app>
    <v-app-bar elevation="0" flat="true" scroll-threshold="0" color="bg" class="bg" >
      <v-app-bar-nav-icon>
        <template v-slot:default>
          <v-img @click="$router.push('/')">
            <ShortLogoSVG/>
          </v-img>
        </template>
      </v-app-bar-nav-icon>
      <v-spacer/>
      <v-app-bar-nav-icon>
        <template v-slot:default>
          <SearchSVG/>
        </template>
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon @click.stop="dialog = !dialog" v-show="$vuetify.display.xs">
        <template v-slot:default>
          <MenuSVG/>
        </template>
      </v-app-bar-nav-icon>
    </v-app-bar>
<!--    <v-navigation-drawer-->
<!--        v-model="drawer"-->
<!--        temporary="true"-->
<!--        style="height: 100%; width: 100%; background-color: #E4DFD4;"-->
<!--        class="primary"-->

<!--    >-->

<!--    </v-navigation-drawer>-->
    <v-dialog
        v-model="dialog"
        :fullscreen="true"
        :scrim="false"
        transition="dialog-bottom-transition"
    >
      <v-card color="bg_darker">
        <v-toolbar
            dark
            color="bg_darker"
        >
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
              <v-icon color="primary">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
<!--        <v-list>-->
<!--          <v-list-item v-for="(item, i) in items" :key="i" class="pa-5 px-10 primary">-->
<!--            <div @click.prevent="$router.push(item.value)" class="text-h5 pb-3 primary" >-->
<!--              {{ item.title }}-->
<!--            </div>-->
<!--            <template v-slot:append>-->
<!--              <v-icon>-->
<!--                <ArrowUpRightSVG />-->
<!--              </v-icon>-->
<!--            </template>-->
<!--            <v-divider class="primary" color="primary"/>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
        <v-card
            v-for="(item, i) in items" :key="i"
            flat="true"
            color="transparent"
            style="width: 100%"
            class="px-15 py-2"
        >
          <v-card-item class="px-0">
            <template v-slot:title>
              <div class="text-h6 text-primary text-uppercase ">
                {{ item.title }}
              </div>
              <v-spacer />
            </template>
            <template v-slot:append>
              <v-icon color="primary" size="30">
                <ArrowUpRightSVG />
              </v-icon>
            </template>
          </v-card-item>
          <v-divider v-if="i < items.length - 1" :thickness="1"  color="primary" style="opacity: inherit" class="px-8" />

        </v-card>
      </v-card>
    </v-dialog>
    <v-main class="bg-lighter">
      <nuxt-page/>

    </v-main>
  </v-app>
</template>

<script>
import Footer from "../components/Common/Footer.vue";
import ShortLogoSVG from "../assests/icons/ShortLogoSVG.vue";
import SearchSVG from "../assests/icons/SearchSVG.vue";
import MenuSVG from "../assests/icons/MenuSVG.vue";
import ArrowUpRightSVG from "../assests/icons/ArrowUpRightSVG.vue";
import menuSVG from "../assests/icons/MenuSVG.vue";

export default {
  name: "default",
  components: {ArrowUpRightSVG, MenuSVG, SearchSVG, ShortLogoSVG, Footer},
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    drawer: false,
    group: null,
    items: [
      {
        title: 'Articles',
        value: 'articles',
      },
      {
        title: 'Vendors',
        value: 'vendors',
      },
      {
        title: 'Stories',
        value: 'stories',
      },
      {
        title: 'Couples',
        value: 'couples',
      },
      {
        title: 'Guests',
        value: 'guests',
      },
      {
        title: 'Magazine',
        value: 'magazine',
      },
      {
        title: 'About us',
        value: 'about-us',
      },
    ],
    opacity: 1
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}

</style>