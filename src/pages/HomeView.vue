<script setup>
import Header from '@/layout/Header.vue'
import { ref, computed } from 'vue'

// 메뉴 변경
const activeIndex = ref(3)
function setActive(idx) {
  activeIndex.value = idx
}

// 링크 모음집
const links = [
  // 있있, 한있, csi, 빈있겨울, la
  'https://youtube.com/playlist?list=PLnje7IHR9mTapUR9RLHcO8o1AA2S60QEZ&si=ohRmE5NeBPxH1xtw',
  'https://youtube.com/playlist?list=PLnje7IHR9mTbcpn3t6BkND5MlCzZQ37TP&si=BFB63T3MyjUgaNyY',
  'https://youtube.com/playlist?list=PLwQXFsY4igzKuEKg2ojKSch0Wtv-HDKWr&si=A2k3MKiU07tGlTCk',
  'https://youtube.com/playlist?list=PLnje7IHR9mTbgUdQeod-nhMARAB4VE2gM&si=ezLUZWjoLNWjMTRH',
  'https://youtube.com/playlist?list=PLU0AT1n0fMTrAUxGIU750ry5eHnffeyOY&si=TjeBwYZ3KyUfNtFa',

  // 있짘, 있짘2, 파있, 빈있, csi2
  'https://youtube.com/playlist?list=PLnje7IHR9mTZ_1snWNcW_KYV_zv5x1MSI&si=M9eesYNqRuo3mJ9b',
  'https://www.youtube.com/playlist?list=PLnje7IHR9mTZr-5bn7X6H0OnuvH95XHmj',
  'https://youtube.com/playlist?list=PLUozvCC9n2KG1nnKTS-Yexfq1-vBkKL9j&si=zDnMkPXlU0_L6l0M',
  'https://youtube.com/playlist?list=PLhGW6X7DE42-vDMaJ7IOAhO1FQUOnw0Xq&si=GDIJ6FojE0qaKgIY',
  'https://youtube.com/playlist?list=PLnje7IHR9mTZQDs_STWSZUCeWEe2zOEwd&si=AJM_1Ws-VBjIwP2D',

  // 빈있2, 있코하, 다섯, 복날
  'https://youtube.com/playlist?list=PLdg1BYAK8zoKcVA4XrdQxSPPZMK7FVT81&si=0PUPvGsiLhW-7zlx',
  'https://youtube.com/playlist?list=PLMvTMGtQQeVpEja-msikvu2bJPH8TU0fA&si=15CEZGAFRxNL9v6C',
  'https://youtube.com/playlist?list=PLrmYVBVMRWSEMPtzAJnLBnR3MpwmsVtDe&si=ZItp-I0lp6p20J9l',
  'https://youtube.com/playlist?list=PLnje7IHR9mTbkPf-sYoW-NMsU5WoG2oSM&si=NKHS1RMqJ13scC2c',
]

