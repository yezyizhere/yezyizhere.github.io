<template>
  <Header />
  <body class="h-screen flex flex-col items-center justify-start">
    <!-- 로고 영역 -->
    <div class="logo-wrapper w-full text-center mt-24">
      <p class="text-3xl text-yellow-500 font-bold">GOLD</p>
    </div>

    <!-- 네비게이션 바 1 (MELON) -->
    <nav class="w-36 mx-auto border-2 border-gray-300 border-b-0 mt-4">
      <div class="flex h-16 items-center justify-between">
        <div class="mx-auto text-lg">MELON</div>
        <div class="flex items-center">
          <button
            id="hamburger-btn-1"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400"
            aria-controls="mobile-menu-1"
            aria-expanded="false"
          >
            <div class="hamburger" id="hamburger-1-1">
              <i class="fa-solid fa-chevron-down text-black"></i>
            </div>
          </button>
        </div>
      </div>
      <div id="mobile-menu-1" class="hidden">
        <div class="space-y-1 px-2 pb-3">
          <!-- Android 서브메뉴 -->
          <nav class="w-32 mx-auto border-2 border-gray-300 rounded-md">
            <div class="flex h-14 items-center justify-between">
              <div class="mx-auto text-lg">Android</div>
              <div class="flex items-center">
                <button
                  id="hamburger-btn-2"
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <div class="hamburger" id="hamburger-2-1">
                    <i class="fa-solid fa-chevron-down text-black"></i>
                  </div>
                </button>
              </div>
            </div>
            <div id="mobile-menu-2" class="hidden">
              <div class="space-y-1 px-2 pb-3">
                <a
                  href="melonapp://play?menuid=0&ctype=1&cid=38100188,38100189,38100190,38100191,38100192"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300 mb-2"
                    type="button"
                  >
                    1
                  </button></a
                >
                <a
                  href="melonapp://play?menuid=0&ctype=1&cid=38100188,38100189,38100193,38100194,38100195"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300 mb-2"
                    type="button"
                  >
                    2
                  </button></a
                >
                <a
                  href="melonapp://play?menuid=0&ctype=1&cid=38100188,38100189,38100196,38100197,38100198"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300 mb-2"
                    type="button"
                  >
                    3
                  </button></a
                >
                <a
                  href="melonapp://play?menuid=0&ctype=1&cid=38100188,38100189,38100190,38100192"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300"
                    type="button"
                  >
                    4
                  </button></a
                >
              </div>
            </div>
          </nav>

          <!-- IOS 서브메뉴 -->
          <nav class="w-32 mx-auto rounded-md">
            <div class="flex items-center justify-between">
              <button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-green-300 h-14"
                type="button"
              >
                <a
                  href="melonapp://play?menuid=0&ctype=1&cid=38100188,38100189,38100190,38100191,38100192,38100188,38100189,38100193,38100194,38100195,38100188,38100189,38100196,38100197,38100198,38100188,38100189,38100190,38100192"
                  >IOS</a
                >
              </button>
            </div>
          </nav>

          <!-- PC 서브메뉴 -->
          <nav class="w-32 mx-auto border-2 border-gray-300 rounded-md">
            <div class="flex h-14 items-center justify-between">
              <div class="mx-auto text-lg">PC</div>
              <div class="flex items-center">
                <button
                  id="hamburger-btn-3"
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400"
                  aria-controls="mobile-menu-3"
                  aria-expanded="false"
                >
                  <div class="hamburger" id="hamburger-3-1">
                    <i class="fa-solid fa-chevron-down text-black"></i>
                  </div>
                </button>
              </div>
            </div>
            <div id="mobile-menu-3" class="hidden">
              <div class="space-y-1 px-2 pb-3">
                <a
                  href="melonapp://play?cType=1&menuId=1000002721&cList=38100188,38100189,38100190,38100191,38100192"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300 mb-2"
                    type="button"
                  >
                    1
                  </button></a
                >
                <a
                  href="melonapp://play?cType=1&menuId=1000002721&cList=38100188,38100189,38100193,38100194,38100195"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300 mb-2"
                    type="button"
                  >
                    2
                  </button></a
                >
                <a
                  href="melonapp://play?cType=1&menuId=1000002721&cList=38100188,38100189,38100196,38100197,38100198"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300 mb-2"
                    type="button"
                  >
                    3
                  </button></a
                >
                <a
                  href="melonapp://play?cType=1&menuId=1000002721&cList=38100188,38100189,38100190,38100192"
                  ><button
                    class="w-full text-xl border border-gray-300 p-2 rounded-lg text-center hover:bg-green-300"
                    type="button"
                  >
                    4
                  </button></a
                >
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>

    <!-- 네비게이션 바 2 (GENIE) -->
    <nav class="w-36 mx-auto border-2 border-b-0 border-gray-300">
      <div class="flex h-16 items-center justify-between">
        <div class="mx-auto text-lg">GENIE</div>
        <div class="flex items-center">
          <button
            id="hamburger-btn-4"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <div class="hamburger" id="hamburger-4-1">
              <i class="fa-solid fa-chevron-down text-black"></i>
            </div>
          </button>
        </div>
      </div>
      <div id="mobile-menu-4" class="hidden">
        <div class="space-y-1 px-2 pb-3">
          <!-- 지니 1번의 내부 -->
          <nav class="">
            <a
              href="cromegenie://scan/?landing_type=31&landing_target=108065466;108065467;108065468;108065469;108065470;108065466;108065467;108065470;108065472;108065473;108065466;108065467;108065474;108065475;108065476;108065466;108065467;108065468;108065470;"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-sky-300"
                type="button"
              >
                Android
              </button></a
            >
          </nav>

          <!-- 지니 2번의 내부 -->
          <nav class="">
            <a
              href="ktolleh00167://landing/?landing_type=31&landing_target=108065466;108065467;108065468;108065469;108065470;108065466;108065467;108065470;108065472;108065473;108065466;108065467;108065474;108065475;108065476;108065466;108065467;108065468;108065470;"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-sky-300"
                type="button"
              >
                IOS
              </button></a
            >
          </nav>

          <!-- 지니 3번의 내부 -->
          <nav class="">
            <a
              href="https://www.genie.co.kr/player/shareProcessV2?xgnm=108065466;108065467;108065468;108065469;108065470;108065466;108065467;108065470;108065472;108065473;108065466;108065467;108065474;108065475;108065476;108065466;108065467;108065468;108065470;"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-sky-300"
                type="button"
              >
                PC
              </button></a
            >
          </nav>
        </div>
      </div>
    </nav>

    <!-- 네비게이션 바 3 (BUGS) -->
    <nav class="w-36 mx-auto border-2 border-b-0 border-gray-300">
      <div class="flex h-16 items-center justify-between">
        <div class="mx-auto text-lg">BUGS</div>
        <div class="flex items-center">
          <button
            id="hamburger-btn-5"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400"
            aria-controls="mobile-menu-5"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <div class="hamburger" id="hamburger-5-1">
              <i class="fa-solid fa-chevron-down text-black"></i>
            </div>
          </button>
        </div>
      </div>
      <div id="mobile-menu-5" class="hidden">
        <div class="space-y-1 px-2 pb-3">
          <!-- 스마트폰 버튼 -->
          <nav class="">
            <a
              href="bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=33324395|33324396|33324397|33324398|33324399|33324395|33324396|33324400|33324401|33324402|33324395|33324396|33324403|33324404|33324405|33324395|33324396|33324397|33324399"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-orange-300"
                type="button"
              >
                스마트폰
              </button></a
            >
          </nav>

          <!-- PC 버튼 -->
          <nav class="">
            <a
              href="https://music.bugs.co.kr/newPlayer?trackId=33324395,33324396,33324397,33324398,33324399,33324395,33324396,33324400,33324401,33324402,33324395,33324396,33324403,33324404,33324405,33324395,33324396,33324397,33324399"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-orange-300"
                type="button"
              >
                PC
              </button></a
            >
          </nav>
        </div>
      </div>
    </nav>

    <!-- 네비게이션 바 4 (VIBE) -->
    <nav class="w-36 mx-auto border-2 border-gray-300">
      <div class="flex h-16 items-center justify-between">
        <div class="mx-auto text-lg">VIBE</div>
        <div class="flex items-center">
          <button
            id="hamburger-btn-6"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400"
            aria-controls="mobile-menu-6"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <div class="hamburger" id="hamburger-6-1">
              <i class="fa-solid fa-chevron-down text-black"></i>
            </div>
          </button>
        </div>
      </div>
      <div id="mobile-menu-6" class="hidden">
        <div class="space-y-1 px-2 pb-3">
          <!-- 메뉴 항목들 -->
          <nav class="">
            <a
              href="vibe://listen?version=3&trackIds=87485722,87485723,87485724,87485725,87485726"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-red-300"
                type="button"
              >
                1
              </button></a
            >
          </nav>

          <nav class="">
            <a
              href="vibe://listen?version=3&trackIds=87485722,87485723,87485727,87485728,87485729"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-red-300"
                type="button"
              >
                2
              </button></a
            >
          </nav>

          <nav class="">
            <a
              href="vibe://listen?version=3&trackIds=87485722,87485723,87485730,87485731,87485732"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-red-300"
                type="button"
              >
                3
              </button></a
            >
          </nav>

          <nav class="">
            <a
              href="vibe://listen?version=3&trackIds=87485722,87485723,87485724,87485726"
              ><button
                class="w-full text-xl border-2 border-gray-300 p-2 rounded-lg text-center hover:bg-red-300"
                type="button"
              >
                4
              </button></a
            >
          </nav>
        </div>
      </div>
    </nav>
  </body>
