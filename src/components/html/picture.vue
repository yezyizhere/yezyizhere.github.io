<template>
  <div class="bg-neutral-900 min-h-screen h-full">
    <Header />

    <!-- 1. 상자 -->
    <nav class="container h-auto mx-auto p-4 pb-0">
      <div class="w-full p-4 rounded-lg border-solid border-2 border-gray-300">
        <!-- 제목 -->
        <p
          class="text-gray-300 text-2xl font-bold text-center xl:text-5xl pb-1"
        >
          ITZY Instagram
        </p>
        <p class="text-gray-600 italic text-center xl:text-3xl xl:mt-3">
          원하는 멤버를 클릭하세요
        </p>

        <!-- 프로필 버튼 -->
        <div class="flex justify-between mt-2 xl:mt-12">
          <!-- 멤버 반복 -->
          <div
            class="flex flex-col"
            v-for="(korName, index) in KorName"
            :key="index"
          >
            <button @click="select(EngName[index])">
              <img
                :src="require(`@/assets/picture/profile/${EngName[index]}.jpg`)"
                class="rounded-lg w-28 xl:w-32 p-1"
              />
            </button>

            <p class="text-sm text-gray-300 text-center">
              {{ korName }}
            </p>
          </div>
        </div>
      </div>
    </nav>

    <!-- 2. 사진 상자 -->
    <div v-if="selected" :id="selected" class="container w-full mx-auto p-4">
      <div class="w-full p-4 rounded-lg border-solid border-2 border-gray-300">
        <div class="relative flex items-center justify-center">
          <p class="text-gray-300 font-bold text-center text-2xl">
            {{ getKorName(selected) }}
          </p>
          <i
            @click="toggleSort"
            class="fa-solid fa-arrow-down-wide-short absolute right-5 text-gray-300 rounded text-lg xl:text-xl pr-2 pl-2 cursor-pointer"
            :class="{ 'fa-arrow-up-wide-short': !sortAscending }"
            id="reverse"
          ></i>
        </div>

        <div
          class="container max-w-full mx-auto p-4 grid grid-cols-1 xl:grid-cols-2 xl:gap-4"
          id="button-container1"
        >
          <button v-for="(link, index) in links" :key="index">
            <a :href="link">
              <div
                class="w-full p-2 rounded-lg border-solid border-2 border-gray-300 mt-3 xl:mt-0 bg-neutral-600 text-gray-300"
              >
                <div class="p-1 flex justify-between">
                  <p>{{ sortedAlbum[index] }}</p>
                  <i class="fa-solid fa-chevron-right mt-1"></i>
                </div>
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Template/Header.vue";

