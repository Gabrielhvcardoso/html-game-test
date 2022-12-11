class MapHelper {
    static distanceBetween = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
        let x = x2 - x1
        let y = y2 - y1
        return Math.sqrt(x * x + y * y)
    }

    static randomBlockMapRotation = (map) => {
        let rotationsNum = RandomHelper.randomIntFromInterval(0, 3)
        if (rotationsNum > 0) {
            for (let i = 0; i < rotationsNum; i++) {
                map = map[0].map((_, colIndex) => map.map(row => row[colIndex]))
            }
        }
        return map
    }
}