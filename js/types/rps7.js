const RPS7 = {
    rock: {
        name: 'rock',
        symbol: '👊',
        beats: [
            { id: 'sponge', verb: 'crushes' },
            { id: 'scissors', verb: 'crushes' },
            { id: 'fire', verb: 'extinguishes' }
        ]
    },
    water: {
        name: 'water',
        symbol: '💦',
        beats: [
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
            { id: 'rock', verb: 'covers' }
        ]
    },
    sponge: {
        name: 'sponge',
        symbol: '🧽',
        beats: [
            { id: 'paper', verb: 'erases' },
            { id: 'air', verb: 'defeats' },
            { id: 'water', verb: 'absorbs' }
        ]
    },
    scissors: {
        name: 'scissors',
        symbol: '✌️',
        beats: [
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
            { id: 'sponge', verb: 'burns' },
            { id: 'paper', verb: 'burns' }
        ]
    }
}