export default {
  components: { Header },
  name: "Picture",
  data() {
    return {
      KorName: ["예지", "리아", "류진", "채령", "유나"],
      EngName: ["yeji", "lia", "ryujin", "chaeryeong", "yuna"],
      selected: null,
      sortAscending: true,
      memberLinks: {
        yeji: [
          "https://drive.google.com/drive/u/1/folders/1ZE8We9IHZtL9BerkWWG1hFtmhuXQ6udX",
          "https://drive.google.com/drive/u/1/folders/14u7CG70t4WzHaxk9MAmWCUNLWZsnv1Ig",
          "https://drive.google.com/drive/u/1/folders/1vkPvqBGDp--aSVjmCJlU0b8GJs05C23R",
          "https://drive.google.com/drive/u/1/folders/1J1KPl4hj0SJST3bNF0OVsU88ipUXCzFR",
          "https://drive.google.com/drive/u/1/folders/1IJb25foPVYJUHOAiiogQqOVD6eds-yVA",
          "https://drive.google.com/drive/u/1/folders/1eA9H-UuEmIqrolCQqHhTdzVRDjyHd65f",
          "https://drive.google.com/drive/u/1/folders/1f8qkFA11P76ur1DgCPUSoeUjl4MrZ7FK",
          "https://drive.google.com/drive/u/1/folders/1TWoUVdFQtI2CN0QVzRNbVO_yAed3LK8N",
          "https://drive.google.com/drive/u/1/folders/1HIe8ZVIBnrdo6di_24uGB6ejtt_9vpPJ",
          "https://drive.google.com/drive/u/1/folders/1fOlF9pIVsOQ5DmwJKwlFzbrAtbig8Ry9",
          "https://drive.google.com/drive/u/1/folders/1LHaJkhbXdjJH4T4qn1BuxsacEWe2WcCn",
          "https://drive.google.com/drive/u/1/folders/1QSWTVdM5eF6VuIoXfDO4yYz0VgLJXpK8",
          "https://drive.google.com/drive/folders/199s3mh61uXKhc9hBLDmBA1VStMQRsMOr",
          "https://drive.google.com/drive/u/1/folders/1-Cd-flVJyJf2UdEiz6oxbGw1b2oyRK05"
        ],
        lia: [
          "https://drive.google.com/drive/u/1/folders/1V86E5DE6ZJSU954Su1YdJF0kvNZADWoJ",
          "https://drive.google.com/drive/u/1/folders/1xDvgJkYEBE1yDjguR9M_QUvkIPwHzNG1",
          "https://drive.google.com/drive/u/1/folders/1xdL0csD2Ti0_DWPNB1BRHwWPosIEHzj4",
          "https://drive.google.com/drive/u/1/folders/1IAjPAtDSDGbIzB8NLeo2NynnYtP6vl7C",
          "https://drive.google.com/drive/u/1/folders/1AbcB51ItNmxig9ZgsPc6gyz9yCLTSRci",
          "https://drive.google.com/drive/u/1/folders/194NwwudybavNt-8AuKEc01r0KM3e-awR",
          "https://drive.google.com/drive/u/1/folders/1Fw_Yn9SRAaroLxQXsj2Vyek5W5ek7Yrq",
          "https://drive.google.com/drive/u/1/folders/1KxWy4rZuwlveU6TiEoAsy6udSoLdlZB8",
          "https://drive.google.com/drive/u/1/folders/1YCFk2VB_VfNewEBxg2rWYtQ-SzlOUxdQ",
          "https://drive.google.com/drive/u/1/folders/1lj0xKb1dVufovjUkIgzZAyjVtDfCDE_b",
          "https://drive.google.com/drive/u/0/folders/1o3V6omfTzLdt_2WBaXzQtPac9BSwMqXk",
          "https://drive.google.com/drive/u/0/folders/1hUNn0TIxx_2ziMnO7L2mZBX1d0yvIYnO",
        ],
        ryujin: [
          "https://drive.google.com/drive/u/1/folders/1C2MDDHBTDdsD-7k20epCqEjqNwVrAdL5",
          "https://drive.google.com/drive/u/1/folders/1qtw5zj9zX22cihQ24id4VzeGysDBtaxz",
          "https://drive.google.com/drive/u/1/folders/1Ro4Y0JEb_iLbEyWGQPxdbLa5l4Q9DS8K",
          "https://drive.google.com/drive/u/1/folders/1CC53_xt7vKB86p2Y39l-XxOYD_CMqE29",
          "https://drive.google.com/drive/u/1/folders/1nFLTkd24WlivBm0tWrfZXK1jeL1FTy_j",
          "https://drive.google.com/drive/u/1/folders/1djUU-wigDic2VRbamwgBp9rc8ay-2tGZ",
          "https://drive.google.com/drive/u/1/folders/162NQfkjwJoJmgUYxTOpM5EN902jXFK6o",
          "https://drive.google.com/drive/u/1/folders/1EEy2QcIC0_ccqkfAzJ0Y7xLuu8V_2aUo",
          "https://drive.google.com/drive/u/1/folders/1az5Ivc6v06K5NhCHXzN8vBO2U6LdiaQD",
          "https://drive.google.com/drive/u/1/folders/11BcCGFVspgBUQAbydcWbxTGZem6DdiZu",
          "https://drive.google.com/drive/u/1/folders/1kAsjgTgFl0aH5Of3rbOcc50RAk4BdQdo",
          "https://drive.google.com/drive/u/0/folders/1SlAwVm7CigqL9oLj-D7QAzEp0kg9whfm",
        ],
        chaeryeong: [
          "https://drive.google.com/drive/folders/18SbcpP3Wrldv8Yz-fLxLBev19VjIx7o9",
          "https://drive.google.com/drive/folders/1fMo1aN2Oy97_GaK08KiRKpmNIiF8AXh5",
          "https://drive.google.com/drive/folders/1UaYVQGQc-oZ3K_YT_KBd1HCF9hAGTQBa",
          "https://drive.google.com/drive/folders/14yBfj3_1Ipl7uZ1zVuL2Gwi0aBaSxMHF",
          "https://drive.google.com/drive/folders/1Crm9JQ7LNTyVMScWL_zEAQoFz9fcEBmB",
          "https://drive.google.com/drive/folders/1U0cYjgZsdmjVb1ECvnp5Dfw-pOIFrIIE",
          "https://drive.google.com/drive/folders/1fXRYnoteNWhXOT0H4wgQF1wZFPYbFDMr",
          "https://drive.google.com/drive/u/0/folders/1ICTOcJYrq2I1ybEzZwjSUluWKRUPnNxY",
          "https://drive.google.com/drive/u/0/folders/1gEXnak-4VWIeE95-bY5nSs1yGCXEy8_x",
          "https://drive.google.com/drive/u/0/folders/13lQy5Bi2gD4G8ejduBbxqaQsjYsKATyG",
          "https://drive.google.com/drive/u/0/folders/1z3P7LakPWlbegWNrAXKJchVfIzSxDj9E",
          "https://drive.google.com/drive/u/0/folders/1Ztqc8k-DQ1hb6Q1jP6TPB2b7CFw80QAU",
        ],
        yuna: [
          "https://drive.google.com/drive/u/0/folders/1KOz8NwxA5wMDBNjOSqzdx-T08lL_xHqN",
          "https://drive.google.com/drive/u/0/folders/1EBJv69MntMnBfKV_4Wga_6d5kBgWFfqA",
          "https://drive.google.com/drive/u/0/folders/1B4vvfavyEsKabzQQmjQLd6SwLjFfSg77",
          "https://drive.google.com/drive/u/0/folders/1TA4DqFwz9VHFRC2fdcma-gP2Fd7slVgw",
          "https://drive.google.com/drive/u/0/folders/1pU54Sby6PMXnG_b6vJ633AAhfsYkU1-2",
          "https://drive.google.com/drive/u/0/folders/1FdcmN7URWx54479_4lG4i6ieDV_L98EI",
          "https://drive.google.com/drive/u/0/folders/17mtzGFF_QOjJ5PuKYLk-7DPi2cr8oHyI",
          "https://drive.google.com/drive/u/0/folders/1HU7tWfEjTyteQA5bEPD4zW3ZdBbapjbz",
          "https://drive.google.com/drive/u/0/folders/1ZqhWHHs6Hyfcrdvew0j3ILtjCdho4cP5",
          "https://drive.google.com/drive/u/0/folders/1KHNUiqykaOjvOSJCagQY2Pee-00SoVmC",
          "https://drive.google.com/drive/u/0/folders/194SmCdvAxaPwzEovXbMfztJ7DXE5QZ9u",
          "https://drive.google.com/drive/u/0/folders/1p-Ncdx8tBshycBSvuafdRzgnJQCwGgPv",
        ],
      },
      Album: [
        "1. 전체사진",
        "2. 달라달라",
        "3. ICY",
        "4. 워너비",
        "5. NOT SHY",
        "6. 마피아",
        "7. 로꼬",
        "8. 스니커즈",
        "9. 체셔",
        "10. 케이크",
        "11. 언터쳐블",
        "12. GOLD",
      ],
      yejiAlbum: [
        "이달의 예지",
        "1. 전체사진",
        "2. 달라달라",
        "3. ICY",
        "4. 워너비",
        "5. NOT SHY",
        "6. 마피아",
        "7. 로꼬",
        "8. 스니커즈",
        "9. 체셔",
        "10. 케이크",
        "11. 언터쳐블",
        "12. GOLD",
        "13. Air"
      ],
    };
  },
  computed: {
    links() {
      if (!this.selected) return [];
      let links = [...this.memberLinks[this.selected]];
      return this.sortAscending ? links : links.reverse();
    },
    sortedAlbum() {
      const albumList = this.selected === "yeji" ? this.yejiAlbum : this.Album;
      return this.sortAscending ? [...albumList] : [...albumList].reverse();
    },
  },
  methods: {
    select(memberName) {
      if (this.selected === memberName) {
        this.selected = null; // 같은 멤버를 다시 클릭하면 닫힘
      } else {
        this.selected = memberName;
      }
    },
    getKorName(engName) {
      const index = this.EngName.indexOf(engName);
      return index !== -1 ? this.KorName[index] : "";
    },
    toggleSort() {
      this.sortAscending = !this.sortAscending;
    },
  },
};
</script>
