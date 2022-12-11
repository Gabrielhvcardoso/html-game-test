let sizednull = null

export const fence = {
    id: 'fence-wall',
    type: 'wall',
    passable: false,
    maps: {
        top: [
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
        ],

        right: [
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, '#58361C', sizednull, '#58361C', sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', '#58361C', '#58361C', '#58361C'],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', '#58361C', '#58361C', '#58361C'],
            [sizednull, sizednull, sizednull, sizednull, '#58361C', sizednull, '#58361C', sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
        ],

        left: [
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            ['#58361C', sizednull, '#58361C', sizednull, '#58361C', sizednull, sizednull, sizednull],
            ['#58361C', '#58361C', '#58361C', '#58361C', '#58361C', sizednull, sizednull, sizednull],
            ['#58361C', '#58361C', '#58361C', '#58361C', '#58361C', sizednull, sizednull, sizednull],
            ['#58361C', sizednull, '#58361C', sizednull, '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
        ],

        bottom: [
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
            [sizednull, sizednull, sizednull, '#58361C', '#58361C', sizednull, sizednull, sizednull],
        ]
    }
}

/**
 * Walls are also objects but them have only a 50% side of map described, and this side can be print up to 4 times,
 * accounding to which sides of walls are connected with another same-id wall block
 * Thinking about a square object, a sidemap is only the top left and top right sides.
 */
const walls = {
    fence
}

export default walls
