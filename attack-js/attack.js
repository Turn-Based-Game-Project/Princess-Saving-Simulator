const attack = {
    mash: {
        name: 'Mash',
        attack: 5,
        crit: 0.2,
        type: 'attack',
        description: 'User mashes the opponent with average damage.'
    },
    charge: {
        name: 'charge',
        attack: 100,
        crit: 0,
        type: 'attack',
        description: 'User does massive damage but must wait 1 turn to act again.'
    },
    stone_armor:{
        name: 'Stone Armor',
        attack: 0,
        crit: 0,
        type: 'buff',
        description: 'Sharply increases the user\s defense. '
    },
    block:{
        name: 'Block',
        attack:0,
        crit:0,
        type: 'buff',
        description: 'Reduces incoming damage on the next turn to 0.'
    },
    fire_arrow: {
        name: 'Fire Arrow',
        attack: 3,
        crit: 0.3,
        type: 'attack',
        description: 'User shoots a fire arrow at the opponent. High critical chance.'
    },
    stab: {
        name: 'Stab',
        attack: 2,
        crit: 0.15,
        type: 'attack',
        description: 'User stabs the opponent. This hits 2-5 times. '
    },
    attack_elixir:{
        name: 'Attack Elixir',
        attack: 0,
        crit: 0,
        type: 'buff',
        description: 'Sharply increases with user\'s attack.'
    },
    dodge:{
        name: 'Dodge',
        attack:0,
        crit:0,
        type: 'buff',
        description: 'Reduces incoming damage on the next turn to 0.'
    },
    fireball:{
        name:'Fireball',
        attack: 8,
        crit: 0.15,
        type: 'attack',
        description: 'The user hurls a fireball at the opponent. Deals moderate damage.'
    },
    wand_smack: {
        name: 'Wand Smack',
        attack: 1,
        crit: 0.01,
        type: 'attack',
        description: 'The user simply hits the opponent with a wand to do mediorce damage. Or does it...?'
    },
    heal:{
        name: 'Heal',
        attack: 0,
        crit: 0,
        type: 'buff',
        description: 'Increases HP by 35.'
    },
    invisibilty:{
        name:'invisibilty',
        attack: 0,
        crit: 0,
        type:'buff',
        description: 'Reduces incoming damage on the next turn to 0. '

    }    
}

exports.module = attack