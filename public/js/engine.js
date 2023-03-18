import { mash, charge, stone_armor, block, fire_arrow, stab, attack_elixir, dodge, fireball, wand_smack, heal, invisibilty, chop, bite, rage, leer, scratch, cry, kick, scourge, lifesiphon, ultima, divine_intervention } from '/js/attack_variables.js';
import { healCalc, stoneArmorCalc, lifesiphonCalc, stabCalc} from '/js/buff.js';
import { calculateHP, damageRoll, critCalc, critChance, specialCheck, buffCheck } from '/js/checks.js';


const color = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

 

class User {
    constructor(id, hp, maxhp, attack, defense, move_1, move_2, move_3, move_4){
        this.id = id;
        this.hp = hp;
        this.maxhp = maxhp;
        this.attack = attack;
        this.defense = defense;
        this.move_1 = move_1;
        this.move_2 = move_2;
        this.move_3 = move_3;
        this.move_4 = move_4;
    }
}

const human = new User('Mariop', 100, 100, 20, 5, mash, charge, heal, block)
const enemy = new User('Dorgon', 150, 150, 12, 8, scourge, lifesiphon, ultima, divine_intervention)


User.prototype.isAlive = function () {
    if (this.hp > 0) {
      return true;
    }
    return false;
};


//---------------------Attack Function-------------------------------------------------------------------//
User.prototype.userAttack = function (character2, move) {
    //--------------------Visual Aid---------------------//
    // if(this.id === 'Mariop'){
    //     character2.id = `${color.red}${character2.id}${color.reset}`
    //     this.id = `${color.green}${this.id}${color.reset}`
    // } if (this.id === 'Dorgon'){
    //     character2.id = `${color.green}${character2.id}${color.reset}`
    //     this.id = `${color.red}${this.id}${color.reset}`
    // }
    //---------------Value Variables---------------------//
    let finalDamage;
    let newHP;
    //---------------------------------------------------//


    //--------------------Buff Check-----------------------//
    if (move.type === 'buff'){
    buffCheck(this, move, character2)
    return true
    };

    //---------------Base Damage Calculation----------------//
    let moveDamage = damageRoll(move)
    let damage = (this.attack + moveDamage) - character2.defense;

    //----------------Damage Checks----------------------//
    if (damage <= 0) {
        finalDamage = 0;
        newHP = calculateHP(character2, finalDamage)
        dialogue.textContent = `${this.id} used ${move.name} and had no effect!`
        dialogue.textContent +=`\n ${character2.id} \nHP:${newHP}/${character2.maxhp}`
        return true;
    }   // Should activate on attacks with 0 damage after roll.

     //---------------------Special Move Check-------------//
    if (move.type === 'special'){
        specialCheck(this, character2, move, damage)
        return true
    }

     //-----------------Crit Check-------------------------//
    let crit = critChance(move);

    if (crit > 0.75){
        finalDamage = critCalc(damage);
        
        newHP = calculateHP(character2, finalDamage)
    
        dialogue.textContent =`Critical Hit! ${this.id} used ${move.name} and inflicted an increased ${finalDamage} damage!\n`
        dialogue.textContent +=`${character2.id} HP:${newHP}/${character2.maxhp}`
      
        return true
    }   
    // If damage is > 0, then the crit function will roll to see if damage is multiplied by 1.2x.
   
 
    finalDamage = damage

    newHP = calculateHP(character2, finalDamage)

    dialogue.innerText = `${this.id} used ${move.name} and inflicted ${finalDamage} damage!`
    dialogue.innerText +=`\n${character2.id} HP:${newHP}/${character2.maxhp}`

    return true

};

// const roll = 2
// function stabTimes(user, character2, move){ for (let i = 0; i < roll; i++){
// stabCalc(user, character2, move)
// };
// console.log(`${character2.hp}/${character2.maxhp}`)
// };

