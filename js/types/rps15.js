// rock paper scissors 15
const RPS15 = {
    rock: {
        name: 'rock',
        symbol: '👊',
        beats: [
            { id: 'fire', verb: 'extinguishes' },
            { id: 'scissors', verb: 'crushes' },
            { id: 'snake', verb: 'kills' },
            { id: 'human', verb: 'kills' },
            { id: 'tree', verb: 'fells' },
            { id: 'wolf', verb: 'kills' },
            { id: 'sponge', verb: 'crushes' }
        ]
    },
    gun: {
        name: 'gun',
        symbol: '🔫',
        beats: [
            { id: 'rock', verb: 'disintegrates' },
            { id: 'fire', verb: 'defeats' },
            { id: 'scissors', verb: 'disintegrates' },
            { id: 'snake', verb: 'shoots' },
            { id: 'human', verb: 'shoots' },
            { id: 'tree', verb: 'fells' },
            { id: 'wolf', verb: 'shoots' }
        ]
    },
    lightning: {
        name: 'lightning',
        symbol: '⚡',
        beats: [
            { id: 'gun', verb: 'melts' },
            { id: 'rock', verb: 'melts' },
            { id: 'fire', verb: 'defeats' },
            { id: 'scissors', verb: 'melts' },
            { id: 'snake', verb: 'electrocutes' },
            { id: 'human', verb: 'tortures' },
            { id: 'tree', verb: 'burns' }
        ]
    },
    devil: {
        name: 'devil',
        symbol: '👿',
        beats: [
            { id: 'lightning', verb: 'bans' },
            { id: 'gun', verb: 'melts' },
            { id: 'rock', verb: 'melts' },
            { id: 'fire', verb: 'eats' },
            { id: 'scissors', verb: 'melts' },
            { id: 'snake', verb: 'tortures' },
            { id: 'human', verb: 'tortures' }
        ]
    },
    dragon: {
        name: 'dragon',
        symbol: '🐲',
        beats: [
            { id: 'devil', verb: 'burns' },
            { id: 'lightning', verb: 'overpowers' },
            { id: 'gun', verb: 'melts' },
            { id: 'rock', verb: 'melts' },
            { id: 'fire', verb: 'inhales' },
            { id: 'scissors', verb: 'melts' },
            { id: 'snake', verb: 'burns' }
        ]
    },
    water: {
        name: 'water',
        symbol: '💦',
        beats: [
            { id: 'dragon', verb: 'drowns' },
            { id: 'devil', verb: 'drowns' },
            { id: 'lightning', verb: 'absorbs' },
            { id: 'gun', verb: 'rusts' },
            { id: 'rock', verb: 'sinks' },
            { id: 'fire', verb: 'extinguishes' },
            { id: 'scissors', verb: 'rusts' }
        ]
    },
    air: {
        name: 'air',
        symbol: '💨',
        beats: [
            { id: 'water', verb: 'evaporates' },
            { id: 'dragon', verb: 'blows away' },
            { id: 'devil', verb: 'blows away' },
            { id: 'lightning', verb: 'defeats' },
            { id: 'gun', verb: 'blows away' },
            { id: 'rock', verb: 'erodes' },
            { id: 'fire', verb: 'extinguishes' }
        ]
    },
    paper: {
        name: 'paper',
        symbol: '✋',
        beats: [
            { id: 'air', verb: 'defeats' },
            { id: 'water', verb: 'pollutes' },
            { id: 'dragon', verb: 'cuts' },
            { id: 'devil', verb: 'cuts' },
            { id: 'lightning', verb: 'defeats' },
            { id: 'gun', verb: 'covers' },
            { id: 'rock', verb: 'covers' }
        ]
    },
    sponge: {
        name: 'sponge',
        symbol: '🧽',
        beats: [
            { id: 'paper', verb: 'erases' },
            { id: 'air', verb: 'defeats' },
            { id: 'water', verb: 'absorbs' },
            { id: 'dragon', verb: 'erases' },
            { id: 'devil', verb: 'erases' },
            { id: 'lightning', verb: 'absorbs' },
            { id: 'gun', verb: 'plugs' }
        ]
    },
    wolf: {
        name: 'wolf',
        symbol: '🐺',
        beats: [
            { id: 'sponge', verb: 'eats' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'air', verb: 'defeats' },
            { id: 'water', verb: 'muddies' },
            { id: 'dragon', verb: 'chases away' },
            { id: 'devil', verb: 'chases away' },
            { id: 'lightning', verb: 'defeats' }
        ]
    },
    tree: {
        name: 'tree',
        symbol: '🌲',
        beats: [
            { id: 'wolf', verb: 'calms' },
            { id: 'sponge', verb: 'dominates' },
            { id: 'paper', verb: 'laughs at' },
            { id: 'air', verb: 'absorbs' },
            { id: 'water', verb: 'absorbs' },
            { id: 'dragon', verb: 'calms' },
            { id: 'devil', verb: 'calms' }
        ]
    },
    human: {
        name: 'human',
        symbol: '🙍',
        beats: [
            { id: 'tree', verb: 'fells' },
            { id: 'wolf', verb: 'hunts' },
            { id: 'sponge', verb: 'stomps' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'air', verb: 'pollutes' },
            { id: 'water', verb: 'pollutes' },
            { id: 'dragon', verb: 'captures' }
        ]
    },
    snake: {
        name: 'snake',
        symbol: '🐍',
        beats: [
            { id: 'human', verb: 'poisons' },
            { id: 'tree', verb: 'enwraps' },
            { id: 'wolf', verb: 'poisons' },
            { id: 'sponge', verb: 'enwraps' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'air', verb: 'defeats' },
            { id: 'water', verb: 'defeats' }
        ]
    },
    scissors: {
        name: 'scissors',
        symbol: '✌️',
        beats: [
            { id: 'snake', verb: 'cuts' },
            { id: 'human', verb: 'stabs' },
            { id: 'tree', verb: 'stabs' },
            { id: 'wolf', verb: 'stabs' },
            { id: 'sponge', verb: 'cuts' },
            { id: 'paper', verb: 'cuts' },
            { id: 'air', verb: 'defeats' }
        ]
    },
    fire: {
        name: 'fire',
        symbol: '🔥',
        beats: [
            { id: 'scissors', verb: 'melts' },
            { id: 'snake', verb: 'burns' },
            { id: 'human', verb: 'burns' },
            { id: 'tree', verb: 'burns' },
            { id: 'wolf', verb: 'burns' },
            { id: 'sponge', verb: 'burns' },
            { id: 'paper', verb: 'burns' }
        ]
    }
}