function drawImage() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const referenceImage = document.getElementById("reference-image");
  context.drawImage(referenceImage, 0, 0);
}

window.onload = drawImage();
