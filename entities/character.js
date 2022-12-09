class Character extends BaseEntity {
    constructor({ character_type = 'character', game, x, y, width, height, speed }) {
        super()
        this.game = game
        this.character_type = character_type
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
    }

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

    getMapX = () => this.x * game.blockSize
    getMapY = () => this.y * game.blockSize
}