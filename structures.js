class QuadStructure{
	constructor(points) {
		this.points = points // [topLeft, topRight, bottomRight, bottomLeft]
	}

	static regular(center, size) {
		let relativePostions = [createVector(-size/2, -size/2), createVector(size/2, -size/2), createVector(size/2, size/2), createVector(-size/2, size/2)]
		let points = []

		for (let index = 0; index < relativePostions.length; index++) {
			const point = p5.Vector.add(center, relativePostions[index])
			points.push(point)
		}
		
		return new QuadStructure(points)
	}

	static noisy(center, size, vertexNoiseRatio=0.5, translationNoiseRatio=1) {
		let translationMagnitude = random(translationNoiseRatio) * size
		let translatedCenter = center.add(p5.Vector.random2D().mult(translationMagnitude))

		quad = QuadStructure.regular(translatedCenter, size)

		for (let index = 0; index < 4; index++) {
			let noiseMagnitude = random(vertexNoiseRatio) * size
			quad.points[index].add(p5.Vector.random2D().mult(noiseMagnitude))
		}

		return quad
	}

	render(layer) {
		layer.quad(this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y,
			this.points[2].x, this.points[2].y, this.points[3].x, this.points[3].y)
	}
}