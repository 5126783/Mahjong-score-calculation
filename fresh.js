function calculateScore(isDealer) {
  const han = parseInt(document.getElementById('han').value);
  const fu = parseInt(document.getElementById('fu').value);
  const honba = parseInt(document.getElementById('honba').value);

  if (isNaN(han) || isNaN(fu) || isNaN(honba) || han <= 0 || fu < 20) {
    document.getElementById('result').innerText = '正しい翻数、符数、および一本場の数を入力してください。';
    return;
  }

  let basePoints;

  if (han >= 13) {
    basePoints = 8000; // 数え役満
  } else if (han >= 11) {
    basePoints = 6000; // 三倍満
  } else if (han >= 8) {
    basePoints = 4000; // 倍満
  } else if (han >= 6) {
    basePoints = 3000; // 跳満
  } else if (han >= 5) {
    basePoints = 2000; // 満貫
  } else {
    basePoints = fu * Math.pow(2, 2 + han);
    if (basePoints > 2000) basePoints = 2000; // 満貫の上限
  }

  const honbaPoints = honba * 300; // 一本場ごとに300点

  let points;
  if (isDealer) {
    points = (basePoints * 6) + honbaPoints;
  } else {
    points = (basePoints * 4) + honbaPoints;
  }

  const resultText = isDealer 
    ? `親の点数: ${points} 点 (含む一本場: ${honba}本)`
    : `子の点数: ${points} 点 (含む一本場: ${honba}本)`;

  document.getElementById('result').innerText = resultText;
}