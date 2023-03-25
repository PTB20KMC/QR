// HTML上のQRコードを読み込むためのimg要素を取得する
var qrCodeImg = document.getElementById('qrCodeImg');

// ZXingのライブラリを使用してQRコードを読み込む
// ライブラリは、事前に読み込んでおく必要があるため、以下は読み込みを行う例
// <script src="https://unpkg.com/@zxing/library@0.17.0"></script>
var codeReader = new ZXing.BrowserQRCodeReader();
codeReader.decodeFromImage(qrCodeImg.src).then(function(result) {
  // QRコードから読み取った情報を処理する
  console.log(result.text);
}).catch(function(error) {
  // エラー処理を行う
  console.error(error);
});
