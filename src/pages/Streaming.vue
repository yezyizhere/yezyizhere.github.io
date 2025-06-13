<script setup>
import Header from '@/layout/Header.vue'
import { ref } from 'vue'

/*************************************************************************** 변동사항 **************************************************************************/
// 스밍 순서
const TapSets = [
  ['tap1', 'tap2', 'tap3', 'tap4', 'tap5'],
  ['tap1', 'tap5', 'tap4', 'tap3', 'tap2'],
  ['tap1', 'tap4', 'tap5', 'tap2', 'tap3'],
  ['tap1', 'tap3', 'tap2', 'tap5', 'tap4', 'tap6'],
]

// 스밍 순서 긴거
const TapSetting = ['tap1', 'tap2', 'tap3', 'tap4', 'tap5', 'tap1', 'tap5', 'tap4', 'tap3', 'tap2', 'tap1', 'tap4', 'tap5', 'tap2', 'tap3', 'tap1', 'tap3', 'tap2', 'tap5', 'tap4', 'tap6']

// 멜론 링크
const melonMap = {
  tap1: '39120868',
  tap2: '39120869',
  tap3: '39120870',
  tap4: '39120871',
  tap5: '39120872',
  tap6: '38100192',
}

// 지니 링크
const genieMap = {
  tap1: '110421762',
  tap2: '110421763',
  tap3: '110421764',
  tap4: '110421765',
  tap5: '110421766',
  tap6: '108065470',
}

// 벅스 링크
const bugsMap = {
  tap1: '33563976',
  tap2: '33563977',
  tap3: '33563978',
  tap4: '33563979',
  tap5: '33563980',
  tap6: '33324399',
}

// 바이브 링크
const vibeMap = {
  tap1: '94581170',
  tap2: '94581171',
  tap3: '94581172',
  tap4: '94581173',
  tap5: '94581174',
  tap6: '87485726',
}

// 스포티파이
const spotify = 'https://open.spotify.com/playlist/3u1p3qFYWZF9lNrpSXBffW?si=1676186df0f9475d&nd=1&dlsi=0f407d44db5e4266'

/*************************************************************************** 고정사항 **************************************************************************/
// 멜론 PC
function melonPC() {
  const melonpcbase = 'melonapp://play?cType=1&menuId=1000002721&cList='
  const urls = TapSets.map((taps) => melonpcbase + taps.map((tap) => melonMap[tap]).join(','))
  setTimeout(() => {
    window.open(urls[0], '_blank')
    setTimeout(() => {
      window.open(urls[1], '_blank')
      setTimeout(() => {
        window.open(urls[2], '_blank')
        setTimeout(() => {
          window.open(urls[3], '_blank')
        }, 500)
      }, 500)
    }, 500)
  }, 500)
}

// 멜론 안드로이드
const melonAndroidBase = 'melonapp://play?ctype=1&menuid=1000002721&cid='
const melonAndroidUrls = TapSets.map((taps) => melonAndroidBase + taps.map((tap) => melonMap[tap]).join(','))
function melonAndroid(idx) {
  window.open(melonAndroidUrls[idx], '_blank')
}

// 멜론 아이폰
const melonIosBase = 'meloniphone://play/?ctype=1&menuid=0&cid='
const melonIosUrl = melonIosBase + TapSetting.map((tap) => melonMap[tap]).join(',')

// 지니 PC
const geniePCBase = 'https://www.genie.co.kr/player/shareProcessV2?xgnm='
const geniePCUrl = geniePCBase + TapSetting.map((tap) => genieMap[tap]).join(';')

// 지니 안드로이드
const genieAndroidBase = 'cromegenie://scan/?landing_type=31&landing_target='
const genieAndroidUrl = genieAndroidBase + TapSetting.map((tap) => genieMap[tap]).join(';')

// 지니 아이폰
const genieIosBase = 'ktolleh00167://landing/?landing_type=31&landing_target='
const genieIosUrl = genieIosBase + TapSetting.map((tap) => genieMap[tap]).join(';')

// 벅스 핸드폰
const bugsPhoneBase = 'bugs3://app/tracks/lists?title=%EC%A0%84%EC%B2%B4%EB%93%A3%EA%B8%B0&miniplay=Y&track_ids='
const bugsPhoneUrl = bugsPhoneBase + TapSetting.map((tap) => bugsMap[tap]).join('|')

