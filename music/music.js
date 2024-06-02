function enterSearch(){
    if(event.keyCode == 13){
        myFunction();
    }

    function myFunction(){
        let x = document.getElementById("text").value;
        window.location.href = `https://search.melon.com/search/searchMcom.htm?s=${x}&kkoSpl=Y&kkoDpType=&mwkLogType=T`;
    }
}

window.onload = function() {
    var width = window.innerWidth;
    if (!sessionStorage.getItem('isExecuted')) {
      if (width > 700) {
        // 디스플레이 크기가 700px를 초과하면 파일2.html을 실행
        window.location.href = "music_pc.html";
        sessionStorage.setItem('isExecuted', 'true');
      } else {
        // 디스플레이 크기가 700px 이하이면 파일1.html을 실행
        window.location.href = "music.html";
        sessionStorage.setItem('isExecuted', 'true');
      }
    }
  };