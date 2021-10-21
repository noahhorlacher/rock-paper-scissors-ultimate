// classic rock paper scissors
const RPS = {
    rock: {
        name: 'rock',
        symbol: '👊',
        beats: [{
            id: 'scissors',
            verb: 'crushes',
        }]
    },
    scissors: {
        name: 'scissors',
        symbol: '✌️',
        beats: [{
            id: 'paper',
            verb: 'cuts'
        }]
    },
    paper: {
        name: 'paper',
        symbol: '✋',
        beats: [{
            id: 'rock',
            verb: 'covers'
        }]
    }
}