// 벅스 PC
const bugsPCBase = 'https://music.bugs.co.kr/newPlayer?trackId='
const bugsPCUrl = bugsPCBase + TapSetting.map((tap) => bugsMap[tap]).join(',')

// 바이브 폰
const vibeBase = 'vibe://listen?version=3&trackIds='
const vibeAPPUrl = TapSets.map((taps) => vibeBase + taps.map((tap) => vibeMap[tap]).join(','))
function vibeUrl(idx) {
  window.open(vibeAPPUrl[idx], '_blank')
}

// 메뉴 변경
const pageIndex = ref(0)
function setActive(idx) {
  pageIndex.value = idx
}

// 새로고침
function Refresh() {
  window.location.reload()
}

// 기본페이지 스타일
const boxtype = ['hover:bg-green-500 border-green-500 text-zinc-300 hover:text-white rounded-lg bg-zinc-800 rounded py-2 text-lg cursor-pointer transition border-2', 'hover:bg-orange-500 border-orange-500 text-orange-500 hover:text-white rounded-lg bg-zinc-800 rounded py-2 text-lg cursor-pointer transition border-2', 'hover:bg-purple-400 border-purple-400 text-purple-400 hover:text-white rounded-lg bg-zinc-800 rounded py-2 text-lg cursor-pointer transition border-2', 'border-gray-400 text-gray-300 rounded-lg bg-zinc-800 rounded py-3 transition border-2']
const boxStyles = ['hover:bg-green-500 border-green-500 text-green-500 hover:text-white rounded-lg bg-zinc-800 rounded py-10 text-lg cursor-pointer transition border-2', 'hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white rounded-lg bg-zinc-800 rounded py-10 text-lg cursor-pointer transition border-2', 'hover:bg-orange-500 border-orange-500 text-orange-500 hover:text-white rounded-lg bg-zinc-800 rounded py-10 text-lg cursor-pointer transition border-2', 'hover:bg-purple-400 border-purple-400 text-purple-400 hover:text-white rounded-lg bg-zinc-800 rounded py-10 text-lg cursor-pointer transition border-2', 'hover:bg-emerald-500 border-emerald-500 text-emerald-400 hover:text-white rounded-lg bg-zinc-800 rounded py-10 text-lg cursor-pointer transition border-2', 'hover:bg-gray-700 border-gray-400 text-gray-300 hover:text-white rounded-lg bg-zinc-800 rounded py-10 text-lg cursor-pointer transition border-2']
</script>

