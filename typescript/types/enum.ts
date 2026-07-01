// ennumerations (enum)

enum Direction {
    Up,
    Down,
    Left,
    Right
}

// usage of the enum
const myDirection: Direction = Direction.Up

console.log(myDirection)

// enums in function
function setDirection(direction: Direction) {
    console.log("you are heading" +direction)
}

setDirection(Direction.Down)