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

const attack_1 = document.querySelector('#attack-1')
      console.log(attack_1)

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
      dwarfChar.src = ('/sprites/dwarf-model.png');
      dwarfChar.onload = () => {
        ctx.drawImage(dwarfChar, 80, 150, canvas.width/4,canvas.height/4);
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Dwarf', 110, 300);
      
      };


      
      // dwarfButton.addEventListener('mouseover', () => {
      //   charDesc.hidden = false;
      //   charDesc.textContent = "A mighty dwarf equipped with a devastating warhammer";
      // })

      const attack_1 = document.querySelector('#attack-1')
      console.log(attack_1)
      dwarfButton.addEventListener('click', () => {
        console.log(attack_1)
      })

    
      const elfChar = new Image();
      elfChar.src = ('/sprites/elf-model.png');
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
      magicChar.src = ('/sprites/wizard-model.png');
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
    


// Event Listeners for Character Presets

dwarfButton.addEventListener("click", function () {
  const hp = document.getElementById("user-hp");
  const max_hp = document.getElementById("user-max-hp");
  const move_1 = document.getElementById("attack-1");
  const move_2 = document.getElementById("attack-2");
  const move_3 = document.getElementById("attack-3");
  const move_4 = document.getElementById("attack-4");

  hp.innerHTML="{{ classes.[0].hp} }";
  max_hp.innerHTML="{{ classes.[0].max_hp }}";
  move_1.innerHTML="{{ classes.[0].move_1 }}";
  move_2.innerHTML="{{ classes.[0].move_2 }}";
  move_3.innerHTML="{{ classes.[0].move_3 }}";
  move_4.innerHTML="{{ classes.[0].move_4 }}";
});

elfButton.addEventListener("click", function () {
  const hp = document.getElementById("user-hp");
  const max_hp = document.getElementById("user-max-hp");
  const move_1 = document.getElementById("attack-1");
  const move_2 = document.getElementById("attack-2");
  const move_3 = document.getElementById("attack-3");
  const move_4 = document.getElementById("attack-4");

  hp.innerHTML="{{ classes.[1].hp} }";
  max_hp.innerHTML="{{ classes.[1].max_hp }}";
  move_1.innerHTML="{{ classes.[1].move_1 }}";
  move_2.innerHTML="{{ classes.[1].move_2 }}";
  move_3.innerHTML="{{ classes.[1].move_3 }}";
  move_4.innerHTML="{{ classes.[1].move_4 }}";
});

magicianButton.addEventListener("click", function () {
  const hp = document.getElementById("user-hp");
  const max_hp = document.getElementById("user-max-hp");
  const move_1 = document.getElementById("attack-1");
  const move_2 = document.getElementById("attack-2");
  const move_3 = document.getElementById("attack-3");
  const move_4 = document.getElementById("attack-4");

  hp.innerHTML="{{ classes.[2].hp} }";
  max_hp.innerHTML="{{ classes.[2].max_hp }}";
  move_1.innerHTML="{{ classes.[2].move_1 }}";
  move_2.innerHTML="{{ classes.[2].move_2 }}";
  move_3.innerHTML="{{ classes.[2].move_3 }}";
  move_4.innerHTML="{{ classes.[2].move_4 }}";
});



sceneLoader('start');