<template>
  <v-container fluid="true" class="bg-darker px-0">
    <v-divider :thickness="1" color="black" style="opacity: initial"/>
    <v-sheet
        class="mx-auto bg-transparent"
        max-width="600"
    >
      <v-slide-group
          show-arrows
          class="bg-transparent"
      >
        <v-slide-group-item
            v-for="n in 5"
            :key="n"
            v-slot="{ isSelected, toggle }"
        >
          <v-btn
              flat=""
              class="ma-2 bg-transparent"
              text="true"
              :color="isSelected ? 'primary' : undefined"
              @click="toggle"
          >
            Options {{ n }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <v-divider :thickness="1" color="black" style="opacity: initial"/>
    <v-container>
      <v-row>
        <v-col :cols="$vuetify.display.xs ? 12 : 6" class="" style="align-self: center">
          <div class="mt-4" >
            <v-img :src="$vuetify.display.smAndUp ? '/trending/img.png' :'/image/img.png'" cover="true" />
          </div>
        </v-col>
        <v-col :cols="$vuetify.display.xs ? 12 : 6">
          <v-container>
            <div class="text-h4 text-primary px-10">
              Trending Article
              <v-divider :thickness="1"  color="primary" style="opacity: inherit" class="px-8 mt-3" />
            </div>
            <v-card
                v-for="(item, i) in trendingItems" :key="i"
                flat="true"
                color="transparent"
                style="width: 100%"
                class="px-10 py-2"
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
              <v-divider :thickness="1"  color="primary" style="opacity: inherit" class="px-8" />
            </v-card>
            <div class="px-10 mt-3">
              <v-btn color="primary" size="large" variant="outlined">
                More
              </v-btn>
            </div>
          </v-container>

        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ArrowUpRightSVG from "../../assests/icons/ArrowUpRightSVG.vue";
export default {
  name: "Trending",
  components: {ArrowUpRightSVG},
  data: () => ({
      trendingItems: [
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
        }
      ],
    })
}
</script>

<style scoped>

</style>