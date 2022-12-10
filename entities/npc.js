import Character from './character.js'

class NPC extends Character {
    constructor({ game, x, y, width, height, speed, unrest = .5 }) {
        super({ game, x, y, width, height, speed, unrest })
    }
}

export default NPC