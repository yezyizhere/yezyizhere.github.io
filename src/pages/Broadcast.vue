<script setup>
import Header from '@/layout/Header.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const openIndex = ref(null)
const router = useRouter()

// 메뉴 자동 닫기
const toggleAccordion = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx
}

// 4번 라우터 설정
const goToPage = () => {
  router.push('/cheer')
}

// 준비물
const boxItems = [
  {
    img: 'new/picture/broad/ring.jpg',
    title: '라이트 링',
  },
  {
    img: '/picture/broad/battery.png',
    title: 'AAA 건전지 x 3',
  },
  {
    img: '/picture/broad/FAN.png',
    title: '공식믿지 회원카드',
  },
  {
    img: '/picture/broad/namecard.png',
    title: '신분증',
  },
  {
    img: '/picture/broad/buy.png',
    title: '음원 구매 내역서',
  },
  {
    img: '/picture/broad/album.jpg',
    title: '음반 (앨범)',
  },
]

// 음반
const cd = [
  { cdname: '사운드웨이브', cdurl: 'https://bit.ly/3H5rORC' },
  { cdname: '메이크스타', cdurl: 'https://bit.ly/4mj9DID' },
  { cdname: '뮤직코리아', cdurl: 'https://bit.ly/3S0X3zJ' },
  { cdname: '위드뮤', cdurl: 'https://bit.ly/4ddcsGL' },
  { cdname: 'YES 24', cdurl: 'https://bit.ly/3GLzxVb' },
  { cdname: '알라딘', cdurl: 'https://bit.ly/4iVguoA' },
  { cdname: '뮤직플랜트', cdurl: 'https://bit.ly/4k9yi0R' },
  { cdname: '블루드림', cdurl: 'https://bit.ly/3YERDOy' },
  { cdname: '애플뮤직', cdurl: 'https://bit.ly/44tHpEt' },
  { cdname: 'FANS SHOP', cdurl: 'https://bit.ly/44zzAgv' },
]
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-10">
    <Header />
    <h1 class="pl-7 pt-10 text-xl flex gap-2">
      <p class="text-pink-500">공개방송</p>
      참여 정보
    </h1>

    <!-- 전체 메뉴 -->
    <section class="space-y-3 px-7 py-6 max-w-md mx-auto">
      <!-- 1번 -->
      <button class="w-full bg-zinc-800 rounded-lg py-3 px-4 text-left font-semibold transition-colors focus:outline-none" @click="toggleAccordion(0)">공개방송 준비물</button>
      <transition name="accordion">
        <div v-if="openIndex === 0" class="bg-zinc-700 rounded-b-lg px-4 py-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            <div v-for="(item, idx) in boxItems" :key="idx" class="flex flex-col items-center bg-zinc-800 rounded-lg p-3">
              <img :src="item.img" :alt="item.title" class="w-25 h-15 object-cover rounded-md mb-2" />
              <span class="text-xs text-center font-medium">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </transition>

      <!-- 2번 -->
      <button class="w-full bg-zinc-800 rounded-lg py-3 px-4 text-left font-semibold transition-colors focus:outline-none" @click="toggleAccordion(3)">💿 앨범 구매 링크</button>
      <transition name="accordion">
        <div v-if="openIndex === 3" class="bg-zinc-700 rounded-b-lg px-4 py-3 text-sm grid grid-cols-3 gap-2 items-center justify-center text-center">
          <div v-for="selectcd in cd" :key="selectcd.cdname">
            <a :href="selectcd.cdurl" class="block w-full text-center py-3 rounded bg-zinc-800 hover:bg-pink-500 transition-colors ring ring-zinc-400">
              {{ selectcd.cdname }}
            </a>
          </div>
        </div>
      </transition>

      <!-- 3번 -->
      <button class="w-full bg-zinc-800 rounded-lg py-3 px-4 text-left font-semibold transition-colors focus:outline-none" @click="toggleAccordion(1)">공개방송 참여 안내</button>
      <transition name="accordion">
        <div v-if="openIndex === 1" class="bg-zinc-700 rounded-b-lg px-4 py-3 text-sm flex flex-col gap-2">
          <div>
            1. <a href="https://www.jypfans.com/" class="text-pink-500 underline">FANS</a> [이벤트] 참여 안내에서 신청<br />
            <p class="text-xs text-pink-500">! [공지] 오프라인 신청 가이드 참고</p>
          </div>

          <p>2. 이후 결과 발표, 참여 여부 확인</p>
          <p>3. 공개방송 준비물 게시글 확인</p>
          <p>4. X <a href="https://x.com/for_midzy" class="text-pink-500 underline">(ITZY SUPPORTERS)</a> 모임 공지 확인</p>
          <p>5. 사전 안내에 따라 현장 참여</p>
        </div>
      </transition>

      <!-- 4번 -->
      <button class="w-full bg-zinc-800 rounded-lg py-3 px-4 text-left font-semibold transition-colors focus:outline-none" @click="toggleAccordion(2)">공개방송 현장 안내</button>
      <transition name="accordion">
        <div v-if="openIndex === 2" class="bg-zinc-700 rounded-b-lg px-4 py-3 text-sm flex flex-col gap-2">
          <p>1. 공개방송 준비물 게시글에 맞게 지참</p>
          <div>
            2. 공방판 준비 <br />
            <p class="text-xs text-pink-500">! 팬매니저님께 받아가세요</p>
          </div>
          <p>3. 참여 번호에 맞게 줄서서 대기</p>
          <p>4. 검사 후 재모임 시간 확인</p>
          <p>5. 재모임 시간에 줄서서 입장 대기</p>
        </div>
      </transition>

      <!-- 5번 -->
      <button class="w-full bg-pink-500 rounded-lg py-3 px-4 font-semibold text-white transition-colors focus:outline-none" @click="goToPage">
        <div class="flex justify-between w-full items-center">
          <p>응원법</p>
          <p>〉</p>
        </div>
      </button>
    </section>
  </section>
</template>

<style scoped>
.accordion-enter-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}
</style>
