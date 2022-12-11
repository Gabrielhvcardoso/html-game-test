class GameDrawer {
    wallBlocks = null

    constructor(config) {
        this.game = config.game
    }
    
    update = () => {
        this.drawMap()
        this.drawWalls()
        this.drawObjects()
        this.drawCharacters()
    }

    //

    createRect = ({ x, y, width, height, color }) => {
        this.game.ctx.fillStyle = color;
        this.game.ctx.fillRect(x, y, width, height)
    }

    drawBlock = (block, gridX, gridY, gridW = 1, gridH = 1) => {
        // detailed block
        if (block.map?.length) {
            let blockMap = block.map;

            ((_, colIndex) => block.map.map(row => row[colIndex]))

            let blockRows = blockMap.length
            let blockCols = Math.max(...blockMap.map(mapRow => mapRow.length))

            let blockPointWidth = this.game.getGridUnit(gridW) / blockCols
            let blockPointHeight = this.game.getGridUnit(gridH) / blockRows

            for (let i = 0; i < blockRows; i++) {
                let yOffset = blockPointHeight * (i)

                for (let j = 0; j < blockCols; j++) {
                    let xOffset = blockPointWidth * (j)

                    let blockPointColor = blockMap[i][j]

                    if (blockPointColor != null) {
                        this.createRect({
                            x: this.game.getGridUnit(gridX) + xOffset,
                            y: this.game.getGridUnit(gridY) + yOffset,
                            width: blockPointWidth,
                            height: blockPointHeight,
                            color: blockPointColor
                        })
                    }
                }
            }
        }

        // solid color block
        else if (block.color) {
            this.createRect({
                x: this.game.getGridUnit(gridX),
                y: this.game.getGridUnit(gridY),
                width: this.game.getGridUnit(gridW),
                height: this.game.getGridUnit(gridH),
                color: block.color
            })
        }

        // exception
        else {
            throw Error(`Map Block ${block.id} does not have suficient properties`)
        }
    }

    // Map

    drawMap = () => {
        for (let row = 0; row < this.game.map.length; row++) {
            for (let col = 0; col < this.game.map[row].length; col++) {
                let mapBlock = this.game.map[row][col]
                this.drawBlock(mapBlock, col, row)
            }
        }
    }

    // Objects

    drawObjects = () => {
        let objects = this.game.objectMap.filter(object => object.type === 'object');
        objects.forEach((item) => {
            let { gridX, gridY, gridW, gridH, ...block } = item
            this.drawBlock(block, gridX, gridY, gridW, gridH)
        })
    }

    // Walls

    getWallBlocks = () => {
        let wallList = this.game.objectMap.filter(object => object.type === 'wall');

        let wallBlocks = wallList.map((item, _, array) => {
            let { maps, ...block } = item

            let top = array.some(({ id, gridX, gridY }) => id === item.id && gridY === item.gridY - 1 && gridX === item.gridX)
            let right = array.some(({ id, gridX, gridY }) => id === item.id && gridY === item.gridY && gridX === item.gridX + 1)
            let bottom = array.some(({ id, gridX, gridY }) => id === item.id && gridY === item.gridY + 1 && gridX === item.gridX)
            let left = array.some(({ id, gridX, gridY }) => id === item.id && gridY === item.gridY && gridX === item.gridX - 1)

            block.map = []

            for (let i = 0; i < maps.top.length; i++) {
                block.map[i] = []
                for (let j = 0; j < maps.top[0].length; j++) {
                  block.map[i][j] = (bottom ? maps.bottom[i][j] : null)
                                 ?? (left ? maps.left[i][j] : null)
                                 ?? (right ? maps.right[i][j] : null)
                                 ?? (top ? maps.top[i][j] : null)
                }
            }

            return block
        })

        return wallBlocks
    }

    drawWalls = () => {
        if (this.wallBlocks === null)
            this.wallBlocks = this.getWallBlocks()

        this.wallBlocks.forEach((item) => {
            let { gridX, gridY, ...block } = item

            this.drawBlock(block, gridX, gridY, 1, 1)
        })
    }

    // Characters

    drawCharacters = () => {
        if (this.game.hero) {
            this.createRect({
                x: this.game.hero?.x,
                y: this.game.hero?.y,
                width: this.game.hero.width,
                height: this.game.hero.height,
                color: 'red'
            })
        }

        this.game.characterMap.map((character) => {
            this.createRect({
                x: character.x,
                y: character.y,
                width: character.width,
                height: character.height,
                color: 'blue'
            })
        })
    }
}

export default GameDrawer