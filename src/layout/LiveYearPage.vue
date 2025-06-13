<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './Header.vue'

const route = useRoute()
const year = route.params.year

const yearButtons = {
  2019: [
    { name: '예지', url: 'https://drive.google.com/drive/folders/1d7hmToPWbTIds8_ndxXWNVpzEWNSw59v' },
    { name: '리아', url: null },
    { name: '류진', url: 'https://drive.google.com/drive/folders/1QT865AXnz7Ow5ZotDVlLtbyjhJwG6qkH' },
    { name: '채령', url: 'https://drive.google.com/drive/folders/1hkuaCMK0KZn8U-9MG-nZku8b1urDK_UO' },
    { name: '유나', url: 'https://drive.google.com/drive/folders/1LiKH4NuRtUxFb7ZCWiQ9p8pHHRJiizHV' },
    { name: 'ITZY', url: 'https://drive.google.com/drive/folders/12LL0ZZDlBSLmLexVPfKH2HR1-ggu_KsR' },
    { name: '유닛', url: 'https://drive.google.com/drive/folders/13SCv12X2J4ai_iD6WTJi94DeuK08D-b4' },
  ],
  2020: [
    { name: '예지', url: 'https://drive.google.com/drive/folders/1Ud7M_zXfZAhLRfURNpjIEQ279R-iPZu6' },
    { name: '리아', url: 'https://drive.google.com/drive/folders/1jc7vP7pvd2oeyuOjHJ9y_5VG1gGy-hOK' },
    { name: '류진', url: 'https://drive.google.com/drive/folders/1KHOxhL9jxvwQhwcmhEEtPjZw1zx4KN_a' },
    { name: '채령', url: 'https://drive.google.com/drive/folders/1RkvgiL9COcBm4hQa3g3DVos4srJVrRth' },
    { name: '유나', url: 'https://drive.google.com/drive/folders/1E4NyZ9DGDmCtBX88_uCCxg9k7GnwyEhI' },
    { name: 'ITZY', url: 'https://drive.google.com/drive/folders/1J5RnZo0yDOmVAjoAOQxl567WP4xlqTkE' },
    { name: '유닛', url: 'https://drive.google.com/drive/folders/1BCLmkSZ5YNKqDxgYsBAUBIjnbr2pGBtw' },
  ],
  2021: [
    { name: '예지', url: 'https://drive.google.com/drive/folders/1hT9yoFv8nvQZtYSC1c37-gmsuSDbqGaN' },
    { name: '리아', url: 'https://drive.google.com/drive/folders/1b0E8WzR0jvbD79GsLv3TkPeFXSh00CKM' },
    { name: '류진', url: 'https://drive.google.com/drive/folders/1RlO7I2-_0FkCn2cg62pPYmdUul0wndax' },
    { name: '채령', url: 'https://drive.google.com/drive/folders/1PwT4rDOB3ZwHKxiEQtzxfbP_a9fBDkqG' },
    { name: '유나', url: 'https://drive.google.com/drive/folders/1WASen2MHubeuxelBpZ03MMnHErL0VtPL' },
    { name: 'ITZY', url: 'https://drive.google.com/drive/folders/1r2xy51cPUdZYrFyv8dzAbZtB4zkA57Ib' },
    { name: '유닛', url: 'https://drive.google.com/drive/folders/1VKyEOjIc8J3bSmMpDDOtxV0kyeyk4Kqi' },
  ],
  2022: [
    { name: '예지', url: 'https://drive.google.com/drive/folders/18Xu-wbqpvqLclePy3xS5KWnGB-bSKBXn' },
    { name: '리아', url: 'https://drive.google.com/drive/folders/1r6ap3Hi8q2Fr_KY-D46uAXHzkAKjeaM1' },
    { name: '류진', url: 'https://drive.google.com/drive/folders/1dCOY30fxW0t5KBfniFVu7qN4FGUriYRw' },
    { name: '채령', url: 'https://drive.google.com/drive/folders/1WFrKrUHRs5Lanolc7G1sHdSu1PG_UeWX' },
    { name: '유나', url: 'https://drive.google.com/drive/folders/1aJiECffpWZixAhzeTp0_0u532r5k_w70' },
    { name: 'ITZY', url: null },
    { name: '유닛', url: 'https://drive.google.com/drive/folders/1209Ju-PbB-CarGGgs3nntJFfHmsjMN1y' },
  ],
}
const buttons = yearButtons[year] || yearButtons[Number(year)] || []

// 연도 별 사진
const yearPicture = ['/picture/vlive/vlive1.jpg', '/picture/vlive/vlive2.jpg', '/picture/vlive/vlive3.jpg', '/picture/vlive/vlive4.jpg']
const yearIndex = computed(() => {
  const idx = Number(year) - 2019
  return idx >= 0 && idx < yearPicture.length ? idx : 0
})
const yearImage = computed(() => yearPicture[yearIndex.value])
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-5">
    <Header />

    <!-- 사진 -->
    <div class="p-5">
      <!-- 상단 -->
      <img :src="yearImage" class="rounded h-50 w-90" />
      <h1 class="py-5 text-center text-3xl flex justify-center gap-3 text-sky-300">
        {{ year }}
        <p class="text-white">Archive</p>
      </h1>

      <!-- 버튼 -->
      <div v-if="buttons && buttons.length" class="grid grid-cols-2 gap-4">
        <router-link to="/live" class="block py-3 rounded bg-zinc-800 hover:bg-sky-700 text-center">연도선택</router-link>
        <template v-for="btn in buttons" :key="btn.name">
          <a v-if="btn && btn.url" :href="btn.url" class="block py-3 rounded bg-zinc-800 hover:bg-sky-700 text-center">
            {{ btn.name }}
          </a>
          <span v-else-if="btn" class="block py-3 rounded bg-zinc-900 text-center opacity-50 cursor-not-allowed">
            {{ btn.name }}
          </span>
        </template>
      </div>
      <div v-else class="text-center py-10 text-zinc-400">X</div>
    </div>
  </section>
</template>
