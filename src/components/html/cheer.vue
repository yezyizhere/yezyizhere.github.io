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
          Cheer Guide
        </p>
        <p class="text-gray-600 italic text-center xl:text-3xl xl:mt-3">
          노래를 클릭하세요
        </p>
        <div class="flex justify-center mt-2">
          <p class="text-red-500">● ITZY와 함께</p>
          <p class="ml-3 text-blue-500">● MIDZY만</p>
        </div>

        <!-- 사진 버튼 -->
        <div
          class="flex overflow-x-auto space-x-2 mt-2 xl:mt-12 scrollbar-hide"
        >
          <!-- 사진 반복 -->
          <div
            class="flex flex-col flex-shrink-0"
            v-for="(song, index) in songs"
            :key="index"
          >
            <button @click="select(song.engName)">
              <img
                class="w-20 xl:w-32 object-fit cursor-pointer rounded-lg"
                :src="song.image"
                :alt="song.name"
              />
            </button>

            <p class="text-sm text-gray-300 text-center">
              {{ song.name }}
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
            {{ selected }}
          </p>
        </div>
        <!-- 가사 표시 부분 추가 -->
        <div
          class="mt-4 text-gray-300"
          v-html="selectedSong ? selectedSong.lyrics : ''"
        ></div>
      </div>
    </div>

    <!-- 끝 -->
  </div>
</template>

<script>
import Header from "../Template/Header.vue";