// stabTimes(human, enemy, stab);
//------------------------------------------Turn Based Logic-------------------------------------//
let enemyAttack
let playerAttack
let choice

function enemyAtk(){
    choice = Math.floor(Math.random() * 4) 
    enemyAttack = [scourge, fireball, ultima, mash]
    for(let i = 0; i < enemyAttack.length; i++){
    switch (choice){
        case 0:
            return enemyAttack[0];
        case 1:
            return enemyAttack[1];
        case 2:
            return enemyAttack[2];
        case 3:
            return enemyAttack[3];
        default:
            return enemyAttack[0];
        }
    }

};

function playerAtk(){
        choice = Math.floor(Math.random() * 4) 
        playerAttack = [heal, mash, fire_arrow, stab]
        for(let i = 0; i < playerAttack.length; i++){
        switch (choice){
            case 0:
                return playerAttack[0];
            case 1:
                return playerAttack[1];
            case 2:
                return playerAttack[2];
            case 3:
                return playerAttack[3];
            default:
                return playerAttack[0];
            }
        }
    
    };

let playerturn = true;


function userdialogueText (user, enemy, move){
    dialogue.innerText = `${user.id} used ${move.name}!`
    dialogue.innerText += `\n`
    dialogue.innerText += `${enemy.id} has ${enemy.hp} HP left.`
};

function enemydialogueText(user, enemy, move){
    dialogue.innerText = `${enemy.id} used ${move.name}!`
    dialogue.innerText += `\n`
    dialogue.innerText += `${user.id} has ${user.hp} HP left.`
}


function updateHP(user, enemy){
    user_hp.textContent = user.hp;
    enemy_hp.textContent = enemy.hp
    updateHPBar(user, enemy);
};

function updateHPBar(user, enemy) {
    let userhpPercent = user.hp / user.maxhp * 100;
    let enemyhpPercent = enemy.hp / enemy.maxhp * 100;
  
    // Set width based on current HP level
    user_hp_bar.style.width = userhpPercent + '%';
    enemy_hp_bar.style.width = enemyhpPercent + '%';

    // Set color based on current HP level
    if (user.hp > 0.75 * user.maxhp) {
      user_hp_bar.style.backgroundColor = 'greenyellow';
    } else if (user.hp > 0.5 * user.maxhp) {
        user_hp_bar.style.backgroundColor = 'yellow';

    } else if (user.hp > 0.25 * user.maxhp) {
        user_hp_bar.style.backgroundColor = 'orange';
    } else {
        user_hp_bar.style.backgroundColor = 'red';
    }

    if (enemy.hp > 0.75 * enemy.maxhp) {
        enemy_hp_bar.style.backgroundColor = 'greenyellow';
      } else if (enemy.hp > 0.5 * enemy.maxhp) {
          enemy_hp_bar.style.backgroundColor = 'yellow';
      } else if (enemy.hp > .25 * enemy.maxhp) {
          enemy_hp_bar.style.backgroundColor = 'orange';
      } else {
          enemy_hp_bar.style.backgroundColor = 'red';
      }
  }
  

function resetGame(user, enemy){
    user.hp = user.maxhp;
    enemy.hp = enemy.maxhp;
    dialogue.textContent = 'What will do you next?'
    move_box.style.display = 'block';
    reset_box.style.display = 'none';
    updateHP(user, enemy);
}

