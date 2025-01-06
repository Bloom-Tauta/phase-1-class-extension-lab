// Your code here
class Polygon {
    constructor(sides) {
        this.side = sides
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
        return this.side.reduce((a,b) => a+b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        return this.countSides === 3 && this.side.every(s => s === this.side[0])
    }
}

class Square extends Polygon {
    get isValid() {
        return this.countSides === 4 && this.side.every(s => s === this.side[0])
    }

    get area() {
        return this.side[0] ** 2
    }
}

let shape2 = new Square([2,2,7,2])
console.log(shape2.isValid)