export default {
  components: {
    Header,
  },
  name: "Cheer",
  data() {
    return {
      songs: [
        {
          name: "달라달라",
          engName: "달라달라",
          image:
            "https://cdnimg.melon.co.kr/cm/album/images/102/50/473/10250473_500.jpg?87c609bcbfac930b0cce1f692f7bff4c/melon/resize/282/sharpen/0x1",
          lyrics: `
            <div class="text-center">
              <p>DDA-DDA-LA-DDA-LA-DDA-LA</p>
              <p class="text-sm font-black text-blue-500">
                (예지 리아 류진 채령 유나 있지 달라 달라)
              </p>
              <p>DDA-DDA-LA-DDA-LA-DDA-LA</p>

              <br />

              <p>People look at me, and they tell me</p>
              <p>외모만 보고 내가 날라리 같대요</p>
              <p><strong class="text-red-500">So what?</strong> 신경 안 써 I'm sorry</p>
              <p>
                I <strong class="text-red-500">don't care don't care</strong> really don't
                care, because
              </p>
              <br />
              <p>사랑 따위에 목매지 않아 <strong class="text-red-500">Hey</strong></p>
              <p>세상엔 재밌는 게 더 많아 <strong class="text-red-500">Hey</strong></p>
              <p>언니들이 말해 철들려면 멀었대</p>
              <p>
                I'm <strong class="text-red-500">sorry sorry</strong> 철들 생각 없어요
              </p>
              <br />
              <p>예쁘기만 하고 매력은 없는</p>
              <p>애들과 난 <strong class="text-red-500">달라 달라 달라</strong></p>
              <p>네 기준에 날 맞추려 하지 마</p>
              <p>난 지금 내가 <strong class="text-red-500">좋아 나는 나야</strong></p>
              <br />
              <p>I love myself!</p>
              <p>난 뭔가 <strong class="text-red-500">달라 달라 YEAH</strong></p>
              <p>I love myself!</p>
              <p>난 뭔가 <strong class="text-red-500">달라 달라 YEAH</strong></p>
              <p>난 너랑 달라 달라 YEAH</p>
              <br />
              <p>Bad, bad I'm sorry I'm <strong class="text-red-500">bad,</strong></p>
              <p>I'm just the way I <strong class="text-red-500">am</strong></p>
              <p>남 신경 쓰고 살긴 아까워</p>
              <p>하고 싶은 일 하기도 바빠</p>
              <br />
              <p>My life <strong class="text-red-500">(My life)</strong></p>
              <p>
                내 맘대로 살 거야 말리지 마
                <strong class="text-red-500">(말리지 마)</strong>
              </p>
              <p>난 특별하니까 <strong class="text-red-500">YEAH</strong></p>
              <br />
              <p>남들의 시선 중요치 않아 <strong class="text-red-500">Hey</strong></p>
              <p>내 style이 좋아 그게 나니까 <strong class="text-red-500">Hey</strong></p>
              <p>언니들이 말해 내가 너무 당돌하대</p>
              <p>
                I'm <strong class="text-red-500">sorry sorry</strong> 바꿀 생각 없어요
              </p>
              <br />
              <p>예쁘기만 하고 매력은 없는</p>
              <p>애들과 난 <strong class="text-red-500">달라 달라 달라</strong></p>
              <p>네 기준에 날 맞추려 하지 마</p>
              <p>난 지금 내가 <strong class="text-red-500">좋아 나는 나야</strong></p>
              <br />
              <p>Don't care what people say</p>
              <p>나는 내가 알아</p>
              <p>I'm talkin' to myself 기죽지 마 절대로</p>
              <p>고개를 들고 네 꿈을 쫓아</p>
              <p>Just keep on dreamin'</p>
              <br />
              <p>
                Keep your chin up, <strong class="text-red-500">We got your back</strong>
              </p>
              <p>Keep your head up,</p>
              <p><strong class="text-red-500">Just keep on dreamin'</strong></p>
              <p>
                Keep your chin up, <strong class="text-red-500">We got your back</strong>
              </p>
              <p>Keep your head up,</p>
              <p><strong class="text-red-500">Just keep on dreamin'</strong></p>
              <p><strong class="text-blue-500">(함성)</strong> Everybody</p>
              <br />
              <p>예쁘기만 하고 매력은 없는</p>
              <p>애들과 난 <strong class="text-red-500">달라 달라 달라</strong></p>
              <p>네 기준에 날 맞추려 하지 마</p>
              <p>난 지금 내가 <strong class="text-red-500">좋아 나는 나야</strong></p>
              <br />
              <p>I love myself!</p>
              <p>난 뭔가 <strong class="text-red-500">달라 달라 YEAH</strong></p>
              <p>I love myself!</p>
              <p>난 뭔가 <strong class="text-red-500">달라 달라 YEAH</strong></p>
              <p>난 너랑 달라 달라 YEAH</p>
              <strong class="text-blue-500">(달라 달라)</strong>
            </div>
          `,
        },
        {
          name: "ICY",
          engName: "ICY",
          image:
            "https://cdnimg.melon.co.kr/cm/album/images/103/12/251/10312251_500.jpg?c86b1363452350da88ea588f5e50b921/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
              <p>Hey hey hey yass whoo</p>
              <br />
              <p><strong class="text-red-500">Beep beep</strong></p>
              <p>
                <strong class="text-blue-500"
                  >(예지 리아 류진 채령 유나 ITZY it'z ICY)</strong
                >
              </p>
              <br />
              <p>Hey hey hey hey hey hey</p>
              <p>I see that I'm icy</p>
              <p>Go rising up up</p>
              <p>I see that I'm icy</p>
              <br />
              <p>차갑게 보여도 어떡해</p>
              <p>Cool한 나니까 눈치 볼 마음 없어</p>
              <p><strong class="text-red-500">Oh Come on</strong></p>
              <br />
              <p>당당하게 Let it go</p>
              <p><strong class="text-red-500">Here we go</strong></p>
              <p>길거리를 누비고</p>
              <p><strong class="text-red-500">On a roll</strong></p>
              <p>Background music이 깔려</p>
              <p><strong class="text-red-500">Bomb bomb bomb bomb</strong></p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> Icy but I'm on fire</p>
              <p>내 안에 있는 Dream 난 자신 있어</p>
              <p><strong class="text-blue-500">(함성)</strong> 날 봐 I'm not a liar</p>
              <p>너의 틀에 날 맞출 맘은 없어 (Dance)</p>
              <br />
              <p>다들 <strong class="text-red-500">Blah blah</strong></p>
              <p>참 말 많아 난 괜찮아</p>
              <p>계속 <strong class="text-red-500">Blah blah</strong></p>
              <p>They keep talkin', I keep walkin'</p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> Ring ring ring 울려</p>
              <p>All day long</p>
              <p>모두 날 찾느라 <strong class="text-red-500">바빠</strong></p>
              <p>이 노래가 Your favorite song</p>
              <p>그렇게 될 걸 잘 <strong class="text-red-500">알아</strong></p>
              <br />
              <p><strong class="text-red-500">Hey</strong> 이 맛은 마치</p>
              <p><strong class="text-red-500">딱</strong> 살얼음같이</p>
              <p>Bling bling bling 반짝이는 걸</p>
              <p>별빛같이 <strong class="text-red-500">Icy</strong></p>
              <br />
              <p>Uhh shout out to 내 <strong class="text-red-500">엄마</strong></p>
              <p>Thank you to 우리 <strong class="text-red-500">Papa</strong></p>
              <p>좋은 것만 쏙 빼닮아</p>
              <p><strong class="text-red-500">짠짠짜짠짠짠</strong></p>
              <br />
              <p>당당하게 Let it go</p>
              <p><strong class="text-red-500">Here we go</strong></p>
              <p>길거리를 누비고</p>
              <p><strong class="text-red-500">On a roll</strong></p>
              <p>Background music이 깔려</p>
              <p><strong class="text-red-500">Bomb bomb bomb bomb</strong></p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> Icy but I'm on fire</p>
              <p>내 안에 있는 Dream 난 자신 있어</p>
              <p><strong class="text-blue-500">(함성)</strong> 날 봐 I'm not a liar</p>
              <p>너의 틀에 날 맞출 맘은 없어</p>
              <br />
              <p>다들 <strong class="text-red-500">Blah blah</strong></p>
              <p>참 말 많아 난 괜찮아</p>
              <p>계속 <strong class="text-red-500">Blah blah</strong></p>
              <p>They keep talkin', I keep walkin'</p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong></p>
              <p>Get it</p>
              <p>Hey</p>
              <p>Shake it</p>
              <p>Hey</p>
              <p>Yeah come on girls</p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> 더더 빨리 달려</p>
              <p>Don't care <strong class="text-red-500">what they say</strong></p>
              <p>
                내 답은 내가 아니까 <strong class="text-red-500">It's OK</strong> (Dance)
              </p>
              <br />
              <p>Up up up up up we go</p>
              <p>끝없이 위로 위로</p>
              <p>절대 멈추지 않고</p>
              <p>No one can stop us now</p>
              <br />
              <p><strong class="text-red-500">Blah blah</strong></p>
              <p>참 말 많아 난 괜찮아</p>
              <p>계속 <strong class="text-red-500">Blah blah</strong></p>
              <p>They keep talkin', I keep walkin'</p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> yeah</p>
              <p>I see that I'm icy</p>
              <p>I see that I'm icy</p>
              <p><strong class="text-blue-500">(예지 리아 류진)</strong></p>
              <p>I see that I'm icy</p>
              <p><strong class="text-blue-500">(채령 유나 있지 믿지 날자)</strong></p>
              <p>I see that I'm icy</p>
            <div>`,
        },
        {
          name: "워너비",
          engName: "워너비",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/104/00/522/10400522_20200309153009_500.jpg?84df9aca6a6aff2443cd8c22495d5b05/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
              <p>
                <strong class="text-blue-500"
                  >(예지 리아 류진 채령 유나 ITZY 워! 너! 비!)</strong
                >
              </p>
              <br />
              <p>
                잔소리는 Stop it
                <strong class="text-blue-500">(Whoo)<br /></strong> 알아서 할게
                <strong class="text-blue-500">(Yeah)</strong>
              </p>
              <p>
                내가 뭐가 되든 내가 알아서 할 테니
                <strong class="text-red-500">까 좀</strong>
              </p>
              <br />
              <p>
                I do what I wanna <strong class="text-blue-500">(팝! 팝! 팝!)</strong>
              </p>
              <p>평범하게 살든 말든 내버려 둘래?</p>
              <p>
                어차피 내가 살아 내 인생 <strong class="text-red-500">니꺼니까~</strong>
              </p>
              <br />
              <p>
                I'm so <strong class="text-red-500">bad bad</strong> 차라리 이기적일래
              </p>
              <p>눈치 보느라 착한 척 상처받는 것보다 백번 나아</p>
              <p>
                I'm just on my way <strong class="text-blue-500">(uh huh)</strong> 간섭은
                No No 해 <strong class="text-blue-500">(OK)</strong>
              </p>
              <p>말해버릴지도 몰라 너나 잘하라고</p>
              <br />
              <p>누가 뭐라 해도 난 나야 난 그냥 내가 되고 싶어</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <p>굳이 뭔가 될 필요는 없어 난 그냥 나일 때 완벽하니까</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <br />
              <p>I don't wanna be somebody</p>
              <p>Just wanna be me, be me</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <br />
              <p>I don't wanna be somebody</p>
              <p>Just wanna be me, be me</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <br />
              <p><strong class="text-red-500">(Ready) Action</strong></p>
              <p>Errbody errbody errbody teachin' me</p>
              <p><strong class="text-red-500">(All eyes on me)</strong></p>
              <p>이래라 저래라 모두 한마디씩</p>
              <p><strong class="text-red-500">(Don't touch me)</strong></p>
              <br />
              <p>
                Ah yeah <strong class="text-red-500">yeah yeah yeah yeah</strong> 내
                앞가림은 내가 해
              </p>
              <p>I'mma do my thang, Just do your thang</p>
              <p>Cuz I'm the <strong class="text-red-500">one &amp; only</strong></p>
              <br />
              <p>
                사람들은 남 말 하기를 좋아해
                <strong class="text-red-500">(LA LA LA)</strong>
              </p>
              <p>
                남의 인생에 뭔 관심이 많아 왜
                <strong class="text-red-500">(LA LA LA)</strong>
              </p>
              <p>저기 미안하지만 신경 좀 꺼줄래요</p>
              <p>It's none of your business</p>
              <p>I do my own business <strong class="text-blue-500">(띵)</strong></p>
              <br />
              <p>누가 뭐라 해도 난 나야 난 그냥 내가 되고 싶어</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <p>굳이 뭔가 될 필요는 없어 난 그냥 나일 때 완벽하니까</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <br />
              <p><strong class="text-red-500">(Hey!)</strong></p>
              <p><strong class="text-red-500">(Hey!)</strong></p>
              <p>No matter if you love me or hate me</p>
              <p><strong class="text-red-500">(Hey!)</strong></p>
              <p><strong class="text-red-500">(Hey!)</strong></p>
              <p>I wanna be me</p>
              <p>One and only me</p>
              <p>If you feel me, turn this beat up</p>
              <p>I wanna be me, me, me</p>
              <br />
              <p>누가 뭐라 해도 난 나야 난 그냥 내가 되고 싶어</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <p>굳이 뭔가 될 필요는 없어 난 그냥 나일 때 완벽하니까</p>
              <p>I wanna be <strong class="text-red-500">me, me, me</strong></p>
              <br />
              <p><strong class="text-red-500">I don't wanna be somebody</strong></p>
              <p><strong class="text-red-500">Just wanna be me, be me</strong></p>
              <p>I wanna be me, me, me</p>
              <br />
              <p><strong class="text-red-500">I don't wanna be somebody</strong></p>
              <p><strong class="text-red-500">Just wanna be me, be me</strong></p>
              <p>I wanna be me, me, me</p>
            <div>`,
        },
        {
          name: "NOT SHY",
          engName: "NOT SHY",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/104/76/630/10476630_20200818114209_500.jpg?d7bc05855d230f35f8b8c864a41f8d86/melon/resize/282/sharpen/0x1",
          lyrics: `<div class="text-center">
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">yeah</strong></p>
            <p>Not shy Not me</p>
            <p><strong class="text-blue-500">(있지 믿지 낫! 샤! 이!)</strong></p>
            <br />
            <p>난 빨리빨리 원하는 걸 말해</p>
            <p>못 가지면 어때 <strong class="text-red-500">괜히</strong></p>
            <p>망설이다 시간만 가니</p>
            <p>Yeah 다 말할래</p>
            <p>
              cuz I like it, cuz I
              <strong class="text-red-500">like it like it</strong>
            </p>
            <br />
            <p>기다려 왜 기다려서 뭐해</p>
            <p>
              내가 내 맘을 왜 왜 말하면 안 돼
              <strong class="text-red-500">yeah</strong>
            </p>
            <p>그냥 탁 그냥 <strong class="text-red-500">탁탁탁탁탁</strong></p>
            <p>Not shy to say I want you</p>
            <br />
            <p>Hey there hey there <strong class="text-red-500">우리는</strong></p>
            <p>Great pair great pair <strong class="text-red-500">네 맘이</strong></p>
            <p>뭔지 모르지만 내 생각이</p>
            <p>맞아 그러니까 <strong class="text-red-500">yeah yeah</strong></p>
            <br />
            <p>내 맘은 내 거 <strong class="text-red-500">그러니까</strong></p>
            <p>좋아한다고 <strong class="text-red-500">자유니까</strong></p>
            <p>네 맘은 네 거 <strong class="text-red-500">맞으니까</strong></p>
            <p>말해봐 다 어서 다 cuz I'm <strong class="text-red-500">NOT SHY</strong></p>
            <br />
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">NOT SHY</strong></p>
            <p>Not shy Not me</p>
            <p>Give me 다 다다 <strong class="text-red-500">다다다다다</strong></p>
            <br />
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">NOT SHY</strong></p>
            <p>Not shy Not me</p>
            <p>너를 원해 뭐 어때 cuz I'm <strong class="text-red-500">NOT SHY</strong></p>
            <br />
            <p><strong class="text-blue-500">(함성)</strong></p>
            <p>넌 빨리빨리 대답할 필욘 없어</p>
            <p>어차피 내 거니까 woo</p>
            <p>날 보고 있기만 하면 돼</p>
            <p>Yeah You will like it</p>
            <p>
              cuz I like it, cuz I
              <strong class="text-red-500">like it like it</strong>
            </p>
            <br />
            <p>내가 미워 아니라면 비워</p>
            <p>다른 건 다 지워</p>
            <p>내가 네 only one yeah</p>
            <p>그냥 싹 지워 <strong class="text-red-500">싹싹싹싹싹</strong></p>
            <p>Not shy to say I want you</p>
            <br />
            <p>Hey there hey there <strong class="text-red-500">우리는</strong></p>
            <p>Great pair great pair <strong class="text-red-500">네 맘이</strong></p>
            <p>뭔지 모르지만 내 생각이</p>
            <p>맞아 그러니까 <strong class="text-red-500">yeah yeah</strong></p>
            <br />
            <p>내 맘은 내 거 <strong class="text-red-500">그러니까</strong></p>
            <p>좋아한다고 <strong class="text-red-500">자유니까</strong></p>
            <p>네 맘은 네 거 <strong class="text-red-500">맞으니까</strong></p>
            <p>말해봐 다 어서 다 cuz I'm <strong class="text-red-500">NOT SHY</strong></p>
            <br />
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">NOT SHY</strong></p>
            <p>Not shy Not me</p>
            <p>Give me 다 다다 <strong class="text-red-500">다다다다다</strong></p>
            <br />
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">NOT SHY</strong></p>
            <p>Not shy Not me</p>
            <p>너를 원해 뭐 어때 cuz I'm <strong class="text-red-500">NOT SHY</strong></p>
            <br />
            <p><strong class="text-blue-500">(함성)</strong></p>
            <p>후회하긴 싫으니까</p>
            <p>엔딩 상관없으니까</p>
            <p>Go <strong class="text-red-500">go go</strong> 모두 쏟아내</p>
            <p>No <strong class="text-red-500">yes no</strong> 뭐든지 어때</p>
            <br />
            <p>이러면 저러면 어때</p>
            <p>어차피 안 될 거 빼고 다 돼</p>
            <p>Let's just be who we are</p>
            <p>Do what we do 네 맘대로 해</p>
            <p>Let the beat drop</p>
            <p><strong class="text-blue-500">(함성)</strong></p>
            <br />
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">NOT SHY</strong></p>
            <p>Not shy Not me</p>
            <p>말해봐 다 어서 다 cuz I'm <strong class="text-red-500">NOT SHY</strong></p>
            <br />
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">NOT SHY</strong></p>
            <p>Not shy Not me</p>
            <p>Give me 다 다다 <strong class="text-red-500">다다다다다</strong></p>
            <br />
            <p>Not shy Not me <strong class="text-red-500">ITZY</strong></p>
            <p>난 다 원해 다다 <strong class="text-red-500">NOT SHY</strong></p>
            <p>Not shy Not me</p>
            <p>너를 원해 뭐 어때 cuz I'm not shy</p>
            <p>
              <strong class="text-red-500">NOT SHY, NOT ME</strong>
              <strong class="text-blue-500"> (함성)</strong>
            </p>
            <div>`,
        },
        {
          name: "마피아",
          engName: "마피아",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/106/00/760/10600760_20210429213541_500.jpg?4fb70096b3910c7eb99311aa1ef0908b/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
              <p><strong class="text-red-500">Shh~</strong></p>
              <p>Guess who loves you <strong class="text-red-500">나야 나</strong></p>
              <p>Do I show you <strong class="text-red-500">No야 No</strong></p>
              <p>아직 Time이 <strong class="text-red-500">아냐 난</strong></p>
              <p>좀 더 가까이 좀 더 가까이</p>
              <p>그러다 갑자기 <strong class="text-red-500">싹</strong></p>
              <br />
              <p>I’mma steal it 마음을 훔쳐</p>
              <p>You are gonna <strong class="text-red-500">love me</strong></p>
              <p>
                결정적일 때 이빨을 드러내는 <strong class="text-red-500">Type</strong>
              </p>
              <br />
              <p>나와 두 눈이 마주쳐<strong class="text-red-500">도</strong></p>
              <p>난 흔들림이 없어 <strong class="text-red-500">No</strong></p>
              <p>
                널 사랑하는 게 죄라면 범인은 <strong class="text-red-500">Who?</strong>
              </p>
              <p>You’ll never know</p>
              <br />
              <p>
                Baby <strong class="text-red-500">헷갈려 헷갈려</strong> 헷갈리겠지 넌
              </p>
              <p>
                결국엔 <strong class="text-red-500">내 거야 내 거야</strong> 내 게 되겠지
                넌
              </p>
              <p>
                이제 <strong class="text-red-500">Finally Finally</strong> 택할 시간이야
              </p>
              <p>
                벌써 어느새 또 밤이 되었<strong class="text-red-500">습.니.다.</strong>
              </p>
              <br />
              <p>I’m the mafia</p>
              <p>Ma ma ma ma mafia ya ya</p>
              <p>We do it like a mafia</p>
              <br />
              <p>I’m the mafia</p>
              <p>Ma ma ma ma mafia ya ya</p>
              <p>We do it like a mafia</p>
              <p><strong class="text-red-500">또 아침이 밝았습니다</strong></p>
              <br />
              <p>어젯밤에도 You don’t even know</p>
              <p>누구일까 <strong class="text-red-500">마피아</strong></p>
              <p>날이 밝아도 You don’t even know</p>
              <p>누구일까 <strong class="text-red-500">마피아</strong></p>
              <br />
              <p>배우보다 <strong class="text-red-500">더 배우</strong></p>
              <p>늑대 가지고 <strong class="text-red-500">노는 여우</strong></p>
              <p>전혀 안 보이겠지 <strong class="text-red-500">Clue</strong></p>
              <p>
                하지만 나에겐 다 계획이 있다고 <strong class="text-red-500">Go</strong>
              </p>
              <br />
              <p>그만 머뭇머뭇대</p>
              <p>슬슬 작전 개시</p>
              <p>너를 <strong class="text-red-500">뺏어 뺏어 뺏어</strong></p>
              <p>Like a caper movie <strong class="text-red-500">(Ready)</strong></p>
              <br />
              <p>알 수 없는 Poker face <strong class="text-blue-500">(Face)</strong></p>
              <p>점령해 네 맘속 Place <strong class="text-blue-500">(Place)</strong></p>
              <p>Hurry up! Baby, catch me if you can haha!</p>
              <br />
              <p>
                Baby <strong class="text-red-500">헷갈려 헷갈려</strong> 헷갈리겠지 넌
              </p>
              <p>
                결국엔 <strong class="text-red-500">내 거야 내 거야</strong> 내 게 되겠지
                넌
              </p>
              <p>
                이제 <strong class="text-red-500">Finally Finally</strong> 택할 시간이야
              </p>
              <p>
                벌써 어느새 또 밤이 되었<strong class="text-red-500">습.니.다.</strong>
              </p>
              <br />
              <p>I’m the mafia</p>
              <p>Ma ma ma ma mafia ya ya</p>
              <p>We do it like a mafia</p>
              <br />
              <p>I’m the mafia</p>
              <p>Ma ma ma ma mafia ya ya</p>
              <p>We do it like a mafia</p>
              <p>누구일까 <strong class="text-red-500">마피아</strong></p>
              <br /><strong class="text-blue-500">(함성)</strong>
              <p>마지막 밤이 깊었어 Baby</p>
              <p>이 밤이 지나면</p>
              <p>네 곁엔 나 하나 Yeah yeah</p>
              <p>
                <strong class="text-red-500">(마)</strong> 마침내
                <strong class="text-red-500">(피)</strong> 피할 수 없는
                <strong class="text-red-500">(아)</strong> 아침이 와
              </p>
              <br />
              <p>Hahaha</p>
              <p>I’m the mafia</p>
              <p>Ma ma ma ma mafia ya ya</p>
              <p>We do it like a mafia</p>
              <br />
              <p>I’m the mafia</p>
              <p>Ma ma ma ma mafia ya ya</p>
              <p>We do it like a mafia</p>
              <p><strong class="text-red-500">또 아침이 밝았습니다</strong></p>
              <br />
              <p>어젯밤에도 You don’t even know</p>
              <p>누구일까 <strong class="text-red-500">마피아</strong></p>
              <p>날이 밝아도 You don’t even know</p>
              <p>누구일까 <strong class="text-red-500">마피아</strong></p>
              <strong class="text-blue-500">(함성)</strong>
            <div>`,
        },
        {
          name: "로꼬",
          engName: "로꼬",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/107/21/169/10721169_20210923195418_500.jpg?5fde9ecf53ea2dd1045b94701b60e753/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
                <p>LOCO</p>
              <p>
                <strong class="text-blue-500"
                  >(황예지 최지수 신류진 이채령 <br />신유나 있지 믿지 LOCO)</strong
                >
              </p>
              <br />
              <p>미친다는 말이 이해 간달까</p>
              <p>I'm gettin' <strong class="text-red-500">LOCO LOCO</strong></p>
              <p>Oh gosh 이건 달콤한 독 같아</p>
              <p>I'm gettin' <strong class="text-red-500">LOCO LOCO</strong></p>
              <br />
              <p>출구 없는 방 안에 사방이 너란 거울이야</p>
              <p>굳이 쉽게 말하자면</p>
              <p>I feel like I was born to <strong class="text-red-500">love ya</strong></p>
              <br />
              <p>
                오아시스 찾는 <strong class="text-red-500">kitty</strong> 난 네 주위를
                맴돌지
              </p>
              <p>콩깍지 껴 버린 내 두 눈은 <strong class="text-red-500">yellow</strong></p>
              <p>켜줘 네 손으로 불 꺼진 내 심장</p>
              <br />
              <p>
                It's <strong class="text-red-500">too late,</strong> want you
                <strong class="text-red-500">so bad</strong>
              </p>
              <p>너를 갖고 싶어졌어</p>
              <p>몰라 이젠 이미 난 blind 끝까지 가볼래</p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> 넌 날 반쯤 미치게 만들어</p>
              <p>
                You got me like
                <strong class="text-red-500">CRAY-CRAY-CRAZY in love</strong>
              </p>
              <p>대체 네가 <strong class="text-red-500">뭔데</strong></p>
              <br />
              <p>미쳐 날뛰어 기분이 up &amp; down</p>
              <p>
                You got me like
                <strong class="text-red-500">CRAY-CRAY-CRAZY in love</strong>
              </p>
              <p>나도 내가 outta control</p>
              <br />
              <p>I'm gettin' <strong class="text-red-500">LOCO LOCO</strong></p>
              <p>I'm gettin' <strong class="text-red-500">LOCO LOCO</strong></p>
              <br />
              <p>내게 대체 넌 뭘 <strong class="text-red-500">원해</strong></p>
              <p>
                미친 이 마음은 다 갖다 퍼 줘도 I'm
                <strong class="text-red-500">ok</strong>
              </p>
              <br />
              <p>하루는 천국을 갔다 왔다 가도</p>
              <p>나락 끝까지 날 밀어버려</p>
              <p>
                So <strong class="text-red-500">dangerous</strong>, so so so
                <strong class="text-red-500">dangerous,</strong> uh-oh
              </p>
              <p>날 더 망가뜨려도 널 믿을 수 밖에 없게 해줘</p>
              <br />
              <p>
                오아시스 찾은 <strong class="text-red-500">kitty</strong> 난 네 옆 자릴
                넘보지
              </p>
              <p>Break 따윈 잊었어 끝까지 가 볼래</p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> 넌 날 반쯤 미치게 만들어</p>
              <p>
                You got me like
                <strong class="text-red-500">CRAY-CRAY-CRAZY in love</strong>
              </p>
              <p>대체 네가 <strong class="text-red-500">뭔데</strong></p>
              <br />
              <p>미쳐 날뛰어 기분이 up &amp; down</p>
              <p>
                You got me like
                <strong class="text-red-500">CRAY-CRAY-CRAZY in love</strong>
              </p>
              <p>나도 내가 outta control <strong class="text-blue-500">(함성)</strong></p>
              <br />
              <p>LOCO</p>
              <p>I'm gettin' LOCO-LOCO-CO</p>
              <p>I'm gettin' LOCO-LOCO-CO-oh-oh-oh</p>
              <p>I'm gettin' LOCO-LOCO-CO</p>
              <p>I'm gettin' <strong class="text-red-500">LOCO-LOCO-CO-oh-oh-oh</strong></p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong> 넌 날 완전 미치게 만들어</p>
              <p>
                You got me like
                <strong class="text-red-500">CRAY-CRAY-CRAZY in love</strong>
              </p>
              <p>대체 네가 <strong class="text-red-500">뭔데</strong></p>
              <br />
              <p>미쳐 날뛰어 기분이 up &amp; down</p>
              <p>
                You got me like
                <strong class="text-red-500">CRAY-CRAY-CRAZY in love</strong>
              </p>
              <p>나도 내가 outta control</p>
              <br />
              <p>I'm gettin' <strong class="text-red-500">LOCO LOCO</strong></p>
              <p>I'm gettin' <strong class="text-red-500">LOCO LOCO</strong></p>
            <div>`,
        },
        {
          name: "스니커즈",
          engName: "스니커즈",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/110/04/992/11004992_20220722175827_500.jpg?7925173e004f56f8d081fdec56fbaa15/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
              <p><strong class="text-red-500">Yeah Yeah</strong></p>
              <p>
                <strong class="text-red-500">Let’s go</strong>
                <strong class="text-blue-500"> ITZY</strong>
              </p>
              <p>Like what?</p>
              <br />
              <p>자유로운 기분 <strong class="text-red-500">I like that</strong></p>
              <p>고민 따윈 already <strong class="text-red-500">done, done</strong></p>
              <p>색안경 끼고 보는 게 죄지</p>
              <p>That's not my fault <strong class="text-red-500">woah</strong></p>
              <br />
              <p>Told ya I don't care at all</p>
              <p>내 멋대로 갈 거야</p>
              <p>필요 없어 order</p>
              <p>Don't need no guidance</p>
              <p>I'm makin' my way</p>
              <br />
              <p>I'm on my way up <strong class="text-red-500">(차차)</strong></p>
              <p>Run to the top <strong class="text-red-500">(아우~)</strong></p>
              <p>난 언제든 straight up <strong class="text-red-500">(Alright)</strong></p>
              <p>원래 두려운 게 없어 난</p>
              <br />
              <p>상관없어 call me <strong class="text-red-500">trouble</strong></p>
              <p>or you can call me <strong class="text-red-500">weirdo</strong></p>
              <p>나로 살고 <strong class="text-red-500">싶어</strong></p>
              <p>턱 끝을 치켜올린 채로</p>
              <p>다 가질 듯한 attitude 그거면 돼</p>
              <p><strong class="text-blue-500">(스! 니! 커! 즈!)</strong></p>
              <br />
              <p>Put my sneakers on</p>
              <p>하나 둘 ready, <strong class="text-red-500">get set, go</strong></p>
              <p>Put my sneakers on</p>
              <p><strong class="text-red-500">Put 'em up, put 'em up</strong></p>
              <p>Put my sneakers on</p>
              <p>하나 둘 ready, <strong class="text-red-500">get set, go</strong></p>
              <p>멀리 가보자고 ya ya</p>
              <p><strong class="text-red-500">Put 'em up, put 'em up</strong></p>
              <br />
              <p>기다리던 순간 stand up, <strong class="text-red-500">stand up</strong></p>
              <p>
                빨리 뛰는 심장 don't stop,
                <strong class="text-red-500">don't stop</strong>
              </p>
              <p>Get loose 불태워 지금 my youth</p>
              <br />
              <p>The party ain't started</p>
              <p>시작도 안 했어 난</p>
              <p>요즘 꽂힌 말이 하나 <strong class="text-red-500">있지</strong></p>
              <p>My best is <strong class="text-red-500">yet to come</strong></p>
              <br />
              <p>상관없어 call me <strong class="text-red-500">trouble</strong></p>
              <p>or you can call me <strong class="text-red-500">weirdo</strong></p>
              <p>나로 살고 <strong class="text-red-500">싶어</strong></p>
              <p>턱 끝을 치켜올린 채로</p>
              <p>다 가질 듯한 attitude 그거면 돼</p>
              <p><strong class="text-blue-500">(스! 니! 커! 즈!)</strong></p>
              <br />
              <p>Put my sneakers on</p>
              <p>하나 둘 ready, <strong class="text-red-500">get set, go</strong></p>
              <p>Put my sneakers on</p>
              <p><strong class="text-red-500">Put 'em up, put 'em up</strong></p>
              <p>Put my sneakers on</p>
              <p>하나 둘 ready, <strong class="text-red-500">get set, go</strong></p>
              <p>멀리 가보자고 ya ya</p>
              <p><strong class="text-red-500">Put 'em up, put 'em up</strong></p>
              <br />
              <p>자유롭게 뛰고 싶어 다른 사람</p>
              <p>시선들 don't care now <strong class="text-red-500">(Hey Hey)</strong></p>
              <p>어디까지 가게 될지 모르지만</p>
              <p>일단은 start right now</p>
              <br />
              <p>Yeah <strong class="text-red-500">Alright</strong></p>
              <p>멈추지 마 to the top</p>
              <p>Don’t worry about it cuz you know I</p>
              <p><strong class="text-red-500">Put my sneakers on</strong></p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong></p>
              <p>상관없어 call me trouble</p>
              <p>or you can call me weirdo</p>
              <p>나로 살고 싶어</p>
              <p>턱 끝을 치켜</p>
              <p>
                <strong class="text-blue-500"
                  >(황예지 최지수 신류진 이채령 신유나 믿지)</strong
                >
              </p>
              <p>올린 채로</p>
              <p>다 가질 듯한 attitude 그거면 돼</p>
              <br />
              <p>
                <strong class="text-red-500">You better put your sneakers on</strong>
              </p>
              <br />
              <p>Put my sneakers on</p>
              <p>하나 둘 ready, <strong class="text-red-500">get set, go</strong></p>
              <p>Put my sneakers on</p>
              <p><strong class="text-red-500">Put 'em up, put 'em up</strong></p>
              <p>Put my sneakers on</p>
              <p>하나 둘 ready, <strong class="text-red-500">get set, go</strong></p>
              <p>멀리 가보자고 ya ya</p>
              <p><strong class="text-red-500">Put 'em up, put 'em up</strong></p>
              <br />
              <p>자유롭게 뛰고 싶어 다른 사람</p>
              <p>시선들 don't care now <strong class="text-red-500">(Hey Hey)</strong></p>
              <p>어디까지 가게 될지 모르지만</p>
              <p>일단은 start right now</p>
              <br />
              <p>Yeah <strong class="text-red-500">Alright</strong></p>
              <p>멈추지 마 to the top</p>
              <p>같이 걸어 가보자고</p>
              <p><strong class="text-red-500">Put 'em up, put 'em up</strong></p>
              <p><strong class="text-blue-500">(있지 믿지 날자)</strong></p>
              <p><strong class="text-blue-500">(함성)</strong></p>
            <div>`,
        },
        {
          name: "체셔",
          engName: "체셔",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/111/12/176/11112176_20221129102941_500.jpg?464f37ad4bf227b507ce6d3580547b9b/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
              <p>Lalala lalala lalalalala</p>
              <p>Lalala</p>
              <p>Lalala lalalalala</p>
              <p><strong class="text-blue-500">(있! 지! 체! 셔!)</strong></p>
              <br />
              <p>또 너는 ask me</p>
              <p>무슨 생각을 하고 있는지</p>
              <p><strong class="text-red-500">Not my business</strong> 나도 날 몰라</p>
              <p>내 마음 따라 playing</p>
              <br />
              <p>좋긴 좋은데 <strong class="text-red-500">love or like</strong></p>
              <p>숨었다가도 <strong class="text-red-500">나타나</strong> yayaya</p>
              <p>맞고 틀린 게 어딨지</p>
              <p><strong class="text-red-500">Cheshire처럼</strong> it's all right</p>
              <br />
              <p><strong class="text-red-500">자꾸</strong> 물어보면 boring</p>
              <p>
                <strong class="text-red-500">뭐든</strong> 내 맘대로 play a trick
                <strong class="text-red-500"> (play a trick)</strong>
              </p>
              <p>정해진 답은 없어 you want to know</p>
              <br />
              <p>원한다면 힌틀 줄게</p>
              <p>나머진 free 하게 날</p>
              <p>네 마음속에</p>
              <p><strong class="text-red-500">풀어놔 줘</strong> lalalalala</p>
              <br />
              <p><strong class="text-red-500">Hey,</strong> why so serious?</p>
              <p>
                보이는 것 그대로 날 믿어봐 <strong class="text-red-500">(Hey!)</strong>
              </p>
              <p>어렵게 생각 마</p>
              <p><strong class="text-red-500">Nothing’s wrong, right?</strong></p>
              <p>Can you see me?</p>
              <br />
              <p><strong class="text-red-500">Hey,</strong> why so curious?</p>
              <p>
                머리 말고 네 느낌을 믿어봐 <strong class="text-red-500">(Hey!)</strong>
              </p>
              <p>심각해지지 마</p>
              <p><strong class="text-red-500">Anything’s right!</strong></p>
              <p>Lalalalala</p>
              <br />
              <p>내 미소는 이상하지</p>
              <p>그래도 너는 like me</p>
              <p><strong class="text-red-500">Yeah feel so free</strong></p>
              <p>눈 감음 사라지지 미소는 남겨둘게</p>
              <br />
              <p>어둠 속에 <strong class="text-red-500">반짝인 eyes</strong></p>
              <p>누군간 날 <strong class="text-red-500">조명 삼아</strong></p>
              <p>길을 찾아낼 지도 I wanna go</p>
              <p><strong class="text-red-500">봐 봐, 봐 봐,</strong> 잘 찾아봐</p>
              <br />
              <p><strong class="text-red-500">Follow</strong> 이제 다음 story</p>
              <p>
                <strong class="text-red-500">여전</strong>히 너는 wondering
                <strong class="text-red-500">(wondering)</strong>
              </p>
              <p><strong class="text-red-500">그런 표정</strong> Lalalalala</p>
              <br />
              <p><strong class="text-red-500">Hey,</strong> why so serious?</p>
              <p>
                보이는 것 그대로 날 믿어봐 <strong class="text-red-500">(Hey!)</strong>
              </p>
              <p>어렵게 생각 마</p>
              <p><strong class="text-red-500">Nothing’s wrong, right?</strong></p>
              <p>Can you see me?</p>
              <br />
              <p><strong class="text-red-500">Hey,</strong> why so curious?</p>
              <p>
                머리 말고 네 느낌을 믿어봐 <strong class="text-red-500">(Hey!)</strong>
              </p>
              <p>심각해지지 마</p>
              <p><strong class="text-red-500">Anything’s right!</strong></p>
              <p>Lalalalala</p>
              <br />
              <p>Lalala lalala lalalalala</p>
              <p>Lalala</p>
              <p>Lalala lalalalala</p>
              <p><strong class="text-red-500">Why so serious?</strong></p>
              <br />
              <p>Lalala lalala lalalalala</p>
              <p>Lalala</p>
              <p>Lalala lalalalala</p>
              <p><strong class="text-red-500">Why so curious?</strong></p>
              <br />
              <p>내 뒤에 가려진</p>
              <p>
                내 맘 사실 나도 몰라 what I want
                <strong class="text-red-500">(oh!)</strong>
              </p>
              <p>대체 왜 그게 중요해</p>
              <p>We’re gonna do it right</p>
              <p><strong class="text-red-500">Will you join me?</strong></p>
              <br />
              <p>네 앞에 펼쳐진</p>
              <p>
                이 순간을 즐기면 돼 이대로 <strong class="text-red-500">(Hey!)</strong>
              </p>
              <p>Nothing’s wrong, Nothing’s right</p>
              <p>Lalalalala</p>
              <p>
                <strong class="text-blue-500"
                  >(황예지 최지수 신류진 이채령 신유나 체셔)</strong
                >
              </p>
              <br />
              <p>Lalala lalala lalalalala</p>
              <p>Lalala</p>
              <p>Lalala lalalalala</p>
              <p><strong class="text-red-500">Why so serious?</strong></p>
              <br />
              <p>Lalala lalala lalalalala</p>
              <p>Lalala</p>
              <p>Lalala lalalalala</p>
              <p><strong class="text-red-500">Why so curious?</strong></p>
              <br />
              <p>Lalala lalalalala</p>
              <p><strong class="text-blue-500">(있! 지! 믿! 지!)</strong></p>
              <p><strong class="text-blue-500">(함성)</strong></p>
            <div>`,
        },
        {
          name: "케이크",
          engName: "케이크",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/112/77/647/11277647_20230731184013_500.jpg?YUV420-90/melon/resize/282",
          lyrics: `<div class="text-center">
              <p><strong class="text-blue-500">(함성)</strong></p>
              <p>
                <strong class="text-red-500">ITZY MIDZY like that!</strong>
              </p>
              <br />
              <p>CAKE CAKE CAKE CAKE CAKE</p>
              <p>
                It’s a piece of CAKE CAKE CAKE CAKE CAKE
                <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <p>CAKE CAKE CAKE CAKE CAKE</p>
              <p>
                Yeah piece of CAKE CAKE CAKE CAKE CAKE
                <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <br />
              <p>(Ooh wee) lalala lalala la la</p>
              <p>(Ooh wee) lalala lalala la</p>
              <p><strong class="text-red-500">왕 하고 먹어버려 다</strong> yeah like</p>
              <p>
                CAKE CAKE CAKE CAKE CAKE <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <br />
              <p>하늘은 참 파래 또 내 시간은 never waits</p>
              <p>똑같은 건 뻔해 또 다른 걸 난 원해 chase</p>
              <p>어떻게 모두를 다 맞춰줘</p>
              <p>존중해 줘 I do me, you do you, you &amp; I</p>
              <p><strong class="text-red-500">너는 너 나는 나</strong> 좋잖아</p>
              <br />
              <p>
                <strong class="text-red-500">Cake cake</strong> can’t wait till I bite
                them
              </p>
              <p>어차피 인생은 내꺼 <strong class="text-red-500">(니꺼)</strong></p>
              <p>
                <strong class="text-red-500">Baam baam</strong> can’t wait till I shoot
                them
              </p>
              <p>뭘 그리 복잡해 매번 <strong class="text-red-500">(매번)</strong></p>
              <br />
              <p>
                Shake it shake,
                <strong class="text-red-500">shake it shake, shake it shake</strong>
              </p>
              <p>
                Bust it up, <strong class="text-red-500">bust it up, bust it up</strong>
              </p>
              <p>우린 너무나 바빠 yeah like my birthday</p>
              <br />
              <p>Maybe</p>
              <p>쉽지 않아 <strong class="text-red-500">anyway</strong></p>
              <p>생각대로 <strong class="text-red-500">everyday</strong></p>
              <p>고민 고민 <strong class="text-red-500">대신에</strong></p>
              <p>나만 생각<strong class="text-red-500">해 이제</strong></p>
              <p>다 괜찮아 어때 껌이라고 난 생각해</p>
              <p>Alright alright</p>
              <p><strong class="text-red-500">왕 하고 먹어버려 다</strong> yeah like</p>
              <br />
              <p>CAKE CAKE CAKE CAKE CAKE</p>
              <p>
                It’s a piece of CAKE CAKE CAKE CAKE CAKE
                <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <p>CAKE CAKE CAKE CAKE CAKE</p>
              <p>
                Yeah piece of CAKE CAKE CAKE CAKE CAKE
                <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <br />
              <p>(Ooh wee) lalala lalala la la</p>
              <p>(Ooh wee) lalala lalala la</p>
              <p><strong class="text-red-500">왕 하고 먹어버려 다</strong> yeah like</p>
              <p>
                CAKE CAKE CAKE CAKE CAKE <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <br />
              <p>장담 못 해 날씨처럼 it’s up in the air</p>
              <p>내일도 너 행복할지 who can guarantee it so</p>
              <p><strong class="text-red-500">A T M</strong> 지금이 훨씬 중요해</p>
              <p>
                <strong class="text-red-500">Yeah, your way,</strong> just live it up
                cause
              </p>
              <br />
              <p>Maybe</p>
              <p>쉽지 않아 <strong class="text-red-500">anyway</strong></p>
              <p>생각대로 <strong class="text-red-500">everyday</strong></p>
              <p>고민 고민 <strong class="text-red-500">대신에</strong></p>
              <p>나만 생각<strong class="text-red-500">해 이제</strong></p>
              <p>다 괜찮아 어때 껌이라고 난 생각해</p>
              <p>Alright alright</p>
              <p><strong class="text-red-500">왕 하고 먹어버려 다</strong> yeah like</p>
              <br />
              <p>CAKE CAKE CAKE CAKE CAKE</p>
              <p>
                It’s a piece of CAKE CAKE CAKE CAKE CAKE
                <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <p>CAKE CAKE CAKE CAKE CAKE</p>
              <p>
                Yeah piece of CAKE CAKE CAKE CAKE CAKE
                <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <br />
              <p>(Ooh wee) lalala lalala la la</p>
              <p>(Ooh wee) lalala lalala la</p>
              <p><strong class="text-red-500">왕 하고 먹어버려 다</strong> yeah like</p>
              <p>
                CAKE CAKE CAKE CAKE CAKE <strong class="text-blue-500">(CAKE)</strong>
              </p>
              <br />
              <p><strong class="text-blue-500">(함성)</strong></p>
              <p>Sometimes sometimes</p>
              <p>시원한 바람을 원해</p>
              <p>힘이 더 날지 몰라 ooh</p>
              <br />
              <p>Sometimes sometimes</p>
              <p>가끔 무관심이 편해</p>
              <p><strong class="text-red-500">Ay</strong> 누구든 들리게 말해</p>
              <p><strong class="text-red-500">Ay</strong> 쉽게 좀 생각해 like that</p>
              <br />
              <p>쉽지 않아 <strong class="text-red-500">anyway</strong></p>
              <p>생각대로 <strong class="text-red-500">everyday</strong></p>
              <p>고민 고민 <strong class="text-red-500">대신에</strong></p>
              <p>나만 생각<strong class="text-red-500">해 이제</strong></p>
              <p>다 괜찮아 어때 껌이라고 난 생각해</p>
              <p>Alright alright</p>
              <p>
                <strong class="text-red-500">왕 하고 먹어버려 다 yeah like</strong>
                <strong class="text-blue-500"> (CAKE)</strong>
              </p>
            <div>`,
        },
        {
          name: "언터쳐블",
          engName: "언터쳐블",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/113/86/125/11386125_20240108182050_500.jpg?YUV422-90/melon/resize/282",
          lyrics: `<div class="text-center">
            <div>
                <p>
                  <strong class="text-blue-500">(함성)</strong> 아하
                  <strong class="text-blue-500">(언! 터! 쳐! 블! 있! 지!)</strong>
                </p>
                <p>1, 2, 3 <strong class="text-red-500">let’s go!</strong></p>
                <br />
                <p>날 또 건드려</p>
                <p>눈 앞을 가려 보지만 <strong class="text-red-500">(Ah-woo)</strong></p>
                <p>내 발걸음 앞에</p>
                <p><strong class="text-red-500">You’re gonna know</strong></p>
                <p>You’re all gonna know</p>
                <br />
                <p>내가 무얼 <strong class="text-red-500">하든지</strong></p>
                <p>
                  Now you just keep your <strong class="text-red-500">eyes on me</strong>
                </p>
                <p>
                  난 못 <strong class="text-red-500">건드려</strong> 절대 못
                  <strong class="text-red-500">건드려</strong>
                </p>
                <p>어디 날 한 번 지켜봐</p>
                <br />
                <p>Blow 이미 난 몰아쳐 I’m on <strong class="text-red-500">fire</strong></p>
                <p>나를 막는 건 누구든</p>
                <p>내겐 아무런 의미 없을 뿐야</p>
                <p>
                  <strong class="text-red-500">Why not?</strong> 난 자신 있어
                  <strong class="text-red-500">뭐든</strong>
                </p>
                <p>
                  Show what I have 날 알수록 <strong class="text-red-500">놀라워</strong>
                </p>
                <p>멈출 생각 따윈 없거든</p>
                <p><strong class="text-red-500">Here we go now</strong></p>
                <br />
                <p>
                  <strong class="text-blue-500">(함성)</strong> I'm untouchable 막아서지
                  못해
                  <strong class="text-red-500">시작됐어</strong>
                </p>
                <p>
                  지금 flow대로 just going <strong class="text-red-500">on and on</strong>
                </p>
                <p>
                  <strong class="text-red-500">더</strong> mess it up now
                  <strong class="text-red-500">넌</strong> 쉽게 knockout
                </p>
                <p>어떤 것도 I don’t care about</p>
                <p>I'm untouchable 깨지지 않는 form</p>
                <br />
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>막을 수 없어 <strong class="text-red-500">nobody</strong></p>
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>Nothing gon’ stop me nobody yah</p>
                <br />
                <p>나만이 내 <strong class="text-red-500">vision</strong></p>
                <p>겁나지 않을 <strong class="text-red-500">mission</strong></p>
                <p>두려울 게 없다고 <strong class="text-blue-500">(없어!)</strong></p>
                <p>Yeah I gotta go</p>
                <p>Baby keep your <strong class="text-red-500">eyes on me</strong></p>
                <br />
                <p>지도 따윈 안 봐 난</p>
                <p>끌린 대로 가 만족할 때까지</p>
                <p>항상 내가 원한 길로</p>
                <p>You know I’m not scared</p>
                <br />
                <p>Blow 이미 난 몰아쳐 I’m on <strong class="text-red-500">fire</strong></p>
                <p>나를 막는 건 누구든</p>
                <p>내겐 아무런 의미 없을 뿐야</p>
                <p><strong class="text-blue-500">(Bam bam bam ba li)</strong></p>
                <p>Why not? 난 자신 있어 뭐든</p>
                <p>Show what I have 날 알수록 놀라워</p>
                <p><strong class="text-blue-500">(Bam bam bam ba li)</strong></p>
                <p>멈출 생각 따윈 없거든</p>
                <p><strong class="text-blue-500">(Here we go now)</strong> Hey</p>
                <br />
                <p>
                  <strong class="text-blue-500">(함성)</strong> I'm untouchable<br />
                  막아서지 못해
                  <strong class="text-red-500">시작됐어</strong>
                </p>
                <p>
                  지금 flow대로 just going <strong class="text-red-500">on and on</strong>
                </p>
                <p>
                  <strong class="text-red-500">더</strong> mess it up now
                  <strong class="text-red-500">넌</strong> 쉽게 knockout
                </p>
                <p>어떤 것도 I don’t care about</p>
                <p>I'm untouchable 깨지지 않는 form</p>
                <br />
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>막을 수 없어 <strong class="text-red-500">nobody</strong></p>
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>Nothing gon’ stop me nobody yah</p>
                <br />
                <p>
                  <strong class="text-blue-500">(함성)</strong> 더 크게 shout it out 겁날 게
                  없잖아
                </p>
                <p>원해온 그대로 take it</p>
                <p><strong class="text-red-500">Bam bam bam ba li</strong></p>
                <p>Nothing gon’ stop me nobody yah</p>
                <p>Hey yeah nobody</p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>No one can stop me 한계 없이 run</p>
                <p><strong class="text-red-500">Here we go now</strong></p>
                <br />
                <p>
                  <strong class="text-blue-500">(함성)</strong> I'm untouchable 막아서지
                  못해 시작됐어
                </p>
                <p>
                  나의 flow대로 just going <strong class="text-red-500">on and on</strong>
                </p>
                <p>
                  <strong class="text-red-500">더</strong> mess it up now
                  <strong class="text-red-500">넌</strong> 쉽게 knockout
                </p>
                <p>소용없어 I don’t care about</p>
                <p>I'm untouchable 꺾이지 않는 form</p>
                <br />
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>막을 수 없어 <strong class="text-red-500">nobody</strong></p>
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>Nothing gon’ stop me nobody yah</p>
                <br />
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>막을 수 없어 <strong class="text-red-500">nobody</strong></p>
                <p>Bam bam <strong class="text-red-500">bam ba li</strong></p>
                <p>Nothing gon’ stop me nobody yah</p>
                <p><strong class="text-blue-500">(함성)</strong></p>
              </div>
            <div>`,
        },
        {
          name: "GOLD",
          engName: "GOLD",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/116/15/651/11615651_20241015093752_500.jpg?362f9087d3353591f8e7883c021350dc/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
            <div>
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>
                  평온함을 rip 대혼란을 일으켜 <strong class="text-blue-500">(골!)</strong>
                </p>
                <p>
                  본 적 없던 lit 내 본능을 깨워 <strong class="text-blue-500">(드!)</strong>
                </p>
                <p>Going to my head, going all out of control</p>
                <p>Cuz I shine so bright like dynamite GOLD</p>
                <p><strong class="text-blue-500">있! 지! 믿! 지! (함성)</strong></p>
                <p>Yeah <strong class="text-red-500">ITZY</strong></p>
                <br />
                <p>쉴 새 없는 하루</p>
                <p><strong class="text-red-500">Wait a minute</strong></p>
                <p>문젠 없지</p>
                <p><strong class="text-red-500">Wait a minute</strong></p>
                <p>좀 더 재밌는 걸 찾아갈 뿐이지 What</p>
                <p>
                  Just keep it going up <strong class="text-red-500">up up up up</strong>
                </p>
                <p>그때 너를 발견한 거야</p>
                <p>두 눈이 마주친 다음</p>
                <p><strong class="text-blue-500">(hey~)</strong></p>
                <br />
                <p>That thing that you do</p>
                <p>That thing that you do 불현듯이 내맘이</p>
                <p><strong class="text-blue-500">(hey~)</strong></p>
                <p>Yeah diamond in my heart 반쯤 홀린 듯</p>
                <p><strong class="text-red-500">What's the deal</strong></p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>
                  Always in my head you a repeat <br />of my
                  <strong class="text-red-500">favorite song</strong>
                </p>
                <p>
                  나의 머리엔 새로운 감정들이 <strong class="text-red-500">느껴져</strong>
                </p>
                <p>완전히 다른 세상이 all around</p>
                <p>Get up, let's go another round</p>
                <br />
                <p>It's like GOLD <strong class="text-blue-500">(G! O! L! D!)</strong></p>
                <p>눈을 뗄 수 없이 glow</p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <br />
                <p>It's like GOLD <strong class="text-blue-500">(G! O! L! D!)</strong></p>
                <p>거부할 수 없이 glow</p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <p>Head to toe we're G-O-L-D <strong class="text-red-500">GOLD</strong></p>
                <br />
                <p>Gold in the air, gold everywhere</p>
                <p>디딜 틈조차 없는 shadow 너라는 존재로</p>
                <p>Hey 나는 이제 저 멀리 빛나는 별보다 밝게 타오르게 돼</p>
                <br />
                <p><strong class="text-blue-500">(hey~)</strong></p>
                <p>What you want to do</p>
                <p>What you want to do 조금 위험한 느낌</p>
                <p><strong class="text-blue-500">(hey~)</strong></p>
                <p>Yeah diamond in my heart 가빠지는 숨</p>
                <p><strong class="text-red-500">What's the deal</strong></p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>
                  Always in my head you a repeat <br />of my
                  <strong class="text-red-500">favorite song</strong>
                </p>
                <p>
                  나의 심장에 낯선 감정들이 <strong class="text-red-500">느껴져</strong>
                </p>
                <p>완전히 다른 세상이 all around</p>
                <p>Get up, let's go another round</p>
                <br />
                <p>It's like GOLD <strong class="text-blue-500">(G! O! L! D!)</strong></p>
                <p>눈을 뗄 수 없이 glow</p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <br />
                <p>It's like GOLD <strong class="text-blue-500">(G! O! L! D!)</strong></p>
                <p>거부할 수 없이 glow</p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <p>Head to toe we're G-O-L-D gold</p>
                <br />
                <p>
                  <strong class="text-blue-500"
                    >(황예지 최지수 신류진 이채령 신유나)</strong
                  >
                </p>
                <p>
                  <strong class="text-blue-500"
                    >(영원히 빛나줘 Just like that) (함성)</strong
                  >
                </p>
                <br />
                <p>
                  It's like, it's like, it's like, it's like GOLD<br />
                  <strong class="text-blue-500">(G! O! L! D!)</strong>
                </p>
                <p>계속 날 이끄는 glow</p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <br />
                <p>It's like GOLD <strong class="text-blue-500">(G! O! L! D!)</strong></p>
                <p>눈을 감아봐도 glow</p>
                <p>
                  <strong class="text-red-500"
                    >Day and night we beaming blazing just like that</strong
                  >
                </p>
                <p>Head to toe we're G-O-L-D <strong class="text-red-500">GOLD</strong></p>
                <p><strong class="text-blue-500">(함성)</strong></p>
              </div>
            <div>`,
        },
        {
          name: "이메프",
          engName: "Imaginary Friend",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/116/25/589/11625589_20241025102352_500.jpg?f78acecc8dba71b4082e344dacb45403/melon/resize/260/quality/80/optimize",
          lyrics: `<div class="text-center">
              <div>
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>
                  <strong class="text-blue-500"
                    >(황예지! 최지수! 신류진! 이채령! <br />신유나! 있지! Who are
                    you?)</strong
                  >
                </p>
                <p>Who am I? The revolution</p>
                <p>환상 속에 <strong class="text-red-500">태어나</strong></p>
                <p>새롭게 깨어난 your illusion</p>
                <p>Oh 너의 상상 속에 <strong class="text-red-500">존재해</strong></p>
                <br />
                <p>네 꿈들도 현실이 되게</p>
                <p>숨결마저 <strong class="text-red-500">함께해</strong></p>
                <p>Who am I? 믿을 수 있니</p>
                <p>
                  Oh I'm a fallen angel <strong class="text-red-500">and I said</strong>
                </p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>Call out my name in the middle of the night</p>
                <p>
                  왜? <strong class="text-red-500">두려워 마</strong> call out my name yeah
                </p>
                <p>Call out my name in the middle of the night</p>
                <p>왜? <strong class="text-red-500">두려워 마</strong></p>
                <br />
                <p>You know, I'm your imaginary friend</p>
                <p>You know, I'm 너의 밤이 되어줄게</p>
                <p>When there's monsters on your ceiling</p>
                <p>I'll keep you safe and 꿈을 꿀 수 있게</p>
                <p>You know, I'm your imaginary friend</p>
                <p>You know, I'm</p>
                <p>
                  It's you and I until the end
                  <strong class="text-blue-500">(있지! 믿지!)</strong>
                </p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>
                  <strong class="text-blue-500"
                    >(황예지! 최지수! 신류진! 이채령!<br />
                    신유나! 있지! Who are you?)</strong
                  >
                </p>
                <p>Who am I? The evolution</p>
                <p>상상 속에 <strong class="text-red-500">자라난</strong></p>
                <p>다른 색의 hallucination</p>
                <p>Oh 너의 기억 안에 <strong class="text-red-500">존재해</strong></p>
                <br />
                <p>
                  Come on and <strong class="text-red-500">dance, dance</strong> and don't
                  stop
                </p>
                <p>작은 나의 <strong class="text-red-500">lucky spark</strong></p>
                <p>네게 힘이 <strong class="text-red-500">될 거야</strong></p>
                <p>
                  너와 나 <strong class="text-red-500">함께야</strong> can't stop thinking
                  about our vibe
                </p>
                <p>
                  이제야 <strong class="text-red-500">we can run</strong> and I'm killing it
                  to the top yeah
                </p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>Call out my name in the middle of the night</p>
                <p>
                  왜? <strong class="text-red-500">두려워 마</strong> call out my name yeah
                </p>
                <p>Call out my name in the middle of the night</p>
                <p>왜? <strong class="text-red-500">두려워 마</strong></p>
                <br />
                <p>
                  You know, I'm <strong class="text-blue-500">(함성)</strong> your imaginary
                  friend
                </p>
                <p>You know, I'm 너의 밤이 되어줄게</p>
                <p>When there's monsters on your ceiling</p>
                <p>I'll keep you safe and 꿈을 꿀 수 있게</p>
                <p>You know, I'm your imaginary friend</p>
                <p>You know, I'm</p>
                <p>It's you and I until the end</p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>
                  <strong class="text-blue-500"
                    >(황예~지! 최지~수! 신류~진! 이!채!령!<br />
                    신유~나! 있지! 믿지!)</strong
                  >
                </p>
              </div>
            <div>`,
        },
        {
          name: "Mr. Vampire",
          engName: "Mr. Vampire",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/113/86/125/11386125_20240108182050_500.jpg?YUV422-90/melon/resize/260",
          lyrics: `<div class="text-center">
              <div>
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>
                  아주 상쾌하게 <strong class="text-red-500">번쩍</strong> 잠에서 깬
                  <strong class="text-red-500">기분</strong>
                </p>
                <p>기지개를 켜며 발을 내<strong class="text-red-500">디뎌</strong></p>
                <p>나 찾은 걸까 true love</p>
                <p>분명히 멋진 날이 될 것 같은 걸</p>
                <br />
                <p>이건 사랑일까 <strong class="text-blue-500">(예!)</strong></p>
                <p>우린 영원히 영원할까 <strong class="text-blue-500">(예!)</strong></p>
                <p>Yeah 난 느낌이 와</p>
                <p>넌 좀 뭔가 다른 듯해</p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>하얗고 예쁜 teeth</p>
                <p>점점 더 달콤해진 my blood</p>
                <p>새들처럼 뛰는 heartbeat</p>
                <p>Bite me, bite you, <strong class="text-red-500">boom boom</strong></p>
                <br />
                <p>연애 세폰 모조리 <strong class="text-blue-500">(모조리)</strong></p>
                <p>
                  묻혀있었어 땅속 깊숙이 <strong class="text-blue-500">(깊숙이)</strong>
                </p>
                <p>Ay 하긴 사랑 그따위 <strong class="text-blue-500">(그따위)</strong></p>
                <p>피곤했어 너를 만날 때까진</p>
                <br />
                <p>어서 나를 깨물어 봐 Mr. <strong class="text-red-500">Vampire</strong></p>
                <p>하나하나 캐물어봐 Mr. <strong class="text-red-500">Vampire</strong></p>
                <p>Good, we're a match made in heaven</p>
                <p>우린 너무 <strong class="text-red-500">잘 어울려</strong> Mr. Vampire</p>
                <br />
                <p>수줍은 그 <strong class="text-red-500">face</strong></p>
                <p>용기 내 be <strong class="text-red-500">brave</strong></p>
                <p>이대로 날 놓치면 미치게 후회한다</p>
                <p>
                  Don't you know you have a super<strong class="text-red-500"
                    >power?</strong
                  >
                </p>
                <p>걱정 마 나도 너와 함께하고 <strong class="text-red-500">싶어</strong></p>
                <br />
                <p>Oh 내 맘을 읽어봐</p>
                <p>Simple하고 어렵지 않거든</p>
                <p>Oh 나의 마음을 맞춰봐</p>
                <p>이미 힌트는 뭐 충분한 것 같아</p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>하얗고 예쁜 teeth</p>
                <p>점점 더 달콤해진 my blood</p>
                <p>새들처럼 뛰는 heartbeat</p>
                <p>Bite me, bite you, <strong class="text-red-500">boom boom</strong></p>
                <br />
                <p>연애 세폰 모조리 <strong class="text-blue-500">(모조리)</strong></p>
                <p>
                  묻혀있었어 땅속 깊숙이 <strong class="text-blue-500">(깊숙이)</strong>
                </p>
                <p>Ay 하긴 사랑 그따위 <strong class="text-blue-500">(그따위)</strong></p>
                <p>피곤했어 너를 만날 때까진</p>
                <br />
                <p>어서 나를 깨물어 봐 Mr. <strong class="text-red-500">Vampire</strong></p>
                <p>하나하나 캐물어봐 Mr. <strong class="text-red-500">Vampire</strong></p>
                <p>Good, we're a match made in heaven</p>
                <p>우린 너무 <strong class="text-red-500">잘 어울려</strong> Mr. Vampire</p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>같이 춤을 출까</p>
                <p>창백한 피부가</p>
                <p>햇살에 그을리도록</p>
                <p>구릿빛 눈부시도록</p>
                <p><strong class="text-red-500">느껴봐</strong> 이 순간 이 떨림</p>
                <p>끌려 참을 수 없어 좀처럼</p>
                <p>
                  <strong class="text-red-500">Yah Yah</strong> 입 맞춰 for the first time
                </p>
                <p>
                  우린 바보처럼 사랑밖에 몰라 <strong class="text-blue-500">(함성)</strong>
                </p>
                <br />
                <p>연애 세폰 모조리 <strong class="text-blue-500">(모조리)</strong></p>
                <p>
                  묻혀있었어 땅속 깊숙이 <strong class="text-blue-500">(깊숙이)</strong>
                </p>
                <p>Ay 하긴 사랑 그따위 <strong class="text-blue-500">(그따위)</strong></p>
                <p>피곤했어 너를 만날 때까진</p>
                <br />
                <p>나를 절대 놓치지 마 Mr. <strong class="text-red-500">Vampire</strong></p>
                <p>사람들에게 물어봐 Mr. <strong class="text-red-500">Vampire</strong></p>
                <p>Good, we're a match made in heaven</p>
                <p>
                  <strong class="text-red-500">내가 제일 어울려</strong> 넌 Mr. Vampire
                  <strong class="text-blue-500">(함성)</strong>
                </p>
              </div>
            <div>`,
        },
        {
          name: "BORN TO BE",
          engName: "BORN TO BE",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/113/86/125/11386125_20240108182050_500.jpg?YUV422-90/melon/resize/260",
          lyrics: `<div class="text-center">
            <div>
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>Come on, <strong class="text-red-500">Come on,</strong> I’m on it</p>
                <p>Born to be, born to be, born to be oh</p>
                <br />
                <p><strong class="text-red-500">Brand new fire</strong></p>
                <p>이젠 내 시간이야 let me turn the tide, move</p>
                <p><strong class="text-red-500">Ice blue silver</strong></p>
                <p>
                  I’m shining like a star, I
                  <strong class="text-red-500">go boom go boom</strong>
                </p>
                <br />
                <p>
                  Sit down enjoy the show cuz it’s about to
                  <strong class="text-red-500">go down</strong>
                </p>
                <p>Transcend 한계를 넘어 now I’m running it</p>
                <p>딱 봐도 yeah I’m the realest</p>
                <p>절대 없어 I got nothing missing</p>
                <br />
                <p>모든 시선들이 나를 <strong class="text-red-500">향해</strong></p>
                <p>
                  잠든 감각들이 깨어나 I’ll <strong class="text-red-500">prove it</strong>
                </p>
                <p>Don’t need your permission</p>
                <p>Every step I take is in victory lane yeah</p>
                <br />
                <p>
                  I’m about to have this whole crowd going
                  <strong class="text-red-500">(Let’s go)</strong>
                </p>
                <p>Crazy like 한 번도 느껴본 적 없는</p>
                <p>Can you see what I’ve become now?</p>
                <p>Yeah let’s <strong class="text-red-500">turn it up now</strong></p>
                <br />
                <p>
                  Born to be, born to be,
                  <strong class="text-red-500">born to be</strong> oh oh
                </p>
                <p>
                  Born to be, born to be,
                  <strong class="text-red-500">wild and free</strong> oh oh
                </p>
                <p>
                  누가 뭐라 해도 Imma say it louder
                  <strong class="text-red-500">(Louder)</strong>
                </p>
                <p>난 내 방식대로 always hit it harder</p>
                <p>
                  <strong class="text-red-500">Born to be, born to be,</strong> wild and
                  free oh oh
                </p>
                <br />
                <p>Born to be so <strong class="text-red-500">fierce</strong></p>
                <p>한 번도 못 느낀 <strong class="text-red-500">fears</strong></p>
                <p>Sensation Imma bring yeah</p>
                <p>Get ready don’t be tense</p>
                <br />
                <p>따라오는 spotlight watch me glow</p>
                <p><strong class="text-red-500">Young and wild and free</strong></p>
                <p>더 자신 있게 이젠 nothing’s going wrong</p>
                <br />
                <p>
                  <strong class="text-blue-500">(함성)</strong> Don’t compare 다른 것들 just
                  don’t care 내 맘대로
                </p>
                <p>
                  Bounce it, bounce it, <strong class="text-red-500">turn it up</strong>
                </p>
                <p>
                  Got that winning pace I’m <strong class="text-red-500">going up</strong>
                </p>
                <br />
                <p>모든 시선들이 나를 <strong class="text-red-500">향해</strong></p>
                <p>
                  잠든 감각들이 깨어나 I’ll <strong class="text-red-500">prove it</strong>
                </p>
                <p>Can you see what I’ve become now?</p>
                <p>Yeah let’s <strong class="text-red-500">turn it up now</strong></p>
                <br />
                <p>
                  Born to be, born to be,
                  <strong class="text-red-500">born to be</strong> oh oh
                </p>
                <p>
                  Born to be, born to be,
                  <strong class="text-red-500">wild and free</strong> oh oh
                </p>
                <p>
                  누가 뭐라 해도 Imma say it louder
                  <strong class="text-red-500">(Louder)</strong>
                </p>
                <p>난 내 방식대로 always hit it harder</p>
                <p>
                  <strong class="text-red-500">Born to be, born to be,</strong> wild and
                  free oh oh
                </p>
                <br />
                <p>
                  <strong class="text-blue-500">(함성)</strong> 누가 뭐라 해도, 누가 뭐라
                  해도, 누가 뭐라 해도 Imma say it louder
                </p>
                <p>누가 뭐라 해도, 누가 뭐라 해도, 누가 뭐라 해도 always hit it harder</p>
                <p><strong class="text-blue-500">(있! 지! 믿! 지!) (함성)</strong></p>
                <p>Born to be, born to be, born to be</p>
                <br />
                <p>
                  Born to be, born to be,
                  <strong class="text-red-500">born to be</strong> oh oh
                </p>
                <p>
                  Born to be, born to be,
                  <strong class="text-red-500">wild and free</strong> oh oh
                </p>
                <p>
                  누가 뭐라 해도 Imma say it louder
                  <strong class="text-red-500">(Louder)</strong>
                </p>
                <p>난 내 방식대로 always hit it harder</p>
                <p>
                  <strong class="text-red-500"
                    >Born to be, born to be, wild and free</strong
                  >
                  oh oh
                  <strong class="text-blue-500">(함성)</strong>
                </p>
              </div>
            <div>`,
        },
        {
          name: "논마비",
          engName: "None of My Business",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/112/77/647/11277647_20230731184013_500.jpg?YUV420-90/melon/resize/260",
          lyrics: `<div class="text-center">
            <div>
                <p>It's none of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong> what you do</p>
                <p>
                  똑같은 <strong class="text-red-500">매일</strong> 반복된
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>어긋나 버린 me and <strong class="text-red-500">you</strong></p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>완전히 달라진 넌 tragic</p>
                <p>너만 보면 자꾸 현기증이 나</p>
                <p>미쳐버린 이 여름도 crazy</p>
                <p>열대야보다 더 짜증 나는 우리</p>
                <br />
                <p>가시 돋친 말<strong class="text-red-500">투</strong></p>
                <p>삐뚤어져 like <strong class="text-red-500">you</strong> yeah</p>
                <p>멈출 수 없는 우리 사이</p>
                <p>선 넘지 마 I don’t care how you feel</p>
                <br />
                <p>You, <strong class="text-red-500">you, you, you</strong></p>
                <p>쨍한 너와 나 우리 그리고 둘</p>
                <p>다가온 이별 같아</p>
                <p>어느 때보다 싫은 여름</p>
                <br />
                <p>It's none of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong> what you do</p>
                <p>
                  똑같은 <strong class="text-red-500">매일</strong> 반복된
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>어긋나 버린 me and <strong class="text-red-500">you</strong></p>
                <br />
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong> what you do</p>
                <p>
                  고장 난 <strong class="text-red-500">매일</strong> 뒤틀린
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>이미 멀어진 me and <strong class="text-red-500">you</strong></p>
                <br />
                <p>Cool 하기는커녕 찌는 이 습도 속</p>
                <p>익숙했던 손길마저 싫증 나는 기분</p>
                <p>흐르는 땀방울처럼</p>
                <p>온몸이 끈적거리고</p>
                <p>머리는 지끈거리고</p>
                <p>짜증만 날 뿐이야</p>
                <br />
                <p>경계조차 모호해진 <strong class="text-red-500">day and night</strong></p>
                <p>그럴수록 멀어지는 <strong class="text-red-500">you and I</strong></p>
                <p>고장 나 버린 둘 사이 we know it</p>
                <p>찐득한 체온을 넘어</p>
                <p>후끈한 밤공기마저</p>
                <p>모든 게 어지러워</p>
                <br />
                <p>You, <strong class="text-red-500">you, you, you</strong></p>
                <p>쨍한 너와 나 우리 그리고 둘</p>
                <p>다가온 이별 같아</p>
                <p>어느 때보다 싫은 여름</p>
                <br />
                <p>It's none of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong> what you do</p>
                <p>
                  똑같은 <strong class="text-red-500">매일</strong> 반복된
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>어긋나 버린 me and <strong class="text-red-500">you</strong></p>
                <br />
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong> what you do</p>
                <p>
                  고장 난 <strong class="text-red-500">매일</strong> 뒤틀린
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>이미 멀어진 me and <strong class="text-red-500">you</strong></p>
                <br />
                <p>Na-na-na-na-na-na na-na-na-na-na-na</p>
                <p>
                  (None of my business)
                  <strong class="text-blue-500">(논마비!)</strong>
                </p>
                <p>Nananananana nananananana</p>
                <p>Don't care what you do</p>
                <br />
                <p><strong class="text-blue-500">(함성)</strong></p>
                <p>더 이상 알 바 아님</p>
                <p>I don't care to know what you want</p>
                <p>우리 둘 사일 되돌리려 <strong class="text-red-500">애쓰지 마</strong></p>
                <p>I’m not okay 이럴수록 지칠 뿐이고 huh</p>
                <p>I don’t care 벗어나고 싶은 이 여름</p>
                <br />
                <p>며칠이 지나도 <strong class="text-red-500">똑같은데</strong></p>
                <p>알잖아 더 이상 내게 <strong class="text-red-500">뭘 더 바래</strong></p>
                <p>Baby don’t miss me, miss me</p>
                <p>You don't have to <strong class="text-red-500">miss me</strong></p>
                <p>우릴 내려 놔 이젠 허튼 다툼 대신</p>
                <br />
                <p>It's none of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong> what you do</p>
                <p>
                  똑같은 <strong class="text-red-500">매일</strong> 반복된
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>어긋나 버린 me and <strong class="text-red-500">you</strong></p>
                <br />
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong></p>
                <p>None of my <strong class="text-red-500">business</strong> what you do</p>
                <p>
                  고장 난 <strong class="text-red-500">매일</strong> 뒤틀린
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>이미 멀어진 me and <strong class="text-red-500">you</strong></p>
                <br />
                <p>Na-na-na-na-na-na na-na-na-na-na-na</p>
                <p>
                  (None of my business)
                  <strong class="text-blue-500">(논마비!)</strong>
                </p>
                <p>Nananananana nananananana</p>
                <p>Don't care what you do</p>
                <br />
                <p>None of my business</p>
                <p>None of my business</p>
                <p>
                  (None of my business)
                  <strong class="text-blue-500">(논마비!)</strong><br />
                  what you do
                </p>
                <p>
                  똑같은 <strong class="text-red-500">매일</strong> 반복된
                  <strong class="text-red-500">얘기</strong>
                </p>
                <p>어긋나 버린 me and <strong class="text-red-500">you</strong></p>
                <p><strong class="text-blue-500">(함성)</strong></p>
                <br />
                <p>
                  (None of my business)
                  <strong class="text-blue-500">(논마비!)</strong>
                </p>
                <p><strong class="text-blue-500">(함성)</strong></p>
              </div>
            <div>`,
        },
        {
          name: "Air",
          engName: "Air",
          image:
            "https://cdnimg.melon.co.kr/cm2/album/images/117/32/611/11732611_20250310111221_500.jpg?7b8f321965c7e2f00ed43f9f86ec2244/melon/resize/282/quality/80/optimize",
          lyrics: `<div class="text-center">
            <div>
              <p><strong class="text-blue-500">(함성 6초) 황! 예! 지!</strong></p>
              <p>Every last breath</p>
              <p>달콤해진 oxygen, insane</p>
              <p>호흡의 방법은 전부 잊게 돼 oh</p>
              <p><br /></p>
              <p>Gonna take a <strong class="text-red-500">chance</strong></p>
              <p>Give up all the <strong class="text-red-500">plans</strong></p>
              <p>알 수 없는 힘에 이끌려가게 돼</p>
              <p>빨라진 step 다른 건 다 잊은 채</p>
              <p>온몸을 던질래</p>
              <p><br /></p>
              <p><strong class="text-blue-500">(함성)</strong>Takin' my air</p>
              <p>거부할 수 없는 이 느낌 oh <strong class="text-red-500">baby</strong></p>
              <p>Got in my prayers</p>
              <p>내게 집중한 순간 더 <strong class="text-red-500">깊이</strong></p>
              <p>You keep takin' all of my</p>
              <p><br /></p>
              <p><strong class="text-red-500">Air</strong></p>
              <p>All my <strong class="text-red-500">air</strong></p>
              <p>묶인 시선 <strong class="text-red-500">끝에</strong></p>
              <p>You take my breath <strong class="text-red-500">away</strong></p>
              <p><br /></p>
              <p>Takin' my air</p>
              <p>피할 수 없는 이 feeling <strong class="text-blue-500">(feeling)</strong></p>
              <p>You keep takin' all of my</p>
              <p><br /></p>
              <p>Here it comes</p>
              <p>또 불어오는 second wind oh yeah</p>
              <p>Why would I stay 가볼래 let it begin</p>
              <p><br /></p>
              <p>I'm gonna take a <strong class="text-red-500">chance</strong></p>
              <p>Give up all the <strong class="text-red-500">plans</strong></p>
              <p>이 순간 너와 나 말곤 아득해 yeah</p>
              <p>끝없는 chase 이젠 멈추진 못해</p>
              <p>And here I go again</p>
              <p><br /></p>
              <p><strong class="text-blue-500">(함성)</strong>Takin' my air</p>
              <p>거부할 수 없는 이 느낌 oh <strong class="text-red-500">baby</strong></p>
              <p>Got in my prayers</p>
              <p>내게 집중한 순간 더 <strong class="text-red-500">깊이</strong></p>
              <p>You keep takin' all of my</p>
              <p><br /></p>
              <p><strong class="text-red-500">Air</strong></p>
              <p>All my <strong class="text-red-500">air</strong></p>
              <p>묶인 시선 <strong class="text-red-500">끝에</strong></p>
              <p>You take my breath <strong class="text-red-500">away</strong></p>
              <p><br /></p>
              <p>Takin' my air</p>
              <p>피할 수 없는 이 feeling<strong class="text-blue-500">(feeling)</strong></p>
              <p>You keep takin' all of my</p>
              <p><br /></p>
              <p><strong class="text-blue-500">(함성)</strong></p>
              <p>Air</p>
              <p>Ooh it feels so right</p>
              <p>Air</p>
              <p>Ooh I'm burning so bright</p>
              <p><strong class="text-blue-500">(예! 지! 에! 어!)</strong></p>
              <p><br /></p>
              <p><strong class="text-blue-500">(함성)</strong></p>
              <p>Takin' my air</p>
              <p>내게 빠져든 순간 fallin', oh <strong class="text-red-500">baby</strong></p>
              <p><br /></p>
              <p>Got in my head</p>
              <p>벗어날 수 없는 이 <strong class="text-red-500">느낌</strong></p>
              <p>You keep takin' all of my</p>
              <p><br /></p>
              <p><strong class="text-red-500">Air</strong></p>
              <p>All my <strong class="text-red-500">air</strong></p>
              <p>묶인 시선 <strong class="text-red-500">끝에</strong></p>
              <p>You take my breath <strong class="text-red-500">away</strong></p>
              <p><br /></p>
              <p>Takin' my <strong class="text-red-500">air</strong></p>
              <p>All my <strong class="text-red-500">air</strong></p>
              <p>멈출 수가 <strong class="text-red-500">없게</strong></p>
              <p>나를 숨 멎게 해</p>
              <p>Takin' my, takin' my</p>
              <p><br /></p>
              <p><strong class="text-blue-500">빠져들어 황예지</strong></p>
              <p><strong class="text-blue-500">시선 끝에 황예지</strong></p>
              <p><strong class="text-blue-500">숨 멎게 해 황예지</strong></p>
              <p><br /></p>
              <p>You keep takin' all of my <strong class="text-blue-500">(함성)</strong></p>
            </div>`,
        },
      ],

      selected: null,
    };
  },
  computed: {
    selectedSong() {
      return this.songs.find((song) => song.engName === this.selected);
    },
  },
  methods: {
    select(songName) {
      if (this.selected === songName) {
        this.selected = null;
      } else {
        this.selected = songName;
      }
    },
  },
};
</script>
