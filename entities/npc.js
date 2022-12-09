class NPC extends Character {
    constructor({
        game, x, y, width, height, speed,
        unrest = 1
    }) {
        super({ game, x, y, width, height, speed })

        this.unrestInterval = setInterval(this.manifestAgitation, 1000 / unrest)
    }

    manifestAgitation = () => {
        let mustDo = Math.round((Math.random()))
        if (mustDo) {
            let directions = ['left', 'right', 'up', 'down']
            let choosenDirection = directions[Math.floor(Math.random() * directions.length)]
            this.moveTo(choosenDirection)
        }
    }
}