// 앨범 리스트
const items = [
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/9acb66dbf7944c88a604feac448d7e65-IT%E2%80%99z%20Different.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=15&AmSeq=1&PgIndex=3',
    albumName: 'IT’z Different',
    albumDate: '2019-02-12',
    label: '1',
  },
  {
    albumImage: "https://lv2-cdn.azureedge.net/itzy/91b54dd93dd2464a8b74e28e39d3225f-IT'z%20ICY.jpg",
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=16&AmSeq=1&PgIndex=3',
    albumName: 'IT’z ICY',
    albumDate: '2023.01.01',
    label: '2',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/WANNABE.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=17&AmSeq=1&PgIndex=3',
    albumName: 'IT’z ME',
    albumDate: '2020-03-09',
    label: '3',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/c634c053a9944da590bdd4e25873c9af-Not-Shy-ONLINECOVER.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=19&AmSeq=1&PgIndex=3',
    albumName: 'Not Shy',
    albumDate: '2020-08-17',
    label: '4',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/2cd5532ff5244fb4918eb6bc56e48330-%EB%AF%BF%EC%A7%80%20(MIDZY).jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=133&AmSeq=1&PgIndex=2',
    albumName: '믿지 (MIDZY)',
    albumDate: '2021-03-20',
    label: '5',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/92e81f5e06a44c96b8777382fa83b653-Guesswho-onlinecover-fans.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=135&AmSeq=1&PgIndex=2',
    albumName: 'GUESS WHO',
    albumDate: '2021-04-30',
    label: '6',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/0de5508275a348459f4fca8f25dde3f8-220939b337f146f8a75cc6cd0299cda5-ITZY_CRAZY%20IN%20LOVE_ONLINE%20COVER_%EC%B5%9C%EC%A2%85.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=152&AmSeq=1&PgIndex=2',
    albumName: 'CRAZY IN LOVE',
    albumDate: '2021-09-24',
    label: '7',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/5b251844d4324a038751998529279755-CHECKMATE.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=165&AmSeq=1&PgIndex=2',
    albumName: 'CHECKMATE',
    albumDate: '2022-07-15',
    label: '8',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/125f68b2b20a481dbf03ef9d03560295-7ab0dd968f254899b2acc571af10cb43-ITZY---Boys-Like-You-1000.png',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=182&AmSeq=1&PgIndex=2',
    albumName: 'Boys Like You',
    albumDate: '2022-10-21',
    label: '9',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/573573c4480c4c6d9cb64e919a1db81e-ea72325aff9140bdb11a93bf57c38b26-CHESHIRE_.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=187&AmSeq=1&PgIndex=1',
    albumName: 'CHESHIRE',
    albumDate: '2022-11-30',
    label: '10',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/651dfb33f55248dd87339ba5d51d90ed-d05a2169be8b4462b1a7520964c1ff9c-KILL%20MY%20DOUBT.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=205&AmSeq=1&PgIndex=1',
    albumName: 'KILL MY DOUBT',
    albumDate: '2023-07-31',
    label: '11',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/a114fa05b12c4ecaa8544f4d9d5dccd6-4.%20%EC%BB%A4%EB%B2%84%20%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=218&AmSeq=1&PgIndex=1',
    albumName: 'BORN TO BE',
    albumDate: '2024-01-08',
    label: '12',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/63d3c4ed32194e3086fad4d3b566d5a3-ITZY-GOLD-ONLINECOVER.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=255&AmSeq=1&PgIndex=1',
    albumName: 'GOLD',
    albumDate: '2024-10-15',
    label: '13',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/a82cb65bd70e4263ad70edb3d206545c-Online%20Cover.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=269&AmSeq=1&PgIndex=1',
    albumName: 'AIR',
    albumDate: '2025-03-10',
    label: '14',
  },
  {
    albumImage: 'https://lv2-cdn.azureedge.net/itzy/40238fe336804dd493f6338291f2066e-gwbg.jpg',
    albumLink: 'https://itzy.jype.com/Default/DiscographyView?AamSeq=279&AmSeq=1&PgIndex=1',
    albumName: 'GWBG',
    albumDate: '2025-06-09',
    label: '15',
  },
]

// 페이지네이션
const pageSize = 6
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(sortedItems.value.length / pageSize))
const pagedItems = computed(() => sortedItems.value.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize))
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

// 오름차순
const sortAsc = ref(true)
const sortedItems = computed(() => [...items].sort((a, b) => (sortAsc.value ? Number(a.label) - Number(b.label) : Number(b.label) - Number(a.label))))