</template>

<script>
import Header from "../Template/Header.vue";

export default {
  name: "Streaming",
  components: { Header },
  data() {
    return {
      // 여기에 필요한 반응형 데이터를 정의합니다.
    };
  },
  mounted() {
    // DOM이 마운트된 후에 실행될 코드
    this.setupHamburgerMenu();
  },
  methods: {
    setupHamburgerMenu() {
      const hamburgerBtns = document.querySelectorAll(
        'button[id^="hamburger-btn-"]'
      );
      const mobileMenus = document.querySelectorAll('div[id^="mobile-menu-"]');

      hamburgerBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          const menu = document.getElementById(`mobile-menu-${index + 1}`);
          const icon = btn.querySelector("i");

          mobileMenus.forEach((menu, menuIndex) => {
            if (index !== menuIndex && !(index === 1 || index === 2)) {
              menu.classList.add("hidden");
              const otherIcon = document.querySelector(
                `button[id="hamburger-btn-${menuIndex + 1}"] i`
              );
              if (otherIcon) {
                otherIcon.classList.remove("fa-chevron-up");
                otherIcon.classList.add("fa-chevron-down");
              }
            }
          });

          if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
          } else {
            menu.classList.add("hidden");
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
          }
        });
      });
    },
  },
};
</script>
