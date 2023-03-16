const { calculateHP, damageRoll, critCalc, critChance, specialCheck, buffCheck } = require('./checks')
const { stab } = require('./attack_variables')


function stoneArmorCalc(user){
    user.defense += 5
    console.log(`${user.id} used Stone Armor.`)
    console.log(`${user.id}\'s defense increased sharply.`)
};

function blockCalc(user){
    user.defense += 1000;
    //how to get defense back to the original//

};

function attack_elixirCalc(user){
    user.attack += 3
};

function dodgeCalc(user){
    const dodge = setInterval(() =>{
        user.defense += 1000
    }, 2000)
};

function healCalc(user){
    user.hp += 30
    if(user.hp > user.maxhp){
        user.hp = user.maxhp
    }
    console.log(`${user.id} used Heal.`)
    console.log(`${user.id} healed! ${user.hp}/${user.maxhp}`)
};

function divineIntervention(user, character2){
    let roll = (Math.random() * 4)
    if (roll >= 0 && roll < 1.8){
        console.log(`${user.id}\'s HP has been recovered! ${user.hp}/${user.maxhp}`)
        user.hp += 100
    } else if ( roll > 1.81 && roll < 2.6){
        console.log('Divine Intervention falls favorably on you!')
        character2.hp += 100
    } else if ( roll > 2.61 && roll < 3.8){
        console.log('Divine Intervention provides immaculate defense and attack.')
        console.log('Dorgon\'s attack and defense rise expotentially.')
        user.attack += 15;
        user.defense += 15;
    } else {
        console.log('Divine Intervention does not fall favorably on you.');
        character2.hp = 0
    }
}

function lifesiphonCalc(user, character2, damage){
    character2.hp - damage
    user.hp += Math.floor(damage / 2)
    if (user.hp > user.maxhp){
        user.hp = user.maxhp
    }
    console.log('Dorgon steals some of your life force!')
}

function stabCalc(user, character2, move){
    let stabDamage
    stabDamage = damageRoll(move);
    let crit = critChance(move);

    if (crit > .80){
        let critDamage = critCalc(stabDamage)
        console.log(`${user.id} used Stab and did ${critDamage} damage!`)
        character2.hp -= critDamage

        }   console.log(`${user.id} used Stab and did ${stabDamage} damage!`)
            character2.hp -= stabDamage 
}

module.exports = {healCalc, stoneArmorCalc, divineIntervention, attack_elixirCalc, lifesiphonCalc, stabCalc}