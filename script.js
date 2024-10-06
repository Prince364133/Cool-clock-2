// forked from chabudai's "ホネホネ・クロック JS - forked from: Human Clock" https://jsdo.it/chabudai/4K7S
/**
 *  FireFoxのみちゃんとしたスピードで表示されます。
 *  
 *  Flash版はこちら
 *  http://wonderfl.net/c/3gx1
 */

window.onload = function () {
  var updateView = (function() {
    var sec;
    return function () {
      var now = new Date();
    if (now.getSeconds() == sec) return;
    
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();
    
    //１つずつにする
    var hour1;
    if(hour < 10){
      hour1 = 0;
    }else{
      hour1 = Math.floor(hour / 10);
    }
    var hour2 = hour%10;
    
    var minute1;
    if(minute < 10){
      minute1 = 0;
    }else{
      minute1 = Math.floor(minute / 10);
    }
    var minute2 = minute%10;
    
    var second1;
    if(second < 10){
      second1 = 0;
    }else{
      second1 = Math.floor(second / 10);
    }
    var second2 = second%10;
    
      _updateView(hour1, hour2, minute1, minute2, second1, second2);
    }
  })();
 
setInterval(updateView, 500);

function _updateView(h1, h2, m1, m2, s1, s2) {
//alert(h1+""+h2+":"+m1+""+m2+":"+s1+""+s2);
var _url = "http://www.chabudai.org/temp/wonderfl/honehone/img/";
     $('#hour1').css("background-image", "url("+_url+"h" + h1 + ".gif)");
     $('#hour2').css("background-image", "url("+_url+"hh" + h2 + ".gif)");
     $('#minute1').css("background-image", "url("+_url+"m" + m1 + ".gif)");
  $('#minute2').css("background-image", "url("+_url+"mm" + m2 + ".gif)");
     $('#second1').css("background-image", "url("+_url+"s" + s1 + ".gif)");
  $('#second2').css("background-image", "url("+_url+"ss" + s2 + ".gif)");
  }
}