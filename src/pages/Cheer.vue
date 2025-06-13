<script setup>
import Header from '@/layout/Header.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

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
const sortAsc = ref(false)
const sortedItems = computed(() => [...items].sort((a, b) => (sortAsc.value ? Number(a.label) - Number(b.label) : Number(b.label) - Number(a.label))))

// 앨범별 세부 페이지
function goToDetail(label) {
  router.push(`/cheer/${label}`)
}

// 앨범 리스트
const items = [
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/118/48/663/11848663_20250609115946_500.jpg?797cdd044923dca67d9d79f32235be51/melon/resize/260/quality/80/optimize',
    albumName: 'GWBG',
    label: '18',
  },
  {
    albumImage: '/picture/album/kissandtell.jpg',
    albumName: 'Kiss&Tell',
    label: '17',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/117/32/611/11732611_20250310111221_500.jpg?7b8f321965c7e2f00ed43f9f86ec2244/melon/resize/282/quality/80/optimize',
    albumName: 'Air',
    label: '16',
  },
  {
    albumImage: '/picture/album/imf.jpg',
    albumName: 'Imaginary Friend',
    label: '15',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/116/25/589/11625589_20241025102352_500.jpg?f78acecc8dba71b4082e344dacb45403/melon/resize/260/quality/80/optimize',
    albumName: 'GOLD',
    label: '14',
  },
  {
    albumImage: '/picture/album/mrv.jpg',
    albumName: 'Mr.Vampire',
    label: '13',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/113/86/125/11386125_20240108182050_500.jpg?YUV422-90/melon/resize/260',
    albumName: 'BORN TO BE',
    label: '12',
  },
  {
    albumImage: '/picture/album/untouch.jpg',
    albumName: 'Untouchable',
    label: '11',
  },
  {
    albumImage: '/picture/album/nmb.jpg',
    albumName: 'None of my Business',
    label: '10',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/112/77/647/11277647_20230731184013_500.jpg?YUV420-90/melon/resize/282',
    albumName: 'CAKE',
    label: '9',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/111/12/176/11112176_20221129102941_500.jpg?464f37ad4bf227b507ce6d3580547b9b/melon/resize/282/quality/80/optimize',
    albumName: 'CHESHIRE',
    label: '8',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/110/04/992/11004992_20220722175827_500.jpg?7925173e004f56f8d081fdec56fbaa15/melon/resize/282/quality/80/optimize',
    albumName: 'SNEAKERS',
    label: '7',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/107/21/169/10721169_20210923195418_500.jpg?5fde9ecf53ea2dd1045b94701b60e753/melon/resize/282/quality/80/optimize',
    albumName: 'LOCO',
    label: '6',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/106/00/760/10600760_20210429213541_500.jpg?4fb70096b3910c7eb99311aa1ef0908b/melon/resize/282/quality/80/optimize',
    albumName: '마피아',
    label: '5',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/104/76/630/10476630_20200818114209_500.jpg?d7bc05855d230f35f8b8c864a41f8d86/melon/resize/282/sharpen/0x1',
    albumName: 'NOT SHY',
    label: '4',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm2/album/images/104/00/522/10400522_20200309153009_500.jpg?84df9aca6a6aff2443cd8c22495d5b05/melon/resize/282/quality/80/optimize',
    albumName: 'WANNABE',
    label: '3',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm/album/images/103/12/251/10312251_500.jpg?c86b1363452350da88ea588f5e50b921/melon/resize/282/quality/80/optimize',
    albumName: 'ICY',
    label: '2',
  },
  {
    albumImage: 'https://cdnimg.melon.co.kr/cm/album/images/102/50/473/10250473_500.jpg?87c609bcbfac930b0cce1f692f7bff4c/melon/resize/282/sharpen/0x1',
    albumName: '달라달라',
    label: '1',
  },
]
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200">
    <Header />

    <!---------------------- 응원법 진입 ---------------------->
    <div class="px-5 text-2xl text-center pt-10 flex gap-2 items-center justify-center">
      <p class="text-pink-500">ITZY</p>
      <p class="text-white">Cheer Guide</p>
    </div>
    <section class="py-5">
      <Transition name="slide-fade">
        <section class="mx-5 mt-5">
          <!-- 순서 변경 버튼 -->
          <button @click="sortAsc = !sortAsc" :class="sortAsc ? 'border border-pink-500' : 'border border-pink-500 '" class="rounded w-full mb-5 flex items-center justify-center">
            <span v-if="sortAsc">△</span>
            <span v-else>▽</span>
          </button>

          <!-- 페이지 내용물 -->
          <nav class="grid grid-cols-3 w-full mt-5 gap-x-3 gap-y-5">
            <div v-for="(item, idx) in pagedItems" :key="idx" class="ring-1 ring-pink-500 rounded-lg p-3 flex flex-col items-center cursor-pointer gap-1" @click="goToDetail(item.label)">
              <img :src="item.albumImage" :alt="item.albumName" class="w-20 h-20 object-cover rounded-md mb-2 transition hover:scale-105" />
              <div class="font-bold text-gray-200 text-center line-clamp-1">{{ item.albumName }}</div>
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
    </section>
  </section>
</template>
