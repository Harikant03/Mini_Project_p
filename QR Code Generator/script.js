const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value; // fixed

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener('change', (e) => {
  size = e.target.value; // fixed
  isEmptyInput();
});

downloadBtn.addEventListener('click', (e) => {
  const img = document.querySelector('.qr-body img'); //  fixed
  if (img !== null) {
    const imgAttr = img.getAttribute('src');
    downloadBtn.setAttribute('href', imgAttr);
  } else {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      downloadBtn.setAttribute('href', canvas.toDataURL());
    }
  }
});

function isEmptyInput() {
  //  fixed .value
  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value, //  fixed
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000"
  });
}
