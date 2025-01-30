<template>
  <div class="bg-neutral-900 min-h-screen h-full">
    <Header />
    <nav class="text-gray-300">
      <!-- 1. 상단 검색창 -->
      <div class="bg-blue-600 p-4">
        <!-- 1-2. 파란색 안 글자들 -->
        <div class="text-white">Hello, MIDZY</div>
        <div class="font-bold text-2xl text-white">
          Push Play 넌 듣기만 해 <br />네 맘을 둥둥둥 울려줄게
        </div>
        <div class="flex items-right justify-end">
          <div class="text-1xl text-white text-right mt-1">
            <i>B[OO]M-BOXX 中</i>
          </div>
        </div>
        <!-- 1-3. 노래 검색창 -->
        <div class="relative">
          <form @submit.prevent="searchSong" class="relative">
            <button class="text-blue-600 absolute left-4 top-5">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              v-model="searchQuery"
              type="text"
              class="rounded-md w-full h-12 mt-2 text-sm pl-11 text-black"
              placeholder="노래를 검색해보세요"
            />
          </form>
        </div>
      </div>

      <!-- 2. 앨범 구성 -->

      <!-- 한국 앨범 -->
      <div class="p-4 flex justify-between">
        <h1 class="font-bold">{{ title[0] }}</h1>
      </div>

      <ul class="flex overflow-x-auto whitespace-nowrap ml-4">
        <li
          v-for="(img, index) in imagesTitle"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <!-- 앨범 링크 -->
          <a
            :href="linksTitle[index]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <!-- 앨범 사진 -->
            <img class="w-28 object-fit cursor-pointer rounded-lg" :src="img" />
          </a>
          <!-- 앨범 이름 -->
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleName[index] }}
          </p>
        </li>
      </ul>

      <!-- COVER_IT -->
      <div class="p-4 flex justify-between">
        <h1 class="font-bold">{{ title[1] }}</h1>
      </div>

      <ul class="flex overflow-x-auto whitespace-nowrap ml-4">
        <li
          v-for="(img, index) in imagesCoverit"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <!-- 앨범 링크 -->
          <a
            :href="linksCoverit[index]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <!-- 앨범 사진 -->
            <img class="w-28 object-fit cursor-pointer rounded-lg" :src="img" />
          </a>
          <!-- 앨범 이름 -->
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleCoverit[index] }}
          </p>
        </li>
      </ul>

      <!-- B-DAY -->
      <div class="p-4 flex justify-between">
        <h1 class="font-bold">{{ title[2] }}</h1>
      </div>

      <ul class="flex overflow-x-auto whitespace-nowrap ml-4">
        <li
          v-for="(img, index) in imagesBday"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <!-- 앨범 링크 -->
          <a :href="linksBday[index]" target="_blank" rel="noopener noreferrer">
            <!-- 앨범 사진 -->
            <img
              class="w-28 object-fit cursor-pointer rounded-lg"
              :src="require(`@/assets/picture/home/Bday/${img}.jpg`)"
            />
          </a>
          <!-- 앨범 이름 -->
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleBday[index] }}
          </p>
        </li>
      </ul>

      <!-- 해외 앨범 -->
      <div class="p-4 flex justify-between">
        <h1 class="font-bold">{{ title[3] }}</h1>
      </div>

      <ul class="flex overflow-x-auto whitespace-nowrap ml-4">
        <li
          v-for="(img, index) in imagesOver"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <!-- 앨범 링크 -->
          <a :href="linksOver[index]" target="_blank" rel="noopener noreferrer">
            <!-- 앨범 사진 -->
            <img class="w-28 object-fit cursor-pointer rounded-lg" :src="img" />
          </a>
          <!-- 앨범 이름 -->
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleOver[index] }}
          </p>
        </li>
      </ul>

      <!-- OST -->
      <div class="p-4 flex justify-between">
        <h1 class="font-bold">{{ title[4] }}</h1>
      </div>

      <ul class="flex overflow-x-auto whitespace-nowrap ml-4">
        <li
          v-for="(img, index) in imagesOst"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <!-- 앨범 링크 -->
          <a :href="linksOst[index]" target="_blank" rel="noopener noreferrer">
            <!-- 앨범 사진 -->
            <img class="w-28 object-fit cursor-pointer rounded-lg" :src="img" />
          </a>
          <!-- 앨범 이름 -->
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleOst[index] }}
          </p>
        </li>
      </ul>

      <!-- 기타 -->
      <div class="p-4 flex justify-between">
        <h1 class="font-bold">{{ title[5] }}</h1>
      </div>

      <ul class="flex overflow-x-auto whitespace-nowrap ml-4">
        <li
          v-for="(img, index) in imagesEct"
          :key="index"
          class="flex flex-col items-center pr-2"
        >
          <!-- 앨범 링크 -->
          <a :href="linksEct[index]" target="_blank" rel="noopener noreferrer">
            <!-- 앨범 사진 -->
            <img class="w-28 object-fit cursor-pointer rounded-lg" :src="img" />
          </a>
          <!-- 앨범 이름 -->
          <p class="line-clamp-1 w-28 text-center mt-2 mb-3">
            {{ titleEct[index] }}
          </p>
        </li>
      </ul>
    </nav>
    <Footer />
  </div>
