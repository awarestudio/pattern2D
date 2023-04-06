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

        return new Line2D(points)
    }
}

class Grid2D extends Pattern2D {
    static fromTwoVertices(topLeft, bottomRight, vNum, hNum) {
        let bottomLeft = createVector(topLeft.x, bottomRight.y)
        
        let [xArray, xStep] = linspace(topLeft.x, bottomRight.x, hNum, true, true)
        let [yArray, yStep] = linspace(topLeft.y, bottomLeft.y, vNum, true, true)
        
        let points = []
        for (let yIndex = 0; yIndex < vNum; yIndex++) {
            let xPoints = []
            for (let xIndex = 0; xIndex < hNum; xIndex++) {
                xPoints.push(createVector(xArray[xIndex], yArray[yIndex]))
            }
            points.push(xPoints)
        }

        let grid = new Grid2D(points)
        grid.xStep = xStep
        grid.yStep = yStep
        return grid
    }

    debug(size=1) {
        for (let yIndex = 0; yIndex < this.points.length; yIndex++) {
            let xPoints = this.points[yIndex]
            for (let xIndex = 0; xIndex < xPoints.length; xIndex++) {
                ellipse(this.points[yIndex][xIndex].x, this.points[yIndex][xIndex].y, size)
            }
        }
    }
}
