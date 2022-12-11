import GameDrawer from './drawer.js'
import Hero from './entities/hero.js'
import NPC from './entities/npc.js'

class Game {
    fps = 30
    blockSize = 20
    hero = null
    characterMap = []
    objectMap = []

    keys = {
        65 : { down: false, action: () => this.hero.moveTo('left') },
        68 : { down: false, action: () => this.hero.moveTo('right') },
        83 : { down: false, action: () => this.hero.moveTo('down') },
        87 : { down: false, action: () => this.hero.moveTo('up') },
    }

    defaultCharacterSettings = null
    gameInterval = null
    keydownListener = null
    keyupListener = null

    constructor(config) {
        this.canvas = config.canvas;
        this.ctx = config.ctx;
        this.map = config.map;
        this.objectMap = config.objectMap;
        this.drawer = new GameDrawer({ game: this })

        this.defaultCharacterSettings = {
            game: this,
            width: this.getGridUnit(1),
            height: this.getGridUnit(1)
        }

        this.hero = new Hero({
            ...this.defaultCharacterSettings,
            x: this.getGridUnit(10),
            y: this.getGridUnit(10),
        })

        let npc = new NPC({
            ...this.defaultCharacterSettings,
            x: this.getGridUnit(20),
            y: this.getGridUnit(20),
        })

        this.characterMap.push(npc)

        this.gameInterval = setInterval(this.gameLoop, 1000 / this.fps)

        this.keydownListener = window.addEventListener('keydown', e => e.keyCode in this.keys && (() => this.keys[e.keyCode].down = true)())
        this.keyupListener = window.addEventListener('keyup', e => e.keyCode in this.keys && (() => this.keys[e.keyCode].down = false)())
    }

    gameLoop = () => {
        this.update()
        this.drawer.update()
    }

    update = () => {
        // do pressed keys actions
        for (let key in this.keys) {
            if (this.keys[key].down) {
                this.keys[key].action()
            }
        }
    }

    // HELPERS

    getGridUnit = (value) => {
        return this.blockSize * value
    }

    verifyColision = (character_type, { left, right, top, bottom }, id) => {

        // colision with map limits

        const limits = { top: 0, left: 0, right: this.getGridUnit(this.map[0].length), bottom: this.getGridUnit(this.map.length) }
        if (left < limits.left || right > limits.right || top < limits.top || bottom > limits.bottom) {
            return true
        }

        // colisions between hero|character and objects

        let colision = this.objectMap.filter(obj => !obj.passable).some((obj) => {
            obj.top = this.getGridUnit(obj.gridY)
            obj.right = this.getGridUnit(obj.gridX + (obj.gridW ?? 1))
            obj.bottom = this.getGridUnit(obj.gridY + (obj.gridH ?? 1))
            obj.left = this.getGridUnit(obj.gridX)

            let horizontalIntersec = right > obj.left && left < obj.right
            let verticalIntersec = bottom > obj.top && top < obj.bottom
            return horizontalIntersec && verticalIntersec
        })

        if (colision) return true

        // colisions between hero|character and characters

        colision = this.characterMap.some((chr) => {
            if (character_type === 'character') {
                if (chr.id === id) {
                    return false
                }
            }

            let horizontalIntersec = right > chr.x && left < (chr.x + chr.width)
            let verticalIntersec = bottom > chr.y && top < (chr.y + chr.height)
            return horizontalIntersec && verticalIntersec
        })

        if (colision) return true

        // colisions between character and hero

        if (character_type === 'character') {
            let horizontalIntersec = right > this.hero.x && left < (this.hero.x + this.hero.width)
            let verticalIntersec = bottom > this.hero.y && top < (this.hero.y + this.hero.height)
            colision = horizontalIntersec && verticalIntersec
        }

        return colision
    }
}

export default Game