export const fence = {
    id: 'fence-wall',
    type: 'wall',
    color: '#23395D',
    sidemap: []
}

/**
 * Walls are a special case of objects, which has only a 50% side of map described, and this side can be print up to 4 times,
 * accounding to which sides of walls are connected with another same-id wall block
 */
const walls = {
    fence
}

export default walls
