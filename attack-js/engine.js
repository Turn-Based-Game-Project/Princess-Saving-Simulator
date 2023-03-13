const { mash, charge, stone_armor, block, fire_arrow, stab, attack_elixir, dodge, fireball, wand_smack, heal, invisibilty } = require('./attack_variables');
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

const human = new User('Mariop', 50, 100, 20, 5, mash, charge, block, stone_armor)
const enemy = new User('Bowsor', 150, 150, 5, 7, fireball, wand_smack, mash, invisibilty)

User.prototype.isAlive = function () {
    if (this.hp > 0) {
      console.log(`${this.id} HP: ${this.hp}/${this.maxhp}`);
      return true;
    }
    console.log(`${this.id} has died!`);
    return false;
};

function buffCheck(user, move){
    switch (move.name){
        case 'Stone Armor':
            console.log(`The original defense is ${user.defense}.`)
            user.defense += 10
            console.log(`The new defense is ${user.defense}.`)
            console.log(`${user.id} used ${move.name}.`)
            break;
        case 'Heal':
            user.hp += 35
            if(user.hp > user.maxhp){
                user.hp = user.maxhp
            }
            console.log(`${user.id} used ${move.name}.`)
            console.log(`${user.id} healed! ${user.hp}/${user.maxhp}`)
            break
        default:
            break
    }
   };


function critChance(move){
    let critCalc = Math.random() + move.crit
    if(critCalc > 1){
        critCalc = 1;
        return critCalc;
    } else {
        return critCalc;
    }
}

function critCalc(damage){
    const critDamage = Math.floor((damage * 1.2));
    return critDamage;

}

function damageRoll(move){
    let roll = Math.floor((Math.random() * 6) -2)
    return move.attack + roll
}



function calculateHP(character, damage) {
    character.hp -= damage;
    if (character.hp < 0) {
        character.hp = 0;
    }
    return character.hp;
}

//---------------------Attack Function-------------------//
User.prototype.userAttack = function (character2, move) {
    //--------------------Visual Aid---------------------//
    if(this.id === 'Mariop'){
        character2.id = `${color.red}${character2.id}${color.reset}`
        this.id = `${color.green}${this.id}${color.reset}`
    } if (this.id === 'Bowsor'){
        character2.id = `${color.green}${character2.id}${color.reset}`
        this.id = `${color.red}${this.id}${color.reset}`
    }
    //---------------Value Variables---------------------//
    let finalDamage;
    let newHP;
    //---------------------------------------------------//


    //--------------------Buff Check-----------------------//
    if (move.type === 'buff'){
    buffCheck(this, move)
    return true
    };
    
    //---------------Base Damage Calculation----------------//
    let moveDamage = damageRoll(move)
    let damage = (this.attack + moveDamage)- character2.defense;


    //----------------Damage Checks----------------------//
    if (damage <= 0) {
        finalDamage = 0;
        newHP = calculateHP(character2, finalDamage)
        console.log(`${this.id} used ${move.name} and had no effect!`)
        console.log(`${character2.id} HP:${newHP}/${originalHP}`)
        return true;
    }   // Should activate on attacks with 0 damage after roll.

    //-----------------Crit Check-------------------------//
    let crit = critChance(move);

    if (crit > 0.50){
        finalDamage = critCalc(damage);
        
        newHP = calculateHP(character2, finalDamage)
    
        console.log(`Critical Hit! ${this.id} used ${move.name} and inflicted an increased ${finalDamage} damage!`)
        console.log(`${character2.id} HP:${newHP}/${character2.maxhp}`)
      
        return true
    }   
    // If damage is > 0, then the crit function will roll to see if damage is multiplied by 1.2x.

    finalDamage = damage

    newHP = calculateHP(character2, finalDamage)

    console.log(`${this.id} used ${move.name} and inflicted ${finalDamage} damage!`)
    console.log(`${character2.id} HP:${newHP}/${character2.maxhp}`)
  
    return true

};


//-----------------------Turn Based Logic--------------------------//
let enemyAttack
let playerAttack
let choice

function enemyAtk(){
    choice = Math.floor(Math.random() * 4) 
    enemyAttack = [fireball, wand_smack, mash, stone_armor]
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
        playerAttack = [heal, heal, heal, stab]
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

function turnCycle(move){ 
    const turn = setInterval(() => {
    // If either character is not alive, end the game
    if (!human.isAlive()) {
      clearInterval(turn);
      console.log('Game over!');
    } else if (!enemy.isAlive()){
        clearInterval(turn);
        console.log('You won!');
    } else if (playerturn) {
      human.userAttack(enemy, move);
      console.log(`${enemy.id} has ${enemy.hp} HP left.`)
    } else {
      enemy.userAttack(human, enemyAtk());
      console.log(`${human.id} has ${human.hp} HP left.`)
    }
    console.log('---------------------------------------------')
    // Switch turns
    playerturn = !playerturn;
  }, 1000);
}

turnCycle(playerAtk())