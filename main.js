class User {
    constructor(id, hp, attack, defense, move_1, move_2, move_3, move_4){
        this.id = id;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.move_1 = move_1;
        this.move_2 = move_2;
        this.move_3 = move_3;
        this.move_4 = move_4;
    }
}

class Attack {
    constructor(name, damage, crit){
        this.name = name;
        this.damage = damage;
        this.crit = crit;
    }
}

User.prototype.isAlive = function () {
    if (this.hp > 0) {
      console.log(`${this.id} is still alive! HP: ${this.hp}/100`);
      return true;
    }
    console.log(`${this.id} has died!`);
    return false;
};

function critChance(move){
    let critCalc = Math.random() + this.crit
    if(critCalc > 1){
        critCalc = 1;
        return critCalc;
    } else {
        return critCalc;
    }
}

function damageRoll(move){
    let roll = Math.floor((Math.random() * 7) -2);
    return move.damage + roll
}

function calculateHP(character, damage) {
    character.hp -= damage;
    if (character.hp < 0) {
        character.hp = 0;
    }
    return character.hp;
}


User.prototype.userAttack = function (character2, move) {
    let moveDamage = damageRoll(move)
    let damage = character2.defense - (this.attack + moveDamage);
    let finalDamage = ''
    if (damage < 0) {
        console.log('Had no effect!')
       return finalDamage = 0;
    }   

    let crit = critChance;
    if (crit > 0.85){
        console.log(`This is the damage before calculation: ${damage}`)
        damage *= 1.2;
        console.log(`This is the damage after calculation: ${damage}`)
        return finalDamage = Math.floor(damage * 10) / 10
    }
    finalDamage = Math.floor(damage * 10) / 10

    const originalHP = character2.hp
    let newHP = calculateHP(character2, finalDamage)

    console.log(`${this.id} used ${move.name} and inflicted ${finalDamage} damage!`)
    console.log(`${character2.id} HP:${newHP}/${originalHP}`)

    return finalDamage

};


const punch = new Attack('Punch', 2, 0.15)
const kick = new Attack('Kick', 2, .35)
const magician = new User('Mariop', 100, 8, 5, punch, 'Kick', 'Scream', 'Omega Big Fireball')
const enemy = new User('Bowsor', 100, 5, 15, punch, 'Serenade', 'Do Nothing', 'Selfdestruct')

console.log(magician.userAttack(enemy, punch))

// let playerturn = true;

// const turnInterval = setInterval(() => {
//     // If either character is not alive, end the game
//     if (!human.isAlive() || !enemy.isAlive()) {
//       clearInterval(turnInterval);
//       console.log('Game over!');
//     } else if (playerturn) {
//       human.userAttack(enemy, kick);
//       console.log(`${enemy.id} has ${enemy.hp} HP left.`)
//     } else {
//       enemy.userAttack(human, punch);
//       console.log(`${human.id} has ${human.hp} HP left.`)
//     }
  
//     // Switch turns
//     playerturn = !playerturn;
//   }, 2000);