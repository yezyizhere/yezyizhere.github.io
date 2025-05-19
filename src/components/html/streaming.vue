<template>
  <div>
    <Header />
    <div class="h-screen flex flex-col items-center justify-start">
      <!-- 로고 영역 -->
      <div class="logo-wrapper w-full text-center mt-24 mb-10">
        <p class="text-3xl text-black font-bold">AIR</p>
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
          :class="[
            'w-32 h-32 rounded-lg flex items-center justify-center',
            `bg-${platform.color}-50`,
            `border-${platform.color}-400`,
            'border',
          ]"
          @click="showSection(platform.name.toLowerCase())"
        >
          {{ platform.name }}
        </button>
      </section>

      <!-- 동적 섹션 -->
      <section
        v-if="currentSection !== 'main'"
        class="grid grid-cols-2 gap-4 justify-center items-center text-center w-64 mx-auto text-xl"
        :id="`button_${currentSection}`"
      >
        <!-- 뒤로가기 버튼 -->
        <button
          :class="[
            'w-32 h-32 rounded-lg flex items-center justify-center',
            `border-${getPlatformColor(currentSection)}-400`,
            'border',
          ]"
          @click="goBack"
        >
          &lt;
          {{ currentSection.charAt(0).toUpperCase() + currentSection.slice(1) }}
        </button>
        <!-- 선택 버튼 (PC, Android, ios) -->
        <button
          v-for="btn in selectbtn"
          :key="btn.name"
          :class="[
            'w-32 h-32 rounded-lg flex items-center justify-center',
            `border-${getPlatformColor(currentSection)}-400`,
            'border',
          ]"
          @click="executeLinksSequentially(btn.name)"
        >
          {{ btn.name }}
        </button>
      </section>
    </div>
  </div>
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
        "melonapp://play?menuid=0&ctype=1&cid=38638672,38638673,38638674,38638675,37066919",
        "melonapp://play?menuid=0&ctype=1&cid=38638672,38100188,38100189,37066916,37066915",
        "melonapp://play?menuid=0&ctype=1&cid=38638672,38638673,38638674,38638675,37066919",
        "melonapp://play?menuid=0&ctype=1&cid=38638672,38100188,38100189,37066916",
      ],
    },
    {
      name: "MELON IOS",
      links: [
        "melonapp://play?menuid=0&ctype=1&cid=38638672,38638673,38638674,38638675,37066919,38638672,38100188,38100189,37066916,37066915,38638672,38638673,38638674,38638675,37066919,38638672,38100188,38100189,37066916",
      ],
    },
  ],
  genie: [
    {
      name: "GENIE Android",
      links: [
        "cromegenie://scan/?landing_type=31&landing_target=109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260;84625204;109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260",
      ],
    },
    {
      name: "GENIE IOS",
      links: [
        "ktolleh00167://landing/?landing_type=31&landing_target=109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260;84625204;109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260",
      ],
    },
    {
      name: "GENIE PC",
      links: [
        "https://www.genie.co.kr/player/shareProcessV2?xgnm=109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260;84625204;109332031;109332032;109332033;109332034;104916263;109332031;108065466;108065467;104916260",
      ],
    },
  ],
  bugs: [
    {
      name: "BUGS Smartphone",
      links: [
        "bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=33467017|33467018|33467019|33467020|6226906|33467017|33324395|33324396|6228690|6226428|33467017|33467018|33467019|33467020|6226906|33467017|33324395|33324396|6228690",
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

const currentSection = ref("main");

const showSection = (section) => {
  currentSection.value = section;
};

const goBack = () => {
  currentSection.value = "main";
};

const getPlatformColor = (section) => {
  const platform = platforms.value.find(
    (p) => p.name.toLowerCase() === section
  );
  return platform ? platform.color : "gray";
};

const executeLinksSequentially = async (device) => {
  const section = currentSection.value;
  let platformName;

  if (section === "bugs" && device !== "PC") {
    platformName = "BUGS Smartphone"; // Android와 ios에서 동일한 스마트폰 링크 사용
  } else if (section === "vibe") {
    platformName = "VIBE Common"; // PC, Android, ios에서 동일한 VIBE 링크 사용
  } else {
    platformName = `${section.toUpperCase()} ${device.toUpperCase()}`;
  }

  const platformLinksData = platformLinks.value[section]?.find(
    (p) => p.name === platformName
  )?.links;

  if (!platformLinksData) {
    console.error(`No links found for ${platformName} in ${section}`);
    return;
  }

  for (const link of platformLinksData) {
    try {
      window.open(link, "_blank");
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to open link ${link}:`, error);
    }
  }
};
</script>
