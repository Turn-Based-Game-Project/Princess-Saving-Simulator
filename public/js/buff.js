import { calculateHP, damageRoll, critCalc, critChance, specialCheck, buffCheck } from '/js/checks.js'

const dialogue = document.querySelector('.dialogue');

function stoneArmorCalc(user){
    user.defense += 5
    dialogue.textContent = `${user.id} used Stone Armor.`
    dialogue.textContent = `${user.id}\'s defense increased sharply.`
};

function chargeCalc(user, character2){
    user.attack += 4
    user.defense -= 8;
    character2.hp -= 20;
    console.log(user.defense)
    if(user.defense <= 0){
        user.defense = 0
        console.log(user)
        dialogue.textContent = `${user.id} used Charge dealing 20 damage.`
        dialogue.textContent += `${user.id}\'s defense can\'t go any lower!`
        return true
    } else
        dialogue.textContent = `${user.id} used Charge dealing 20 damage.`
        dialogue.textContent += `\n${user.id}\'s defense dropped harshly but attack was raised!`
}

function blockCalc(user){
    user.defense += 1000;
    dialogue.textContent = `${user.id} used Stone Armor.`
    dialogue.textContent += `\n${user.id} will block the next attack.`
    setTimeout(function(){
        user.defense -= 1000;
    }, 3000)

};

function attack_elixirCalc(user){
    user.attack += 3
    dialogue.textContent = `${user.id} drank an Attack Exixir, increasing your attack a bit.`
};

function leerCalc(user, character2){
    character2.defense -= 5;
    dialogue.textContent = `${user.id} used Leer. Menacingly.`
    dialogue.textContent += `\n${character2.id}\'s defense dropped. Menacingly.`
}

function cryCalc(user, character2){
    character2.attack -= 1
    dialogue.textContent = `${user.id} used Cry. You feel bad.`
    dialogue.textContent += `\n${character2.id}\'s attacked dropped.`
};

function wandsmackCalc(user, character2){
    let roll = Math.floor(Math.random() * 101);
    if (roll > 99){
        character2.hp -= 1000;
        dialogue.textContent = `You have summoned the great diety, Odin, who severs the ties of life of the enemy.`;
        dialogue.textContent = `${character.id} has died instantly!`
    } else {
        character2.hp -= 2;
        dialogue.textContent = `${user.id} used Wand Smack. You inflicted 2 damage.`
    };
}

function invisCalc(user){
    user.defense += 1000;
    dialogue.textContent = `${user.id} became invisible.`
    dialogue.textContent += `\n${user.id}\'s will dodge the next attack.`
    setTimeout(function(){
        user.defense -= 1000;
    }, 3000)
}

function dodgeCalc(user){
    user.defense += 1000
    dialogue.textContent = `${user.id} used Dodge.\n`
    dialogue.textContent = `\n${user.id} becomes agile and dodges the next attack.`
    setTimeout(function(){
        user.defense -= 1000;
    }, 4000)
};

function healCalc(user){
    user.hp += 15;
    user.defense += 5;
    if(user.hp > user.maxhp){
        user.hp = user.maxhp
    }
    dialogue.textContent = `${user.id} used Ice Wall.`
    dialogue.textContent = `${user.id} healed 15 hp and increased defense!`
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
    dialogue.textContent = 'Dorgon steals some of your life force!'
}

function stabCalc(user, character2, move){
    let stabDamage
    stabDamage = damageRoll(move);
    let crit = critChance(move);
    console.log(crit)
    if (crit > .80){
        let critDamage = critCalc(stabDamage)
        character2.hp -= critDamage
    }   
        character2.hp -= stabDamage 
}

function stabTimes(user, character2, move){ 
    let stabRoll = Math.floor(Math.random()* 4 + 2)

    for (let i = 0; i < stabRoll - 1; i++){

        console.log(stabRoll)
        stabCalc(user, character2, move)
        
    };
    if (character2.hp < 0){
        character2.hp = 0;
    }
    dialogue.textContent = `${user.id} used Stab and hit ${stabRoll} times!`
};


export {healCalc, stabTimes, invisCalc, wandsmackCalc, chargeCalc, cryCalc, leerCalc, stoneArmorCalc, blockCalc, divineIntervention, attack_elixirCalc, lifesiphonCalc, stabCalc, dodgeCalc}