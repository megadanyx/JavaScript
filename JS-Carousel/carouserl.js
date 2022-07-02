// OWL , Slick  , ..... Bootstratp  
// 1. function
// 2. event
// 2. Array ,number , String..
// 3. if/else/ for/while
// 

const IMAGES = [
    "image/253-800x600.jpg",
    "image/615-800x600.jpg",
    "image/971-800x600.jpg",
    "image/1074-800x600.jpg"
]
const EFFECTS =[
            "aanimate__fadeIn",
            "animate__fadeInDown",
            "animate__bounceInLeft",
            "animate__bounceInRight"
]
const TITLE=[
    "Nature",
    "Ocean",
    "Winter",
    "Leon"
]
let currentIndex = 0 // start/current  slide

function showImage(n) {
    let i = Math.round(Math.random()*3)
    carouselSlids.innerHTML = `<img src="${IMAGES[n]}" class="animate__animated ${EFFECTS[i]}"/>`
}

function showTitles(n) {
    caruselTitles.innerHTML = `<h2 class="animate__animated animate__zoomIn">${TITLE[n]}</h2>`
}
function next() {

    if (currentIndex <= IMAGES.length) {
        if (currentIndex == IMAGES.length - 1) {
            currentIndex = 0
            showImage(currentIndex)
            showIndicators(currentIndex)
            showTitles(currentIndex)
        } else {
            // HW2: boundaries/limits - if/else 
            //courentIndex++          // HW3: optimize this lian
            showImage(++currentIndex)// HW3: optimize this lian
            showIndicators(currentIndex)
            showTitles(currentIndex)
        }
    }
}
function prev() {
    if (currentIndex == 0) {
        currentIndex = IMAGES.length - 1
        showImage(currentIndex)
        showIndicators(currentIndex)
        showTitles(currentIndex)
    } else {
        showImage(--currentIndex)
        showIndicators(currentIndex)
        showTitles(currentIndex)
    }
}
function keyTaste() {
    switch (event.key) {
        case "ArrowRight": next(); break
        case "ArrowLeft": prev(); break
    }

}
function showIndicators(n) {
    carouselIndicators.innerHTML = ``
    for (let i = 0; i < IMAGES.length; i++) {
        if (i == n) {
            carouselIndicators.innerHTML += ` ◉ `
        } else {
            carouselIndicators.innerHTML += ` ◎ `
        }
    }
}


// showImage(currentIndex)


function play(){
    setInterval( next, 3000)
}