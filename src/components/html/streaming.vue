<template>
  <Header />
  <body class="h-screen flex flex-col items-center justify-start">
    <!-- 로고 영역 -->
    <div class="logo-wrapper w-full text-center mt-24 mb-10">
      <p class="text-3xl text-black font-bold">TEST</p>
    </div>

    <!-- 메인 버튼 섹션 -->
    <section
      v-if="currentSection === 'main'"
      class="grid grid-cols-2 gap-4 justify-center items-center text-center w-64 mx-auto text-xl"
      id="main"
    >
      <button
        v-for="platform in platforms"
        :key="platform.name"
        :class="`bg-${platform.color}-50 border border-${platform.color}-400 w-32 h-32 rounded-lg flex items-center justify-center`"
        @click="showSection(platform.name.toLowerCase())"
      >
        {{ platform.name }}
      </button>
    </section>

    <!-- 플랫폼 섹션 (Melon, Genie, Bugs, VIBE) -->
    <section
      v-if="currentSection !== 'main' && !subSection"
      class="grid grid-cols-2 gap-4 justify-center items-center text-center w-64 mx-auto text-xl"
      :id="`button_${currentSection}`"
    >
      <!-- 뒤로가기 버튼 -->
      <button
        :class="`border border-${getPlatformColor(
          currentSection
        )}-400 w-32 h-32 rounded-lg flex items-center justify-center`"
        @click="goBack"
      >
        ← {{ currentSection.charAt(0).toUpperCase() + currentSection.slice(1) }}
      </button>
      <!-- 선택 버튼 (PC, Android, ios) -->
      <button
        v-for="btn in selectbtn"
        :key="btn.name"
        :class="`border border-${getPlatformColor(
          currentSection
        )}-400 w-32 h-32 rounded-lg flex items-center justify-center`"
        @click="showSubSection(btn.name.toLowerCase())"
      >
        {{ btn.name }}
      </button>
    </section>

    <!-- 서브 섹션 (Melon Android, VIBE PC/Android/ios) -->
    <section
      v-if="subSection"
      class="grid grid-cols-2 gap-4 justify-center items-center text-center w-64 mx-auto text-xl"
      :id="`select_${currentSection}_${subSection}`"
    >
      <!-- 1, 2, 3, 4 버튼 -->
      <button
        v-for="num in subSectionButtons"
        :key="num"
        :class="`border border-${getPlatformColor(
          currentSection
        )}-400 w-32 h-32 rounded-lg flex items-center justify-center`"
        @click="handleSubSectionAction(num)"
      >
        {{ num }}
      </button>
    </section>
  </body>
</template>

<script setup>
import Header from "../Template/Header.vue";
import { ref } from "vue";

const platforms = ref([
  { name: "Melon", color: "green" },
  { name: "Genie", color: "blue" },
  { name: "Bugs", color: "red" },
  { name: "VIBE", color: "purple" },
]);

const selectbtn = ref([{ name: "PC" }, { name: "Android" }, { name: "ios" }]);

const subSectionButtons = ref([1, 2, 3, 4]);

const currentSection = ref("main");
const subSection = ref("");

// 플랫폼 링크 데이터
const platformLinks = ref({
  melon: [
    {
      name: "MELON PC",
      links: [
        "melonapp://play?cType=1&menuId=1000002721&cList=38638672,38638673,38638674,38638675,37066919",
        "melonapp://play?cType=1&menuId=1000002721&cList=38638672,38100188,38100189,37066916,37066915",
        "melonapp://play?cType=1&menuId=1000002721&cList=38638672,38638673,38638674,38638675,37066919",
        "melonapp://play?cType=1&menuId=1000002721&cList=38638672,38100188,38100189,37066916",
      ],
    },
    {
      name: "MELON Android",
      links: [
        "melonapp://play?ctype=1&menuid=1000002721&cid=38638672,38638673,38638674,38638675,37066919",
        "melonapp://play?ctype=1&menuid=1000002721&cid=38638672,38100188,38100189,37066916,37066915",
        "melonapp://play?ctype=1&menuid=1000002721&cid=38638672,38638673,38638674,38638675,37066919",
        "melonapp://play?ctype=1&menuid=1000002721&cid=38638672,38100188,38100189,37066916",
      ],
    },
    {
      name: "MELON IOS",
      links: [
        "meloniphone://play/?ctype=1&menuid=0&cid=38638672,38638673,38638674,38638675,37066919,38638672,38100188,38100189,37066916,37066915,38638672,38638673,38638674,38638675,37066919,38638672,38100188,38100189,37066916",
      ],
    },
  ],
  genie: [
    {
      name: "GENIE Android",
      links: [
        "cromegenie://scan/?landing_type=31&landing_target=109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260;104916259;109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260",
      ],
    },
    {
      name: "GENIE IOS",
      links: [
        "ktolleh00167://landing/?landing_type=31&landing_target=109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260;104916259;109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260",
      ],
    },
    {
      name: "GENIE PC",
      links: [
        "https://www.genie.co.kr/player/shareProcessV2?xgnm=109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260;104916259;109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260",
      ],
    },
  ],
  bugs: [
    {
      name: "BUGS Android",
      links: [
        "bugs3://app/tracks/lists?title=%EC%A0%84%EC%B2%B4%EB%93%A3%EA%B8%B0&miniplay=Y&track_ids=33467017|33467018|33467019|33467020|6226906|33467017|33324395|33324396|6228690|6226428|33467017|33467018|33467019|33467020|6226906|33467017|33324395|33324396|6228690",
      ],
    },
    {
      name: "BUGS ios",
      links: [
        "bugs3://app/tracks/lists?title=%EC%A0%84%EC%B2%B4%EB%93%A3%EA%B8%B0&miniplay=Y&track_ids=33467017|33467018|33467019|33467020|6226906|33467017|33324395|33324396|6228690|6226428|33467017|33467018|33467019|33467020|6226906|33467017|33324395|33324396|6228690",
      ],
    },
    {
      name: "BUGS PC",
      links: [
        "https://music.bugs.co.kr/newPlayer?trackId=33467017,33467018,33467019,33467020,6226906,33467017,33324395,33324396,6228690,6226428,33467017,33467018,33467019,33467020,6226906,33467017,33324395,33324396,6228690",
      ],
    },
  ],
  vibe: [
    {
      name: "VIBE Common",
      links: [
        "vibe://listen?version=3&trackIds=90865624,90865625,90865626,90865627,81984908",
        "vibe://listen?version=3&trackIds=90865624,87485722,87485723,81984905,81984904",
        "vibe://listen?version=3&trackIds=90865624,90865625,90865626,90865627,81984908",
        "vibe://listen?version=3&trackIds=90865624,87485722,87485723,81984905",
      ],
    },
  ],
});

// 플랫폼 색상 가져오기
const getPlatformColor = (section) => {
  const platform = platforms.value.find(
    (p) => p.name.toLowerCase() === section
  );
  return platform ? platform.color : "gray";
};

// 섹션 전환
const showSection = (section) => {
  currentSection.value = section;
  subSection.value = "";
};

// 서브 섹션 전환
const showSubSection = (sub) => {
  if (
    (currentSection.value === "melon" && ["pc", "android"].includes(sub)) ||
    (currentSection.value === "vibe" && ["pc", "android", "ios"].includes(sub))
  ) {
    subSection.value = sub;
  } else {
    console.log(`No sub-section for ${currentSection.value} ${sub}`);
    // Handle direct link execution for other platforms
    const platform = platformLinks.value[currentSection.value];
    if (!platform) return;

    const deviceLinks = platform.find((p) =>
      p.name.toLowerCase().includes(sub.toLowerCase())
    );
    if (deviceLinks && deviceLinks.links && deviceLinks.links[0]) {
      window.location.href = deviceLinks.links[0];
    } else {
      console.log(`No links for ${currentSection.value} ${sub}`);
    }
  }
};

// 뒤로 가기
const goBack = () => {
  if (subSection.value) {
    subSection.value = "";
  } else {
    currentSection.value = "main";
  }
};

// 서브 섹션 버튼 클릭 핸들러
const handleSubSectionAction = async (num) => {
  console.log(`Clicked ${num} in ${currentSection.value} ${subSection.value}`);

  // 다른 플랫폼의 경우 num에 해당하는 링크 실행
  const platform = platformLinks.value[currentSection.value];
  if (!platform) {
    console.log(`No platform data for ${currentSection.value}`);
    return;
  }

  const deviceLinks = platform.find((p) =>
    p.name.toLowerCase().includes(subSection.value.toLowerCase())
  );
  if (!deviceLinks || !deviceLinks.links[num - 1]) {
    console.log(
      `No link for ${currentSection.value} ${subSection.value} button ${num}`
    );
    return;
  }

  window.location.href = deviceLinks.links[num - 1];
};
</script>
