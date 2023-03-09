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
    let critCalc = Math.random() + move.crit
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
    if (damage < 0) {
        damage = 0;
    }
    let crit = critChance();
    if (crit > 0.90){
        console.log(`This is the damage before calculation: ${damage}`)
        damage *= 1.2;
        finalDamage = math.floor(damage * 10) / 10
        console.log(`This is the damage after calculation: ${damage}`)
    }

    const originalHP = character2.hp
    let newHP = calculateHP(character2, damage)

    console.log(`${character2.id} HP:${newHP}/${originalHP}`)
    return damage;
};


const punch = new Attack('Punch', 10, 0.15)
const human = new User('Steve', 100, 80, 50, punch, 'Kick', 'Scream', 'Omega Big Fireball')
const enemy = new User('Enemy_1', 100, 50, 150, punch, 'Serenade', 'Do Nothing', 'Selfdestruct')

console.log(userAttack);