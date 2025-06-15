<script setup>
import Header from '@/layout/Header.vue'
import { ref, computed } from 'vue'

const pageIndex = ref(0)

const onequestions = [{ text: '밥보다 간식을 더 먹는거 같다' }, { text: '나는 강렬한 댄스를 보고싶다' }, { text: '내 최애는 소통이 많다' }, { text: '나는 고양이상이 좋다' }, { text: '내 최애는 속이 깊다' }]
const twoquestions = [{ text: '내 최애는 강아지를 매우 좋아한다' }, { text: '나는 강아지상이 좋다' }, { text: '내 최애는 깻잎을 싫어할거같다' }, { text: '내 최애는 게임을 못한다' }, { text: '내 최애는 기계치인거같다' }]
const threequestions = [{ text: '내 최애는 배우상이다' }, { text: '내 최애는 시니컬하다' }, { text: '나는 드라마를 많이 본다' }, { text: '내 최애는 인맥이 넓다' }, { text: '내 최애는 벌레를 무서워한다' }]
const fourquestions = [{ text: '내 최애는 멍때리기 장인이다' }, { text: '나는 부드러운 춤선을 선호한다' }, { text: '내 최애는 새를 무서워한다' }, { text: '내 최애는 부지런하다' }, { text: '내 최애는 고소공포증이 있다' }]
const fivequestions = [{ text: '내 최애는 눈이 크다' }, { text: '내 최애는 키가 크다' }, { text: '내 최애는 먹는것을 좋아한다' }, { text: '나는 봉지라면보단 컵라면을 더 좋아한다' }, { text: '나는 애교 많은 사람이 좋다' }]

const answers1 = ref(Array(onequestions.length).fill(null))
const answers2 = ref(Array(twoquestions.length).fill(null))
const answers3 = ref(Array(threequestions.length).fill(null))
const answers4 = ref(Array(fourquestions.length).fill(null))
const answers5 = ref(Array(fivequestions.length).fill(null))

const onescore = ref(0)
const twoscore = ref(0)
const threescore = ref(0)
const fourscore = ref(0)
const fivescore = ref(0)

function setActive(idx) {
  if (pageIndex.value === 1 && idx === 2) {
    onescore.value = answers1.value.reduce((acc, cur) => acc + (Number(cur) || 0), 0)
  }
  if (pageIndex.value === 2 && idx === 3) {
    twoscore.value = answers2.value.reduce((acc, cur) => acc + (Number(cur) || 0), 0)
  }
  if (pageIndex.value === 3 && idx === 4) {
    threescore.value = answers3.value.reduce((acc, cur) => acc + (Number(cur) || 0), 0)
  }
  if (pageIndex.value === 4 && idx === 5) {
    fourscore.value = answers4.value.reduce((acc, cur) => acc + (Number(cur) || 0), 0)
  }
  if (pageIndex.value === 5 && idx === 6) {
    fivescore.value = answers5.value.reduce((acc, cur) => acc + (Number(cur) || 0), 0)
  }
  pageIndex.value = idx
}

const memberNames = ['예지', '리아', '류진', '채령', '유나']
const memberScores = computed(() => [onescore.value, twoscore.value, threescore.value, fourscore.value, fivescore.value])
const memberPercents = computed(() => memberScores.value.map((score) => Math.round((score / 25) * 100)))

// 최고점 찾기
const maxScore = computed(() => Math.max(...memberScores.value))
// ITZY 순서대로 동점 멤버 추출
const topMembers = computed(() => memberNames.filter((_, i) => memberScores.value[i] === maxScore.value))

// 조합명칭 매핑
const pairNames = {
  '예지,리아': '예지수',
  '예지,류진': '땡덩',
  '예지,채령': '령지곤지',
  '예지,유나': '맏막',
  '리아,류진': '진리아',
  '리아,채령': '채리즈',
  '리아,유나': '궁합즈',
  '류진,채령': '01즈',
  '류진,유나': '신자매',
  '채령,유나': '유채꽃',
}
const tripleNames = {
  '예지,리아,류진': '예지수류',
  '예지,류진,채령': '캣즈',
  '예지,류진,유나': '륮덩신나',
  '리아,류진,채령': '미들즈',
  '류진,채령,유나': '한람퀸카즈',
}

// 최종 메이트명 결정
const mateName = computed(() => {
  const arr = topMembers.value
  if (arr.length === 1) return arr[0]
  if (arr.length === 2) {
    const key = arr.join(',')
    return pairNames[key] || arr.join(', ')
  }
  if (arr.length === 3) {
    const key = arr.join(',')
    return tripleNames[key] || arr.join(', ')
  }
  if (arr.length === 4) return 'ITZY'
  if (arr.length === 5) return 'ITZY'
  return ''
})

