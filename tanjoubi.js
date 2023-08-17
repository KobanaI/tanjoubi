const Button = document.getElementById('assessment');

Button.onclick = function(){
  const randomColor = generateRandomColor(); // ランダムな色を生成
  document.body.style.backgroundColor = randomColor; // ランダムな色を背景色に適用
};

// ランダムな色を生成する関数（既存の関数を再利用）
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let headingH2 = document.getElementById('headingH2');
let degreeH = 0;
function rotateH2(){
  degreeH += 5;
  headingH2.style.transform = 'rotateY(' + degreeH + 'deg)';
}
setInterval(rotateH2, 30);



// 変更後の script.js
let headings = document.querySelectorAll('h1'); // 全ての h1 要素を取得

function rotateMoji() {
  headings.forEach((heading) => {
    const randomDegree = Math.floor(Math.random() * 360); // 0〜359 のランダムな角度
    const randomColor = generateRandomColor(); // ランダムな色を生成
    heading.style.transform = `rotate(${randomDegree}deg)`; // ランダムな角度を適用
    heading.style.color = randomColor; // ランダムな色を適用
  });
}

setInterval(rotateMoji, 60);

// ランダムな色を生成する関数
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}





const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const imageBoukenka = new Image();
imageBoukenka.src = 'megamoji.gif'
let rotationAngle = 0; // 初期回転角度

function drawRotatingImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2); // 画像の中心をキャンバスの中心に設定
  ctx.rotate(rotationAngle * (Math.PI / 180)); // 角度をラジアンに変換して回転

  ctx.drawImage(imageBoukenka, -imageBoukenka.width / 2, -imageBoukenka.height / 2); // 画像の中心を合わせて描画

  ctx.restore();

  rotationAngle += 2; // 角度を増やす（1度ずつ回転）
  requestAnimationFrame(drawRotatingImage); // アニメーションループを再帰的に呼び出す
}

imageBoukenka.onload = () => {
  drawRotatingImage(); // 画像が読み込まれたらアニメーションを開始
};
