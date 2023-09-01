let ctx = document.getElementById("canv").getContext("2d");

function update(){
  ctx.fillStyle = "rgb(67, 67, 67)"
  ctx.fillRect(0, 0, 500, 500);
  
  requestAnimationFrame(update);
}

update()
