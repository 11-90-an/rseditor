const imageMap = new Map();
const blockNames = [
    //arail
    'arail',
    'arailsl',
    'arailsr',

    //barrel
    'barrel',

    //block
    'air',
    'glasst',
    'glassw',
    'glazedterracotta',
    'honeyblock',
    'ironblock', 
    'noteblock', 
    'obsidian', 
    'rsblock', 
    'sand', 
    'scaffolding',
    'slabt',
    'slimeblock',
    'smoothstone',
    'soulsand',
    'unknown',

    //cake
    'cake14', 

    //cauldron
    'cauldron',

    //chest
    'chest',
    'chestdl',
    'chestdr',

    //comparator
    'comparatorloff', 
    'comparatorlon',
    'comparatorroff', 
    'comparatorron',

    //target
    'target',

    //composter
    'composter',

    //door

    //dropper
    'dropperd',
    'dropperl',
    'dropperr',
    'dropperu',

    //dust
    'dustoff',
    'duston',

    //fencegate
    'fencegatec',
    'fencegateo',

    //hopper
    'hopperb',
    'hopperd',
    'hopperl',
    'hopperr',

    //lamp
    'lampoff', 
    'lampon', 

    //observer
    'observerb',
    'observerd',
    'observerl',
    'observerr',
    'observeru',

    //piston
    'pistonb',
    'pistond',
    'pistonf',
    'pistonl',
    'pistonr',
    'pistonu', 
    'stickypistonb',
    'stickypistond', 
    'stickypistonf',
    'stickypistonl', 
    'stickypistonr', 
    'stickypistonu',
    'pistonheadd', 
    'pistonheadl', 
    'pistonheadr', 
    'pistonheadu', 
    'stickypistonheadd',
    'stickypistonheadl',
    'stickypistonheadr',
    'stickypistonheadu',
    'pistonbodyd',
    'pistonbodyl',
    'pistonbodyr',
    'pistonbodyu',


    //prail
    'prail',
    'prailsl',
    'prailsr',

    //repeater
    'repeaterloff', 
    'repeaterlon',
    'repeaterroff',
    'repeaterron',
    'repeaterfoff',
    'repeaterfon',

    //shulkerbox
    'shulkerboxd',
    'shulkerboxl',
    'shulkerboxr',
    'shulkerboxu',

    //torch
    'torchoff',
    'torchon',
    'torchloff',
    'torchlon',
    'torchroff',
    'torchron',

    //trapdoor
    'trapdoord',
    'trapdoorl',
    'trapdooru',
    'trapdoorr',

    //wooden trapdoor
    'wtrapdoord',
    'wtrapdoorl',
    'wtrapdooru',
    'wtrapdoorr',

    //stair
    'stairdl',
    'stairul',
    'stairur',
    'stairdr',
    
    //based
    'powderedsnow',
    
    //water
    'water',

    //lava
    'lava',
    
    //ice
    'ice',

    //crafter
    'crafter'
]

//probably shouldve used a spritesheet xd

function imageInit() {
    blockNames.forEach((e) => imageMap.set(e, loadImage(`assets/${e}.webp`)));

    //default block
    selectedImg = imageMap.get('air');
}
