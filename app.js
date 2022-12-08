const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const color = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const body = document.querySelector("body");
const fillBtn = document.getElementById("fill-btn");
const brushBtn = document.getElementById("brush-btn");
const squareBtn = document.getElementById("square-btn");
const lineBtn = document.getElementById("line-btn");
const textBtn = document.getElementById("Text-btn");
const ResetBtn = document.getElementById("Reset-btn");
const resizeBtn = document.getElementById("resize-btn");
const EraseBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const SaveBtn = document.getElementById("save");
canvas.width = 1000;
canvas.height = 700;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let CANVAS_WIDTH = 1000;
let CANVAS_HEIGHT = 700;

let isPainting = false;
let isFilling = false;
let rect = false;
let recting = false;

let startX = 0;
let startY = 0;

//paint
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}
function onbrushbtnClick() {
  canvas.addEventListener("mousemove", onMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", cancelPainting);
  canvas.addEventListener("mouseleave", cancelPainting);
  canvas.removeEventListener("click", startFilling);
  canvas.removeEventListener("mousedown", startRecting);
  canvas.removeEventListener("mouseup", stopRecting);
}
//Linewidth
function onLinewidthChange(event) {
  ctx.lineWidth = event.target.value;
}
//ColoChange
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
//Fill
function startFilling() {
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onFillbtnClick() {
  canvas.removeEventListener("mousemove", onMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", cancelPainting);
  canvas.removeEventListener("mouseleave", cancelPainting);
  canvas.addEventListener("click", startFilling);
}
//Square
function startRecting(event) {
  startX = event.offsetX;
  startY = event.offsetY;
  canvas.style.cursor = "crosshair";
  ctx.beginPath();
}

function stopRecting(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.dir(event);
  const width = x - startX;
  const height = y - startY;
  ctx.moveTo(x, y);
  makerec = ctx.rect(startX, startY, width, height);
  ctx.stroke();
  ctx.closePath();
}
//Resize
// function handleResizeClick() {
//   makerec.addEventListener("mousedown", startResizing);
//   canvas.addEventListener("mouseup", stopResizing);
// }
// function startResizing(event) {
//   makerec = ctx.rect(
//     startX,
//     startY,
//     event.offsetX - startX,
//     event.offsetY - startY
//   );
// }
function handleRectClick() {
  canvas.addEventListener("mousedown", startRecting);
  canvas.addEventListener("mouseup", stopRecting);
  // canvas.addEventListener("mouseleave", stopRecting);
  canvas.removeEventListener("mousemove", onMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", cancelPainting);
  canvas.removeEventListener("mouseleave", cancelPainting);
  canvas.removeEventListener("click", startFilling);
  canvas.removeEventListener("mousedown", drawingLine);
  canvas.removeEventListener("mouseup", StopingLine);
}
//Line
function drawingLine(event) {
  startX = event.offsetX;
  startY = event.offsetY;
  canvas.style.cursor = "crosshair";
  ctx.beginPath();
}

function StopingLine(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.moveTo(x, y);
  ctx.arcTo(startX, startY, x, y, 360);
  ctx.stroke();
  ctx.closePath();
}
function handleLineClick() {
  canvas.addEventListener("mousedown", drawingLine);
  canvas.addEventListener("mouseup", StopingLine);
  canvas.removeEventListener("mousedown", startRecting);
  canvas.removeEventListener("mouseup", stopRecting);
  canvas.removeEventListener("mousemove", onMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", cancelPainting);
  canvas.removeEventListener("mouseleave", cancelPainting);
  canvas.removeEventListener("click", startFilling);
}
//Reset
function onResetClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
//Erase
function onEraserClick() {
  canvas.addEventListener("mousemove", onMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", cancelPainting);
  canvas.addEventListener("mouseleave", cancelPainting);
  canvas.removeEventListener("click", startFilling);
  canvas.removeEventListener("mousedown", startRecting);
  canvas.removeEventListener("mouseup", stopRecting);
  ctx.strokeStyle = "white";
}
//AddFile
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}
//AddText
function onDoubleClick(event) {
  console.dir(canvas);
  body.appendChild(createForm);
  createForm.style.position = "absolute";
  createForm.style.left = `${event.pageX}px`;
  createForm.style.top = `${event.pageY}px`;
  createForm.addEventListener("submit", createText);
}
function createText(event) {
  event.preventDefault();
  const value = createInput.value;
  ctx.fillText(
    value,
    // 224,
    // 693
    Number(createForm.style.left.replace("px", "")) - Number(canvas.offsetLeft),
    Number(createForm.style.top.replace("px", "")) - Number(canvas.offsetTop)
  );
  body.removeChild(createForm);
}
function handleTextClick(event) {
  createForm = document.createElement("form");
  createInput = document.createElement("input");
  createForm.appendChild(createInput);
  canvas.addEventListener("dblclick", onDoubleClick);
  createInput.setAttribute("type", "text");
  text = createInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "64px monstreat";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

//Save
function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}
//Event
lineWidth.addEventListener("change", onLinewidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

fillBtn.addEventListener("click", onFillbtnClick);
brushBtn.addEventListener("click", onbrushbtnClick);
ResetBtn.addEventListener("click", onResetClick);
EraseBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
SaveBtn.addEventListener("click", onSaveClick);
squareBtn.addEventListener("click", handleRectClick);
lineBtn.addEventListener("click", handleLineClick);
textBtn.addEventListener("click", handleTextClick);
// resizeBtn.addEventListener("click", handleResizeClick);