function turnCycle(user, enemy, move){ 
    // User Move
    updateHP(user, enemy);
    user.userAttack(enemy, move);
    move_box.style.display = 'none'

    updateHP(user, enemy);

    if (!user.isAlive()) {
        dialogue.innerText = 'Game over!';
        move_box.style.display = 'none';
        reset_box.style.display = 'block';
        return true

    } else if (!enemy.isAlive()){
        dialogue.innerText = 'You won!';
        move_box.style.display = 'none';
        reset_box.style.display = 'block';
        return true
    }

    //Enemy Move
    setTimeout(function() {
        enemy.userAttack(user, enemyAtk());
        updateHP(user, enemy);
        move_box.style.display = 'block'
        if (!user.isAlive()) {
            dialogue.innerText = 'Game over!';
            move_box.style.display = 'none';
            reset_box.style.display = 'block';
            return true
    
        } else if (!enemy.isAlive()){
            dialogue.innerText = 'You won!';
            move_box.style.display = 'none';
            reset_box.style.display = 'block'
                endText();

        }
    }, 2000);
    // Switch turns
    playerturn = !playerturn;
};

function endText(){
    setTimeout(function(){
        dialogue.innerText = 'Oh no, you\'ve beaten me!'
    }, 1000);
    setTimeout(function(){
        dialogue.innerText = 'I guess you win. '
    }, 2000);
}

// turnCycle(human, enemy, attack_test.mash)

// Dom Elements

const move_box = document.querySelector('.move-container')
const reset_box = document.querySelector('.reset');
const reset_button = document.querySelector('.reset-button')
reset_button.addEventListener('click', () => {
    resetGame(human, enemy)
});

const move_1 = document.querySelector('#user-button-1');
const attack_1 = document.querySelector('#attack-1')
attack_1.textContent = human.move_1.name
move_1.addEventListener('click', () => {
    console.log(attack_1.textContent)
    switch(attack_1.textContent){
    case 'Mash':
    turnCycle(human, enemy, mash)
    break;
    case 'Fireball':
    turnCycle(human, enemy, fireball)
    break;
    case 'Fire arrow':
    turnCycle(human, enemy, fire_arrow)
    break
}
})

const move_2 = document.querySelector('#user-button-2');
const attack_2 = document.querySelector('#attack-2')
attack_2.textContent = human.move_2.name
move_2.addEventListener('click', () => {
    switch(attack_2.textContent){
    case 'Charge':
    turnCycle(human, enemy, charge)
    break;
    case 'Stab':
    turnCycle(human, enemy, stab)
    break;
    case 'Wand smack':
    turnCycle(human, enemy, wand_smack)
    break
};
});

const move_3 = document.querySelector('#user-button-3');
const attack_3 = document.querySelector('#attack-3')
attack_3.textContent = human.move_3.name
move_3.addEventListener('click', () => {
    console.log(attack_3)
    switch(attack_3.textContent){
    case 'Stone Armor':
    turnCycle(human, enemy, stone_armor)
    break;
    case 'Attack Elixir':
    turnCycle(human, enemy, attack_elixir)
    break;
    case 'Heal':
    turnCycle(human, enemy, heal)
    break
};
});

const move_4 = document.querySelector('#user-button-4');
const attack_4 = document.querySelector('#attack-4');
attack_4.textContent = human.move_4.name
move_4.addEventListener('click', () => {
    console.log(attack_4.textContent)
    switch(attack_4.textContent){
    case 'Block':
    turnCycle(human, enemy, block)
    break;
    case 'Dodge':
    turnCycle(human, enemy, dodge)
    break;
    case 'Invisibility':
    turnCycle(human, enemy, invisibilty)
    break
};
});

const dialogue_container = document.querySelector('.container');
const dialogue = document.querySelector('.dialogue');

//User Hp Bar and Info
const user_hp_bar = document.querySelector('.user-hp-bar');
const user_hp = document.querySelector('#user-hp');
user_hp.textContent = human.hp

const user_maxhp = document.querySelector('#user-max-hp')
user_maxhp.textContent = human.maxhp

//Enemy Hp Bar and Info
const enemy_hp_bar = document.querySelector('.enemy-hp-bar')

const enemy_hp = document.querySelector('#enemy-hp');
enemy_hp.textContent = enemy.hp

const enemy_maxhp = document.querySelector('#enemy-max-hp')
enemy_maxhp.textContent = enemy.maxhp