<template>
  <!-- Header NavBar -->
  <nav class="bg-neutral-800">
    <!-- 메뉴 설정창 -->
    <div class="mx-auto max-w-7xl px-4">
      <div class="relative flex h-16 items-center justify-between">
        <!-- 메뉴 열고 닫기 -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            id="hamburger-btn"
            type="button"
            class="head-btn"
            aria-controls="mobile-menu"
            :aria-expanded="isMenuExpanded"
            @click="toggleMenu"
          >
            <span class="absolute -inset-0.5"></span>

            <!-- 햄버거 아이콘 -->
            <div
              class="hamburger"
              :class="{ 'is-active': isMenuExpanded }"
              id="hamburger-1"
            >
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </button>
        </div>

        <div class="pc-box">
          <!-- 아이콘 -->
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/"
              ><img class="h-8 w-9" src="../../assets/logo.png" alt="ITZY"
            /></router-link>
          </div>
          <!-- pc 메뉴 -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link to="/" class="menu-ect">홈</router-link>
              <router-link to="/picture" class="menu-ect"
                >사진</router-link
              >
              <router-link to="/music" class="menu-ect">음반</router-link>
              <router-link to="/cheer" class="menu-ect">응원법</router-link>
              <router-link to="/streaming" class="menu-ect"
                >스트리밍</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 모바일 메뉴 -->
      <div
        :class="{ hidden: !isMenuExpanded }"
        id="mobile-menu"
        class="mobile-set"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <router-link to="/" class="mobile-home" aria-current="page"
            >홈</router-link
          >
          <router-link to="/picture" class="menu-ect"
            >사진</router-link
          >
          <router-link to="/music" class="menu-ect">음반</router-link>
          <router-link to="/cheer" class="menu-ect">응원법</router-link>
          <router-link to="/streaming" class="menu-ect"
            >스트리밍</router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <!-- BODY -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuExpanded: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuExpanded = !this.isMenuExpanded;
    },
  },
};
</script>

<style>
/* 햄버거 스타일 */
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
  transform: translateY(5px) rotate(45deg);
}

.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 헤더 스타일 */
.head-btn {
  @apply relative inline-flex items-center justify-center rounded-md p-3 text-gray-400;
}

.pc-box {
  @apply flex flex-1 items-center justify-center sm:items-stretch sm:justify-between;
}

.mobile-set {
  @apply absolute top-16 left-0 w-full bg-neutral-800 shadow-lg z-50 rounded-b-lg;
}

.mobile-home {
  @apply block rounded-md bg-neutral-900 ml-3 mr-3 px-3 py-2 text-base font-medium text-white;
}

.menu-ect {
  @apply block rounded-md ml-3 mr-3 px-3 py-2 text-base font-medium text-gray-300 hover:bg-neutral-900 hover:text-white;
}
</style>
