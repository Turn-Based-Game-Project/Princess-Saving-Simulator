const { divine_intervention } = require("./attack_variables");

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
    user.attack_elixir += 3
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
    let roll = Math.floor((Math.random() * 5) )
    console.log(roll)
    if (roll > 0 && roll < 1.8){
        console.log(`${user.id}\'s HP has been recovered! ${user.hp}/${user.maxhp}`)
        user.hp += 100
    } else if ( roll > 1.81 && roll < 2.6){
        console.log('second function')
        character2.hp += 100
    } else if ( roll > 2.61 && roll < 3.8){
        console.log('third function')
        user.attack += 15;
        user.defense += 15;
    } else {
        console.log('final function')
        character2.hp = 0
    }
}

module.exports = {healCalc, stoneArmorCalc, divineIntervention}