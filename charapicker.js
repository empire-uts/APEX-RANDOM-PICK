const charactername = ["レイス","パスファインダー","ジブラルタル","ライフライン","バンガロール",
"オクタン","ワットソン","コースティック","クリプト","ブラッドハウンド","ミラージュ","レブナント",
"ローバ","ホライゾン","ヴァルキリー","ランパート","シア","アッシュ","ヒューズ","マッドマギー"]

function userresult(){
  document.getElementById("chara-pick-button").innerHTML = charactername[Math.floor( Math.random() * 20)];
  document.getElementById("charapicker").value = "retry!";
}


