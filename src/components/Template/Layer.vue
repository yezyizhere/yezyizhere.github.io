<template>
  <nav class="text-gray-300">
    <!-- 1. 여행 -->
    <div class="pl-3 pt-1 mt-3">
      <p class="text-lg font-bold mb-2">{{ title[0] }}</p>

      <ul class="flex overflow-x-auto whitespace-nowrap">
        <li
          v-for="(img, index) in imagesTrip"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <a :href="linksTrip[index]" target="_blank" rel="noopener noreferrer">
            <img
              class="h-38 w-32 object-fit cursor-pointer"
              :src="require(`@/assets/picture/home/contens/${img}.jpg`)"
            />
          </a>
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleTrip[index] }}
          </p>
        </li>
      </ul>
    </div>

    <!-- 2. 자체 컨텐츠 -->
    <div class="pl-3 pt-1 mt-3">
      <p class="text-lg font-bold mb-2">{{ title[1] }}</p>

      <ul class="flex overflow-x-auto whitespace-nowrap">
        <li
          v-for="(img, index) in imagesContens"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <a
            :href="linksContens[index]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-38 w-32 object-fit cursor-pointer"
              :src="require(`@/assets/picture/home/contens/${img}.jpg`)"
            />
          </a>
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleContens[index] }}
          </p>
        </li>
      </ul>
    </div>

    <!-- 3. 브이로그 -->
    <div class="pl-3 pt-1 mt-3">
      <p class="text-lg font-bold mb-2">{{ title[2] }}</p>

      <ul class="flex overflow-x-auto whitespace-nowrap">
        <li
          v-for="(img, index) in imagesVLOG"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <a :href="linksVLOG[index]" target="_blank" rel="noopener noreferrer">
            <img
              class="h-38 w-32 object-fit cursor-pointer"
              :src="require(`@/assets/picture/home/contens/${img}.jpg`)"
            />
          </a>
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleVLOG[index] }}
          </p>
        </li>
      </ul>
    </div>

    <!-- 4. 브이로그 -->
    <div class="pl-3 pt-1 mt-3">
      <p class="text-lg font-bold mb-2">{{ title[3] }}</p>

      <ul class="flex overflow-x-auto whitespace-nowrap">
        <li
          v-for="(img, index) in imagesBI"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <a :href="linksBI[index]" target="_blank" rel="noopener noreferrer">
            <img
              class="h-38 w-32 object-fit cursor-pointer"
              :src="require(`@/assets/picture/home/contens/${img}.jpg`)"
            />
          </a>
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleBI[index] }}
          </p>
        </li>
      </ul>
    </div>

    <!-- 5. 기타 -->
    <div class="pl-3 pt-1 mt-3">
      <p class="text-lg font-bold mb-2">{{ title[4] }}</p>

      <ul class="flex overflow-x-auto whitespace-nowrap">
        <li
          v-for="(img, index) in imagesEct"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <a :href="linksEct[index]" target="_blank" rel="noopener noreferrer">
            <img
              class="h-38 w-32 object-fit cursor-pointer"
              :src="require(`@/assets/picture/home/contens/${img}.jpg`)"
            />
          </a>
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleEct[index] }}
          </p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Layer",
  data() {
    return {
      title: ["여행(Trip)", "자체 컨텐츠", "VLOG", "bㅣㄴ틈있지", "그 외.."],
      imagesTrip: ["Paris", "itcoha", "LA", "boknal", "andong"],
      titleTrip: [
        "Paris et ITZY",
        "있지코지하우스",
        "LA@ITZY",
        "내 생에 복날은,",
        "한국에 있지",
      ],
      linksTrip: [
        "https://youtube.com/playlist?list=PLUozvCC9n2KG1nnKTS-Yexfq1-vBkKL9j&si=zDnMkPXlU0_L6l0M",
        "https://youtube.com/playlist?list=PLMvTMGtQQeVpEja-msikvu2bJPH8TU0fA&si=15CEZGAFRxNL9v6C",
        "https://youtube.com/playlist?list=PLU0AT1n0fMTrAUxGIU750ry5eHnffeyOY&si=TjeBwYZ3KyUfNtFa",
        "https://youtube.com/playlist?list=PLnje7IHR9mTbkPf-sYoW-NMsU5WoG2oSM&si=NKHS1RMqJ13scC2c",
        "https://youtube.com/playlist?list=PLnje7IHR9mTbcpn3t6BkND5MlCzZQ37TP&si=BFB63T3MyjUgaNyY",
      ],
      imagesContens: ["itzzz2", "itzzz", "flix", "doolde", "csi2", "csi1"],
      titleContens: [
        "IT'ZZZ 2",
        "IT'ZZZ",
        "다섯플릭스",
        "둘씩의데이트",
        "CSI 2",
        "CSI",
      ],
      linksContens: [
        "https://www.youtube.com/playlist?list=PLnje7IHR9mTZr-5bn7X6H0OnuvH95XHmj",
        "https://youtube.com/playlist?list=PLnje7IHR9mTZ_1snWNcW_KYV_zv5x1MSI&si=M9eesYNqRuo3mJ9b",
        "https://youtube.com/playlist?list=PLrmYVBVMRWSEMPtzAJnLBnR3MpwmsVtDe&si=ZItp-I0lp6p20J9l",
        "https://youtube.com/playlist?list=PLnje7IHR9mTaHQhvDIEYSPk216GyDpxbN&si=IR8G8N9D_C5OBHyk",
        "https://youtube.com/playlist?list=PLnje7IHR9mTZQDs_STWSZUCeWEe2zOEwd&si=AJM_1Ws-VBjIwP2D",
        "https://youtube.com/playlist?list=PLwQXFsY4igzKuEKg2ojKSch0Wtv-HDKWr&si=A2k3MKiU07tGlTCk",
      ],
      imagesVLOG: ["vlog", "instalog", "v2log", "2tzy"],
      titleVLOG: ["VLOG", "Insta-log", "V2LOG:2022", "2TZY:2021"],
      linksVLOG: [
        "https://youtube.com/playlist?list=PLnje7IHR9mTYLXt0uZCApNcHs1rJb71S7&si=abdlkulw6_rIwMtd",
        "https://www.youtube.com/playlist?list=PLnje7IHR9mTZzHHPZ07o9BkVYj7ZXqvjn",
        "https://www.youtube.com/playlist?list=PLnje7IHR9mTZn0tdkIoYYarCWo9glwQ-Z",
        "https://www.youtube.com/playlist?list=PLnje7IHR9mTayyAO5dThICsBzSV0gX341",
      ],
      imagesBI: ["b1", "bw", "b2"],
      titleBI: ["빈틈있지1", "겨울방학", "빈틈있지2"],
      linksBI: [
        "https://youtube.com/playlist?list=PLhGW6X7DE42-vDMaJ7IOAhO1FQUOnw0Xq&si=GDIJ6FojE0qaKgIY",
        "https://youtube.com/playlist?list=PLnje7IHR9mTbgUdQeod-nhMARAB4VE2gM&si=ezLUZWjoLNWjMTRH",
        "https://youtube.com/playlist?list=PLdg1BYAK8zoKcVA4XrdQxSPPZMK7FVT81&si=0PUPvGsiLhW-7zlx",
      ],
      imagesEct: ["itzy", "yu", "ck", "cb"],
      titleEct: ["ITZY? ITZY!", "유난히빛이나", "채령K대가다", "채배불"],
      linksEct: [
        "https://youtube.com/playlist?list=PLnje7IHR9mTapUR9RLHcO8o1AA2S60QEZ&si=ohRmE5NeBPxH1xtw",
        "https://youtube.com/playlist?list=PLdg1BYAK8zoKcVA4XrdQxSPPZMK7FVT81&si=0PUPvGsiLhW-7zlx",
        "https://youtube.com/playlist?list=PLnje7IHR9mTZL7bHwZKlggpzFyMHOd82r&si=U_NbwKHRS1MwGMho",
        "https://youtube.com/channel/UCDhM2k2Cua-JdobAh5moMFg",
      ],
    };
  },
};
</script>

<style>
.overflow-x-auto {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.whitespace-nowrap {
  white-space: nowrap;
}
</style>
