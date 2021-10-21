// rock paper scissors 25
const RPS25 = {
    rock: {
        name: 'rock',
        symbol: '👊',
        beats: [
            { id: 'sun', verb: 'blocks' },
            { id: 'fire', verb: 'extinguishes' },
            { id: 'scissors', verb: 'crushes' },
            { id: 'axe', verb: 'dulls' },
            { id: 'snake', verb: 'kills' },
            { id: 'monkey', verb: 'kills' },
            { id: 'woman', verb: 'enchants' },
            { id: 'man', verb: 'distracts' },
            { id: 'tree', verb: 'fells' },
            { id: 'ant', verb: 'crushes' },
            { id: 'wolf', verb: 'crushes' },
            { id: 'sponge', verb: 'crushes' }
        ]
    },
    gun: {
        name: 'gun',
        symbol: '🔫',
        beats: [
            { id: 'rock', verb: 'disintegrates' },
            { id: 'sun', verb: 'defeats' },
            { id: 'fire', verb: 'defeats' },
            { id: 'scissors', verb: 'disintegrates' },
            { id: 'axe', verb: 'disintegrates' },
            { id: 'snake', verb: 'shoots' },
            { id: 'monkey', verb: 'kills' },
            { id: 'woman', verb: 'shoots' },
            { id: 'man', verb: 'shoots' },
            { id: 'tree', verb: 'fells' },
            { id: 'ant', verb: 'kills' },
            { id: 'wolf', verb: 'shoots' }
        ]
    },
    dynamite: {
        name: 'dynamite',
        symbol: '🧨',
        beats: [
            { id: 'gun', verb: 'overpowers' },
            { id: 'rock', verb: 'explodes' },
            { id: 'sun', verb: 'defeats' },
            { id: 'fire', verb: 'consumes' },
            { id: 'scissors', verb: 'explodes' },
            { id: 'axe', verb: 'explodes' },
            { id: 'snake', verb: 'kills' },
            { id: 'monkey', verb: 'kills' },
            { id: 'woman', verb: 'kills' },
            { id: 'man', verb: 'kills' },
            { id: 'tree', verb: 'fells' },
            { id: 'ant', verb: 'kills' }
        ]
    },
    nuke: {
        name: 'nuke',
        symbol: '☢️',
        beats: [
            { id: 'dynamite', verb: 'overpowers' },
            { id: 'gun', verb: 'overpowers' },
            { id: 'rock', verb: 'explodes' },
            { id: 'sun', verb: 'blasts' },
            { id: 'fire', verb: 'overpowers' },
            { id: 'scissors', verb: 'blasts' },
            { id: 'axe', verb: 'blasts' },
            { id: 'snake', verb: 'blasts' },
            { id: 'monkey', verb: 'blasts' },
            { id: 'woman', verb: 'kills' },
            { id: 'man', verb: 'kills' },
            { id: 'tree', verb: 'disintegrates' }
        ]
    },
    lightning: {
        name: 'lightning',
        symbol: '⚡',
        beats: [
            { id: 'nuke', verb: 'disarms' },
            { id: 'dynamite', verb: 'overpowers' },
            { id: 'gun', verb: 'melts' },
            { id: 'rock', verb: 'melts' },
            { id: 'sun', verb: 'blinds' },
            { id: 'fire', verb: 'defeats' },
            { id: 'scissors', verb: 'melts' },
            { id: 'axe', verb: 'melts' },
            { id: 'snake', verb: 'electrocutes' },
            { id: 'monkey', verb: 'electrocutes' },
            { id: 'woman', verb: 'electrocutes' },
            { id: 'man', verb: 'electrocutes' }
        ]
    },
    devil: {
        name: 'devil',
        symbol: '👿',
        beats: [
            { id: 'lightning', verb: 'bans' },
            { id: 'nuke', verb: 'bans' },
            { id: 'dynamite', verb: 'bans' },
            { id: 'gun', verb: 'melts' },
            { id: 'rock', verb: 'melts' },
            { id: 'sun', verb: 'darkens' },
            { id: 'fire', verb: 'eats' },
            { id: 'scissors', verb: 'bans' },
            { id: 'axe', verb: 'bans' },
            { id: 'snake', verb: 'tortures' },
            { id: 'monkey', verb: 'tortures' },
            { id: 'woman', verb: 'seduces' }
        ]
    },
    dragon: {
        name: 'dragon',
        symbol: '🐲',
        beats: [
            { id: 'devil', verb: 'burns' },
            { id: 'lightning', verb: 'overpowers' },
            { id: 'nuke', verb: 'eats' },
            { id: 'dynamite', verb: 'eats' },
            { id: 'gun', verb: 'melts' },
            { id: 'rock', verb: 'melts' },
            { id: 'sun', verb: 'eats' },
            { id: 'fire', verb: 'inhales' },
            { id: 'scissors', verb: 'melts' },
            { id: 'axe', verb: 'melts' },
            { id: 'snake', verb: 'burns' },
            { id: 'monkey', verb: 'burns' }
        ]
    },
    alien: {
        name: 'alien',
        symbol: '👽',
        beats: [
            { id: 'dragon', verb: 'abducts' },
            { id: 'devil', verb: 'scares' },
            { id: 'lightning', verb: 'ignores' },
            { id: 'nuke', verb: 'defuses' },
            { id: 'dynamite', verb: 'defuses' },
            { id: 'gun', verb: 'disassembles' },
            { id: 'rock', verb: 'eats' },
            { id: 'sun', verb: 'builds dyson swarm around' },
            { id: 'fire', verb: 'extinguishes' },
            { id: 'scissors', verb: 'teleports' },
            { id: 'axe', verb: 'teleports' },
            { id: 'snake', verb: 'zaps' }
        ]
    },
    water: {
        name: 'water',
        symbol: '💦',
        beats: [
            { id: 'alien', verb: 'drowns' },
            { id: 'dragon', verb: 'drowns' },
            { id: 'devil', verb: 'drowns' },
            { id: 'lightning', verb: 'absorbs' },
            { id: 'nuke', verb: 'drowns' },
            { id: 'dynamite', verb: 'drowns' },
            { id: 'gun', verb: 'rusts' },
            { id: 'rock', verb: 'sinks' },
            { id: 'sun', verb: 'extinguishes' },
            { id: 'fire', verb: 'extinguishes' },
            { id: 'scissors', verb: 'rusts' },
            { id: 'axe', verb: 'rusts' }
        ]
    },
    bowl: {
        name: 'bowl',
        symbol: '🍜',
        beats: [
            { id: 'water', verb: 'holds' },
            { id: 'alien', verb: 'traps' },
            { id: 'dragon', verb: 'traps' },
            { id: 'devil', verb: 'defeats' },
            { id: 'lightning', verb: 'defeats' },
            { id: 'nuke', verb: 'muffles' },
            { id: 'dynamite', verb: 'muffles' },
            { id: 'gun', verb: 'muffles' },
            { id: 'rock', verb: 'covers' },
            { id: 'sun', verb: 'partly covers' },
            { id: 'fire', verb: 'extinguishes' },
            { id: 'scissors', verb: 'covers' },
        ]
    },
    air: {
        name: 'air',
        symbol: '💨',
        beats: [
            { id: 'bowl', verb: 'blows away' },
            { id: 'water', verb: 'evaporates' },
            { id: 'alien', verb: 'blows away' },
            { id: 'dragon', verb: 'blows away' },
            { id: 'devil', verb: 'blows away' },
            { id: 'lightning', verb: 'defeats' },
            { id: 'nuke', verb: 'blows away' },
            { id: 'dynamite', verb: 'extinguishes fuse of' },
            { id: 'gun', verb: 'blows away' },
            { id: 'rock', verb: 'erodes' },
            { id: 'sun', verb: 'defeats' },
            { id: 'fire', verb: 'extinguishes' }
        ]
    },
    moon: {
        name: 'moon',
        symbol: '🌙',
        beats: [
            { id: 'air', verb: 'defeats' },
            { id: 'bowl', verb: 'defeats' },
            { id: 'water', verb: 'attracts' },
            { id: 'alien', verb: 'houses' },
            { id: 'dragon', verb: 'kills' },
            { id: 'devil', verb: 'impresses' },
            { id: 'lightning', verb: 'ignores' },
            { id: 'nuke', verb: 'defeats' },
            { id: 'dynamite', verb: 'defeats' },
            { id: 'gun', verb: 'defeats' },
            { id: 'rock', verb: 'basically is a big' },
            { id: 'sun', verb: 'is more epic than' },
        ]
    },
    paper: {
        name: 'paper',
        symbol: '✋',
        beats: [
            { id: 'moon', verb: 'describes' },
            { id: 'air', verb: 'cuts' },
            { id: 'bowl', verb: 'covers' },
            { id: 'water', verb: 'pollutes' },
            { id: 'alien', verb: 'cuts' },
            { id: 'dragon', verb: 'cuts' },
            { id: 'devil', verb: 'cuts' },
            { id: 'lightning', verb: 'defeats' },
            { id: 'nuke', verb: 'covers' },
            { id: 'dynamite', verb: 'covers' },
            { id: 'gun', verb: 'covers' },
            { id: 'rock', verb: 'covers' }
        ]
    },
    sponge: {
        name: 'sponge',
        symbol: '🧽',
        beats: [
            { id: 'paper', verb: 'erases' },
            { id: 'moon', verb: 'erases' },
            { id: 'air', verb: 'defeats' },
            { id: 'bowl', verb: 'cleans' },
            { id: 'water', verb: 'absorbs' },
            { id: 'alien', verb: 'scares' },
            { id: 'dragon', verb: 'erases' },
            { id: 'devil', verb: 'erases' },
            { id: 'lightning', verb: 'absorbs' },
            { id: 'nuke', verb: 'absorbs shock of' },
            { id: 'dynamite', verb: 'absorbs shock of' },
            { id: 'gun', verb: 'plugs' }
        ]
    },
    wolf: {
        name: 'wolf',
        symbol: '🐺',
        beats: [
            { id: 'sponge', verb: 'eats' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'moon', verb: 'howls at' },
            { id: 'air', verb: 'defeats' },
            { id: 'bowl', verb: 'dirties' },
            { id: 'water', verb: 'muddies' },
            { id: 'alien', verb: 'scares' },
            { id: 'dragon', verb: 'chases away' },
            { id: 'devil', verb: 'chases away' },
            { id: 'lightning', verb: 'defeats' },
            { id: 'nuke', verb: 'defeats' },
            { id: 'dynamite', verb: 'defeats' }
        ]
    },
    ant: {
        name: 'ant',
        symbol: '🐜',
        beats: [
            { id: 'wolf', verb: 'attacks' },
            { id: 'sponge', verb: 'disassembles' },
            { id: 'paper', verb: 'disassembles' },
            { id: 'moon', verb: 'disassembles' },
            { id: 'air', verb: 'defeats' },
            { id: 'bowl', verb: 'cleans' },
            { id: 'water', verb: 'defeats' },
            { id: 'alien', verb: 'annoys' },
            { id: 'dragon', verb: 'annoys' },
            { id: 'devil', verb: 'annoys' },
            { id: 'lightning', verb: 'defeats' },
            { id: 'nuke', verb: 'defeats' },
        ]
    },
    tree: {
        name: 'tree',
        symbol: '🌲',
        beats: [
            { id: 'ant', verb: 'feeds' },
            { id: 'wolf', verb: 'calms' },
            { id: 'sponge', verb: 'dominates' },
            { id: 'paper', verb: 'laughs at' },
            { id: 'moon', verb: 'absorbs' },
            { id: 'air', verb: 'absorbs' },
            { id: 'bowl', verb: 'defeats' },
            { id: 'water', verb: 'absorbs' },
            { id: 'alien', verb: 'defeats' },
            { id: 'dragon', verb: 'calms' },
            { id: 'devil', verb: 'calms' },
            { id: 'lightning', verb: 'absorbs' }
        ]
    },
    man: {
        name: 'man',
        symbol: '👨',
        beats: [
            { id: 'tree', verb: 'fells' },
            { id: 'ant', verb: 'stomps' },
            { id: 'wolf', verb: 'hunts' },
            { id: 'sponge', verb: 'stomps' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'moon', verb: 'writes song about' },
            { id: 'air', verb: 'pollutes' },
            { id: 'bowl', verb: 'crushes' },
            { id: 'water', verb: 'pollutes' },
            { id: 'alien', verb: 'captures' },
            { id: 'dragon', verb: 'captures' },
            { id: 'devil', verb: 'pacifies' }
        ]
    },
    woman: {
        name: 'woman',
        symbol: '👩',
        beats: [
            { id: 'man', verb: 'breaks up with' },
            { id: 'tree', verb: 'fells' },
            { id: 'ant', verb: 'stomps' },
            { id: 'wolf', verb: 'hunts' },
            { id: 'sponge', verb: 'stomps' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'moon', verb: 'writes song about' },
            { id: 'air', verb: 'pollutes' },
            { id: 'bowl', verb: 'crushes' },
            { id: 'water', verb: 'pollutes' },
            { id: 'alien', verb: 'captures' },
            { id: 'dragon', verb: 'captures' },
            { id: 'devil', verb: 'pacifies' }
        ]
    },
    monkey: {
        name: 'monkey',
        symbol: '🐵',
        beats: [
            { id: 'woman', verb: 'progresses to' },
            { id: 'man', verb: 'progresses to' },
            { id: 'tree', verb: 'climbs' },
            { id: 'ant', verb: 'stomps' },
            { id: 'wolf', verb: 'throws feces at' },
            { id: 'sponge', verb: 'stomps' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'moon', verb: 'colonizes' },
            { id: 'air', verb: 'breathes' },
            { id: 'bowl', verb: 'crushes' },
            { id: 'water', verb: 'drinks' },
            { id: 'alien', verb: 'entertains' },
            { id: 'dragon', verb: 'throws feces at' }
        ]
    },
    snake: {
        name: 'snake',
        symbol: '🐍',
        beats: [
            { id: 'monkey', verb: 'poisons' },
            { id: 'woman', verb: 'poisons' },
            { id: 'man', verb: 'poisons' },
            { id: 'tree', verb: 'enwraps' },
            { id: 'ant', verb: 'eats' },
            { id: 'wolf', verb: 'poisons' },
            { id: 'sponge', verb: 'enwraps' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'moon', verb: 'defeats' },
            { id: 'air', verb: 'defeats' },
            { id: 'bowl', verb: 'fits perfectly in' },
            { id: 'water', verb: 'defeats' }
        ]
    },
    axe: {
        name: 'axe',
        symbol: '🪓',
        beats: [
            { id: 'snake', verb: 'splits' },
            { id: 'monkey', verb: 'splits' },
            { id: 'woman', verb: 'splits' },
            { id: 'man', verb: 'splits' },
            { id: 'tree', verb: 'fells' },
            { id: 'ant', verb: 'splits' },
            { id: 'wolf', verb: 'splits' },
            { id: 'sponge', verb: 'splits' },
            { id: 'paper', verb: 'splits' },
            { id: 'moon', verb: 'splits' },
            { id: 'air', verb: 'splits' },
            { id: 'bowl', verb: 'splits' },
        ]
    },
    scissors: {
        name: 'scissors',
        symbol: '✌️',
        beats: [
            { id: 'axe', verb: 'cuts' },
            { id: 'snake', verb: 'cuts' },
            { id: 'monkey', verb: 'entertains' },
            { id: 'woman', verb: 'stabs' },
            { id: 'man', verb: 'stabs' },
            { id: 'tree', verb: 'stabs' },
            { id: 'ant', verb: 'stabs' },
            { id: 'wolf', verb: 'stabs' },
            { id: 'sponge', verb: 'cuts' },
            { id: 'paper', verb: 'cuts' },
            { id: 'moon', verb: 'cuts' },
            { id: 'air', verb: 'defeats' }
        ]
    },
    fire: {
        name: 'fire',
        symbol: '🔥',
        beats: [
            { id: 'scissors', verb: 'melts' },
            { id: 'axe', verb: 'melts' },
            { id: 'snake', verb: 'burns' },
            { id: 'monkey', verb: 'entertains' },
            { id: 'woman', verb: 'burns' },
            { id: 'man', verb: 'burns' },
            { id: 'tree', verb: 'burns' },
            { id: 'ant', verb: 'burns' },
            { id: 'wolf', verb: 'burns' },
            { id: 'sponge', verb: 'burns' },
            { id: 'paper', verb: 'burns' },
            { id: 'moon', verb: 'burns' }
        ]
    },
    sun: {
        name: 'sun',
        symbol: '☀️',
        beats: [
            { id: 'fire', verb: 'consumes' },
            { id: 'scissors', verb: 'melts' },
            { id: 'axe', verb: 'melts' },
            { id: 'snake', verb: 'burns' },
            { id: 'monkey', verb: 'burns' },
            { id: 'woman', verb: 'burns' },
            { id: 'man', verb: 'burns' },
            { id: 'tree', verb: 'burns' },
            { id: 'ant', verb: 'burns' },
            { id: 'wolf', verb: 'burns' },
            { id: 'sponge', verb: 'dries' },
            { id: 'paper', verb: 'burns' }
        ]
    }
}