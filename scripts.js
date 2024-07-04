document.addEventListener('DOMContentLoaded', function() {
  var thankYouButton = document.getElementById('thankYouButton'); //要素を取得
  var thankYouMessage = document.getElementById('thankYouMessage');

  thankYouButton.addEventListener('click', function() { //クリックされたとき
      thankYouMessage.style.display = 'block'; //メッセージを表示
      thankYouButton.remove(); //ボタンを削除
  });
});
