const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
// const colors = [
//   "#9e0142",
//   "#d53e4f",
//   "#d53e4f",
//   "#fdae61",
//   "#fee08b",
//   "#e6f598",
//   "#abdda4",
//   "#66c2a5",
//   "#3288bd",
//   "#5e4fa2",
// ];

let isPainting = false;
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
