const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
const width = canvas.width = 320;
const height = canvas.height = 480;
const dwarfButton = document.getElementById("dwarfSelect");
const magicianButton = document.getElementById('magicianSelect');
const elfButton = document.getElementById('elfSelect');
const charDesc = document.getElementById('Desc');

var currentScene;




ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);


const sceneLoader = (currentScene) => {
  if (currentScene === 'start'){
    startScene();
  } else if(currentScene === 'character') {
    charScene();
  } else{
    gameScene();
  }
}

  const startScene = () => {
    charDesc.hidden = true;
    dwarfButton.hidden = true;
    magicianButton.hidden = true;
    elfButton.hidden = true;
    const startScreen = new Image();
      startScreen.src = '/sprites/startScreen.png';
      startScreen.onload = () => {
        canvas.width = startScreen.width;
        canvas.height = startScreen.height
        ctx.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
      }
      

      canvas.addEventListener('click', handleClick);
    
      function handleClick(event) {
        
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (x > 200 && x < 300 && y > 200 && y < 300) {
           sceneLoader('character');
           dwarfButton.hidden = false;
           magicianButton.hidden = false;
           elfButton.hidden = false;
           canvas.removeEventListener('click', handleClick, false);
        }
      }

      
  }

  
    function charScene(){


      ctx.clearRect(0,0, canvas.width, canvas.height);
    
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      ctx.fillStyle = 'black'; 
      ctx.font = '24px Arial';
      ctx.fillText('Choose your adventurer!', 50,100);
    
      const dwarfChar = new Image();
      dwarfChar.src = ('./game-sprites/dwarf-model.png');
      dwarfChar.onload = () => {
        ctx.drawImage(dwarfChar, 50, 150, canvas.width/4,canvas.height/4);
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Dwarf', 50, 300);
      
      };
      dwarfButton.addEventListener('mouseover', () => {
        charDesc.hidden = false;
        charDesc.textContent = "A mighty dwarf equipped with a devastating warhammer";
      })

    
      const elfChar = new Image();
      elfChar.src = ('./game-sprites/elf-model.png');
      elfChar.onload = () => {
        ctx.drawImage(elfChar, 230, 150, canvas.width/4,canvas.height/4);
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Elf', 280, 300);
      };

      elfButton.addEventListener('mouseover', () => {
        charDesc.hidden = false;
        charDesc.textContent = "A noble elf with great bow skills";
      })
    
      const magicChar = new Image();
      magicChar.src = ('./game-sprites/wizard-model.png');
      magicChar.onload = () => {
        ctx.drawImage(magicChar, 130, 150, canvas.width/4,canvas.height/4);
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Magician', 150, 300);
      };

      magicianButton.addEventListener('mouseover', () => {
        charDesc.hidden = false;
        charDesc.textContent = "A magician with ancient powers and a powerful wand";
      })

      magicianButton.addEventListener('click', () => {
        gameScene()
      })
  
    }
    

sceneLoader('start');


function gameScene(){
  const background = new Image();
  background.src = './game-sprites/background.png'
  background.onload = () => {
    canvas.width = 700;
    canvas.height = background.height
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  }



}


// function loadNextScene(){


//   ctx.clearRect(0,0, canvas.width, canvas.height);

//   ctx.fillStyle = 'lightblue';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = 'black'; 
//   ctx.font = '24px Arial';
//   ctx.fillText('Choose your adventurer!', 50,100);

//   const dwarfChar = new Image();
//   dwarfChar.src = ('./game-sprites/dwarf-model.png');
//   dwarfChar.onload = () => {
//     ctx.drawImage(dwarfChar, 50, 150, canvas.width/4,canvas.height/4);
  
//   };

//   const elfChar = new Image();
//   elfChar.src = ('./game-sprites/elf-model.png');
//   elfChar.onload = () => {
//     ctx.drawImage(elfChar, 275, 150, canvas.width/4,canvas.height/4);
//   };

//   const magicChar = new Image();
//   magicChar.src = ('./game-sprites/wizard-model.png');
//   magicChar.onload = () => {
//     ctx.drawImage(magicChar, 150, 150, canvas.width/4,canvas.height/4);
//   };



//   dwarfChar.addEventListener('click', () => {
//     console.log('hello')

//   })
// }



// function loadNextScene(characterImageSrc){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);



//   if (currentScene === 'start'){
//     const startScreen = new Image();
//     startScreen.src = './game-sprites/startScreen.png';
//     startScreen.onload = () => {
//   canvas.width = startScreen.width;
//   canvas.height = startScreen.height
//   ctx.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
// }
// canvas.addEventListener('click', handleClick);

// function handleClick(event) {
//   const rect = canvas.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;
//   if (x > 200 && x < 300 && y > 200 && y < 300) {
//     loadNextScene();
//   }
// }
//   }

//   const background = new Image();
//   background.src = ('./game-sprites/background.png')
//   background.onload = () => {
//     ctx.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
//   }

//   const userCharacter = new Image();
//   userCharacter.src = characterImageSrc;
//   userCharacter.onload = () => {
//     const characterWidth = canvas.width/4;
//     const characterHeight = userCharacter.height * (characterWidth / userCharacter.width);
//     const characterX = canvas.width / 8;
//     const characterY = canvas.height - characterHeight - 20;
//     ctx.drawImage(userCharacter, characterX, characterY, characterWidth, characterHeight)
//   }

// }
// ctx.fillStyle = 'white';
// ctx.font = '48px Arial';
// ctx.textAlign = 'center';
// ctx.fillText('Press enter to start', canvas.width/2, canvas.height/2+100);




// const dwarfSprite = new Image();
// dwarfSprite.src = "./game-sprites/dwarf-model.png";
// dwarfSprite.onload = drawUser

// const enemySprite = new Image();
// enemySprite.src = "./game-sprites/enemy1.png";


// function drawUser() {
//     // Use the intrinsic size of image in CSS pixels for the canvas element
//     canvas.width = this.naturalWidth;
//     canvas.height = this.naturalHeight;
  
//     // Will draw the image as 300x227, ignoring the custom size of 60x45
//     // given in the constructor
//     // ctx.drawImage(this, 0, 0);
  
//     // To use the custom size we'll have to specify the scale parameters
//     // using the element's width and height properties - lets draw one
//     // on top in the corner:
//     ctx.drawImage(this, 0, 100, 50, 75);
//   };

//   enemySprite.addEventListener("load", (e) => {
//     ctx.drawImage(enemySprite, 170, 85, 100, 100,)
//   })

// class HealthBar {
//   constructor(x,y,w,h, maxHealth,color) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.maxHealth = maxHealth;
//     this.maxWidth = w;
//     this.health = maxHealth;
//     this.color = color;
//   }

//   show(ctx) {
//     ctx.lineWith = 5;
//     ctx.strokeStyle = "#333";
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.w, this.h);
//     ctx.strokeRect(this.x, this.y, this.maxWidth, this.h);
//   }
// };

// let health = 100
// const hpBarWidth = 200;
// const hpBar = new HealthBar(20,20,50,10,100,"green");

// const frame = function(){
//   // ctx.clearRect(0,0,width,height);
//   hpBar.show(ctx)
//   requestAnimationFrame(frame);
// }

// frame();


