const attack = {
    mash: {
        name: 'Mash',
        attack: 5,
        crit: 0.2,
        type: 'attack',
        description: 'User mashes the opponent with average damage.'
    },
    charge: {
        name: 'Charge',
        attack: 30,
        crit: 0,
        type: 'special',
        description: 'User does fixed damage and increases your attack, but drops your defense drastically.'
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
        attack: 10,
        crit: 0.3,
        type: 'attack',
        description: 'User shoots a fire arrow at the opponent. High critical chance.'
    },
    stab: {
        name: 'Stab',
        attack: 4,
        crit: 0.15,
        type: 'special',
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
        attack: 18,
        crit: 0.15,
        type: 'attack',
        description: 'The user hurls a fireball at the opponent. Deals moderate damage.'
    },
    wand_smack: {
        name: 'Wand Smack',
        attack: 1,
        crit: 0.01,
        type: 'special',
        description: 'The user simply hits the opponent with a wand to do mediorce damage. Or does it...?'
    },
    ice_wall:{
        name: 'Ice Wall',
        attack: 0,
        crit: 0,
        type: 'buff',
        description: 'Shields the User in a block of ice, increaseing HP by 15 and slightly raises defense.'
    },
    invisibilty:{
        name:'Invisibilty',
        attack: 0,
        crit: 0,
        type:'buff',
        description: 'Reduces incoming damage on the next turn to 0. '

    },
    chop:{
        name: 'Chop',
        attack: 20,
        crit: 0.1,
        type: 'attack',
        description: 'User chops the opponent with a heavy swing.'
    },
    bite:{
        name: 'Bite',
        attack: 12,
        crit: 0.2,
        type: 'special',
        description: 'User bites the opponent tightly, hurting itself in the process.'
    },
    rage:{
        name: 'Rage',
        attack: 0,
        crit: 0,
        type: 'buff',
        description: 'Massively increases user\'s attack for 1 turn.'
    },
    leer:{
        name: 'Leer',
        attack: 0,
        crit: 0,
        type: 'buff',
        description: 'User stares menacingly at the opponent, lowering their defense menacingly.'
    },
    scratch:{
        name: 'Scratch',
        attack: 15,
        crit: 1,
        type: 'attack',
        description: 'User scratches the opponent, dealing light damage. This move always crits.'
    },
    cry:{   
        name: 'Cry',  
        attack: 0,
        crit: 0,
        type: 'buff',
        description: 'User cries and the opponent feels bad, lower the opponent\'s attack.'
    },
    kick:{
        name: 'Kick',
        attack: 12,
        crit: 1,
        type: 'attack',
        description: 'User gains courage and delivers a devastating kick. This move always crits.'
    },
    scourge:{
        name: 'Scourge',
        attack: 20,
        crit: 0.2,
        type: 'attack', 
        description: 'User whips its tail at the opponent.'
    },
    lifesiphon:{
        name: 'Lifesiphon',
        attack: 10,
        crit: 0.0,
        type: 'special', 
        description: 'User steals the life force from the opponent.'
    },
    ultima:{
        name: 'Ultima',
        attack: 20,
        crit: 0.0,
        type: 'attack', 
        description: 'User conjures the ultimate magic and deals massive damage.'
    },
    divine_intervention:{
        name: 'Divine Intervention',
        attack: 0,
        crit: 0,
        type: 'buff', 
        description: 'User calls on divine intervention. Has a chance to heal the user, increase attack and defense of the user, heal the opponent, or instantly KO the opponent.'
    },

}

export default attack;

