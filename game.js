class Game {

    fps = 30
    blockSize = 20
    wallColor = '#23395D'
    groundColor = '#BCD2E8'

    characterMap = []
    objectMap = []

    keys = {
        65 : { down: false, action: () => this.hero.moveTo('left') },
        68 : { down: false, action: () => this.hero.moveTo('right') },
        83 : { down: false, action: () => this.hero.moveTo('down') },
        87 : { down: false, action: () => this.hero.moveTo('up') },
    }

    // refs

    hero = null
    gameInterval = null
    keydownListener = null
    keyupListener = null


    /**
     * Map objects expect to looks like that:
     * 
     * ```ts
     * interface MapObject {
     *     type: string,
     *     color: string,
     * }
     * ```
     */
    constructor(config) {
        this.canvas = config.canvas;
        this.ctx = config.ctx;
        this.map = config.map;

        let character = new NPC({
            game: this,
            x: this.getGridUnit(20),
            y: this.getGridUnit(20),
            width: this.getGridUnit(1),
            height: this.getGridUnit(1),
            speed: this.getGridUnit(0.3),

            unrest: 50
        })

        this.characterMap.push(character)

        this.hero = new Hero({
            game: this,
            x: this.getGridUnit(10),
            y: this.getGridUnit(10),
            width: this.getGridUnit(1),
            height: this.getGridUnit(1),
            speed: this.getGridUnit(0.3)
        })

        this.gameInterval = setInterval(this.gameLoop, 1000 / this.fps)

        this.keydownListener = window.addEventListener('keydown', e => e.keyCode in this.keys && (() => this.keys[e.keyCode].down = true)())
        this.keyupListener = window.addEventListener('keyup', e => e.keyCode in this.keys && (() => this.keys[e.keyCode].down = false)())
    }

    gameLoop = () => {
        this.update()
        this.drawMap()
        this.drawCharacter()
    }

    update = () => {
        // do pressed keys actions
        for (let key in this.keys) {
            if (this.keys[key].down) {
                this.keys[key].action()
            }
        }

        this.updateObjectMap()
    }

    // HELPERS

    getGridUnit = (value) => {
        return this.blockSize * value
    }

    // OBJECTS

    updateObjectMap = () => {
        this.objectMap = this.map.reduce((objects, row, y) => {
            let rowObjects = []

            row.forEach((mapBlock, x) => {
                if (mapBlock.type === 'object') {
                    let obj = {
                        ...mapBlock,
                        left: this.getGridUnit(x),
                        top: this.getGridUnit(y),
                        right: this.getGridUnit(x + 1),
                        bottom: this.getGridUnit(y + 1)
                    }

                    rowObjects.push(obj)
                }
            })

            return objects.concat(rowObjects)
        }, [])
    }

    verifyColision = (character_type, { left, right, top, bottom }, id) => {

        // colision with map limits

        const limits = { top: 0, left: 0, right: this.getGridUnit(this.map[0].length), bottom: this.getGridUnit(this.map.length) }
        if (left < limits.left || right > limits.right || top < limits.top || bottom > limits.bottom) {
            return true
        }

        // colisions between hero|character and objects

        let colision = this.objectMap.some((obj) => {
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

    // DRAW

    createRect = ({ x, y, width, height, color }) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height)
    }

    drawMap = () => {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                this.createRect({
                    x: this.getGridUnit(col),
                    y: this.getGridUnit(row),
                    width: this.getGridUnit(1),
                    height: this.getGridUnit(1),
                    color: this.map[row][col].color
                })
            }
        }
    }

    drawCharacter() {
        this.characterMap.map((character) => {
            this.createRect({
                x: character.x,
                y: character.y,
                width: character.width,
                height: character.height,
                color: 'blue'
            })
        })

        this.createRect({
            x: this.hero.x,
            y: this.hero.y,
            width: this.hero.width,
            height: this.hero.height,
            color: 'red'
        })
    }
}




