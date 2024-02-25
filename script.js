const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generatBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");

generatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generatQRCode();
});

function generatQRCode() {
  new QRCode();
}
