let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let blocks = {
    wall: {
        type: 'object',
        color: '#23395D'
    },

    ground: {
        type: 'tile',
        color: '#BCD2E8'
    },

    tree: {
        type: 'object',
        color: 'green'
    }
}

let map = [
    [blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall,   blocks.wall, blocks.wall, blocks.wall, 0, 0, blocks.wall, blocks.wall, blocks.wall,   blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.tree, blocks.tree, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.tree, blocks.tree, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground],
    [blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground,   blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.ground, blocks.wall],
    [blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall,   blocks.wall, blocks.wall, blocks.wall, 0, 0, blocks.wall, blocks.wall, blocks.wall,   blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall, blocks.wall],
]

game = new Game({
    canvas,
    ctx,
    map
})
