import Game from './game.js'
import MapConfig from './maps/playground.map.js'

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let game = new Game({
    canvas,
    ctx,
    map: MapConfig.map,
    objectMap: MapConfig.objectMap
})
