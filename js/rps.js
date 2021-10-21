// relevant HTML elements
const UI = {
    stats: document.querySelector('#winstats'),
    you: document.querySelector('you'),
    opponent: document.querySelector('opponent'),
    types: document.querySelector('#gametype'),
    actiontxt: document.querySelector('#action')
}

// reset game if game type changes
UI.types.addEventListener('change', init)

// losses, ties and wins counter
let state

// current game type
let gametype

// valid game types
const GAMETYPES = {
    rps: RPS,
    rpsls: RPSLS,
    rps7: RPS7,
    rps9: RPS9,
    rps11: RPS11,
    rps15: RPS15,
    rps25: RPS25,
    rps101: RPS101
}

// reset and initialize game
function init() {
    // reset state and UI
    state = [0, 0, 0]
    UI.you.querySelectorAll('btn')?.forEach(e => e.remove())

    // set game type
    gametype = GAMETYPES[UI.types.value]

    // inject buttons
    Object.keys(gametype).forEach(key => {
        let b = document.createElement('btn')
        b.innerText = gametype[key].symbol
        UI.you.append(b)
        b.addEventListener('click', e => match(key))
    })

    UI.stats.innerText = `Wins: 0, Losses: 0, Ties: 0`
    UI.opponent.innerText = '👽'
    UI.actiontxt.innerText = 'New Game.\nChoose a game type:'
}

// check if win, loss or tie
function match(you) {
    // random opponent selection
    let opponent = Object.keys(gametype)[Math.floor(Math.random() * Object.keys(gametype).length)]
    let res, actiontxt

    // check if lost, tie or won
    if (you == opponent) {
        res = 1 // tie
        actiontxt = `Tie!\nYour ${gametype[you].name} ties opponents ${gametype[opponent].name}.`
    } else if (gametype[you].beats.some(b => b.id == opponent)) {
        res = 2 // win
        actiontxt = `You won!\nYour ${gametype[you].name} ${gametype[you].beats.find(e => e.id == opponent).verb} opponents ${gametype[opponent].name}.`
    } else {
        res = 0
        actiontxt = `You lost!\nOpponents ${gametype[opponent].name} ${gametype[opponent].beats.find(e => e.id == you).verb} your ${gametype[you].name}.`
    }
    state[res]++

    // update UI
    UI.stats.innerText = `Wins: ${state[2]}, Losses: ${state[0]}, Ties: ${state[1]}`
    UI.opponent.innerText = gametype[opponent].symbol
    UI.actiontxt.innerText = actiontxt
}

init()