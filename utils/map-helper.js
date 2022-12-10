class MapHelper {
    static distanceBetween = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
        let x = x2 - x1
        let y = y2 - y1
        return Math.sqrt(x * x + y * y)
    }
}