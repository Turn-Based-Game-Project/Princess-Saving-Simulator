const attack = {
    mash: {
        name: 'Mash',
        attack: 4,
        crit: 0.2,
        type: 'attack'
    },
    charge: {
        name: 'charge',
        attack: 100,
        crit: 0,
        type: 'attack'
    },
    stone_armor:{
        name: 'Stone Armor',
        attack: 0,
        crit: 0,
        type: 'buff'
    },
    block:{
        name: 'Block',
        attack:0,
        crit:0,
        type: 'buff'
    },
    fire_arrow: {
        name: 'Fire Arrow',
        attack: 6,
        crit: 0.15,
        type: 'attack'
    },
    stab: {
        name: 'Stab',
        attack: 2,
        crit: 0.4,
        type: 'attack'
    },
    attack_elixir:{
        name: 'Attack Elixir',
        attack: 0,
        crit: 0,
        type: 'buff'
    },
    dodge:{
        name: 'Dodge',
        attack:0,
        crit:0,
        type: 'buff'
    },
    fireball:{
        name:'Fireball',
        attack: 8,
        crit: 0.15,
        type: 'attack'
    },
    wand_smack: {
        name: 'Wand Smack',
        attack: 1,
        crit: 0.01,
        type: 'attack'
    },
    ice_wall:{
        name: 'Ice Wall',
        attack: 0,
        crit: 0,
        type: 'buff',
    },
    invisibilty:{
        name:'invisibilty',
        attack: 0,
        crit: 0,
        type:'buff'
    }    
}

exports.module = attack