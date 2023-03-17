const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
const width = canvas.width = 1000;
const height = canvas.height = 1000;
const dwarfButton = document.getElementById("dwarfSelect");
const magicianButton = document.getElementById('magicianSelect');
const elfButton = document.getElementById('elfSelect');
const charDesc = document.getElementById('Desc');
const startButton = document.getElementById('start');
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
      startScreen.src = 'game-sprites/startScreen.png';
      startScreen.onload = () => {
        canvas.width = startScreen.width;
        canvas.height = startScreen.height
        ctx.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
      }
      

      startButton.addEventListener('click', () => {
        sceneLoader('character');
        dwarfButton.hidden = false;
        magicianButton.hidden = false;
        elfButton.hidden = false;
        startButton.hidden = true;
      });
    

      
  }

  
    function charScene(){


      ctx.clearRect(0,0, canvas.width, canvas.height);
    
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      ctx.fillStyle = 'black'; 
      ctx.font = '24px Arial';
      ctx.fillText('Choose your adventurer!', 120,100);
    
      const dwarfChar = new Image();
      dwarfChar.src = ('./game-sprites/dwarf-model.png');
      dwarfChar.onload = () => {
        ctx.drawImage(dwarfChar, 80, 150, canvas.width/4,canvas.height/4);
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Dwarf', 110, 300);
      
      };
      dwarfButton.addEventListener('mouseover', () => {
        charDesc.hidden = false;
        charDesc.textContent = "A mighty dwarf equipped with a devastating warhammer";
      })

    
      const elfChar = new Image();
      elfChar.src = ('./game-sprites/elf-model.png');
      elfChar.onload = () => {
        ctx.drawImage(elfChar, 300, 150, canvas.width/4,canvas.height/4);
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Elf', 350, 300);
      };

      elfButton.addEventListener('mouseover', () => {
        charDesc.hidden = false;
        charDesc.textContent = "A noble elf with great bow skills";
      })
    
      const magicChar = new Image();
      magicChar.src = ('./game-sprites/wizard-model.png');
      magicChar.onload = () => {
        ctx.drawImage(magicChar, 180, 150, canvas.width/4,canvas.height/4);
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Magician', 210, 300);
      };

      magicianButton.addEventListener('mouseover', () => {
        charDesc.hidden = false;
        charDesc.textContent = "A magician with ancient powers and a powerful wand";
      })
  
    }
    

sceneLoader('start');