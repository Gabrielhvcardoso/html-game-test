import BaseEntity from "./entity.js"

class Character extends BaseEntity {
    unrest = false
    unrestInterval = null

    constructor({ game, x, y, width, height, character_type = 'character', speed = 0.3, unrest = null }) {
        super()
        this.game = game
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.character_type = character_type
        this.speed = this.game.getGridUnit(speed)

        // standing
        this.setUnrest(unrest)
    }

    setUnrest(next) {
        this.unrest = next

        if (this.unrest) {
            this.unrestInterval = setInterval(this.manifestAgitation, 1000 / this.unrest)
        } else {
            clearInterval(this.unrestInterval)
            this.unrestInterval = null
        }
    }

    // actions

    moveTo(direction) {
        let nextPosition = { x: this.x, y: this.y }

        switch(direction) {
            case 'left':
                nextPosition.x -= this.speed
                break
            case 'right':
                nextPosition.x += this.speed
                break
            case 'up':
                nextPosition.y -= this.speed
                break
            case 'down':
                nextPosition.y += this.speed
                break
        }

        let characterAnchors = { left: nextPosition.x, top: nextPosition.y, right: nextPosition.x + this.width, bottom: nextPosition.y + this.height }
        let colision = this.game.verifyColision(this.character_type, characterAnchors, this.id)

        if (!colision) {
            this.x = nextPosition.x
            this.y = nextPosition.y
        }
    }

    manifestAgitation = () => {
        if (!this.anger) {
            let mustDo = Math.round((Math.random()))
            if (mustDo) {
                let directions = ['left', 'right', 'up', 'down']
                let choosenDirection = directions[Math.floor(Math.random() * directions.length)]
                this.moveTo(choosenDirection)
            }
        } 
    }
}

export default Character