// 새로고침
function Refresh() {
  window.location.reload()
}
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-10">
    <Header />

    <!-- 기본 페이지 -->
    <section v-if="pageIndex === 0" class="flex flex-col justify-center items-center min-h-[80vh] px-7">
      <div class="flex flex-col pb-5 items-center">
        <div class="text-2xl text-center md:text-5xl">나만의 최애 찾기</div>
        <div class="text-sm text-center text-blue-400 mt-2 md:text-xl">단순 재미로 참고하시길 바랍니다</div>
      </div>

      <div class="text-center">
        <p class="text-blue-400 text-xl md:text-2xl md:mt-15">〔 룰 설명 〕</p>
        <div class="flex flex-col gap-3 justify-center items-center">
          <p class="mt-5">1. 본인의 최애를 생각하세요</p>
          <p>2. 얼마나 해당되는지 선택하세요</p>
          <p>1: 아닌거 같다 ~ 5: 매우 그렇다</p>

          <button @click="setActive(1)" class="mt-5 p-2 w-20 rounded ring-2">시작</button>
        </div>
      </div>
    </section>

    <!-- 1번 페이지 -->
    <section v-if="pageIndex === 1" class="flex flex-col justify-center items-center min-h-[80vh] px-5 md:px-7 mt-5">
      <div class="w-full max-w-xl space-y-4">
        <div v-for="(question, idx) in onequestions" :key="idx" class="flex items-center justify-between border-b border-zinc-600 py-3">
          <span class="text-base md:text-lg"> {{ idx + 1 }}. {{ question.text }} </span>
          <div class="flex gap-2 md:gap-3">
            <label v-for="score in [1, 2, 3, 4, 5]" :key="score" class="flex flex-col items-center">
              <input type="radio" :name="'q' + idx" :value="score" v-model="answers1[idx]" class="peer hidden" />
              <span class="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:scale-110 cursor-pointer">
                <span class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition"></span>
              </span>
              <span class="text-xs mt-1 md:text-sm">{{ score }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-end w-full max-w-xl">
        <button @click="setActive(2)" class="p-1 w-20 rounded ring-2">다음</button>
      </div>
    </section>

    <!-- 2번 페이지 -->
    <section v-if="pageIndex === 2" class="flex flex-col justify-center items-center min-h-[80vh] px-5 md:px-7 mt-5">
      <div class="w-full max-w-xl space-y-4">
        <div v-for="(question, idx) in twoquestions" :key="idx" class="flex items-center justify-between border-b border-zinc-600 py-3">
          <span class="text-base md:text-lg"> {{ idx + 1 }}. {{ question.text }} </span>
          <div class="flex gap-2 md:gap-3">
            <label v-for="score in [1, 2, 3, 4, 5]" :key="score" class="flex flex-col items-center">
              <input type="radio" :name="'q' + idx" :value="score" v-model="answers2[idx]" class="peer hidden" />
              <span class="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:scale-110 cursor-pointer">
                <span class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition"></span>
              </span>
              <span class="text-xs mt-1 md:text-sm">{{ score }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between w-full max-w-xl">
        <button @click="setActive(1)" class="p-1 w-20 rounded ring-2">이전</button>
        <button @click="setActive(3)" class="p-1 w-20 rounded ring-2">다음</button>
      </div>
    </section>

    <!-- 3번 페이지 -->
    <section v-if="pageIndex === 3" class="flex flex-col justify-center items-center min-h-[80vh] px-5 md:px-7 mt-5">
      <div class="w-full max-w-xl space-y-4">
        <div v-for="(question, idx) in threequestions" :key="idx" class="flex items-center justify-between border-b border-zinc-600 py-3">
          <span class="text-base md:text-lg"> {{ idx + 1 }}. {{ question.text }} </span>
          <div class="flex gap-2 md:gap-3">
            <label v-for="score in [1, 2, 3, 4, 5]" :key="score" class="flex flex-col items-center">
              <input type="radio" :name="'q' + idx" :value="score" v-model="answers3[idx]" class="peer hidden" />
              <span class="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:scale-110 cursor-pointer">
                <span class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition"></span>
              </span>
              <span class="text-xs mt-1 md:text-sm">{{ score }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between w-full max-w-xl">
        <button @click="setActive(2)" class="p-1 w-20 rounded ring-2">이전</button>
        <button @click="setActive(4)" class="p-1 w-20 rounded ring-2">다음</button>
      </div>
    </section>

    <!-- 4번 페이지 -->
    <section v-if="pageIndex === 4" class="flex flex-col justify-center items-center min-h-[80vh] px-5 md:px-7 mt-5">
      <div class="w-full max-w-xl space-y-4">
        <div v-for="(question, idx) in fourquestions" :key="idx" class="flex items-center justify-between border-b border-zinc-600 py-3">
          <span class="text-base md:text-lg"> {{ idx + 1 }}. {{ question.text }} </span>
          <div class="flex gap-2 md:gap-3">
            <label v-for="score in [1, 2, 3, 4, 5]" :key="score" class="flex flex-col items-center">
              <input type="radio" :name="'q' + idx" :value="score" v-model="answers4[idx]" class="peer hidden" />
              <span class="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:scale-110 cursor-pointer">
                <span class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition"></span>
              </span>
              <span class="text-xs mt-1 md:text-sm">{{ score }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between w-full max-w-xl">
        <button @click="setActive(3)" class="p-1 w-20 rounded ring-2">이전</button>
        <button @click="setActive(5)" class="p-1 w-20 rounded ring-2">다음</button>
      </div>
    </section>

    <!-- 5번 페이지 -->
    <section v-if="pageIndex === 5" class="flex flex-col justify-center items-center min-h-[80vh] px-5 md:px-7 mt-5">
      <div class="w-full max-w-xl space-y-4">
        <div v-for="(question, idx) in fivequestions" :key="idx" class="flex items-center justify-between border-b border-zinc-600 py-3">
          <span class="text-base md:text-lg"> {{ idx + 1 }}. {{ question.text }} </span>
          <div class="flex gap-2 md:gap-3">
            <label v-for="score in [1, 2, 3, 4, 5]" :key="score" class="flex flex-col items-center">
              <input type="radio" :name="'q' + idx" :value="score" v-model="answers5[idx]" class="peer hidden" />
              <span class="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:scale-110 cursor-pointer">
                <span class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition"></span>
              </span>
              <span class="text-xs mt-1 md:text-sm">{{ score }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between w-full max-w-xl">
        <button @click="setActive(4)" class="p-1 w-20 rounded ring-2">이전</button>
        <button @click="setActive(6)" class="p-1 w-20 rounded ring-2">다음</button>
      </div>
    </section>

    <section v-if="pageIndex === 6" class="flex flex-col justify-center items-center min-h-[80vh] mt-5 px-2 md:px-7 py-8">
      <!-- 결과 카드 -->
      <div class="w-full max-w-xl p-6 md:p-10 flex flex-col gap-8">
        <!-- 나의 메이트 표시 -->
        <div class="flex flex-col items-center gap-2">
          <div class="text-lg md:text-xl font-semibold text-zinc-300 tracking-wide mb-2"><span class="inline-block animate-bounce">🎉</span> 나의 소울 메이트는</div>
          <div class="text-3xl md:text-4xl font-extrabold px-4 py-2 rounded-xl text-blue-400">
            {{ mateName }}
          </div>
        </div>

        <!-- 멤버별 점수 및 게이지 -->
        <div class="flex flex-col gap-4">
          <div v-for="(name, idx) in memberNames" :key="name" class="flex items-center gap-3 md:gap-5">
            <span class="w-14 md:w-20 font-bold text-base md:text-lg text-zinc-200 text-right">
              {{ name }}
            </span>
            <div class="flex-1 flex items-center">
              <div class="relative w-full h-5 md:h-7 bg-zinc-700 rounded-lg overflow-hidden shadow-inner">
                <div class="h-full rounded-lg transition-all duration-500" :class="['bg-gradient-to-r', idx === 0 ? 'from-zinc-700 to-zinc-900' : idx === 1 ? 'from-sky-400 to-sky-600' : idx === 2 ? 'from-red-400 to-red-600' : idx === 3 ? 'from-gray-100 to-gray-400' : 'from-pink-400 to-pink-600']" :style="{ width: memberPercents[idx] + '%' }"></div>
                <span class="absolute right-2 top-1/2 -translate-y-1/2 text-xs md:text-base font-bold text-white drop-shadow"> {{ memberPercents[idx] }}% </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 버튼 -->
        <div class="flex justify-center mt-4">
          <button @click="Refresh" class="px-6 py-2 rounded-lg border border-white text-white font-bold">현실부정</button>
        </div>
      </div>
    </section>
  </section>
</template>
