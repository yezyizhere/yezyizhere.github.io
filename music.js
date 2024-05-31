function enterSearch(){
    if(event.keyCode == 13){
        myFunction();
    }

    function myFunction(){
        let x = document.getElementById("text").value;
        window.location.href = "https://search.melon.com/search/searchMcom.htm?s=" + x + "&kkoSpl=Y&kkoDpType=&mwkLogType=T";
    }
}