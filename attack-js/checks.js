function buffCheck(user, move, character2){
    switch (move.name){
        case 'Stone Armor':
            stoneArmorCalc(user)
            break;
        case 'Heal':
            healCalc(user)
            break;
        case 'Divine Intervention':
            divineIntervention(user, character2);
            break;
        default:
            break
    }
   };

   function specialCheck(user, character2, move, damage){
    switch (move.name){
        case 'Lifesiphon':
            lifesiphonCalc(user, character2, damage);
            newHP = calculateHP(character2, damage)
            console.log(`${user.id} used ${move.name} and inflicted ${damage} damage!`)
            console.log(`${character2.id} HP:${character2.hp}/${character2.maxhp}`)
            console.log(`${user.id} HP:${user.hp}/${user.maxhp}`)
            break;
        case 'Stab':
            stabCalc(user, character2, damage)
        default:
            console.log('I have not done this yet. Oops.')
    }
   }


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
    return move.attack += roll
}



function calculateHP(character, damage) {
    character.hp -= damage;
    if (character.hp < 0) {
        character.hp = 0;
    }
    return character.hp;
}

module.exports = { calculateHP, damageRoll, critCalc, critChance, specialCheck, buffCheck }