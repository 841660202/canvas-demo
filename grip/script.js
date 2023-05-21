const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const pipe = {
  x: 100,
  y: 150,
  width: 600,
  height: 20,
};

const flow = {
  x: pipe.x,
  y: pipe.y,
  width: 0,
  height: pipe.height,
  speed: 2,
};

function drawPipe() {
  ctx.beginPath();
  ctx.roundRect(pipe.x, pipe.y, pipe.width, pipe.height, 10);
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = 'skyblue';
  ctx.fill();
  ctx.lineCap = 'round';
  ctx.stroke();
}

function drawFlow() {
  ctx.beginPath();
  ctx.roundRect(flow.x, flow.y, flow.width, flow.height, 10);
  ctx.fillStyle = 'blue';
  ctx.fill();
}

function updateFlow() {
  flow.width += flow.speed;
  if (flow.width > pipe.width) {
    flow.width = 0;
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPipe();
  updateFlow();
  drawFlow();
  requestAnimationFrame(animate);
}

animate();