<template>
  <section class="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-10">
    <Header />
    <section class="px-7 flex-1 h-full flex flex-col">
      <!-- 새로고침/상단글 -->
      <button @click="Refresh" class="flex flex-col pb-5">
        <div class="text-2xl text-center mt-10">원클릭 스밍리스트</div>
        <div class="text-xl text-center text-red-400">Girls Will Be Girls</div>
        <div class="text-gray-500 text-center">↑ 누르면 새로고침</div>
      </button>

      <!-- 0. 기본 페이지 -->
      <nav v-if="pageIndex === 0" class="grid grid-cols-2 mx-5 items-center text-center justify-center gap-5">
        <div @click="setActive(1)" :class="boxStyles[0]">Melon</div>
        <div @click="setActive(2)" :class="boxStyles[1]">Genie</div>
        <div @click="setActive(3)" :class="boxStyles[2]">Bugs</div>
        <div @click="setActive(4)" :class="boxStyles[3]">VIBE</div>
        <a :href="spotify" @click="setActive(5)" :class="boxStyles[4]">Spotify</a>
        <div @click="setActive(6)" :class="boxStyles[5]">사용방법</div>
      </nav>

      <!-- 1. 멜론 -->
      <nav v-if="pageIndex === 1" class="grid grid-cols-2 mx-5 items-center text-center justify-center gap-5">
        <div class="flex flex-col gap-4">
          <div @click="setActive(0)" :class="boxtype[0]">〈 뒤로가기</div>
          <div @click="setActive(11)" :class="boxtype[0]">PC 체크</div>
        </div>
        <div @click="melonPC" :class="boxStyles[0]">PC</div>
        <div @click="setActive(12)" :class="boxStyles[0]">Android</div>
        <a :href="melonIosUrl" :class="boxStyles[0]">iOS</a>
      </nav>
      <!-- PC 체크 팝업 -->
      <nav v-if="pageIndex === 11" class="mx-5 gap-5 rounded-lg border border-green-500">
        <div class="flex justify-between mx-5 mt-3">
          <div class="text-lg text-gray-300">PC 체크 방법</div>
          <button @click="setActive(1)" class="text-xl font-bold text-gray-500 hover:text-gray-300">✕</button>
        </div>
        <p class="m-5 text-gray-300">
          아래 밑줄 친 글씨를 눌러<br />
          팝업 승인을 해주세요<br />
          중복곡 방지를 위해<br />
          순차적으로 등록합니다<br />
          팝업차단이나 조작 시<br />
          정상적으로 되지 않습니다
        </p>
        <a href="melonapp://play?cType=1&menuId=1000002721&cList=31606729" class="mx-5 underline text-green-500">테스트</a>
        <p class="pb-3 mx-5">↑ 항상 허용 체크!</p>
      </nav>
      <!-- 멜론 안드로이드 -->
      <nav v-if="pageIndex === 12" class="grid grid-cols-2 mx-5 items-center text-center justify-center gap-5">
        <div @click="melonAndroid(0)" :class="boxStyles[0]">1</div>
        <div @click="melonAndroid(1)" :class="boxStyles[0]">2</div>
        <div @click="melonAndroid(2)" :class="boxStyles[0]">3</div>
        <div @click="melonAndroid(3)" :class="boxStyles[0]">4</div>
      </nav>

      <!-- 2. 지니 -->
      <nav v-if="pageIndex === 2" class="grid grid-cols-2 mx-5 items-center text-center justify-center gap-5">
        <div @click="setActive(0)" :class="boxStyles[1]">〈 뒤로가기</div>
        <a :href="geniePCUrl" :class="boxStyles[1]">PC</a>
        <a :href="genieAndroidUrl" :class="boxStyles[1]">Android</a>
        <a :href="genieIosUrl" :class="boxStyles[1]">iOS</a>
      </nav>

      <!-- 3. 벅스 -->
      <nav v-if="pageIndex === 3" class="grid grid-cols-2 mx-5 items-center text-center justify-center gap-5">
        <a :href="bugsPCUrl" :class="boxStyles[2]">PC</a>
        <a :href="bugsPhoneUrl" :class="boxStyles[2]">APP</a>
      </nav>
      <div v-if="pageIndex === 3" @click="setActive(0)" :class="boxtype[1]" class="text-center m-5">〈 뒤로가기</div>

      <!-- 4. 바이브 -->
      <nav v-if="pageIndex === 4" class="grid grid-cols-2 mx-5 items-center text-center justify-center gap-5">
        <button @click="vibeUrl(0)" :class="boxStyles[3]">1</button>
        <button @click="vibeUrl(1)" :class="boxStyles[3]">2</button>
        <button @click="vibeUrl(2)" :class="boxStyles[3]">3</button>
        <button @click="vibeUrl(3)" :class="boxStyles[3]">4</button>
      </nav>
      <div v-if="pageIndex === 4" @click="setActive(0)" :class="boxtype[2]" class="text-center m-5">〈 뒤로가기</div>

      <!-- 5. 사용방법 -->
      <div v-if="pageIndex === 6" :class="boxtype[3]" class="mx-5 p-3">
        <div class="flex justify-between mx-5 mt-3">
          <div class="text-lg text-gray-300">사용 설명서</div>
          <button @click="setActive(0)" class="text-xl font-bold text-gray-500 hover:text-gray-300">✕</button>
        </div>
        <p class="m-5 text-gray-300">
          본인 환경에 맞는 시스템에<br />
          간편하게 스밍리스트를<br />
          등록하는 시스템입니다.<br /><br />

          원하는 루트에 이동해서<br />
          간편하게 저장하세요<br /><br />

          1,2,3,4는 순서에 맞게<br />
          순차적으로 눌러주셔야<br />
          등록이 됩니다.<br />
          (중복곡 방지 시스템)
        </p>
      </div>
    </section>
  </section>
  <!-- 0:기본 1:멜론 11:pc체크 12:안드로이드 -->
  <!-- 2:지니 3:벅스 4:바이브 5:스포티파이 6:설명 -->
</template>
