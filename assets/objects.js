
let sizednull = null

export const bush = {
    id: 'tree-object',
    type: 'object',
    color: 'green',
    gridW: 1,
    gridH: 1,
    passable: true,
    map: [
        [sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull, sizednull],
        [sizednull, '#276517', '#276517', '#276517', '#276517', '#276517', sizednull, sizednull],
        [sizednull, '#276517', '#276517', '#276517', '#276517', '#276517', '#276517', sizednull],
        [sizednull, '#276517', '#276517', '#276517', '#276517', '#276517', '#276517', '#276517'],
        ['#276517', '#276517', '#276517', '#276517', '#276517', '#276517', '#276517', '#276517'],
        ['#276517', '#276517', '#276517', '#276517', '#276517', '#276517', '#276517', '#276517'],
        ['#276517', '#276517', '#276517', '#276517', '#276517', '#276517', '#276517', '#276517'],
        [sizednull, '#276517', '#276517', '#276517', '#276517', '#276517', '#276517', sizednull],
    ]
}

/**
 * Objects are a single size item that can be a state assigned to itself
 */
const objects = {
    bush
}

export default objects
