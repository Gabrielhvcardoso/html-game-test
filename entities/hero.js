import Character from './character.js'

class Hero extends Character {
    static character_type = 'hero'

    constructor({ game, x, y, width, height, speed }) {
        super({ game, x, y, width, height, speed, character_type: Hero.character_type })
    }
}

export default Hero
