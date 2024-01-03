<template>
  <v-container>
    <div class="d-flex flex-row justify-center">
      <div class="text-h3 text-center pa-5">
        LATEST
      </div>
    </div>
    <v-row>

      <v-col :cols="getColumnSize(i)" v-for="(item, i) in latestDataset" :key="i">
        <v-sheet class="d-flex flex-column align-stretch">
          <v-img
              :src="item.image"
              cover="true"
              height="100%"
          ></v-img>
          <div class="text-body-1 py-4">
            {{ item.category }}
          </div>
          <span class="text-body-2 pb-4">
            {{ item.title }}
          </span>
          <div class="text-caption" v-show="getColumnSize(i) === 12">
            {{ item.sub }}
            <div>
              <v-btn variant="text" class="text-capitalize px-0 py-4 text-primary">
                Read more
                <v-icon>
                  <ArrowUpRightSVG />
                </v-icon>
              </v-btn>
            </div>
          </div>

        </v-sheet>

      </v-col>

    </v-row>
    <div class="d-flex flex-row justify-center py-4">
      <v-btn variant="outlined" class="text-primary">
        More
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import img from '/latest/img.png'
import img1 from '/latest/img_1.png'
import img2 from '/latest/img_2.png'
import ArrowUpRightSVG from "../../assests/icons/ArrowUpRightSVG.vue";

const latestDataset = [
  {
    title: 'Makeup tips if you are doing your own makeup',
    category: 'VENUS',
    image: img, sub: 'sasas',
  },
  {
    title: 'Makeup tips if you are doing your own makeup for your bif day',
    category: 'BEAUTY & MAKEUP',
    image: img1, sub: '',
  },
  {
    title: 'Makeup tips if you are doing your own makeup',
    category: 'VENUS',
    image: img, sub: '',
  },
  {
    title: 'Makeup tips if you are doing your own makeup for your bif day',
    category: 'BEAUTY & MAKEUP',
    sub: '',
    image: img1
  },
  {
    sub: 'Ihicaboreri r eos inis atem laborro rporepe rferibusam rem ut faccumq uaeritatur Lectur, quiatis autat voluptas ra quame poriam, qui fuga. Et lam, imi, nobis alit erfe rumquist. ',
    category: 'VENDORS',
    title: 'Rent a tent and celebrate your wedding in your garden',
    image: img2
  },
  {
    title: 'Makeup tips if you are doing your own makeup',
    category: 'VENUS',
    image: img, sub: '',
  },
  {
    title: 'Makeup tips if you are doing your own makeup for your bif day',
    category: 'BEAUTY & MAKEUP',
    image: img1, sub: '',
  },
  {
    title: 'Makeup tips if you are doing your own makeup',
    category: 'VENUS',
    image: img, sub: '',
  },
  {
    title: 'Makeup tips if you are doing your own makeup for your bif day',
    category: 'BEAUTY & MAKEUP',
    sub: '',
    image: img1
  },
  {
    sub: 'Ihicaboreri r eos inis atem laborro rporepe rferibusam rem ut faccumq uaeritatur Lectur, quiatis autat voluptas ra quame poriam, qui fuga. Et lam, imi, nobis alit erfe rumquist. ',
    category: 'VENDORS',
    title: 'Rent a tent and celebrate your wedding in your garden',
    image: img2
  },
]
const getColumnSize = (index) => {
  if ((index + 1) % 5 === 0) {
    return 12; // Set column size to 12 for these indices
  }
  return 6; // Default column size
};
</script>

<style scoped>

</style>