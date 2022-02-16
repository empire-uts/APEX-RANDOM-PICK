let name;
let username;
let userresult;




let rand = Math.floor( Math.random() * 18);
if (rand == 0) {
  userresult = "レイス";
}
if (rand == 1) {
  userresult = "パスファインダー";
}
if (rand == 2) {
  userresult = "ジブラルタル";
}
if (rand == 3) {
  userresult = "ライフライン";
}
if (rand == 4) {
  userresult = "バンガロール";
}
if (rand == 5) {
    userresult = "オクタン";
}
if (rand == 6) {
    userresult = "ワットソン";
}
if (rand == 7) {
    userresult = "コースティック";
}
if (rand == 8) {
    userresult = "クリプト";
}
if (rand == 9) {
    userresult = "ブラッドハウンド";
  }

if (rand == 10) {
    userresult = "ミラージュ";
  }
if (rand == 11) {
      userresult = "レブナント";
  }
if (rand == 12) {
      userresult = "ローバ";
  }
if (rand == 13) {
      userresult = "ホライゾン";
  }
if (rand == 14) {
      userresult = "ヴァルキリー";
  }
if (rand == 15) {
      userresult = "ランパート";
  }
if (rand == 16) {
        userresult = "シア";
      }
if (rand == 17) {
          userresult = "アッシュ";
      }
if (rand == 18) {
          userresult = "ヒューズ";
      }
if (rand == 19) {
        userresult = "マッドマギー";
    }
document.getElementById("result").innerHTML = userresult;