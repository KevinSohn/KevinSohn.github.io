var board = document.querySelector("#board");
var ctx = board.getContext("2d");
ctx.fillStyle = "purple";
for (var i = 0; i < 5; i++) {
    ctx.arc(100 + i * 100, 100, 10, 0, Math.PI * 2);
}
ctx.fill();
ctx.beginPath();
for (var i = 0; i < 3; i++) {
    ctx.rect(100 + i * 100, 300, 50, 50);
}
ctx.fill();
