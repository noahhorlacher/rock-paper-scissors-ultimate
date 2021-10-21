const RPS11 = {
    rock: {
        name: 'rock',
        symbol: '👊',
        beats: [
            { id: 'fire', verb: 'extinguishes' },
            { id: 'scissors', verb: 'crushes' },
            { id: 'human', verb: 'kills' },
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
            { id: 'human', verb: 'shoots' },
            { id: 'wolf', verb: 'shoots' }
        ]
    },
    devil: {
        name: 'devil',
        symbol: '👿',
        beats: [
            { id: 'gun', verb: 'melts' },
            { id: 'rock', verb: 'melts' },
            { id: 'fire', verb: 'eats' },
            { id: 'scissors', verb: 'melts' },
            { id: 'human', verb: 'tortures' }
        ]
    },
    water: {
        name: 'water',
        symbol: '💦',
        beats: [
            { id: 'devil', verb: 'drowns' },
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
            { id: 'devil', verb: 'blows away' },
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
            { id: 'devil', verb: 'cuts' },
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
            { id: 'devil', verb: 'erases' },
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
            { id: 'devil', verb: 'chases away' }
        ]
    },
    human: {
        name: 'human',
        symbol: '🙍',
        beats: [
            { id: 'wolf', verb: 'hunts' },
            { id: 'sponge', verb: 'stomps' },
            { id: 'paper', verb: 'crumbles' },
            { id: 'air', verb: 'pollutes' },
            { id: 'water', verb: 'pollutes' }
        ]
    },
    scissors: {
        name: 'scissors',
        symbol: '✌️',
        beats: [
            { id: 'human', verb: 'stabs' },
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
            { id: 'human', verb: 'burns' },
            { id: 'wolf', verb: 'burns' },
            { id: 'sponge', verb: 'burns' },
            { id: 'paper', verb: 'burns' }
        ]
    }
}