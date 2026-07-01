//literal type in TS
let direction: "left" | "right" | "up" | "down"
direction = "left"
direction = "right"
// direction = "nort" // error:Type '"nort"' is not assignable to type '"left" | "right" | "up" | "down"'.

function move(distance: number, direction: "left" | "right" | "up" | "down") {
    console.log(distance, direction);
}

move(10, "left")



