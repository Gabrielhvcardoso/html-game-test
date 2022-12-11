export const grass = {
    id: 'grass-tile',
    type: 'tile',
    map: [
        ['#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63'],
        ['#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#6EB95B', '#7ACB63'],
        ['#7ACB63', '#7ACB63', '#6EB95B', '#7ACB63', '#7ACB63', '#6EB95B', '#7ACB63', '#7ACB63'],
        ['#7ACB63', '#7ACB63', '#6EB95B', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63'],
        ['#7ACB63', '#7ACB63', '#7ACB63', '#6EB95B', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63'],
        ['#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63'],
        ['#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#6EB95B', '#7ACB63'],
        ['#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63', '#7ACB63'],
    ]
}

export const dirty_path = {
    id: 'dirty-path-tile',
    type: 'tile',
    map: [
        ['#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490'],
        ['#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#AFB688', '#BBC490'],
        ['#BBC490', '#BBC490', '#AFB688', '#BBC490', '#BBC490', '#AFB688', '#BBC490', '#BBC490'],
        ['#BBC490', '#BBC490', '#AFB688', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490'],
        ['#BBC490', '#BBC490', '#BBC490', '#AFB688', '#BBC490', '#BBC490', '#BBC490', '#BBC490'],
        ['#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490'],
        ['#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#AFB688', '#BBC490'],
        ['#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490', '#BBC490'],
    ]
}

/**
 * Tiles are a simple ground block where we can place things or move around
 */
const tiles = {
    grass,
    dirty_path
}

export default tiles
