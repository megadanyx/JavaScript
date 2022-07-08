const N_FLAKES = 20
let snowstatus = true

flakes_x = []

flakes_y = []

function generatoCoords() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_x[i] = parseInt(Math.random() * 500)
        flakes_y[i] = -parseInt(Math.random() * 500)
    }
}


function drowFlake(i) {
    snowContainer.innerHTML += `
    <div 
    class="flake" 
    style="
    left: ${flakes_x[i]}px;
    top: ${flakes_y[i]}px;
    "
    >
    </div>`
}


function drawAllFlakes() {
    snowContainer.innerHTML = ``
    for (let i = 0; i < N_FLAKES; i++) {
        drowFlake(i)
    }
}

function fall() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_y[i] += 5
        if (flakes_y[i] > 500) {
            flakes_y[i] = -parseInt(Math.random() * 500)
        }
    }
    drawAllFlakes()
}
generatoCoords()

// HW : finishing function stop() ---> first click stop second click start snow

function stop() {
    if (snowstatus) {
        snowstatus = false
        clearInterval(fallTimer)
    }else{
        snowstatus = true
        fallTimer = setInterval(fall, 20)
    }

}
let fallTimer = setInterval(fall, 20)