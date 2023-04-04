class Pattern2D {
    constructor(points) {
        this.points = points
    }

    static fromPoints(points) {
        return new Pattern2D(points)
    }

    debug(size=1) {
        for (let index = 0; index < this.points.length; index++) {
            ellipse(this.points[index].x, this.points[index].y, size)
        }
    }
}

class Line2D extends Pattern2D {
    static fromTwoPoints(start, end, num) {
        let xArray = linspace(start.x, end.x, num, true)
        let yArray = linspace(start.y, end.y, num, true)

        let points = []
        for (let index = 0; index < num; index++) {
            points[index] = createVector(xArray[index], yArray[index])
        }

        return this.fromPoints(points)
    }
}