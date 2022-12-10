import Game from './game.js'
import map from './maps/playground.map.js'

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let game = new Game({
    canvas,
    ctx,
    map
})
