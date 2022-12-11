import { grass as gr, dirty_path as dp } from '../assets/tiles.js'
import { fence } from '../assets/walls.js'
import { bush } from '../assets/objects.js'

let r = (tile) => tile.map?.length
    ? { ...tile, map: MapHelper.randomBlockMapRotation(tile.map) }
    : tile

const map = [
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr)],
    [r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp)],
    [r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp), r(dp)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
    [r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(gr), r(dp), r(dp), r(gr), r(gr), r(gr), r(gr)],
]

const objectMap = [

    // Arbusto
    { ...bush, gridX: 3.0, gridY: 6.0 },
    { ...bush, gridX: 1.0, gridY: 4.0 },
    { ...bush, gridX: 1.8, gridY: 3.8 },
    { ...bush, gridX: 2.3, gridY: 4.4 },
    { ...bush, gridX: 3.6, gridY: 4.8 },
    { ...bush, gridX: 2.8, gridY: 4.0 },
    { ...bush, gridX: 3.2, gridY: 3.3 },
    { ...bush, gridX: 2.0, gridY: 3.0 },
    { ...bush, gridX: 4.0, gridY: 4.0 },

    // Cerca
    { ...fence, gridX: 14, gridY: 1 },
    { ...fence, gridX: 14, gridY: 2 },
    { ...fence, gridX: 14, gridY: 3 },
    { ...fence, gridX: 14, gridY: 4 },
    { ...fence, gridX: 14, gridY: 5 },
    { ...fence, gridX: 14, gridY: 6 },
    { ...fence, gridX: 14, gridY: 7 },
    { ...fence, gridX: 14, gridY: 8 },
    { ...fence, gridX: 14, gridY: 9 },

    { ...fence, gridX: 15, gridY: 1 },
    { ...fence, gridX: 16, gridY: 1 },
    { ...fence, gridX: 17, gridY: 1 },
    { ...fence, gridX: 18, gridY: 1 },
    { ...fence, gridX: 19, gridY: 1 },
    { ...fence, gridX: 20, gridY: 1 },
    { ...fence, gridX: 21, gridY: 1 },
    { ...fence, gridX: 22, gridY: 1 },

    { ...fence, gridX: 22, gridY: 1 },
    { ...fence, gridX: 22, gridY: 2 },
    { ...fence, gridX: 22, gridY: 3 },
    { ...fence, gridX: 22, gridY: 4 },
    { ...fence, gridX: 22, gridY: 5 },
    { ...fence, gridX: 22, gridY: 6 },
    { ...fence, gridX: 22, gridY: 7 },
    { ...fence, gridX: 22, gridY: 8 },
    { ...fence, gridX: 22, gridY: 9 },

    { ...fence, gridX: 15, gridY: 9 },
    { ...fence, gridX: 18, gridY: 9 },
    { ...fence, gridX: 19, gridY: 9 },
    { ...fence, gridX: 20, gridY: 9 },
    { ...fence, gridX: 21, gridY: 9 },

]

export default { map, objectMap }
