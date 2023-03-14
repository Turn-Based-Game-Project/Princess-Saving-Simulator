// const move_1 = document.querySelector('#mash');
// const enemy_move_1 = document.querySelector('#em1')

// move_1.addEventListener("click", function() {
//     getInput(move_1.innerText);
//   });

// enemy_move_1.addEventListener("click", function() {
//     getInput(enemy_move_1.innerText);
//   });


// function getInput(value) {
//     console.log("Clicked button with value: " + value.toLowerCase());
// }


const img = new Image();

// Set the source of the image

img.src = '../sprites/RK6Tqo.png';

// Wait for the image to load
img.onload = function() {
  // Get the Canvas element
  const canvas = document.getElementById('canvas');
  canvas.width = window.clientWidth;
  canvas.height = window.clientHeight;

  // Get the CanvasRenderingContext2D object
  const ctx = canvas.getContext('2d');

  // Draw the image onto the Canvas
  ctx.drawImage(img, 0, 0, 400, 200);
}




