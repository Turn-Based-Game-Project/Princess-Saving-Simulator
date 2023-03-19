import { healCalc, stabTimes, attack_elixirCalc, invisCalc, blockCalc, stoneArmorCalc, leerCalc, cryCalc, chargeCalc, wandsmackCalc, dodgeCalc } from './buff.js'

function buffCheck(user, move, character2){
    console.log(move)
    switch (move.name){
        case 'Stone Armor':
            stoneArmorCalc(user)
            break;
        case 'Ice Wall':
            healCalc(user)
            break;
        case 'Divine Intervention':
            divineIntervention(user, character2);
            break;
        case 'Block':
            blockCalc(user);
            break
        case 'Leer':
            leerCalc(user, character2);
            break;
        case 'Cry':
            cryCalc(user, character2);
            break;
        case 'Invisibilty':
            invisCalc(user)
            break;
        case 'Attack Elixir':
            attack_elixirCalc(user)
            break;
        case 'Dodge':
            dodgeCalc(user);
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
            stabTimes(user, character2, move);
            break;
        case 'Charge':
            chargeCalc(user, character2, damage);
            break;
        case 'Wand Smack':
            wandsmackCalc(user, character2);
            break;
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
    console.log(move)
    return move.attack += roll
}



function calculateHP(character, damage) {
    character.hp -= damage;
    if (character.hp < 0) {
        character.hp = 0;
    }
    return character.hp;
}

export { calculateHP, damageRoll, critCalc, critChance, specialCheck, buffCheck,}