</template>

<script>
import Footer from "../Template/Footer.vue";
import Header from "../Template/Header.vue";
export default {
  components: { Header, Footer },
  name: "music",
  data() {
    return {
      searchQuery: "",
      title: ["Album", "# COVER_IT", "B-DAY", "해외", "OST / 싱글", "기타"],
      // 앨범
      imagesTitle: [
        "https://cdnimg.melon.co.kr/cm/album/images/102/50/473/10250473_500.jpg?87c609bcbfac930b0cce1f692f7bff4c/melon/resize/282/sharpen/0x1",
        "https://cdnimg.melon.co.kr/cm/album/images/103/12/251/10312251_500.jpg?c86b1363452350da88ea588f5e50b921/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/104/00/522/10400522_20200309153009_500.jpg?84df9aca6a6aff2443cd8c22495d5b05/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/104/76/630/10476630_20200818114209_500.jpg?d7bc05855d230f35f8b8c864a41f8d86/melon/resize/282/sharpen/0x1",
        "https://cdnimg.melon.co.kr/cm2/album/images/106/00/760/10600760_20210429213541_500.jpg?4fb70096b3910c7eb99311aa1ef0908b/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/107/21/169/10721169_20210923195418_500.jpg?5fde9ecf53ea2dd1045b94701b60e753/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/110/04/992/11004992_20220722175827_500.jpg?7925173e004f56f8d081fdec56fbaa15/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/111/12/176/11112176_20221129102941_500.jpg?464f37ad4bf227b507ce6d3580547b9b/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/112/77/647/11277647_20230731184013_500.jpg?YUV420-90/melon/resize/282",
        "https://cdnimg.melon.co.kr/cm2/album/images/113/86/125/11386125_20240108182050_500.jpg?YUV422-90/melon/resize/282",
        "https://cdnimg.melon.co.kr/cm2/album/images/116/15/651/11615651_20241015093752_500.jpg?362f9087d3353591f8e7883c021350dc/melon/resize/282/quality/80/optimize",
      ],
      linksTitle: [
        "https://www.melon.com/album/detail.htm?albumId=10250473",
        "https://www.melon.com/album/detail.htm?albumId=10312251",
        "https://www.melon.com/album/detail.htm?albumId=10400522",
        "https://www.melon.com/album/detail.htm?albumId=10476630",
        "https://www.melon.com/album/detail.htm?albumId=10600760",
        "https://www.melon.com/album/detail.htm?albumId=10721169",
        "https://www.melon.com/album/detail.htm?albumId=11004992",
        "https://www.melon.com/album/detail.htm?albumId=11112176",
        "https://www.melon.com/album/detail.htm?albumId=11277647",
        "https://www.melon.com/album/detail.htm?albumId=11386125",
        "https://www.melon.com/album/detail.htm?albumId=11615651",
      ],
      titleName: [
        "IT'z different",
        "IT'z ICY",
        "IT'z ME",
        "NOT SHY",
        "GUESS WHO",
        "CRAZY IN LOVE",
        "CHECKMATE",
        "CHESHIRE",
        "KILL MY DOUBT",
        "BORN TO BE",
        "GOLD",
      ],

      // 커버
      imagesCoverit: [
        "https://pbs.twimg.com/media/GPrRGtbbYAAdjZ6?format=jpg&name=small",
        "https://pbs.twimg.com/media/GTExEl4aMAEcIwy?format=jpg&name=small",
        "https://pbs.twimg.com/media/GUwjRUBagAA-0dq?format=jpg&name=small",

        "https://pbs.twimg.com/media/GWM0d_4bMAAHlC-?format=jpg&name=small",
        "https://pbs.twimg.com/media/GXGIXIwbEAQ5hlK?format=jpg&name=small",
        "https://pbs.twimg.com/media/GX0FSJ3akAEO_A_?format=jpg&name=small",

        "https://pbs.twimg.com/media/GYYXSI9aYAA-YKw?format=jpg&name=small",
        "https://pbs.twimg.com/media/GdNBQkcbgAAr2Sr?format=jpg&name=small",
        "https://pbs.twimg.com/media/GfaLUI3aQAAMerJ?format=jpg&name=small",
        "https://pbs.twimg.com/media/GfyM0C9asAAhL2Y?format=jpg&name=small",
      ],
      linksCoverit: [
        "https://drive.google.com/file/d/16mAbFOT5rOF_KWSIbi3zpwzNVOkNRw2l/view?usp=drive_link",
        "https://drive.google.com/file/d/1ufKKQCHPb4Sc-oCVSzZ2puBGacmIrDCN/view?usp=drive_link",
        "https://drive.google.com/file/d/1xOqXjWboqspr4LwypVM_oy1ts7Sgg20e/view?usp=drive_link",

        "https://drive.google.com/file/d/1JOQh9hvIZcyMrYPs_S5CjFQpWI8mE3Fs/view?usp=drive_link",
        "https://drive.google.com/file/d/1zYTSKCmXOIIS4YzwIeT0nTXLXl1SRJ-2/view?usp=drive_link",
        "https://drive.google.com/file/d/1KE2QAu3jaEP36AQQGfqvM1g_IoTM-uIt/view?usp=drive_link",

        "https://drive.google.com/file/d/1GyNw5xgJKYnnRT1Qw36AUnqhAOjeXNNI/view?usp=drive_link",
        "https://drive.google.com/file/d/1DbPE0EGIzB51sZYD1tb_gO-hnS_1PIRJ/view?usp=drive_link",
        "https://drive.google.com/file/d/1xCgyHGz9IBiB4PbjxzF3Q_F0yUJ5248V/view?usp=drive_link",
        "https://drive.google.com/file/d/1jJpV1VW15XPTvc7FgFKzj7g7zJKsKnrj/view?usp=drive_link",
      ],
      titleCoverit: [
        "Lemon(류진)",
        "와르르♥(채령)",
        "Cruel Summer(예지)",

        "Espresso(유나)",
        "Ref:rain(리아)",
        "There Is a Light That Never Goes Out(류진)",

        "strawberry moon(예지)",
        "Deja vu(채령)",
        "BeMyBaby(ITZY)",
        "santa doesn't know you like i do(리아)",
      ],

      // 생일
      imagesBday: ["yeji", "lia", "ryujin", "chael", "yuna"],
      linksBday: [
        "https://drive.google.com/file/d/1lEnhwDeNIDoU6LeBWNUsrjR7MMVo9MZI/view?usp=drive_link",
        "https://drive.google.com/file/d/1lfHs9iK3RYQ9a282DM7bIVrRmspWDNnw/view?usp=drive_link",
        "https://drive.google.com/file/d/12slObNp3m7E9IHyi6YhVFvKYuACfkq0I/view?usp=drive_link",
        "https://drive.google.com/file/d/1MAlP8ZW-vYEcvOJ1jvTI794L2Qx-037A/view?usp=drive_link",
        "https://drive.google.com/file/d/1m-AGcTrjlJnyW8CoUeWBcYyH0C5umRN_/view?usp=drive_link",
      ],
      titleBday: [
        "打上花火 #0526 ",
        "Keep Me Waiting #0721",
        "Every Second #0417",
        "Blueming #0605",
        "Perfect To Me #1209",
      ],

      // 해외
      imagesOver: [
        "https://cdnimg.melon.co.kr/cm2/album/images/105/51/741/10551741_20210122111353_500.jpg?54e08dfcbd6534058411d801f4d2a853/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/106/07/845/10607845_20210514094554_500.jpg?972e693078bc01007a72978d266f4276/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/108/19/117/10819117_20211221101257_500.jpg?8a3ada06036a7c0809a417f35df73d97/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/109/10/119/10910119_20220405153951_500.jpg?1486e8dd6d4f73d4fc0be8239811d1ba/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/110/70/149/11070149_20221004162733_500.jpg?c7acf9fc29a7bdd968f784d90aa415e3/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/110/80/694/11080694_20221019153725_500.jpg?ecc059c1ab4b41a9fbe20861547ea54a/melon/resize/282/sharpen/0x1",
        "https://cdnimg.melon.co.kr/cm2/album/images/113/45/362/11345362_20231017142155_500.jpg?cf80840b6fdbf53ebfc65e1b2893cb25/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/114/77/845/11477845_20240430115106_500.jpg?27e317ae7f79f681fc0da1be4f306c34/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/116/25/589/11625589_20241025102352_500.jpg?f78acecc8dba71b4082e344dacb45403/melon/resize/282/quality/80/optimize",
      ],
      linksOver: [
        "https://www.melon.com/album/detail.htm?albumId=10551741",
        "https://www.melon.com/album/detail.htm?albumId=10607845",
        "https://www.melon.com/album/detail.htm?albumId=10819117",
        "https://www.melon.com/album/detail.htm?albumId=10910119",
        "https://www.melon.com/album/detail.htm?albumId=11070149",
        "https://www.melon.com/album/detail.htm?albumId=11080694",
        "https://www.melon.com/album/detail.htm?albumId=11345362",
        "https://www.melon.com/album/detail.htm?albumId=11477845",
        "https://www.melon.com/album/detail.htm?albumId=11625589",
      ],
      titleOver: [
        "Not Shy (Eng)",
        "In the morning",
        "IT'z ITZY",
        "Voltage",
        "Blah Blah Blah",
        "Boys Like You",
        "RINGO",
        "Algorhythm",
        "GOLD (Eng)",
      ],

      // OST / 싱글
      imagesOst: [
        "https://cdnimg.melon.co.kr/cm2/album/images/113/40/221/11340221_20231006141814_500.jpg?9e9c7deb713bc7762ba71ec6b8b148e7/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/116/79/794/11679794_20241227122422_500.jpg?80123f073567e7c2ca76c729fb9d5ddb/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/108/29/999/10829999_20211231153727_500.jpg?45f4611200b75d36e3b8015bcd0c0480/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/111/26/447/11126447_20221216170810_500.jpg?7280aaa7995600e3f8a9fbf60d8ba402/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/112/68/348/11268348_20230619104905_500.jpg?05b8d76fb2b054a9ac2a71f98f7d7e5c/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/116/55/086/11655086_20241129153157_500.jpg?84f5bfcf9a0f7be90c59c5eb1c461beb/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/116/74/761/11674761_20241220115522_500.jpg?a5e3df25029168a5d54c704863dd2522/melon/resize/282/quality/80/optimize",
      ],
      linksOst: [
        "https://www.melon.com/album/detail.htm?albumId=11340221",
        "https://www.melon.com/song/detail.htm?songId=38401364",
        "https://www.melon.com/song/detail.htm?songId=34491431",
        "https://www.melon.com/song/detail.htm?songId=35943568",
        "https://www.melon.com/song/detail.htm?songId=36478156",
        "https://www.melon.com/song/detail.htm?songId=38277600",
        "https://www.melon.com/song/detail.htm?songId=38375625",
      ],
      titleOst: [
        "SUPERPOWERS",
        "Think about you",
        "밝혀줄게 별처럼",
        "푸른꽃",
        "수백날 수천밤",
        "Why Not",
        "우리 다시 헤어지는 일은 없기로 해요",
      ],

      // 기타
      imagesEct: [
        "https://cdnimg.melon.co.kr/cm2/album/images/105/80/092/10580092_20210319125133_500.jpg?0d79b179bfa10ee7b4a5d3e8206527cb/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/106/42/604/10642604_20210701160942_500.jpg?f996515ca8df55efb292e2c291fef035/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/108/31/326/10831326_20220104102210_500.jpg?62acc6aeade1e79e57966d31d6f4ec49/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/110/16/731/11016731_20220728155102_500.jpg?2288bb828d8e46413d22cb569ec7da9b/melon/resize/282/quality/80/optimize",
        "https://cdnimg.melon.co.kr/cm2/album/images/114/21/847/11421847_20240220101715_500.jpg?c7747b84df18a07095c013a324a571f0/melon/resize/282/quality/80/optimize",
      ],
      linksEct: [
        "https://www.melon.com/album/detail.htm?albumId=10580092",
        "https://www.melon.com/album/detail.htm?albumId=10642604",
        "https://www.melon.com/song/detail.htm?songId=34496036",
        "https://www.melon.com/album/detail.htm?albumId=11016731",
        "https://www.melon.com/album/detail.htm?albumId=11421847",
      ],
      titleEct: [
        "믿지 (MIDZY)",
        "얼음깨",
        "WEAPON",
        "Break My Heart Myself",
        "Like Magic",
      ],
    };
  },
  methods: {
    searchSong() {
      if (this.searchQuery.trim()) {
        const encodedQuery = encodeURIComponent(this.searchQuery);
        const searchUrl = `https://www.melon.com/search/song/index.htm?q=${encodedQuery}`;
        window.open(searchUrl, "_blank");
      }
    },
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