// 디데이
const startDate = ref('2019-02-12')
function getDdayPlus(startDateStr) {
  const start = new Date(startDateStr)
  const today = new Date()
  const diffTime = today.getTime() - start.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  let years = today.getFullYear() - start.getFullYear()
  const m = today.getMonth() - start.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < start.getDate())) {
    years--
  }
  return `+${diffDays}일, ${years}주년`
}
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-10">
    <Header @click="setActive(3)" />

    <!-- 컨텐츠 선택 -->
    <nav class="flex items-center justify-center text-center my-10 w-full">
      <!-- 1. 소개 -->
      <button :class="activeIndex === 0 ? 'border-b-1 border-white' : ''" @click="setActive(0)" class="p-1 w-1/3">Info</button>
      <!-- 2. 음반 -->
      <button :class="activeIndex === 1 ? 'border-b-1 border-white' : ''" @click="setActive(1)" class="p-1 w-1/3">Filmography</button>
      <!-- 3. 프로필 -->
      <button :class="activeIndex === 2 ? 'border-b-1 border-white' : ''" @click="setActive(2)" class="p-1 w-1/3">Profile</button>
    </nav>

    <!---------------------- 1번(기록) ---------------------->
    <Transition name="slide-fade">
      <section v-if="activeIndex === 0" class="flex">
        <!-- 왼쪽 -->
        <nav class="w-1/2 text-right pr-3">
          <div>19.02.12 있지 데뷔</div>
          <div class="pt-3"><a :href="links[0]" rel="noopener">19.02.20 ITZY? ITZY!</a></div>
          <div class="pt-15"><a :href="links[1]" rel="noopener">20.11.26 한국에 있지</a></div>
          <div class="pt-15"><a :href="links[2]" rel="noopener">21.03.02 CSI</a></div>
          <div class="pt-15">
            <a :href="links[3]" rel="noopener"
              >21.12.06<br />
              bㅣㄴ틈있지 겨울방학
            </a>
          </div>
          <div class="pt-45"><a :href="links[4]" rel="noopener">22.09.21 LA에 있지</a></div>
          <div class="pt-20"><a :href="links[5]" rel="noopener">24.02.08 IT'ZZZ</a></div>
          <div class="pt-20"><a :href="links[6]" rel="noopener">24.11.14 IT'ZZZ S2</a></div>
        </nav>

        <!-- 오른쪽 -->
        <nav class="w-1/2 border-l-2 text-left pl-3 border-gray-300">
          <div class="pt-20"><a :href="links[7]" rel="noopener">20.01.21 파리에 있지</a></div>
          <div class="pt-12"><a :href="links[8]" rel="noopener">21.01.01 bㅣㄴ틈있지</a></div>
          <div class="pt-20"><a :href="links[9]" rel="noopener">21.08.17 CSI2</a></div>
          <div class="pt-20">
            <a :href="links[10]" rel="noopener">
              22.05.02<br />
              bㅣㄴ틈있지 시즌2
            </a>
          </div>
          <div class="pt-3">
            <a :href="links[11]" rel="noopener">
              22.05.04<br />
              있지코지하우스
            </a>
          </div>
          <div class="pt-20"><a :href="links[12]" rel="noopener">23.10.04 다섯플릭스</a></div>
          <div class="pt-25">
            <a :href="links[13]" rel="noopener">
              24.08.29<br />
              내 생에 복날은
            </a>
          </div>
        </nav>
      </section>
    </Transition>
    <!---------------------- 2번(앨범) ---------------------->
    <Transition name="slide-fade">
      <section v-if="activeIndex === 1" class="mx-5">
        <!-- 순서 변경 버튼 -->
        <button @click="sortAsc = !sortAsc" :class="sortAsc ? 'border border-pink-500' : 'border border-pink-500 '" class="rounded w-full mb-5 flex items-center justify-center">
          <span v-if="sortAsc">▽</span>
          <span v-else>△</span>
        </button>

        <!-- 페이지 내용물 -->
        <nav class="grid grid-cols-2 w-full gap-5">
          <div v-for="(item, idx) in pagedItems" :key="idx" class="ring-1 ring-pink-500 rounded-lg p-3 flex flex-col items-center">
            <a :href="item.albumLink" rel="noopener">
              <img :src="item.albumImage" :alt="item.albumName" class="w-32 h-32 object-cover rounded-md mb-2 transition hover:scale-105" />
            </a>
            <div class="font-bold text-gray-200">{{ item.albumName }}</div>
            <div class="text-sm text-gray-400">{{ item.albumDate }}</div>
          </div>
        </nav>

        <!-- 페이지 번호 -->
        <nav class="flex items-center justify-center gap-10 mt-10">
          <button @click="prevPage" :disabled="currentPage === 1" class="px-2 py-1">〈</button>
          <span>{{ currentPage }} / {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="px-2 py-1">〉</button>
        </nav>
      </section>
    </Transition>
    <!---------------------- 3번(프로필) ---------------------->
    <Transition name="slide-fade">
      <section v-if="activeIndex === 2" class="flex flex-col">
        <!-- 예지 -->
        <div class="pl-10 flex gap-2">
          <img src="https://lv2-cdn.azureedge.net/itzy/2aead6e90d624bdea2b95354ceb99a72-01-%EC%98%88%EC%A7%80-%EA%B3%B5%ED%99%88-C1-1.jpg" class="w-50" />
          <div class="flex flex-col justify-end">
            <a href="https://www.instagram.com/yezyizhere/"><img src="/picture/sign/sign1.png" class="w-20" /></a>
            <p>YEJI / 예지 <br />2000.05.26</p>
          </div>
        </div>
        <!-- 리아 -->
        <div class="pt-10 pl-10 flex gap-2">
          <div class="flex flex-col justify-end">
            <a href="https://www.instagram.com/lia_loves___/"><img src="/picture/sign/sign2.png" class="w-20" /></a>
            <p>LIA / 리아 <br />2000.07.21</p>
          </div>
          <img src="https://lv2-cdn.azureedge.net/itzy/21b7b47fecd942bfa78082ab26cd5e0e-02-%EB%A6%AC%EC%95%84-%EA%B3%B5%ED%99%88-C1-1.jpg" class="w-50" />
        </div>
        <!-- 류진 -->
        <div class="pt-10 pl-5 flex gap-2">
          <img src="https://lv2-cdn.azureedge.net/itzy/0ecc7a02fe0a4b359ebb5334c586bb1d-03-%EB%A5%98%EC%A7%84-%EA%B3%B5%ED%99%88-C1-2.jpg" class="w-50" />
          <div class="flex flex-col justify-end">
            <a href="https://www.instagram.com/iamfinethankyouandryu/"><img src="/picture/sign/sign3.png" class="w-20" /></a>
            <p>RYUJIN / 류진 <br />2001.04.17</p>
          </div>
        </div>
        <!-- 채령 -->
        <div class="pt-10 pl-5 flex gap-2">
          <div class="flex flex-col justify-end">
            <a href="https://www.instagram.com/chaerrry0/"><img src="/picture/sign/sign4.png" class="w-20" /></a>
            <p>
              CHAERYEONG <br />
              채령 <br />2001.06.05
            </p>
          </div>
          <img src="https://lv2-cdn.azureedge.net/itzy/e15c73e1b3be4b94ad97e904b1e92fc6-04-%EC%B1%84%EB%A0%B9-%EA%B3%B5%ED%99%88-C1-1.jpg" class="w-50" />
        </div>
        <!-- 유나 -->
        <div class="pt-10 pl-10 flex gap-2">
          <img src="https://lv2-cdn.azureedge.net/itzy/ec6f74c083be48dea326d2c01372bac9-05-%EC%9C%A0%EB%82%98-%EA%B3%B5%ED%99%88-C1-1.jpg" class="w-50" />
          <div class="flex flex-col justify-end">
            <a href="https://www.instagram.com/igotyuandme/"><img src="/picture/sign/sign5.png" class="w-20" /></a>
            <p>YUNA / 유나 <br />2003.12.09</p>
          </div>
        </div>
      </section>
    </Transition>
    <!---------------------- 4번(기본) ---------------------->
    <section v-if="activeIndex === 3">
      <a href="https://www.youtube.com/watch?v=1KhOhW_O8-k"><img src="https://lv2-cdn.azureedge.net/itzy/059ba67bbd2f4456b29a3db0d8545635-MV_C3_Full_2.jpg" class="mx-auto w-80 h-50 rounded hover:scale-101 transition" /></a>

      <div class="text-center pt-10">
        <h1 class="text-lg">All in Us! 안녕하세요, ITZY입니다!</h1>
        <h2 class="text-sm pt-2">데뷔 {{ getDdayPlus(startDate) }}</h2>
      </div>

      <div class="text-center pt-5">
        <p class="pb-2">팬덤 <a href="https://midzy.kr" class="text-pink-400">MIDZY(믿지)</a></p>
        <p>응원봉 <a href="https://app.fans/shop/i/product/uven9lilmm?mp=KR" class="pl-3 gradient-text"> 라이트링 </a></p>
        <div class="pt-5"><i class="pt-5 select-none text-zinc-400">모든 이미지와 글씨에 링크가 있습니다</i></div>
      </div>
    </section>
  </section>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-fade-leave-active {
  transition: none;
  overflow: hidden;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}

.gradient-text {
  position: relative;
  display: inline-block;
  color: transparent;
  background: linear-gradient(74deg, #4285f4 0, #9b72cb 9%, #d96570 20%, #d96570 24%, #9b72cb 35%, #4285f4 44%, #9b72cb 50%, #d96570 56%, #1b1c1d 75%, #1b1c1d 100%);
  background-size: 400% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
