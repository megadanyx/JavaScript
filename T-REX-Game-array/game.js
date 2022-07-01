/// Legend:
// 0 - empty
// 1 - t-rex
//  2 - cactus


// HW1 : finish left movement
// HW2 : boundaries

let gameMap = [0, 0, 0, 0, 1, 0, 0, 0, 2, 0]
let ti = 4
let cactus = 8
let dir = "left"
function drawMap() {
    m.innerHTML = ``
    for (let i = 0; i < gameMap.length; i++) {
        if (gameMap[i] == 0) {
            m.innerHTML += `<div class=""></div>`
        } else if (gameMap[i] == 2) {
            m.innerHTML += `<div class="cactus"></div>`
        } else if (gameMap[i] == 1) {
            m.innerHTML += `<div class="t-rex ${dir}"></div>`
        }
    }
}


function action() {

    switch (event.key) {
        case "ArrowLeft":
            if (ti !=0) {
                gameMap[ti] = 0
                ti--
                gameMap[ti] = 1
                dir = "left"
                drawMap()

            }
            if (ti == cactus){
                cactus = parseInt(1 + Math.random() * 9)
                gameMap[cactus] = 2
            }
            break
        case "ArrowRight":
            if (ti+1 != gameMap.length){
                gameMap[ti] = 0
                ti++
                gameMap[ti] = 1
                dir = "right"
                drawMap()
            }
            if (ti == cactus){
                cactus = parseInt(1 + Math.random() * 9)
                gameMap[cactus] = 2
            }
            break
    }


}
