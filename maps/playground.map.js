import { grass as gr } from '../assets/tiles.js'
import { fence as fn } from '../assets/walls.js'
import { tree as tr } from '../assets/objects.js'

const map = [
    [fn, fn, fn, fn, fn, fn, fn, fn, fn, fn, fn, gr, gr, fn, fn, fn, fn, fn, fn, fn, fn, fn, fn, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, tr, tr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, tr, tr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr],
    [gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, gr, fn],
    [fn, fn, fn, fn, fn, fn, fn, fn, fn, fn, fn, gr, gr, fn, fn, fn, fn, fn, fn, fn, fn, fn, fn, fn],
]

export default map
