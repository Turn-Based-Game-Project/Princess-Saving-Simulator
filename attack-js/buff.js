function stoneArmorCalc(user){
    user.defense += 5
    console.log(`${user.id} used Stone Armor.`)
    console.log(`${user.id}\'s defense increased sharply.`)
};

function blockCalc(user){
    const block = setInterval(() =>{
        user.defense += 1000
    }, 2000)
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

function invisibiltyCalc(user){
    const invisibilty = setInterval(() =>{
        user.defense += 1000
    }, 2000)
};

module.exports = {healCalc, stoneArmorCalc}