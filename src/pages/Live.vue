<script setup>
import Header from '@/layout/Header.vue'

const selectBtn = [
  { name: '2019', url: '/live/2019' },
  { name: '2020', url: '/live/2020' },
  { name: '2021', url: '/live/2021' },
  { name: '2022', url: '/live/2022' },
  { name: 'showcase', url: 'https://drive.google.com/drive/folders/1kDl4kp9gWMpcalbU3vpubVzw-O1DjZn9' },
  { name: 'youtube', url: 'https://www.youtube.com/@ITZY/streams' },
]
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-5">
    <Header />

    <div class="p-5">
      <!-- 상단 -->
      <img src="/picture/vlive/vlivem.jpg" class="rounded h-50 w-90" />
      <h1 class="py-10 text-center text-3xl flex justify-center gap-5">
        Re:Wind
        <p class="text-sky-300 font-bold">VLIVE</p>
      </h1>

      <!-- 하단 -->
      <section class="grid grid-cols-2 gap-5">
        <template v-for="btn in selectBtn" :key="btn.name">
          <template v-if="btn.url.startsWith('http')">
            <a :href="btn.url" class="block w-full text-center py-3 rounded bg-zinc-800 hover:bg-sky-700 transition-colors">
              {{ btn.name }}
            </a>
          </template>
          <template v-else>
            <router-link :to="btn.url" class="block w-full text-center py-3 rounded bg-zinc-800 hover:bg-sky-700 transition-colors">
              {{ btn.name }}
            </router-link>
          </template>
        </template>
      </section>
    </div>
  </section>
</template>
