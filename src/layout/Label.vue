<script setup>
import Header from './Header.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'

const route = useRoute()
const router = useRouter()
const label = route.params.label

const albumMap = {
  1: '달라달라',
  2: 'ICY',
  3: 'WANNABE',
  4: 'NOT SHY',
  5: '마피아',
  6: 'LOCO',
  7: 'SNEAKERS',
  8: 'CHESHIRE',
  9: 'CAKE',
  10: 'None of my Business',
  11: 'Untouchable',
  12: 'BORN TO BE',
  13: 'Mr.Vampire',
  14: 'GOLD',
  15: 'Imaginary Friend',
  16: 'Air',
  17: 'Kiss&Tell',
  18: 'GWBG',
}
const videoMap = {
  1: 'https://youtu.be/ay97L0DAu9A?si=ZLPbfRxMpO39o9dE',
  2: 'https://youtu.be/mBvdwhgyqVY?si=2m6Aah5nWkMQFnxv',
  3: 'https://youtu.be/Vp9I_m6znMM?si=T0Sup2tOLNrdx_9x',
  4: 'https://www.youtube.com/watch?v=4UEt5ShziSI',
  5: 'https://www.youtube.com/watch?v=PSFW96qPK0g',
  6: 'https://www.youtube.com/watch?v=t2W2pznm3ZI',
  7: 'https://www.youtube.com/watch?v=DedU4DcA1Ec',
  8: 'https://www.youtube.com/watch?v=0a-p6r7ua48',
  9: 'https://www.youtube.com/watch?v=-GhmTVCBYBk',
  10: 'https://www.youtube.com/watch?v=ffmGWmZ4XY0',
  11: 'https://www.youtube.com/watch?v=WWMU8vRfWT0',
  12: 'https://www.youtube.com/watch?v=_Dq7Sb3k1lo',
  13: 'https://www.youtube.com/watch?v=pgeonjRmk64',
  14: 'https://youtu.be/1TWhd-OPObo?si=Irfw2fSg6Ceeb32m',
  15: 'https://youtu.be/rB9VawHOeWo?si=mcmfkdowx_6FFy93',
  16: 'https://youtu.be/nEGU6pbRGDk?si=BrQuGg4T_TcKhMiZ',
  17: 'https://youtu.be/G6HCX42z1gg?si=zb4esYkHd33pZiIw',
  18: 'https://youtu.be/d7E7XgI6RGg?si=RRzydzbWJ8OGGrs9',
}
const songName = ref(albumMap[label] || 'Unknown')
const videoUrl = ref(videoMap[label] || '#')

const markdownContent = ref('')

async function fetchMarkdown(label) {
  try {
    const res = await fetch(`/cheer/cheer${label}.md`)
    markdownContent.value = marked(await res.text())
  } catch (e) {
    markdownContent.value = '응원법을 불러올 수 없습니다.'
  }
}

onMounted(() => {
  fetchMarkdown(label)
})
watch(
  () => route.params.label,
  (newLabel) => {
    songName.value = albumMap[newLabel] || 'Unknown'
    videoUrl.value = videoMap[newLabel] || '#'
    fetchMarkdown(newLabel)
  },
)

function copyUrl(type) {
  let url = window.location.href
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("URL이 복사되었습니다 ' v '")
    })
    .catch(() => {
      alert('복사에 실패했습니다')
    })
}

function goBack() {
  router.back()
}
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-5">
    <Header />

    <!-- 곡명 표시 -->
    <div class="px-5 text-2xl text-center pt-10 flex gap-2 items-center justify-center">
      <p class="text-pink-500">{{ songName }}</p>
      <p class="text-white">응원법</p>
    </div>
    <div class="flex gap-3 items-center justify-center mt-2">
      <p class="text-red-500">ITZY와 함께</p>
      <p class="text-blue-500">MIDZY만</p>
    </div>

    <!-- 버튼 모음 -->
    <div class="flex justify-between mt-2 mx-25">
      <!-- 뒤로가기 -->
      <button @click="goBack">〈</button>
      <!-- 영상 이동 -->
      <a :href="videoUrl" title="영상" class="ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300" viewBox="0 0 576 512" fill="currentColor">
          <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
        </svg>
      </a>
      <!-- 공유하기 -->
      <button class="transition" title="공유" @click="copyUrl('type')">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300" viewBox="0 0 448 512" fill="currentColor">
          <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
        </svg>
      </button>
    </div>

    <!-- 응원법 파트 -->
    <section class="p-5 max-w-2xl m-5 rounded border-1 border-zinc-200">
      <div v-html="markdownContent" class="prose prose-invert"></div>
    </section>
  </section>
</template>
