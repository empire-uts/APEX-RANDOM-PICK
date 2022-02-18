let buttonchange = charapicker.value.innerHTML = "retry!"
let userresult = greeting.charactername[Math.floor( Math.random() * 20)];


const charactername = ["レイス","パスファインダー","ジブラルタル","ライフライン","バンガロール",
"オクタン","ワットソン","コースティック","クリプト","ブラッドハウンド","ミラージュ","レブナント",
"ローバ","ホライゾン","ヴァルキリー","ランパート","シア","アッシュ","ヒューズ","マッドマギー"]


let rand = Math.floor( Math.random() * 20);




const button = document.querySelector('input');
button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'start!') {
    button.value = 'retry';
    document.getElementById(charapicker) = userresult;
  } else {
    document.getElementById(charapicker) = userresult;
  }
}