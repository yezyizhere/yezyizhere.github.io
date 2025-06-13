<script setup>
import { ref } from 'vue'

// 메뉴 동작
const openMenu = ref(false)
function menuOpen() {
  openMenu.value = !openMenu.value
}
</script>

<template>
  <section class="bg-neutral-900 border-b-1 border-zinc-200 text-zinc-200 h-15">
    <!-- 상단바 -->
    <nav class="h-full flex items-center justify-between mx-7">
      <!-- 홈 버튼 -->
      <router-link to="/"><img src="/picture/logo.png" alt="ITZY" class="w-8 h-7" /></router-link>

      <!-- 우측 메뉴 -->
      <div class="flex gap-5">
        <!-- 메뉴 펼치기 -->
        <button type="button" :aria-expanded="openMenu" @click="menuOpen">
          <div class="hamburger" :class="{ 'is-active': openMenu }">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- 모바일 메뉴 -->
    <nav class="relative z-1 bg-neutral-900 overflow-hidden transition-all duration-300 ease-in-out" :class="openMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
      <!-- 메뉴 내용 -->
      <div class="px-7 py-5 flex flex-col gap-5 border-b-1 border-zinc-200">
        <router-link to="/">메인 페이지</router-link>
        <router-link to="/live">라이브</router-link>
        <router-link to="/broadcast">공방참여</router-link>
        <router-link to="/cheer">응원법</router-link>
        <router-link to="/streaming">스밍리스트</router-link>
      </div>
    </nav>
  </section>
</template>

<style scoped>
.hamburger .line {
  width: 20px;
  height: 2px;
  background-color: #ecf0f1;
  display: block;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
}

.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.router-link-exact-active {
  color: #ea4e9c;
}
</style>
