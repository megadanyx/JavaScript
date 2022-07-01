
let pac_x = 3
let pac_y = 10

let coin_x = parseInt(1 + Math.random() * 9)
let coin_y = parseInt(1 + Math.random() * 9)

let bomb_x = 3
let bomb_y = 3


let score = 0
let health = 100

function action() {
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp":
            if (pac_y > 1) {
                pac_y--
            }
            break

        case "ArrowRight":
            if (pac_x < 10) {
                pac_x++
            }
            break
        case "ArrowDown":
            if (pac_y < 100) {
                pac_y++
            }

            break
        case "ArrowLeft":
            if (pac_x > 1) {
                pac_x--
            }
            break

    }

    if (pac_x == coin_x && pac_y == coin_y) {
        if (score < 100 && score >= 0) {
            score += 10
            coin_x = parseInt(1 + Math.random() * 9)
            coin_y = parseInt(1 + Math.random() * 9)
        } else if (score == 100) {
            coin_x = parseInt(1 + Math.random() * 9)
            coin_y = parseInt(1 + Math.random() * 9)
            alert(`You have maxim score ${score}`)
        }
    }
    if (pac_x == bomb_x && pac_y == bomb_y) {
        if (health <= 100 && health > 0) {
            health -= 10
            bomb_x = parseInt(1 + Math.random() * 9)
            bomb_y = parseInt(1 + Math.random() * 9)
        } else{
            alert(`Game Over`)
            
        }
    }
        renderMap()
   
}


    function renderMap() {
        gameMap.innerHTML = ``
        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 10; x++) {
                if (pac_x == x && pac_y == y) {
                    gameMap.innerHTML +=
                        `<div class="pac"></div>`
                } else if (coin_x == x && coin_y == y) {
                    gameMap.innerHTML +=
                        `<div class="coin"></div>`
                } else if (bomb_x == x && bomb_y == y) {
                    gameMap.innerHTML +=
                        `<div class="bomb"></div>`

                } else {
                    gameMap.innerHTML +=
                        `<div class=""></div>`
                }
            }
        }
        gameScore.innerHTML = `<h3><br><hr>Score: ${score} <> Health: ${health}</h3> `
    }






// # HW1: add limits (1,10)
// # HW2: add bomb(-20),add hp (health points) 0..100
// # HW3: coint , bomb = coin_state ,bomb_state - false/true <
// # HW4: add more coins and bombs
// # HW5: add random coords