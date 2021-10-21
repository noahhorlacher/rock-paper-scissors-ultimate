// rock paper scissors lizard spock
const RPSLS = {
    rock: {
        name: 'rock',
        symbol: '👊',
        beats: [
            { id: 'lizard', verb: 'crushes' },
            { id: 'scissors', verb: 'crushes' }
        ]
    },
    scissors: {
        name: 'scissors',
        symbol: '✌️',
        beats: [
            { id: 'paper', verb: 'cuts' },
            { id: 'lizard', verb: 'decapitates' }
        ]
    },
    spock: {
        name: 'spock',
        symbol: '🖖',
        beats: [
            { id: 'rock', verb: 'vaporizes' },
            { id: 'scissors', verb: 'smashes' }
        ]
    },
    lizard: {
        name: 'lizard',
        symbol: '🤏',
        beats: [
            { id: 'paper', verb: 'eats' },
            { id: 'spock', verb: 'poisons' }
        ]
    },
    paper: {
        name: 'paper',
        symbol: '✋',
        beats: [
            { id: 'rock', verb: 'covers' },
            { id: 'spock', verb: 'disproves' }
        ]
    }
}